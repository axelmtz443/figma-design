import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import worldMap from '../../images/world-map.svg';

const locations = [
  { id: 1, city: 'Austin',      country: 'USA', top: '38%', left: '32%', color: 'bg-blue-500' },
  { id: 2, city: 'Guadalajara', country: 'MX',  top: '46%', left: '27%', color: 'bg-emerald-500' },
  { id: 3, city: 'Paris',       country: 'FR',  top: '34%', left: '49%', color: 'bg-indigo-500' },
];

const WorldPresence = () => {
  const [hoveredLoc, setHoveredLoc] = useState<number | null>(null);

  return (
    <section className="w-full overflow-x-hidden bg-transparent py-10 sm:py-16 md:py-24 px-3 sm:px-8 md:px-12 sm:border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8 sm:mb-14 md:mb-16 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-aston text-[32px] sm:text-[52px] md:text-[70px] text-white leading-none mb-3 sm:mb-6"
          >
            Alcance <span className="text-white/30 italic font-light">Global</span><br/>
            Estrategia <span className="text-white/30">Local</span>
          </motion.h2>
          <p className="font-montserrat text-white/40 text-[10px] sm:text-sm tracking-[0.3em] uppercase max-w-xl mx-auto lg:mx-0">
            Conectando los centros de innovación en América y Europa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 relative h-[250px] sm:h-[400px] md:h-[500px] bg-[#0A0A0A] rounded-[24px] sm:rounded-[40px] border border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none bg-[url('/textures/stardust.png')]" />

            <div className="absolute inset-0 p-4 sm:p-12 flex items-center justify-center">
              <img
                src={worldMap}
                alt="World Map"
                className="w-full h-full object-contain opacity-20 grayscale invert brightness-200"
                style={{ maxWidth: '100%' }}
              />
            </div>

            {locations.map((loc) => (
              <div
                key={loc.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ top: loc.top, left: loc.left }}
                onMouseEnter={() => setHoveredLoc(loc.id)}
                onMouseLeave={() => setHoveredLoc(null)}
              >
                <div className="relative flex items-center justify-center cursor-pointer">
                  <span className={`animate-ping absolute inline-flex h-6 w-6 sm:h-8 sm:w-8 rounded-full ${loc.color} opacity-20`}></span>
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 ${loc.color} shadow-[0_0_20px_rgba(255,255,255,0.5)] border border-white/20`}></span>

                  <AnimatePresence>
                    {hoveredLoc === loc.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: -35, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute whitespace-nowrap bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-tighter shadow-xl z-20"
                      >
                        {loc.city.toUpperCase()}, {loc.country}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}

            <div className="absolute bottom-3 sm:bottom-8 left-3 sm:left-8">
              <h3 className="font-aston text-white/5 text-[30px] sm:text-[80px] select-none leading-none">WEPROM</h3>
            </div>
          </motion.div>

          <div className="flex flex-col gap-3 sm:gap-6">

            <motion.div
              whileHover={{ y: -5 }}
              className="flex-1 bg-gradient-to-br from-[#141414] to-black p-5 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[40px] border border-white/10 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 sm:p-6 opacity-10">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45z"/></svg>
              </div>
              <h4 className="font-montserrat text-blue-400 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-3 sm:mb-6 font-bold">Visión 360°</h4>
              <p className="font-montserrat text-white/70 text-sm sm:text-lg md:text-xl leading-[1.6] font-light">
                "Nuestra presencia en <span className="text-white font-medium italic">tres mercados clave</span> nos permite ejecutar campañas con relevancia cultural inmediata."
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 0.98 }}
              className="bg-white p-5 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[40px] flex flex-col justify-between group transition-all duration-500 cursor-pointer overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-blue-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />

              <div className="relative z-10 flex justify-between items-start mb-3 sm:mb-6">
                <div className="bg-black/5 p-2.5 sm:p-4 rounded-2xl group-hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <span className="font-montserrat font-black text-black group-hover:text-white text-xl sm:text-3xl italic">2026</span>
              </div>

              <div className="relative z-10">
                <span className="block font-aston text-black group-hover:text-white text-2xl sm:text-4xl leading-[0.9]">Cobertura Total</span>
                <p className="mt-2 sm:mt-4 font-montserrat text-black/60 group-hover:text-white/60 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">Centro de operaciones globales</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldPresence;