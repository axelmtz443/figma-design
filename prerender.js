// prerender.js
import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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
  '/contact'
];

async function prerender() {
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
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // útil en algunos entornos
  });
  const page = await browser.newPage();

  // Configurar un timeout global más alto
  page.setDefaultNavigationTimeout(60000); // 60 segundos

  for (const route of routes) {
    console.log(`📄 Prerenderizando ${route}`);
    const url = `http://localhost:4173${route}`;
    
    try {
      // Navegar con opciones más flexibles
      await page.goto(url, { 
        waitUntil: 'load',        // 'networkidle0' a veces nunca ocurre, 'load' es suficiente
        timeout: 60000 
      });
      
      // Pequeña espera para contenido asíncrono (animaciones, fetch)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
      console.error(`❌ Error en ${route}:`, err.message);
      // Continuar con la siguiente ruta
    }
  }

  await browser.close();
  preview.kill();
  console.log('🎉 Prerenderizado completado (con posibles errores controlados)');
}

prerender().catch(console.error);