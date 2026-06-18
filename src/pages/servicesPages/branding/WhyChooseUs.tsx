import React from 'react';
import { motion } from 'framer-motion';
import { Star, GraduationCap, Globe } from 'lucide-react';

const reasons = [
  {
    title: "Experiencia integral en branding y posicionamiento",
    desc: "Más de una década desarrollando marcas personales, corporativas e institucionales en distintos sectores. Hemos trabajado con líderes, emprendedores y organizaciones que necesitaban alinear su proyección visual con su verdadero nivel de expertise.",
    icon: <Star size={32} />,
    gradient: "radial-gradient(circle at top left, rgba(186, 63, 53, 0.15) 0%, rgba(95, 161, 207, 0.05) 100%)",
    accent: "#ba3f35"
  },
  {
    title: "Metodología integral: WeProm Branding System®",
    desc: "Nuestro proceso une diagnóstico, estrategia, diseño y comunicación en una secuencia estructurada que asegura coherencia y resultados tangibles. Generamos visibilidad, credibilidad y crecimiento profesional.",
    icon: <GraduationCap size={32} />,
    gradient: "radial-gradient(circle at top left, rgba(95, 161, 207, 0.15) 0%, rgba(126, 179, 135, 0.05) 100%)",
    accent: "#5fa1cf"
  },
  {
    title: "Visión internacional y enfoque humano",
    desc: "Con presencia en México y Europa, combinamos una visión global con sensibilidad local. Creamos marcas auténticas que proyectan la esencia de cada profesional u organización, equilibrando estrategia y humanidad en cada detalle.",
    icon: <Globe size={32} />,
    gradient: "radial-gradient(circle at top left, rgba(126, 179, 135, 0.15) 0%, rgba(229, 173, 67, 0.05) 100%)",
    accent: "#7eb387"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-24 px-6 md:px-20 bg-transparent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-montserrat font-bold mb-8"
          >
            <span className="font-light italic text-white/90">¿Por qué </span> elegirnos?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-lg text-white/80 font-montserrat leading-relaxed"
          >
            En WeProm, combinamos estrategia, diseño y comunicación para crear marcas con propósito. 
            No hacemos sólo marcas bonitas: construimos marcas relevantes, duraderas y emocionalmente poderosas.
          </motion.p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative p-8 rounded-[40px] border border-white/10 flex flex-col gap-6 group overflow-hidden"
              style={{ background: item.gradient }}
            >
              {/* Overlay sutil al hacer hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icono con resplandor */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
                style={{ background: `${item.accent}20`, color: item.accent }}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold font-montserrat leading-tight group-hover:text-white transition-colors">
                {item.title}
              </h3>

              <p className="text-white text-sm leading-loose font-montserrat group-hover:text-white/70 transition-colors pt-4">
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