import React from 'react';
import { motion, Variants } from 'framer-motion';

const AboutIntro = () => {
  const sentence = "¿Quiénes somos?";
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-transparent pt-20 sm:pt-28 md:pt-32 pb-8 sm:pb-10 px-4 sm:px-6 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto text-center z-10">
        <motion.h1 
          className="font-aston text-[9vw] sm:text-[52px] md:text-[70px] lg:text-[85px] text-white leading-[1.1] tracking-tight mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {sentence.split(" ").map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="inline-block mr-4">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-montserrat text-white/80 text-[15px] sm:text-[18px] md:text-[22px] leading-relaxed max-w-2xl mx-auto"
        >
          Somos <span className="text-white font-semibold">WeProm</span>, tus próximos aliados en el posicionamiento de tu empresa, marca o producto.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutIntro;