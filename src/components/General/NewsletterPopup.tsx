import { useEffect, useRef, useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterPopup({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setSent(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 800));
    setSending(false);
    setSent(true);
    setTimeout(() => { onClose(); setSent(false); }, 2500);
  };

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
          <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            className="relative w-full max-w-md bg-[#0c0c0c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-[2px] w-full bg-gradient-to-r from-[#c5362e] via-[#e6af41] to-[#599ddf]" />

            <div className="p-8">
              <button
                onClick={onClose}
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
                    <p className="font-aston text-white text-2xl text-center">¡Te has suscrito!</p>
                    <p className="text-white/50 text-sm text-center font-montserrat">
                      Recibirás nuestros últimos artículos y novedades.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="font-montserrat text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-3">
                      Newsletter
                    </p>
                    <h2 className="font-aston text-white text-3xl sm:text-4xl mb-2 leading-tight">
                      Eso no es Todo
                    </h2>
                    <p className="text-white/40 text-sm font-montserrat mb-8 leading-relaxed">
                      Suscríbete y recibe los insights más relevantes de marketing y publicidad directamente en tu correo.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <input
                        ref={inputRef}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="tu@correo.com *"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-white/30 transition-all font-montserrat"
                      />
                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full flex items-center justify-center gap-2 bg-white text-black font-montserrat font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/90 transition-all disabled:opacity-60"
                      >
                        {sending
                          ? <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          : null}
                        {sending ? 'Suscribiendo...' : 'Suscribirme'}
                      </button>
                    </form>

                    <p className="text-white/20 text-[11px] font-montserrat text-center mt-4">
                      Sin spam. Puedes darte de baja cuando quieras.
                    </p>
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
