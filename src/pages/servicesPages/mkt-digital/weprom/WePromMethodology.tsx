import React, { useState, useEffect } from 'react';
import { Target, ClipboardList, PieChart, LineChart, Layout, Magnet, TrendingUp, RefreshCcw } from 'lucide-react';

const THEME = {
  colors: {
    red: '#c5362e',
    blue: '#599ddf',
    green: '#80b67d',
    yellow: '#e6af41',
    bg: '#000000',
    transparente: 'rgba(0,0,0,0.5)'
  }
};

const METHODOLOGY_STEPS = [
  { id: 1, title: "Análisis de\nMercados", desc: "Comportamiento y\ntendencias del consumidor.", color: THEME.colors.yellow, icon: PieChart, x: 15, y: 20 },
  { id: 2, title: "Investigación de\nCompetencia", desc: "Benchmarking y\ndetección de oportunidades.", color: THEME.colors.blue, icon: LineChart, x: 50, y: 20 },
  { id: 3, title: "Definición de\nObjetivos", desc: "Establecimiento de\nmetas SMART y KPIs.", color: THEME.colors.red, icon: Target, x: 85, y: 20 },
  { id: 4, title: "Plan de\nMarketing", desc: "Diseño de la estrategia\nomnicanal.", color: THEME.colors.green, icon: ClipboardList, x: 70, y: 50 },
  { id: 5, title: "Estrategia de\nContenidos", desc: "Arquitectura de mensajes\ny formatos.", color: THEME.colors.yellow, icon: Layout, x: 30, y: 50 },
  { id: 6, title: "Ejecución\nPaid Media", desc: "Distribución de pauta\ny adquisición.", color: THEME.colors.red, icon: Magnet, x: 15, y: 80 },
  { id: 7, title: "Análisis de\nResultados", desc: "Monitoreo de rendimiento\n(ROI / ROAS).", color: THEME.colors.blue, icon: TrendingUp, x: 50, y: 80 },
  { id: 8, title: "Mejora\nContinua", desc: "Optimización iterativa\nbasada en datos.", color: THEME.colors.green, icon: RefreshCcw, x: 85, y: 80 }
];

const pathData = "M 15 20 L 85 20 C 105 20, 105 50, 85 50 L 15 50 C -5 50, -5 80, 15 80 L 85 80";

const ConnectingLine = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="meth-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={THEME.colors.red} />
          <stop offset="33%" stopColor={THEME.colors.blue} />
          <stop offset="66%" stopColor={THEME.colors.green} />
          <stop offset="100%" stopColor={THEME.colors.yellow} />
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
        className="animate-[flow_5s_linear_infinite]"
        style={{ strokeDasharray: '15 85', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.9))' }}
      />
    </svg>
  </div>
);

export default function WePromMethodology() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useEffect(() => {
    const styles = document.createElement('style');
    styles.innerHTML = `
      @keyframes flow { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
      @keyframes mobileFlow {
        0% { top: -20%; opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
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
    <div className="min-h-screen text-white p-6 md:p-12 lg:p-20 flex flex-col font-montserrat" >

      <header className="max-w-7xl w-full mx-auto mb-16 flex flex-col md:flex-row justify-between items-start gap-8 z-20">
        <div className="md:w-[45%]">
          <h1 className="font-aston text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-2">
            Nuestra metodología<br />
            se basa en resultados.
          </h1>
        </div>
        <div className="md:w-[50%] flex items-center">
          <p className="text-gray-300 text-lg leading-relaxed font-light mt-2 md:mt-0">
            En WeProm hacemos proyectos de Marketing con visión a corto, mediano y largo plazo, los cuales además serán sumamente rentables, optimizando tu presupuesto para lograr más, con menos.
          </p>
        </div>
      </header>

      <main className="w-full max-w-6xl mx-auto relative flex-grow min-h-[600px] md:min-h-[650px] mb-20">

        <ConnectingLine />

        {/* Línea vertical móvil */}
        <div className="absolute left-[39px] top-0 w-[2px] h-full bg-gradient-to-b from-[#c5362e] via-[#599ddf] to-[#e6af41] opacity-30 md:hidden z-0 overflow-hidden">
          <div className="w-full h-32 absolute left-0 meth-mobile-flow bg-gradient-to-b from-transparent via-white to-transparent opacity-80" style={{ boxShadow: '0 0 15px 2px rgba(255,255,255,0.8)' }} />
        </div>

        {/* Desktop grid */}
        <div className="hidden md:block">
          {METHODOLOGY_STEPS.map((step, index) => (
            <div
              key={step.id}
              className="absolute flex flex-col items-center w-56 group cursor-pointer z-10"
              style={{
                top: `calc(${step.y}% - 32px)`,
                left: `${step.x}%`,
                opacity: isLoaded ? 1 : 0,
                transform: `translateX(-50%) ${isLoaded ? 'translateY(0)' : 'translateY(20px)'}`,
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`
              }}
              onMouseEnter={() => setHoveredNode(step.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 bg-[#111]"
                style={{
                  border: `2px solid ${hoveredNode === step.id ? step.color : 'transparent'}`,
                  boxShadow: hoveredNode === step.id ? `0 0 25px ${step.color}90` : '0 10px 15px -3px rgba(0,0,0,0.6)',
                  transform: hoveredNode === step.id ? 'scale(1.2)' : 'scale(1)'
                }}
              >
                <step.icon size={28} color={hoveredNode === step.id ? '#ffffff' : step.color} style={{ transition: 'color 0.3s ease' }} />
              </div>
              <div className="text-center transition-transform duration-300" style={{ transform: hoveredNode === step.id ? 'translateY(8px)' : 'translateY(0)' }}>
                <h3 className="font-aston text-xl mb-2 whitespace-pre-line text-white">{step.title}</h3>
                <p className="text-sm font-light whitespace-pre-line leading-snug transition-colors duration-300" style={{ color: hoveredNode === step.id ? step.color : '#9ca3af' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile list */}
        <div className="md:hidden flex flex-col gap-14 py-8 relative z-10 w-full px-4">
          {[...METHODOLOGY_STEPS].sort((a, b) => a.id - b.id).map((step, index) => (
            <div
              key={step.id}
              className="flex items-center gap-6"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.5s ease-out ${index * 0.1}s`
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-[#111] z-10 shadow-lg" style={{ border: `2px solid ${step.color}` }}>
                <step.icon size={24} color={step.color} />
              </div>
              <div>
                <h3 className="font-aston text-lg mb-1 whitespace-pre-line text-white">{step.title}</h3>
                <p className="text-xs font-light text-gray-400 whitespace-pre-line">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
