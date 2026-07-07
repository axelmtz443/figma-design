import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, Send } from 'lucide-react';

const ContactoSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Correo',
      value: 'hola@weprom.mx',
      href: 'mailto:hola@weprom.mx',
      color: '#599ddf',
    },
    {
      icon: <Phone size={20} />,
      label: 'Llamadas',
      value: '+52 1 33 1067 4199',
      href: 'tel:+5213310674199',
      color: '#80b67d',
    },
  ];

  const asuntos = [
    '¿En qué podemos ayudarte?',
    'Video Institucional',
    'Video Publicitario',
    'Contenido para Social Media',
    'Animación 2D/3D',
    'Fotografía Profesional',
    'Producción con Drones',
    'Otro',
  ];

  const headingBlock = (
    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-aston tracking-tight mb-3 sm:mb-4 leading-tight">
        Hablemos de tu proyecto. Contáctanos.
      </h2>
      <p className="text-white/90 text-sm sm:text-base leading-relaxed">
        ¿Tienes alguna idea en mente?, no dudes en escribirnos o visitarnos.
      </p>
    </div>
  );

  const infoAndMapBlock = (
    <>
      {/* Datos de contacto - Responsive */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {contactInfo.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 sm:gap-4 group"
          >
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110"
              style={{
                borderColor: item.color,
                color: item.color,
                backgroundColor: `${item.color}15`,
              }}
            >
              {item.icon}
            </div>
            <div className="min-w-0">
              <p className="text-white/60 text-[10px] sm:text-xs font-light mb-0.5">{item.label}</p>
              <p className="font-semibold text-xs sm:text-sm truncate">{item.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Mapa - Aspect ratio responsivo */}
      <div className="rounded-2xl overflow-hidden border border-neutral-800 w-full" style={{ aspectRatio: '4/3' }}>
        <iframe
          title="Ubicación"
          src="https://maps.google.com/maps?q=C.+Corrientes+3071,+Colomos+Providencia,+Guadalajara&output=embed&z=15"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.8) invert(0.9) contrast(0.85)' }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </>
  );

  const formBlock = (
    <div className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl p-4 sm:p-5 lg:p-6 lg:w-3/5">
      {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-5 sm:gap-6 py-16 sm:py-20 text-center">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border-2"
                  style={{ borderColor: '#80b67d', color: '#80b67d', backgroundColor: '#80b67d20' }}
                >
                  <Send size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-aston">¡Mensaje enviado!</h3>
                <p className="text-white/50 text-xs sm:text-sm max-w-xs px-4">
                  Nos pondremos en contacto contigo muy pronto. ¡Gracias por escribirnos!
                </p>
                <button
                  onClick={() => { setSent(false); setFormData({ nombre: '', email: '', telefono: '', asunto: '¿En qué podemos ayudarte?', mensaje: '' }); }}
                  className="mt-2 text-xs sm:text-sm text-white/40 hover:text-white transition-colors duration-300 underline underline-offset-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">

                {/* Nombre */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/40 text-[10px] sm:text-xs font-medium uppercase tracking-widest">
                    Nombre <span className="text-[#c5362e]">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/40 text-[10px] sm:text-xs font-medium uppercase tracking-widest">
                    Email <span className="text-[#c5362e]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
                  />
                </div>

                {/* Teléfono */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/40 text-[10px] sm:text-xs font-medium uppercase tracking-widest">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="+00 000 000 0000"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
                  />
                </div>

                {/* Asunto */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/40 text-[10px] sm:text-xs font-medium uppercase tracking-widest">
                    Asunto <span className="text-[#c5362e]">*</span>
                  </label>
                  <select
                    name="asunto"
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm outline-none transition-all duration-300 focus:border-neutral-600 appearance-none cursor-pointer pr-10"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff40' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                  >
                    {asuntos.map((a, i) => (
                      <option key={i} value={a} className="bg-neutral-900">{a}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/40 text-[10px] sm:text-xs font-medium uppercase tracking-widest">
                    Mensaje <span className="text-[#c5362e]">*</span>
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    placeholder="Platíquenos..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600 resize-none"
                  />
                </div>

                {/* Botón submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 w-full text-white font-montserrat font-semibold text-xs sm:text-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-60"
                  style={{
                    border: '2px solid transparent',
                    background: 'linear-gradient(#111, #111) padding-box, linear-gradient(90deg, #c5362e, #009fe3, #80b67d, #e6af41) border-box',
                  }}
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            )}
    </div>
  );

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-montserrat text-white">
      <div className="max-w-5xl mx-auto">

        {headingBlock}

        {isMobile ? (
          <div className="flex flex-col gap-6 sm:gap-8">
            {formBlock}
            <div className="flex flex-col gap-6 sm:gap-8">{infoAndMapBlock}</div>
          </div>
        ) : (
          <div className="flex flex-row gap-10 lg:gap-16 xl:gap-20 items-start">
            <div className="w-full lg:w-2/5 flex flex-col gap-6 sm:gap-8">
              {infoAndMapBlock}
            </div>
            {formBlock}
          </div>
        )}

      </div>
    </section>
  );
};

export default ContactoSection;