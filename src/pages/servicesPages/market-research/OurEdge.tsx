import { Award, Users, Briefcase, Building2 } from 'lucide-react';
import merca20Logo from '../../../images/marketResearch/merca20-red.png';

const edgeData = [
  {
    title: 'Trayectoria',
    desc: 'Más de 35 años conociendo el mercado y sabiendo analizar cada parte que lo conforma.',
    color: '#c5362e',
    colorAlpha: 'rgba(197, 54, 46, 0.1)',
    Icon: Award,
  },
  {
    title: 'Equipo',
    desc: 'Somos un equipo multidisciplinario y multicultural, adaptado a cualquier tipo de proyecto.',
    color: '#599ddf',
    colorAlpha: 'rgba(89, 157, 223, 0.1)',
    Icon: Users,
  },
  {
    title: 'Experiencia',
    desc: 'Tenemos la experiencia de haber trabajado con casi todas las industrias y sectores.',
    color: '#80b67d',
    colorAlpha: 'rgba(128, 182, 125, 0.1)',
    Icon: Briefcase,
  },
  {
    title: 'Infraestructura',
    desc: 'Contamos con toda la infraestructura para poder apoyarte en tu proyecto, sin importar el tamaño.',
    color: '#d4af37',
    colorAlpha: 'rgba(212, 175, 55, 0.1)',
    Icon: Building2,
  },
];

export default function OurEdge() {
  return (
    <section className="w-full bg-transparent py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12 font-sans relative overflow-hidden z-10 antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Título Principal */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white font-aston"
          >
            Lo que nos hace los mejores
          </h2>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16">
          {edgeData.map((item, index) => {
            const IconComponent = item.Icon;
            return (
              <div
                key={index}
                className="bg-[#0d0d0d]/80 backdrop-blur-md border border-gray-800/60 rounded-2xl p-6 sm:p-7 lg:p-8 flex flex-col items-start justify-between min-h-[200px] sm:min-h-[360px] lg:min-h-[400px] transition-all duration-300 hover:border-gray-700/80 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] group will-change-transform"
              >
                <div className="w-full">
                  <div
                    className="p-2.5 sm:p-3 rounded-xl inline-flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: item.colorAlpha,
                      color: item.color,
                    }}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3
                    className="text-xl sm:text-xl font-bold text-white mb-3 sm:mb-4 tracking-wide"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-base sm:text-base leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div 
                  className="w-6 sm:w-8 h-[2px] mt-5 sm:mt-6 rounded-full opacity-40 transition-all duration-300 group-hover:w-10 sm:group-hover:w-16"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            );
          })}
        </div>

        {/* Footer Subtext & Merca2.0 */}
        <div className="text-center space-y-4 sm:space-y-5 lg:space-y-6 pt-2 sm:pt-4">
          <p 
            className="text-lg sm:text-xl md:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed tracking-wide px-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Formamos parte del ranking de mejores agencias de Investigación de mercados en <span className="text-white font-semibold">TODO MÉXICO</span>.
          </p>
          
          <div className="flex justify-center pt-1 sm:pt-2">
            <img 
              src={merca20Logo} 
              alt="Ranking Merca 2.0 México" 
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}