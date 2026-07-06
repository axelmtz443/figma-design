/**
 * Agrega ubicaciones a los testimonios ya creados en Sanity.
 * Actualiza en batch los 50 documentos marketResearchTestimonial con sus ubicaciones.
 *
 * Usage:
 *   SANITY_TOKEN=<token_con_escritura> node scripts/add-locations-to-testimonials.mjs
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

const LOCATIONS = [
  'Guadalajara, Jalisco',
  'Villahermosa, Tabasco',
  'Monterrey, Nuevo León',
  'Puebla, Puebla',
  'Mérida, Yucatán',
  'Querétaro, Querétaro',
  'Tijuana, Baja California',
  'León, Guanajuato',
  'Toluca, Estado de México',
  'Cancún, Quintana Roo',
  'Aguascalientes, Aguascalientes',
  'San Luis Potosí, San Luis Potosí',
  'Hermosillo, Sonora',
  'Culiacán, Sinaloa',
  'Veracruz, Veracruz',
  'Chihuahua, Chihuahua',
  'Oaxaca, Oaxaca',
  'Morelia, Michoacán',
  'Saltillo, Coahuila',
  'Torreón, Coahuila',
  'Mexicali, Baja California',
  'Tuxtla Gutiérrez, Chiapas',
  'Cuernavaca, Morelos',
  'Pachuca, Hidalgo',
  'Tampico, Tamaulipas',
  'Ciudad Victoria, Tamaulipas',
  'Durango, Durango',
  'Xalapa, Veracruz',
  'Tepic, Nayarit',
  'Colima, Colima',
  'Zacatecas, Zacatecas',
  'La Paz, Baja California Sur',
  'Campeche, Campeche',
  'Chetumal, Quintana Roo',
  'Chilpancingo, Guerrero',
  'Acapulco, Guerrero',
  'Mazatlán, Sinaloa',
  'Puerto Vallarta, Jalisco',
  'Zapopan, Jalisco',
  'Tlaquepaque, Jalisco',
  'Naucalpan, Estado de México',
  'Ecatepec, Estado de México',
  'Ciudad Juárez, Chihuahua',
  'San Cristóbal de las Casas, Chiapas',
  'Coatzacoalcos, Veracruz',
  'Irapuato, Guanajuato',
  'Celaya, Guanajuato',
  'Los Cabos, Baja California Sur',
  'Reynosa, Tamaulipas',
  'Ensenada, Baja California',
];

async function main() {
  console.log('📍  Trayendo testimonios actuales...\n');

  const testimonials = await client.fetch(
    `*[_type == "marketResearchTestimonial"] | order(order asc) { _id, order, name }`
  );

  if (testimonials.length === 0) {
    console.error('❌  No se encontraron testimonios.');
    process.exit(1);
  }

  console.log(`✅  Encontrados ${testimonials.length} testimonios.\n🔄  Actualizando ubicaciones...\n`);

  const patches = testimonials.map((t, idx) => ({
    patch: {
      id: t._id,
      set: { location: LOCATIONS[idx % LOCATIONS.length] }
    }
  }));

  const BATCH_SIZE = 25;
  let updated = 0;
  for (let i = 0; i < patches.length; i += BATCH_SIZE) {
    const batch = patches.slice(i, i + BATCH_SIZE);
    await client.mutate(batch);
    updated += batch.length;
    console.log(`  ✅  ${updated}/${patches.length}`);
  }

  console.log(`\n🎉  Listo. ${updated} testimonios actualizados con ubicaciones.`);
}

main().catch((err) => {
  console.error('❌  Error:', err.message);
  process.exit(1);
});
