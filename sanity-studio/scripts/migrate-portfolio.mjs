/**
 * Migración de casos de portafolio XERYUS → Sanity
 * Ejecutar desde sanity-studio/:
 *   npx sanity exec scripts/migrate-portfolio.mjs --with-user-token
 */

import { getCliClient } from 'sanity/cli';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const client = getCliClient({ apiVersion: '2024-01-01' });
const __dir = path.dirname(fileURLToPath(import.meta.url));
const IMAGES = path.resolve(__dir, '../../src/images');

// ── Helpers ──────────────────────────────────────────────────────────────────

const imageCache = {};

async function uploadImage(relPath) {
  if (!relPath) return null;
  const absPath = path.join(IMAGES, relPath);
  if (!fs.existsSync(absPath)) {
    console.warn(`  ⚠  No encontrada: ${absPath}`);
    return null;
  }
  if (imageCache[relPath]) return imageCache[relPath];

  const filename = path.basename(absPath);
  const stream = fs.createReadStream(absPath);
  const asset = await client.assets.upload('image', stream, { filename });
  const ref = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
  imageCache[relPath] = ref;
  console.log(`  ✔  Subida: ${filename}`);
  return ref;
}

function img(ref) {
  return ref || undefined;
}

// ── Datos de los 30 proyectos ─────────────────────────────────────────────────

const cases = [
  {
    client: 'Mercedes Benz',
    projectTitle: 'Viabilidad de Alianza Estratégica de Concesionarias',
    industry: 'automotriz',
    order: 1,
    featured: true,
    color: '#599ddf',
    description: 'Estudio sobre la viabilidad de fusionar puntos de venta Mercedes-Benz y Chrysler a nivel nacional.',
    objectives: 'Conocer la viabilidad de una alianza estratégica fusionando los puntos de venta de las concesionarias Mercedes-Benz con Chrysler a nivel nacional.',
    results: [
      'Evaluación de percepción de marcas y preferencias de consumidores.',
      'Identificación de nichos de clientes y sus hábitos de consumo.',
      'Validación de viabilidad comercial de la fusión de los puntos de venta.',
    ],
    logoPath: 'Logos_Clientes/logo_mercedes.png',
    coverPath: 'fondos_casos-de-exito/fondo_mercedes.png',
  },
  {
    client: 'Ford',
    projectTitle: 'Identificación de Nichos para Nueva Línea de Carga Ligera',
    industry: 'automotriz',
    order: 2,
    featured: true,
    color: '#599ddf',
    description: 'Análisis de mercado para la entrada óptima de la nueva línea de Carga Ligera en México.',
    objectives: 'Identificar nichos de mercado potenciales para la nueva línea de Carga Ligera, conociendo a profundidad hábitos y características de los consumidores.',
    results: [
      'Identificación de +5 nuevos nichos de mercado para comercializar el vehículo.',
      'Validación de entrada del vehículo en el mercado mexicano.',
      'Conocimiento del valor percibido y disposición de compra del mercado potencial.',
    ],
    logoPath: 'Brands/LogoFord.png',
    coverPath: null,
  },
  {
    client: 'Nissan',
    projectTitle: 'Comportamiento del Mercado Automotriz en Regiones Clave',
    industry: 'automotriz',
    order: 3,
    featured: false,
    color: '#599ddf',
    description: 'Exploración del comportamiento y necesidades del mercado automotriz en tres regiones estratégicas de México.',
    objectives: 'Explorar a fondo el comportamiento y las necesidades del mercado automotriz en tres regiones clave, identificando perfiles de consumidores, preferencias y factores de decisión de compra.',
    results: [
      'Comprensión de qué motiva a los clientes a elegir Nissan.',
      'Identificación de oportunidades para mejorar la experiencia del cliente y fortalecer la fidelización.',
      'Adaptación de la comunicación para conectar con el mercado objetivo regional.',
    ],
    logoPath: 'Brands/Nissan.png',
    coverPath: null,
  },
  {
    client: 'GWM',
    projectTitle: 'Percepción y Posicionamiento de Marca en el Mercado Meta',
    industry: 'automotriz',
    order: 4,
    featured: false,
    color: '#599ddf',
    description: 'Análisis de la percepción de GWM en el mercado meta para respaldar decisiones de marketing estratégico.',
    objectives: 'Recabar y analizar la percepción del mercado meta sobre la marca para mayor conocimiento del mercado y toma de decisiones ejecutivas y de marketing estratégico.',
    results: [
      'Determinación del nivel de reconocimiento y percepción de la marca.',
      'Evaluación de la experiencia de clientes cautivos y potenciales.',
      'Identificación de factores de elección y no elección por parte del mercado meta.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: "O'Reilly",
    projectTitle: 'Hábitos, Preferencias y Posicionamiento por Ciudad',
    industry: 'retail-moda',
    order: 5,
    featured: false,
    color: '#599ddf',
    description: 'Análisis de percepción, hábitos y oportunidades en ciudades mexicanas con presencia O\'Reilly.',
    objectives: 'Analizar las ciudades de México donde tienen presencia para comprender percepción, hábitos y preferencias del público, detectar barreras y oportunidades, y fortalecer posicionamiento.',
    results: [
      'Identificación de segmentos clave de mercado y hábitos de compra.',
      'Diseño de estrategias localizadas por diferencias regionales.',
      'Revelación de fortalezas competitivas en fidelización y percepción de precios.',
      'Insights para mejorar la experiencia en tienda y comunicación.',
    ],
    logoPath: 'Logos_Clientes/logo_oreilly.png',
    coverPath: 'fondos_casos-de-exito/fondo_oreilly.png',
  },
  {
    client: 'ProMéxico',
    projectTitle: 'Posicionamiento Internacional de la Marca País "México"',
    industry: 'gobierno',
    order: 6,
    featured: true,
    color: '#e6af41',
    description: 'Investigación en mercados internacionales para fortalecer la imagen de México ante la inversión extranjera directa.',
    objectives: 'Conocer la percepción e imagen del país en mercados estratégicos internacionales, con el fin de diseñar campañas que fortalezcan la marca país "México" para la inversión extranjera directa y la exportación.',
    results: [
      'Detección de oportunidades de seguridad e innovación para el desarrollo industrial en sectores productivos.',
      'Creación de "México significa oportunidad" para mejorar percepción y posicionamiento.',
      'Atracción de cientos de millones de dólares para el desarrollo sectorial automotriz, aeroespacial y de energía.',
    ],
    logoPath: 'Logos_Clientes/logo_promexico.png',
    coverPath: 'fondos_casos-de-exito/fondo_promexico.png',
  },
  {
    client: 'Coca-Cola',
    projectTitle: 'Hábitos y Preferencias de Consumo en México y el Caribe',
    industry: 'alimentos-bebidas',
    order: 7,
    featured: true,
    color: '#c5362e',
    description: 'Serie de estudios de mercado sobre hábitos, percepciones y preferencias del consumidor para el grupo Coca-Cola.',
    objectives: 'Realizar una serie de estudios de mercado para identificar los hábitos, percepciones y preferencias de consumo por parte del mercado meta en México y el Caribe.',
    results: [
      'Áreas de oportunidad para el desarrollo de líneas de productos.',
      'Estrategias de marketing de alto impacto para reposicionar las diferentes marcas del grupo.',
      'Récords en ventas tras la implementación de las estrategias comerciales y de comunicación.',
    ],
    logoPath: 'Logos_Clientes/Cocacola.png',
    coverPath: 'fondos_casos-de-exito/fondo_coca.png',
  },
  {
    client: "McDonald's",
    projectTitle: 'Expansión y Tropicalización en Centroamérica',
    industry: 'alimentos-bebidas',
    order: 8,
    featured: false,
    color: '#e6af41',
    description: 'Investigación de mercado para la expansión de McDonald\'s en Centroamérica con Guatemala como prueba piloto.',
    objectives: 'Identificar los requerimientos del mercado en la etapa de expansión en Centroamérica. Conocer los hábitos de consumo del mercado guatemalteco para ser la prueba piloto en el resto de los países de Centro y Sudamérica.',
    results: [
      'Tropicalización exitosa para la fuerte expansión en el mercado objetivo.',
      'Implementación de nuevas estrategias comerciales y de marketing.',
    ],
    logoPath: 'Brands/MACDONALDS-min.png',
    coverPath: null,
  },
  {
    client: 'Sello Rojo',
    projectTitle: 'Validación de Nuevos Productos y Estrategia de Mercado',
    industry: 'alimentos-bebidas',
    order: 9,
    featured: false,
    color: '#c5362e',
    description: 'Análisis de percepciones, hábitos y validación sensorial de nuevos productos para el lanzamiento al mercado.',
    objectives: 'Conocer las percepciones y hábitos del mercado. Análisis de mercado y competidores para crear plan de marketing y estrategia comercial. Validar la aprobación de los nuevos productos por parte del mercado.',
    results: [
      'Validación de segmentos de mercado para el lanzamiento de cada producto.',
      'Conocimiento de percepciones sensoriales del consumidor mediante estudios organolépticos.',
      'Desarrollo de nuevas líneas de productos con estrategias definidas para cada mercado.',
    ],
    logoPath: 'Logos_Clientes/SelloRojo.png',
    coverPath: 'fondos_casos-de-exito/fondo_SelloRojo.png',
  },
  {
    client: 'Tequila Huizache',
    projectTitle: 'Identificación de Mercados de Exportación',
    industry: 'bebidas-alcoholicas',
    order: 10,
    featured: false,
    color: '#e6af41',
    description: 'Exploración de oportunidades en nuevos mercados internacionales para la exportación y comercialización del tequila.',
    objectives: 'Identificar áreas de oportunidad en nuevos mercados para exportación y comercialización. Determinar viabilidad de expansión a Estados Unidos, Canadá y otros países.',
    results: [
      'Identificación de un fuerte mercado potencial en Europa del Este.',
      'Identificación de principales canales de distribución potenciales.',
      'Propuestas de estrategias comerciales para la incursión en nuevos mercados.',
    ],
    logoPath: 'Logos_Clientes/Tequila_huizache.png',
    coverPath: 'fondos_casos-de-exito/fondo_tequilahuizache.png',
  },
  {
    client: 'Chizy Chiz',
    projectTitle: 'Evaluación Competitiva para Expansión Nacional',
    industry: 'alimentos-bebidas',
    order: 11,
    featured: false,
    color: '#599ddf',
    description: 'Evaluación de competitividad y experiencia de cliente para definir áreas de mejora y expansión.',
    objectives: 'Evaluar la competitividad de las sucursales en relación a las necesidades y expectativas de los consumidores para definir las áreas de mejora para su expansión en el país.',
    results: [
      'Evaluación de la experiencia de clientes cautivos, potenciales y perdidos.',
      'Análisis del nivel de recomendación y lealtad por parte de los clientes.',
      'Identificación de expectativas y necesidades del mercado meta.',
    ],
    logoPath: 'Logos_Clientes/logo_chizychiz.png',
    coverPath: 'fondos_casos-de-exito/fondo_chizychiz.png',
  },
  {
    client: 'Tapioca Lounge',
    projectTitle: 'Viabilidad de Expansión y Validación de Propuesta de Valor',
    industry: 'alimentos-bebidas',
    order: 12,
    featured: false,
    color: '#599ddf',
    description: 'Análisis de viabilidad para la expansión, ubicaciones estratégicas y propuesta de valor frente al mercado.',
    objectives: 'Evaluar viabilidad para la expansión de la marca. Identificar ubicaciones estratégicas con mayor potencial. Validar la propuesta de valor y concepto de experiencia frente a la oferta existente.',
    results: [
      'Validación de propuesta de valor y concepto de experiencia frente a la oferta existente.',
      'Identificación de oportunidades de diferenciación en experiencia y productos.',
      'Desarrollo de estrategias de entrada al mercado para mitigar riesgos y asegurar rentabilidad.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'Berry Munch',
    projectTitle: 'Análisis de Mercado para Expansión de Sucursales',
    industry: 'alimentos-bebidas',
    order: 13,
    featured: false,
    color: '#599ddf',
    description: 'Evaluación de viabilidad de expansión, ubicaciones estratégicas y brechas en la oferta actual.',
    objectives: 'Evaluar viabilidad para la expansión de la marca. Identificar ubicaciones con mayor potencial. Analizar preferencias del consumidor y brechas en la oferta actual para definir propuestas de valor.',
    results: [
      'Definición de zonas clave maximizando visibilidad y retorno de inversión.',
      'Validación de alto potencial de mercado confirmando demanda insatisfecha.',
      'Desarrollo de estrategias centradas en atributos para capitalizar oportunidades.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'Caja Popular Tata Vasco',
    projectTitle: 'Experiencia de Socios y Estrategia Comercial',
    industry: 'servicios-financieros',
    order: 14,
    featured: false,
    color: '#599ddf',
    description: 'Evaluación de la experiencia de socios y no socios para identificar oportunidades de mejora operativa y fortalecer la estrategia comercial.',
    objectives: 'Evaluar la experiencia de socios y no socios para identificar oportunidades de mejora operativa y fortalecer la estrategia comercial y comunicación.',
    results: [
      'Detección de principales barreras en procesos de crédito y atención al cliente.',
      'Identificación de productos de alto interés: microseguros, préstamos y pago de servicios.',
      'Revelación de diferencias por sucursal para diseñar mejoras localizadas.',
      'Recomendaciones para optimizar trámites, reforzar canales digitales y atraer nuevos socios.',
    ],
    logoPath: 'Logos_Clientes/logo_cpt.png',
    coverPath: 'fondos_casos-de-exito/fondo_cpt.png',
  },
  {
    client: 'Caja Popular Tamazula',
    projectTitle: 'Expansión, Satisfacción de Socios y Competitividad',
    industry: 'servicios-financieros',
    order: 15,
    featured: false,
    color: '#599ddf',
    description: 'Diagnóstico de percepción de socios y análisis de viabilidad para la expansión geográfica.',
    objectives: 'Evaluar viabilidad para la expansión de la marca. Diagnosticar la percepción y satisfacción de la base de socios actuales. Identificar brechas entre oferta y demanda del mercado.',
    results: [
      'Definición de zonas geográficas con mayor potencial de rentabilidad y menor riesgo.',
      'Detección de oportunidades clave para la modernización tecnológica y operativa.',
      'Identificación de brechas de satisfacción y riesgos de fuga de socios.',
      'Desarrollo de estrategias de penetración de mercado enfocadas en nichos de alto valor.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'San Ramón Casa Funeral',
    projectTitle: 'Análisis Competitivo y Experiencia del Cliente',
    industry: 'otro',
    order: 16,
    featured: false,
    color: '#599ddf',
    description: 'Estudio de posicionamiento y experiencia del cliente frente a la competencia en Guadalajara.',
    objectives: 'Analizar la oferta, infraestructura, servicio, posicionamiento y percepción del cliente de San Ramón Casa Funeral frente a sus principales competidores en Guadalajara.',
    results: [
      'Confirmación de satisfacción sobresaliente frente a la competencia, con estrategias de mejora continua para blindar el liderazgo.',
      'Detección de fricciones en la experiencia digital y acciones de optimización tecnológica.',
      'Identificación de brechas de retención y desarrollo de programas de fidelización y alianzas.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'Grupo Estrella Blanca',
    projectTitle: 'Viabilidad de Nuevo Punto de Venta y Terminal de Autobuses',
    industry: 'otro',
    order: 17,
    featured: false,
    color: '#599ddf',
    description: 'Evaluación de viabilidad para apertura de nueva terminal y análisis de demanda potencial de usuarios.',
    objectives: 'Evaluar la viabilidad de abrir un nuevo punto de venta y terminal de autobuses en una ubicación estratégica, analizando la demanda potencial y las expectativas de los usuarios.',
    results: [
      'Confirmación de una oportunidad sólida para expandir la presencia de la marca en un punto clave de la ciudad.',
      'Identificación de necesidades y hábitos de los viajeros para mejorar la oferta de rutas y horarios.',
      'Definición de estrategias para fortalecer la percepción de marca.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'Liz Muebles',
    projectTitle: 'Participación de Mercado y Estrategia para Centroamérica',
    industry: 'retail-moda',
    order: 18,
    featured: false,
    color: '#599ddf',
    description: 'Análisis de competidores, hábitos del consumidor y canales de distribución para la expansión a Centroamérica.',
    objectives: 'Conocer la participación de mercado de los competidores en Centroamérica. Detectar necesidades, hábitos y preferencias del consumidor. Identificar canales de distribución potenciales.',
    results: [
      'Identificación de tendencias y preferencias del mercado para Nicaragua y Panamá.',
      'Propuestas de desarrollo de nuevos productos para el mercado centroamericano.',
      'Estrategias de posicionamiento e incursión para Centroamérica.',
    ],
    logoPath: 'Logos_Clientes/Liz_muebles.png',
    coverPath: 'fondos_casos-de-exito/fondo_lizmuebles.png',
  },
  {
    client: 'Ekar de Gas',
    projectTitle: 'Comportamiento del Consumidor: Omnicanalidad en Muebles y Electrodomésticos',
    industry: 'retail-moda',
    order: 19,
    featured: false,
    color: '#599ddf',
    description: 'Análisis del comportamiento del consumidor en canales digitales vs físicos y evaluación del posicionamiento competitivo.',
    objectives: 'Analizar el comportamiento del consumidor y preferencias de compra en línea vs tienda física. Identificar barreras y motivadores de compra. Evaluar el posicionamiento frente a competidores directos e indirectos.',
    results: [
      'Definición del perfil del cliente digital y físico para segmentar estrategias de marketing.',
      'Detección de áreas de oportunidad para optimizar la experiencia de usuario en el sitio web.',
      'Recomendaciones estratégicas para fortalecer la omnicanalidad y mejorar la retención.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'Sukabumi',
    projectTitle: 'Análisis de Mercado y Expansión Nacional',
    industry: 'construccion',
    order: 20,
    featured: false,
    color: '#599ddf',
    description: 'Análisis de participación de mercado, competidores y ubicaciones ideales para la expansión nacional.',
    objectives: 'Conocer oportunidades potenciales para ganar participación y ventajas competitivas. Analizar el mercado de consumidores y competidores. Identificar ubicaciones idóneas para penetración y expansión.',
    results: [
      'Definición de la participación de la empresa dentro del mercado y su potencial comercial.',
      'Determinación de distribuidores para alianzas comerciales, oportunidades y barreras de entrada.',
      'Identificación de ubicaciones ideales para la expansión del negocio a nivel nacional.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'Constructores Guadalupanos',
    projectTitle: 'Viabilidad para Nuevo Hospital Privado en Michoacán',
    industry: 'construccion',
    order: 21,
    featured: false,
    color: '#599ddf',
    description: 'Estudio de viabilidad para la construcción de un hospital privado, identificando necesidades del mercado y diferenciadores.',
    objectives: 'Conocer la viabilidad para la construcción de un nuevo hospital privado en Michoacán. Identificar las necesidades no satisfechas del mercado meta. Definir características para el proyecto hospitalario.',
    results: [
      'Diagnóstico de éxito potencial con base en oferta, demanda y validación del proyecto.',
      'Identificación de más de 20 áreas de oportunidad para el éxito comercial.',
      'Definición de valores agregados y diferenciadores vs la competencia.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'Tao México',
    projectTitle: 'Desarrollo de Condominios de Lujo en Los Cabos',
    industry: 'construccion',
    order: 22,
    featured: false,
    color: '#e6af41',
    description: 'Análisis de viabilidad y oportunidades de mercado para el desarrollo de condominios de lujo en Los Cabos, BCS.',
    objectives: 'Definición de oportunidades para el desarrollo de condominios de lujo en Los Cabos, BCS. Identificar los principales competidores directos. Análisis de viabilidad y éxito comercial.',
    results: [
      'Identificación de ubicaciones ideales para el desarrollo en Los Cabos, BCS.',
      'Análisis profundo de la competencia para identificar áreas de oportunidad.',
      'Propuestas de estrategias comerciales y de mercadotecnia.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'Proulex',
    projectTitle: 'Viabilidad de Apertura de Nueva Sede en Guadalajara',
    industry: 'educacion',
    order: 23,
    featured: false,
    color: '#599ddf',
    description: 'Estudio integral de mercado para evaluar la apertura de una nueva sede de Proulex Centro de Idiomas.',
    objectives: 'Evaluar la viabilidad de apertura de una nueva sede de Proulex Centro de Idiomas en Guadalajara, Jalisco, con base en un estudio integral del mercado potencial y la competencia.',
    results: [
      'Definición de la viabilidad de apertura de una nueva sede en la ciudad de Guadalajara.',
      'Identificación de necesidades y preferencias del público objetivo en la zona.',
      'Validación de 3 modelos de negocio para el centro de idiomas.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'ITESO',
    projectTitle: 'Percepción y Posicionamiento de Carreras Universitarias',
    industry: 'educacion',
    order: 24,
    featured: false,
    color: '#c5362e',
    description: 'Evaluación del atractivo y posicionamiento de carreras de Ciencias de la Comunicación para mejorar su denominación y estrategia.',
    objectives: 'Evaluar la percepción, atractivo y posicionamiento de las carreras de Ciencias de la Comunicación, Gestión Cultural y Periodismo y Comunicación Pública del ITESO.',
    results: [
      'Detección de barreras de comprensión y percepción en los nombres de las carreras.',
      'Propuesta de denominaciones más claras y atractivas con base en votaciones.',
      'Detección de áreas de mejora en estrategia de comunicación y conexión con mercado laboral.',
      'Creación de lineamientos para fortalecer prácticas profesionales y casos de éxito.',
    ],
    logoPath: 'Logos_Clientes/logo_iteso.png',
    coverPath: 'fondos_casos-de-exito/fondo_iteso.png',
  },
  {
    client: 'Ducto Spiro',
    projectTitle: 'Análisis de Competidores y Estrategia de Penetración de Mercado',
    industry: 'manufactura',
    order: 25,
    featured: false,
    color: '#599ddf',
    description: 'Análisis profundo del mercado y competidores directos para definir la estrategia de penetración y expansión.',
    objectives: 'Análisis profundo del mercado y competidores directos. Analizar estrategias comerciales y de marketing propias y de la competencia. Identificar áreas de oportunidad para penetración y expansión de mercado.',
    results: [
      'Identificación de posibilidades de generar ventajas competitivas en precio, imagen de marca y marketing.',
      'Descubrimiento de gran oportunidad para convertirse en líderes comerciales.',
      'Propuestas comerciales y de marketing para posicionamiento y presencia.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'PROSIC',
    projectTitle: 'Análisis Competitivo y Estrategia de Posicionamiento',
    industry: 'manufactura',
    order: 26,
    featured: false,
    color: '#599ddf',
    description: 'Evaluación de la posición competitiva en precios, oferta y posicionamiento para definir estrategia de mercado.',
    objectives: 'Conocer la oferta de productos y servicios de la competencia. Análisis de los principales competidores identificados. Identificar la posición frente a la competencia en precios, oferta, posicionamiento y participación.',
    results: [
      'Identificación de oportunidades de participación en el mercado y de ventajas competitivas.',
      'Descubrimiento de áreas de oportunidad para el crecimiento y mejora del posicionamiento de marca.',
      'Recomendaciones estratégicas para desarrollar un plan de marketing y estrategia comercial.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'COMECA',
    projectTitle: 'Mercado de Medicamentos de Alto Especialidad en Región Centro-Sureste',
    industry: 'salud-farma',
    order: 27,
    featured: false,
    color: '#599ddf',
    description: 'Análisis del mercado de medicamentos inyectables hospitalarios y de alta especialidad para identificar oportunidades de expansión.',
    objectives: 'Analizar el mercado de medicamentos inyectables de uso hospitalario, psicotrópicos y medicamentos de alta especialidad en la región centro-sureste del país.',
    results: [
      'Definición de los principales segmentos de mercado de medicamentos inyectables.',
      'Identificación de las principales rutas comerciales para contratar agentes de ventas de manera estratégica.',
      'Estimación del tamaño y valor del mercado de medicamentos de uso hospitalario y de alta especialidad.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'MORL',
    projectTitle: 'Análisis de Mercado para Nueva Línea de Ductos',
    industry: 'manufactura',
    order: 28,
    featured: false,
    color: '#599ddf',
    description: 'Análisis detallado del mercado e industria para el desarrollo comercial óptimo de la nueva línea de ductos MORL.',
    objectives: 'Proporcionar un análisis detallado del mercado y de la industria, evaluando las áreas de oportunidad para el óptimo desarrollo comercial de la nueva línea de ductos de MORL.',
    results: [
      'Evaluación de la presencia de la marca, desempeño en el mercado y estrategias de marketing comercial.',
      'Evaluación del mercado de competidores, su presencia e infraestructura, oferta y posicionamiento.',
      'Análisis del sector a nivel sociodemográfico y empresarial, macrotendencias y proyectos de inversión en infraestructura.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'Filati',
    projectTitle: 'Expansión Comercial en Guadalajara',
    industry: 'retail-moda',
    order: 29,
    featured: false,
    color: '#599ddf',
    description: 'Análisis de viabilidad para la expansión comercial en Guadalajara, incluyendo nuevas sucursales y mercado de competidores.',
    objectives: 'Identificar las características pertinentes para la expansión comercial en Guadalajara. Definición de oportunidades para nuevas sucursales. Analizar el mercado de competidores directos.',
    results: [
      'Caracterización de las necesidades actuales del mercado meta.',
      'Definición de oportunidades para expansión del proyecto.',
      'Propuestas de estrategias comerciales y de mercadotecnia.',
    ],
    logoPath: null,
    coverPath: null,
  },
  {
    client: 'TARA',
    projectTitle: 'Diversificación del Negocio y Estrategia de Crecimiento',
    industry: 'otro',
    order: 30,
    featured: false,
    color: '#599ddf',
    description: 'Identificación de oportunidades para el crecimiento y diversificación del negocio, analizando el nicho de mercado y su potencial.',
    objectives: 'Identificar oportunidades para crecimiento del negocio. Determinar las alternativas más viables para la diversificación del negocio. Analizar el nicho de mercado para conocer el potencial, rentabilidad y fortalezas de la marca.',
    results: [
      'Definición de zonas geográficas con mayor potencial de rentabilidad y menor riesgo.',
      'Detección de oportunidades clave para la modernización tecnológica y operativa.',
      'Identificación de brechas de satisfacción y riesgos de fuga para los socios.',
      'Desarrollo de estrategias de penetración de mercado enfocadas en nichos de alto valor.',
    ],
    logoPath: null,
    coverPath: null,
  },
];

// ── Ejecución ─────────────────────────────────────────────────────────────────

async function run() {
  console.log(`\n🚀 Iniciando migración de ${cases.length} casos de portafolio...\n`);

  for (const c of cases) {
    console.log(`📁 ${c.client}`);

    const [coverImage, logo] = await Promise.all([
      uploadImage(c.coverPath),
      uploadImage(c.logoPath),
    ]);

    const doc = {
      _type: 'portfolioCase',
      _id: `portfolioCase-${c.client.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      uen: 'investigacion-de-mercado',
      industry: c.industry,
      order: c.order,
      client: c.client,
      projectTitle: c.projectTitle,
      description: c.description,
      objectives: c.objectives,
      results: c.results,
      color: c.color,
      featured: c.featured,
      ...(coverImage && { coverImage }),
      ...(logo && { logo }),
    };

    await client.createOrReplace(doc);
    console.log(`  ✅ Creado: ${c.client}\n`);
  }

  console.log('🎉 Migración completada.');
  console.log(`   Sin imagen de portada (agregar manualmente en Sanity Studio):`);
  const sinCover = cases.filter(c => !c.coverPath);
  sinCover.forEach(c => console.log(`   - ${c.client}`));
}

run().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
