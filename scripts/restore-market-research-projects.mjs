/**
 * Restaura "Proyectos Investigación de Mercados" en Sanity a partir de
 * FALLBACK_CASES en src/pages/servicesPages/market-research/OurProjects.tsx.
 *
 * Usage:
 *   SANITY_TOKEN=<token_con_escritura> node scripts/restore-market-research-projects.mjs
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
  { order: 1, client: 'COCA COLA', objetivos: 'Realizar una serie de estudios de mercado para identificar los hábitos, percepciones y preferencias de consumo por parte del mercado meta en México y el Caribe.', resultados: ['Se conocieron áreas de oportunidad para el desarrollo de las líneas de productos.', 'Se realizaron estrategias de marketing de alto impacto para reposicionar las diferentes marcas del grupo.', 'Se lograron récords en ventas tras la implementación de las estrategias comerciales y de comunicación.'], image: IMG('fondos_casos-de-exito/fondo_coca.png'), logo: IMG('fondos_casos-de-exito/fondo_coca.png') },
  { order: 2, client: 'MERCEDES-BENZ', objetivos: 'Conocer la viabilidad de una alianza estratégica fusionando los puntos de venta de las concesionarias Mercedes-Benz con Chrysler a nivel nacional.', resultados: ['Se evaluó la percepción de las marcas y las preferencias de los consumidores.', 'Se identificaron los nichos de clientes y sus hábitos de consumo.', 'Se validó la viabilidad comercial de la fusión de los puntos de venta.'], image: IMG('fondos_casos-de-exito/fondo_mercedes.png'), logo: IMG('Logos_Clientes/logo_mercedes.png') },
  { order: 3, client: "O'REILLY AUTOPARTES", objetivos: 'Analizar las ciudades de México donde tienen presencia para comprender percepción, hábitos y preferencias del público, detectar barreras y oportunidades y fortalecer posicionamiento.', resultados: ['Se identificaron los segmentos clave de mercado y sus hábitos de compra.', 'Se diseñaron estrategias localizadas por las diferencias regionales detectadas.', 'Se revelaron fortalezas competitivas en fidelización y percepción de precios.'], image: IMG('fondos_casos-de-exito/fondo_oreilly.png'), logo: IMG('Logos_Clientes/logo_oreilly.png') },
  { order: 4, client: 'ITESO', objetivos: 'Evaluar la percepción, atractivo y posicionamiento de las carreras de Ciencias de la Comunicación, Gestión Cultural y Periodismo y Comunicación Pública, con el fin de identificar mejoras estratégicas en su denominación y comunicación.', resultados: ['Se detectaron barreras de comprensión y percepción en los nombres de las carreras.', 'Se propusieron denominaciones más claras y atractivas con base en votaciones.', 'Se detectaron áreas de mejora en estrategia de comunicación y conexión con mercado laboral.'], image: IMG('fondos_casos-de-exito/fondo_iteso.png'), logo: IMG('Logos_Clientes/logo_iteso.png') },
  { order: 5, client: 'CASAS JAVER', objetivos: 'Identificar las tendencias y criterios de preferencia en la compra de vivienda horizontal y vertical. Definir el perfil del mercado potencial y los factores clave en su decisión de compra.', resultados: ['Se identificaron las principales necesidades y expectativas del mercado en distintas regiones del país.', 'Se determinaron los atributos de mayor valor y percepción para el consumidor final.', 'Se establecieron estrategias comerciales, de producto y de comunicación para fortalecer el posicionamiento de la marca.'], image: IMG('fondos_casos-de-exito/fondo_javer.jpg'), logo: IMG('Logos_Clientes/logo_javer.png') },
  { order: 6, client: 'PRO MÉXICO', objetivos: 'Conocer la percepción e imagen del país en mercados estratégicos internacionales, con el fin de diseñar campañas que fortalezcan la marca país "México" para la inversión extranjera directa y la exportación de bienes y servicios.', resultados: ['Se detectaron oportunidades de seguridad e innovación para el desarrollo industrial en los diferentes sectores productivos del país.', 'Se creó "México significa oportunidad" para mejorar la percepción y el posicionamiento.', 'Se atrajeron cientos de millones de dólares para el desarrollo sectorial automotriz, aeroespacial, de energía, entre otros.'], image: IMG('fondos_casos-de-exito/fondo_promexico.png'), logo: IMG('Logos_Clientes/logo_promexico.png') },
  { order: 7, client: 'CAJA POPULAR TAMAZULA', objetivos: 'Evaluar viabilidad para la expansión de la marca. Diagnosticar la percepción y satisfacción de la base de socios actuales para fortalecer fidelización. Identificar brechas entre oferta y demandas del mercado para optimizar la competitividad.', resultados: ['Se definieron zonas geográficas con mayor potencial de rentabilidad y menor riesgo.', 'Se detectaron oportunidades clave para la modernización tecnológica y operativa.', 'Se identificaron a tiempo brechas de satisfacción y riesgos de fuga para los socios.'], image: IMG('fondos_casos-de-exito/fondo_cpt.png'), logo: IMG('Logos_Clientes/logo_cpt.png') },
  { order: 8, client: 'LIZ MUEBLES', objetivos: 'Conocer la participación de mercado de los competidores en Centroamérica. Detectar las necesidades, hábitos y preferencias del consumidor. Identificar canales de distribución potenciales.', resultados: ['Identificación de tendencias y preferencias del mercado para Nicaragua y Panamá.', 'Propuestas de desarrollo de nuevos productos para el mercado centroamericano.', 'Estrategias de posicionamiento e incursión para Centroamérica.'], image: IMG('fondos_casos-de-exito/fondo_lizmuebles.png'), logo: IMG('fondos_casos-de-exito/fondo_lizmuebles.png') },
  { order: 9, client: 'TEQUILA HUIZACHE', objetivos: 'Identificar las áreas de oportunidad en nuevos mercados para su exportación y comercialización. Determinar viabilidad de expansión a Estados Unidos y Canadá. Descubrir oportunidad de exportar a otros países.', resultados: ['Se identificó un fuerte mercado potencial y viable en Europa', 'Se identificaron los principales canales de distribución potenciales.', 'Se diseñaron propuestas de estrategias comerciales para la incursión en nuevos mercados.'], image: IMG('fondos_casos-de-exito/fondo_tequilahuizache.png'), logo: IMG('fondos_casos-de-exito/fondo_tequilahuizache.png') },
  { order: 10, client: 'CHIZY CHIZ', objetivos: 'Evaluar la competitividad de las sucursales en relación a las necesidades y expectativas de los consumidores para definir las áreas de mejora para su expansión en el país.', resultados: ['Se evaluó la experiencia de los clientes cautivos, potenciales y perdidos.', 'Se analizó el nivel de recomendación y lealtad por parte de los clientes.', 'Se identificaron las expectativas y necesidades del mercado meta.'], image: IMG('fondos_casos-de-exito/fondo_chizychiz.png'), logo: IMG('Logos_Clientes/logo_chizychiz.png') },
];

async function uploadImage(filePath) {
  const filename = path.basename(filePath);
  const asset = await client.assets.upload('image', createReadStream(filePath), { filename });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function main() {
  console.log('🔍  Verificando documentos existentes...');
  const existing = await client.fetch(`*[_type == "marketResearchProject"]{ _id, client }`);
  console.log(`   Encontrados ${existing.length} documento(s) existentes.`);

  console.log(`\n🚀  Restaurando ${CASES.length} proyectos de investigación de mercados...\n`);

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
      _type: 'marketResearchProject',
      order: c.order,
      client: c.client,
      objetivos: c.objetivos,
      resultados: c.resultados,
      image: imageAsset,
      logo: logoAsset,
    };

    const result = await client.create(doc);
    created++;
    console.log(`✅  creado (${result._id})`);
  }

  console.log(`\n🎉  Listo. ${created} proyecto(s) creado(s), ${CASES.length - created} omitido(s) por duplicado.`);
}

main().catch((err) => {
  console.error('❌  Error:', err.message);
  process.exit(1);
});
