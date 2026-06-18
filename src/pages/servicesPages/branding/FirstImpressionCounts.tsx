import { motion } from 'framer-motion';

// Imports de imágenes (Fila 1: 6 imágenes)
import b1_1 from '../../../images/branding/banner1_1.png';
import b1_2 from '../../../images/branding/banner1_2.png';
import b1_3 from '../../../images/branding/banner1_3.png';
import b1_4 from '../../../images/branding/banner1_4.png';
import b1_5 from '../../../images/branding/banner1_5.png';
import b1_6 from '../../../images/branding/banner1_6.png';

// Imports de imágenes (Fila 2: 5 imágenes)
import b2_1 from '../../../images/branding/banner2_1.png';
import b2_2 from '../../../images/branding/banner2_2.png';
import b2_3 from '../../../images/branding/banner2_3.png';
import b2_4 from '../../../images/branding/banner2_4.png';
import b2_5 from '../../../images/branding/banner2_5.png';

const imagesRow1 = [b1_1, b1_2, b1_3, b1_4, b1_5, b1_6];
const imagesRow2 = [b2_1, b2_2, b2_3, b2_4, b2_5];

const ScrollingRow = ({ images, direction = 1 }: { images: string[], direction?: number }) => {
  return (
    <div className="flex overflow-hidden gap-6 py-2">
      <motion.div 
        className="flex gap-6 flex-nowrap"
        animate={{ 
          x: direction > 0 ? [0, -1920] : [-1920, 0] 
        }}
        transition={{ 
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // Aumenté un poco el tiempo para que sea más elegante/lento
            ease: "linear",
          }
        }}
      >
        {/* Triplicamos para asegurar que no haya huecos negros en pantallas ultra-wide */}
        {[...images, ...images, ...images].map((src, idx) => (
          <div 
            key={idx} 
            className="w-[280px] h-[180px] sm:w-[450px] sm:h-[280px] flex-shrink-0 rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/5 shadow-2xl"
          >
            <img 
              src={src} 
              alt={`Branding Project ${idx}`} 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const FirstImpressionCounts = () => {
  return (
    <section className="relative w-full pt-[9rem] pb-20 overflow-hidden bg-transparent">
      {/* Texto Central */}
      <div className="relative z-20 text-center mb-16 mx-auto max-w-3xl">

        <h2 className="font-aston font-medium text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-6 tracking-tight text-center">
          “La primera impresión nunca se olvida”
        </h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-montserrat text-white text-base sm:text-md lg:text-base mb-3 tracking-[0.1em]"
        >
          La identidad de tu marca será la manera en que tus clientes te percibirán y recordarán, por ello, es importante desarrollar un concepto creativo único que transmita los objetivos y diferenciadores de tu empresa, producto o servicio.

        </motion.p>
        
      </div>

      {/* Grid de Imágenes Animado */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <ScrollingRow images={imagesRow1} direction={1} />
        <ScrollingRow images={imagesRow2} direction={-1} />
      </div>

      <div className="flex mt-12 justify-center w-full">
        <button className="px-10 py-4 bg-white hover:bg-gray-400 text-black font-montserrat font-bold rounded-full transition-all duration-300 text-sm sm:text-base min-w-[220px]">
          Ver Portafolio
        </button>
        
      </div>

      {/* Degradados laterales Pro (más anchos para mejor efecto) */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default FirstImpressionCounts;