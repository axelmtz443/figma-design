import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, ClipboardList, Video, MonitorPlay } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NuestroProceso = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const colors = ['#c5362e', '#599ddf', '#80b67d', '#e6af41'];

  const steps = [
    {
      title: 'Conceptualización',
      description: 'Análisis de marca y objetivos, traduciéndolo en una idea creativa clara.',
      icon: <Lightbulb size={24} />,
    },
    {
      title: 'Planeación',
      description: 'Desarrollo de guión, herramientas y logística integral.',
      icon: <ClipboardList size={24} />,
    },
    {
      title: 'Producción',
      description: 'Grabación y dirección creativa-técnica en locación.',
      icon: <Video size={24} />,
    },
    {
      title: 'Postproducción y Entrega',
      description: 'Edición, diseño sonoro e integración gráfica para generar impacto real.',
      icon: <MonitorPlay size={24} />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowCenter = window.innerHeight / 2;
      let currentStep = -1;
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= windowCenter + 50) currentStep = index;
        }
      });
      setActiveStep(currentStep);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-montserrat text-white">
      <div className="max-w-4xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-aston tracking-tight mb-3 sm:mb-4">
            Nuestro Proceso Creativo
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
            Metodología paso a paso para asegurar que cada proyecto supere tus expectativas y cumpla sus objetivos.
          </p>
        </div>

        <div className="relative">

          {/* Línea de fondo */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 sm:w-1.5 bg-neutral-900 rounded-full" />

          {/* Línea de progreso */}
          <div
            className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 sm:w-1.5 rounded-full transition-all duration-500 ease-in-out"
            style={{
              height: activeStep >= 0 ? `${(activeStep / steps.length) * 100}%` : '0%',
              background: activeStep >= 0
                ? `linear-gradient(to bottom, ${colors[0]}, ${colors[activeStep % colors.length]})`
                : 'transparent',
            }}
          />

          {steps.map((step, index) => {
            const isActive  = index <= activeStep;
            const isCurrent = index === activeStep;
            const color     = colors[index % colors.length];
            const isEven    = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className="relative z-10 flex items-center justify-between mb-16 sm:mb-20 md:mb-24 w-full"
              >
                {/* Tarjeta izquierda — solo desktop, pasos pares */}
                <div className={`hidden md:block w-5/12 text-right pr-6 lg:pr-8 transition-all duration-700 ${
                  isEven ? (isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8') : 'opacity-0 pointer-events-none'
                }`}>
                  {isEven && (
                    <div
                      className={`p-5 lg:p-6 rounded-xl bg-neutral-900 border-b-4 transition-all duration-500 ${isCurrent ? 'scale-105' : ''}`}
                      style={{ borderBottomColor: isActive ? color : '#262626' }}
                    >
                      <h3 className="text-lg lg:text-xl font-bold mb-2 transition-colors duration-500" style={{ color: isActive ? color : '#525252' }}>
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                    </div>
                  )}
                </div>

                {/* Nodo central */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center border-4 transition-all duration-700 z-20 bg-black ${
                      isActive ? 'scale-110' : 'scale-100 border-neutral-800 text-neutral-600'
                    }`}
                    style={{
                      borderColor: isActive ? color : '',
                      color:       isActive ? color : '',
                      boxShadow:   isActive ? `0 0 20px ${color}40` : '',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Tarjeta derecha — desktop impares / móvil todos */}
                <div className={`w-full pl-16 sm:pl-20 md:pl-8 md:w-5/12 transition-all duration-700 ${
                  !isEven ? (isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8') : 'md:opacity-0 md:pointer-events-none'
                }`}>
                  <div
                    className={`p-5 lg:p-6 rounded-xl bg-neutral-900 border-b-4 transition-all duration-500 md:${!isEven ? 'block' : 'hidden'} ${isCurrent ? 'scale-105' : ''}`}
                    style={{ borderBottomColor: isActive ? color : '#262626' }}
                  >
                    <h3 className="text-lg lg:text-xl font-bold mb-2 transition-colors duration-500" style={{ color: isActive ? color : '#525252' }}>
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

              </div>
            );
          })}

          {/* CTA final */}
          <div className="relative z-10 flex items-center justify-center mt-12 sm:mt-16 w-full pb-8">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 sm:px-10 py-3 sm:py-4 font-montserrat font-semibold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase rounded-full border border-white/15 text-white hover:border-white/40 hover:scale-105 transition-all duration-300"
            >
              Cotizar Producción
            </button>
          </div>

          <div className="h-[15vh] sm:h-[20vh] md:h-[30vh] w-full" />
        </div>

      </div>
    </section>
  );
};

export default NuestroProceso;