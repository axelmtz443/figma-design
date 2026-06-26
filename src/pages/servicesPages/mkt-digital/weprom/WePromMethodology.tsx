import { useState, useEffect } from 'react';
import { Target, ClipboardList, Magnet, TrendingUp } from 'lucide-react';
import { useContactPopup } from '../../../../context/ContactPopupContext';

const THEME = {
  colors: {
    red: '#c5362e',
    blue: '#599ddf',
    green: '#80b67d',
    yellow: '#e6af41',
  }
};

const STEPS = [
  { id: 1, title: "Diagnóstico",          desc: "Identificamos tus objetivos",              color: THEME.colors.yellow, icon: Target,        x: 10, y: 50 },
  { id: 2, title: "Propuesta de Trabajo", desc: "Definimos las herramientas necesarias",    color: THEME.colors.blue,   icon: ClipboardList, x: 37, y: 50 },
  { id: 3, title: "Ejecución",            desc: "Desarrollamos la estrategia y lanzamos",  color: THEME.colors.red,    icon: Magnet,        x: 63, y: 50 },
  { id: 4, title: "Optimización",         desc: "Medimos resultados y escalamos",           color: THEME.colors.green,  icon: TrendingUp,    x: 90, y: 50 },
];

const pathData = "M 10 50 L 90 50";

const ConnectingLine = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="meth-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={THEME.colors.yellow} />
          <stop offset="33%"  stopColor={THEME.colors.blue}   />
          <stop offset="66%"  stopColor={THEME.colors.red}    />
          <stop offset="100%" stopColor={THEME.colors.green}  />
        </linearGradient>
      </defs>
      <path d={pathData} fill="none" stroke="url(#meth-line-gradient)" strokeWidth="3" vectorEffect="non-scaling-stroke" className="opacity-70" />
      <path
        d={pathData}
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        vectorEffect="non-scaling-stroke"
        pathLength="100"
        className="animate-[flow_4s_linear_infinite]"
        style={{ strokeDasharray: '15 85', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.9))' }}
      />
    </svg>
  </div>
);

export default function WePromMethodology() {
  const { openPopup } = useContactPopup();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useEffect(() => {
    const styles = document.createElement('style');
    styles.innerHTML = `
      @keyframes flow { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
      @keyframes mobileFlow {
        0%   { top: -20%; opacity: 0; }
        10%  { opacity: 1; }
        90%  { opacity: 1; }
        100% { top: 100%; opacity: 0; }
      }
      .meth-mobile-flow { animation: mobileFlow 3s linear infinite; }
    `;
    styles.id = 'meth-styles';
    document.head.appendChild(styles);
    setTimeout(() => setIsLoaded(true), 100);
    return () => { document.getElementById('meth-styles')?.remove(); };
  }, []);

  return (
    <div className="text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col font-montserrat">

      <header className="max-w-7xl w-full mx-auto mb-8 sm:mb-10 lg:mb-12 z-20">
        <h1 className="font-aston text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white text-center">
          Proyectos a la medida<br />de tus objetivos
        </h1>
      </header>

      <main className="w-full max-w-6xl mx-auto relative min-h-[240px] sm:min-h-[260px] lg:min-h-[280px] mb-8 sm:mb-10">

        <ConnectingLine />

        <div className="absolute left-[35px] sm:left-[39px] top-0 w-[2px] h-full bg-gradient-to-b from-[#e6af41] via-[#599ddf] to-[#80b67d] opacity-30 md:hidden z-0 overflow-hidden">
          <div className="w-full h-24 sm:h-28 lg:h-32 absolute left-0 meth-mobile-flow bg-gradient-to-b from-transparent via-white to-transparent opacity-80" style={{ boxShadow: '0 0 15px 2px rgba(255,255,255,0.8)' }} />
        </div>

        <div className="hidden md:block">
          {STEPS.map((step, index) => (
            <div
              key={step.id}
              className="absolute flex flex-col items-center w-44 sm:w-48 lg:w-56 group cursor-pointer z-10"
              style={{
                top: `calc(${step.y}% - 28px)`,
                left: `${step.x}%`,
                opacity: isLoaded ? 1 : 0,
                transform: `translateX(-50%) ${isLoaded ? 'translateY(0)' : 'translateY(20px)'}`,
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
              }}
              onMouseEnter={() => setHoveredNode(step.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 bg-[#111]"
                style={{
                  border: `2px solid ${hoveredNode === step.id ? step.color : 'transparent'}`,
                  boxShadow: hoveredNode === step.id ? `0 0 25px ${step.color}90` : '0 10px 15px -3px rgba(0,0,0,0.6)',
                  transform: hoveredNode === step.id ? 'scale(1.2)' : 'scale(1)',
                }}
              >
                <step.icon 
                  className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px]" 
                  color={hoveredNode === step.id ? '#ffffff' : step.color} 
                  style={{ transition: 'color 0.3s ease' }} 
                />
              </div>
              <div className="text-center transition-transform duration-300" style={{ transform: hoveredNode === step.id ? 'translateY(6px) sm:translateY(8px)' : 'translateY(0)' }}>
                <h3 className="font-aston text-base sm:text-lg lg:text-xl mb-1.5 sm:mb-2 text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm font-light leading-snug transition-colors duration-300" style={{ color: hoveredNode === step.id ? step.color : '#9ca3af' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-10 sm:gap-12 lg:gap-14 py-6 sm:py-8 relative z-10 w-full px-3 sm:px-4">
          {STEPS.map((step, index) => (
            <div
              key={step.id}
              className="flex items-center gap-4 sm:gap-5 lg:gap-6"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.5s ease-out ${index * 0.1}s`,
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-[#111] z-10 shadow-lg" style={{ border: `2px solid ${step.color}` }}>
                <step.icon 
                  className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px]" 
                  color={step.color} 
                />
              </div>
              <div>
                <h3 className="font-aston text-base sm:text-lg mb-0.5 sm:mb-1 text-white">{step.title}</h3>
                <p className="text-[11px] sm:text-xs font-light text-gray-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </main>

      <div className="flex justify-center pb-4">
        <button
          onClick={() => openPopup('Marketing Digital')}
          className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 font-montserrat font-semibold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase rounded-full border border-white/15 text-white hover:border-white/40 hover:scale-105 transition-all duration-300"
        >
          Iniciar Proceso
        </button>
      </div>

    </div>
  );
}