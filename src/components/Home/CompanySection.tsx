import LogoIcon from "../../images/ISOTIPODEGRADADO.png";
import React from "react";

import { BarChart2, Target, Lightbulb, Handshake, ArrowUp, ArrowRight, ArrowDown, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const STEPS = [
  {
    id: 'top',
    title: 'Objetivos',
    desc: 'Te ayudamos a alcanzar tus metas de marketing de forma clara y estratégica.',
    color: '#f87171',
    glow: 'rgba(248, 113, 113, 0.35)',
    icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
    arrow: <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />,
    positionClass: 'top-[5%] left-1/2 -translate-x-1/2',
    iconClass: 'top-[12.5%] right-[12.5%] translate-x-1/2 -translate-y-1/2',
    arrowClass: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
  },
  {
    id: 'right',
    title: 'Estrategia',
    desc: 'Diseñamos la mejor ruta y definimos los pasos necesarios para alcanzar hitos.',
    color: '#60a5fa',
    glow: 'rgba(96, 165, 250, 0.35)',
    icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />,
    arrow: <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />,
    positionClass: 'right-[5%] top-1/2 -translate-y-1/2',
    iconClass: 'bottom-[12.5%] right-[12.5%] translate-x-1/2 translate-y-1/2',
    arrowClass: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2'
  },
  {
    id: 'bottom',
    title: 'Ejecución',
    desc: 'Implementamos la estrategia a través de nuestro equipo y procesos especializados.',
    color: '#34d399',
    glow: 'rgba(52, 211, 153, 0.35)',
    icon: <Handshake className="w-5 h-5 md:w-6 md:h-6" />,
    arrow: <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />,
    positionClass: 'bottom-[5%] left-1/2 -translate-x-1/2',
    iconClass: 'bottom-[12.5%] left-[12.5%] -translate-x-1/2 translate-y-1/2',
    arrowClass: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'
  },
  {
    id: 'left',
    title: 'Resultados',
    desc: 'Medimos cada acción para lograr los mejores resultados y cumplir los objetivos.',
    color: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.35)',
    icon: <BarChart2 className="w-5 h-5 md:w-6 md:h-6" />,
    arrow: <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />,
    positionClass: 'left-[5%] top-1/2 -translate-y-1/2',
    iconClass: 'top-[12.5%] left-[12.5%] -translate-x-1/2 -translate-y-1/2',
    arrowClass: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2'
  }
];

function CompanySection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center overflow-hidden py-10 sm:py-14 lg:py-16">
      
      {/* Columna Izquierda: Textos */}
      <div className="flex flex-col items-start lg:items-end order-last lg:order-first z-20">
        <h2 className="font-aston text-[42px] sm:text-[60px] lg:text-[75px] font-normal mb-6 leading-[1.1] text-white text-left lg:text-right">
          Somos una <span className="font-montserrat font-bold block">empresa</span>
          <span className="font-montserrat font-bold block">enfocada en</span>
          <span className="text-soft-gray block mt-2">Resultados</span>
        </h2>
        <p className="font-montserrat text-zinc-400 text-base md:text-lg lg:text-xl font-light max-w-xl text-left lg:text-right leading-relaxed">
          Creamos planes basados en tus objetivos, logrando resultados de crecimiento a corto, mediano y largo plazo.
        </p>
      </div>

      {/* Columna Derecha: El Diagrama Circular */}
      <div className="relative flex items-center justify-center min-h-[350px] sm:min-h-[480px] md:min-h-[580px] lg:min-h-[650px]">
        
        <div className="relative w-full max-w-[550px] aspect-square">
          
          {/* Orbes de fondo */}
          <div className="absolute inset-0 opacity-20 blur-[100px] -z-10 animate-pulse">
            <div className="absolute top-0 right-0 w-greenfield h-40 bg-red-600 rounded-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-600 rounded-full" />
          </div>

          {/* Anillos Estructurales */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/10" />
          <div className="absolute inset-[24%] rounded-full border border-dashed border-white/5" />

          {/* Líneas Diagonales */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45" />

          {/* Isotipo Central */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 bg-[#0a0a0a] rounded-full flex items-center justify-center z-40 border border-white/10 shadow-2xl">
            <img 
              src={LogoIcon} 
              alt="Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain" 
            />
          </div>

          {/* Mapeo de Tarjetas y Elementos */}
          {STEPS.map((step) => {
            const isActive = activeId === step.id;

            return (
              <div key={step.id}>

                {/* Tarjeta Glassmorphism */}
                <div 
                  onMouseEnter={() => setActiveId(step.id)}
                  onMouseLeave={() => setActiveId(null)}
                  className={`absolute ${step.positionClass} w-[26%] aspect-square p-3 md:p-4 z-30 flex flex-col justify-center cursor-pointer rounded-[1.5rem] backdrop-blur-md`}
                  style={{
                    background: isActive ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${isActive ? step.color + '99' : 'rgba(255,255,255,0.05)'}`,
                    boxShadow: isActive
                      ? `0 0 40px 5px ${step.glow}, inset 0 0 20px ${step.glow}, 0 10px 30px -10px rgba(0,0,0,0.8)`
                      : '0 10px 30px -10px rgba(0,0,0,0.5)',
                    transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
                  }}
                >
                  <h3 className="text-[12px] md:text-sm font-bold mb-1" style={{ color: step.color }}>
                    {step.title}
                  </h3>
                  <p className="text-[10px] md:text-[13px] text-zinc-400 leading-snug font-light">
                    {step.desc}
                  </p>
                </div>

                {/* Icono Diagonal */}
                <div className={`absolute ${step.iconClass} z-40`}>
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0a0a0a] border-2 flex items-center justify-center"
                    style={{ 
                      borderColor: step.color, 
                      color: step.color,
                      boxShadow: isActive ? `0 0 20px ${step.glow}` : 'none',
                      transition: 'box-shadow 0.4s ease',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Flecha Indicadora */}
                <div 
                  className={`absolute ${step.arrowClass} z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#111] flex items-center justify-center`}
                  style={{ 
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: isActive ? step.color : 'rgba(255,255,255,0.1)',
                    color: isActive ? step.color : 'rgba(255,255,255,0.3)',
                    boxShadow: isActive ? `0 0 15px ${step.glow}` : 'none',
                    transition: 'border-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease',
                  }}
                >
                  {step.arrow}
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default CompanySection;