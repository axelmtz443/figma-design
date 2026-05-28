import React, { useState, useEffect, useRef } from 'react';
import { Target, ClipboardList, CheckCircle2, Code, Award } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Definición de objetivos',
    desc: 'Definimos juntos tus metas, analizamos el mercado y establecemos los plazos ideales para el éxito de tu proyecto.',
    color: '#c5362e',
    colorAlpha: 'rgba(197, 54, 46, 0.12)',
    icon: Target,
  },
  {
    id: 2,
    title: 'Diseño metodológico',
    desc: 'Seleccionamos la estrategia perfecta, definimos el alcance y las herramientas de recolección necesarias.',
    color: '#599ddf',
    colorAlpha: 'rgba(89, 157, 223, 0.12)',
    icon: ClipboardList,
  },
  {
    id: 3,
    title: 'Presentación de propuesta',
    desc: 'Recibes un documento detallado con la solución, tiempos de ejecución y presupuesto ajustado a tu medida.',
    color: '#80b67d',
    colorAlpha: 'rgba(128, 182, 125, 0.12)',
    icon: CheckCircle2,
  },
  {
    id: 4,
    title: 'Desarrollo del proyecto',
    desc: 'Ejecutamos el plan de acción con rigor técnico, supervisión constante y control de calidad.',
    color: '#e6af41',
    colorAlpha: 'rgba(230, 175, 65, 0.12)',
    icon: Code,
  },
  {
    id: 5,
    title: 'Entrega y acompañamiento',
    desc: 'Entregamos los resultados con insights clave y te acompañamos en la implementación de las recomendaciones.',
    color: '#a855f7',
    colorAlpha: 'rgba(168, 85, 247, 0.12)',
    icon: Award,
  },
];

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const activeData = steps.find(s => s.id === activeStep)!;
  const ActiveIcon = activeData.icon;

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setActiveStep(prev => (prev === 5 ? 1 : prev + 1));
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoplay]);

  const handleStepClick = (stepId: number) => {
    setAutoplay(false);
    if (timerRef.current) clearInterval(timerRef.current);
    if (stepId === activeStep) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveStep(stepId);
      setAnimating(false);
    }, 220);
  };

  return (
    <section className="w-full bg-transparent py-20 px-4 sm:px-6 md:px-12 font-sans relative overflow-hidden z-10 antialiased">
      <style dangerouslySetInnerHTML={{ __html: `
        .font-aston { font-family: 'ASTONPOLIZ', 'Anton', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }

        .process-glow {
          transition: background 1s ease, box-shadow 1s ease;
        }

        .step-card {
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .step-card.out {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
        }
        .step-card.in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .progress-bar {
          transition: width 4s linear;
        }

        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 currentColor; }
          50% { box-shadow: 0 0 0 5px transparent; }
        }

        .timeline-dot-active {
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .step-row {
          transition: color 0.3s ease;
        }
      ` }} />

      {/* Glow de fondo que sigue el step activo */}
      <div
        className="process-glow absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 55% 45% at 75% 50%, ${activeData.colorAlpha} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Título */}
        <div className="text-center mb-14">
          <p className="text-[#e6af41] font-semibold tracking-[0.2em] text-xs sm:text-sm mb-3 uppercase font-montserrat">
            Nuestro proceso de trabajo
          </p>
          <h2 className="text-4xl md:text-5xl font-normal tracking-wide text-white font-aston">
            Proyectos a la medida
          </h2>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── Columna izquierda: Timeline ── */}
          <div className="relative pl-8">
            {/* Línea vertical */}
            <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gray-800 rounded-full" />

            <div className="flex flex-col space-y-7">
              {steps.map(step => {
                const isActive = activeStep === step.id;
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className="step-row relative cursor-pointer group flex items-center gap-5"
                  >
                    {/* Dot */}
                    <div className="absolute -left-8 w-8 h-8 flex items-center justify-center z-10">
                      <div
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${isActive ? 'timeline-dot-active' : ''}`}
                        style={{
                          backgroundColor: isActive ? step.color : '#3f3f46',
                          boxShadow: isActive ? `0 0 0 4px ${step.color}30` : 'none',
                          transform: isActive ? 'scale(1.5)' : 'scale(1)',
                        }}
                      />
                    </div>

                    {/* Ícono + Texto */}
                    <div className="flex items-center gap-3 ml-2">
                      <div
                        className="p-2 rounded-xl flex-shrink-0 transition-all duration-300"
                        style={{
                          backgroundColor: isActive ? `${step.color}18` : 'transparent',
                          color: isActive ? step.color : '#52525b',
                        }}
                      >
                        <StepIcon size={18} strokeWidth={isActive ? 2 : 1.5} />
                      </div>
                      <h3
                        className="text-lg sm:text-xl font-bold transition-all duration-300 font-aston"
                        style={{ color: isActive ? '#ffffff' : '#52525b' }}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Columna derecha: Card de detalle ── */}
          <div className="flex items-center justify-center lg:justify-end">
            <div
              className="w-full max-w-md relative"
            >
              {/* Card */}
              <div
                className="bg-[#0d0d0d]/80 backdrop-blur-md border rounded-3xl p-8 sm:p-10 min-h-[320px] sm:min-h-[360px] flex flex-col justify-between relative overflow-hidden transition-all duration-700"
                style={{
                  borderColor: `${activeData.color}35`,
                  boxShadow: `0 24px 50px -20px ${activeData.color}25`,
                }}
              >
                {/* Ícono decorativo de fondo */}
                <div
                  className="absolute top-0 right-0 p-6 transition-all duration-700"
                  style={{ opacity: 0.12 }}
                >
                  <ActiveIcon size={130} color={activeData.color} strokeWidth={0.8} />
                </div>

                {/* Progress bar superior */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-800 rounded-t-3xl overflow-hidden">
                  {autoplay && (
                    <div
                      key={activeStep}
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: activeData.color,
                        animation: 'progress-fill 4s linear forwards',
                      }}
                    />
                  )}
                </div>
                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes progress-fill {
                    from { width: 0%; }
                    to { width: 100%; }
                  }
                ` }} />

                {/* Contenido animado */}
                <div className={`step-card relative z-10 flex flex-col h-full gap-6 ${animating ? 'out' : 'in'}`}>
                  {/* Número */}
                  <span
                    className="font-aston text-6xl sm:text-7xl leading-none"
                    style={{ color: activeData.color, opacity: 0.9 }}
                  >
                    0{activeData.id}
                  </span>

                  {/* Texto */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-2xl sm:text-3xl font-bold text-white font-aston leading-tight">
                      {activeData.title}
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light font-montserrat">
                      {activeData.desc}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div
                    className="w-10 h-[2px] rounded-full mt-auto transition-all duration-500"
                    style={{ backgroundColor: activeData.color }}
                  />
                </div>
              </div>

              {/* Dots de navegación bajo la card */}
              <div className="flex justify-center gap-2 mt-5">
                {steps.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleStepClick(s.id)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: s.id === activeStep ? 24 : 8,
                      height: 8,
                      backgroundColor: s.id === activeStep ? activeData.color : 'rgba(255,255,255,0.2)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}