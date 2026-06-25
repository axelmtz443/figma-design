import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'k3wb9a79',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
})

const TRASH_IDS = [
  'wp-post-17',    // "Standard post format" — template WP
  'wp-post-3345',  // "Standard post format" — template WP (sin-slug)
  'wp-post-177',   // "Simple post with image" — template WP
  'wp-post-186',   // "Post with images inside" — template WP
  'wp-post-248',   // "Link post format" — template WP
  'wp-post-249',   // "Audio post format" — template WP
  'wp-post-251',   // "Quote post format" — template WP
  'wp-post-252',   // "Gallery post format" — template WP
  'wp-post-36',    // "Youtube video post format" — template WP
  'wp-post-7430',  // título vacío
  'wp-post-9026',  // "Axel Martínez González" — test/persona
  'wp-post-9156',  // "jjb" — test
  'wp-post-8867',  // "Ejemplos famosos de packaging creativo" — duplicado exacto
]

const PATCHES = [
  // UX → Branding
  { id: 'wp-post-8770', category: 'branding',                  subcategory: 'identidad-visual' },
  // UX → Publicidad Creativa
  { id: 'wp-post-8252', category: 'publicidad-creativa',       subcategory: 'tipos-de-creatividad' },
  // DeFi → Investigación de Mercados
  { id: 'wp-post-8046', category: 'investigacion-de-mercados', subcategory: 'metodologia' },
  // Tools → Marketing Digital
  { id: 'wp-post-9081', category: 'marketing-digital',         subcategory: 'contenido' },
  { id: 'wp-post-7445', category: 'marketing-digital',         subcategory: 'publicidad-digital' },
  // Modelos estadísticos (versión con imagen, buena) — ya era Marketing pero es IM
  { id: 'wt8nB7DgM817EWPJBvwtON', category: 'investigacion-de-mercados', subcategory: 'herramientas-modelos' },
]

async function run() {
  console.log(`\n🗑  Eliminando ${TRASH_IDS.length} posts basura...`)
  const tx = client.transaction()
  for (const id of TRASH_IDS) tx.delete(id)
  await tx.commit()
  console.log(`✓ Eliminados`)

  console.log(`\n🏷  Corrigiendo ${PATCHES.length} posts mal-categorizados...`)
  for (const { id, category, subcategory } of PATCHES) {
    try {
      await client.patch(id).set({ category, subcategory }).commit()
      console.log(`  ✓ ${id}  →  ${category} / ${subcategory}`)
    } catch (err) {
      console.log(`  ✗ ${id}: ${err.message}`)
    }
  }
  console.log('\n✅ Limpieza completa\n')
}

run().catch(err => { console.error(err); process.exit(1) })
