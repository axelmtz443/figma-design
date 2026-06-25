import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import { getPortfolioCases } from '../lib/sanityQueries';

const UENS = [
  {
    slug: 'investigacion-de-mercado',
    label: 'Investigación\nde Mercados',
    shortLabel: 'Inv. de Mercados',
    description: 'Estudios cualitativos y cuantitativos que revelan el comportamiento real del consumidor y las oportunidades de mercado que tu competencia no ve.',
    color: '#599ddf',
    glow: 'rgba(89,157,223,0.18)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
      </svg>
    ),
  },
  {
    slug: 'marketing-digital',
    label: 'Marketing\nDigital',
    shortLabel: 'Marketing Digital',
    description: 'Campañas de paid media, influencer marketing y contenido que convierten audiencias en clientes con retorno medible y escalable.',
    color: '#c5362e',
    glow: 'rgba(197,54,46,0.18)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    slug: 'branding',
    label: 'Branding',
    shortLabel: 'Branding',
    description: 'Marcas que no solo se ven bien sino que conectan emocionalmente con su audiencia y se posicionan con autoridad en su sector.',
    color: '#e6af41',
    glow: 'rgba(230,175,65,0.18)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
      </svg>
    ),
  },
];

export default function Portafolio() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    getPortfolioCases().then(cases => {
      const c: Record<string, number> = {};
      cases.forEach(pc => { c[pc.uen] = (c[pc.uen] || 0) + 1; });
      setCounts(c);
    }).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, rgba(89,157,223,0.6) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#599ddf] animate-pulse" />
            <span className="font-montserrat text-[11px] uppercase tracking-widest text-white/50">Casos de Éxito</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-aston text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-white mb-6"
          >
            Portafolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-montserrat text-white/40 text-[15px] sm:text-[16px] max-w-xl mx-auto leading-relaxed"
          >
            Resultados reales para marcas que apostaron por la estrategia.
            Explora nuestros proyectos por área de especialidad.
          </motion.p>
        </div>
      </section>

      {/* UEN Cards */}
      <section className="px-4 sm:px-8 pb-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {UENS.map((uen, i) => (
            <motion.div
              key={uen.slug}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
            >
              <Link to={`/portafolio/${uen.slug}`} className="group block h-full">
                <div
                  className="relative h-full rounded-2xl border border-white/[0.08] bg-[#080808] overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:scale-[1.02] p-7 flex flex-col gap-5"
                  style={{ '--glow': uen.glow } as React.CSSProperties}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 30% 40%, ${uen.glow} 0%, transparent 60%)` }}
                  />
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: uen.color }} />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center relative z-10 flex-shrink-0"
                    style={{ backgroundColor: `${uen.color}18`, color: uen.color }}
                  >
                    {uen.icon}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-1 gap-3">
                    <h2 className="font-aston text-white whitespace-pre-line leading-tight"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
                      {uen.label}
                    </h2>
                    <p className="font-montserrat text-white/40 text-[13px] leading-relaxed flex-1">
                      {uen.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                      {counts[uen.slug] !== undefined && (
                        <span className="font-montserrat text-[11px] text-white/25 uppercase tracking-widest">
                          {counts[uen.slug]} {counts[uen.slug] === 1 ? 'caso' : 'casos'}
                        </span>
                      )}
                      <span
                        className="font-montserrat text-[12px] font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300 ml-auto"
                        style={{ color: uen.color }}
                      >
                        Ver proyectos
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
