import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import ScrollReveal from '../components/General/ScrollReveal';
import worldMap from '../images/world-map.svg';

import RocketIconNewProjects from '../images/Contact/RocketIcon.jpg';
import PersonIconClients from '../images/Contact/PersonIcon.jpg';
import MessageIconGeneral from '../images/Contact/MessageIcon.jpg';

// ─── Types ────────────────────────────────────────────────────────────────────

type ContactOption = { title: string; description: string; link: string };
type OfficeCard    = { label: string; value: string };
interface LocationPin { id: number; city: string; country: string; lat: number; lon: number; color: string }

// Equirectangular projection: converts lat/lon to SVG coords (viewBox 0 0 1000 500)
const geoToSvg = (lat: number, lon: number) => ({
  x: (lon + 180) / 360 * 1000,
  y: (90 - lat) / 180 * 500,
});

// ─── Data ─────────────────────────────────────────────────────────────────────

const FULL_GRADIENT = 'linear-gradient(90deg, #973a32, #558aac, #72987f, #d39b44)';

const contactOptions: ContactOption[] = [
  { title: 'Nuevos Proyectos',  description: '¿Buscas escalar tus resultados?',           link: 'ventas@weprom.mx'   },
  { title: 'Clientes',          description: 'Seguimiento de tus estrategias actuales.',   link: 'proyectos@weprom.mx' },
  { title: 'General',           description: 'Alianzas, dudas generales, otros.',          link: 'hola@weprom.mx'     },
];

const officeCards: OfficeCard[] = [
  { label: 'Dirección',          value: 'C. Corrientes 3071, Colomos Providencia, Gdl, Jalisco, Mex.' },
  { label: 'Horario de oficina', value: '9:00 AM - 3:00 PM' },
  { label: 'Días de atención',   value: 'Lunes a Viernes' },
];

const locations: LocationPin[] = [
  { id: 1, city: 'Austin',      country: 'USA', lat: 30.27, lon: -97.74,  color: '#3b82f6' },
  { id: 2, city: 'Guadalajara', country: 'MX',  lat: 20.66, lon: -103.35, color: '#10b981' },
  { id: 3, city: 'Paris',       country: 'FR',  lat: 48.86, lon:   2.35,  color: '#6366f1' },
];

const contactIcons = [RocketIconNewProjects, PersonIconClients, MessageIconGeneral];

// ─── Icon helpers ──────────────────────────────────────────────────────────────

const IconPin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconCalendar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const officeIcons = [IconPin, IconClock, IconCalendar];

const GradientText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={className} style={{ background: FULL_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline' }}>
    {children}
  </span>
);

const GradientArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="g-arr" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" /><stop offset="33%" stopColor="#3b82f6" />
        <stop offset="66%" stopColor="#22c55e" /><stop offset="100%" stopColor="#facc15" />
      </linearGradient>
    </defs>
    <path d="M7 17L17 7M7 7h10v10" stroke="url(#g-arr)" />
  </svg>
);

// ─── Interactive World Map ─────────────────────────────────────────────────────

function WorldMap() {
  const [hoveredLoc, setHoveredLoc] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="relative h-[320px] sm:h-[380px] bg-[#0c0c0e]/60 rounded-3xl border border-zinc-800/80 overflow-hidden shadow-2xl group"
    >
      <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[url('/textures/stardust.png')]" />

      {/* Mapa + pines en un único sistema de coordenadas SVG */}
      <svg
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full"
      >
        <image
          href={worldMap}
          x="0" y="0" width="1000" height="500"
          style={{ opacity: 0.07, filter: 'grayscale(1) invert(1) brightness(1.5)' }}
        />

        {locations.map((loc) => {
          const { x, y } = geoToSvg(loc.lat, loc.lon);
          const hovered = hoveredLoc === loc.id;
          return (
            <g
              key={loc.id}
              transform={`translate(${x}, ${y})`}
              onMouseEnter={() => setHoveredLoc(loc.id)}
              onMouseLeave={() => setHoveredLoc(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Anillo de pulso */}
              <circle r="4" fill={loc.color} opacity="0.25">
                <animate attributeName="r"       values="4;14;4"      dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0;0.25"  dur="2s" repeatCount="indefinite" />
              </circle>
              {/* Punto central */}
              <circle r="4" fill={loc.color} stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />

              {/* Tooltip */}
              {hovered && (
                <g transform="translate(0, -22)">
                  <rect x="-38" y="-14" width="76" height="18" rx="4"
                    fill="#18181b" stroke="#3f3f46" strokeWidth="0.8" />
                  <text x="0" y="-2" textAnchor="middle" fill="white"
                    fontSize="8" fontWeight="bold" letterSpacing="1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {loc.city.toUpperCase()}, {loc.country}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>

      <div className="absolute bottom-6 left-6 select-none pointer-events-none">
        <h3 className="text-white/[0.03] text-4xl font-bold tracking-widest font-serif">WEPROM</h3>
      </div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', category: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('¡Mensaje enviado con éxito!');
  };

  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />

      <ScrollReveal>
        <section className="w-full bg-transparent pt-[12rem] pb-[5rem] px-4 sm:px-8 overflow-hidden font-montserrat">
          <div className="max-w-6xl mx-auto">

            {/* ── Contact + Form ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-[6rem]">

              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="flex flex-col justify-start pt-2"
              >
                <h1 className="font-aston text-[45px] sm:text-[59px] lg:text-[67px] text-white leading-[1.05] tracking-tight mb-4">
                  Estamos para ti
                </h1>
                <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed mb-6 max-w-[90%]">
                  ¿Tienes un reto en mente, buscas una estrategia integral o quieres colaborar? Escríbenos y tracemos el plan.
                </p>
                <p className="font-semibold text-white text-[16px] mb-8">
                  ¿Prefieres escribirnos directamente?
                </p>

                <div className="flex flex-col gap-7">
                  {contactOptions.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
                      className="flex items-start gap-5"
                    >
                      <img
                        src={contactIcons[i]} alt={item.title}
                        className="mt-0.5 flex-shrink-0 w-15 h-15 object-contain"
                        style={{ filter: 'saturate(1.8) brightness(1.5)' }}
                      />
                      <div>
                        <p className="font-bold text-white text-[17px] mb-0.5">{item.title}</p>
                        <p className="text-white/70 text-[15px] leading-relaxed mb-1">{item.description}</p>
                        <a
                          href={`mailto:${item.link}`}
                          className="font-bold text-[15px] hover:opacity-80 transition-opacity inline-flex items-center gap-1.5 cursor-pointer"
                          style={{ filter: 'saturate(1.8) brightness(1.2)' }}
                          onClick={(e) => { e.preventDefault(); window.location.href = `mailto:${item.link}`; }}
                        >
                          <GradientText>{item.link}</GradientText>
                          <GradientArrow />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right — Form */}
              <motion.form
                onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-white/60 text-[12px] uppercase tracking-widest">Nombre *</label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Nombre completo" required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/60 text-[12px] uppercase tracking-widest">Email *</label>
                  <input name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" type="email" required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/60 text-[12px] uppercase tracking-widest">Teléfono</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+## ### ### ####" type="tel"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/60 text-[12px] uppercase tracking-widest">Asunto *</label>
                  <select name="category" value={formData.category} onChange={handleChange} required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-white/30 transition-colors appearance-none">
                    <option value="" disabled className="bg-black">¿En qué podemos ayudarte?</option>
                    <option value="marketResearch"        className="bg-black">Investigación de mercados</option>
                    <option value="digitalMarketing"      className="bg-black">Marketing digital</option>
                    <option value="audiovisualProduction" className="bg-black">Producción audiovisual</option>
                    <option value="consulting"            className="bg-black">Consultoría</option>
                    <option value="other"                 className="bg-black">Otro</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/60 text-[12px] uppercase tracking-widest">Mensaje *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Platiquemos" rows={5} required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none" />
                </div>

                <motion.button
                  type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl font-semibold text-white text-[14px] tracking-wide transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  Enviar mensaje
                </motion.button>
              </motion.form>
            </div>

            {/* ── Office ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/50 text-[11px] uppercase tracking-widest">Our Office</span>
              </div>

              <h2 className="font-aston text-[32px] sm:text-[48px] lg:text-[56px] text-white leading-tight tracking-tight mb-4">
                Ven a conocernos
              </h2>
              <p className="text-white/70 text-[15px] leading-relaxed max-w-lg mb-12">
                Ya sea para hablar de negocios, conocer nuestra metodología o simplemente saludar, siempre eres bienvenido en nuestra oficina.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mb-12">
                {officeCards.map((item, i) => {
                  const Icon = officeIcons[i];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                      className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3"
                    >
                      <div className="text-white/40"><Icon /></div>
                      <p className="text-white/50 text-[11px] uppercase tracking-widest">{item.label}</p>
                      <p className="text-white text-[14px] text-center leading-snug">{item.value}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Interactive world map */}
              <div className="w-full max-w-4xl mb-12">
                <WorldMap />
              </div>

              <motion.a
                href="https://maps.app.goo.gl/vhyJfQ9n5bd518nJ8"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="font-semibold text-[13px] text-white px-8 py-3 rounded-full tracking-wide"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                Obtener dirección
              </motion.a>
            </motion.div>

          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
}

export default Contact;
