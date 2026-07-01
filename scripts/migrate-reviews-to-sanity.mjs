/**
 * Crea las reseñas iniciales en Sanity (schema "review") para las categorías
 * "Home" y "Producción Audiovisual", usando el contenido real que ya existía
 * hardcodeado en Testimonial.tsx y nuestrosClientes.tsx.
 *
 * Se usan avatares de iniciales (ui-avatars.com) en vez de fotos de stock,
 * ya que las fotos anteriores (Unsplash) no correspondían a personas reales
 * de las reseñas de Google.
 *
 * Usage:
 *   SANITY_TOKEN=<token_con_escritura> node scripts/migrate-reviews-to-sanity.mjs
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

const PALETTE = ['c5362e', '599ddf', 'e6af41', '80b67d'];

const REVIEWS = [
  // ── Home ──────────────────────────────────────────────
  { category: 'Home', name: 'Jessica Zamora', rating: 5, text: 'Tienen un servicio excelente y son súper amables! Todo es muy profesional, el equipo es muy atento y te acompañan en todo el proceso. ¡Super recomendados!' },
  { category: 'Home', name: 'Johana Kamila Gutiérrez', rating: 5, text: 'Tuve una muy buena experiencia con ellos, ofrecen una amplia variedad de servicios y cuentan con un equipo profesional, excelente agencia.' },
  { category: 'Home', name: 'Cecilia Hernández', rating: 5, text: 'Una empresa increíble y muy creativa!! Siempre los recomiendo, además personas muy humanas, atentas y resilientes.' },
  { category: 'Home', name: 'Kevin R.', rating: 5, text: 'Mi experiencia ha sido excepcional. Altamente estratégicos, dedicados y orientados a resultados.' },

  // ── Producción Audiovisual ────────────────────────────
  { category: 'Producción Audiovisual', name: 'Jessica Zamora', rating: 5, text: 'Tienen un servicio excelente y son súper amables! Todo es muy profesional, el equipo es muy atento y te acompañan en todo el proceso. ¡Super recomendados!' },
  { category: 'Producción Audiovisual', name: 'Johana Kamila Gutiérrez', rating: 5, text: 'Tuve una muy buena experiencia con ellos, ofrecen una amplia variedad de servicios y cuentan con un equipo profesional, excelente agencia.' },
  { category: 'Producción Audiovisual', name: 'Pérez Lecter', rating: 5, text: 'El proyecto que hicieron fue muy profesional y a todos nos encantó.' },
  { category: 'Producción Audiovisual', name: 'Cecilia Hernández', rating: 5, text: 'Una empresa increíble y muy creativa!! Siempre los recomiendo, además personas muy humanas, atentas y resilientes.' },
  { category: 'Producción Audiovisual', name: 'Kevin R.', rating: 5, text: 'Mi experiencia ha sido excepcional. Altamente estratégicos, dedicados y orientados a resultados.' },
  { category: 'Producción Audiovisual', name: 'María López', rating: 5, text: 'Excelente trabajo en todo momento. El equipo siempre dispuesto a dar lo mejor.' },
  { category: 'Producción Audiovisual', name: 'Carlos Méndez', rating: 5, text: 'Profesionalismo de primer nivel. Entregaron antes del tiempo estimado y superaron nuestras expectativas.' },
  { category: 'Producción Audiovisual', name: 'Ana Torres', rating: 5, text: 'El mejor equipo de producción con el que hemos trabajado. Creatividad y calidad en cada entrega.' },
  { category: 'Producción Audiovisual', name: 'Roberto Sánchez', rating: 5, text: 'Increíble la calidad de producción. Cada detalle fue cuidado al máximo. 100% recomendados.' },
  { category: 'Producción Audiovisual', name: 'Laura Vega', rating: 5, text: 'Desde el primer contacto hasta la entrega final, todo fue perfecto. Un equipo muy comprometido.' },
];

function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

async function uploadAvatar(name, colorHex) {
  const url = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials(name))}&background=${colorHex}&color=fff&size=400&font-size=0.4&bold=true`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} al generar avatar de ${name}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload('image', buffer, { filename: `${name.replace(/\s+/g, '-')}-avatar.png` });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function main() {
  console.log('🔍  Verificando documentos existentes...');
  const existing = await client.fetch(`*[_type == "review"]{ _id, name, category }`);
  console.log(`   Encontrados ${existing.length} documento(s) existentes.`);

  console.log(`\n🚀  Creando ${REVIEWS.length} reseñas...\n`);

  const orderByCategory = {};
  let created = 0;

  for (let i = 0; i < REVIEWS.length; i++) {
    const r = REVIEWS[i];
    const dup = existing.find(e => e.name.trim().toLowerCase() === r.name.trim().toLowerCase() && e.category === r.category);
    if (dup) {
      console.log(`  ⏭️   ${r.name} (${r.category}) ya existe (${dup._id}), se omite.`);
      continue;
    }

    orderByCategory[r.category] = (orderByCategory[r.category] || 0) + 1;

    process.stdout.write(`  📤  ${r.name} (${r.category})... `);
    const color = PALETTE[i % PALETTE.length];
    const photo = await uploadAvatar(r.name, color);

    const result = await client.create({
      _type: 'review',
      order: orderByCategory[r.category],
      name: r.name,
      rating: r.rating,
      photo,
      text: r.text,
      category: r.category,
    });
    created++;
    console.log(`✅  creado (${result._id})`);
  }

  console.log(`\n🎉  Listo. ${created} reseña(s) creada(s), ${REVIEWS.length - created} omitida(s) por duplicado.`);
}

main().catch((err) => {
  console.error('❌  Error:', err.message);
  process.exit(1);
});
