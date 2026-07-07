import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactPopup } from '../../../context/ContactPopupContext';
import { 
  MapPin, 
  Search, 
  Target, 
  CheckCircle, 
  Globe, 
  BarChart2, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  ChevronRight, 
  MessageSquare 
} from 'lucide-react';

const colors = {
  blue: '#599ddf',
  red: '#c5362e',
  green: '#80b67d'
};

const numWA = 5213313857143;

const servicesData = [
  {
    id: 1,
    title: 'Expansión de Negocio',
    focus: 'Toma decisiones de expansión basadas en datos para conquistar nuevos territorios y mercados.',
    color: colors.blue,
    colorAlpha: 'rgba(89, 157, 223, 0.15)',
    colorAlphaMuted: 'rgba(89, 157, 223, 0.04)',
    IconComponent: MapPin,
    ctaText: 'Solicitar Evaluación de Expansión',
    ctaLink: `https://wa.me/${numWA}?text=Hola%20WeProm!%20Me%20interesa%20evaluar%20estrategias%20de%20expansi%C3%B3n.`,
    features: [
      { title: 'Validación del mercado', desc: 'Confirmación de viabilidad y aceptación antes de la inversión.', IconComponent: CheckCircle },
      { title: 'Territorios potenciales', desc: 'Identificación de zonas con alto potencial y demanda.', IconComponent: Globe },
      { title: 'Oportunidades de entrada', desc: 'Análisis competitivo y posicionamiento estratégico en el nuevo punto.', IconComponent: TrendingUp }
    ]
  },
  {
    id: 2,
    title: 'Diagnóstico de Oportunidades',
    focus: 'Identifica áreas de acción para el crecimiento de la marca/empresa.',
    color: colors.red,
    colorAlpha: 'rgba(197, 54, 46, 0.15)',
    colorAlphaMuted: 'rgba(197, 54, 46, 0.04)',
    IconComponent: Search,
    ctaText: 'Agendar Diagnóstico Comercial',
    ctaLink: `https://wa.me/${numWA}?text=Hola%20WeProm!%20Me%20interesa%20un%20diagn%C3%B3stico%20comercial.`,
    features: [
      { title: 'Percepción de marca', desc: 'Cómo te ven realmente tus clientes frente a la competencia.', IconComponent: Users },
      { title: 'Satisfacción del usuario', desc: 'Qué tan satisfechos están tus clientes con tus productos y/o servicios.', IconComponent: CheckCircle },
      { title: 'Competitividad comercial', desc: 'Benchmarking de fortalezas y debilidades frente al sector.', IconComponent: BarChart2 }
    ]
  },
  {
    id: 3,
    title: 'Factibilidad y Validación',
    focus: 'Reduce riesgos mediante inteligencia de mercados, aplicada a nuevos proyectos o ideas de negocio.',
    color: colors.green,
    colorAlpha: 'rgba(128, 182, 125, 0.15)',
    colorAlphaMuted: 'rgba(128, 182, 125, 0.04)',
    IconComponent: Target,
    ctaText: 'Validar mi Proyecto',
    ctaLink: `https://wa.me/${numWA}?text=Hola%20WeProm!%20Me%20interesa%20validar%20mi%20proyecto.`,
    features: [
      { title: 'Viabilidad comercial', desc: 'Análisis de aceptación real en el mercado.', IconComponent: TrendingUp },
      { title: 'Condiciones y Potencial del mercado', desc: 'Dimensionamiento de la demanda y barreras de entrada.', IconComponent: BarChart2 },
      { title: 'Escenarios de riesgo', desc: 'Identificación de amenazas para el óptimo desarrollo del negocio.', IconComponent: AlertTriangle }
    ]
  }
];

export default function StrategicSolutions() {
  const { openPopup } = useContactPopup();
  const [activeId, setActiveId] = useState(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === activeId) || servicesData[0];

  return (
    <section className="w-full bg-transparent py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12 font-sans relative overflow-hidden z-10 antialiased">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 will-change-transform"
            style={{ fontFamily: "'Astonpoliz', sans-serif" }}
          >
            Soluciones Estratégicas
          </h2>
          <p 
            className="max-w-5xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-normal tracking-wide pt-4 sm:pt-5 lg:pt-6 px-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Metodologías probadas para reducir riesgos, identificar oportunidades y tomar decisiones con datos reales, <span className="text-white font-semibold">no suposiciones</span>.
          </p>
        </div>

        {/* Móvil: acordeón — cada tarjeta se expande en su propio lugar al seleccionarla */}
        <div className="lg:hidden flex flex-col gap-3 sm:gap-4">
          {servicesData.map((s) => {
            const isSelected = activeId === s.id;
            const SideIcon = s.IconComponent;
            return (
              <div
                key={s.id}
                className="rounded-2xl border overflow-hidden bg-black/20 backdrop-blur-md transition-colors duration-300"
                style={{ borderColor: isSelected ? `${s.color}a0` : '#1f2937' }}
              >
                <button
                  onClick={() => setActiveId(s.id)}
                  className="w-full text-left p-4 sm:p-5 relative transition-all duration-300 group overflow-hidden will-change-transform touch-manipulation"
                >
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 -z-10 ${isSelected ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundColor: s.colorAlphaMuted }}
                  />
                  <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                    <div
                      className="p-2.5 sm:p-3 rounded-xl transition-all duration-300 ease-out"
                      style={{
                        backgroundColor: isSelected ? s.colorAlpha : 'rgba(255,255,255,0.02)',
                        color: s.color,
                        transform: isSelected ? 'scale(1.05)' : 'scale(1)'
                      }}
                    >
                      <SideIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span
                      className={`flex-1 text-base sm:text-lg tracking-wide transition-colors duration-300 ${isSelected ? 'text-white font-semibold' : 'text-gray-400 font-medium'}`}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {s.title}
                    </span>
                    <ChevronRight
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-300"
                      style={{ transform: isSelected ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5 sm:pb-6 pt-1">
                        <p className="text-gray-400 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed font-light">
                          {s.focus}
                        </p>

                        <div className="flex flex-col gap-3 mb-5 sm:mb-6">
                          {s.features.map((f, i) => {
                            const FeatureIcon = f.IconComponent;
                            return (
                              <div
                                key={i}
                                className="flex items-start gap-3 p-3 bg-[#121212]/30 rounded-xl border border-gray-800/40"
                              >
                                <div className="p-1 rounded-lg mt-0.5" style={{ color: s.color }}>
                                  <FeatureIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                  <h4
                                    className="font-semibold text-white tracking-wide text-xs sm:text-sm"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                  >
                                    {f.title}
                                  </h4>
                                  <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 font-light leading-normal">{f.desc}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <button
                          onClick={() => openPopup('Investigación de Mercados')}
                          className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold text-xs sm:text-sm justify-center text-white shadow-lg transition-all duration-300 active:scale-[0.99] w-full"
                          style={{ backgroundColor: s.color }}
                        >
                          <MessageSquare className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                          <span className="tracking-wider font-montserrat">{s.ctaText}</span>
                          <ChevronRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop: lista + panel de detalle lado a lado */}
        <div className="hidden lg:flex flex-row gap-6 sm:gap-8 items-start">

          <div className="w-full lg:w-1/3 flex flex-col gap-3 sm:gap-4 relative z-20">
            {servicesData.map((s) => {
              const isSelected = activeId === s.id;
              const SideIcon = s.IconComponent;
              return (
                <button 
                  key={s.id} 
                  onClick={() => setActiveId(s.id)}
                  className="w-full text-left p-4 sm:p-5 rounded-2xl border relative transition-all duration-300 group overflow-hidden bg-black/20 backdrop-blur-md will-change-transform touch-manipulation"
                  style={{ 
                    borderColor: isSelected ? `${s.color}a0` : '#1f2937',
                    boxShadow: isSelected ? `0 10px 30px -10px ${s.color}40` : 'none'
                  }}
                >
                  <div 
                    className={`absolute inset-0 transition-opacity duration-300 -z-10 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`}
                    style={{ backgroundColor: s.colorAlphaMuted }}
                  />

                  <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                    <div 
                      className="p-2.5 sm:p-3 rounded-xl transition-all duration-300 ease-out"
                      style={{ 
                        backgroundColor: isSelected ? s.colorAlpha : 'rgba(255,255,255,0.02)', 
                        color: s.color,
                        transform: isSelected ? 'scale(1.05)' : 'scale(1)'
                      }}
                    >
                      <SideIcon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-3" />
                    </div>
                    <span 
                      className={`text-base sm:text-lg tracking-wide transition-colors duration-300 ${isSelected ? 'text-white font-semibold' : 'text-gray-400 group-hover:text-gray-200 font-medium'}`}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {s.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="w-full lg:w-2/3 bg-[#0a0a0a]/70 backdrop-blur-md p-5 sm:p-6 md:p-8 lg:p-10 rounded-3xl border border-gray-800/60 shadow-2xl relative min-h-[400px] sm:min-h-[440px] lg:min-h-[480px] flex flex-col justify-between overflow-hidden will-change-transform">
            
            <div 
              className="absolute top-0 right-0 w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 rounded-full blur-[80px] sm:blur-[100px] opacity-15 transition-all duration-700 ease-out pointer-events-none"
              style={{ 
                backgroundColor: activeService.color,
                transform: 'translate3d(0,0,0)' 
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeId} 
                initial={{ opacity: 0, y: 8 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex flex-col h-full justify-between flex-grow"
              >
                <div>
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 tracking-wide" 
                    style={{ color: activeService.color, fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {activeService.title}
                  </h3>
                  <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                    {activeService.focus}
                  </p>
                  
                  <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {activeService.features.map((f, i) => {
                      const FeatureIcon = f.IconComponent;
                      return (
                        <div 
                          key={i} 
                          className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-[#121212]/30 rounded-xl border border-gray-800/40 hover:border-gray-700/60 transition-all duration-200 group/item"
                        >
                          <div 
                            className="p-1 rounded-lg mt-0.5 transition-transform duration-200 group-hover/item:scale-105" 
                            style={{ color: activeService.color }}
                          >
                            <FeatureIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div>
                            <h4 
                              className="font-semibold text-white tracking-wide text-xs sm:text-sm md:text-base" 
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {f.title}
                            </h4>
                            <p className="text-[11px] sm:text-xs md:text-sm text-gray-400 mt-0.5 font-light leading-normal">{f.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="w-full sm:self-start mt-auto">
                  <button
                    onClick={() => openPopup('Investigación de Mercados')}
                    className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold text-xs sm:text-sm justify-center text-white shadow-lg transition-all duration-300 hover:brightness-110 active:scale-[0.99] w-full relative overflow-hidden group/btn"
                    style={{ backgroundColor: activeService.color }}
                  >
                    <MessageSquare className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    <span className="tracking-wider font-montserrat">{activeService.ctaText}</span>
                    <ChevronRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}