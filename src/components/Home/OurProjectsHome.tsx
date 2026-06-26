import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getOurProjects, OurProject } from "../../lib/sanityQueries";
import { urlFor } from "../../lib/sanityImage";

import fondoMercedes from "../../images/fondos_casos-de-exito/fondo_mercedes.png";
import fondoHuizache from "../../images/fondos_casos-de-exito/fondo_tequilahuizache.png";
import fondoCoca from "../../images/fondos_casos-de-exito/fondo_coca.png";
import fondoLizmuebles from "../../images/fondos_casos-de-exito/fondo_lizmuebles.png";
import fondoSelloRojo from "../../images/fondos_casos-de-exito/fondo_SelloRojo.png";
import fondoKia from "../../images/fondos_casos-de-exito/fondo_Kia.jpeg";
import fondoFortia from "../../images/fondos_casos-de-exito/fondo_fortia.jpg";
import fondoVitromex from "../../images/fondos_casos-de-exito/fondo_Vitromex.png";
import logoMercedes from "../../images/Logos_Clientes/logo_mercedes.png";
import logoHuizache from "../../images/Logos_Clientes/Tequila_huizache.png";
import logoSelloRojo from "../../images/Logos_Clientes/SelloRojo.png";
import logoKia from "../../images/Logos_Clientes/KIA.png";
import logoCoca from "../../images/Logos_Clientes/Cocacola.png";
import logoVitromex from "../../images/Logos_Clientes/Vitromex.png";
import logoFortia from "../../images/Logos_Clientes/Fortia.png";
import logoLiz from "../../images/Logos_Clientes/Liz_muebles.png";

interface Case {
  id: string;
  client: string;
  tag: string;
  description: string;
  image: string;
  logo: string;
  accent: string;
}

const FALLBACK_CASES: Case[] = [
  { id: '1', client: "Mercedes-Benz EQ", tag: "Lanzamiento de Marca", description: "Desarrollo de campaña de comunicación y posicionamiento para el lanzamiento de la línea eléctrica EQ en México.", image: fondoMercedes, logo: logoMercedes, accent: "89,157,223" },
  { id: '2', client: "Tequila Huizache", tag: "Branding Internacional", description: "Desarrollo de imagen de marca y estrategia de posicionamiento con exitosa entrada al mercado de exportación.", image: fondoHuizache, logo: logoHuizache, accent: "128,182,125" },
  { id: '3', client: "Sello Rojo", tag: "Marketing Promocional", description: "Estrategia de posicionamiento para nuevas líneas de productos mediante campañas promocionales a nivel nacional.", image: fondoSelloRojo, logo: logoSelloRojo, accent: "197,54,46" },
  { id: '4', client: "KIA", tag: "Trade Marketing", description: "Creación de Campaña Promocional y de Posicionamiento de Marca a Nivel Nacional para más de 13 concesionarios.", image: fondoKia, logo: logoKia, accent: "128,182,125" },
  { id: '5', client: "Coca-Cola", tag: "Marketing Comercial", description: "Estrategia de marketing comercial para América Latina, rompiendo récord histórico de ventas.", image: fondoCoca, logo: logoCoca, accent: "197,54,46" },
  { id: '6', client: "Vitromex", tag: "Marketing Estratégico", description: "Creación y Desarrollo de Plan Comercial y de Marketing a Nivel Nacional, convirtiendo a la marca en líder en el mercado.", image: fondoVitromex, logo: logoVitromex, accent: "230,175,65" },
  { id: '7', client: "Fortia Technologies", tag: "Marketing Digital", description: "Estrategia de marketing, comunicación y publicidad digital a nivel nacional e internacional.", image: fondoFortia, logo: logoFortia, accent: "89,157,223" },
  { id: '8', client: "Liz Muebles", tag: "Marketing Integral", description: "Desarrollo y Ejecución de Plan de Marketing Nacional y de Expansión en Centro y Sudamérica.", image: fondoLizmuebles, logo: logoLiz, accent: "230,175,65" },
];

function sanityToCase(p: OurProject): Case {
  return {
    id: p._id,
    client: p.client,
    tag: p.tag,
    description: p.description,
    image: urlFor(p.image),
    logo: urlFor(p.logo),
    accent: p.accent,
  };
}

export default function OurProjectsHome() {
  const [cases, setCases] = useState<Case[]>(FALLBACK_CASES);
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    getOurProjects().then(data => {
      if (data && data.length > 0) setCases(data.map(sanityToCase));
    }).catch(() => {});
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const VISIBLE = isMobile ? 1 : 3;

  const total = cases.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    if (isHovered) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [isHovered, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    if (touchStart - touchEnd > 50) next();
    if (touchStart - touchEnd < -50) prev();
  };

  // Build the 3-item window (circular)
  const visibleIndices = Array.from({ length: VISIBLE }, (_, i) => (current + i) % total);

  return (
    <section
      className="w-full bg-transparent py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden z-10 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="w-full mb-8 sm:mb-12">
          <div className="w-16 h-[3px] bg-[#3b82f6] mb-4" />
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-3"
            style={{ fontFamily: "'Astonpoliz', sans-serif" }}
          >
            Casos de Éxito
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Resultados comprobados por marcas y empresas líderes en su sector
          </p>
        </div>

        {/* Cards */}
        <div className={`w-full grid gap-4 sm:gap-5 ${isMobile ? 'grid-cols-1 max-w-sm mx-auto' : 'grid-cols-3'}`}>
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleIndices.map((idx, pos) => {
              const item = cases[idx];
              return (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.97 }}
                  transition={{ duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-[420px] md:h-[460px] bg-zinc-950 cursor-pointer group"
                  onClick={() => pos === 0 ? prev() : pos === 2 ? next() : undefined}
                >
                  {/* Background image — grayscale */}
                  <img
                    src={item.image}
                    alt={item.client}
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 transition-all duration-700 group-hover:scale-105 group-hover:brightness-40 pointer-events-none select-none"
                    draggable={false}
                  />

                  {/* Bottom gradient with brand accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3"
                    style={{ background: `linear-gradient(to top, rgba(${item.accent},0.15) 0%, transparent 100%)` }}
                  />

                  {/* Logo — top left */}
                  <div className="absolute top-6 left-6 z-10">
                    <img
                      src={item.logo}
                      alt={`Logo ${item.client}`}
                      className="h-12 sm:h-16 max-w-[160px] sm:max-w-[200px] object-contain object-left brightness-0 invert pointer-events-none select-none"
                      draggable={false}
                    />
                  </div>

                  {/* Text — bottom */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
                    <p
                      className="text-white font-bold text-base sm:text-lg uppercase tracking-wide mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.client}
                    </p>
                    <p
                      className="text-zinc-300 text-sm leading-relaxed font-light"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between w-full mt-8 px-1">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {cases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`rounded-full transition-all duration-400 ${
                  idx === current
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
