import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import { getPortfolioCases, PortfolioCase } from '../lib/sanityQueries';
import { urlFor } from '../lib/sanityImage';
import { useContactPopup } from '../context/ContactPopupContext';

// ─── UEN config ───────────────────────────────────────────────────────────────

const UEN_CONFIG: Record<string, {
  label: string;
  headline: string;
  subheadline: string;
  color: string;
  glow: string;
  contactSubject: string;
}> = {
  'investigacion-de-mercado': {
    label: 'Investigación de Mercados',
    headline: 'Investigación\nde Mercados',
    subheadline: 'Estudios cualitativos y cuantitativos que revelan el comportamiento real del consumidor y las oportunidades de mercado que tu competencia no ve.',
    color: '#599ddf',
    glow: 'rgba(89,157,223,0.15)',
    contactSubject: 'Investigación de Mercados',
  },
  'marketing-digital': {
    label: 'Marketing Digital',
    headline: 'Marketing\nDigital',
    subheadline: 'Campañas de paid media, influencer marketing y contenido que convierten audiencias en clientes con retorno medible y escalable.',
    color: '#c5362e',
    glow: 'rgba(197,54,46,0.15)',
    contactSubject: 'Marketing Digital',
  },
  'branding': {
    label: 'Branding',
    headline: 'Branding',
    subheadline: 'Marcas que no solo se ven bien sino que conectan emocionalmente con su audiencia y se posicionan con autoridad en su sector.',
    color: '#e6af41',
    glow: 'rgba(230,175,65,0.15)',
    contactSubject: 'Branding & Identidad',
  },
};

const INDUSTRY_LABELS: Record<string, string> = {
  'alimentos-bebidas':    'Alimentos & Bebidas',
  'bebidas-alcoholicas':  'Bebidas Alcohólicas',
  'automotriz':           'Automotriz',
  'fmcg':                 'Consumo Masivo',
  'construccion':         'Construcción',
  'educacion':            'Educación',
  'gobierno':             'Gobierno',
  'hoteleria-turismo':    'Hotelería & Turismo',
  'manufactura':          'Manufactura',
  'retail-moda':          'Retail & Moda',
  'salud-farma':          'Salud & Farma',
  'servicios-financieros':'Servicios Financieros',
  'tecnologia':           'Tecnología',
  'telecomunicaciones':   'Telecomunicaciones',
  'otro':                 'Otro',
};

// ─── Case detail modal ────────────────────────────────────────────────────────

function CaseModal({ pc, color, onClose }: { pc: PortfolioCase; color: string; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [onClose]);

  const imgSrc = pc.coverImage ? urlFor(pc.coverImage) : '';
  const logoSrc = pc.logo ? urlFor(pc.logo) : '';

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative w-full sm:max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto"
        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Accent top */}
        <div className="h-[3px] w-full" style={{ backgroundColor: color }} />

        {/* Hero image */}
        {imgSrc && (
          <div className="relative w-full h-52 sm:h-64 overflow-hidden">
            <img src={imgSrc} alt={pc.client} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />
            {logoSrc && (
              <div className="absolute bottom-4 left-5">
                <img src={logoSrc} alt={`Logo ${pc.client}`} className="h-10 object-contain brightness-0 invert" />
              </div>
            )}
            <span
              className="absolute top-4 right-4 font-montserrat text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}
            >
              {INDUSTRY_LABELS[pc.industry] ?? pc.industry}
            </span>
          </div>
        )}

        <div className="p-6 sm:p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all z-10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Header */}
          <div className="mb-6">
            <p className="font-montserrat text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color }}>
              {pc.client}
            </p>
            <h2 className="font-aston text-white text-2xl sm:text-3xl leading-tight mb-3">{pc.projectTitle}</h2>
            <p className="font-montserrat text-white/50 text-[13px] leading-relaxed">{pc.description}</p>
          </div>

          {/* Objectives */}
          <div className="mb-6 p-4 rounded-xl" style={{ background: `${color}0d`, border: `1px solid ${color}22` }}>
            <p className="font-montserrat text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color }}>Objetivos</p>
            <p className="font-montserrat text-white/65 text-[13px] leading-relaxed whitespace-pre-line">{pc.objectives}</p>
          </div>

          {/* Results */}
          <div>
            <p className="font-montserrat text-[10px] font-bold uppercase tracking-widest mb-3 text-white/40">Resultados</p>
            <ul className="flex flex-col gap-2">
              {pc.results.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-[6px] flex-shrink-0" style={{ backgroundColor: color }} />
                  <span className="font-montserrat text-white/70 text-[13px] leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Case card ────────────────────────────────────────────────────────────────

function CaseCard({ pc, color, index, onClick }: { pc: PortfolioCase; color: string; index: number; onClick: () => void }) {
  const imgSrc = pc.coverImage ? urlFor(pc.coverImage) : '';
  const logoSrc = pc.logo ? urlFor(pc.logo) : '';
  const accentColor = pc.color || color;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-[#080808] cursor-pointer hover:border-white/20 transition-all duration-400"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#111]">
        {imgSrc
          ? <img src={imgSrc} alt={pc.client} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          : <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${accentColor}22 0%, #111 100%)` }} />
        }
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/20 to-transparent" />

        {/* Logo */}
        {logoSrc && (
          <div className="absolute top-4 left-4">
            <img src={logoSrc} alt={`Logo ${pc.client}`} className="h-8 object-contain brightness-0 invert opacity-90" />
          </div>
        )}

        {/* Industry badge */}
        <span
          className="absolute top-4 right-4 font-montserrat text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: `${accentColor}22`, color: accentColor, border: `1px solid ${accentColor}44` }}
        >
          {INDUSTRY_LABELS[pc.industry] ?? pc.industry}
        </span>

        {/* Featured badge */}
        {pc.featured && (
          <span className="absolute bottom-4 left-4 font-montserrat text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
            Destacado
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-2">
        <p className="font-montserrat text-[10px] font-semibold uppercase tracking-widest" style={{ color: accentColor }}>
          {pc.client}
        </p>
        <h3 className="font-montserrat font-bold text-white text-[14px] leading-snug group-hover:text-white/90 transition-colors line-clamp-2">
          {pc.projectTitle}
        </h3>
        <p className="font-montserrat text-white/40 text-[12px] leading-relaxed line-clamp-2 flex-1">
          {pc.description}
        </p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.06]">
          <span className="font-montserrat text-[11px] text-white/25">{pc.results.length} resultados</span>
          <span className="font-montserrat text-[11px] font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300" style={{ color: accentColor }}>
            Ver caso
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Featured card (full-width) ───────────────────────────────────────────────

function FeaturedCard({ pc, color, onClick }: { pc: PortfolioCase; color: string; onClick: () => void }) {
  const imgSrc = pc.coverImage ? urlFor(pc.coverImage) : '';
  const logoSrc = pc.logo ? urlFor(pc.logo) : '';
  const accentColor = pc.color || color;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      whileHover={{ y: -3 }}
      onClick={onClick}
      className="group grid grid-cols-1 sm:grid-cols-2 rounded-3xl overflow-hidden border border-white/[0.08] bg-[#080808] cursor-pointer hover:border-white/20 transition-all duration-500 mb-5"
    >
      {/* Image half */}
      <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-full min-h-[240px] overflow-hidden bg-[#111]">
        {imgSrc
          ? <img src={imgSrc} alt={pc.client} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          : <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${accentColor}30 0%, #111 100%)` }} />
        }
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#080808] via-black/30 to-transparent" />

        {logoSrc && (
          <div className="absolute top-5 left-5">
            <img src={logoSrc} alt={`Logo ${pc.client}`} className="h-10 object-contain brightness-0 invert" />
          </div>
        )}
        <span
          className="absolute top-5 right-5 font-montserrat text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: `${accentColor}22`, color: accentColor, border: `1px solid ${accentColor}44` }}
        >
          {INDUSTRY_LABELS[pc.industry] ?? pc.industry}
        </span>
        <span className="absolute bottom-5 left-5 font-montserrat text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
          Destacado
        </span>
      </div>

      {/* Content half */}
      <div className="p-8 sm:p-10 flex flex-col justify-center gap-4">
        <p className="font-montserrat text-[11px] font-semibold uppercase tracking-widest" style={{ color: accentColor }}>{pc.client}</p>
        <h2 className="font-aston text-white text-[22px] sm:text-[28px] leading-snug group-hover:text-white/90 transition-colors">
          {pc.projectTitle}
        </h2>
        <p className="font-montserrat text-white/45 text-[13px] leading-relaxed line-clamp-3">{pc.description}</p>
        <ul className="flex flex-col gap-1.5 mt-1">
          {pc.results.slice(0, 3).map((r, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <div className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: accentColor }} />
              <span className="font-montserrat text-white/55 text-[12px] leading-relaxed line-clamp-1">{r}</span>
            </li>
          ))}
        </ul>
        <span className="font-montserrat text-[12px] font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300 mt-2" style={{ color: accentColor }}>
          Ver caso completo
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </motion.article>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function PortafolioUen() {
  const { uen } = useParams<{ uen: string }>();
  const { openPopup } = useContactPopup();
  const config = uen ? UEN_CONFIG[uen] : null;

  const [cases, setCases] = useState<PortfolioCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndustry, setActiveIndustry] = useState('Todos');
  const [selected, setSelected] = useState<PortfolioCase | null>(null);

  useEffect(() => {
    if (!uen) return;
    setLoading(true);
    getPortfolioCases(uen)
      .then(data => { setCases(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [uen]);

  // Industries present in fetched cases
  const availableIndustries = useMemo(() => {
    const set = new Set(cases.map(c => c.industry));
    return Array.from(set).sort((a, b) =>
      (INDUSTRY_LABELS[a] ?? a).localeCompare(INDUSTRY_LABELS[b] ?? b, 'es')
    );
  }, [cases]);

  const filtered = useMemo(() =>
    activeIndustry === 'Todos' ? cases : cases.filter(c => c.industry === activeIndustry),
    [cases, activeIndustry]
  );

  const featured = filtered.filter(c => c.featured);
  const regular  = filtered.filter(c => !c.featured);

  if (!config) {
    return (
      <div className="min-h-screen bg-transparent text-white flex items-center justify-center">
        <p className="font-montserrat text-white/40">Área no encontrada.</p>
      </div>
    );
  }

  const color = config.color;

  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.08]"
            style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)`, filter: 'blur(90px)' }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-8"
          >
            <Link to="/portafolio" className="font-montserrat text-[12px] text-white/30 hover:text-white/60 transition-colors">
              Portafolio
            </Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/20">
              <path d="M9 18l6-6-6-6"/>
            </svg>
            <span className="font-montserrat text-[12px]" style={{ color }}>{config.label}</span>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="w-12 h-[2px] mb-5" style={{ backgroundColor: color }} />
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="font-aston text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-white tracking-tight whitespace-pre-line"
              >
                {config.headline}
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="font-montserrat text-white/35 text-[13px] sm:text-[14px] max-w-xs leading-relaxed sm:text-right"
            >
              {config.subheadline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="px-4 sm:px-8 pb-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }}
            className="flex gap-2 flex-wrap"
          >
            <button
              onClick={() => setActiveIndustry('Todos')}
              className={`font-montserrat text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                activeIndustry === 'Todos'
                  ? 'text-white border-white/30'
                  : 'text-white/40 border-white/10 hover:text-white/70 hover:border-white/20'
              }`}
              style={activeIndustry === 'Todos' ? { background: `${color}22`, borderColor: `${color}66` } : {}}
            >
              Todos ({cases.length})
            </button>
            {availableIndustries.map(ind => {
              const count = cases.filter(c => c.industry === ind).length;
              const active = activeIndustry === ind;
              return (
                <button
                  key={ind}
                  onClick={() => setActiveIndustry(ind)}
                  className={`font-montserrat text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                    active ? 'text-white' : 'text-white/40 border-white/10 hover:text-white/70 hover:border-white/20'
                  }`}
                  style={active ? { background: `${color}22`, borderColor: `${color}66`, color } : {}}
                >
                  {INDUSTRY_LABELS[ind] ?? ind} ({count})
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Cases */}
      <section className="px-4 sm:px-8 pb-24">
        <div className="max-w-5xl mx-auto">

          {loading && (
            <div className="flex flex-col items-center py-24 gap-4">
              <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white/60 animate-spin" />
              <p className="font-montserrat text-white/30 text-[13px]">Cargando proyectos...</p>
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="flex flex-col items-center py-24 gap-3 text-center">
              <p className="font-montserrat text-white/30 text-[14px]">No hay proyectos en esta categoría aún.</p>
              <button
                onClick={() => setActiveIndustry('Todos')}
                className="font-montserrat text-[12px] hover:text-white transition-colors underline underline-offset-2"
                style={{ color }}
              >
                Ver todos
              </button>
            </div>
          )}

          {!loading && filtered.length > 0 && (
            <>
              {/* Featured */}
              {featured.map(pc => (
                <FeaturedCard key={pc._id} pc={pc} color={color} onClick={() => setSelected(pc)} />
              ))}

              {/* Grid */}
              {regular.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {regular.map((pc, i) => (
                    <CaseCard key={pc._id} pc={pc} color={color} index={i} onClick={() => setSelected(pc)} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="px-4 sm:px-8 pb-24 max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#070707] px-8 sm:px-12 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="h-[2px] absolute top-0 left-0 right-0" style={{ background: `linear-gradient(90deg, transparent, ${color} 50%, transparent)` }} />
          <div>
            <p className="font-montserrat text-[11px] uppercase tracking-widest mb-2 text-white/30">¿Listo para empezar?</p>
            <h2 className="font-aston text-white text-[clamp(1.6rem,3.5vw,3rem)] leading-tight">
              Hablemos de<br />tu proyecto
            </h2>
          </div>
          <button
            onClick={() => openPopup(config.contactSubject)}
            className="flex-shrink-0 font-montserrat font-semibold text-[13px] tracking-[0.12em] uppercase px-8 py-3.5 rounded-full border transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ color, borderColor: `${color}55`, background: `${color}12` }}
          >
            Solicitar propuesta
          </button>
        </div>
      </section>

      <Footer />

      {/* Case modal */}
      <AnimatePresence>
        {selected && (
          <CaseModal pc={selected} color={color} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
