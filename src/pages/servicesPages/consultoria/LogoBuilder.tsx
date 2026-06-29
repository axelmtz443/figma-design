import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

interface ChecklistStep {
  id: string;
  title: string;
  color: string;
}

// ═══════════════════════════════════════════════════════════════════════
// EDITA AQUÍ: Definición de títulos y colores de cada paso
// ═══════════════════════════════════════════════════════════════════════
const STEP_DEFINITIONS: Record<string, { title: string; color: string }> = {
  diagnostico: { title: 'Diagnóstico de marca', color: '#e03a34' },
  estrategia: { title: 'Estrategia a la medida', color: '#27648b' },
  equipo: { title: 'Equipo alineado', color: '#23a2bd' },
  comunicacion: { title: 'Comunicación de impacto', color: '#5ead7c' },
  procesos: { title: 'Procesos optimizados', color: '#eda737' },
  crecimiento: { title: 'Crecimiento medible', color: '#aab25c' },
};

// ═══════════════════════════════════════════════════════════════════════
// EDITA AQUÍ: Orden visual del checklist (cómo aparecen los textos)
// ═══════════════════════════════════════════════════════════════════════
const DISPLAY_ORDER = ['diagnostico', 'estrategia', 'equipo', 'comunicacion', 'procesos', 'crecimiento'];

// ═══════════════════════════════════════════════════════════════════════
// EDITA AQUÍ: Orden de animación con letras (A, B, C...)
// Cada letra corresponde a un paso del checklist (ver ANIMATION_MAPPING)
// ═══════════════════════════════════════════════════════════════════════
const ANIMATION_ORDER = ['A', 'B', 'C', 'D', 'E', 'F'];

// ═══════════════════════════════════════════════════════════════════════
// EDITA AQUÍ: Mapeo de letras a IDs del checklist
// A → qué texto se marca cuando la figura A se colorea
// ═══════════════════════════════════════════════════════════════════════
const ANIMATION_MAPPING: Record<string, string> = {
  'A': 'diagnostico',      // Figura A → checklist Diagnóstico
  'B': 'estrategia',       // Figura B → checklist Estrategia
  'C': 'equipo',      // Figura C → checklist Crecimiento
  'D': 'comunicacion',     // Figura D → checklist Comunicación
  'E': 'procesos',           // Figura E → checklist Equipo
  'F': 'crecimiento',         // Figura F → checklist Procesos
};

// ═══════════════════════════════════════════════════════════════════════
// EDITA AQUÍ: Mapeo de letras a índices de paths del SVG (0-7 son las figuras)
// Cada letra corresponde a cuál path del logo se colorea
// ═══════════════════════════════════════════════════════════════════════
const ANIMATION_FIGURE_MAPPING: Record<string, number> = {
  'A': 2,  // Figura A usa pathStyle(2) = figura de Equipo
  'B': 1,  // Figura B usa pathStyle(1)
  'C': 5,  // Figura C usa pathStyle(5)
  'D': 3,  // Figura D usa pathStyle(3)
  'E': 0,  // Figura E usa pathStyle(0)
  'F': 4,  // Figura F usa pathStyle(4)
};

const STEPS: ChecklistStep[] = DISPLAY_ORDER.map((id) => ({
  id,
  title: STEP_DEFINITIONS[id].title,
  color: STEP_DEFINITIONS[id].color,
}));

const ANIMATION_STEP_INDEXES = ANIMATION_ORDER.map((letter) => {
  const stepId = ANIMATION_MAPPING[letter];
  return STEPS.findIndex((s) => s.id === stepId);
});

const STEP_HOLD_MS = 1100;
const RESET_PAUSE_MS = 2200;

const WepromLogoInteractive = ({ checkedFigures }: { checkedFigures: Record<string, boolean> }) => {
  const pathStyle = (figureIndex: number): React.CSSProperties => {
    const isChecked = Object.entries(checkedFigures).some(
      ([letter, checked]) => checked && ANIMATION_FIGURE_MAPPING[letter] === figureIndex
    );
    return {
      fillOpacity: isChecked ? 1 : 0,
      stroke: 'rgba(255,255,255,0.3)',
      strokeOpacity: isChecked ? 0 : 1,
      strokeWidth: 1.5,
      transition: 'fill-opacity 0.7s ease, stroke-opacity 0.7s ease',
    };
  };

  return (
    <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 780.55 712.65" className="w-full h-full">
      <defs>
        <style>{`
          .cb-cls-1 { fill: url(#CB_Degradado_6); }
          .cb-cls-2 { fill: url(#CB_Degradado_170); }
          .cb-cls-3 { fill: url(#CB_Degradado_201); }
          .cb-cls-4 { fill: url(#CB_Degradado_194); }
          .cb-cls-5 { fill: url(#CB_Degradado_3); }
          .cb-cls-6 { fill: url(#CB_Degradado_22); }
          .cb-cls-7 { fill: url(#CB_Degradado_194-2); }
          .cb-cls-8 { fill: url(#CB_Degradado_6-2); }
        `}</style>
        <linearGradient id="CB_Degradado_194" x1="689.73" y1="503.15" x2="689.73" y2="506.87" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f09428" /><stop offset=".21" stopColor="#f29d2b" /><stop offset=".64" stopColor="#f7ac31" /><stop offset="1" stopColor="#f9b233" />
        </linearGradient>
        <linearGradient id="CB_Degradado_194-2" x1="734.92" y1="96.62" x2="734.92" y2="554.63" xlinkHref="#CB_Degradado_194" />
        <linearGradient id="CB_Degradado_6" x1="3.05" y1="515.94" x2="3.11" y2="515.84" gradientUnits="userSpaceOnUse">
          <stop offset=".07" stopColor="#e6332a" /><stop offset=".11" stopColor="#d53a36" /><stop offset=".29" stopColor="#95586a" /><stop offset=".47" stopColor="#607195" /><stop offset=".64" stopColor="#3685b7" /><stop offset=".78" stopColor="#1893cf" /><stop offset=".91" stopColor="#069bdd" /><stop offset="1" stopColor="#009fe3" />
        </linearGradient>
        <linearGradient id="CB_Degradado_6-2" x1="81.77" y1="583.27" x2="374.34" y2="76.54" xlinkHref="#CB_Degradado_6" />
        <linearGradient id="CB_Degradado_22" x1="42.84" y1="505.91" x2="42.84" y2="271.32" gradientUnits="userSpaceOnUse">
          <stop offset=".01" stopColor="#a3332a" /><stop offset="1" stopColor="#e6332a" />
        </linearGradient>
        <linearGradient id="CB_Degradado_3" x1="728.43" y1="52.76" x2="460.78" y2="516.35" gradientUnits="userSpaceOnUse">
          <stop offset=".05" stopColor="#f9b233" /><stop offset=".09" stopColor="#d6b343" /><stop offset=".17" stopColor="#7db66c" /><stop offset=".2" stopColor="#60b87b" /><stop offset="1" stopColor="#579966" />
        </linearGradient>
        <linearGradient id="CB_Degradado_201" x1="72.81" y1="406.73" x2="706.31" y2="406.73" gradientUnits="userSpaceOnUse">
          <stop offset=".08" stopColor="#e6332a" /><stop offset=".09" stopColor="#d73935" /><stop offset=".14" stopColor="#a5515d" /><stop offset=".2" stopColor="#796681" /><stop offset=".25" stopColor="#53779f" /><stop offset=".3" stopColor="#3585b8" /><stop offset=".36" stopColor="#1d91cb" /><stop offset=".42" stopColor="#0d98d8" /><stop offset=".49" stopColor="#039de0" /><stop offset=".58" stopColor="#009fe3" /><stop offset=".79" stopColor="#60b87b" /><stop offset=".8" stopColor="#79b76f" /><stop offset=".83" stopColor="#a0b55c" /><stop offset=".86" stopColor="#c0b44d" /><stop offset=".89" stopColor="#d9b341" /><stop offset=".93" stopColor="#ebb239" /><stop offset=".96" stopColor="#f5b234" /><stop offset="1" stopColor="#f9b233" />
        </linearGradient>
        <linearGradient id="CB_Degradado_170" x1="476.57" y1="292.44" x2="476.57" y2="683.68" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0072bc" /><stop offset=".76" stopColor="#0099de" /><stop offset=".82" stopColor="#18a1c4" /><stop offset=".94" stopColor="#4cb18f" /><stop offset="1" stopColor="#60b87b" />
        </linearGradient>
      </defs>
      <g id="Capa_1-2" data-name="Capa 1">
        <g>
          <g>
            <path className="cb-cls-4" style={pathStyle(0)} d="M689.65,503.45c-.02,1.21.04,2.41.15,3.6,0-.34,0-.67,0-1.02-.1-1.02-.14-2.04-.14-3.08,0,.16,0,.34,0,.49Z" />
            <path className="cb-cls-7" style={pathStyle(0)} d="M689.63,73.54c-.5,31.91.61,381.87.05,428.04.07,1.52.11,3,.12,4.46,3.9,41.46,85.93,70.25,85.93,70.25-.02.33-.04.66-.07.98.04.02.07.02.07.02,1.05-62.18,4.22-381.27,4.61-419.89-22.48-67.07-71.63-81.03-90.71-83.86Z" />
          </g>
          <g>
            <path className="cb-cls-1" style={pathStyle(1)} d="M3.1,515.98s0-.02,0-.03c-.02-.19-.05-.17,0,.03h0Z" />
            <path className="cb-cls-8" style={pathStyle(1)} d="M431.96,221.95c-.13-54.69-44.85-157.97-137.14-157.99-63.84-.01-107.65,44.61-115.62,78.86-2.17,9.34-5.02,32.33-4.68,42.53.91,27.13.68,261.45-.33,275.79-.44,6.34,9,77.5-43.57,110.47-13.3,8.34-29.17,12.53-44.57,9.54-56.62-10.99-82.24-66.42-82.58-66.96,0,0,2.89,18.21,6.04,25.9,42.24,103.24,120.38,95.8,129.9,95.81,41.25.06,111.55-13.84,117.71-110.67.18-2.83-2.19-305.52-.44-309.75,8.56-63.57,46.31-76.16,61.68-77.55,79.89-12.58,113.6,84.02,113.6,84.02Z" />
          </g>
          <path className="cb-cls-6" style={pathStyle(2)} d="M85.03,580.94c-1.33-34.92,0-214.45.64-266.37l-16.69-147.31c-45.39,9.82-59.23,54.27-64.18,71.89-9.06,32.24-2.78,235.33-1.41,274.66.02.48,4.33,8.89,11.93,19.6,12.55,17.11,35.35,40.49,69.7,47.53Z" />
          <path className="cb-cls-5" style={pathStyle(3)} d="M644.41,0c-93.28,0-119.15,63.97-123.25,91.33-2.17,14.48-1.84,49.14-1.91,53.97-.26,17.39,0,34.8,0,52.19,0,35.8-.58,294.56-.54,311.14.23,121.3,1.06,148.46-.19,153.58,36.49-.13,73.68-22.95,87.88-71.01.16-4.11.24-10.35.21-14.74-.21-38.72-.44-357.05-.4-364.78.27-54.87-6.83-138.05,75.64-138.83-.02-.14,70.61.32,98.71,85.14C778.08,38.21,693.73,0,644.41,0Z" />
          <path className="cb-cls-3" style={pathStyle(4)} d="M689.65,502.45c0-.34.01-.71.02-1.1,2.31,49.53-24.6,68.58-63.68,44.95-7.02-4.24-453.47-351.17-462.71-357.04-50.68-32.22-94.3-22-94.3-22,2.75,20.65,16.33,144.9,16.69,147.31-.64-81.57,64.92-75.98,95.29-51.61-8.3-6.66,431.17,335.9,460.54,353.92,12.4,7.6,24.78,15.6,37.68,22.34,12.61,6.6,27.45,9.42,42.05,8.26,17.39-1.38,31.93-12.96,40.25-27.49,7.3-12.75,11.86-25.71,13.93-40.34.12-.86.23-2.11.31-3.37,0,0-86.8-30.46-86.08-73.83Z" />
          <path className="cb-cls-2" style={pathStyle(5)} d="M431.83,578.79c-2.69-24.65,1.42-351.8.27-355.44-9.74-30.89-38.95-75.63-85.43-85.33,0,0,.71,393.75.54,405.37-1.54,102.5,60.48,163.96,132.95,168.81,133.65,8.95,126.23-121.02,126.23-121.02-30.09,101.91-163.57,88.4-174.56-12.4Z" />
        </g>
      </g>
    </svg>
  );
};

/**
 * Animación autónoma: el checklist se va marcando solo en bucle,
 * coloreando cada parte del logo de WeProm a medida que avanza.
 */
const LogoBuilder = () => {
  const [checkedFigures, setCheckedFigures] = useState<Record<string, boolean>>(
    Object.fromEntries(ANIMATION_ORDER.map(letter => [letter, false]))
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let step = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (step < ANIMATION_ORDER.length) {
        const letter = ANIMATION_ORDER[step];
        const stepIndex = ANIMATION_STEP_INDEXES[step];
        setActiveIndex(stepIndex);
        setCheckedFigures((prev) => ({ ...prev, [letter]: true }));
        step += 1;
        timer = setTimeout(tick, STEP_HOLD_MS);
      } else {
        timer = setTimeout(() => {
          setActiveIndex(-1);
          setCheckedFigures(Object.fromEntries(ANIMATION_ORDER.map(letter => [letter, false])));
          step = 0;
          timer = setTimeout(tick, STEP_HOLD_MS);
        }, RESET_PAUSE_MS);
      }
    };

    timer = setTimeout(tick, STEP_HOLD_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center gap-3 sm:gap-5 w-full">
      {/* Checklist compacto */}
      <div className="flex flex-col gap-1.5 sm:gap-2 shrink-0">
        {STEPS.map((step, index) => {
          const letterForThisStep = Object.entries(ANIMATION_MAPPING).find(
            ([, stepId]) => stepId === step.id
          )?.[0];
          const isChecked = letterForThisStep ? checkedFigures[letterForThisStep] : false;
          const isActive = activeIndex === index;
          return (
            <div key={step.id} className="flex items-center gap-2">
              <span
                className="shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full border-2 flex items-center justify-center transition-all duration-500"
                style={{
                  borderColor: isChecked ? step.color : 'rgba(255,255,255,0.25)',
                  backgroundColor: isChecked ? step.color : 'transparent',
                  transform: isActive ? 'scale(1.15)' : 'scale(1)',
                }}
              >
                {isChecked && <Check size={10} className="text-black" strokeWidth={3} />}
              </span>
              <span className={`text-[10px] sm:text-[11px] font-montserrat whitespace-nowrap transition-colors duration-500 ${isChecked ? 'text-white' : 'text-white/40'}`}>
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Logo */}
      <div className="relative flex-1 aspect-square max-w-[220px] sm:max-w-[280px] md:max-w-[320px]">
        <div className="absolute inset-0 bg-[#599ddf] blur-[90px] opacity-10 rounded-full" />
        <WepromLogoInteractive checkedFigures={checkedFigures} />
      </div>
    </div>
  );
};

export default LogoBuilder;
