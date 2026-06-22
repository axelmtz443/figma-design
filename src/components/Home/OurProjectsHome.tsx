import React, { useState, useEffect, useCallback } from "react";

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

const ChevronLeft = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const customStyles = `
  @import url('https://fonts.cdnfonts.com/css/astonpoliz');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  .font-astonpoliz { font-family: 'Astonpoliz', 'Montserrat', sans-serif; letter-spacing: 0.08em; }
  .font-montserrat { font-family: 'Montserrat', sans-serif; }

  @keyframes goldShimmer {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .gold-active-bar {
    background: linear-gradient(90deg, #e6af41, #fff3d1, #e6af41);
    background-size: 200% auto;
    animation: goldShimmer 3s ease infinite;
  }
`;

interface Case {
  id: number;
  client: string;
  tag: string;
  description: string;
  image: string | null;
  logo: string | null;
  gradientFallback: string;
}

const cases: Case[] = [
  {
    id: 1,
    client: "Mercedes-Benz EQ",
    tag: "Lanzamiento de Marca",
    description:
      "Desarrollo de campaña de comunicación y posicionamiento de marca para el lanzamiento de la línea eléctrica EQ de Mercedes-Benz en México.",
    image: fondoMercedes,
    logo: logoMercedes,
    gradientFallback:
      "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    id: 2,
    client: "Tequila Huizache",
    tag: "Branding Internacional",
    description:
      "Desarrollo de imagen de marca, estrategia de posicionamiento, e identificación de nicho de negocio con exitosa entrada al mercado de exportación.",
    image: fondoHuizache,
    logo: logoHuizache,
    gradientFallback:
      "linear-gradient(135deg, #2d1b00 0%, #4a2c00 50%, #6b3f00 100%)",
  },
  {
    id: 3,
    client: "Sello Rojo",
    tag: "Marketing Promocional",
    description:
      "Estrategia de posicionamiento de marca para las nuevas líneas de productos a través de campañas promocionales a nivel nacional.",
    image: fondoSelloRojo,
    logo: logoSelloRojo,
    gradientFallback:
      "linear-gradient(135deg, #2d0000 0%, #5c0000 50%, #8b0000 100%)",
  },
  {
    id: 4,
    client: "KIA",
    tag: "Trade Marketing / Fidelización",
    description:
      "Creación de estrategia promocional, de lealtad y de posicionamiento de marca para más de 13 concesionarios a nivel nacional.",
    image: fondoKia,
    logo: logoKia,
    gradientFallback:
      "linear-gradient(135deg, #1a0000 0%, #3d0000 50%, #660000 100%)",
  },
  {
    id: 5,
    client: "Coca-Cola",
    tag: "Marketing Comercial",
    description:
      "Desarrollo de estrategia de marketing comercial y proyectos especiales para América Latina, rompiendo récord histórico de ventas.",
    image: fondoCoca,
    logo: logoCoca,
    gradientFallback:
      "linear-gradient(135deg, #3d0000 0%, #6b0000 50%, #990000 100%)",
  },
  {
    id: 6,
    client: "Vitromex",
    tag: "Marketing Estratégico",
    description:
      "Creación y desarrollo de estrategia de comercialización y de marketing a nivel nacional, consolidando la marca como líder en el mercado.",
    image: fondoVitromex,
    logo: logoVitromex,
    gradientFallback:
      "linear-gradient(135deg, #003d00 0%, #006b00 50%, #009900 100%)",
  },
  {
    id: 7,
    client: "Fortia Technologies",
    tag: "Marketing Digital",
    description:
      "Desarrollo de estrategia de marketing, comunicación y publicidad digital a nivel nacional e internacional.",
    image: fondoFortia,
    logo: logoFortia,
    gradientFallback:
      "linear-gradient(135deg, #001a3d 0%, #002e6b 50%, #004299 100%)",
  },
  {
    id: 8,
    client: "Muebles Liz",
    tag: "Marketing Integral",
    description:
      "Desarrollo de Estrategia Integral de Marketing y Comercialización en México y Centroamérica.",
    image: fondoLizmuebles,
    logo: logoLiz,
    gradientFallback:
      "linear-gradient(135deg, #1a0033 0%, #33006b 50%, #4d0099 100%)",
  },
];

export default function OurProjectsHome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const dist = touchStart - touchEnd;
    if (dist > 50) nextSlide();
    if (dist < -50) prevSlide();
  };

  return (
    <section
      className="w-full bg-transparent py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 font-montserrat relative overflow-hidden z-10 antialiased select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="w-full mb-8 sm:mb-10 md:mb-16">
          <h2 className="font-astonpoliz text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide uppercase leading-tight mb-3">
            Casos de Éxito
          </h2>
          <p className="text-white/50 font-montserrat text-sm sm:text-base md:text-lg font-light">
            Resultados comprobados por marcas y empresas líderes en su sector
          </p>
        </div>

        {/* Carrusel coverflow */}
        <div className="relative w-full h-[400px] sm:h-[440px] md:h-[460px] lg:h-[480px] flex items-center justify-center group">
          {cases.map((item, index) => {
            const isActive = index === currentIndex;
            const isPrev =
              index === (currentIndex - 1 + cases.length) % cases.length;
            const isNext = index === (currentIndex + 1) % cases.length;

            let positionStyle =
              "opacity-0 scale-75 pointer-events-none absolute z-0";
            if (isActive) {
              positionStyle =
                "opacity-100 scale-100 z-30 translate-x-0 relative cursor-default";
            } else if (isPrev) {
              positionStyle =
                "opacity-35 scale-90 -translate-x-[40%] sm:-translate-x-[50%] lg:-translate-x-[60%] xl:-translate-x-[55%] z-20 absolute cursor-pointer blur-[1px] hidden sm:block";
            } else if (isNext) {
              positionStyle =
                "opacity-35 scale-90 translate-x-[40%] sm:translate-x-[50%] lg:translate-x-[60%] xl:translate-x-[55%] z-20 absolute cursor-pointer blur-[1px] hidden sm:block";
            }

            return (
              <div
                key={item.id}
                className={`transition-all duration-700 ease-out w-full max-w-4xl h-full flex-shrink-0 rounded-2xl ${positionStyle}`}
                onClick={() => {
                  if (isNext) nextSlide();
                  if (isPrev) prevSlide();
                }}
              >
                <div className="w-full h-full relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-[0_0_50px_rgba(0,0,0,0.85)]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.client}
                      className={`w-full h-full object-cover transition-transform duration-1000 ease-out select-none pointer-events-none ${
                        isActive
                          ? "scale-100 brightness-[0.25]"
                          : "scale-105 brightness-40 blur-[2px]"
                      }`}
                      draggable={false}
                    />
                  ) : (
                    <div
                      className="w-full h-full"
                      style={{
                        background: item.gradientFallback,
                        opacity: isActive ? 0.7 : 0.4,
                      }}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/10" />

                  {isActive && (
                    <div
                      className="absolute inset-x-0 bottom-0 p-3 sm:p-6 md:p-8"
                      style={{ height: "58%" }}
                    >
                      <div className="w-full h-full bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 md:p-7 flex flex-col justify-between shadow-2xl">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                          {item.logo && (
                            <div className="h-10 sm:h-14 flex-shrink-0 flex items-center">
                              <img
                                src={item.logo}
                                alt={`Logo ${item.client}`}
                                className="max-h-full max-w-[140px] sm:max-w-[160px] object-contain object-left pointer-events-none select-none"
                                draggable={false}
                              />
                            </div>
                          )}
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-[2px] bg-[#e6af41]" />
                              <span className="text-[#e6af41] font-bold tracking-widest text-xs sm:text-sm uppercase font-montserrat">
                                {item.client}
                              </span>
                            </div>
                            <span className="self-start inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest border border-[#e6af41]/40 text-[#e6af41]/80 bg-[#e6af41]/[0.08]">
                              {item.tag}
                            </span>
                          </div>
                        </div>

                        <div className="w-full h-px bg-white/10 my-1" />

                        <p className="text-zinc-200 font-light text-xs sm:text-sm md:text-base leading-relaxed font-montserrat">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Flechas desktop */}
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#e6af41] hover:border-[#e6af41] hover:text-black hover:scale-110 shadow-xl hidden md:flex"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#e6af41] hover:border-[#e6af41] hover:text-black hover:scale-110 shadow-xl hidden md:flex"
          >
            <ChevronRight size={22} />
          </button>

          {/* Flechas mobile */}
          <button
            onClick={prevSlide}
            className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-black/70 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white active:bg-[#e6af41] active:text-black transition-colors duration-200"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-black/70 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white active:bg-[#e6af41] active:text-black transition-colors duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-10 sm:mt-16 flex-wrap max-w-md mx-auto px-4">
          {cases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-500 rounded-full ${
                idx === currentIndex
                  ? "w-10 h-2 gold-active-bar opacity-100"
                  : "w-2 h-2 bg-white/20 hover:bg-white/50 opacity-60"
              }`}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="text-center mt-4">
          <span className="text-[11px] text-zinc-500 font-montserrat tracking-[0.25em] font-semibold">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(cases.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
