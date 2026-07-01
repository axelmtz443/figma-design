/**
 * Restaura las tarjetas de "Casos de Éxito" (Marketing Digital) en Sanity
 * a partir del array FALLBACK_PROJECTS embebido en ProjectResults.tsx,
 * subiendo logos e imágenes de tarjeta como assets y creando los documentos
 * mktDigitalProject correspondientes. No toca documentos existentes (p.ej.
 * la tarjeta "Caja Popular" agregada manualmente), salvo reasignar su orden
 * si colisiona con las posiciones restauradas.
 *
 * Usage:
 *   SANITY_TOKEN=<token_con_escritura> node scripts/restore-mktdigital-projects.mjs
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

const PROJECTS = [
  { order: 1, name: 'Mercedes-Benz', subname: 'Eurostern', logo: IMG('Logos_Clientes/logo_mercedes.png'), cardImg: IMG('mktdigital_meta/datacards/mktcard_Mercedes.png'), traffic: '+2.45M', accounts: '+818%', conversations: '+315', interactions: '+2,900', color: '#3b82f6' },
  { order: 2, name: 'Andrea Aragón', subname: 'Studio', logo: IMG('Logos_Clientes/Andrea Aragón_Logotipo bco.png'), cardImg: IMG('mktdigital_meta/datacards/mktcard_AA.png'), traffic: '+250,000', accounts: '31.9%', conversations: '+375%', interactions: '+650%', color: '#f59e0b' },
  { order: 3, name: 'Senties', subname: '', logo: IMG('Logos_Clientes/Logo_Senties.png'), cardImg: IMG('mktdigital_meta/datacards/mktcard_Senties.png'), traffic: '+50,000', accounts: '+230%', conversations: '+240%', interactions: '+275%', color: '#c5362e' },
  { order: 4, name: 'Fortuna', subname: '', logo: IMG('Logos_Clientes/Logo_Fortuna.png'), cardImg: IMG('mktdigital_meta/datacards/mktcard_Fortuna.png'), traffic: '+38,000', accounts: '+180%', conversations: '+200%', interactions: '+220%', color: '#e6af41' },
  { order: 5, name: 'CAB', subname: '', logo: IMG('Logos_Clientes/Logo_cab.png'), cardImg: IMG('mktdigital_meta/datacards/mktcard_CAB.png'), traffic: '+45,000', accounts: '+120%', conversations: '+205%', interactions: '+110%', color: '#599ddf' },
  { order: 7, name: 'Mayork', subname: '', logo: IMG('Logos_Clientes/Logo_-k.png'), cardImg: IMG('mktdigital_meta/datacards/mktcard_Mayork.png'), traffic: '+180,000', accounts: '+350%', conversations: '+270%', interactions: '+400%', color: '#599ddf' },
  { order: 8, name: 'Sistemik', subname: '', logo: IMG('Logos_Clientes/Logo_sistemik.png'), cardImg: IMG('mktdigital_meta/datacards/mktcard_Sistemik.png'), traffic: '+62,000', accounts: '+230%', conversations: '+240%', interactions: '+275%', color: '#c5362e' },
  { order: 9, name: 'Alteso', subname: '', logo: IMG('Logos_Clientes/Logo_alteso.png'), cardImg: IMG('mktdigital_meta/datacards/mktcard_Alteso.png'), traffic: '+70,000', accounts: '+380%', conversations: '+320%', interactions: '+740%', color: '#80b67d' },
  { order: 10, name: 'Deyun', subname: '', logo: IMG('Logos_Clientes/Logo_deyun-ctro-de-especialidades.png'), cardImg: IMG('mktdigital_meta/datacards/mktcard_Centro de Espacialidades.png'), traffic: '+38,000', accounts: '+240%', conversations: '+100%', interactions: '+220%', color: '#c5362e' },
  { order: 11, name: 'Vagual', subname: '', logo: IMG('Logos_Clientes/Logo_vagual.png'), cardImg: IMG('mktdigital_meta/datacards/mktcard_Vagual.png'), traffic: '+62,000', accounts: '+315%', conversations: '+300%', interactions: '+360%', color: '#599ddf' },
];

// La tarjeta "Caja Popular / Tamazula" agregada manualmente ya ocupa order:6 —
// dejamos ese hueco libre arriba (Mayork pasa a 7, etc.) para no colisionar.

async function uploadImage(filePath) {
  const filename = path.basename(filePath);
  const asset = await client.assets.upload('image', createReadStream(filePath), { filename });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function main() {
  console.log('🔍  Verificando documentos existentes...');
  const existing = await client.fetch(`*[_type == "mktDigitalProject"]{ _id, name, order }`);
  console.log(`   Encontrados ${existing.length} documento(s) existentes:`, existing.map(e => `${e.name} (order:${e.order})`).join(', ') || '(ninguno)');

  console.log(`\n🚀  Restaurando ${PROJECTS.length} tarjetas...\n`);

  let created = 0;
  for (const p of PROJECTS) {
    // Evitar duplicados si ya existe un proyecto con el mismo nombre
    const dup = existing.find(e => e.name.trim().toLowerCase() === p.name.trim().toLowerCase());
    if (dup) {
      console.log(`  ⏭️   ${p.name} ya existe (${dup._id}), se omite.`);
      continue;
    }

    process.stdout.write(`  📤  Subiendo imágenes de ${p.name}... `);
    const [logoAsset, cardAsset] = await Promise.all([
      uploadImage(p.logo),
      uploadImage(p.cardImg),
    ]);

    const doc = {
      _type: 'mktDigitalProject',
      order: p.order,
      name: p.name,
      subname: p.subname,
      logo: logoAsset,
      cardImg: cardAsset,
      traffic: p.traffic,
      accounts: p.accounts,
      conversations: p.conversations,
      interactions: p.interactions,
      color: p.color,
    };

    const result = await client.create(doc);
    created++;
    console.log(`✅  creado (${result._id})`);
  }

  console.log(`\n🎉  Listo. ${created} tarjeta(s) creadas, ${PROJECTS.length - created} omitida(s) por duplicado.`);
}

main().catch((err) => {
  console.error('❌  Error:', err.message);
  process.exit(1);
});
