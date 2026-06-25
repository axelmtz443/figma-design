import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useContactPopup } from '../../context/ContactPopupContext';

import LOGO1  from "../../images/Atomo/log1.png";
import LOGO2  from "../../images/Atomo/log2.png";
import LOGO3  from "../../images/Atomo/log3.png";
import LOGO4  from "../../images/Atomo/log4.png";
import LOGO5  from "../../images/Atomo/log5.png";
import LOGO6  from "../../images/Atomo/log6.png";
import LOGO7  from "../../images/Atomo/log7.png";
import LOGO8  from "../../images/Atomo/log8.png";
import LOGO9  from "../../images/Atomo/log9.png";
import LOGO10 from "../../images/Atomo/log10.png";
import LOGO11 from "../../images/Atomo/log11.png";
import LOGO12 from "../../images/Atomo/log12.png";
import LOGO13 from "../../images/Atomo/log13.png";
import LOGO14 from "../../images/Atomo/log14.png";
import LOGO15 from "../../images/Atomo/log15.png";
import LOGO16 from "../../images/Atomo/log16.png";
import LOGO17 from "../../images/Atomo/log17.png";
import LOGO18 from "../../images/Atomo/log18.png";
import LOGO19 from "../../images/Atomo/log19.png";
import LOGO20 from "../../images/Atomo/log20.png";

import LogoIcon from "../../images/ISOTIPODEGRADADO.png";

interface FisicaNodo {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface MouseState {
  x: number;
  y: number;
  activo: boolean;
}

const CONFIG = {
  escalaGlobal: 1.0,
  grosorOrbita: 12,
  tamañoLogoCentral: 140,
  tamañoMinimoLogoCentral: 60,
  tamañoLogoMarca: 120,
  tamañoMinimoLogoMarca: 30,
  radioAncho: 450,
  radioAlto: 142,
  velocidadGiro: 0.003,
  areaGravedadCursor: 220,
};

const css = `
  .logo-chip {
    position: absolute;
    border-radius: 50%;
    overflow: hidden;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,0.12);
    box-shadow: 0 4px 15px rgba(0,0,0,0.6);
    transition: box-shadow 0.35s ease, border-color 0.35s ease, background-color 0.35s ease;
    will-change: left, top;
  }

  .logo-chip img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    display: block;
    pointer-events: none;
    transition: transform 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .logo-chip:hover {
    z-index: 50 !important;
    box-shadow: 0 8px 30px rgba(255,255,255,0.2), 0 0 18px rgba(255,255,255,0.12) inset;
    border-color: rgba(255,255,255,0.45);
    background: #1c1c1c;
  }

  .logo-chip:hover img {
    transform: scale(1.35);
  }

  @keyframes shine {
    100% { left: 125%; }
  }

  .btn-shimmer {
    position: relative;
    overflow: hidden;
  }

  .btn-shimmer::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -75%;
    width: 50%;
    height: 200%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(30deg);
    transition: none;
  }

  .btn-shimmer:hover::after {
    animation: shine 0.75s forwards;
  }

  @keyframes rotate-grad {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .animate-rotate-slow {
    animation: rotate-grad 3s linear infinite;
  }

  @keyframes shimmer-loop {
    0%   { transform: translateX(-180%) rotate(25deg); }
    100% { transform: translateX(380%) rotate(25deg); }
  }

  .btn-cta-primary::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 42%;
    height: 100%;
    background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.42) 50%, transparent 100%);
    animation: shimmer-loop 2.8s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
  }
`;

export default function Hero({ isLoading} : {isLoading: boolean}) {
  const { openPopup } = useContactPopup();
  const contenedorRef = useRef<HTMLDivElement>(null);
  const marcasRefs    = useRef<HTMLDivElement[]>([]);
  const mouseRef      = useRef<MouseState>({ x: -1000, y: -1000, activo: false });
  const fisicasRef    = useRef<FisicaNodo[]>([]);

  const vbSize       = 1000 * CONFIG.escalaGlobal;
  const centroX      = vbSize / 2;
  const centroY      = vbSize / 2;
  const radioX       = CONFIG.radioAncho * CONFIG.escalaGlobal;
  const radioY       = CONFIG.radioAlto  * CONFIG.escalaGlobal;
  const colisionDist = 95 * CONFIG.escalaGlobal;

  const logosMarcas = [
    LOGO1, LOGO2, LOGO3, LOGO4, LOGO5,
    LOGO6, LOGO7, LOGO8, LOGO9, LOGO10,
    LOGO11, LOGO12, LOGO13, LOGO14, LOGO15,
    LOGO16, LOGO17, LOGO18, LOGO19, LOGO20,
  ];

  const t5      = (2 * Math.PI) / 5;
  const orbitas = [
    { angulo: 0,   nodos: [0, t5, t5*2, t5*3, t5*4] },
    { angulo: 45,  nodos: [0, t5, t5*2, t5*3, t5*4] },
    { angulo: 90,  nodos: [0, t5, t5*2, t5*3, t5*4] },
    { angulo: 135, nodos: [0, t5, t5*2, t5*3, t5*4] },
  ];

  const nodosPlanos = orbitas.flatMap((orbita) => {
    const theta = (orbita.angulo * Math.PI) / 180;
    return orbita.nodos.map((desfase) => ({
      desfase,
      cosTheta: Math.cos(theta),
      sinTheta: Math.sin(theta),
    }));
  });

  if (fisicasRef.current.length === 0) {
    fisicasRef.current = nodosPlanos.map(() => ({
      x: centroX, y: centroY, vx: 0, vy: 0,
    }));
  }

  useEffect(() => {
    let rafId: number;
    let tiempoBase = 0;

    const animar = () => {
      tiempoBase += CONFIG.velocidadGiro;

      nodosPlanos.forEach((nodo, i) => {
        const f    = fisicasRef.current[i];
        const tObj = tiempoBase + nodo.desfase;

        const xOrb = radioX * Math.cos(tObj);
        const yOrb = radioY * Math.sin(tObj);
        const tx   = centroX + xOrb * nodo.cosTheta - yOrb * nodo.sinTheta;
        const ty   = centroY + xOrb * nodo.sinTheta + yOrb * nodo.cosTheta;

        f.vx += (tx - f.x) * 0.03;
        f.vy += (ty - f.y) * 0.03;

        if (mouseRef.current.activo) {
          const dx   = mouseRef.current.x - f.x;
          const dy   = mouseRef.current.y - f.y;
          const dist = Math.hypot(dx, dy);
          const area = CONFIG.areaGravedadCursor * CONFIG.escalaGlobal;
          if (dist < area) {
            const fuerza = (area - dist) * 0.0003;
            f.vx += dx * fuerza;
            f.vy += dy * fuerza;
          }
        }

        fisicasRef.current.forEach((o, j) => {
          if (i !== j) {
            const rx = f.x - o.x;
            const ry = f.y - o.y;
            const d  = Math.hypot(rx, ry);
            if (d > 0 && d < colisionDist) {
              const rep = (colisionDist - d) * 0.05;
              f.vx += (rx / d) * rep;
              f.vy += (ry / d) * rep;
            }
          }
        });

        f.vx *= 0.85;
        f.vy *= 0.85;
        f.x  += f.vx;
        f.y  += f.vy;

        const el = marcasRefs.current[i];
        if (el) {
          el.style.left = `${(f.x / vbSize) * 100}%`;
          el.style.top  = `${(f.y / vbSize) * 100}%`;
        }
      });

      rafId = requestAnimationFrame(animar);
    };

    animar();
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!contenedorRef.current) return;
    const rect = contenedorRef.current.getBoundingClientRect();
    const escX = vbSize / rect.width;
    const escY = vbSize / rect.height;
    const cX   = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const cY   = 'touches' in e ? e.touches[0].clientY : e.clientY;
    mouseRef.current = {
      x: (cX - rect.left) * escX,
      y: (cY - rect.top)  * escY,
      activo: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.activo = false;
  };

  return (
    <>
      <style>{css}</style>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[7rem] sm:pt-[8rem] lg:pt-[9rem] pb-6 sm:pb-10 lg:pb-24 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-4 items-center">

        {/* ── Texto ── */}
        <div className="flex flex-col items-center justify-center text-center md:block md:text-left">
          <h1 className="font-aston text-[36px] sm:text-[48px] md:text-[56px] lg:text-[70px] font-normal mb-2 leading-[1.1] tracking-tight-custom text-white">
            El Poder de las Grandes Marcas
          </h1>
          <p className="font-montserrat text-soft-gray text-[15px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-medium mb-6 sm:mb-8 leading-[1.4] max-w-xl">
            Desarrollamos estrategias de marketing online y offline para elevar tu marca, producto o servicio, ayudándote a destacar por encima de la competencia.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            {/* Contáctanos — shimmer continuo */}
            <button
              onClick={() => openPopup()}
              className="btn-cta-primary relative overflow-hidden rounded-full bg-white text-black px-7 sm:px-9 py-2.5 sm:py-3 font-montserrat font-bold text-[14px] sm:text-[16px] transition-all duration-300 hover:scale-[1.06] hover:shadow-[0_0_36px_rgba(255,255,255,0.28)] active:scale-95"
            >
              <span className="relative z-10">Contáctanos</span>
            </button>

            {/* Servicios — outline con micro-animación */}
            <Link to="/servicios">
              <button className="group relative overflow-hidden rounded-full border border-white/25 text-white/80 px-7 sm:px-9 py-2.5 sm:py-3 font-montserrat font-medium text-[14px] sm:text-[16px] transition-all duration-300 hover:border-white/60 hover:text-white hover:scale-[1.06] active:scale-95">
                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/[0.06] transition-all duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Servicios
                  <svg
                    className="w-[14px] h-[14px] transition-transform duration-300 group-hover:translate-x-1 opacity-60 group-hover:opacity-100"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* ── Átomo orbital ── */}
        <div className="relative flex items-center justify-center order-first md:order-last">
          <div style={{ position: "relative", width: "100%", maxWidth: "420px", aspectRatio: "1 / 1" }}>

            <div
              ref={contenedorRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseLeave}
              style={{ position: "relative", width: "100%", height: "100%" }}
            >

              {/* ── Órbitas SVG ── */}
              <svg
                viewBox={`0 0 ${vbSize} ${vbSize}`}
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  pointerEvents: "none",
                }}
              >
                {orbitas.map((orbita, i) => (
                  <g
                    key={i}
                    transform={`translate(${centroX} ${centroY}) rotate(${orbita.angulo}) scale(1, ${radioY / radioX})`}
                  >
                    <circle cx={0} cy={0} r={radioX}
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth={CONFIG.grosorOrbita * CONFIG.escalaGlobal * 2.8}
                    />
                    <circle cx={0} cy={0} r={radioX}
                      fill="none"
                      stroke="rgba(255,255,255,0.72)"
                      strokeWidth={CONFIG.grosorOrbita * CONFIG.escalaGlobal * 0.28}
                    />
                  </g>
                ))}
              </svg>

              {/* ── Logo central ── */}
              <div style={{
                position: "absolute",
                left: "50%", top: "50%",
                transform: "translate(-50%, -50%)",
                width:  `max(${CONFIG.tamañoMinimoLogoCentral}px, ${(CONFIG.tamañoLogoCentral / 1000) * 100}%)`,
                height: `max(${CONFIG.tamañoMinimoLogoCentral}px, ${(CONFIG.tamañoLogoCentral / 1000) * 100}%)`,
                background: "radial-gradient(circle, #1a1a1a 55%, #000)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 10,
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 0 40px rgba(255,255,255,0.1)",
              }}>
                <img
                  src={LogoIcon}
                  alt="Weprom"
                  style={{ width: "75%", height: "75%", objectFit: "contain" }}
                />
              </div>

              {/* ── Nodos de marcas ── */}
              {nodosPlanos.map((_, i) => (
                <div
                  key={i}
                  ref={(el) => { if (el) marcasRefs.current[i] = el; }}
                  className="logo-chip"
                  style={{
                    zIndex: 20,
                    transform: "translate(-50%, -50%)",
                    width:  `max(${CONFIG.tamañoMinimoLogoMarca}px, ${(CONFIG.tamañoLogoMarca / 1000) * 100}%)`,
                    height: `max(${CONFIG.tamañoMinimoLogoMarca}px, ${(CONFIG.tamañoLogoMarca / 1000) * 100}%)`,
                  }}
                >
                  <img
                    src={logosMarcas[i % logosMarcas.length]}
                    alt={`Marca ${i + 1}`}
                  />
                </div>
              ))}

            </div>
          </div>
        </div>

      </section>
    </>
  );
}