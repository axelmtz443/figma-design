import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import WorldMap from '../../../components/General/WorldMap';

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
      className="w-full bg-transparent py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-16 relative overflow-hidden select-none antialiased"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-8 sm:space-y-10 lg:space-y-12 relative z-10">
        
        {/* ── ENCABEZADO PRINCIPAL ── */}
        <div className="text-center w-full mb-2 sm:mb-4">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-wide"
            style={{ fontFamily: "'Astonpoliz', sans-serif" }}
          >
            Aterricemos tu Proyecto. Contáctanos.
          </h2>
        </div>

        {/* ── LAYOUT PRINCIPAL DE DOBLE COLUMNA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-start w-full">
          
          {/* ── COLUMNA IZQUIERDA ── */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full h-full justify-between">
            
            {/* Mapa Interactivo */}
            <WorldMap />

            {/* Card ADN de Visión de Negocio */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#0c0c0e] to-black p-6 sm:p-8 lg:p-10 rounded-3xl border border-zinc-800/80 flex flex-col justify-center relative overflow-hidden min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] shadow-xl"
            >
              <div className="absolute top-0 right-0 p-4 sm:p-6 opacity-[0.03] pointer-events-none">
                <svg 
                  width="40" 
                  height="40" 
                  className="sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]" 
                  viewBox="0 0 24 24" 
                  fill="white"
                >
                  <path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45z"/>
                </svg>
              </div>
              <h4 className="text-blue-400 text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 font-bold">Visión 360°</h4>
              <p className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed font-light italic">
                "Nuestra presencia en <span className="text-white font-medium">tres mercados clave</span> nos permite ejecutar estrategias con relevancia cultural inmediata."
              </p>
            </motion.div>

          </div>

          {/* ── COLUMNA DERECHA: FORMULARIO ── */}
          <div className="lg:col-span-7 bg-[#070708] border border-zinc-900/90 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl w-full">
            {sent ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-12 sm:py-16 text-center space-y-4 sm:space-y-6"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border border-[#80b67d]/40 bg-[#80b67d]/10 text-[#80b67d]">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">¡Mensaje recibido con éxito!</h3>
                <p className="text-zinc-500 text-xs sm:text-sm max-w-sm font-light leading-relaxed px-4">
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
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
                
                {/* Nombre */}
                <div className="flex flex-col space-y-1.5 sm:space-y-2">
                  <label className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
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
                    className="w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-white text-sm placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113]"
                  />
                </div>

                {/* Doble Columna para Email y Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                  {/* Email */}
                  <div className="flex flex-col space-y-1.5 sm:space-y-2">
                    <label className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
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
                      className="w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-white text-sm placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113]"
                    />
                  </div>

                  {/* Teléfono */}
                  <div className="flex flex-col space-y-1.5 sm:space-y-2">
                    <label className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                      Teléfono de contacto
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      autoComplete="off"
                      placeholder="+00 000 000 0000"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-white text-sm placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113]"
                    />
                  </div>
                </div>

                {/* Asunto */}
                <div className="flex flex-col space-y-1.5 sm:space-y-2">
                  <label className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                    Línea de Investigación / Asunto <span className="text-red-500/80">*</span>
                  </label>
                  <div className="relative w-full">
                    <select
                      name="asunto"
                      required
                      value={formData.asunto}
                      onChange={handleChange}
                      className="w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-white text-sm outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113] appearance-none cursor-pointer font-light"
                    >
                      {asuntos.map((a, i) => (
                        <option key={i} value={a} className="bg-zinc-950 text-white">
                          {a}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <svg 
                        width="8" 
                        height="8" 
                        className="sm:w-[10px] sm:h-[10px]" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col space-y-1.5 sm:space-y-2">
                  <label className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                    Detalles del requerimiento <span className="text-red-500/80">*</span>
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    placeholder="Cuéntanos un poco más sobre los objetivos de tu mercado, alcance geográfico o público objetivo..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-3 sm:px-4 py-3 sm:py-3.5 text-white text-sm placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113] resize-none leading-relaxed"
                  />
                </div>

                {/* Botón de Envío */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-widest px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl transition-all duration-300 hover:bg-white hover:text-black hover:border-white flex items-center justify-center gap-2 sm:gap-2.5 disabled:opacity-50 disabled:hover:bg-zinc-900 disabled:hover:text-white"
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
                      <Send className="w-3 h-3 sm:w-[12px] sm:h-[12px] opacity-80" />
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