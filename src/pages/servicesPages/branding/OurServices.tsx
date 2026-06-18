import React, { useState } from 'react';
import { PenTool, Fingerprint, Type, RefreshCcw, Target, ArrowUpRight, ChevronDown } from 'lucide-react';

const customStyles = `
  @import url('https://fonts.cdnfonts.com/css/astonpoliz');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  .font-astonpoliz {
    font-family: 'Astonpoliz', 'Montserrat', sans-serif;
    letter-spacing: 0.05em;
  }

  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }

  .bg-noise {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
  }
`;

const brandColors = {
  red: '#c5362e',
  blue: '#599ddf',
  green: '#80b67d',
  yellow: '#e6af41'
};

// Reemplaza con el número real de WhatsApp de Weprom (incluye código de país, sin el signo +)
const WHATSAPP_NUMBER = "5213313857143";

const services = [
  {
    id: '01',
    title: "Creación de Logotipo",
    description: "Desarrollamos tu logotipo bajo un concepto creativo y una personalidad estratégica, listo para representar a tu empresa en cualquier medio.",
    icon: PenTool,
    color: brandColors.red,
    ctaText: "Cotizar Logotipo",
    whatsappMessage: "Hola, me gustaría recibir más información sobre el servicio de Creación de Logotipo."
  },
  {
    id: '02',
    title: "Identidad de Marca",
    description: "Diseñamos las aplicaciones publicitarias, institucionales y los elementos gráficos que harán reconocible a tu marca en cualquier lugar.",
    icon: Fingerprint,
    color: brandColors.blue,
    ctaText: "Desarrollar mi Identidad de Marca",
    whatsappMessage: "Hola, me interesa el servicio de Identidad de Marca."
  },
  {
    id: '03',
    title: "Nombre Comercial",
    description: "Encontramos el nombre ideal para tu marca, empresa, producto o servicio, haciéndolo recordable y con impacto.",
    icon: Type,
    color: brandColors.green,
    ctaText: "Crear un Nombre Memorable",
    whatsappMessage: "Hola, busco ayuda con la creación de un Nombre Comercial (Naming)."
  },
  {
    id: '04',
    title: "Rediseño de Marca",
    description: "Si tu marca ya existe pero necesita evolucionar, la actualizamos para escalar lo que ya construiste.",
    icon: RefreshCcw,
    color: brandColors.yellow,
    ctaText: "Renovar mi Marca",
    whatsappMessage: "Hola, me gustaría cotizar un Rediseño de Marca."
  },
  {
    id: '05',
    title: "Estrategia de Marca",
    description: "Definimos cómo queremos que te recuerden, perfilamos a tus clientes y desarrollamos la comunicación que tu marca necesita.",
    icon: Target,
    color: brandColors.red, 
    ctaText: "Definir Estrategia",
    whatsappMessage: "Hola, quiero información sobre el servicio de Estrategia de Marca."
  }
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-transparent text-white font-montserrat flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      <div className="absolute inset-0 bg-noise z-0"></div>

      {/* Círculo decorativo sutil */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 z-0 transition-colors duration-1000"
        style={{ backgroundColor: services[activeIndex]?.color || 'transparent' }}
      ></div>

      {/* Contenedor principal limitado en ancho (max-w-3xl) */}
      <div className="w-full max-w-3xl mx-auto z-10">
        
        {/* Encabezado */}
        <div className="mb-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[2px] bg-zinc-500"></div>
            <span className="text-zinc-400 font-semibold tracking-wider text-xs uppercase">
              Professional Branding
            </span>
            <div className="w-6 h-[2px] bg-zinc-500"></div>
          </div>
          <h1 className="font-astonpoliz text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-zinc-400 font-light text-sm sm:text-base max-w-lg">
            Construimos marcas con propósito, diseñadas para destacar, conectar y perdurar en la mente de tus consumidores.
          </p>
        </div>

        {/* Acordeón Vertical */}
        <div className="flex flex-col gap-3">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onClick={() => setActiveIndex(isActive ? -1 : index)}
                className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 border ${
                  isActive 
                    ? 'bg-zinc-900/80 shadow-lg' 
                    : 'border-zinc-800/50 bg-zinc-950/30 hover:bg-zinc-900/50'
                }`}
                style={isActive ? { 
                  borderColor: `${service.color}40`,
                } : {}}
              >
                
                {/* Cabecera del Acordeón */}
                <div className="p-5 sm:p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span 
                      className={`font-astonpoliz text-xl sm:text-2xl transition-colors duration-300 ${isActive ? '' : 'text-zinc-600 group-hover:text-zinc-400'}`}
                      style={isActive ? { color: service.color } : {}}
                    >
                      {service.id}
                    </span>
                    
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div 
                        className={`transition-colors duration-300 ${isActive ? '' : 'text-zinc-500 group-hover:text-zinc-300'}`}
                        style={isActive ? { color: service.color } : {}}
                      >
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <h3 className={`font-astonpoliz uppercase tracking-wide text-sm sm:text-base transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Icono de expansión */}
                  <div 
                    className={`transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0 text-zinc-600 group-hover:text-zinc-400'}`}
                    style={isActive ? { color: service.color } : {}}
                  >
                    <ChevronDown size={20} />
                  </div>
                </div>

                {/* Contenido expandible usando Grid para animación suave */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-0 ml-12 sm:ml-[72px]">
                      <p className="text-zinc-300 font-light text-sm sm:text-base leading-relaxed pr-4">
                        {service.description}
                      </p>
                      
                      <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase font-semibold hover:opacity-80 transition-opacity"
                        style={{ color: service.color }}
                      >
                        {service.ctaText} <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA General al final */}
        <div className="mt-10 flex flex-col items-center justify-center">
          <p className="text-zinc-400 font-light text-sm mb-4 text-center">
            ¿No estás seguro de lo que necesitas? Hablemos de tu proyecto.
          </p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, me gustaría agendar una asesoría para mi marca y conocer más sobre sus servicios.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-[#e6af41] text-[#e6af41] font-semibold tracking-wider uppercase text-sm rounded-full hover:bg-[#e6af41] hover:text-black transition-all duration-300 inline-flex items-center gap-2"
          >
            Contactar a un experto
          </a>
        </div>

      </div>
    </div>
  );
}