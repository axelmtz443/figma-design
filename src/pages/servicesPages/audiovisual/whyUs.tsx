import React, { useState } from 'react';
import { Award, Layers, Maximize } from 'lucide-react';

const PorQueNosotros = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons = [
    {
      id: 1,
      title: '+35 Años de Experiencia',
      description: 'Productores veteranos desarrollando proyectos audiovisuales exitosos para múltiples industrias. Sabemos qué funciona y cómo ejecutarlo.',
      icon: <Award size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      color: '#e6af41',
    },
    {
      id: 2,
      title: 'Creatividad Inhouse',
      description: 'Control total desde la idea hasta el corte final. Al no depender de terceros, garantizamos agilidad operativa y una calidad impecable.',
      icon: <Layers size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      color: '#599ddf',
    },
    {
      id: 3,
      title: 'Infraestructura Escalable',
      description: 'Nos adaptamos a tus objetivos y presupuesto. Tenemos equipo técnico para grabar desde contenido ágil para redes hasta calidad cinematográfica.',
      icon: <Maximize size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      color: '#c5362e',
    },
  ];

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-montserrat text-white">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-aston mb-3 sm:mb-4">
            ¿Por qué producir con nosotros?
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
            Combinamos trayectoria, control interno y flexibilidad técnica para garantizar que tu inversión audiovisual sea rentable.
          </p>
        </div>

        {/* Tarjetas - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {reasons.map((reason, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={reason.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow de fondo */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl transition-all duration-500"
                  style={{ backgroundColor: reason.color, opacity: isHovered ? 0.15 : 0 }}
                />

                {/* Tarjeta */}
                <div
                  className={`relative h-full bg-neutral-900 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 border transition-all duration-500 ${isHovered ? '-translate-y-1 sm:-translate-y-2' : ''}`}
                  style={{
                    borderColor: isHovered ? reason.color : '#262626',
                    boxShadow: isHovered ? `0 10px 30px -10px ${reason.color}60` : 'none',
                  }}
                >
                  {/* Ícono */}
                  <div
                    className="mb-4 sm:mb-5 md:mb-6 inline-flex p-3 sm:p-4 rounded-xl transition-colors duration-500"
                    style={{
                      backgroundColor: isHovered ? `${reason.color}20` : '#171717',
                      color: isHovered ? reason.color : '#737373',
                    }}
                  >
                    {reason.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {reason.title}
                  </h3>

                  <p className="text-white/50 leading-relaxed text-sm sm:text-base group-hover:text-white/70 transition-colors duration-300">
                    {reason.description}
                  </p>

                  {/* Línea inferior animada */}
                  <div
                    className="absolute bottom-0 left-6 sm:left-7 md:left-8 right-6 sm:right-7 md:right-8 h-1 rounded-t-full transition-all duration-500 scale-x-0 group-hover:scale-x-100"
                    style={{ backgroundColor: reason.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PorQueNosotros;