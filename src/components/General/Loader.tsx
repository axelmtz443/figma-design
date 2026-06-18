import { useEffect, useState } from "react";
import logoImage from "../../images/OFICIALLOGO.png";
import React from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      // Simulación de carga fluida
      value += Math.random() * 15;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => setIsExiting(true), 200);
      }
      setProgress(value);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div

      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#030303] overflow-hidden transition-transform duration-[1100ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${isExiting ? "-translate-y-full" : "translate-y-0"}`}

    >
      {/* AURAS DE MARCA (Creatividad moderna) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-red-600/10 blur-[140px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-emerald-500/5 blur-[120px]" />
      </div>

      {/* RUIDO TEXTURIZADO (Efecto papel/premium) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/noise.svg')]" />

      <div className="relative flex flex-col items-center">
        
        {/* CONTENEDOR DE LOGO */}
        <div className="relative mb-16">
          <div className="relative overflow-hidden group">
            <img
              src={logoImage}
              alt="We Prom Marketing"
              className={`w-64 md:w-80 object-contain transition-all duration-1000 ease-out
              ${progress > 10 ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-8 blur-lg'}`}
            />
            
            {/* Barrido de luz diagonal (Interactive look) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full animate-light-sweep" />
          </div>

          {/* Destello central sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-3xl rounded-full animate-logo-glow" />
        </div>

        {/* BARRA DE PROGRESO "ARTÍSTICA" */}
        <div className="w-72 md:w-96 flex flex-col gap-4">
          <div className="relative">
            {/* Línea de fondo */}
            <div className="h-[1px] w-full bg-white/10" />
            
            {/* Línea de progreso cromática */}
            <div 
              className="absolute top-0 left-0 h-[1px] transition-all duration-500 ease-out flex shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              style={{ width: `${progress}%` }}
            >
              {/* Degradado de los 4 colores de la marca */}
              <div className="w-1/4 h-full bg-red-500" />
              <div className="w-1/4 h-full bg-blue-500" />
              <div className="w-1/4 h-full bg-emerald-500" />
              <div className="w-1/4 h-full bg-yellow-500" />
            </div>
          </div>

          <div className="flex justify-between items-baseline">
            <div className="flex flex-col">
              <span className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-montserrat">
                WeProm Marketing
              </span>
              <span className="text-[8px] text-white/10 uppercase tracking-[0.2em]">
                Cargando Experiencia Personalizada
              </span>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-xl font-aston text-white leading-none">
                {Math.round(progress)}
              </span>
              <span className="text-[10px] text-white/40 font-mono mb-[2px]">%</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes light-sweep {
          0% { transform: translateX(-150%) skewX(-12deg); }
          50% { transform: translateX(200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes logo-glow {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.8); }
          50% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.1); }
        }

        .animate-light-sweep {
          animation: light-sweep 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }

        .animate-logo-glow {
          animation: logo-glow 5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
