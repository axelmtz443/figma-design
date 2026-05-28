import React, { useState, useEffect, useRef } from 'react';
import { Target, ClipboardList, CheckCircle2, Code, Award } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Definición de objetivos',
    desc: 'Definimos juntos tus metas, analizamos el mercado y establecemos los plazos ideales para el éxito de tu proyecto.',
    color: '#c5362e', // Rojo
    colorAlpha: 'rgba(197, 54, 46, 0.08)',
    icon: Target,
  },
  {
    id: 2,
    title: 'Diseño metodológico',
    desc: 'Seleccionamos la estrategia perfecta, definimos el alcance y las herramientas de recolección necesarias.',
    color: '#599ddf', // Azul
    colorAlpha: 'rgba(89, 157, 223, 0.08)',
    icon: ClipboardList,
  },
  {
    id: 3,
    title: 'Presentación de propuesta',
    desc: 'Recibes un documento detallado con la solución, tiempos de ejecución y presupuesto ajustado a tu medida.',
    color: '#80b67d', // Verde
    colorAlpha: 'rgba(128, 182, 125, 0.08)',
    icon: CheckCircle2,
  },
  {
    id: 4,
    title: 'Desarrollo del proyecto',
    desc: 'Ejecutamos el plan de acción con rigor técnico, supervisión constante y control de calidad.',
    color: '#e6af41', // Dorado / Amarillo
    colorAlpha: 'rgba(230, 175, 65, 0.08)',
    icon: Code,
  },
  {
    id: 5,
    title: 'Entrega y acompañamiento',
    desc: 'Entregamos los resultados con insights clave y te acompañamos en la implementación de las recomendaciones.',
    color: '#a855f7', // Morado
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
      className="w-full bg-transparent py-24 px-6 sm:px-12 relative overflow-hidden z-10 antialiased select-none border-t border-zinc-900"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Resplandor cinético ambiental trasero (Alineado con el color del paso actual de image_e46c65.png) */}
      {/* Resplandor cinético ambiental premium centrado en el fondo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[500px] rounded-full pointer-events-none blur-[120px] sm:blur-[160px] opacity-25 transition-all duration-1000 ease-out z-0"
        style={{
          background: `radial-gradient(circle, ${activeData.color} 0%, transparent 65%)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* ── COLUMNA IZQUIERDA: Textos y Timeline (7 Columnas) ── */}
        <div className="lg:col-span-7 flex flex-col space-y-12">
          
          {/* Títulos Principales de Alta Gama */}
          <div>
            <p className="text-[#e6af41] font-semibold tracking-[0.25em] text-xs sm:text-sm mb-3 uppercase">
              Nuestro proceso de trabajo
            </p>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider text-white leading-[1.15]"
              style={{ fontFamily: "'Astonpoliz', sans-serif" }}
            >
              Proyectos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                a la medida
              </span>
            </h2>
          </div>

          {/* Timeline de Pasos */}
          <div className="relative pl-8">
            {/* Guía/Eje Vertical */}
            <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-zinc-800/80 rounded-full" />

            <div className="flex flex-col space-y-8">
              {steps.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className="relative cursor-pointer group flex items-center py-1 will-change-transform"
                  >
                    {/* Contenedor del Nodo de la Línea de Tiempo */}
                    <div className="absolute -left-[29px] w-6 h-6 rounded-full flex items-center justify-center bg-black z-20">
                      <div
                        className={`rounded-full transition-all duration-500 ${
                          isActive ? 'scale-125' : 'scale-100'
                        }`}
                        style={{
                          width: isActive ? '12px' : '8px',
                          height: isActive ? '12px' : '8px',
                          backgroundColor: isActive ? step.color : '#3f3f46',
                          boxShadow: isActive ? `0 0 14px 4px ${step.color}60` : 'none',
                        }}
                      />
                    </div>

                    {/* Texto del Paso */}
                    <div className="ml-6">
                      <h3
                        className={`text-xl font-bold transition-all duration-300 tracking-wide ${
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

        {/* ── COLUMNA DERECHA: Glass Card de Detalle (5 Columnas) ── */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end w-full">

          
          <div
            className="w-full max-w-md aspect-square bg-[#121214]/40 backdrop-blur-xl border rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-700 [box-shadow:none] group will-change-transform"
            style={{
              borderColor: `${activeData.color}25`,
              boxShadow: `0 30px 60px -25px ${activeData.color}20`,
            }}
          >
            {/* Ícono Sutil de Fondo (Efecto Marca de Agua en Esquina Superior Derecha de image_e46c65.png) */}
            <div
              className="absolute top-0 right-0 p-6 transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-6 pointer-events-none"
              style={{ color: activeData.color, opacity: 0.15 }}
            >
              <ActiveIcon size={120} strokeWidth={1} />
            </div>

            {/* Contenedor con Opacidad Controlada para Transiciones Cinéticas */}
            <div
              className={`flex flex-col h-full justify-between transition-all duration-300 ${
                animating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
              }`}
            >
              {/* Número de Paso en la Parte Superior */}
              <div className="flex items-start">
                <span 
                  className="text-6xl font-bold leading-none select-none tracking-tighter"
                  style={{ color: '#ffffff', opacity: 0.95, fontFamily: "'Astonpoliz', sans-serif" }}
                >
                  0{activeData.id}
                </span>
              </div>

              {/* Título y Descripción del Bloque Informativo */}
              <div className="mt-auto">
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-wide">
                  {activeData.title}
                </h4>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
                  {activeData.desc}
                </p>
              </div>
            </div>

            {/* Barra de Progreso Avanzada Sincronizada con el Autoplay (Borde Superior) */}
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

      {/* Inyección de Animación de Keyframes Nativa mediante Atributo Style Estructural */}
      <style>{`
        @keyframes progressFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}