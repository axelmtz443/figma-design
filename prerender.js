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

  await new Promise(resolve => setTimeout(resolve, 4000));
  console.log('✅ Servidor corriendo en http://localhost:4173');

  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();

  // Desactivar la carga de recursos externos innecesarios para acelerar el Prerenderizado
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const resourceType = req.resourceType();
    // Bloqueamos tracking, fuentes de terceros externas o analytics si causan timeouts
    if (['image', 'media', 'font'].includes(resourceType) && !req.url().includes('localhost')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  page.on('pageerror', error => {
    console.error(`💥 ERROR DE JS EN LA PÁGINA:`, error.message);
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error') console.error(`🚫 CONSOLA:`, msg.text());
  });

  // Reducimos el timeout a 10 segundos por ruta. Si se pasa, extrae lo que tenga en el DOM.
  page.setDefaultNavigationTimeout(10000); 

  for (const route of routes) {
    console.log(`📄 Prerenderizando ${route}`);
    const url = `http://localhost:4173${route}`;
    
    try {
      // 'domcontentloaded' es el punto ideal: el HTML ya está construido en el cliente por React.
      await page.goto(url, { 
        waitUntil: 'domcontentloaded', 
        timeout: 12000 
      });
      
      // Espera de cortesía estándar para asegurar la inyección de componentes reactivos
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
      console.error(`⚠️ Nota en ${route}: ${err.message}. Intentando guardar snapshot actual...`);
      try {
        const html = await page.content();
        let filePath = route === '/' ? path.join(distPath, 'index.html') : path.join(distPath, `${route}.html`);
        if (route.includes('/') && route !== '/') await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, html);
        console.log(`✅ Guardado (con contingencia): ${filePath}`);
      } catch (innerErr) {
        console.error(`❌ No se pudo guardar la ruta ${route}:`, innerErr.message);
      }
    }
  }

  await browser.close();
  preview.kill();
  console.log('🎉 Prerenderizado completado exitosamente.');
}

prerender().catch(console.error);