import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import bgImage from '../../images/About/LOGOSECCION2.png';

function SectionOne() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Efecto Parallax: La imagen se mueve más lento y se oscurece al bajar
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Imagen de fondo con Parallax y Scale */}
      <motion.div
        style={{ 
          backgroundImage: `url(${bgImage})`,
          y: yImage,
          scale: scaleImage
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay degradado para asegurar legibilidad premium */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </motion.div>

      {/* Contenedor de Texto Animado */}
      <motion.div 
        style={{ opacity: opacityText }}
        initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex flex-col items-center justify-center sm:justify-end px-4 sm:px-8 text-center sm:pb-20"
      >
        <h1 className="font-aston text-[44px] sm:text-[68px] lg:text-[95px] text-white leading-[1.05] tracking-tight mb-4 sm:mb-6 max-w-6xl mx-auto">
          Construyendo el éxito de tu marca juntos.
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-montserrat text-white/70 text-[16px] sm:text-[23px] lg:text-[25px] leading-relaxed max-w-3xl mx-auto"
        >
          Tenemos el propósito de compartir contigo nuestra experiencia para que superes tus objetivos de negocio.
        </motion.p>
      </motion.div>

      {/* Indicador de scroll minimalista */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
      />
    </section>
  );
}

export default SectionOne;