import React, { useState } from 'react';
import worldMap from '../../../images/world-map.svg';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface LocationPin {
  id: number;
  city: string;
  country: string;
  lat: number;
  lon: number;
  color: string;
}

// Equirectangular projection: converts lat/lon to SVG coords (viewBox 0 0 1000 500)
const geoToSvg = (lat: number, lon: number) => ({
  x: (lon + 180) / 360 * 1000,
  y: (90 - lat) / 180 * 500,
});

const locations: LocationPin[] = [
  { id: 1, city: 'Austin',      country: 'USA', lat: 30.27, lon: -97.74,  color: '#3b82f6' },
  { id: 2, city: 'Guadalajara', country: 'MX',  lat: 20.66, lon: -103.35, color: '#10b981' },
  { id: 3, city: 'Paris',       country: 'FR',  lat: 48.86, lon:   2.35,  color: '#6366f1' },
];

const ContactoMR = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '¿En qué podemos ayudarte?',
    mensaje: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [hoveredLoc, setHoveredLoc] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1800);
  };

  const asuntos = [
    '¿En qué podemos ayudarte?',
    'Market Research Global',
    'Análisis de Competencia',
    'Estudio de Consumidor',
    'Validación de Producto SaaS',
    'Estrategia de Crecimiento',
    'Otro',
  ];

  return (
    <section 
      className="w-full bg-transparent py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none antialiased"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-12 relative z-10">
        
        {/* ── ENCABEZADO PRINCIPAL (Estilo image_e6327f.png) ── */}
        <div className="text-center w-full mb-4">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-wide"
            style={{ fontFamily: "'Astonpoliz', sans-serif" }}
          >
            Aterricemos tu Proyecto. Contáctanos.
          </h2>
        </div>

        {/* ── LAYOUT PRINCIPAL DE DOBLE COLUMNA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          
          {/* ── COLUMNA IZQUIERDA: ASIMÉTRICA Y VISUAL (5 Columnas en Desktop) ── */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full h-full justify-between">
            
            {/* Mapa Interactivo */}
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
                        <animate attributeName="r"       values="4;14;4"     dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.25;0;0.25" dur="2s" repeatCount="indefinite" />
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

            {/* Card ADN de Visión de Negocio */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#0c0c0e] to-black p-8 sm:p-10 rounded-3xl border border-zinc-800/80 flex flex-col justify-center relative overflow-hidden min-h-[180px] shadow-xl"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45z"/>
                </svg>
              </div>
              <h4 className="text-blue-400 text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">Visión 360°</h4>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light italic">
                "Nuestra presencia en <span className="text-white font-medium">tres mercados clave</span> nos permite ejecutar estrategias con relevancia cultural inmediata."
              </p>
            </motion.div>

          </div>

          {/* ── COLUMNA DERECHA: FORMULARIO HIGH-FIDELITY (7 Columnas en Desktop) ── */}
          <div className="lg:col-span-7 bg-[#070708] border border-zinc-900/90 rounded-3xl p-6 sm:p-10 shadow-2xl w-full">
            {sent ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-16 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center border border-[#80b67d]/40 bg-[#80b67d]/10 text-[#80b67d]">
                  <Send size={24} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">¡Mensaje recibido con éxito!</h3>
                <p className="text-zinc-500 text-sm max-w-sm font-light leading-relaxed">
                  Nuestro equipo de analistas de mercado evaluará tus requerimientos para ponernos en contacto contigo a la brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => { 
                    setSent(false); 
                    setFormData({ nombre: '', email: '', telefono: '', asunto: '¿En qué podemos ayudarte?', mensaje: '' }); 
                  }}
                  className="text-xs text-zinc-500 hover:text-white transition-colors duration-300 underline underline-offset-4 font-medium"
                >
                  Enviar otro requerimiento
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Nombre */}
                <div className="flex flex-col space-y-2">
                  <label className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                    Nombre completo <span className="text-red-500/80">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    autoComplete="off"
                    placeholder="Escribe tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113]"
                  />
                </div>

                {/* Doble Columna para Email y Teléfono en Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                      Email corporativo <span className="text-red-500/80">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="off"
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113]"
                    />
                  </div>

                  {/* Teléfono */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                      Teléfono de contacto
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      autoComplete="off"
                      placeholder="+00 000 000 0000"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113]"
                    />
                  </div>
                </div>

                {/* Asunto */}
                <div className="flex flex-col space-y-2">
                  <label className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                    Línea de Investigación / Asunto <span className="text-red-500/80">*</span>
                  </label>
                  <div className="relative w-full">
                    <select
                      name="asunto"
                      required
                      value={formData.asunto}
                      onChange={handleChange}
                      className="w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113] appearance-none cursor-pointer font-light"
                    >
                      {asuntos.map((a, i) => (
                        <option key={i} value={a} className="bg-zinc-950 text-white">
                          {a}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col space-y-2">
                  <label className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                    Detalles del requerimiento <span className="text-red-500/80">*</span>
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    placeholder="Cuéntanos un poco más sobre los objetivos de tu mercado, alcance geográfico o público objetivo..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113] resize-none leading-relaxed"
                  />
                </div>

                {/* Botón de Envió con Feedback visual premium */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs font-semibold uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 hover:bg-white hover:text-black hover:border-white flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:hover:bg-zinc-900 disabled:hover:text-white"
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin h-3 w-3 text-current" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Procesando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar mensaje</span>
                      <Send size={12} className="opacity-80" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactoMR;