import React from 'react';
import { motion } from 'framer-motion';

// Importación de iconos
import icon1 from '../../../images/MKT Digital/sectionSix/SECTION6.png';
import icon2 from '../../../images/MKT Digital/sectionSix/SECTION6_2.png';
import icon3 from '../../../images/MKT Digital/sectionSix/SECTION6_3.png';
import icon4 from '../../../images/MKT Digital/sectionSix/SECTION6_4.png';
import icon5 from '../../../images/MKT Digital/sectionSix/SECTION6_5.png';

const benefits = [
  {
    title: "Rentabilidad",
    description: "Los costos de inversión son menores, lo que implica un ahorro que se puede destinar a otras áreas de la empresa.",
    icon: icon1,
    glowColor: "rgba(239, 68, 68, 0.5)", // Rojo
    borderColor: "hover:border-red-500/50"
  },
  {
    title: "Medición",
    description: "Los resultados permiten conocer la eficacia de la estrategia, además de conocer el ROI para tu Negocio (Retorno de Inversión).",
    icon: icon2,
    glowColor: "rgba(59, 130, 246, 0.5)", // Azul
    borderColor: "hover:border-blue-500/50"
  },
  {
    title: "Conversiones",
    description: "Convierte a tus visitantes en leads, suscriptores y ventas, de manera más sencilla y con mayor alcance.",
    icon: icon3,
    glowColor: "rgba(34, 197, 94, 0.5)", // Verde
    borderColor: "hover:border-green-500/50"
  },
  {
    title: "Contacto Directo",
    description: "La experiencia personalizada genera un mayor engagement con la audiencia.",
    icon: icon4,
    glowColor: "rgba(234, 179, 8, 0.5)", // Amarillo
    borderColor: "hover:border-yellow-500/50"
  },
  {
    title: "Fidelización",
    description: "La interacción con tus clientes mediante las publicaciones de contenido permiten que tus consumidores se vuelvan leales a la marca.",
    icon: icon5,
    glowColor: "rgba(239, 68, 68, 0.5)", // Rojo
    borderColor: "hover:border-red-500/50"
  }
];

const SectionSix = () => {
  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-6xl font-normal leading-tight !font-aston mb-4"
          >
            Hazlo con los Mejores. <br /> Con WeProm Obtendrás:
          </motion.h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              // Eliminamos ${item.glow} de aquí
              className={`group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center transition-all duration-500 ${item.borderColor}`}
            >
              {/* Contenedor del Icono con resplandor DINÁMICO */}
              <div className="relative mb-8">
                {/* Luz de fondo: opacidad inicial 20%, sube a 80% en hover */}
                <div 
                  className="absolute inset-0 blur-2xl opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110" 
                  style={{ backgroundColor: item.glowColor, borderRadius: '50%' }}
                />
                
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-16 h-16 relative z-10 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
          
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 !font-aston">
                {item.title}
              </h3>
              
              <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed !font-montserrat">
                {item.description}
              </p>
          
              {/* Decoración inferior */}
              <div 
                className="absolute bottom-6 w-12 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" 
                style={{ background: `linear-gradient(to right, transparent, ${item.glowColor}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectionSix;