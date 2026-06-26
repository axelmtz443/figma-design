import { motion } from 'framer-motion';

// Importación de la imagen completa de la sección
// Descomenta la línea siguiente cuando tengas la imagen disponible
// import sectionSevenImg from '../../../images/MKT Digital/sectionSeven.png';

// Imagen de respaldo temporal (reemplaza con tu imagen real)
// Usa una URL de placeholder o la ruta correcta a tu imagen
const sectionSevenImg = 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200';

const SectionSeven = () => {
  return (
    <section className="relative w-full bg-transparent overflow-hidden flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20">
      
      <div className="container mx-auto px-3 sm:px-4 flex justify-center items-center">
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
            className="w-full h-auto object-contain rounded-xl sm:rounded-2xl lg:rounded-[1.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </motion.div>
      </div>

    </section>
  );
};

export default SectionSeven;