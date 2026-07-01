/**
 * Restaura "Casos de Éxito (Home)" en Sanity a partir de FALLBACK_CASES
 * en src/components/Home/OurProjectsHome.tsx.
 *
 * Usage:
 *   SANITY_TOKEN=<token_con_escritura> node scripts/restore-our-projects.mjs
 */

import { createClient } from '@sanity/client';
import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const token = process.env.SANITY_TOKEN;
if (!token) {
  console.error('❌  Set SANITY_TOKEN env var before running this script.');
  process.exit(1);
}

const client = createClient({
  projectId: 'k3wb9a79',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const IMG = (p) => path.join(ROOT, 'src', 'images', p);

const CASES = [
  { order: 1, client: 'Mercedes-Benz EQ', tag: 'Lanzamiento de Marca', description: 'Desarrollo de campaña de comunicación y posicionamiento para el lanzamiento de la línea eléctrica EQ en México.', image: IMG('fondos_casos-de-exito/fondo_mercedes.png'), logo: IMG('Logos_Clientes/logo_mercedes.png'), accent: '89,157,223' },
  { order: 2, client: 'Tequila Huizache', tag: 'Branding Internacional', description: 'Desarrollo de imagen de marca y estrategia de posicionamiento con exitosa entrada al mercado de exportación.', image: IMG('fondos_casos-de-exito/fondo_tequilahuizache.png'), logo: IMG('Logos_Clientes/Tequila_huizache.png'), accent: '128,182,125' },
  { order: 3, client: 'Sello Rojo', tag: 'Marketing Promocional', description: 'Estrategia de posicionamiento para nuevas líneas de productos mediante campañas promocionales a nivel nacional.', image: IMG('fondos_casos-de-exito/fondo_SelloRojo.png'), logo: IMG('Logos_Clientes/SelloRojo.png'), accent: '197,54,46' },
  { order: 4, client: 'KIA', tag: 'Trade Marketing', description: 'Creación de Campaña Promocional y de Posicionamiento de Marca a Nivel Nacional para más de 13 concesionarios.', image: IMG('fondos_casos-de-exito/fondo_Kia.jpeg'), logo: IMG('Logos_Clientes/KIA.png'), accent: '128,182,125' },
  { order: 5, client: 'Coca-Cola', tag: 'Marketing Comercial', description: 'Estrategia de marketing comercial para América Latina, rompiendo récord histórico de ventas.', image: IMG('fondos_casos-de-exito/fondo_coca.png'), logo: IMG('Logos_Clientes/Cocacola.png'), accent: '197,54,46' },
  { order: 6, client: 'Vitromex', tag: 'Marketing Estratégico', description: 'Creación y Desarrollo de Plan Comercial y de Marketing a Nivel Nacional, convirtiendo a la marca en líder en el mercado.', image: IMG('fondos_casos-de-exito/fondo_Vitromex.png'), logo: IMG('Logos_Clientes/Vitromex.png'), accent: '230,175,65' },
  { order: 7, client: 'Fortia Technologies', tag: 'Marketing Digital', description: 'Estrategia de marketing, comunicación y publicidad digital a nivel nacional e internacional.', image: IMG('fondos_casos-de-exito/fondo_fortia.jpg'), logo: IMG('Logos_Clientes/Fortia.png'), accent: '89,157,223' },
  { order: 8, client: 'Liz Muebles', tag: 'Marketing Integral', description: 'Desarrollo y Ejecución de Plan de Marketing Nacional y de Expansión en Centro y Sudamérica.', image: IMG('fondos_casos-de-exito/fondo_lizmuebles.png'), logo: IMG('Logos_Clientes/Liz_muebles.png'), accent: '230,175,65' },
];

async function uploadImage(filePath) {
  const filename = path.basename(filePath);
  const asset = await client.assets.upload('image', createReadStream(filePath), { filename });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function main() {
  console.log('🔍  Verificando documentos existentes...');
  const existing = await client.fetch(`*[_type == "ourProject"]{ _id, client }`);
  console.log(`   Encontrados ${existing.length} documento(s) existentes.`);

  console.log(`\n🚀  Restaurando ${CASES.length} casos de éxito (Home)...\n`);

  let created = 0;
  for (const c of CASES) {
    const dup = existing.find(e => e.client.trim().toLowerCase() === c.client.trim().toLowerCase());
    if (dup) {
      console.log(`  ⏭️   ${c.client} ya existe (${dup._id}), se omite.`);
      continue;
    }

    process.stdout.write(`  📤  Subiendo imágenes de ${c.client}... `);
    const [imageAsset, logoAsset] = await Promise.all([
      uploadImage(c.image),
      uploadImage(c.logo),
    ]);

    const doc = {
      _type: 'ourProject',
      order: c.order,
      client: c.client,
      tag: c.tag,
      description: c.description,
      image: imageAsset,
      logo: logoAsset,
      accent: c.accent,
    };

    const result = await client.create(doc);
    created++;
    console.log(`✅  creado (${result._id})`);
  }

  console.log(`\n🎉  Listo. ${created} caso(s) creado(s), ${CASES.length - created} omitido(s) por duplicado.`);
}

main().catch((err) => {
  console.error('❌  Error:', err.message);
  process.exit(1);
});
