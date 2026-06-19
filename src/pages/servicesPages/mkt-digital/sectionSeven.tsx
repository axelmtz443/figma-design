import React from 'react';
import { motion } from 'framer-motion';

// Importación de la imagen completa de la sección
//import sectionSevenImg from '../../../images/MKT Digital/sectionSeven.png';

const SectionSeven = () => {
  return (
    <section className="relative w-full bg-transparent overflow-hidden flex justify-center items-center py-10 md:py-20">
      
      <div className="container mx-auto px-4 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          viewport={{ once: true }}
          className="w-full max-w-7xl relative group cursor-pointer"
        >
          {/* Brillo ambiental sutil alrededor de la imagen */}
          <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <img 
            src={sectionSevenImg} 
            alt="Newsletter Marketing Experts" 
            className="w-full h-auto object-contain rounded-[1.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </motion.div>
      </div>

    </section>
  );
};

export default SectionSeven;