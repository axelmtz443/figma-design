import { useEffect, useRef, useState } from 'react';
import { useContactPopup } from '../../context/ContactPopupContext';
import { X, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES = [
  'Marketing Digital',
  'Branding & Identidad',
  'Investigación de Mercados',
  'Producción Audiovisual',
  'Consultoría de Marketing',
  'Otro',
];

export default function ContactPopup() {
  const { isOpen, closePopup, subject } = useContactPopup();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setForm(prev => ({ ...prev, service: subject || '' }));
      setSent(false);
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
  }, [isOpen, subject]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closePopup(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closePopup]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 900));
    setSending(false);
    setSent(true);
    setTimeout(() => { closePopup(); setSent(false); }, 2500);
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closePopup}
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-lg bg-[#0c0c0c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Accent top line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#c5362e] via-[#e6af41] to-[#599ddf]" />

            <div className="p-6 sm:p-8">
              <button
                onClick={closePopup}
                className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={16} />
              </button>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 gap-4"
                  >
                    <CheckCircle size={48} className="text-[#80b67d]" />
                    <p className="font-aston text-white text-2xl text-center">¡Mensaje enviado!</p>
                    <p className="text-white/50 text-sm text-center font-montserrat">Nos pondremos en contacto contigo muy pronto.</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h2 className="font-aston text-white text-2xl sm:text-3xl mb-1 leading-tight">
                      Hablemos de tu proyecto
                    </h2>
                    <p className="text-white/40 text-sm font-montserrat mb-6">
                      Cuéntanos qué necesitas y te respondemos en menos de 24h.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          ref={firstInputRef}
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Nombre *"
                          className={inputClass}
                        />
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Teléfono"
                          className={inputClass}
                        />
                      </div>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Correo electrónico *"
                        className={inputClass}
                      />
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`${inputClass} ${!form.service ? 'text-white/30' : 'text-white'}`}
                      >
                        <option value="" className="bg-zinc-900 text-white/50">Servicio de interés</option>
                        {SERVICES.map(s => (
                          <option key={s} value={s} className="bg-zinc-900 text-white">{s}</option>
                        ))}
                      </select>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Cuéntanos más sobre tu proyecto..."
                        className={`${inputClass} resize-none`}
                      />

                      <button
                        type="submit"
                        disabled={sending}
                        className="mt-1 w-full flex items-center justify-center gap-2 bg-white text-black font-montserrat font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/90 transition-all disabled:opacity-60"
                      >
                        {sending ? (
                          <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        ) : (
                          <Send size={15} />
                        )}
                        {sending ? 'Enviando...' : 'Enviar mensaje'}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
