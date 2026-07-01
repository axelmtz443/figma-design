/**
 * Restaura "Casos de Éxito (Branding)" en Sanity a partir de FALLBACK_PORTFOLIO
 * en src/pages/servicesPages/branding/SuccessStories.tsx. Las imágenes son URLs
 * externas (www.grupoweprom.com), así que se descargan antes de subirlas a Sanity.
 *
 * Usage:
 *   SANITY_TOKEN=<token_con_escritura> node scripts/restore-success-stories.mjs
 */

import { createClient } from '@sanity/client';

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

const resolveUrl = (url) => (url.startsWith('www.') ? `https://${url}` : url);

const STORIES = [
  {
    order: 1,
    client: 'Mercedes-Benz EQ',
    service: 'Campaña Creativa',
    logo: 'www.grupoweprom.com/portafolio_branding/LOGO_MERCEDES.png',
    coverImage: 'www.grupoweprom.com/portafolio_branding/Portada_Mercedes.png',
    expandedImage1: 'www.grupoweprom.com/portafolio_branding/1eurostern.png',
    expandedImage2: 'www.grupoweprom.com/portafolio_branding/2Mercedes.png',
    gridSize: 'md:col-span-2 md:row-span-2',
    color: '#80b67d',
    description: "Desarrollo conceptual y ejecución de la campaña creativa 'La Máquina Del tiempo' para la división de movilidad eléctrica de lujo Mercedes-Benz EQ. Diseñamos los activos visuales y la estrategia de localización para adaptar los pilares globales de innovación y sustentabilidad al mercado local, generando una narrativa de alto impacto.",
  },
  {
    order: 2,
    client: 'Casa Sok',
    service: 'Branding & Estrategia',
    logo: 'www.grupoweprom.com/portafolio_branding/LOGO_CASASOK.png',
    coverImage: 'www.grupoweprom.com/portafolio_branding/portada_casasok.png',
    expandedImage1: 'www.grupoweprom.com/portafolio_branding/1casasok.png',
    expandedImage2: 'www.grupoweprom.com/portafolio_branding/2casasok.png',
    gridSize: 'md:col-span-1 md:row-span-1',
    color: '#c5362e',
    description: 'Estructuración de la estrategia de marca y branding integral para Casa Sok, una propuesta disruptiva en el sector de heladerías artesanales. Creamos una identidad visual sólida, sofisticada y memorable que conecta la tradición chiapaneca y sus ingredientes locales con una experiencia de consumo contemporánea y personalizada.',
  },
  {
    order: 3,
    client: 'AltoCanto',
    service: 'Diseño de Espacio Comercial',
    logo: 'www.grupoweprom.com/portafolio_branding/LOGO_ALTOCANTO.png',
    coverImage: 'www.grupoweprom.com/portafolio_branding/PORTADA_ALTOCANTO.jpeg',
    expandedImage1: 'www.grupoweprom.com/portafolio_branding/PORTADA_ALTOCANTO.jpeg',
    expandedImage2: 'www.grupoweprom.com/portafolio_branding/2ALTOCANTO.webp',
    gridSize: 'md:col-span-1 md:row-span-2',
    color: '#8b5cf6',
    description: 'Diseño conceptual y arquitectura efímera para el stand de punto de contacto (PDC) premium de AltoCanto. Tradujimos la narrativa visual de esta firma de tequila artesanal en una experiencia física inmersiva que refleja el misticismo del terroir, la herencia familiar y la pureza del agave orgánico.',
  },
  {
    order: 4,
    client: 'Agua Caliente',
    service: 'Rebranding',
    logo: 'https://aguacaliente.com.mx/wp-content/uploads/2022/02/LOGOAGUACALIENTEBLANCO-1.png',
    coverImage: 'www.grupoweprom.com/portafolio_branding/PORTADA_AGUACALIENTE.png',
    expandedImage1: 'www.grupoweprom.com/portafolio_branding/2AguaCaliente.png',
    expandedImage2: 'www.grupoweprom.com/portafolio_branding/1AguaCaliente.png',
    gridSize: 'md:col-span-1 md:row-span-1',
    color: '#e6af41',
    description: 'Rebranding estratégico para Agua Caliente, un parque acuático y balneario termal de gran tradición en Villa Corona, Jalisco. Redefinimos por completo el concepto del logotipo y refrescamos el sistema de comunicación institucional, logrando modernizar su identidad visual para conectar de forma efectiva con las nuevas generaciones de turismo familiar.',
  },
  {
    order: 5,
    client: 'Aldora',
    service: 'ADN de Marca & Branding',
    logo: 'www.grupoweprom.com/portafolio_branding/LOGO_ALDORA.png',
    coverImage: 'www.grupoweprom.com/portafolio_branding/PORTADA_ALDORA.jpg',
    expandedImage1: 'www.grupoweprom.com/portafolio_branding/1Aldora.png',
    expandedImage2: 'www.grupoweprom.com/portafolio_branding/2Aldora.jpeg',
    gridSize: 'md:col-span-4 md:row-span-3',
    color: '#599ddf',
    description: 'Estructuración integral del ADN de marca, propósito y estrategia de identidad visual para Aldora, firma especializada en refrigeración, climatización y cocción comercial. Desarrollamos una narrativa institucional basada en el compromiso postventa y el respaldo técnico humano, transformando un servicio operativo en una propuesta de valor enfocada en la continuidad y la confianza a largo plazo.',
  },
];

async function uploadFromUrl(url, filenameHint) {
  const resolved = resolveUrl(url);
  const res = await fetch(resolved);
  if (!res.ok) throw new Error(`HTTP ${res.status} al descargar ${resolved}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const filename = filenameHint || resolved.split('/').pop() || 'image';
  const asset = await client.assets.upload('image', buffer, { filename });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function main() {
  console.log('🔍  Verificando documentos existentes...');
  const existing = await client.fetch(`*[_type == "successStory"]{ _id, client }`);
  console.log(`   Encontrados ${existing.length} documento(s) existentes.`);

  console.log(`\n🚀  Restaurando ${STORIES.length} casos de éxito...\n`);

  let created = 0;
  for (const s of STORIES) {
    const dup = existing.find(e => e.client.trim().toLowerCase() === s.client.trim().toLowerCase());
    if (dup) {
      console.log(`  ⏭️   ${s.client} ya existe (${dup._id}), se omite.`);
      continue;
    }

    process.stdout.write(`  📤  Descargando y subiendo imágenes de ${s.client}... `);
    const [logoAsset, coverAsset, exp1Asset, exp2Asset] = await Promise.all([
      uploadFromUrl(s.logo, `${s.client}-logo`),
      uploadFromUrl(s.coverImage, `${s.client}-cover`),
      uploadFromUrl(s.expandedImage1, `${s.client}-exp1`),
      uploadFromUrl(s.expandedImage2, `${s.client}-exp2`),
    ]);

    const doc = {
      _type: 'successStory',
      order: s.order,
      client: s.client,
      service: s.service,
      description: s.description,
      logo: logoAsset,
      coverImage: coverAsset,
      expandedImage1: exp1Asset,
      expandedImage2: exp2Asset,
      color: s.color,
      gridSize: s.gridSize,
    };

    const result = await client.create(doc);
    created++;
    console.log(`✅  creado (${result._id})`);
  }

  console.log(`\n🎉  Listo. ${created} caso(s) creado(s), ${STORIES.length - created} omitido(s) por duplicado.`);
}

main().catch((err) => {
  console.error('❌  Error:', err.message);
  process.exit(1);
});
