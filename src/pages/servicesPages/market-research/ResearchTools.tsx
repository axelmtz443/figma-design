import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const toolsData = [
  {
    id: 'cualitativos',
    title: 'Cualitativos',
    subtitle: 'Profundidad e Insights',
    desc: 'Exploramos comportamientos, motivaciones y emociones de tus consumidores a un nivel profundo.',
    items: [
      'Focus groups',
      'Entrevistas a profundidad',
      'Mystery shopper',
      'Neuromarketing'
    ],
    color: '#c5362e', // Rojo corporativo
    colorAlpha: 'rgba(197, 54, 46, 0.08)',
    number: '01'
  },
  {
    id: 'cuantitativos',
    title: 'Cuantitativos',
    subtitle: 'Datos y Volumen',
    desc: 'Validamos hipótesis con datos duros, estadísticas precisas y modelos matemáticos de alta fiabilidad.',
    items: [
      'Encuestas de Opinión',
      'Paneles de consumidores',
      'Estudios de Satisfacción',
      'Análisis Geoestadístico'
    ],
    color: '#599ddf', // Azul corporativo
    colorAlpha: 'rgba(89, 157, 223, 0.08)',
    number: '02'
  }
];

export default function ResearchTools() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Estilo en línea para la cuadrícula minimalista premium de fondo (Fidelidad con la imagen)
  const gridBackground = {
    backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
  };

  return (
    <section 
      className="w-full min-h-[90vh] bg-transparent text-white flex flex-col overflow-hidden relative select-none antialiased border-t border-gray-900"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Fondo de Cuadrícula Tecnológica (image_92159c.png) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-80" 
        style={gridBackground} 
      />

      {/* Encabezado Superior */}
      <header className="relative z-20 px-6 py-12 md:py-16 sm:px-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-2xl">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-[1.1] tracking-widest text-white"
            style={{ fontFamily: "'Astonpoliz', sans-serif" }}
          >
            Herramientas<br />de Investigación
          </h2>
        </div>
        <p className="text-gray-400 font-light text-sm md:text-base max-w-md md:text-right leading-relaxed">
          Somos especialistas en las diferentes herramientas metodológicas según tu objetivo, ya sea para validar un nuevo proyecto, hasta para descubrir nuevas oportunidades de expansión y desarrollo.
        </p>
      </header>

      {/* Contenedor de Paneles Interactivos */}
      <main className="flex-1 flex flex-col md:flex-row relative z-10 w-full max-w-7xl mx-auto border-x border-white/5">
        {toolsData.map((tool) => {
          const isActive = activeTab === tool.id;
          const isAnyHovered = activeTab !== null;
          const isOtherActive = isAnyHovered && !isActive;

          return (
            <div
              key={tool.id}
              onMouseEnter={() => setActiveTab(tool.id)}
              onMouseLeave={() => setActiveTab(null)}
              onClick={() => setActiveTab(isActive ? null : tool.id)}
              className="group relative border-b md:border-b-0 md:border-r border-white/10 last:border-0 overflow-hidden cursor-pointer flex flex-col justify-center transition-all duration-[700ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] will-change-[flex,background-color]"
              style={{
                // En desktop altera dinámicamente el ancho proporcional. En mobile usa auto-flex.
                flex: typeof window !== 'undefined' && window.innerWidth >= 768 
                  ? (isActive ? 2.5 : isOtherActive ? 0.6 : 1) 
                  : '1 1 auto'
              }}
            >
              {/* Degradado de Fondo interactivo de alta gama */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                style={{ background: `linear-gradient(to top, ${tool.colorAlpha}, transparent)` }}
              />

              {/* Contenido Interno de la Tarjeta */}
              <div className="p-8 sm:p-12 md:p-16 h-full flex flex-col justify-center relative z-10 min-h-[280px] md:min-h-[500px]">
                
                {/* Número de fondo estilizado */}
                <div 
                  className={`absolute top-8 right-8 md:top-12 md:right-12 text-6xl sm:text-8xl md:text-[110px] font-bold leading-none pointer-events-none z-0 transition-all duration-500 font-aston ${
                    isActive 
                      ? 'opacity-100 scale-105' 
                      : 'opacity-5 [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] text-transparent'
                  }`}
                  style={{ 
                    color: isActive ? tool.color : undefined,
                    fontFamily: "'Astonpoliz', sans-serif" 
                  }}
                >
                  {tool.number}
                </div>

                {/* Bloque de textos */}
                <div className={`transition-all duration-500 ${!isActive && isAnyHovered ? 'opacity-30' : 'opacity-100'}`}>
                  
                  {/* Título (Efecto Outline a Relleno Sólido de image_92159c.png) */}
                  <h3 
                    className={`text-3xl sm:text-4xl md:text-5xl uppercase mb-4 tracking-wider transition-all duration-500 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.6)]'
                    }`}
                    style={{ fontFamily: "'Astonpoliz', sans-serif" }}
                  >
                    {tool.title}
                  </h3>

                  {/* Sección expandible optimizada para evitar Layout Shifts bruscos */}
                  <div 
                    className={`grid transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-lg sm:text-xl font-medium text-gray-200 mb-3">
                        {tool.subtitle}
                      </p>
                      <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-8 max-w-xl">
                        {tool.desc}
                      </p>

                      {/* Lista de sub-herramientas con viñeta romboidal */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {tool.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 border-b border-white/5 pb-2">
                            <span 
                              className="w-1.5 h-1.5 rotate-45 flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                              style={{ backgroundColor: tool.color }}
                            />
                            <span className="text-sm md:text-base font-light text-gray-300">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Indicador de acento inferior cinético */}
              <div 
                className="absolute bottom-0 left-0 w-full h-[3px] transition-transform duration-500 origin-left ease-out"
                style={{ 
                  backgroundColor: tool.color,
                  transform: isActive ? 'scaleX(1)' : 'scaleX(0)' 
                }}
              />
            </div>
          );
        })}
      </main>

      {/* Botón Call to Action Inferior Líquido */}
      <div className="relative z-20 w-full flex justify-center pb-12 pt-8 bg-black/20 backdrop-blur-sm">
        <button className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-[#80b67d] hover:text-white transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] font-semibold text-sm sm:text-base tracking-wide active:scale-[0.98]">
          <span>Solicitar Propuesta</span>
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}