import React, { useState, useEffect } from 'react';

const stepsData = [
  {
    id: 0,
    title: '1. Inmersión',
    desc: 'Radiografiamos tu negocio: Modelo comercial, equipo y recursos. Identificamos dónde se pierden oportunidades y tus áreas de mejora.',
    color: '#c5362e',
    activeDot: 'bg-[#c5362e] shadow-[0_0_15px_#c5362e]',
    hoverDot: 'group-hover:border-[#c5362e]',
    activeTitle: 'text-[#c5362e]',
    hoverTitle: 'group-hover:text-[#c5362e]',
  },
  {
    id: 1,
    title: '2. Arquitectura',
    desc: 'Definimos la ruta crítica de acción: qué atacar primero, cómo estructurar tu operación comercial y con qué herramientas.',
    color: '#599ddf',
    activeDot: 'bg-[#599ddf] shadow-[0_0_15px_#599ddf]',
    hoverDot: 'group-hover:border-[#599ddf]',
    activeTitle: 'text-[#599ddf]',
    hoverTitle: 'group-hover:text-[#599ddf]',
  },
  {
    id: 2,
    title: '3. Implementación',
    desc: 'Acompañamos a tus equipos en la ejecución para que la consultoría traiga con ella resultados concretos.',
    color: '#80b67d',
    activeDot: 'bg-[#80b67d] shadow-[0_0_15px_#80b67d]',
    hoverDot: 'group-hover:border-[#80b67d]',
    activeTitle: 'text-[#80b67d]',
    hoverTitle: 'group-hover:text-[#80b67d]',
  },
  {
    id: 3,
    title: '4. Escalabilidad',
    desc: 'Evaluamos resultados, identificamos lo que genera mayor retorno y trazamos el siguiente nivel de crecimiento para tu empresa.',
    color: '#e6af41',
    activeDot: 'bg-[#e6af41] shadow-[0_0_15px_#e6af41]',
    hoverDot: 'group-hover:border-[#e6af41]',
    activeTitle: 'text-[#e6af41]',
    hoverTitle: 'group-hover:text-[#e6af41]',
  },
];

export default function FrameworkIntervention() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeStep]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-t border-white/5 bg-transparent">

      {/* ── Cabecera de la sección ── */}
      <div className="mb-12 sm:mb-16 text-center lg:text-left flex flex-col justify-center">
        <h2 className="font-aston text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6 tracking-tight text-center">
          Framework de Intervención
        </h2>
        <p className="text-zinc-200 text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto px-4">
          Nuestra metodología está diseñada para escuchar, acompañar y llevar a tu empresa al siguiente nivel.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16 xl:gap-20">

        {/* ── Logo SVG interactivo ── */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

          <svg
            viewBox="0 0 4100 4100"
            className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[440px] xl:w-[500px] max-w-full relative z-10 overflow-visible"
          >
            <defs>
              <linearGradient
                id="Degradado_amarillo"
                x1="3475.55" y1="2745.24"
                x2="3475.55" y2="2762.93"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#e6af41" />
                <stop offset="1" stopColor="#f9b233" />
              </linearGradient>
              <linearGradient
                id="Degradado_amarillo_2"
                x1="3690.38" y1="812.69"
                x2="3690.38" y2="2989.98"
                xlinkHref="#Degradado_amarillo"
              />
              <linearGradient
                id="Degradado_amarillo_3"
                x1="2346.38" y1="2873.01"
                x2="3884.41" y2="2873.01"
                xlinkHref="#Degradado_amarillo"
              />
            </defs>

            {/* Paso 1 — Inmersión (Rojo) */}
            <g
              onClick={() => setActiveStep(0)}
              className={`origin-center transition-all duration-500 cursor-pointer ${
                activeStep === 0
                  ? 'opacity-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                  : 'opacity-15 grayscale-[50%]'
              }`}
            >
              <path fill="#c5362e" d="M211.4,2806.07s0,.02,0,.02c0-.01,0-.02,0-.03,0,0,0,0,0,0Z" />
              <path fill="#c5362e" d="M211.4,2806.06c-.08-.83-.22-.78,0,0h0Z" />
              <path fill="#c5362e" d="M211.44,2806.23v-.02s-.02-.08-.03-.12c.01.05.02.08.03.13Z" />
              <path
                fill="#c5362e"
                d="M1024.79,2545.56c-2.11,30.14,42.78,368.44-207.13,525.16-63.21,39.64-138.65,59.55-211.89,45.33-269.18-52.23-390.95-315.74-392.56-318.32,0-.02,13.74,86.56,28.69,123.11,200.78,490.8,572.24,455.42,617.5,455.48,196.08.3,530.3-65.8,559.59-526.1.47-7.42-2.74-447.83-4.32-845.06l-385.63-299.79c.25,360.65-1.3,798.25-4.24,840.17Z"
              />
              <path
                fill="#9f241e"
                d="M1748.51,1850.55c-412.39-319.2-758.1-586.35-775.55-597.45-240.92-153.18-448.28-104.58-448.28-104.58,10.91,82,57.78,507.75,73.89,652.34l-73.89-652.34c-215.77,46.66-281.57,258-305.1,341.74-43.06,153.25-13.23,1118.73-6.71,1305.68.08,2.29,20.58,42.26,56.71,93.17,59.67,81.36,168.06,192.49,331.36,225.94-6.31-166,0-1019.45,3.06-1266.25h0s0,0,0,0c-3.06-387.79,308.6-361.2,452.98-245.35-15.49-12.43,297.39,231.24,691.54,536.94v-289.85Z"
              />
            </g>

            {/* Paso 2 — Arquitectura (Azul) */}
            <g
              onClick={() => setActiveStep(1)}
              className={`origin-center transition-all duration-500 cursor-pointer ${
                activeStep === 1
                  ? 'opacity-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                  : 'opacity-15 grayscale-[50%]'
              }`}
            >
              <path
                fill="#599ddf"
                d="M1598.24,657.44c-303.5-.07-511.75,212.07-549.65,374.89-7.25,31.13-16.05,94.16-20.11,145.78l385.89,293.15c.47-56.25,1.28-90.52,2.51-93.51,40.68-302.22,220.13-362.03,293.24-368.68,379.79-59.81,540.04,399.4,540.04,399.4-.6-259.98-213.22-750.95-651.91-751.04Z"
              />
              <path
                fill="#3b82f6"
                d="M3041.68,3258.99c-192.84,377.96-743.62,290.84-792.13-154.18-12.77-117.18,6.75-1672.39,1.3-1689.68-46.31-146.85-185.18-359.52-406.11-405.64,0,0,3.37,1871.78,2.55,1927.07-7.3,487.27,287.5,779.43,632.02,802.5,454.64,30.45,565.87-277.25,592.37-454.75l-29.99-25.31Z"
              />
            </g>

            {/* Paso 3 — Implementación (Verde) */}
            <g
              onClick={() => setActiveStep(2)}
              className={`origin-center transition-all duration-500 cursor-pointer ${
                activeStep === 2
                  ? 'opacity-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                  : 'opacity-15 grayscale-[50%]'
              }`}
            >
              <path
                fill="#80b67d"
                d="M3260.12,353.37c-443.44,0-566.39,304.08-585.9,434.15-10.33,68.84-8.74,233.58-9.08,256.58-1.24,82.66-.02,165.44-.02,248.12,0,117.55-1.31,740.89-2.07,1141.12l416.58,323.85c-.72-504.02-1.31-1369.86-1.18-1397.55,1.26-260.83-32.48-656.27,359.59-659.99-.09-.68,335.67,1.5,469.24,404.76-11.72-569.41-412.7-751.04-647.16-751.04Z"
              />
              <path
                fill="#48935d"
                d="M2661.61,3501.39c147.65-.54,297.7-79.24,380.71-243.55l-379.25-286.49c1.42,407.91,3.75,508.82-1.46,530.04Z"
              />
            </g>

            {/* Paso 4 — Escalabilidad (Amarillo) */}
            <g
              onClick={() => setActiveStep(3)}
              className={`origin-center transition-all duration-500 cursor-pointer ${
                activeStep === 3
                  ? 'opacity-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                  : 'opacity-15 grayscale-[50%]'
              }`}
            >
              <path
                fill="url(#Degradado_amarillo)"
                d="M3475.2,2746.69c-.1,5.76.18,11.46.72,17.12,0-1.61,0-3.2,0-4.83-.46-4.84-.68-9.72-.68-14.63-.01.78-.02,1.61-.04,2.34Z"
              />
              <path
                fill="url(#Degradado_amarillo_2)"
                d="M3475.09,702.94c-2.39,151.7,2.9,1815.32.23,2034.83.32,7.21.52,14.28.59,21.21,18.55,197.08,408.5,333.94,408.5,333.94-.1,1.56-.21,3.12-.32,4.64.21.07.32.11.32.11,4.99-295.61,20.07-1812.46,21.89-1996.09-106.86-318.84-340.5-385.2-431.22-398.65Z"
              />
              <path
                fill="url(#Degradado_amarillo_3)"
                d="M3475.91,2759.34c1.93,218.53-123.65,299.71-303.33,191.06-13.88-8.39-389.29-298.72-826.2-636.96v289.69c442.09,341.25,841.52,646.96,899.92,682.77,58.94,36.15,117.82,74.14,179.11,106.2,59.95,31.36,130.49,44.78,199.92,39.29,82.66-6.54,151.81-61.6,191.35-130.67,34.7-60.61,56.4-122.23,66.24-191.76.57-4.07,1.1-10.02,1.48-16.04,0,0-389.52-136.69-408.5-333.58Z"
              />
            </g>
          </svg>
        </div>

        {/* ── Pasos textuales ── */}
        <div className="w-full lg:w-1/2 relative pl-6 sm:pl-8 md:pl-10 lg:pl-12">
          {/* Línea vertical */}
          <div className="absolute left-2 sm:left-3 md:left-4 top-4 bottom-4 w-[2px] bg-white/10 rounded-full" />

          <div className="flex flex-col gap-6 sm:gap-8">
            {stepsData.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`relative transition-all duration-500 cursor-pointer group ${
                    isActive
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-30 translate-x-2 sm:translate-x-4 hover:opacity-70'
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute -left-[17px] sm:-left-[23px] md:-left-[29px] lg:-left-[33px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all duration-500 ${
                      isActive
                        ? step.activeDot
                        : `bg-[#222] border border-white/20 ${step.hoverDot}`
                    }`}
                  />

                  {/* Título */}
                  <h3
                    className={`font-aston text-xl sm:text-2xl md:text-3xl mb-1.5 sm:mb-2 transition-colors ${
                      isActive
                        ? step.activeTitle
                        : `text-white/50 ${step.hoverTitle}`
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Descripción */}
                  <p
                    className={`text-sm sm:text-base leading-relaxed max-w-md transition-all ${
                      isActive ? 'text-zinc-300' : 'text-zinc-500'
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Botón CTA ── */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <button className="bg-white text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95 shadow-lg">
          Programar sesión informativa
        </button>
      </div>

    </section>
  );
}