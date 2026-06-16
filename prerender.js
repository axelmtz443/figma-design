// prerender.js
import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllSlugs } from './src/lib/sanityQueries.node.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  // Obtener slugs dinámicos desde Sanity
  let dynamicRoutes = [];
  try {
    console.log('📡 Obteniendo slugs desde Sanity...');
    dynamicRoutes = await getAllSlugs();
    console.log(`✅ Obtenidos ${dynamicRoutes.length} slugs desde Sanity`);
  } catch (error) {
    console.error('⚠️ No se pudo conectar con Sanity:', error.message);
    console.log('ℹ️ Continuando con rutas fijas solamente');
  }

  const routes = [
    '/',
    '/nosotros',
    '/servicios',
    '/servicios/branding',
    '/servicios/audiovisual',
    '/servicios/consultoriademarketing',
    '/servicios/marketing-digital',
    '/servicios/investigacion-de-mercados',
    '/blog',
    '/contact',
    ...dynamicRoutes
  ];

  console.log(`📋 Total de rutas a prerenderizar: ${routes.length}`);

  const distPath = path.join(__dirname, 'dist');
  try {
    await fs.access(distPath);
  } catch {
    console.error('❌ Carpeta "dist" no encontrada. Ejecuta "npm run build" primero.');
    process.exit(1);
  }

  console.log('🚀 Iniciando servidor de preview...');
  const preview = spawn('npx', ['vite', 'preview', '--port', '4173', '--host', 'localhost'], {
    stdio: 'pipe',
    shell: true,
  });

  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log('✅ Servidor corriendo en http://localhost:4173');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();

  // Desactivar recursos externos para acelerar
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const resourceType = req.resourceType();
    if (['image', 'media', 'font'].includes(resourceType) && !req.url().includes('localhost')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  page.on('pageerror', error => {
    console.error(`💥 ERROR DE JS EN LA PÁGINA:`, error.message);
  });

  page.setDefaultNavigationTimeout(15000);

  for (const route of routes) {
    console.log(`📄 Prerenderizando ${route}`);
    const url = `http://localhost:4173${route}`;

    try {
      await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 15000
      });

      await new Promise(resolve => setTimeout(resolve, 1500));

      const html = await page.content();

      let filePath = route === '/'
        ? path.join(distPath, 'index.html')
        : path.join(distPath, `${route}.html`);

      if (route.includes('/') && route !== '/') {
        const dir = path.dirname(filePath);
        await fs.mkdir(dir, { recursive: true });
      }
      await fs.writeFile(filePath, html);
      console.log(`✅ Guardado: ${filePath}`);
    } catch (err) {
      console.error(`⚠️ Error en ${route}: ${err.message}`);
      // Intentar guardar lo que haya
      try {
        const html = await page.content();
        let filePath = route === '/' ? path.join(distPath, 'index.html') : path.join(distPath, `${route}.html`);
        if (route.includes('/') && route !== '/') await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, html);
        console.log(`✅ Guardado (contingencia): ${filePath}`);
      } catch (innerErr) {
        console.error(`❌ No se pudo guardar ${route}:`, innerErr.message);
      }
    }
  }

  await browser.close();
  preview.kill();
  console.log('🎉 Prerenderizado completado exitosamente.');
}

prerender().catch(console.error);