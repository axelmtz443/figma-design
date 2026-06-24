import { useState, useEffect } from 'react';

type Prefs = { analytics: boolean; functional: boolean; marketing: boolean };

const STORAGE_KEY = 'wp_cookie_consent';

function loadPrefs(): Prefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function savePrefs(prefs: Prefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ analytics: false, functional: false, marketing: false });

  useEffect(() => {
    if (!loadPrefs()) setVisible(true);
  }, []);

  const acceptAll = () => {
    savePrefs({ analytics: true, functional: true, marketing: true });
    setVisible(false);
  };

  const rejectNonEssential = () => {
    savePrefs({ analytics: false, functional: false, marketing: false });
    setVisible(false);
  };

  const saveConfig = () => {
    savePrefs(prefs);
    setVisible(false);
    setShowConfig(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-end justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-2xl mx-4 mb-6 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl p-6">
        {!showConfig ? (
          <>
            <div className="flex items-start gap-3 mb-4">
              <svg className="w-5 h-5 text-[#e6af41] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
              </svg>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Usamos cookies</p>
                <p className="text-white/60 text-[13px] leading-relaxed">
                  Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el uso del sitio y mostrarte publicidad relevante. Puedes aceptar todas, rechazar las no esenciales o configurarlas por categoría.{' '}
                  <a href="/aviso-de-privacidad" className="text-[#599ddf] hover:underline">Aviso de privacidad</a>.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-end">
              <button
                onClick={() => setShowConfig(true)}
                className="px-4 py-2 text-[13px] text-white/70 border border-white/15 rounded-lg hover:bg-white/5 transition-colors"
              >
                Configurar por categoría
              </button>
              <button
                onClick={rejectNonEssential}
                className="px-4 py-2 text-[13px] text-white/70 border border-white/15 rounded-lg hover:bg-white/5 transition-colors"
              >
                Rechazar no esenciales
              </button>
              <button
                onClick={acceptAll}
                className="px-5 py-2 text-[13px] font-semibold text-black bg-white rounded-lg hover:bg-white/90 transition-colors"
              >
                Aceptar todas
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mb-5">
              <p className="text-white font-semibold text-sm">Configurar cookies</p>
              <button onClick={() => setShowConfig(false)} className="text-white/40 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
            </div>

            <div className="space-y-3 mb-5">
              {/* Always on */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/8">
                <div>
                  <p className="text-white text-[13px] font-medium">Estrictamente necesarias</p>
                  <p className="text-white/50 text-[12px] mt-0.5">Funcionamiento básico del sitio. No se pueden desactivar.</p>
                </div>
                <div className="flex-shrink-0 w-9 h-5 rounded-full bg-white/20 flex items-center justify-end px-0.5 cursor-not-allowed">
                  <div className="w-4 h-4 rounded-full bg-white/50" />
                </div>
              </div>

              {([
                { key: 'analytics', label: 'Analíticas / rendimiento', desc: 'Nos ayudan a entender cómo usas el sitio (Google Analytics).' },
                { key: 'functional', label: 'Funcionalidad', desc: 'Recuerdan tus preferencias de navegación.' },
                { key: 'marketing', label: 'Marketing / rastreo', desc: 'Publicidad y medición de campañas (Meta Pixel, LinkedIn).' },
              ] as { key: keyof Prefs; label: string; desc: string }[]).map(({ key, label, desc }) => (
                <div key={key} className="flex items-start justify-between gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/8">
                  <div>
                    <p className="text-white text-[13px] font-medium">{label}</p>
                    <p className="text-white/50 text-[12px] mt-0.5">{desc}</p>
                  </div>
                  <button
                    onClick={() => setPrefs(p => ({ ...p, [key]: !p[key] }))}
                    className={`flex-shrink-0 w-9 h-5 rounded-full transition-colors flex items-center px-0.5 ${prefs[key] ? 'bg-[#599ddf] justify-end' : 'bg-white/15 justify-start'}`}
                  >
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <button onClick={rejectNonEssential} className="px-4 py-2 text-[13px] text-white/70 border border-white/15 rounded-lg hover:bg-white/5 transition-colors">
                Rechazar no esenciales
              </button>
              <button onClick={saveConfig} className="px-5 py-2 text-[13px] font-semibold text-black bg-white rounded-lg hover:bg-white/90 transition-colors">
                Guardar configuración
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function openCookieSettings() {
  localStorage.removeItem('wp_cookie_consent');
  window.location.reload();
}
