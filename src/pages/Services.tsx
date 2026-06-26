import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContactPopup } from '../context/ContactPopupContext';
import { TrendingUp, Palette, Target, Camera, Search, ArrowRight, ChevronDown } from 'lucide-react';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';

// ─── Brand data ───────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: '01',
    name: 'Marketing\nDigital',
    tagline: 'Donde está tu audiencia, estaremos.',
    description:
      'Estrategias integrales de paid media, influencer marketing y contenido orgánico que convierten clicks en clientes reales y generan retorno medible.',
    features: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Influencer MKT', 'UGC'],
    path: '/servicios/marketing-digital',
    color: '#009fe3',
    glow: 'rgba(0,159,227,0.22)',
    icon: TrendingUp,
    layout: 'tall' as const,
  },
  {
    id: '02',
    name: 'Professional\nBranding',
    tagline: 'Tu identidad, redefinida.',
    description:
      'Creamos marcas que no solo se ven bien, sino que conectan emocionalmente con su audiencia y se posicionan con autoridad.',
    features: ['Identidad Visual', 'Naming', 'Estrategia de Marca', 'Manual de Marca'],
    path: '/servicios/branding',
    color: '#c5362e',
    glow: 'rgba(197,54,46,0.22)',
    icon: Palette,
    layout: 'normal' as const,
  },
  {
    id: '03',
    name: 'Consultoría\nen Marketing',
    tagline: 'Estrategia con propósito.',
    description:
      'Diagnóstico profundo y planes de acción a medida para que maximices tu inversión con decisiones basadas en datos reales.',
    features: ['Diagnóstico 360°', 'Plan Estratégico', 'KPIs & Métricas'],
    path: '/servicios/consultoriademarketing',
    color: '#80b67d',
    glow: 'rgba(128,182,125,0.22)',
    icon: Target,
    layout: 'normal' as const,
  },
  {
    id: '04',
    name: 'Producción\nAudiovisual',
    tagline: 'Historias que mueven emociones.',
    description:
      'Videos institucionales, publicitarios y contenido para redes que elevan la percepción de tu marca y aumentan el engagement de forma exponencial.',
    features: ['Videos Publicitarios', 'Reels & Short-form', 'Videos Institucionales', 'Fotografía'],
    path: '/servicios/audiovisual',
    color: '#e6af41',
    glow: 'rgba(230,175,65,0.22)',
    icon: Camera,
    layout: 'wide' as const,
  },
  {
    id: '05',
    name: 'Investigación\nde Mercados',
    tagline: 'Decisiones informadas, resultados seguros.',
    description:
      'Estudios cualitativos y cuantitativos que revelan insights del consumidor y oportunidades de mercado que tu competencia no ve.',
    features: ['Estudios de Consumidor', 'Análisis Competitivo', 'Focus Groups', 'Tendencias de Mercado'],
    path: '/servicios/investigacion-de-mercados',
    color: '#599ddf',
    glow: 'rgba(89,157,223,0.22)',
    icon: Search,
    layout: 'wide' as const,
  },
];

const STATS = [
  { value: '+35', label: 'Años de experiencia' },
  { value: '+10,000', label: 'Proyectos Realizados' },
  { value: '+1,000', label: 'Clientes Globales' },
  { value: '+3', label: 'Sedes Internacionales' },
];

// ─── Card decoration SVGs ─────────────────────────────────────────────────────

function DecoTrend() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <polyline points="10,140 50,100 90,115 130,60 170,30" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <polyline points="10,140 50,100 90,115 130,60 170,30" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" opacity="0.04" />
      {[50, 90, 130, 170].map((x, i) => {
        const ys = [100, 115, 60, 30];
        return <circle key={x} cx={x} cy={ys[i]} r="4" fill="white" opacity="0.5" />;
      })}
      <line x1="10" y1="145" x2="185" y2="145" stroke="white" strokeWidth="1" opacity="0.15" />
      <line x1="10" y1="100" x2="185" y2="100" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
      <line x1="10" y1="60" x2="185" y2="60" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
      <polygon points="170,30 162,38 178,38" fill="white" opacity="0.4" />
    </svg>
  );
}

function DecoBranding() {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="90" cy="90" r="70" stroke="white" strokeWidth="1.5" opacity="0.15" />
      <circle cx="90" cy="90" r="45" stroke="white" strokeWidth="1.5" opacity="0.12" />
      <circle cx="90" cy="90" r="20" fill="white" opacity="0.06" />
      <circle cx="55" cy="55" r="22" stroke="white" strokeWidth="1.5" opacity="0.2" />
      <circle cx="130" cy="70" r="16" stroke="white" strokeWidth="1.5" opacity="0.18" />
      <circle cx="70" cy="130" r="18" stroke="white" strokeWidth="1.5" opacity="0.16" />
      <line x1="68" y1="68" x2="55" y2="55" stroke="white" strokeWidth="1" opacity="0.12" />
      <line x1="110" y1="82" x2="130" y2="70" stroke="white" strokeWidth="1" opacity="0.12" />
      <line x1="82" y1="108" x2="70" y2="130" stroke="white" strokeWidth="1" opacity="0.12" />
    </svg>
  );
}

function DecoConsultoria() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="100" cy="80" r="12" fill="white" opacity="0.12" stroke="white" strokeWidth="1.5" />
      {[[30, 30], [170, 30], [30, 130], [170, 130]].map(([cx, cy], i) => (
        <g key={i}>
          <line x1={cx < 100 ? cx + 14 : cx - 14} y1={cy < 80 ? cy + 8 : cy - 8} x2={cx < 100 ? 88 : 112} y2={cy < 80 ? 72 : 88} stroke="white" strokeWidth="1" opacity="0.15" strokeDasharray="4 3" />
          <circle cx={cx} cy={cy} r="9" stroke="white" strokeWidth="1.5" opacity="0.2" />
          <circle cx={cx} cy={cy} r="3" fill="white" opacity="0.25" />
        </g>
      ))}
      <circle cx="100" cy="80" r="4" fill="white" opacity="0.5" />
    </svg>
  );
}

function DecoAudiovisual() {
  return (
    <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {[0, 1, 2].map(i => (
        <g key={i} transform={`translate(${i * 88}, 0)`}>
          <rect x="4" y="10" width="80" height="100" rx="6" stroke="white" strokeWidth="1.5" opacity="0.15" />
          <rect x="4" y="10" width="80" height="18" fill="white" opacity="0.05" />
          {[0, 1, 2, 3].map(j => (
            <rect key={j} x={8 + j * 18} y="13" width="10" height="12" rx="2" fill="white" opacity="0.12" />
          ))}
          <polygon points={`${44 - 10},${52} ${44 + 12},${62} ${44 - 10},${72}`} fill="white" opacity="0.2" />
          {[0, 1, 2].map(j => (
            <rect key={j} x="14" y={`${86 + j * 7}`} width={`${50 - j * 10}`} height="4" rx="2" fill="white" opacity="0.1" />
          ))}
        </g>
      ))}
    </svg>
  );
}

function DecoInvestigacion() {
  const bars = [55, 80, 45, 100, 70, 90, 60, 85];
  return (
    <svg viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {bars.map((h, i) => (
        <g key={i}>
          <rect x={20 + i * 34} y={110 - h} width="22" height={h} rx="4" fill="white" opacity="0.08" />
          <rect x={20 + i * 34} y={110 - h} width="22" height="4" rx="2" fill="white" opacity="0.2" />
        </g>
      ))}
      <line x1="14" y1="110" x2="295" y2="110" stroke="white" strokeWidth="1" opacity="0.2" />
      {[25, 50, 75, 100].map(pct => (
        <line key={pct} x1="14" y1={110 - pct} x2="295" y2={110 - pct} stroke="white" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.1" />
      ))}
    </svg>
  );
}

const DECOS = [DecoTrend, DecoBranding, DecoConsultoria, DecoAudiovisual, DecoInvestigacion];

// ─── ServiceCard ──────────────────────────────────────────────────────────────

function ServiceCard({ service, idx, fullWidth }: { service: typeof SERVICES[0]; idx: number; fullWidth?: boolean }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = service.icon;
  const Deco = DECOS[idx];

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mx', `${x}%`);
    e.currentTarget.style.setProperty('--my', `${y}%`);
  };

  const isHoriz = fullWidth || service.layout === 'wide';

  return (
    <Link
      to={service.path}
      ref={cardRef}
      className="block h-full group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${idx * 0.08}s, transform 0.6s ease ${idx * 0.08}s`,
      }}
    >
      <div
        onMouseMove={handleMouseMove}
        className="relative h-full rounded-2xl border border-white/[0.08] bg-[#080808] overflow-hidden cursor-pointer transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl group-hover:scale-[1.015]"
        style={{'--mx': '50%', '--my': '50%'} as React.CSSProperties}
      >
        {/* Mouse-tracking spotlight */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{ background: `radial-gradient(circle at var(--mx) var(--my), ${service.glow} 0%, transparent 55%)` }}
        />

        {/* Decorative SVG watermark - Responsive positioning */}
        <div
          className="absolute pointer-events-none z-0 opacity-[0.055] group-hover:opacity-[0.085] transition-opacity duration-500"
          style={isHoriz
            ? { 
                right: '-4%', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                width: 'clamp(120px, 35%, 320px)',
                maxWidth: '320px'
              }
            : { 
                right: '-6%', 
                bottom: '-4%', 
                width: 'clamp(100px, 70%, 240px)',
                maxWidth: '240px'
              }
          }
        >
          <Deco />
        </div>

        {/* Content - Responsive padding */}
        <div className={`relative z-10 p-4 sm:p-5 lg:p-7 h-full flex ${isHoriz ? 'flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8' : 'flex-col'}`}>

          {/* Left / top content */}
          <div className={isHoriz ? 'flex-1 min-w-0 w-full' : 'flex flex-col flex-1 w-full'}>
            {/* Number + Icon row */}
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span
                className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest"
                style={{ color: service.color }}
              >
                {service.id}
              </span>
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                style={{ backgroundColor: `${service.color}18`, color: service.color }}
              >
                <Icon size={isHoriz ? 16 : 18} className="sm:w-[18px] sm:h-[18px] lg:w-[18px] lg:h-[18px]" />
              </div>
            </div>

            {/* Title - Responsive font size */}
            <h2
              className="font-aston text-white whitespace-pre-line leading-tight mb-1.5 sm:mb-2"
              style={{ 
                fontSize: isHoriz 
                  ? 'clamp(1.2rem, 2.2vw, 2.2rem)' 
                  : 'clamp(1.3rem, 2.5vw, 2.4rem)' 
              }}
            >
              {service.name}
            </h2>

            {/* Tagline */}
            <p className="text-xs sm:text-sm font-montserrat font-medium mb-2 sm:mb-3" style={{ color: service.color }}>
              {service.tagline}
            </p>

            {/* Description - Hide on smallest screens if needed, keep on larger */}
            <p className={`text-zinc-400 text-[11px] sm:text-[12px] lg:text-[13px] font-montserrat leading-relaxed mb-3 sm:mb-4 ${isHoriz ? 'hidden xs:block' : ''}`}>
              {service.description}
            </p>

            {/* Features - Responsive wrap */}
            <div className={`flex flex-wrap gap-1.5 sm:gap-2 ${isHoriz ? 'mb-2 sm:mb-0' : 'mb-3 sm:mb-6'}`}>
              {service.features.map(f => (
                <span
                  key={f}
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] lg:text-[11px] font-montserrat border"
                  style={{
                    borderColor: `${service.color}35`,
                    color: service.color,
                    backgroundColor: `${service.color}0d`,
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* CTA - Responsive positioning */}
          {isHoriz ? (
            <div className="flex-shrink-0 w-full sm:w-auto">
              <div
                className="flex items-center justify-center sm:justify-start gap-2 text-[11px] sm:text-[12px] lg:text-[13px] font-montserrat font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-300 group-hover:text-white whitespace-nowrap"
                style={{
                  borderColor: `${service.color}50`,
                  color: service.color,
                  backgroundColor: `${service.color}0d`,
                }}
              >
                Explorar servicio
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300 sm:w-[14px] sm:h-[14px]" />
              </div>
            </div>
          ) : (
            <div className="mt-auto flex items-center gap-2 text-[11px] sm:text-[13px] font-montserrat font-medium text-white/50 group-hover:text-white/80 transition-colors duration-300">
              <span>Explorar servicio</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300 sm:w-[13px] sm:h-[13px]" />
            </div>
          )}
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: service.color }}
        />
      </div>
    </Link>
  );
}

// ─── WepromIsotipo SVG ────────────────────────────────────────────────────────

function IsotipoSVG({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 780.55 712.65"
      className={className}
    >
      <defs>
        <style>{`.sv-1{fill:url(#sv-g6)}.sv-2{fill:url(#sv-g170)}.sv-3{fill:url(#sv-g201)}.sv-4{fill:url(#sv-g194)}.sv-5{fill:url(#sv-g3)}.sv-6{fill:url(#sv-g22)}.sv-7{fill:url(#sv-g194b)}.sv-8{fill:url(#sv-g6b)}`}</style>
        <linearGradient id="sv-g194" x1="689.73" y1="503.15" x2="689.73" y2="506.87" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f09428"/><stop offset="1" stopColor="#f9b233"/>
        </linearGradient>
        <linearGradient id="sv-g194b" x1="734.92" y1="96.62" x2="734.92" y2="554.63" xlinkHref="#sv-g194"/>
        <linearGradient id="sv-g6" x1="3.05" y1="515.94" x2="3.11" y2="515.84" gradientUnits="userSpaceOnUse">
          <stop offset=".07" stopColor="#e6332a"/>
          <stop offset="1" stopColor="#009fe3"/>
        </linearGradient>
        <linearGradient id="sv-g6b" x1="81.77" y1="583.27" x2="374.34" y2="76.54" xlinkHref="#sv-g6"/>
        <linearGradient id="sv-g22" x1="42.84" y1="505.91" x2="42.84" y2="271.32" gradientUnits="userSpaceOnUse">
          <stop offset=".01" stopColor="#a3332a"/><stop offset="1" stopColor="#e6332a"/>
        </linearGradient>
        <linearGradient id="sv-g3" x1="728.43" y1="52.76" x2="460.78" y2="516.35" gradientUnits="userSpaceOnUse">
          <stop offset=".05" stopColor="#f9b233"/><stop offset="1" stopColor="#579966"/>
        </linearGradient>
        <linearGradient id="sv-g201" x1="72.81" y1="406.73" x2="706.31" y2="406.73" gradientUnits="userSpaceOnUse">
          <stop offset=".08" stopColor="#e6332a"/>
          <stop offset=".49" stopColor="#009fe3"/>
          <stop offset=".79" stopColor="#60b87b"/>
          <stop offset="1" stopColor="#f9b233"/>
        </linearGradient>
        <linearGradient id="sv-g170" x1="476.57" y1="292.44" x2="476.57" y2="683.68" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0072bc"/><stop offset="1" stopColor="#60b87b"/>
        </linearGradient>
      </defs>
      <g>
        <path className="sv-4" d="M689.65,503.45c-.02,1.21.04,2.41.15,3.6,0-.34,0-.67,0-1.02-.1-1.02-.14-2.04-.14-3.08,0,.16,0,.34,0,.49Z"/>
        <path className="sv-7" d="M689.63,73.54c-.5,31.91.61,381.87.05,428.04.07,1.52.11,3,.12,4.46,3.9,41.46,85.93,70.25,85.93,70.25-.02.33-.04.66-.07.98.04.02.07.02.07.02,1.05-62.18,4.22-381.27,4.61-419.89-22.48-67.07-71.63-81.03-90.71-83.86Z"/>
        <path className="sv-1" d="M3.1,515.98s0-.02,0-.03c-.02-.19-.05-.17,0,.03h0Z"/>
        <path className="sv-8" d="M431.96,221.95c-.13-54.69-44.85-157.97-137.14-157.99-63.84-.01-107.65,44.61-115.62,78.86-2.17,9.34-5.02,32.33-4.68,42.53.91,27.13.68,261.45-.33,275.79-.44,6.34,9,77.5-43.57,110.47-13.3,8.34-29.17,12.53-44.57,9.54-56.62-10.99-82.24-66.42-82.58-66.96,0,0,2.89,18.21,6.04,25.9,42.24,103.24,120.38,95.8,129.9,95.81,41.25.06,111.55-13.84,117.71-110.67.18-2.83-2.19-305.52-.44-309.75,8.56-63.57,46.31-76.16,61.68-77.55,79.89-12.58,113.6,84.02,113.6,84.02Z"/>
        <path className="sv-6" d="M85.03,580.94c-1.33-34.92,0-214.45.64-266.37l-16.69-147.31c-45.39,9.82-59.23,54.27-64.18,71.89-9.06,32.24-2.78,235.33-1.41,274.66.02.48,4.33,8.89,11.93,19.6,12.55,17.11,35.35,40.49,69.7,47.53Z"/>
        <path className="sv-5" d="M644.41,0c-93.28,0-119.15,63.97-123.25,91.33-2.17,14.48-1.84,49.14-1.91,53.97-.26,17.39,0,34.8,0,52.19,0,35.8-.58,294.56-.54,311.14.23,121.3,1.06,148.46-.19,153.58,36.49-.13,73.68-22.95,87.88-71.01.16-4.11.24-10.35.21-14.74-.21-38.72-.44-357.05-.4-364.78.27-54.87-6.83-138.05,75.64-138.83-.02-.14,70.61.32,98.71,85.14C778.08,38.21,693.73,0,644.41,0Z"/>
        <path className="sv-3" d="M689.65,502.45c0-.34.01-.71.02-1.1,2.31,49.53-24.6,68.58-63.68,44.95-7.02-4.24-453.47-351.17-462.71-357.04-50.68-32.22-94.3-22-94.3-22,2.75,20.65,16.33,144.9,16.69,147.31-.64-81.57,64.92-75.98,95.29-51.61-8.3-6.66,431.17,335.9,460.54,353.92,12.4,7.6,24.78,15.6,37.68,22.34,12.61,6.6,27.45,9.42,42.05,8.26,17.39-1.38,31.93-12.96,40.25-27.49,7.3-12.75,11.86-25.71,13.93-40.34.12-.86.23-2.11.31-3.37,0,0-86.8-30.46-86.08-73.83Z"/>
        <path className="sv-2" d="M431.83,578.79c-2.69-24.65,1.42-351.8.27-355.44-9.74-30.89-38.95-75.63-85.43-85.33,0,0,.71,393.75.54,405.37-1.54,102.5,60.48,163.96,132.95,168.81,133.65,8.95,126.23-121.02,126.23-121.02-30.09,101.91-163.57,88.4-174.56-12.4Z"/>
      </g>
    </svg>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────────────

function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center gap-0.5 sm:gap-1">
      <span
        className="font-aston text-2xl sm:text-3xl md:text-4xl text-white transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(12px)' }}
      >
        {value}
      </span>
      <span
        className="font-montserrat text-[10px] sm:text-xs md:text-sm text-zinc-500 transition-all duration-700 delay-100"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)' }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Services() {
  const { openPopup } = useContactPopup();
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToGrid = () => {
    const el = document.getElementById('servicios-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6"
      >
        {/* Background glows - Responsive sizing */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60vw] sm:w-[50vw] h-[60vw] sm:h-[50vw] max-w-[700px] max-h-[700px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(0,159,227,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute bottom-[-5%] left-[-10%] w-[50vw] sm:w-[40vw] h-[50vw] sm:h-[40vw] max-w-[500px] max-h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(197,54,46,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute top-[30%] left-[25%] w-[40vw] sm:w-[30vw] h-[40vw] sm:h-[30vw] max-w-[400px] max-h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(128,182,125,0.04) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        </div>

        {/* Large isotipo watermark - Hidden on mobile */}
        <div
          className="absolute right-[-10%] top-[50%] pointer-events-none z-0 hidden lg:block"
          style={{ transform: 'translateY(-50%)', width: 'min(55vw, 700px)', opacity: 0.045, animation: 'slowSpin 80s linear infinite' }}
        >
          <IsotipoSVG className="w-full h-full" />
        </div>

        {/* CSS animation */}
        <style>{`@keyframes slowSpin { to { transform: translateY(-50%) rotate(360deg); } }`}</style>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-6">

          {/* Badge */}
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[10px] sm:text-xs font-montserrat text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009fe3] animate-pulse" />
            5 servicios especializados
          </div>

          {/* Main title - Responsive typography */}
          <h1 className="font-aston text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] text-white tracking-tight">
            Todo lo que tu marca
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              necesita para crecer.
              <span
                className="absolute bottom-0 left-0 right-0 h-[2px] sm:h-[3px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #c5362e, #009fe3, #80b67d, #e6af41, #599ddf)' }}
              />
            </span>
          </h1>

          {/* Subtitle - Responsive */}
          <p className="font-montserrat text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed px-2 sm:px-0">
            Somos tu aliado estratégico en marketing. Combinamos creatividad, datos y tecnología para llevar tu marca al siguiente nivel en cada punto de contacto con tu audiencia.
          </p>

          {/* CTAs - Stack on mobile */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mt-1 sm:mt-2 w-full sm:w-auto">
            <button
              onClick={() => openPopup()}
              className="w-full sm:w-auto px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white text-black font-montserrat font-bold text-xs sm:text-sm hover:bg-zinc-100 active:scale-95 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Solicitar consulta gratuita
            </button>
            <button
              onClick={scrollToGrid}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-montserrat text-xs sm:text-sm transition-all duration-200"
            >
              Explorar servicios
              <ChevronDown size={14} className="animate-bounce" />
            </button>
          </div>
        </div>

        {/* Stats strip - Responsive */}
        <div className="relative z-10 mt-12 sm:mt-16 md:mt-20 w-full max-w-3xl mx-auto px-3 sm:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-16 px-4 sm:px-6 py-4 sm:py-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
            {STATS.map(s => <StatCard key={s.label} value={s.value} label={s.label} />)}
          </div>
        </div>
      </section>

      {/* ─── SERVICES BENTO GRID ─── */}
      <section id="servicios-grid" className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 max-w-7xl mx-auto">
        
        {/* Encabezado - Mejor espaciado en móvil */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="font-montserrat text-[10px] sm:text-xs text-zinc-600 uppercase tracking-[0.15em] sm:tracking-widest mb-2 sm:mb-3">
            Nuestras especialidades
          </p>
          <h2 className="font-aston text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
            Elige tu próximo paso.
          </h2>
        </div>

        {/* ─── BENTO GRID RESPONSIVE ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 auto-rows-auto">
          
          {/* 01 Marketing Digital — En móvil ocupa 1 columna, en tablet+ ocupa 2 filas */}
          <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[280px] sm:min-h-[300px] lg:min-h-[340px]">
            <ServiceCard service={SERVICES[0]} idx={0} />
          </div>

          {/* 02 Branding — Ocupa 1 columna siempre */}
          <div className="min-h-[260px] sm:min-h-[280px]">
            <ServiceCard service={SERVICES[1]} idx={1} />
          </div>

          {/* 03 Consultoría — Ocupa 1 columna siempre */}
          <div className="min-h-[260px] sm:min-h-[280px]">
            <ServiceCard service={SERVICES[2]} idx={2} />
          </div>

          {/* 04 Audiovisual — En móvil ocupa 1 columna, en tablet+ ocupa 2 columnas */}
          <div className="sm:col-span-2 min-h-[220px] sm:min-h-[240px]">
            <ServiceCard service={SERVICES[3]} idx={3} fullWidth />
          </div>

          {/* 05 Investigación — Ocupa todas las columnas */}
          <div className="sm:col-span-2 lg:col-span-3 min-h-[200px] sm:min-h-[220px]">
            <ServiceCard service={SERVICES[4]} idx={4} fullWidth />
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.07] bg-[#070707] px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">

          {/* Background isotipo - Hidden on mobile */}
          <div className="absolute right-[-5%] top-[-20%] pointer-events-none opacity-[0.04] w-[45%] max-w-[420px] hidden sm:block">
            <IsotipoSVG className="w-full h-full" />
          </div>

          {/* Gradient strip top */}
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, transparent, #c5362e 20%, #009fe3 50%, #80b67d 80%, transparent)' }} />

          {/* Text */}
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <p className="font-montserrat text-[10px] sm:text-xs text-zinc-500 uppercase tracking-[0.15em] sm:tracking-widest mb-2 sm:mb-3">
              ¿Por dónde empezamos?
            </p>
            <h2 className="font-aston text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-3 sm:mb-4">
              Hablemos sobre<br className="hidden sm:block" />tu marca.
            </h2>
            <p className="font-montserrat text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
              Agenda una sesión de diagnóstico gratuita. Analizamos tu situación actual y te decimos exactamente qué servicio se adapta mejor a tus objetivos.
            </p>
          </div>

          {/* Buttons - Stack on mobile */}
          <div className="relative z-10 flex flex-col gap-3 w-full md:w-auto md:flex-shrink-0">
            <button
              onClick={() => openPopup()}
              className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-black font-montserrat font-bold text-xs sm:text-sm hover:bg-zinc-100 active:scale-95 transition-all duration-200 text-center shadow-[0_0_40px_rgba(255,255,255,0.12)]"
            >
              Contáctanos
            </button>
            <button
              onClick={() => openPopup()}
              className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-montserrat text-xs sm:text-sm transition-all duration-200 text-center"
            >
              Agendar diagnóstico
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}