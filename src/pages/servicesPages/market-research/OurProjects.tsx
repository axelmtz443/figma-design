import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';

// Íconos SVG nativos e impecables para evitar problemas de dependencias externas
const ChevronLeft = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ArrowUpRight = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
  </svg>
);

// Base de datos dinámica con assets nativos en producción
const cases = [
  {
    id: 1,
    client: "COCA COLA",
    objetivos: "Realizar una serie de estudios de mercado para identificar los hábitos, percepciones y preferencias de consumo por parte del mercado meta en México y el Caribe.",
    resultados: [
      "Se conocieron áreas de oportunidad para el desarrollo de las líneas de productos.",
      "Se realizaron estrategias de marketing de alto impacto para reposicionar las diferentes marcas del grupo.",
      "Se lograron récords en ventas tras la implementación de las estrategias comerciales y de comunicación."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_coca.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2025/11/Coca-Cola_CE.webp",
  },
  {
    id: 2,
    client: "MERCEDES-BENZ",
    objetivos: "Conocer la viabilidad de una alianza estratégica fusionando los puntos de venta de las concesionarias Mercedes-Benz con Chrysler a nivel nacional.",
    resultados: [
      "Se evaluó la percepción de las marcas y las preferencias de los consumidores.",
      "Se identificaron los nichos de clientes y sus hábitos de consumo.",
      "Se validó la viabilidad comercial de la fusión de los puntos de venta."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_mercedes.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/mercedes.png",
  },
  {
    id: 3,
    client: "O'REILLY AUTOPARTES",
    objetivos: "Analizar las ciudades de México donde tienen presencia para comprender percepción, hábitos y preferencias del público, detectar barreras y oportunidades y fortalecer posicionamiento.",
    resultados: [
      "Se identificaron los segmentos clave de mercado y sus hábitos de compra.",
      "Se diseñaron estrategias localizadas por las diferencias regionales detectadas.",
      "Se revelaron fortalezas competitivas en fidelización y percepción de precios."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_oreilly.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/oreilly.png",
  },
  {
    id: 4,
    client: "ITESO",
    objetivos: "Evaluar la percepción, atractivo y posicionamiento de las carreras de Ciencias de la Comunicación, Gestión Cultural y Periodismo y Comunicación Pública, con el fin de identificar mejoras estratégicas en su denominación y comunicación.",
    resultados: [
      "Se detectaron barreras de comprensión y percepción en los nombres de las carreras.",
      "Se propusieron denominaciones más claras y atractivas con base en votaciones.",
      "Se detectaron áreas de mejora en estrategia de comunicación y conexión con mercado laboral."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_iteso.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/iteso.png",
  },
  {
    id: 5,
    client: "CASAS JAVER",
    objetivos: "Identificar las tendencias y criterios de preferencia en la compra de vivienda horizontal y vertical. Definir el perfil del mercado potencial y los factores clave en su decisión de compra.",
    resultados: [
      "Se identificaron las principales necesidades y expectativas del mercado en distintas regiones del país.",
      "Se determinaron los atributos de mayor valor y percepción para el consumidor final.",
      "Se establecieron estrategias comerciales, de producto y de comunicación para fortalecer el posicionamiento de la marca."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/Fondo_javer.jpg",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/javer.png",
  },
  {
    id: 6,
    client: "PRO MÉXICO",
    objetivos: "Conocer la percepción e imagen del país en mercados estratégicos internacionales, con el fin de diseñar campañas que fortalezcan la marca país \"México\" para la inversión extranjera directa y la exportación de bienes y servicios.",
    resultados: [
      "Se detectaron oportunidades de seguridad e innovación para el desarrollo industrial en los diferentes sectores productivos del país.",
      "Se creó \"México significa oportunidad\" para mejorar la percepción y el posicionamiento.",
      "Se atrajeron cientos de millones de dólares para el desarrollo sectorial automotriz, aeroespacial, de energía, entre otros."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_promexico.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/promexico.png",
  },
  {
    id: 7,
    client: "CAJA POPULAR TAMAZULA",
    objetivos: "Evaluar viabilidad para la expansión de la marca. Diagnosticar la percepción y satisfacción de la base de socios actuales para fortalecer fidelización. Identificar brechas entre oferta y demandas del mercado para optimizar la competitividad.",
    resultados: [
      "Se definieron zonas geográficas con mayor potencial de rentabilidad y menor riesgo.",
      "Se detectaron oportunidades clave para la modernización tecnológica y operativa.",
      "Se identificaron a tiempo brechas de satisfacción y riesgos de fuga para los socios.",
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_cpt.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/cpt.png",
  },
  {
    id: 8,
    client: "LIZ MUEBLES",
    objetivos: "Conocer la participación de mercado de los competidores en Centroamérica. Detectar las necesidades, hábitos y preferencias del consumidor. Identificar canales de distribución potenciales.",
    resultados: [
      "Identificación de tendencias y preferencias del mercado para Nicaragua y Panamá.",
      "Propuestas de desarrollo de nuevos productos para el mercado centroamericano.",
      "Estrategias de posicionamiento e incursión para Centroamérica."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_lizmuebles.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2025/11/Liz-Logo.webp",
  },
  {
    id: 9,
    client: "TEQUILA HUIZACHE",
    objetivos: "Identificar las áreas de oportunidad en nuevos mercados para su exportación y comercialización. Determinar viabilidad de expansión a Estados Unidos y Canadá. Descubrir oportunidad de exportar a otros países.",
    resultados: [
      "Se identificó un fuerte mercado potencial y viable en Europa",
      "Se identificaron los principales canales de distribución potenciales.",
      "Se diseñaron propuestas de estrategias comerciales para la incursión en nuevos mercados."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_tequilahuizache.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2025/11/Huizache-Logo.webp",
  },
  {
    id: 10,
    client: "CHIZY CHIZ",
    objetivos: "Evaluar la competitividad de las sucursales en relación a las necesidades y expectativas de los consumidores para definir las áreas de mejora para su expansión en el país.",
    resultados: [
      "Se evaluó la experiencia de los clientes cautivos, potenciales y perdidos.",
      "Se analizó el nivel de recomendación y lealtad por parte de los clientes.",
      "Se identificaron las expectativas y necesidades del mercado meta.",
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_chizychiz.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/chizychiz.png",
  }
];

const SWIPE_THRESHOLD = 50;

export default function OurProjects() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const dragX = useMotionValue(0);

  const goTo = useCallback((index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }, [active]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive(a => (a - 1 + cases.length) % cases.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setActive(a => (a + 1) % cases.length);
  }, []);

  // Autoplay inteligente (se pausa si el usuario pasa el mouse por encima)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next]);

  const prevIndex = (active - 1 + cases.length) % cases.length;
  const nextIndex = (active + 1) % cases.length;

  const cardVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, scale: 0.96 }),
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -SWIPE_THRESHOLD) next();
    else if (info.offset.x > SWIPE_THRESHOLD) prev();
  };

  return (
    <section 
      className="w-full bg-transparent py-16 sm:py-20 px-4 sm:px-6 md:px-12 font-sans relative overflow-hidden z-10 antialiased select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/astonpoliz');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        .font-aston { font-family: 'ASTONPOLIZ', 'Astonpoliz', 'Anton', sans-serif; letter-spacing: 0.05em; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .dot-active {
          background: linear-gradient(90deg, #e6af41, #f0c060, #e6af41);
          background-size: 200% auto;
          animation: shimmer 2s linear infinite;
        }
        .preview-card {
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0.25;
          filter: brightness(0.5) blur(1px);
        }
        .preview-card:hover {
          opacity: 0.5;
          transform: scale(1.02);
          filter: brightness(0.8) blur(0px);
        }
        
        /* Custom scrollbar para los paneles de cristal internos en móviles si es requerido */
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(230, 175, 65, 0.3); border-radius: 10px; }
      ` }} />

      <div className="max-w-7xl mx-auto">

        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white font-aston leading-tight">
            Conoce algunos de nuestros proyectos
          </h2>
        </motion.div>

        {/* Estructura del Carrusel Flotante */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center gap-4 lg:gap-6"
        >

          {/* Preview Track Izquierda — Desktop */}
          <div
            className="preview-card hidden lg:block w-[200px] xl:w-[240px] h-[520px] xl:h-[560px] flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950"
            onClick={prev}
          >
            <img
              src={cases[prevIndex].image}
              alt={cases[prevIndex].client}
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Caja Central Nativa de Alto Impacto */}
          {/* Definimos alturas responsivas estrictas para evitar saltos bruscos de Layout */}
          <div className="relative flex-1 w-full max-w-[840px] h-[580px] sm:h-[520px] md:h-[540px] lg:h-[520px] xl:h-[560px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
            
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={cases[active].id}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                style={{ x: dragX, position: 'absolute', inset: 0, cursor: 'grab' }}
                whileDrag={{ cursor: 'grabbing', scale: 0.99 }}
                className="w-full h-full relative overflow-hidden"
              >
                {/* Imagen de fondo nativa del caso */}
                <img
                  src={cases[active].image}
                  alt={cases[active].client}
                  className="w-full h-full object-cover brightness-[0.75] scale-105 transition-transform duration-700 select-none pointer-events-none"
                  draggable={false}
                />
                
                {/* Gradiente cinemático de oclusión */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />

                {/* Contenedor Flotante UI Glassmorphism */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-5 md:p-6 flex flex-col gap-3 sm:gap-4 shadow-2xl max-h-[85%] overflow-y-auto custom-scroll">
                  
                  {/* Fila Superior: Logo & Identificador | Objetivos */}
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    
                    {/* Columna Izquierda: Identidad de Marca */}
                    <div className="w-full md:w-1/3 flex flex-col justify-center items-start">
                      <div className="h-12 sm:h-14 w-full max-w-[160px] flex items-center mb-2.5">
                        <img 
                          src={cases[active].logo} 
                          alt={`Logo ${cases[active].client}`} 
                          className="max-h-full max-w-full object-contain object-left pointer-events-none select-none"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-[2px] bg-[#e6af41]"></div>
                        <span className="text-[#e6af41] font-semibold tracking-widest text-[11px] sm:text-xs uppercase font-montserrat">
                          {cases[active].client}
                        </span>
                      </div>
                    </div>

                    {/* Columna Derecha: Objetivos del Proyecto */}
                    <div className="w-full md:w-2/3 md:border-l border-white/10 md:pl-6 flex flex-col justify-center">
                      <h4 className="text-[#e6af41] font-aston text-sm sm:text-base mb-1 uppercase tracking-wider font-semibold">
                        Objetivos
                      </h4>
                      <p className="text-zinc-300 font-light text-xs sm:text-[13px] leading-relaxed font-montserrat">
                        {cases[active].objetivos}
                      </p>
                    </div>

                  </div>

                  {/* Divisor Estilizado */}
                  <div className="w-full h-px bg-white/10" />

                  {/* Fila Inferior: Resultados de Negocio */}
                  <div className="w-full">
                    <h4 className="text-[#e6af41] font-aston text-sm sm:text-base mb-2 uppercase tracking-wider font-semibold">
                      Resultados
                    </h4>
                    
                    <ul className="text-zinc-300 font-light text-xs sm:text-[13px] leading-relaxed space-y-1.5 font-montserrat pl-1">
                      {cases[active].resultados.map((res, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#e6af41] text-xs mt-0.5 select-none">•</span>
                          <span className="flex-1">{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controles de Navegación Fluidos para Mobile/Tablet */}
            <button
              onClick={prev}
              className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/60 backdrop-blur-md border border-white/15 rounded-full flex items-center justify-center text-white active:bg-[#e6af41] active:text-black transition-colors duration-200"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/60 backdrop-blur-md border border-white/15 rounded-full flex items-center justify-center text-white active:bg-[#e6af41] active:text-black transition-colors duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Preview Track Derecha — Desktop */}
          <div
            className="preview-card hidden lg:block w-[200px] xl:w-[240px] h-[520px] xl:h-[560px] flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950"
            onClick={next}
          >
            <img
              src={cases[nextIndex].image}
              alt={cases[nextIndex].client}
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Botones de Navegación Flotantes - Desktop */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="hidden md:flex absolute left-4 lg:left-2 xl:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-[#09090b]/80 backdrop-blur-md border border-zinc-800 rounded-full items-center justify-center text-white hover:border-[#e6af41]/50 hover:bg-zinc-900 transition-all duration-300 shadow-xl"
          >
            <ChevronLeft size={20} />
          </motion.button>
          
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="hidden md:flex absolute right-4 lg:right-2 xl:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-[#09090b]/80 backdrop-blur-md border border-zinc-800 rounded-full items-center justify-center text-white hover:border-[#e6af41]/50 hover:bg-zinc-900 transition-all duration-300 shadow-xl"
          >
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>

        {/* Indicadores Dinámicos (Paginación) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center gap-1.5 mt-8 sm:mt-10 flex-wrap max-w-md mx-auto px-4"
        >
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ease-[0.16, 1, 0.3, 1] ${
                i === active ? 'w-7 dot-active opacity-100' : 'w-2 bg-white/20 hover:bg-white/40 opacity-60'
              }`}
              style={{ minWidth: i === active ? '28px' : '8px' }}
            />
          ))}
        </motion.div>

        {/* Contador Estilizado */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-3.5"
        >
          <span className="text-[11px] text-zinc-500 font-montserrat tracking-[0.2em] font-medium">
            {String(active + 1).padStart(2, '0')} / {String(cases.length).padStart(2, '0')}
          </span>
        </motion.div>

        {/* Botón Call To Action (CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-10 sm:mt-12"
        >
          <motion.a
            href="https://xeryusinvest.com/portafolio"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-9 sm:px-11 py-3.5 sm:py-4 bg-transparent border-2 border-white/60 text-white rounded-full font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] overflow-hidden hover:border-white font-montserrat flex items-center justify-center"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
              Ver Portafolio
              <motion.span
                className="inline-flex"
                animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowUpRight size={14} />
              </motion.span>
            </span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}