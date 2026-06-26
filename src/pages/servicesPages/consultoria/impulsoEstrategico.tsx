import { useState, useEffect } from 'react';
import { useContactPopup } from '../../../context/ContactPopupContext';
import { 
  Store, 
  MousePointerClick, 
  MessageSquare, 
  TrendingUp, 
  Lightbulb, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const ejesData = [
  {
    id: 0,
    title: "Consultoría Comercial",
    desc: "Evaluamos tu estrategia comercial actual e identificamos dónde hay mayor potencial de crecimiento y rentabilidad.",
    items: [
      "Estrategia de penetración y conquista de mercados estratégicos",
      "Rediseño de la mezcla comercial por canal y segmento",
      "Optimización de canales de comercialización",
      "Definición de propuesta de valor diferenciada por segmento"
    ],
    cta: "Optimizar mi estrategia comercial",
    waMsg: "Hola WeProm!, Vi su página de consultoría y me interesa optimizar mi estrategia comercial",
    icon: Store,
    theme: {
      text: "text-[#c5362e]",
      bg: "bg-[#c5362e]",
      bgLight: "bg-[#c5362e]/10",
      border: "border-[#c5362e]",
      shadow: "shadow-[0_0_15px_rgba(197,54,46,0.6)]",
      glow: "bg-[#c5362e]/20"
    }
  },
  {
    id: 1,
    title: "Consultoría de Marketing Digital",
    desc: "Auditamos tu ecosistema digital y optimizamos cada punto para mejorar la calidad y volumen de adquisición de clientes.",
    items: [
      "Reestructura del embudo de ventas desde atracción hasta conversión",
      "Estrategia de paid media orientada a resultados",
      "Definición, medición y escalamiento de KPI's",
      "Optimización de conversión y automatización de procesos digitales"
    ],
    cta: "Escalar mi adquisición digital",
    waMsg: "Hola WeProm!, Vi su página de consultoría y me interesa escalar mi adquisición digital",
    icon: MousePointerClick,
    theme: {
      text: "text-[#599ddf]",
      bg: "bg-[#599ddf]",
      bgLight: "bg-[#599ddf]/10",
      border: "border-[#599ddf]",
      shadow: "shadow-[0_0_15px_rgba(89,157,223,0.6)]",
      glow: "bg-[#599ddf]/20"
    }
  },
  {
    id: 2,
    title: "Consultoría en Comunicación Estratégica",
    desc: "Revisamos cómo está comunicando tu marca y afinamos los medios, mensajes y alianzas para un mayor impacto.",
    items: [
      "Creación de estrategia de marca",
      "Estrategia de Relaciones Públicas y medios de alto impacto",
      "Alianzas estratégicas para aumentar alcance y valor",
      "Desarrollo de narrativa y mensajes clave por audiencia"
    ],
    cta: "Elevar mi impacto de marca",
    waMsg: "Hola WeProm!, Vi su página de consultoría y me interesa elevar mi impacto de marca",
    icon: MessageSquare,
    theme: {
      text: "text-[#e6af41]",
      bg: "bg-[#e6af41]",
      bgLight: "bg-[#e6af41]/10",
      border: "border-[#e6af41]",
      shadow: "shadow-[0_0_15px_rgba(230,175,65,0.6)]",
      glow: "bg-[#e6af41]/20"
    }
  },
  {
    id: 3,
    title: "Capacitación a Equipos de Ventas",
    desc: "Elevamos el desempeño de tu equipo comercial con procesos, discurso y métricas que mejoran la tasa de cierre.",
    items: [
      "Estructuración del proceso comercial y experiencia del cliente",
      "Construcción del discurso de valor y negociación estratégica",
      "Indicadores de desempeño y motivación comercial",
      "Entrenamiento en manejo de objeciones y cierre efectivo"
    ],
    cta: "Entrenar a mi equipo comercial",
    waMsg: "Hola WeProm!, Vi su página de consultoría y me interesa entrenar a mi equipo comercial",
    icon: TrendingUp,
    theme: {
      text: "text-[#80b67d]",
      bg: "bg-[#80b67d]",
      bgLight: "bg-[#80b67d]/10",
      border: "border-[#80b67d]",
      shadow: "shadow-[0_0_15px_rgba(128,182,125,0.6)]",
      glow: "bg-[#80b67d]/20"
    }
  },
  {
    id: 4,
    title: "Workshops Estratégicos",
    desc: "Sesiones ejecutivas para recalibrar dirección, resolver cuellos de botella y tomar decisiones con mayor claridad.",
    items: [
      "Talleres de creatividad",
      "Actividades de Teambuilding",
      "Sesiones de ideación estratégica",
      "Dinámicas de innovación"
    ],
    cta: "Solicitar sesión estratégica",
    waMsg: "Hola WeProm!, Vi su página de consultoría y me interesa una sesión estratégica",
    icon: Lightbulb,
    theme: {
      text: "text-white",
      bg: "bg-white",
      bgLight: "bg-white/10",
      border: "border-white",
      shadow: "shadow-[0_0_15px_rgba(255,255,255,0.6)]",
      glow: "bg-white/20"
    }
  }
];

const ServiciosSection = () => {
  const { openPopup } = useContactPopup();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState(false);
  const activeData = ejesData[activeTab];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % ejesData.length);
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const handleManualTabClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveTab(index === activeTab && isMobile ? -1 : index);
  };

  const renderContent = (data: typeof ejesData[number], tabIndex: number) => (
    <div className="w-full bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] lg:min-h-[450px] sm:min-h-[500px] relative overflow-hidden flex flex-col justify-center">

      {/* Glow de fondo */}
      <div
        className={`absolute top-[-20%] right-[-10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] blur-[100px] rounded-full transition-all duration-700 pointer-events-none ${data.theme.glow}`}
      />

      <div
        key={tabIndex}
        className="relative z-10 animate-fade-in flex flex-col h-full"
      >
        <div className="flex-grow">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">
            {data.title}
          </h3>
          <p className="text-zinc-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            {data.desc}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 text-zinc-400 mb-6 sm:mb-8 md:mb-10">
            {data.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.08] transition-colors h-full"
              >
                <div
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 shrink-0 ${data.theme.bg} ${data.theme.shadow}`}
                />
                <span className="text-xs sm:text-sm text-zinc-300 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón CTA a WhatsApp */}
        <div className="mt-auto">
          <button
            onClick={() => openPopup('Consultoría Estratégica')}
            className={`group flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base ${
              tabIndex === 4
                ? 'bg-white text-black hover:bg-zinc-200'
                : `${data.theme.bg} text-black hover:brightness-110 ${data.theme.shadow}`
            }`}
          >
            {data.cta}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 bg-transparent">
      {/* Encabezado */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="font-aston text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
          El impulso estratégico<br />
          que tu{' '}
          <span style={{ color: '#e5ad43' }}>talento interno</span> necesita.
        </h2>
        <p className="mt-3 sm:mt-4 text-white/60 font-montserrat font-semibold text-xs sm:text-sm tracking-widest uppercase">
          Servicios que ofrecemos
        </p>
      </div>

      {/* Layout de pestañas y contenido dinámico */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-stretch">

          {/* Menú lateral (pestañas) */}
          <div className="w-full lg:w-2/5 flex flex-col gap-2 sm:gap-3">
            {ejesData.map((eje, index) => {
              const isActive = activeTab === index;
              const Icon = eje.icon;

              return (
                <div key={index} className="flex flex-col gap-2 sm:gap-3">
                  <button
                    onClick={() => handleManualTabClick(index)}
                    className={`w-full text-left p-3 sm:p-4 md:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group cursor-pointer outline-none ${
                      isActive
                        ? `border ${eje.theme.border} ${eje.theme.bgLight}`
                        : 'border border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                          isActive
                            ? `${eje.theme.bg} text-black ${eje.theme.shadow} scale-110`
                            : `bg-[#111] border ${eje.theme.border} ${eje.theme.text} group-hover:scale-110`
                        }`}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span
                        className={`font-bold transition-colors text-sm sm:text-base ${
                          isActive
                            ? 'text-white'
                            : 'text-white/60 group-hover:text-white'
                        }`}
                      >
                        {eje.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 flex-shrink-0 ${
                        isActive
                          ? `${eje.theme.text} opacity-100 translate-x-0 rotate-90 lg:rotate-0`
                          : `text-white/30 group-hover:${eje.theme.text} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0`
                      }`}
                    />
                  </button>

                  {/* En móvil, el contenido aparece justo debajo de la tarjeta presionada */}
                  {isMobile && isActive && renderContent(eje, index)}
                </div>
              );
            })}
          </div>

          {/* Contenido dinámico — solo en desktop, columna fija a la derecha */}
          {!isMobile && activeTab >= 0 && (
            <div className="w-full lg:w-3/5">
              {renderContent(activeData, activeTab)}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServiciosSection;