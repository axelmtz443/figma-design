import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';

import CHIZYCHIZ from '../../../images/marketResearch/Projects/CHIZYCHIZ.png';
import COCACOLA from '../../../images/marketResearch/Projects/COCACOLA.png';
import HUIZACHE from '../../../images/marketResearch/Projects/HUIZACHE.png';
import JAVER from '../../../images/marketResearch/Projects/JAVER.png';
import LIZMUEBLES from '../../../images/marketResearch/Projects/LIZMUEBLES.png';
import MERCEDES from '../../../images/marketResearch/Projects/MERCEDES.png';
import OREILLY from '../../../images/marketResearch/Projects/OREILLY.png';
import PROMEXICO from '../../../images/marketResearch/Projects/PROMEXICO.png';
import TAMAZULA from '../../../images/marketResearch/Projects/TAMAZULA.png';

const ChevronLeft = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ArrowUpRight = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
  </svg>
);

const projects = [
  { id: 1, image: CHIZYCHIZ, alt: 'Chizy Chiz' },
  { id: 2, image: COCACOLA, alt: 'Coca-Cola' },
  { id: 3, image: HUIZACHE, alt: 'Huizache' },
  { id: 4, image: JAVER, alt: 'Javer' },
  { id: 5, image: LIZMUEBLES, alt: 'Liz Muebles' },
  { id: 6, image: MERCEDES, alt: 'Mercedes-Benz' },
  { id: 7, image: OREILLY, alt: "O'Reilly" },
  { id: 8, image: PROMEXICO, alt: 'ProMéxico' },
  { id: 9, image: TAMAZULA, alt: 'Tamazula' },
];

const SWIPE_THRESHOLD = 50;

export default function ProjectsCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const dragX = useMotionValue(0);

  const goTo = useCallback((index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }, [active]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive(a => (a - 1 + projects.length) % projects.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setActive(a => (a + 1) % projects.length);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next]);

  const prevIndex = (active - 1 + projects.length) % projects.length;
  const nextIndex = (active + 1) % projects.length;

  const cardVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 0.94 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, scale: 0.94 }),
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -SWIPE_THRESHOLD) next();
    else if (info.offset.x > SWIPE_THRESHOLD) prev();
  };

  return (
    <section className="w-full bg-transparent py-16 sm:py-20 px-4 sm:px-6 md:px-12 font-sans relative overflow-hidden z-10 antialiased">
      <style dangerouslySetInnerHTML={{ __html: `
        .font-aston { font-family: 'ASTONPOLIZ', 'Anton', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .dot-active {
          background: linear-gradient(90deg, #e6af41, #f0c060, #e6af41);
          background-size: 200% auto;
          animation: shimmer 2s linear infinite;
        }
        .preview-card {
          transition: opacity 0.35s ease, transform 0.35s ease, filter 0.35s ease;
          opacity: 0.35;
        }
        .preview-card:hover {
          opacity: 0.6;
          transform: scale(1.02);
          filter: brightness(1.1);
        }
      ` }} />

      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white font-aston leading-tight">
            Conoce algunos de nuestros proyectos
          </h2>
        </motion.div>

        {/* Carrusel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center gap-3 lg:gap-5"
        >

          {/* Preview izquierda — desktop */}
          <div
            className="preview-card hidden lg:block w-[180px] xl:w-[220px] 2xl:w-[250px] flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden bg-black"
            onClick={prev}
          >
            <img
              src={projects[prevIndex].image}
              alt={projects[prevIndex].alt}
              className="w-full h-auto block"
              draggable={false}
            />
          </div>

          {/* Tarjeta central */}
          <div className="relative flex-1 max-w-[820px] rounded-2xl overflow-hidden bg-black">
            {/* Reserva el espacio con la imagen invisible para que no colapsen los botones de nav */}
            <img
              src={projects[active].image}
              alt=""
              className="w-full block opacity-0 pointer-events-none"
              aria-hidden="true"
              draggable={false}
            />

            {/* Imagen animada encima, absoluta */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={projects[active].id}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={handleDragEnd}
                style={{ x: dragX, position: 'absolute', inset: 0, cursor: 'grab' }}
                whileDrag={{ cursor: 'grabbing', scale: 0.985 }}
                className="rounded-2xl overflow-hidden"
              >
                <img
                  src={projects[active].image}
                  alt={projects[active].alt}
                  className="w-full h-full object-contain block select-none"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Botones mobile/tablet */}
            <button
              onClick={prev}
              className="lg:hidden absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-black/55 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="lg:hidden absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-black/55 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Preview derecha — desktop */}
          <div
            className="preview-card hidden lg:block w-[180px] xl:w-[220px] 2xl:w-[250px] flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden bg-black"
            onClick={next}
          >
            <img
              src={projects[nextIndex].image}
              alt={projects[nextIndex].alt}
              className="w-full h-auto block"
              draggable={false}
            />
          </div>

          {/* Botones laterales desktop */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="hidden lg:flex absolute -left-3 xl:-left-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-[#0d0d0d]/80 backdrop-blur-md border border-gray-700/60 rounded-full items-center justify-center text-white hover:border-gray-400 hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            <ChevronLeft size={18} />
          </motion.button>
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="hidden lg:flex absolute -right-3 xl:-right-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-[#0d0d0d]/80 backdrop-blur-md border border-gray-700/60 rounded-full items-center justify-center text-white hover:border-gray-400 hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            <ChevronRight size={18} />
          </motion.button>
        </motion.div>

        {/* Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center gap-2 mt-6 sm:mt-8"
        >
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              animate={{ width: i === active ? 28 : 8, opacity: i === active ? 1 : 0.35 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`h-2 rounded-full ${i === active ? 'dot-active' : 'bg-white'}`}
              style={{ minWidth: 8 }}
            />
          ))}
        </motion.div>

        {/* Contador */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-3"
        >
          <span className="text-xs text-white/30 font-montserrat tracking-widest">
            {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-8 sm:mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-8 sm:px-10 py-3.5 sm:py-4 bg-transparent border-2 border-white/70 text-white rounded-full font-bold text-[12px] sm:text-[13px] uppercase tracking-widest overflow-hidden hover:border-white font-montserrat"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
              Ver Portafolio
              <motion.span
                className="inline-flex"
                animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowUpRight size={14} />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}