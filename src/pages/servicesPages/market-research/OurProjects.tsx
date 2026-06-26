import { useState, useEffect, useCallback } from 'react';
import { getMarketResearchProjects, MarketResearchProject } from '../../../lib/sanityQueries';
import { urlFor } from '../../../lib/sanityImage';

// Fondos de casos de éxito
import fondoCoca from '../../../images/fondos_casos-de-exito/fondo_coca.png';
import fondoMercedes from '../../../images/fondos_casos-de-exito/fondo_mercedes.png';
import fondoOreilly from '../../../images/fondos_casos-de-exito/fondo_oreilly.png';
import fondoIteso from '../../../images/fondos_casos-de-exito/fondo_iteso.png';
import fondoJaver from '../../../images/fondos_casos-de-exito/fondo_javer.jpg';
import fondoPromexico from '../../../images/fondos_casos-de-exito/fondo_promexico.png';
import fondoCpt from '../../../images/fondos_casos-de-exito/fondo_cpt.png';
import fondoLizmuebles from '../../../images/fondos_casos-de-exito/fondo_lizmuebles.png';
import fondoHuizache from '../../../images/fondos_casos-de-exito/fondo_tequilahuizache.png';
import fondoChizychiz from '../../../images/fondos_casos-de-exito/fondo_chizychiz.png';

// Logos de clientes
import logoCocaCola from '../../../images/fondos_casos-de-exito/fondo_coca.png';
import logoMercedes from '../../../images/Logos_Clientes/logo_mercedes.png';
import logoOreilly from '../../../images/Logos_Clientes/logo_oreilly.png';
import logoIteso from '../../../images/Logos_Clientes/logo_iteso.png';
import logoJaver from '../../../images/Logos_Clientes/logo_javer.png';
import logoPromexico from '../../../images/Logos_Clientes/logo_promexico.png';
import logoCpt from '../../../images/Logos_Clientes/logo_cpt.png';
import logoLizmuebles from '../../../images/fondos_casos-de-exito/fondo_lizmuebles.png';
import logoHuizache from '../../../images/fondos_casos-de-exito/fondo_tequilahuizache.png';
import logoChizychiz from '../../../images/Logos_Clientes/logo_chizychiz.png';

// Íconos SVG - Corregidos sin props sm:size
const ChevronLeft = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ArrowUpRight = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
  </svg>
);

const customStyles = `
  @import url('https://fonts.cdnfonts.com/css/astonpoliz');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  .font-astonpoliz {
    font-family: 'Astonpoliz', 'Montserrat', sans-serif;
    letter-spacing: 0.08em;
  }

  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }

  @keyframes goldShimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .gold-active-bar {
    background: linear-gradient(90deg, #e6af41, #fff3d1, #e6af41);
    background-size: 200% auto;
    animation: goldShimmer 3s ease infinite;
  }
`;

type Case = { id: number; client: string; objetivos: string; resultados: string[]; image: string; logo: string; };

function sanityToCase(p: MarketResearchProject, i: number): Case {
  return { id: i + 1, client: p.client, objetivos: p.objetivos, resultados: p.resultados, image: urlFor(p.image), logo: urlFor(p.logo) };
}

const FALLBACK_CASES = [
  { id: 1, client: "COCA COLA", objetivos: "Realizar una serie de estudios de mercado para identificar los hábitos, percepciones y preferencias de consumo por parte del mercado meta en México y el Caribe.", resultados: ["Se conocieron áreas de oportunidad para el desarrollo de las líneas de productos.", "Se realizaron estrategias de marketing de alto impacto para reposicionar las diferentes marcas del grupo.", "Se lograron récords en ventas tras la implementación de las estrategias comerciales y de comunicación."], image: fondoCoca, logo: logoCocaCola },
  { id: 2, client: "MERCEDES-BENZ", objetivos: "Conocer la viabilidad de una alianza estratégica fusionando los puntos de venta de las concesionarias Mercedes-Benz con Chrysler a nivel nacional.", resultados: ["Se evaluó la percepción de las marcas y las preferencias de los consumidores.", "Se identificaron los nichos de clientes y sus hábitos de consumo.", "Se validó la viabilidad comercial de la fusión de los puntos de venta."], image: fondoMercedes, logo: logoMercedes },
  { id: 3, client: "O'REILLY AUTOPARTES", objetivos: "Analizar las ciudades de México donde tienen presencia para comprender percepción, hábitos y preferencias del público, detectar barreras y oportunidades y fortalecer posicionamiento.", resultados: ["Se identificaron los segmentos clave de mercado y sus hábitos de compra.", "Se diseñaron estrategias localizadas por las diferencias regionales detectadas.", "Se revelaron fortalezas competitivas en fidelización y percepción de precios."], image: fondoOreilly, logo: logoOreilly },
  { id: 4, client: "ITESO", objetivos: "Evaluar la percepción, atractivo y posicionamiento de las carreras de Ciencias de la Comunicación, Gestión Cultural y Periodismo y Comunicación Pública, con el fin de identificar mejoras estratégicas en su denominación y comunicación.", resultados: ["Se detectaron barreras de comprensión y percepción en los nombres de las carreras.", "Se propusieron denominaciones más claras y atractivas con base en votaciones.", "Se detectaron áreas de mejora en estrategia de comunicación y conexión con mercado laboral."], image: fondoIteso, logo: logoIteso },
  { id: 5, client: "CASAS JAVER", objetivos: "Identificar las tendencias y criterios de preferencia en la compra de vivienda horizontal y vertical. Definir el perfil del mercado potencial y los factores clave en su decisión de compra.", resultados: ["Se identificaron las principales necesidades y expectativas del mercado en distintas regiones del país.", "Se determinaron los atributos de mayor valor y percepción para el consumidor final.", "Se establecieron estrategias comerciales, de producto y de comunicación para fortalecer el posicionamiento de la marca."], image: fondoJaver, logo: logoJaver },
  { id: 6, client: "PRO MÉXICO", objetivos: "Conocer la percepción e imagen del país en mercados estratégicos internacionales, con el fin de diseñar campaigns que fortalezcan la marca país \"México\" para la inversión extranjera directa y la exportación de bienes y servicios.", resultados: ["Se detectaron oportunidades de seguridad e innovación para el desarrollo industrial en los diferentes sectores productivos del país.", "Se creó \"México significa oportunidad\" para mejorar la percepción y el posicionamiento.", "Se atrajeron cientos de millones de dólares para el desarrollo sectorial automotriz, aeroespacial, de energía, entre otros."], image: fondoPromexico, logo: logoPromexico },
  { id: 7, client: "CAJA POPULAR TAMAZULA", objetivos: "Evaluar viabilidad para la expansión de la marca. Diagnosticar la percepción y satisfacción de la base de socios actuales para fortalecer fidelización. Identificar brechas entre oferta y demandas del mercado para optimizar la competitividad.", resultados: ["Se definieron zonas geográficas con mayor potencial de rentabilidad y menor riesgo.", "Se detectaron oportunidades clave para la modernización tecnológica y operativa.", "Se identificaron a tiempo brechas de satisfacción y riesgos de fuga para los socios."], image: fondoCpt, logo: logoCpt },
  { id: 8, client: "LIZ MUEBLES", objetivos: "Conocer la participación de mercado de los competidores en Centroamérica. Detectar las necesidades, hábitos y preferencias del consumidor. Identificar canales de distribución potenciales.", resultados: ["Identificación de tendencias y preferencias del mercado para Nicaragua y Panamá.", "Propuestas de desarrollo de nuevos productos para el mercado centroamericano.", "Estrategias de posicionamiento e incursión para Centroamérica."], image: fondoLizmuebles, logo: logoLizmuebles },
  { id: 9, client: "TEQUILA HUIZACHE", objetivos: "Identificar las áreas de oportunidad en nuevos mercados para su exportación y comercialización. Determinar viabilidad de expansión a Estados Unidos y Canadá. Descubrir oportunidad de exportar a otros países.", resultados: ["Se identificó un fuerte mercado potencial y viable en Europa", "Se identificaron los principales canales de distribución potenciales.", "Se diseñaron propuestas de estrategias comerciales para la incursión en nuevos mercados."], image: fondoHuizache, logo: logoHuizache },
  { id: 10, client: "CHIZY CHIZ", objetivos: "Evaluar la competitividad de las sucursales en relación a las necesidades y expectativas de los consumidores para definir las áreas de mejora para su expansión en el país.", resultados: ["Se evaluó la experiencia de los clientes cautivos, potenciales y perdidos.", "Se analizó el nivel de recomendación y lealtad por parte de los clientes.", "Se identificaron las expectativas y necesidades del mercado meta."], image: fondoChizychiz, logo: logoChizychiz }
];

export default function OurProjects() {
  const [cases, setCases] = useState<Case[]>(FALLBACK_CASES);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getMarketResearchProjects().then(data => {
      if (data && data.length > 0) setCases(data.map(sanityToCase));
    }).catch(() => {});
  }, []);
  
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  }, [cases.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  }, [cases.length]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <section 
      className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-12 font-montserrat relative overflow-hidden z-10 antialiased select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="font-astonpoliz text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center text-white tracking-wide uppercase leading-tight px-4">
          Conoce algunos de nuestros proyectos
        </h2>

        <div className="relative w-full h-[520px] sm:h-[480px] md:h-[480px] lg:h-[500px] xl:h-[520px] flex items-center justify-center group">
          
          {cases.map((item, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + cases.length) % cases.length;
            const isNext = index === (currentIndex + 1) % cases.length;

            let positionStyle = "opacity-0 scale-75 pointer-events-none absolute z-0";
            
            if (isActive) {
              positionStyle = "opacity-100 scale-100 z-30 translate-x-0 relative cursor-default";
            } else if (isPrev) {
              positionStyle = "opacity-30 scale-90 -translate-x-[35%] sm:-translate-x-[40%] md:-translate-x-[50%] lg:-translate-x-[60%] xl:-translate-x-[55%] z-20 absolute cursor-pointer blur-[1px] hidden sm:block";
            } else if (isNext) {
              positionStyle = "opacity-30 scale-90 translate-x-[35%] sm:translate-x-[40%] md:translate-x-[50%] lg:translate-x-[60%] xl:translate-x-[55%] z-20 absolute cursor-pointer blur-[1px] hidden sm:block";
            }

            return (
              <div 
                key={item.id}
                className={`transition-all duration-700 ease-out w-full max-w-3xl sm:max-w-4xl h-full flex-shrink-0 rounded-2xl ${positionStyle}`}
                onClick={() => {
                  if (isNext) nextSlide();
                  if (isPrev) prevSlide();
                }}
              >
                <div className="w-full h-full relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-[0_0_50px_rgba(0,0,0,0.85)]">
                  
                  <img 
                    src={item.image} 
                    alt={item.client}
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out select-none pointer-events-none ${
                      isActive ? 'scale-100 brightness-[0.35] blur-0' : 'scale-105 brightness-50 blur-[2px]'
                    }`}
                    draggable={false}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {isActive && (
                    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6 lg:p-8 animate-fade-in">
                      <div className="w-full bg-black/45 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col gap-4 sm:gap-5 shadow-2xl max-h-[85%] overflow-y-auto no-scrollbar">
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 md:gap-8 items-center">
                          
                          <div className="md:col-span-4 flex flex-col justify-center items-start">
                            <div className="h-10 sm:h-12 lg:h-14 w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] flex items-center mb-2 sm:mb-3">
                              <img 
                                src={item.logo} 
                                alt={`Logo ${item.client}`} 
                                className="max-h-full max-w-full object-contain object-left pointer-events-none select-none"
                                draggable={false}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 sm:w-5 lg:w-6 h-[2px] bg-[#e6af41]"></div>
                              <span className="text-[#e6af41] font-bold tracking-widest text-[8px] sm:text-[10px] lg:text-xs uppercase font-montserrat">
                                {item.client}
                              </span>
                            </div>
                          </div>

                          <div className="md:col-span-8 md:border-l border-white/10 md:pl-4 lg:pl-6">
                            <h4 className="text-[#e6af41] font-astonpoliz text-xs sm:text-sm mb-1 uppercase tracking-wider font-semibold">
                              Objetivos
                            </h4>
                            <p className="text-zinc-300 font-light text-[11px] sm:text-xs lg:text-[13px] leading-relaxed font-montserrat">
                              {item.objetivos}
                            </p>
                          </div>

                        </div>

                        <div className="w-full h-px bg-white/10"></div>

                        <div className="w-full">
                          <h4 className="text-[#e6af41] font-astonpoliz text-xs sm:text-sm mb-2 uppercase tracking-wider font-semibold">
                            Resultados Obtenidos
                          </h4>
                          
                          <ul className="text-zinc-300 font-light text-[11px] sm:text-xs lg:text-[13px] leading-relaxed space-y-1.5 sm:space-y-2 font-montserrat pl-1">
                            {item.resultados.map((res, i) => (
                              <li key={i} className="flex items-start gap-2 sm:gap-3">
                                <span className="text-[#e6af41] text-[10px] sm:text-xs mt-1 select-none">•</span>
                                <span className="flex-1 text-zinc-300">{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Botones de Navegación - Desktop */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#e6af41] hover:border-[#e6af41] hover:text-black hover:scale-110 shadow-xl hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#e6af41] hover:border-[#e6af41] hover:text-black hover:scale-110 shadow-xl hidden md:flex"
          >
            <ChevronRight className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </button>

          {/* Controles para Mobile */}
          <button
            onClick={prevSlide}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-40 w-9 h-9 bg-black/70 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white active:bg-[#e6af41] active:text-black transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-40 w-9 h-9 bg-black/70 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white active:bg-[#e6af41] active:text-black transition-colors duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Indicadores de Paginación */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-8 sm:mt-10 lg:mt-12 flex-wrap max-w-md mx-auto px-4 z-45">
          {cases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-500 rounded-full ${
                idx === currentIndex 
                  ? 'w-8 sm:w-10 h-1.5 sm:h-2 gold-active-bar opacity-100' 
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/20 hover:bg-white/50 opacity-60'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-3 sm:mt-4">
          <span className="text-[10px] sm:text-[11px] text-zinc-500 font-montserrat tracking-[0.2em] sm:tracking-[0.25em] font-semibold">
            {String(currentIndex + 1).padStart(2, '0')} / {String(cases.length).padStart(2, '0')}
          </span>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-14 flex justify-center z-40">
          <a 
            href="https://xeryusinvest.com/portafolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-[#e6af41] text-[#e6af41] font-bold tracking-[0.15em] sm:tracking-[0.18em] uppercase text-[10px] sm:text-xs rounded-full overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#e6af41] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full" />
            <span className="relative z-10 flex items-center gap-2 sm:gap-3 group-hover:text-black transition-colors duration-300">
              Ver portafolio
              <span className="inline-flex transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-[15px] sm:h-[15px]" />
              </span>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}