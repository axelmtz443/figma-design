import { useState } from 'react';
import { MonitorPlay, Smartphone, Box, Camera, Building2 } from 'lucide-react';

const DroneIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    <path d="M10.5 10.5 7 7" />
    <path d="M13.5 10.5 17 7" />
    <path d="M10.5 13.5 7 17" />
    <path d="M13.5 13.5 17 17" />
    <circle cx="5" cy="5" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
  </svg>
);

const SolucionesAudiovisuales = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Video Institucional',
      description: 'Narrativa audiovisual de alta calidad para proyectar la solidez, cultura y visión de tu corporativo ante el mundo.',
      icon: <Building2 size={28} />,
      color: '#c5362e',
    },
    {
      id: 2,
      title: 'Video Publicitario',
      description: 'Campañas comerciales diseñadas para capturar la atención, detonar conversiones y escalar tus ventas en TV o medios digitales.',
      icon: <MonitorPlay size={28} />,
      color: '#e6af41',
    },
    {
      id: 3,
      title: 'Social Media',
      description: 'Reels publicitarios, UGC y testimoniales. Narrativa visual ágil y optimizada para retener la atención y convertir seguidores en clientes.',
      icon: <Smartphone size={28} />,
      color: '#599ddf',
    },
    {
      id: 4,
      title: 'Animación 2D y 3D',
      description: 'Damos vida a tus conceptos. Motion graphics y modelado 3D de alta calidad para comunicar mensajes complejos de manera atractiva y efectiva.',
      icon: <Box size={28} />,
      color: '#80b67d',
    },
    {
      id: 5,
      title: 'Fotografía Profesional',
      description: 'Capturamos la esencia de tu marca con una dirección de arte impecable. Fotografía de producto, editorial y corporativa de primer nivel.',
      icon: <Camera size={28} />,
      color: '#c5362e',
    },
    {
      id: 6,
      title: 'Producción con Drones',
      description: 'Perspectivas que elevan el valor de tu producción. Vuelos FPV inmersivos y tomas panorámicas estabilizadas con calidad cinematográfica.',
      icon: <DroneIcon size={28} />,
      color: '#599ddf',
    },
  ];

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white">

      {/* Encabezado */}
      <div className="text-center mb-10 sm:mb-12 max-w-3xl px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-aston tracking-tight mb-3 sm:mb-4 text-white">
          Soluciones Audiovisuales Integrales
        </h2>
        <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
          Desarrollamos proyectos escalables con un enfoque estratégico. Selecciona un servicio para conocer más.
        </p>
      </div>

      {/* Tarjetas expansibles - Responsive */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-3 lg:gap-4 h-auto lg:h-[350px]">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.id}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] overflow-hidden rounded-xl sm:rounded-2xl border border-neutral-800 bg-neutral-900
                ${isActive ? 'h-[240px] sm:h-[260px] lg:h-full lg:flex-[3]' : 'h-[64px] sm:h-[68px] lg:h-full lg:flex-1'}
              `}
            >
              {/* Fondo con brillo dinámico */}
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(to bottom right, ${service.color}20, transparent)`,
                  opacity: isActive ? 1 : 0,
                }}
              />

              {/* Contenido colapsado — móvil */}
              <div className={`absolute inset-0 flex items-center px-4 sm:px-5 transition-opacity duration-300 lg:hidden ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}`}>
                <div className="flex-shrink-0 mr-3 sm:mr-4" style={{ color: service.color }}>
                  <div className="transform scale-75 sm:scale-90">{service.icon}</div>
                </div>
                <h3 className="text-white/70 font-bold text-sm sm:text-base truncate">
                  {service.title}
                </h3>
              </div>

              {/* Contenido vertical — desktop colapsado */}
              <div className={`absolute inset-0 flex-col items-center justify-start pt-4 sm:pt-6 pb-4 sm:pb-6 transition-opacity duration-300 hidden lg:flex ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div style={{ color: service.color }}>{service.icon}</div>
                <span
                  className="text-white/40 font-bold whitespace-nowrap tracking-wider uppercase text-xs sm:text-sm mt-auto"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {service.title}
                </span>
              </div>

              {/* Contenido expandido */}
              <div className={`absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-start transition-opacity duration-700 ${isActive ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'}`}>
                {/* Ícono decorativo de fondo */}
                <div
                  className="absolute -right-6 sm:-right-8 -top-6 sm:-top-8 opacity-5"
                  style={{ color: service.color, transform: 'scale(2.5) sm:scale(3)' }}
                >
                  {service.icon}
                </div>

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg border"
                    style={{
                      backgroundColor: `${service.color}20`,
                      borderColor: service.color,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-montserrat mb-2 sm:mb-3 text-white">
                    {service.title}
                  </h3>

                  <p className="text-white/60 font-montserrat font-light text-xs sm:text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Línea inferior — solo móvil */}
              <div
                className="absolute bottom-0 left-0 h-1 transition-all duration-700 lg:hidden"
                style={{ backgroundColor: service.color, width: isActive ? '100%' : '0%' }}
              />
            </div>
          );
        })}
      </div>

      {/* Botón CTA */}
      <div className="mt-10 sm:mt-12 lg:mt-16">
        <button
          className="px-6 sm:px-8 py-3 sm:py-4 font-aston font-bold rounded-full flex items-center gap-2 group transition-all duration-300 text-black text-sm sm:text-base"
          style={{
            background: 'white',
            border: '2px solid transparent',
          }}
        >
          Cotizar Proyecto
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default SolucionesAudiovisuales;