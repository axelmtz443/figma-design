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
    '/portafolio',
    '/portafolio/investigacion-de-mercado',
    '/portafolio/marketing-digital',
    '/portafolio/branding',
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

  const IGNORED_ERRORS = ['initMap', '_xdc_', 'maps.googleapis'];
  page.on('pageerror', error => {
    if (IGNORED_ERRORS.some(s => error.message.includes(s))) return;
    console.error(`💥 ERROR DE JS EN LA PÁGINA:`, error.message);
  });

  page.setDefaultNavigationTimeout(15000);

  const total = routes.length;
  const startTime = Date.now();
  let errors = 0;

  const renderProgress = (current, currentRoute) => {
    const width = 30;
    const pct = current / total;
    const filled = Math.round(width * pct);
    const bar = '█'.repeat(filled) + '░'.repeat(width - filled);
    const elapsed = (Date.now() - startTime) / 1000;
    const eta = current > 0 ? (elapsed / current) * (total - current) : 0;
    const label = currentRoute.length > 38 ? currentRoute.slice(0, 35) + '...' : currentRoute;
    const line = `\r🚧 [${bar}] ${current}/${total} (${Math.round(pct * 100)}%) │ ⏱ ${elapsed.toFixed(0)}s │ ETA ${eta.toFixed(0)}s │ ${label}`.padEnd(120);
    process.stdout.write(line);
  };

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    renderProgress(i, route);
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
    } catch (err) {
      errors++;
      process.stdout.write('\n');
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

    renderProgress(i + 1, route);
  }

  process.stdout.write('\n');

  await browser.close();
  preview.kill();
  const totalTime = ((Date.now() - startTime) / 1000).toFixed(0);
  console.log(`🎉 Prerenderizado completado en ${totalTime}s (${total - errors}/${total} rutas ok${errors > 0 ? `, ${errors} con error` : ''}).`);
}

prerender().catch(console.error);