import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Importación de imágenes de clientes — reemplaza los paths según tu estructura
import clientCard1 from '../../../images/BackedByMR/DISCROLLS.png';
import clientCard2 from '../../../images/BackedByMR/interceramic.png';
import clientCard3 from '../../../images/BackedByMR/SENTIES.png';
import clientCard4 from '../../../images/BackedByMR/kenworth.png';
import clientCard5 from '../../../images/BackedByMR/kia.png';

const clients = [
  { id: 1, image: clientCard1, name: 'Cliente 1' },
  { id: 2, image: clientCard2, name: 'Cliente 2' },
  { id: 3, image: clientCard3, name: 'Cliente 3' },
  { id: 4, image: clientCard4, name: 'Cliente 4' },
  { id: 5, image: clientCard5, name: 'Cliente 5' },
];

// Configuración de posiciones del fan (igual a la imagen)
// La tarjeta central está al frente; las demás se rotan y desplazan
const fanConfig = [
  { rotate: -30, translateX: -220, translateY: 20,  scale: 0.85, zIndex: 1 },
  { rotate: -15, translateX: -110, translateY: 10,  scale: 0.92, zIndex: 2 },
  { rotate:   0, translateX:    0, translateY:  0,  scale: 1.00, zIndex: 5 }, // Centro
  { rotate:  15, translateX:  110, translateY: 10,  scale: 0.92, zIndex: 2 },
  { rotate:  30, translateX:  220, translateY: 20,  scale: 0.85, zIndex: 1 },
];

const SectionFive = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden flex flex-col items-center">

      {/* Glow ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Encabezado */}
      <div className="container mx-auto px-6 text-center mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-zinc-400 text-base md:text-lg font-light tracking-wide !font-montserrat mb-2"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          Algunos Clientes que han confiado en nuestro trabajo
        </motion.p>
      </div>

      {/* Fan de Tarjetas */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative flex justify-center items-end w-full"
        style={{ height: '340px' }}
      >
        {clients.map((client, i) => {
          const cfg = fanConfig[i];
          const isHovered = hoveredIndex === i;

          return (
            <motion.div
              key={client.id}
              className="absolute bottom-0 cursor-pointer select-none"
              style={{
                zIndex: isHovered ? 10 : cfg.zIndex,
                transformOrigin: 'bottom center',
              }}
              initial={false}
              animate={{
                rotate: isHovered ? 0 : cfg.rotate,
                x: isHovered ? cfg.translateX * 0.6 : cfg.translateX,
                y: isHovered ? -20 : cfg.translateY,
                scale: isHovered ? 1.08 : cfg.scale,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div
                className="relative rounded-[1.4rem] overflow-hidden shadow-2xl"
                style={{
                  width: '190px',
                  height: '250px',
                  boxShadow: isHovered
                    ? '0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(255,255,255,0.05)'
                    : '0 20px 50px rgba(0,0,0,0.5)',
                }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                {/* Overlay sutil en los bordes */}
                <div className="absolute inset-0 rounded-[1.4rem] ring-1 ring-white/10" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Texto inferior + Botón */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-5 mt-14 relative z-10"
      >
        <h2
          className="text-white text-4xl md:text-5xl font-normal text-center !font-aston"
          style={{ fontFamily: 'var(--font-aston), sans-serif' }}
        >
          Nuestras clientas
        </h2>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white px-10 py-3 rounded-full text-sm md:text-base font-light tracking-wide !font-montserrat transition-all duration-300 backdrop-blur-sm"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          Ver más
        </motion.button>
      </motion.div>

    </section>
  );
};

export default SectionFive;