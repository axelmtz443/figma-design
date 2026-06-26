import { motion } from 'framer-motion';
import WorldMap from '../General/WorldMap';

const WorldPresence = () => {
  return (
    <section className="w-full bg-transparent py-24 px-6 sm:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header con estilo Tipográfico Premium */}
        <div className="mb-16 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-aston text-[45px] sm:text-[70px] text-white leading-none mb-6"
          >
            Alcance <span className="text-white/30 italic font-light">Global</span><br/>
            Estrategia <span className="text-white/30">Local</span>
          </motion.h2>
          <p className="font-montserrat text-white/40 text-xs sm:text-sm tracking-[0.3em] uppercase max-w-xl">
            Conectando los centros de innovación en América y Europa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Bloque del Mapa Interactivo */}
          <div className="lg:col-span-2">
            <WorldMap />
          </div>

          {/* Columna Lateral de Información */}
          <div className="flex flex-col gap-6">
            
            {/* Card ADN */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex-1 bg-gradient-to-br from-[#141414] to-black p-10 rounded-[40px] border border-white/10 flex flex-col justify-center relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-6 opacity-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45z"/></svg>
               </div>
              <h4 className="font-montserrat text-blue-400 text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">Visión 360°</h4>
              <p className="font-montserrat text-white/70 text-xl leading-relaxed font-light leading-[1.6]">
                "Nuestra presencia en <span className="text-white font-medium italic">tres mercados clave</span> nos permite ejecutar campañas con relevancia cultural inmediata."
              </p>
            </motion.div>

            {/* Card de Acción / Stat */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="bg-white p-10 rounded-[40px] flex flex-col justify-between group transition-all duration-500 cursor-pointer overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-blue-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <div className="relative z-10 flex justify-between items-start mb-6">
                 <div className="bg-black/5 p-4 rounded-2xl group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                 </div>
                 <span className="font-montserrat font-black text-black group-hover:text-white text-3xl italic">2026</span>
              </div>

              <div className="relative z-10">
                <span className="block font-aston text-black group-hover:text-white text-4xl leading-[0.9]">Cobertura Total</span>
                <p className="mt-4 font-montserrat text-black/60 group-hover:text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold">Centro de operaciones globales</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldPresence;