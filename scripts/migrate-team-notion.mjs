/**
 * Migra la base de "Colaboradores" de Notion a Sanity (teamMember), para la
 * sección de Equipo en la página "Nosotros".
 *
 * IMPORTANTE: Notion no expone la foto de portada de cada página a través de
 * la API disponible (solo el ícono emoji), así que se usa un avatar de
 * iniciales (ui-avatars.com) como placeholder. Reemplazar manualmente en
 * Sanity Studio con la foto real de cada persona cuando esté disponible.
 *
 * Usage:
 *   SANITY_TOKEN=<token_con_escritura> node scripts/migrate-team-notion.mjs
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

const PALETTE = ['3b82f6', 'c5362e', '80b67d', 'e6af41', '599ddf'];

// Activos — Tipo: Director, Empleado, Freelancer, Operación
const ACTIVE_MEMBERS = [
  { name: 'José Miguel Ventura Michel', role: 'Director Asociado de Operaciones' },
  { name: 'Juan Carlos Ventura Michel', role: 'Director General' },
  { name: 'Alex Larios', role: 'Asistente de Dirección' },
  { name: 'Axel Martínez', role: 'Operations & Growth Manager' },
  { name: 'Florine', role: 'Asistente de WeProm Europe' },
  { name: 'Jessica Zamora', role: 'Asistente Administrativa' },
  { name: 'Kamila Gutiérrez', role: 'Project Manager' },
  { name: 'Mariana Villarruel Cárdenas', role: 'Asistente de Marketing' },
  { name: 'Paola Rodríguez Sotomayor', role: 'Coordinadora de Mercadotecnia' },
  { name: 'Brenda', role: 'Investigación de Mercado' },
  { name: 'Cecilia Hernández Cháidez', role: 'Creativa Publicitaria Jr.' },
  { name: 'Diego Arghe Barranco Mora', role: 'Analista de Mercados' },
  { name: 'Diego Hernández', role: 'Consultor Sr. en Marketing Digital' },
  { name: 'Emilia López', role: 'Relaciones Públicas y Alianzas Estratégicas' },
  { name: 'Federico Alejandro Villamar', role: 'Analista' },
  { name: 'Hans Valencia', role: 'Perito Arquitecto' },
  { name: 'Jean Lachapelle', role: 'Relaciones Públicas y Alianzas Estratégicas' },
  { name: 'José Eduardo Gómez', role: 'Productor Audiovisual' },
  { name: 'Juan Carlos Ventura Sr.', role: 'Consultor y Asesor General de Proyectos' },
  { name: 'Juan José Barrios', role: 'Creador de Contenido Sr.' },
  { name: 'Juan Pablo Cantú', role: 'Especialista en Campañas de Tráfico Web' },
  { name: 'Karen Michelle Ventura-Michel', role: 'Directora del Área de Liderazgo y Factor Humano' },
  { name: 'Karla Paola Martínez', role: 'Copywriter' },
  { name: 'Luis Enrique Ortiz-Monasterio', role: 'Desarrollador Web Asociado' },
  { name: 'Luis Nava Villaseñor', role: 'Creativo Publicitario Sr.' },
  { name: 'Luis Rojas Guerrero', role: 'Consultor Creativo Sr.' },
  { name: 'Mariana Martínez', role: 'Directora Asociada de Branding' },
  { name: 'Mario Arvizu', role: 'Productor Audiovisual' },
  { name: 'Melissa', role: 'Diseñadora' },
  { name: 'Missael Mireles Silva', role: 'Copywriter' },
  { name: 'Natalia Ayala España', role: 'Coordinadora de Campañas Digitales' },
  { name: 'Ricardo Sainz Venegas', role: 'Analista de Mercados' },
  { name: 'Santiago Mendoza López', role: 'Creador de Contenido Sr.' },
  { name: 'Stefanía Díaz', role: 'Project Manager' },
  { name: 'Verónica Gómez Castañeda', role: 'Directora de Investigación de Mercados' },
  { name: 'Vicente Meza Gutiérrez', role: 'Analista Geoestadístico' },
  { name: 'Ana Carolina Cruz Montes', role: 'Encuestadora' },
  { name: 'André Gallegos', role: 'Encuestador' },
  { name: 'Carlos Martínez', role: 'Encuestador' },
  { name: 'Elizabeth Salazar', role: 'Encuestadora' },
  { name: 'Iris Valeska Sánchez Cabrera', role: 'Encuestadora' },
  { name: 'Juan Pablo Barreto', role: 'Encuestador' },
  { name: 'Keren Valle Capitaine', role: 'Encuestadora' },
  { name: 'Mariela Santos', role: 'Encuestadora' },
  { name: 'María José Preciado De La Torre', role: 'Encuestadora' },
];

// Ex colaboradores — se migran pero quedan inactivos (ocultos en la página pública)
const INACTIVE_MEMBERS = [
  { name: 'Andrés Gómez Sottil', role: 'Asesor de Cuentas Especiales' },
  { name: 'Aranza Gonzalez', role: 'Asistente de Marketing' },
  { name: 'Bianca', role: 'Asistente de Marketing' },
  { name: 'Daynna García', role: 'Ejecutiva de Cuentas / Material Promocional' },
  { name: 'Guadalupe Monroy', role: 'Gerente de Ventas' },
  { name: 'Heidi Martínez', role: 'Analista de Mercados' },
  { name: 'Melissa Pizano', role: 'Creadora de Contenido Jr.' },
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
  const existing = await client.fetch(`*[_type == "teamMember"]{ _id, name }`);
  console.log(`   Encontrados ${existing.length} documento(s) existentes.`);

  const all = [
    ...ACTIVE_MEMBERS.map((m, i) => ({ ...m, order: i + 1, active: true })),
    ...INACTIVE_MEMBERS.map((m, i) => ({ ...m, order: ACTIVE_MEMBERS.length + i + 1, active: false })),
  ];

  console.log(`\n🚀  Migrando ${all.length} colaboradores (${ACTIVE_MEMBERS.length} activos, ${INACTIVE_MEMBERS.length} inactivos)...\n`);

  let created = 0;
  for (let i = 0; i < all.length; i++) {
    const m = all[i];
    const dup = existing.find(e => e.name.trim().toLowerCase() === m.name.trim().toLowerCase());
    if (dup) {
      console.log(`  ⏭️   ${m.name} ya existe (${dup._id}), se omite.`);
      continue;
    }

    process.stdout.write(`  📤  ${m.name}... `);
    const color = PALETTE[i % PALETTE.length];
    const photo = await uploadAvatar(m.name, color);

    const result = await client.create({
      _type: 'teamMember',
      order: m.order,
      name: m.name,
      role: m.role,
      photo,
      active: m.active,
    });
    created++;
    console.log(`✅  creado (${result._id})${m.active ? '' : ' [inactivo]'}`);
  }

  console.log(`\n🎉  Listo. ${created} colaborador(es) creado(s), ${all.length - created} omitido(s) por duplicado.`);
}

main().catch((err) => {
  console.error('❌  Error:', err.message);
  process.exit(1);
});
