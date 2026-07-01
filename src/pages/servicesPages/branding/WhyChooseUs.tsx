import React from 'react';
import { motion } from 'framer-motion';
import { Star, GraduationCap, Globe } from 'lucide-react';

const reasons = [
  {
    title: "Expertos en Branding y Posicionamiento de Marca",
    desc: "Más de tres décadas desarrollando marcas de alto impacto para casi todos los sectores e industrias, siendo los aliados estratégicos de cientos de empresas.",
    icon: <Star size={28} />,
    gradient: "radial-gradient(circle at top left, rgba(186, 63, 53, 0.15) 0%, rgba(95, 161, 207, 0.05) 100%)",
    accent: "#ba3f35"
  },
  {
    title: "Metodologia integral - WeProm Branding System:",
    desc: "Desde la investigación, hasta desarrollar el ADN de la marca, su estrategia de comunicación y su identidad visual, creamos marcas coherentes y que generan resultados.",
    icon: <GraduationCap size={28} />,
    gradient: "radial-gradient(circle at top left, rgba(95, 161, 207, 0.15) 0%, rgba(126, 179, 135, 0.05) 100%)",
    accent: "#5fa1cf"
  },
  {
    title: "Visión internacional",
    desc: "Con presencia en México, Francia y Estados Unidos, combinamos una visión global con sensibilidad local, creando marcas con potencial de expansion en un corto, mediano o largo plazo.",
    icon: <Globe size={28} />,
    gradient: "radial-gradient(circle at top left, rgba(126, 179, 135, 0.15) 0%, rgba(229, 173, 67, 0.05) 100%)",
    accent: "#7eb387"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-transparent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-bold mb-5 sm:mb-6 md:mb-8 leading-tight"
          >
            <span className="font-light italic text-white/90">¿Por qué </span> elegirnos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-white/80 font-montserrat leading-relaxed"
          >
            En WeProm, combinamos estrategia, diseño creativo y comunicación para crear marcas con propósito. No hacemos sólo marcas bonitas, construimos marcas relevantes, duraderas y emocionalmente poderosas.
          </motion.p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative p-6 sm:p-7 md:p-8 rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/10 flex flex-col gap-4 sm:gap-5 md:gap-6 group overflow-hidden"
              style={{ background: item.gradient }}
            >
              {/* Overlay sutil al hacer hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icono con resplandor */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 transition-transform duration-500 group-hover:scale-110"
                style={{ background: `${item.accent}20`, color: item.accent }}
              >
                {item.icon}
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-bold font-montserrat leading-tight group-hover:text-white transition-colors">
                {item.title}
              </h3>

              <p className="text-white text-xs sm:text-sm leading-loose font-montserrat group-hover:text-white/70 transition-colors pt-2 sm:pt-4">
                {item.desc}
              </p>

              {/* Decoración inferior sutil */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
                style={{ background: item.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;