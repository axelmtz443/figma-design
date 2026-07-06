/**
 * Carga masiva de testimonios de Investigación de Mercados (schema "marketResearchTestimonial").
 * Convierte fechas dd/mm/yyyy a ISO y asigna "order" según el orden de la lista.
 *
 * Usage:
 *   SANITY_TOKEN=<token_con_escritura> node scripts/bulk-load-mr-testimonials.mjs
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

function toISODate(ddmmyyyy) {
  const [d, m, y] = ddmmyyyy.split('/');
  return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
}

const ROWS = [
  ['Alejandro Ruiz', '14/02/2024', 12, 5, 'Excelente atención de principio a fin. Se nota que es un equipo joven, muy actualizado con las herramientas de vanguardia y con un enfoque analítico súper crítico. Quedamos muy conformes con su disposición.'],
  ['Mariana Silva', '05/03/2024', 8, 5, 'Súper profesionales y sumamente objetivos en cada sesión de trabajo. No se quedan en la superficie de las cosas; cuestionan de manera constructiva y te guían con mucha claridad en el proceso.'],
  ['Carlos Mendoza', '22/03/2024', 4, 5, 'Da gusto trabajar con consultores tan dinámicos y actualizados. Su perspectiva fresca y la agilidad con la que responden a cualquier duda hacen toda la diferencia frente a las agencias tradicionales.'],
  ['Sofía Gómez', '11/04/2024', 15, 5, 'Un equipo muy comprometido y atento a los detalles. Estuvieron en constante comunicación con nosotros, mostrando un profesionalismo impecable y un criterio metodológico sumamente riguroso.'],
  ['Ricardo Hernández', '30/04/2024', 2, 5, 'Totalmente recomendados si buscas objetividad y seriedad. Son sumamente críticos con la información y muy transparentes en su forma de trabajar, sin rodeos innecesarios.'],
  ['Andrea López', '18/05/2024', 7, 5, 'Increíble el dinamismo de este equipo. Tienen una visión muy moderna, están súper actualizados y manejan una comunicación fluida que facilita muchísimo el entendimiento mutuo.'],
  ['Javier Torres', '02/06/2024', 9, 5, 'Destaco su capacidad de escucha y su trato sumamente atento. Entienden rápido las necesidades, son muy metódicos y demuestran un dominio técnico impecable en su ramo.'],
  ['Valeria Castro', '25/06/2024', 11, 5, 'Son profesionales muy jóvenes pero con una madurez analítica impresionante. Aportan una mirada crítica y fresca que complementa perfecto cualquier mesa de trabajo.'],
  ['Diego Ramírez', '09/07/2024', 3, 5, 'Excelente disposición y flexibilidad para resolver cualquier requerimiento. Son objetivos, claros y manejan los tiempos de forma sumamente ordenada. Da total confianza colaborar con ellos.'],
  ['Fernando Ortega', '19/07/2024', 6, 4, 'Buena agencia de investigación, muy atentos y cumplieron bien con los tiempos acordados.'],
  ['Camila Villanueva', '03/08/2024', 14, 5, 'Una experiencia impecable. El equipo es súper atento, responde con rapidez y se nota que están completamente actualizados en las últimas metodologías de análisis. Muy satisfechos con el trato.'],
  ['Gabriel Espinoza', '21/08/2024', 5, 5, 'Súper profesionales, formales y objetivos en todo momento. Su enfoque crítico aporta muchísima seguridad y el acompañamiento que brindan durante todo el proyecto es excelente.'],
  ['Natalia Ríos', '07/09/2024', 10, 5, 'Excelente nivel de comunicación y atención al cliente. Un equipo muy preparado, joven y con ideas frescas, con un rigor analítico que se agradece en este tipo de consultorías.'],
  ['Juan Pablo Juárez', '18/09/2024', 1, 5, 'Muy directos, profesionales y transparentes en su manera de operar. No improvisan nada; son sumamente estructurados y objetivos en cada una de sus explicaciones.'],
  ['Elena Morales', '05/10/2024', 13, 5, 'Me gustó mucho su dinamismo y el trato tan cercano que manejan. Están muy actualizados con las dinámicas de hoy en día y son sumamente cuidadosos en la ejecución del servicio.'],
  ['Mateo Flores', '24/10/2024', 8, 5, 'Un equipo altamente crítico y analítico. Se toman el tiempo necesario para alinear expectativas y su seriedad en el cumplimiento de fechas es absoluta. Muy recomendables.'],
  ['Daniela Benítez', '12/11/2024', 4, 5, 'Destaco por completo su amabilidad y el seguimiento puntual que nos dieron. Siempre estuvieron atentos a nuestras inquietudes y demostraron una solidez profesional impecable.'],
  ['Sebastián Peña', '29/11/2024', 16, 5, 'Es un equipo joven que domina perfectamente las tendencias actuales. Son ágiles, objetivos en sus planteamientos y tienen una metodología muy clara que inspira total confianza.'],
  ['Lucía Navarro', '15/12/2024', 7, 5, 'Gran profesionalismo y un enfoque sumamente constructivo. Su capacidad para analizar situaciones complejas de manera fría y objetiva es excelente. El trato fue inmejorable.'],
  ['Arturo Delgado', '04/01/2025', 3, 4, 'Todo muy correcto en la forma de trabajar, son objetivos con los datos y puntuales en las reuniones.'],
  ['Paulina Vargas', '20/01/2025', 11, 5, 'Tienen un balance perfecto entre juventud y rigor metodológico. Están muy actualizados, son súper atentos ante cualquier cambio y demuestran una ética profesional intachable.'],
  ['Rodrigo Fuentes', '11/02/2025', 9, 4, 'Agencia seria y con un equipo bastante actualizado. Ofrecen un buen servicio y atención constante.'],
  ['Fernanda Rojas', '03/03/2025', 5, 5, 'Excelente trato por parte de todo el equipo de consultoría. Siempre se mostraron muy accesibles, atentos a los detalles y con un criterio analítico sumamente agudo y objetivo.'],
  ['Mauricio Herrera', '19/03/2025', 12, 5, 'Súper dinámicos, eficientes y claros en la comunicación. Nos dio mucha tranquilidad ver que manejan esquemas de trabajo tan modernos y actualizados. Un servicio de primer nivel.'],
  ['Claudia Jiménez', '08/04/2025', 2, 5, 'Totalmente satisfechos con su nivel de formalidad y objetividad. Son consultores sumamente analíticos, críticos cuando es necesario y siempre dispuestos a resolver dudas de forma muy clara.'],
  ['Adrián Medina', '25/04/2025', 7, 5, 'El equipo destaca por su amabilidad y rapidez de respuesta. Se nota que están empapados de las tendencias actuales y abordan cada fase con un profesionalismo digno de reconocerse.'],
  ['Vanessa Suárez', '12/05/2025', 10, 5, 'Me encantó la visión fresca y actualizada que manejan. Su trato es sumamente respetuoso y atento, manteniendo siempre una postura crítica y objetiva en todas las mesas de diálogo.'],
  ['Esteban Cortés', '30/05/2025', 4, 5, 'Muy serios y estructurados en su forma de trabajar. Su acompañamiento es constante, son sumamente formales con las entregas y la comunicación siempre fue fluida y transparente.'],
  ['Mónica Beltrán', '14/06/2025', 13, 5, 'Excelente disposición y calidad humana en el servicio. Combinan de manera perfecta un enfoque moderno y actualizado con un rigor profesional impecable. Muy recomendados.'],
  ['Jorge Peralta', '02/07/2025', 5, 4, 'Un equipo joven, con metodologías actualizadas y un trato amable durante todo el proceso.'],
  ['Gabriela Marín', '18/07/2025', 8, 5, 'Súper profesionales, ordenados y sumamente atentos. Tienen una capacidad analítica muy aguda, son críticos en sus revisiones y cuidan al máximo la calidad de todo lo que hacen.'],
  ['Samuel Godínez', '05/08/2025', 15, 5, 'Un equipo joven que refresca por completo el concepto de consultoría. Son súper ágiles, están muy actualizados y manejan una comunicación sumamente objetiva y directa con el cliente.'],
  ['Regina Solís', '22/08/2025', 1, 5, 'Excelente experiencia. Mostraron una objetividad intachable de principio a fin, con un seguimiento diario muy atento y una claridad metodológica que da muchísima confianza.'],
  ['Omar Reyes', '10/09/2025', 9, 5, 'Destaco su formalidad y el criterio tan agudo que manejan. Son profesionales serios, con una visión moderna de la investigación y un trato sumamente corporativo y atento.'],
  ['Tania Palacios', '27/09/2025', 6, 5, 'Un equipo brillante, muy actualizado y con un dinamismo increíble. Se nota la preparación que tienen y la objetividad con la que abordan cada sesión de alineación. Muy recomendables.'],
  ['Hugo Carrillo', '15/10/2025', 12, 5, 'Muy profesionales de principio a fin. Destacan por su capacidad analítica, su postura crítica frente a la información y una atención al cliente impecable y muy cercana.'],
  ['Diana Lugo', '03/11/2025', 4, 5, 'Excelente comunicación y disposición. Son consultores jóvenes pero sumamente formales, objetivos en sus procesos y con un orden impecable en todo su esquema de trabajo.'],
  ['Isaac Bravo', '19/11/2025', 11, 5, 'Súper actualizados en herramientas y enfoques de análisis. Su trato es sumamente atento, responden rápido y demuestran un nivel de profesionalismo de verdad sobresaliente.'],
  ['Silvia Arredondo', '06/12/2025', 7, 5, 'Me gustó mucho trabajar con ellos porque son directos, claros y muy objetivos. Tienen una visión analítica muy rigurosa y cuidan cada interacción con el cliente con mucha amabilidad.'],
  ['Manuel Orozco', '22/12/2025', 3, 4, 'Buen servicio y una atención correcta. Cumplieron de forma objetiva con los plazos planteados.'],
  ['Lorena Estrada', '08/01/2026', 14, 5, 'Es reconfortante trabajar con un equipo tan dinámico y actualizado. Siempre se mostraron atentos a nuestras peticiones y con un criterio metodológico impecable y muy profesional.'],
  ['Francisco Leal', '25/01/2026', 2, 5, 'Muy serios, estructurados y objetivos. Tienen un enfoque analítico crítico de alto nivel y mantienen una comunicación abierta y transparente en todo momento. Gran experiencia de servicio.'],
  ['Patricia Gallegos', '12/02/2026', 10, 5, 'Un equipo sumamente profesional, con un trato atento y personalizado. Tienen ideas frescas, están completamente actualizados y demuestran una solidez metodológica increíble.'],
  ['Christian Paredes', '02/03/2026', 5, 5, 'Destaco su rigor analítico y su total objetividad. Son sumamente profesionales, respetan los calendarios al pie de la letra y brindan un soporte constante con excelente disposición.'],
  ['Natalia Cabrera', '19/03/2026', 9, 5, 'Súper recomendados si buscas consultores jóvenes, dinámicos y muy actualizados. La atención al detalle que manejan y la claridad en sus explicaciones hacen que todo sea muy sencillo.'],
  ['Rubén Domínguez', '04/04/2026', 13, 5, 'Un equipo con un perfil crítico y analítico excelente. Se conducen con gran formalidad, son objetivos y brindan una atención sumamente atenta ante cualquier consulta.'],
  ['Karla Montes', '21/04/2026', 6, 5, 'Excelente servicio. Los consultores demostraron estar muy actualizados, son rápidos en sus respuestas y mantienen un trato profesional y objetivo que genera mucha confianza.'],
  ['Héctor Sandoval', '08/05/2026', 8, 5, 'Un equipo muy comprometido, atento y sumamente formal. Su dinamismo y enfoque metodológico actualizado hacen que la colaboración con ellos sea fluida y de la más alta calidad.'],
  ['Beatriz Pardo', '26/05/2026', 12, 5, 'Me gustó mucho su nivel de profesionalismo y la visión crítica que aportan. Son sumamente ordenados, objetivos en su trato y cuidan al máximo los tiempos establecidos.'],
  ['Alfonso Serrano', '13/06/2026', 4, 5, 'Un equipo joven pero sumamente maduro en su análisis. Están súper actualizados, son atentos a los detalles y demuestran una ética de trabajo impecable de principio a fin.'],
];

async function main() {
  console.log(`🚀  Creando ${ROWS.length} testimonios en Sanity...\n`);

  const mutations = ROWS.map(([name, date, helpfulCount, rating, comment], i) => ({
    create: {
      _type: 'marketResearchTestimonial',
      order: i + 1,
      name,
      date: toISODate(date),
      helpfulCount,
      rating,
      comment,
    },
  }));

  const BATCH_SIZE = 25;
  let created = 0;
  for (let i = 0; i < mutations.length; i += BATCH_SIZE) {
    const batch = mutations.slice(i, i + BATCH_SIZE);
    await client.mutate(batch);
    created += batch.length;
    console.log(`  ✅  ${created}/${mutations.length}`);
  }

  console.log(`\n🎉  Listo. ${created} testimonios creados.`);
}

main().catch((err) => {
  console.error('❌  Error:', err.message);
  process.exit(1);
});
