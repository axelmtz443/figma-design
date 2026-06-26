import { useState, useEffect, useRef } from 'react';
import { Target, ClipboardList, CheckCircle2, Code, Award } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Definición de objetivos',
    desc: 'Definimos juntos tus metas, analizamos el mercado y establecemos los plazos ideales para el éxito de tu proyecto.',
    color: '#c5362e',
    colorAlpha: 'rgba(197, 54, 46, 0.08)',
    icon: Target,
  },
  {
    id: 2,
    title: 'Diseño metodológico',
    desc: 'Seleccionamos la estrategia perfecta, definimos el alcance y las herramientas de recolección necesarias.',
    color: '#599ddf',
    colorAlpha: 'rgba(89, 157, 223, 0.08)',
    icon: ClipboardList,
  },
  {
    id: 3,
    title: 'Presentación de propuesta',
    desc: 'Recibes un documento detallado con la solución, tiempos de ejecución y presupuesto ajustado a tu medida.',
    color: '#80b67d',
    colorAlpha: 'rgba(128, 182, 125, 0.08)',
    icon: CheckCircle2,
  },
  {
    id: 4,
    title: 'Desarrollo del proyecto',
    desc: 'Ejecutamos el plan de acción con rigor técnico, supervisión constante y control de calidad.',
    color: '#e6af41',
    colorAlpha: 'rgba(230, 175, 65, 0.08)',
    icon: Code,
  },
  {
    id: 5,
    title: 'Entrega y acompañamiento',
    desc: 'Entregamos los resultados con insights clave y te acompañamos en la implementación de las recomendaciones.',
    color: '#a855f7',
    colorAlpha: 'rgba(168, 85, 247, 0.08)',
    icon: Award,
  },
];

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeData = steps.find((s) => s.id === activeStep) || steps[0];
  const ActiveIcon = activeData.icon;

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev === 5 ? 1 : prev + 1));
        setAnimating(false);
      }, 250);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplay]);

  const handleStepClick = (stepId: number) => {
    setAutoplay(false);
    if (timerRef.current) clearInterval(timerRef.current);
    if (stepId === activeStep) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveStep(stepId);
      setAnimating(false);
    }, 200);
  };

  return (
    <section 
      className="w-full bg-transparent py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12 relative overflow-hidden z-10 antialiased select-none border-t border-zinc-900"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full pointer-events-none blur-[100px] sm:blur-[140px] lg:blur-[160px] opacity-25 transition-all duration-1000 ease-out z-0"
        style={{
          background: `radial-gradient(circle, ${activeData.color} 0%, transparent 65%)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="lg:col-span-7 flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
          
          <div>
            <p className="text-[#e6af41] font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 uppercase">
              Nuestro proceso de trabajo
            </p>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white leading-[1.15]"
              style={{ fontFamily: "'Astonpoliz', sans-serif" }}
            >
              Proyectos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                a la medida
              </span>
            </h2>
          </div>

          {/* Timeline de Pasos */}
          <div className="relative pl-6 sm:pl-8">
            <div className="absolute left-[9px] sm:left-[11px] top-3 bottom-3 w-[2px] bg-zinc-800/80 rounded-full" />

            <div className="flex flex-col space-y-6 sm:space-y-7 lg:space-y-8">
              {steps.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className="relative cursor-pointer group flex items-center py-1 will-change-transform"
                  >
                    <div className="absolute -left-[23px] sm:-left-[29px] w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-black z-20">
                      <div
                        className={`rounded-full transition-all duration-500 ${
                          isActive ? 'scale-125' : 'scale-100'
                        }`}
                        style={{
                          width: isActive ? '10px' : '7px',
                          height: isActive ? '10px' : '7px',
                          backgroundColor: isActive ? step.color : '#3f3f46',
                          boxShadow: isActive ? `0 0 14px 4px ${step.color}60` : 'none',
                        }}
                      />
                    </div>

                    <div className="ml-4 sm:ml-6">
                      <h3
                        className={`text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 tracking-wide ${
                          isActive ? 'text-white translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400'
                        }`}
                        style={{ fontFamily: "'Astonpoliz', sans-serif" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end w-full">
          <div
            className="w-full max-w-sm sm:max-w-md aspect-square bg-[#121214]/40 backdrop-blur-xl border rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-700 [box-shadow:none] group will-change-transform"
            style={{
              borderColor: `${activeData.color}25`,
              boxShadow: `0 30px 60px -25px ${activeData.color}20`,
            }}
          >
            <div
              className="absolute top-0 right-0 p-4 sm:p-5 lg:p-6 transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-6 pointer-events-none"
              style={{ color: activeData.color, opacity: 0.15 }}
            >
              <ActiveIcon className="w-20 h-20 sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]" strokeWidth={1} />
            </div>

            <div
              className={`flex flex-col h-full justify-between transition-all duration-300 ${
                animating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="flex items-start">
                <span 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none select-none tracking-tighter"
                  style={{ color: '#ffffff', opacity: 0.95, fontFamily: "'Astonpoliz', sans-serif" }}
                >
                  0{activeData.id}
                </span>
              </div>

              <div className="mt-auto">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-wide">
                  {activeData.title}
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                  {activeData.desc}
                </p>
              </div>
            </div>

            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-zinc-900 overflow-hidden rounded-t-3xl">
              {autoplay && (
                <div
                  key={activeStep}
                  className="h-full bg-white origin-left"
                  style={{
                    backgroundColor: activeData.color,
                    animation: 'progressFill 5s linear forwards',
                  }}
                />
              )}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes progressFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}