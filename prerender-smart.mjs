// prerender-smart.mjs
// Re-renders only routes affected by changes since the last prerender.
import puppeteer from 'puppeteer';
import { spawn, execSync } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const META_FILE = path.join(__dirname, 'dist', '.prerender-meta.json');

const sanity = createClient({
  projectId: 'k3wb9a79',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
});

// Maps source file globs → routes they affect.
// A changed file matching a pattern triggers re-render of all listed routes.
const ROUTE_MAP = [
  // Global shell — any of these touches every page
  { pattern: /src\/components\/General\/(Navbar|Footer|Loader|ScrollReveal|InteractiveBackground)/, routes: 'ALL' },
  { pattern: /src\/App\.tsx/, routes: 'ALL' },
  { pattern: /tailwind\.config|postcss\.config|index\.css/, routes: 'ALL' },

  // Home
  { pattern: /src\/pages\/Home|src\/components\/Home\//, routes: ['/'] },

  // Nosotros
  { pattern: /src\/pages\/About|src\/components\/About\//, routes: ['/nosotros'] },

  // Servicios main
  { pattern: /src\/pages\/Services\.tsx|src\/components\/Services\/ServicesMain/, routes: ['/servicios'] },

  // Service sub-pages
  { pattern: /servicios\/branding|Branding/i, routes: ['/servicios/branding'] },
  { pattern: /servicios\/audiovisual|Audiovisual/i, routes: ['/servicios/audiovisual'] },
  { pattern: /consultoriademarketing|ConsultoriaMarketing/i, routes: ['/servicios/consultoriademarketing'] },
  { pattern: /marketing-digital|MktDigital|mainMktDigital/i, routes: ['/servicios/marketing-digital'] },
  { pattern: /investigacion-de-mercados|InvestigacionMercados/i, routes: ['/servicios/investigacion-de-mercados'] },

  // Portafolio
  { pattern: /src\/pages\/Portafolio|src\/components\/Portafolio\//, routes: ['/portafolio', '/portafolio/investigacion-de-mercado', '/portafolio/marketing-digital', '/portafolio/branding'] },

  // Blog listing
  { pattern: /src\/pages\/Blog\.tsx|src\/components\/Blog\/BlogList/, routes: ['/blog'] },

  // Blog post renderer — triggers Sanity slug check to find which posts changed
  { pattern: /src\/pages\/BlogPostPage|src\/components\/Blog\//, routes: 'BLOG_POSTS' },

  // Contact
  { pattern: /src\/pages\/Contact|src\/components\/Contact\//, routes: ['/contact'] },

  // Sanity queries / lib — data shape change could affect dynamic pages
  { pattern: /src\/lib\/sanity/, routes: 'ALL' },
];

const STATIC_ROUTES = [
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
];

async function readMeta() {
  try {
    const raw = await fs.readFile(META_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeMeta(sha, timestamp) {
  await fs.writeFile(META_FILE, JSON.stringify({ sha, timestamp }, null, 2));
}

function getCurrentSha() {
  return execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
}

function getChangedFiles(fromSha) {
  try {
    return execSync(`git diff ${fromSha} HEAD --name-only`, { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(Boolean);
  } catch {
    return [];
  }
}

async function getUpdatedBlogSlugs(since) {
  const query = `*[_type == "post" && _updatedAt > $since] { "slug": slug.current }`;
  const posts = await sanity.fetch(query, { since });
  return posts.map(p => `/blog/${p.slug}`);
}

async function getAllBlogSlugs() {
  const query = `*[_type == "post"] { "slug": slug.current }`;
  const posts = await sanity.fetch(query);
  return posts.map(p => `/blog/${p.slug}`);
}

async function resolveRoutes(meta) {
  if (!meta) {
    console.log('⚠️  Sin historial previo — prerenderizando todo.');
    const blogSlugs = await getAllBlogSlugs();
    return [...STATIC_ROUTES, ...blogSlugs];
  }

  const { sha: lastSha, timestamp: lastTimestamp } = meta;
  const currentSha = getCurrentSha();

  if (lastSha === currentSha) {
    // Git hasn't changed — only check Sanity
    console.log('📦 Sin cambios en git. Buscando posts actualizados en Sanity...');
    const updatedPosts = await getUpdatedBlogSlugs(lastTimestamp);
    if (updatedPosts.length === 0) {
      console.log('✅ Nada ha cambiado. No hay rutas que prerenderizar.');
      return [];
    }
    console.log(`📝 ${updatedPosts.length} post(s) actualizados en Sanity.`);
    return updatedPosts;
  }

  const changedFiles = getChangedFiles(lastSha);
  console.log(`🔍 ${changedFiles.length} archivo(s) cambiados desde ${lastSha.slice(0, 7)}:`);
  changedFiles.forEach(f => console.log(`   ${f}`));

  const routeSet = new Set();
  let allRoutes = false;
  let includeBlogPosts = false;

  for (const file of changedFiles) {
    for (const { pattern, routes } of ROUTE_MAP) {
      if (pattern.test(file)) {
        if (routes === 'ALL') {
          allRoutes = true;
          break;
        } else if (routes === 'BLOG_POSTS') {
          includeBlogPosts = true;
        } else {
          routes.forEach(r => routeSet.add(r));
        }
      }
    }
    if (allRoutes) break;
  }

  if (allRoutes) {
    console.log('🌐 Cambio global detectado — prerenderizando todo.');
    const blogSlugs = await getAllBlogSlugs();
    return [...STATIC_ROUTES, ...blogSlugs];
  }

  // Always check Sanity for updated posts regardless
  const updatedPosts = await getUpdatedBlogSlugs(lastTimestamp);
  updatedPosts.forEach(r => routeSet.add(r));

  if (includeBlogPosts) {
    // Blog renderer component changed — re-render all posts
    const allPosts = await getAllBlogSlugs();
    allPosts.forEach(r => routeSet.add(r));
    routeSet.add('/blog');
  }

  return [...routeSet];
}

async function renderRoutes(routes) {
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
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage();

  await page.setRequestInterception(true);
  page.on('request', req => {
    const type = req.resourceType();
    if (['image', 'media', 'font'].includes(type) && !req.url().includes('localhost')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  const IGNORED_ERRORS = ['initMap', '_xdc_', 'maps.googleapis'];
  page.on('pageerror', err => {
    if (IGNORED_ERRORS.some(s => err.message.includes(s))) return;
    console.error('💥 ERROR DE JS:', err.message);
  });

  page.setDefaultNavigationTimeout(15000);

  for (const route of routes) {
    console.log(`📄 Prerenderizando ${route}`);
    try {
      await page.goto(`http://localhost:4173${route}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await new Promise(resolve => setTimeout(resolve, 1500));
      const html = await page.content();
      const filePath = route === '/'
        ? path.join(distPath, 'index.html')
        : path.join(distPath, `${route}.html`);
      if (route !== '/') await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, html);
      console.log(`✅ Guardado: ${filePath}`);
    } catch (err) {
      console.error(`⚠️  Error en ${route}: ${err.message}`);
      try {
        const html = await page.content();
        const filePath = route === '/' ? path.join(distPath, 'index.html') : path.join(distPath, `${route}.html`);
        if (route !== '/') await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, html);
        console.log(`✅ Guardado (contingencia): ${filePath}`);
      } catch (inner) {
        console.error(`❌ No se pudo guardar ${route}:`, inner.message);
      }
    }
  }

  await browser.close();
  preview.kill();
}

async function main() {
  const meta = await readMeta();
  const routes = await resolveRoutes(meta);

  if (routes.length === 0) {
    process.exit(0);
  }

  console.log(`\n📋 Rutas a prerenderizar (${routes.length}):`);
  routes.forEach(r => console.log(`   ${r}`));
  console.log('');

  await renderRoutes(routes);

  const newSha = getCurrentSha();
  const newTimestamp = new Date().toISOString();
  await writeMeta(newSha, newTimestamp);

  console.log(`\n🎉 Prerenderizado inteligente completado.`);
  console.log(`📌 Meta guardado: sha=${newSha.slice(0, 7)}, timestamp=${newTimestamp}`);
}

main().catch(console.error);
