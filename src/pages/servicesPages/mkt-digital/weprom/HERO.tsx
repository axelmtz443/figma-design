import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { SiMeta, SiFacebook, SiInstagram, SiWhatsapp, SiX, SiTiktok, SiGoogle, SiGoogleads, SiGoogletagmanager } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { useContactPopup } from '../../../../context/ContactPopupContext';

const FONTS = {
  heading: "'Astonpoliz', sans-serif",
  body: "'Montserrat', sans-serif",
};

const WepromLogo = () => (
  <svg
    id="Capa_2"
    data-name="Capa 2"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 780.55 712.65"
    className="w-32 h-32 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 drop-shadow-[0_0_50px_rgba(89,157,223,0.3)] transition-all duration-500"
  >
    <defs>
      <style>{`
        .cls-1 { fill: url(#Degradado_sin_nombre_6); }
        .cls-2 { fill: url(#Degradado_sin_nombre_170); }
        .cls-3 { fill: url(#Degradado_sin_nombre_201); }
        .cls-4 { fill: url(#Degradado_sin_nombre_194); }
        .cls-5 { fill: url(#Degradado_sin_nombre_3); }
        .cls-6 { fill: url(#Degradado_sin_nombre_22); }
        .cls-7 { fill: url(#Degradado_sin_nombre_194-2); }
        .cls-8 { fill: url(#Degradado_sin_nombre_6-2); }
      `}</style>
      <linearGradient id="Degradado_sin_nombre_194" data-name="Degradado sin nombre 194" x1="689.73" y1="503.15" x2="689.73" y2="506.87" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#f09428"/>
        <stop offset=".21" stopColor="#f29d2b"/>
        <stop offset=".64" stopColor="#f7ac31"/>
        <stop offset="1" stopColor="#f9b233"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_194-2" data-name="Degradado sin nombre 194" x1="734.92" y1="96.62" x2="734.92" y2="554.63" xlinkHref="#Degradado_sin_nombre_194"/>
      <linearGradient id="Degradado_sin_nombre_6" data-name="Degradado sin nombre 6" x1="3.05" y1="515.94" x2="3.11" y2="515.84" gradientUnits="userSpaceOnUse">
        <stop offset=".07" stopColor="#e6332a"/>
        <stop offset=".11" stopColor="#d53a36"/>
        <stop offset=".29" stopColor="#95586a"/>
        <stop offset=".47" stopColor="#607195"/>
        <stop offset=".64" stopColor="#3685b7"/>
        <stop offset=".78" stopColor="#1893cf"/>
        <stop offset=".91" stopColor="#069bdd"/>
        <stop offset="1" stopColor="#009fe3"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_6-2" data-name="Degradado sin nombre 6" x1="81.77" y1="583.27" x2="374.34" y2="76.54" xlinkHref="#Degradado_sin_nombre_6"/>
      <linearGradient id="Degradado_sin_nombre_22" data-name="Degradado sin nombre 22" x1="42.84" y1="505.91" x2="42.84" y2="271.32" gradientUnits="userSpaceOnUse">
        <stop offset=".01" stopColor="#a3332a"/>
        <stop offset="1" stopColor="#e6332a"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_3" data-name="Degradado sin nombre 3" x1="728.43" y1="52.76" x2="460.78" y2="516.35" gradientUnits="userSpaceOnUse">
        <stop offset=".05" stopColor="#f9b233"/>
        <stop offset=".09" stopColor="#d6b343"/>
        <stop offset=".17" stopColor="#7db66c"/>
        <stop offset=".2" stopColor="#60b87b"/>
        <stop offset="1" stopColor="#579966"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_201" data-name="Degradado sin nombre 201" x1="72.81" y1="406.73" x2="706.31" y2="406.73" gradientUnits="userSpaceOnUse">
        <stop offset=".08" stopColor="#e6332a"/>
        <stop offset=".09" stopColor="#d73935"/>
        <stop offset=".14" stopColor="#a5515d"/>
        <stop offset=".2" stopColor="#796681"/>
        <stop offset=".25" stopColor="#53779f"/>
        <stop offset=".3" stopColor="#3585b8"/>
        <stop offset=".36" stopColor="#1d91cb"/>
        <stop offset=".42" stopColor="#0d98d8"/>
        <stop offset=".49" stopColor="#039de0"/>
        <stop offset=".58" stopColor="#009fe3"/>
        <stop offset=".79" stopColor="#60b87b"/>
        <stop offset=".8" stopColor="#79b76f"/>
        <stop offset=".83" stopColor="#a0b55c"/>
        <stop offset=".86" stopColor="#c0b44d"/>
        <stop offset=".89" stopColor="#d9b341"/>
        <stop offset=".93" stopColor="#ebb239"/>
        <stop offset=".96" stopColor="#f5b234"/>
        <stop offset="1" stopColor="#f9b233"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_170" data-name="Degradado sin nombre 170" x1="476.57" y1="292.44" x2="476.57" y2="683.68" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#0072bc"/>
        <stop offset=".76" stopColor="#0099de"/>
        <stop offset=".82" stopColor="#18a1c4"/>
        <stop offset=".94" stopColor="#4cb18f"/>
        <stop offset="1" stopColor="#60b87b"/>
      </linearGradient>
    </defs>
    <g id="Capa_1-2" data-name="Capa 1">
      <g>
        <g>
          <path className="cls-4" d="M689.65,503.45c-.02,1.21.04,2.41.15,3.6,0-.34,0-.67,0-1.02-.1-1.02-.14-2.04-.14-3.08,0,.16,0,.34,0,.49Z"/>
          <path className="cls-7" d="M689.63,73.54c-.5,31.91.61,381.87.05,428.04.07,1.52.11,3,.12,4.46,3.9,41.46,85.93,70.25,85.93,70.25-.02.33-.04.66-.07.98.04.02.07.02.07.02,1.05-62.18,4.22-381.27,4.61-419.89-22.48-67.07-71.63-81.03-90.71-83.86Z"/>
        </g>
        <g>
          <path className="cls-1" d="M3.1,515.98s0-.02,0-.03c-.02-.19-.05-.17,0,.03h0Z"/>
          <path className="cls-8" d="M431.96,221.95c-.13-54.69-44.85-157.97-137.14-157.99-63.84-.01-107.65,44.61-115.62,78.86-2.17,9.34-5.02,32.33-4.68,42.53.91,27.13.68,261.45-.33,275.79-.44,6.34,9,77.5-43.57,110.47-13.3,8.34-29.17,12.53-44.57,9.54-56.62-10.99-82.24-66.42-82.58-66.96,0,0,2.89,18.21,6.04,25.9,42.24,103.24,120.38,95.8,129.9,95.81,41.25.06,111.55-13.84,117.71-110.67.18-2.83-2.19-305.52-.44-309.75,8.56-63.57,46.31-76.16,61.68-77.55,79.89-12.58,113.6,84.02,113.6,84.02Z"/>
        </g>
        <path className="cls-6" d="M85.03,580.94c-1.33-34.92,0-214.45.64-266.37l-16.69-147.31c-45.39,9.82-59.23,54.27-64.18,71.89-9.06,32.24-2.78,235.33-1.41,274.66.02.48,4.33,8.89,11.93,19.6,12.55,17.11,35.35,40.49,69.7,47.53Z"/>
        <path className="cls-5" d="M644.41,0c-93.28,0-119.15,63.97-123.25,91.33-2.17,14.48-1.84,49.14-1.91,53.97-.26,17.39,0,34.8,0,52.19,0,35.8-.58,294.56-.54,311.14.23,121.3,1.06,148.46-.19,153.58,36.49-.13,73.68-22.95,87.88-71.01.16-4.11.24-10.35.21-14.74-.21-38.72-.44-357.05-.4-364.78.27-54.87-6.83-138.05,75.64-138.83-.02-.14,70.61.32,98.71,85.14C778.08,38.21,693.73,0,644.41,0Z"/>
        <path className="cls-3" d="M689.65,502.45c0-.34.01-.71.02-1.1,2.31,49.53-24.6,68.58-63.68,44.95-7.02-4.24-453.47-351.17-462.71-357.04-50.68-32.22-94.3-22-94.3-22,2.75,20.65,16.33,144.9,16.69,147.31-.64-81.57,64.92-75.98,95.29-51.61-8.3-6.66,431.17,335.9,460.54,353.92,12.4,7.6,24.78,15.6,37.68,22.34,12.61,6.6,27.45,9.42,42.05,8.26,17.39-1.38,31.93-12.96,40.25-27.49,7.3-12.75,11.86-25.71,13.93-40.34.12-.86.23-2.11.31-3.37,0,0-86.8-30.46-86.08-73.83Z"/>
        <path className="cls-2" d="M431.83,578.79c-2.69-24.65,1.42-351.8.27-355.44-9.74-30.89-38.95-75.63-85.43-85.33,0,0,.71,393.75.54,405.37-1.54,102.5,60.48,163.96,132.95,168.81,133.65,8.95,126.23-121.02,126.23-121.02-30.09,101.91-163.57,88.4-174.56-12.4Z"/>
      </g>
    </g>
  </svg>
);

// ── Parámetros de la animación (ajústalos aquí) ─────────────────────────────
// PERIOD controla qué tan seguido late/nace una onda nueva. Todo lo demás abajo
// está en SEGUNDOS REALES (no fracciones), así que cambiar PERIOD solo afecta
// qué tan espaciados están los latidos, no qué tan rápido se ve cada evento.
const PERIOD = 5.5;          // segundos entre latidos (más grande = onda más lenta / más espaciada)
const TRAVEL_END_FRACTION = 0.82; // fracción de PERIOD en la que la onda llega al borde y se apaga
const PULSE_DURATION_S = 0.4;     // cuánto dura el "golpe" del palpitar (fijo, no depende de PERIOD)
const WAVE_EMERGE_S = 0.2;        // cuánto tarda la onda en hacerse visible al salir del logo
const ICON_POPIN_S = 0.3;         // cuánto tarda un ícono en aparecer (fade+escala)
const ICON_HOLD_S = 1.5;          // cuánto tiempo se queda visible antes de desvanecer
const ICON_FADE_S = 0.7;          // cuánto tarda en desvanecerse
const PULSE_AMPLITUDE = 0.1;      // qué tanto crece el isotipo al palpitar
const BASE_RADIUS = 230;          // radio fijo del div de la onda (se escala por reloj, no por breakpoint)

// Ángulo y radiusRatio elegidos a propósito SIN correlación entre sí (no van
// en orden creciente juntos) para que la distribución se vea dispersa/al azar
// en vez de un remolino. El radiusRatio sigue controlando en qué momento del
// recorrido de la onda aparece cada ícono.
const BRAND_ICONS = [
  { Icon: SiMeta, color: '#0866FF', angle: 0, radiusRatio: 0.55 },
  { Icon: SiFacebook, color: '#1877F2', angle: 36, radiusRatio: 0.2 },
  { Icon: SiInstagram, color: '#E4405F', angle: 72, radiusRatio: 0.65 },
  { Icon: SiWhatsapp, color: '#25D366', angle: 108, radiusRatio: 0.05 },
  { Icon: SiX, color: '#111111', angle: 144, radiusRatio: 0.75 },
  { Icon: SiTiktok, color: '#111111', angle: 180, radiusRatio: 0.65 },
  { Icon: SiGoogle, color: '#4285F4', angle: 216, radiusRatio: 0.15 },
  { Icon: SiGoogleads, color: '#34A853', angle: 252, radiusRatio: 0.45 },
  { Icon: SiGoogletagmanager, color: '#246FDB', angle: 288, radiusRatio: 0.55 },
  { Icon: FaLinkedin, color: '#0A66C2', angle: 324, radiusRatio: 0.6 },
];

/**
 * Sistema de sonar movido por un ÚNICO reloj (requestAnimationFrame).
 * Todo —palpitar del logo, radio de la onda y aparición de cada ícono— se
 * deriva del mismo valor `phase` (0→1 por ciclo), así es imposible que se
 * desincronicen: los íconos aparecen exactamente cuando el frente de la onda
 * (mismo `phase`, misma fórmula de radio) cruza su posición.
 */
const SonarPulseSystem = () => {
  const waveRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const dims = () => {
      const w = window.innerWidth;
      const maxRadius = w < 768 ? 150 : w < 1280 ? 190 : 230;
      const logoRadius = w < 1024 ? 64 : w < 1280 ? 80 : 96;
      // La onda nace un poco DENTRO del logo (oculta detrás de él) y "emerge"
      // desde su cuerpo al crecer — se lee como que sale del isotipo.
      const waveStart = logoRadius * 0.5;
      const minIconRadius = logoRadius + 40; // los íconos nunca invaden el logo
      return { maxRadius, logoRadius, waveStart, minIconRadius };
    };

    // Duraciones fijas (en fracción del ciclo) convertidas desde segundos reales,
    // así que cambiar PERIOD solo espacia los latidos sin acelerar/frenar cada evento.
    const pulseWindow = PULSE_DURATION_S / PERIOD;
    const emergeWindow = WAVE_EMERGE_S / PERIOD;
    const travelEnd = TRAVEL_END_FRACTION;
    const popIn = ICON_POPIN_S / PERIOD;
    const hold = ICON_HOLD_S / PERIOD;
    const fadeDur = ICON_FADE_S / PERIOD;

    const loop = (now: number) => {
      const t = (now - start) / 1000;
      const phase = (t % PERIOD) / PERIOD; // 0 → 1
      const { maxRadius, waveStart, minIconRadius } = dims();

      // 1) Palpitar del isotipo: arranca en phase 0 (igual que la onda) con un
      //    golpe seco (sube rápido y regresa). sin(π·p) empieza y termina en 0.
      let pulse = 1;
      if (phase < pulseWindow) {
        const p = phase / pulseWindow;
        pulse = 1 + PULSE_AMPLITUDE * Math.sin(p * Math.PI);
      }
      if (logoRef.current) logoRef.current.style.transform = `scale(${pulse})`;

      // 2) Onda: nace en phase 0 (junto al palpitar) y viaja de waveStart a maxRadius.
      const wp = Math.min(phase / travelEnd, 1); // avance lineal del frente 0→1
      const waveRadius = waveStart + (maxRadius - waveStart) * wp;
      if (waveRef.current) {
        const emerge = Math.min(phase / emergeWindow, 1); // aparece al emerger del logo
        const vanish = Math.max(1 - wp, 0);                // se desvanece al llegar al borde
        const gone = phase >= travelEnd ? 0 : 1;
        // El div base mide BASE_RADIUS; escalamos su radio real hasta waveRadius.
        waveRef.current.style.transform = `translate(-50%, -50%) scale(${waveRadius / BASE_RADIUS})`;
        waveRef.current.style.opacity = String(0.9 * emerge * vanish * gone);
      }

      // 3) Íconos: cada uno aparece cuando el frente de la onda cruza su radio,
      //    se queda visible un rato fijo (hold) y se desvanece — repite cada ciclo.
      for (let i = 0; i < BRAND_ICONS.length; i++) {
        const el = iconRefs.current[i];
        if (!el) continue;
        const { angle, radiusRatio } = BRAND_ICONS[i];
        const R = minIconRadius + radiusRatio * (maxRadius - minIconRadius);
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * R;
        const y = Math.sin(rad) * R;

        // phaseHit: instante EXACTO en que waveRadius === R (misma fórmula que la onda).
        const phaseHit = travelEnd * ((R - waveStart) / (maxRadius - waveStart));

        // Tiempo transcurrido desde el último "impacto" de la onda en este ícono,
        // sin importar si ocurrió en este ciclo o (por envolvente) en el anterior.
        let sinceHit = phase - phaseHit;
        if (sinceHit < 0) sinceHit += 1;

        let opacity = 0;
        let scale = 0.4;
        if (sinceHit < popIn) {
          const appear = sinceHit / popIn;
          opacity = appear;
          scale = 0.4 + 0.6 * appear;
        } else if (sinceHit < popIn + hold) {
          opacity = 1;
          scale = 1;
        } else if (sinceHit < popIn + hold + fadeDur) {
          const f = (sinceHit - popIn - hold) / fadeDur;
          opacity = 1 - f;
          scale = 1;
        }
        el.style.opacity = String(opacity);
        el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`;
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full h-[340px] sm:h-[380px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center">
      {/* Onda expansiva — posición y opacidad controladas por el reloj compartido */}
      <div
        ref={waveRef}
        className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
        style={{
          width: BASE_RADIUS * 2,
          height: BASE_RADIUS * 2,
          border: '3px solid rgba(89,157,223,0.95)',
          boxShadow: '0 0 22px 2px rgba(89,157,223,0.3)',
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0)',
          willChange: 'transform, opacity',
        }}
      />

      {/* Isotipo central palpitando */}
      <div ref={logoRef} className="relative z-20" style={{ willChange: 'transform' }}>
        <WepromLogo />
      </div>

      {/* Logos de plataformas */}
      {BRAND_ICONS.map(({ Icon, color }, index) => (
        <div
          key={index}
          ref={(el) => { iconRefs.current[index] = el; }}
          className="absolute top-1/2 left-1/2 z-10 rounded-full bg-white shadow-xl flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 pointer-events-none"
          style={{ opacity: 0, transform: 'translate(-50%, -50%)', willChange: 'transform, opacity' }}
        >
          <Icon size={18} color={color} />
        </div>
      ))}
    </div>
  );
};

export default function HeroWeprom() {
  const { openPopup } = useContactPopup();
  return (
    <div
      className="min-h-screen text-white select-none relative overflow-hidden flex flex-col justify-between w-full bg-transparent"
      style={{ fontFamily: FONTS.body }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center flex-1 pt-10 sm:pt-12 lg:pt-16 xl:pt-20 pb-6 sm:pb-8 relative z-10">
        <div className="lg:col-span-5 order-last lg:order-none flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8 z-20">
          <div className="space-y-3 sm:space-y-4">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-100 to-neutral-400"
              style={{ fontFamily: FONTS.heading }}
            >
              Los expertos en <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009fe3] via-[#599ddf] to-[#e6332a]">
                Marketing Digital.
              </span>
            </h1>
            <h2
              className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-400 font-light leading-relaxed max-w-xl"
              style={{ fontFamily: FONTS.body }}
            >
              Apoyamos a empresas líderes a superar sus objetivos de marketing, logrando resultados reales y escalables.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => openPopup('Marketing Digital')}
              className="px-4 sm:px-6 lg:px-7 py-2 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#009fe3] to-[#599ddf] text-white font-bold text-[11px] sm:text-sm shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Contactar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => openPopup('Marketing Digital')}
              className="px-4 sm:px-6 lg:px-7 py-2 sm:py-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/80 hover:bg-zinc-900/60 text-zinc-300 hover:text-white font-semibold text-[11px] sm:text-sm active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#599ddf]" />
              <span>Solicitar Reunión de diagnóstico</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 w-full flex items-center justify-center relative">
          <SonarPulseSystem />
        </div>
      </div>

      <div className="w-full relative z-10 border-t border-zinc-900/60 bg-gradient-to-b from-transparent mb-8 sm:mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20 text-center space-y-3 sm:space-y-4 lg:space-y-5">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: FONTS.heading }}
          >
            El Poder de las Grandes Marcas
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-5xl mx-auto font-light px-4"
            style={{ fontFamily: FONTS.body }}
          >
            Más de 35 años trabajando con las grandes marcas nos han mostrado el camino al éxito.{' '}
            <strong className="text-white font-semibold">
              Por eso sabemos como desarrollar a las pequeñas, consolidar a las medianas y expandir a las grandes.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}