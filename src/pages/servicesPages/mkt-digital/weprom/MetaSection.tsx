import { useState, useRef, useEffect } from 'react';
import { ImageWithFallback, ExpandableText, SocialActions, FONTS } from './utils';
import { useContactPopup } from '../../../../context/ContactPopupContext';

// Logos de páginas (reemplaza Facebook CDN expirados)
import logoAndreaAragon from '../../../../images/mktdigital_meta/logo_Andrea Aragón.jpg';
import logoMercedesEurostern from '../../../../images/mktdigital_meta/logo_Mercedes.jpg';
import logoJustoSierra from '../../../../images/mktdigital_meta/logo_justo-sierra.jpg';
import logoCPTMeta from '../../../../images/mktdigital_meta/logo_CPT.jpg';
import logoMayorkMeta from '../../../../images/mktdigital_meta/logo_mayork.jpg';

// Imágenes de anuncios
import imgAA1 from '../../../../images/mktdigital_meta/AA1.jpg';
import imgAA2 from '../../../../images/mktdigital_meta/AA2.jpg';
import imgAA3 from '../../../../images/mktdigital_meta/AA3.jpg';
import imgAA4 from '../../../../images/mktdigital_meta/AA4.jpg';
import imgCPT1 from '../../../../images/mktdigital_meta/CPT1.jpg';
import imgCPT2 from '../../../../images/mktdigital_meta/CPT2.jpg';
import imgCPT3 from '../../../../images/mktdigital_meta/CPT3.jpg';
import imgCPT4 from '../../../../images/mktdigital_meta/CPT4.jpg';
import imgMayork from '../../../../images/mktdigital_meta/mayork.jpg';

// Videos
import videoMercedes from '../../../../images/mktdigital_meta/Mercedes.mp4';
import videoJustoSierra from '../../../../images/mktdigital_meta/Justo Sierra.mp4';

interface CarouselCard {
  image: string;
  fallbackImage: string;
  domain: string;
  title: string;
  ctaText: string;
}

interface MetaAd {
  id: string;
  pageName: string;
  pageLogo: string;
  mainText: string;
  type: 'single-video' | 'carousel' | 'single-image';
  videoUrl?: string;
  videoPoster?: string;
  imageUrl?: string;
  imageFallback?: string;
  ctaDomain: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtnText: string;
  carouselCards?: CarouselCard[];
}

const ANDREA_ARAGON_LOGO = logoAndreaAragon;
const ANDREA_ARAGON_TEXT = "Sabemos que un cambio de color es una decisión importante. Por eso, en nuestro estudio, cada transformación comienza con una asesoría experta para crear el diseño que respete la salud de tu cabello y refleje tu verdadera esencia.\n\nNuestros servicios de colorimetría incluyen:\n• Diseño de Color (Master, Senior & Semisenior)\n• Tinte de Raíz y Color Completo\n• Extracciones de Color Profesionales\n• ¡Y mucho más!\n\n📍Te esperamos en Desierto de los Leones 52, San Ángel. Agenda tu cita. ✨";
const ANDREA_ARAGON_CARDS: CarouselCard[] = [
  { image: imgAA1, fallbackImage: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600", domain: "API.WHATSAPP.COM", title: "El color perfecto", ctaText: "Agendar cita" },
  { image: imgAA2, fallbackImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600", domain: "API.WHATSAPP.COM", title: "Diseño de color", ctaText: "Agendar cita" },
  { image: imgAA3, fallbackImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=600", domain: "API.WHATSAPP.COM", title: "Babylights y Balayage", ctaText: "Agendar cita" },
  { image: imgAA4, fallbackImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", domain: "API.WHATSAPP.COM", title: "Expertas en colorimetría", ctaText: "Agendar cita" }
];

const ADS_DATABASE: MetaAd[] = [
  {
    id: "mercedes-benz",
    pageName: "Mercedes-Benz Eurostern",
    pageLogo: logoMercedesEurostern,
    mainText: "Los sistemas de asistencia te respaldan para hacer de cada trayecto una certeza. Adquiere GLS 580 4MATIC MH 2026 con bono exclusivo.",
    type: "single-video",
    videoUrl: videoMercedes,
    ctaDomain: "API.WHATSAPP.COM", ctaTitle: "Adquiere GLS 2026", ctaDesc: "Con beneficios exclusivos", ctaBtnText: "Enviar mensaje"
  },
  {
    id: "andrea-aragon",
    pageName: "Studio Andrea Aragón Maquillaje Y Peinado Novias",
    pageLogo: ANDREA_ARAGON_LOGO,
    mainText: ANDREA_ARAGON_TEXT,
    type: "carousel",
    carouselCards: ANDREA_ARAGON_CARDS,
    ctaDomain: "", ctaTitle: "", ctaDesc: "", ctaBtnText: ""
  },
  {
    id: "caja-popular-tamazula",
    pageName: "Caja Popular Tamazula",
    pageLogo: logoCPTMeta,
    mainText: "Haz que tu esfuerzo rinda por dos. Al ahorrar con nosotros, no solo guardas tu guardadito, también le abres la puerta a tus hijos para ganar BECAS escolares y vales para sus útiles. 🎒 \n\nTu familia merece este respaldo. \n\nAbre tu cuenta hoy dando clic abajo. 👇",
    type: "carousel",
    ctaDomain: "API.WHATSAPP.COM", ctaTitle: "Abre tu cuenta", ctaDesc: "Banking", ctaBtnText: "Enviar Mensaje",
    carouselCards: [
      { image: imgCPT1, fallbackImage: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600", domain: "API.WHATSAPP.COM", title: "Tu ahorro te da BECAS 🎓", ctaText: "Enviar Mensaje" },
      { image: imgCPT2, fallbackImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600", domain: "API.WHATSAPP.COM", title: "Vales médicos GRATIS 🩺", ctaText: "Enviar Mensaje" },
      { image: imgCPT3, fallbackImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=600", domain: "API.WHATSAPP.COM", title: "$600 cuidan a tu familia", ctaText: "Enviar Mensaje" },
      { image: imgCPT4, fallbackImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", domain: "API.WHATSAPP.COM", title: "Invierte y gana beneficios", ctaText: "Enviar Mensaje" }
    ]
  },
  {
    id: "mayork-mx",
    pageName: "MayorK",
    pageLogo: logoMayorkMeta,
    mainText: "Dos modelos diseñados para ofrecer comodidad, estilo y una mejor presentación para tu equipo de trabajo. ✨ \n✔ Polo Fit: flexible, moderna y cómoda \n✔ Polo Waffle: textura premium y apariencia sofisticada \nAprovecha el 10% OFF durante todo junio.",
    type: "single-image",
    imageUrl: imgMayork,
    imageFallback: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    ctaDomain: "FACEBOOK.COM", ctaTitle: "¡Cotizar mayoreo!", ctaDesc: "Clothing", ctaBtnText: "Enviar mensaje"
  },
  {
    id: "ortopedia-justo-sierra-tiktok",
    pageName: "Ortopedia Justo Sierra",
    pageLogo: logoJustoSierra,
    mainText: "Si tienes un problema grave en la rodilla, no necesitas a un médico que hoy opere una mano y mañana un pie; necesitas a alguien que dedique el 100% de su vida a reconstruir rodillas.\n\nEsa es la diferencia de nuestro grupo médico en Guadalajara.",
    type: "single-video",
    videoUrl: videoJustoSierra,
    ctaDomain: "ORTOPEDIAJUSTOSIERRA.MX", ctaTitle: "Certeza absoluta", ctaDesc: "Certeza absoluta", ctaBtnText: "Ver detalles"
  }
];

// ── Arrow Carousel ───────────────────────────────────────────────────────────

interface SectionCarouselProps {
  items: React.ReactNode[];
  cardWidth: number;
  cardHeight: number;
}

function SectionCarousel({ items, cardWidth, cardHeight }: SectionCarouselProps) {
  const gap = 24;
  const len = items.length;
  const [index, setIndex] = useState(len); // start at middle copy
  const [transitioning, setTransitioning] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  const go = (dir: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setIndex(i => i + dir);
  };

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    setTransitioning(false);
    setIndex(prev => {
      const next = prev >= len * 2 ? prev - len : prev < len ? prev + len : prev;
      if (next !== prev && stripRef.current) {
        stripRef.current.style.transition = 'none';
        requestAnimationFrame(() => requestAnimationFrame(() => {
          if (stripRef.current) stripRef.current.style.transition = '';
        }));
      }
      return next;
    });
  };

  const dotIndex = index % len;

  return (
    <div className="relative w-full select-none">
      <div className="overflow-hidden" style={{ height: `${cardHeight}px` }}>
        <div
          ref={stripRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: `${gap}px`,
            transform: `translateX(calc(50vw - ${cardWidth / 2 + index * (cardWidth + gap)}px))`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} style={{ width: `${cardWidth}px`, height: `${cardHeight}px`, flexShrink: 0 }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Left arrow — always active */}
      <button
        onClick={() => go(-1)}
        className="absolute left-4 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all"
        style={{ top: `${cardHeight / 2}px`, transform: 'translateY(-50%)' }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
      </button>

      {/* Right arrow — always active */}
      <button
        onClick={() => go(1)}
        className="absolute right-4 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all"
        style={{ top: `${cardHeight / 2}px`, transform: 'translateY(-50%)' }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => { if (!transitioning) setIndex(len + i); }}
            className={`rounded-full transition-all duration-300 ${dotIndex === i ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Platform label ────────────────────────────────────────────────────────────

function PlatformLabel({ label, color, isGradient }: { label: string; color: string; isGradient?: boolean }) {
  return (
    <div className="px-3 py-1.5 flex items-center gap-1.5 border-b border-white/5">
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
      <span
        className="text-[10px] font-bold tracking-[0.15em] uppercase"
        style={isGradient
          ? { backgroundImage: color, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }
          : { color }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Ad header / footer ────────────────────────────────────────────────────────

function AdHeader({ ad }: { ad: MetaAd }) {
  return (
    <div className="p-4 flex justify-between items-start">
      <div className="flex items-center space-x-3 min-w-0">
        <div className="relative w-10 h-10 rounded-full border border-zinc-700/50 overflow-hidden bg-zinc-800 flex items-center justify-center flex-shrink-0 shadow-sm">
          <ImageWithFallback src={ad.pageLogo} fallback={`https://ui-avatars.com/api/?name=${encodeURIComponent(ad.pageName)}&background=1c1d1e&color=fff`} alt={ad.pageName} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0 flex flex-col justify-center">
          <div className="flex items-center space-x-1">
            <span className="font-bold text-[15px] text-[#e4e6eb] truncate leading-tight">{ad.pageName}</span>
            <svg className="w-3.5 h-3.5 text-[#0866ff] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          </div>
          <span className="text-[13px] text-[#b0b3b8] font-normal leading-none text-left flex items-center">Publicidad <span className="mx-1.5 text-[10px]">•</span></span>
        </div>
      </div>
      <button className="text-[#b0b3b8] hover:bg-[#3a3b3c] p-2 rounded-full flex items-center justify-center transition flex-shrink-0">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
      </button>
    </div>
  );
}

function AdFooter({ ad, isWhatsApp }: { ad: MetaAd; isWhatsApp: boolean }) {
  return (
    <div className="bg-[#2f3031] px-4 py-3 flex justify-between items-center hover:bg-[#3a3b3c] transition group">
      <div className="flex-1 min-w-0 pr-4 text-left">
        <span className="block text-[11px] text-[#b0b3b8] uppercase font-semibold tracking-wider truncate mb-0.5">{ad.ctaDomain}</span>
        <span className="block text-[16px] font-bold text-[#e4e6eb] truncate leading-tight group-hover:underline">{ad.ctaTitle}</span>
        <span className="block text-[14px] text-[#b0b3b8] truncate mt-0.5">{ad.ctaDesc}</span>
      </div>
      <div className="flex-shrink-0">
        {isWhatsApp ? (
          <button className="bg-[#25D366] hover:bg-[#1fa951] text-white font-bold text-[14px] py-2 px-5 rounded-lg transition-colors flex items-center space-x-2 shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2.002c-5.51 0-9.99 4.48-9.99 9.99 0 1.763.458 3.483 1.332 5.006L2.013 22l5.12-1.341a9.957 9.957 0 004.879 1.343c5.51 0 9.99-4.48 9.99-9.99a9.986 9.986 0 00-10-9.99zm5.06 14.1c-.22.61-1.28 1.13-1.78 1.18-.48.05-.98.07-3.12-.76-2.73-1.06-4.47-3.85-4.61-4.04-.13-.19-1.11-1.48-1.11-2.82 0-1.34.7-2 1-2.29.23-.23.61-.35.97-.35.12 0 .23 0 .33.01.29.01.44.02.63.48.24.58.82 2 .9 2.15.08.15.13.33.03.53-.1.2-.21.33-.37.52-.16.19-.34.42-.48.56-.16.16-.33.34-.14.67.19.32.85 1.41 1.83 2.28 1.26 1.13 2.32 1.48 2.65 1.65.3.15.48.13.66-.08.19-.23.82-.95 1.04-1.28.22-.33.44-.28.74-.17.3.11 1.91.9 2.24 1.07.33.16.55.24.63.38.08.14.08.82-.14 1.43z"/></svg>
            <span>{ad.ctaBtnText}</span>
          </button>
        ) : (
          <button className="bg-[#3a3b3c] hover:bg-[#4e4f50] text-[#e4e6eb] font-bold text-[14px] py-2 px-5 rounded-lg transition-colors flex items-center shadow-sm">
            <span>{ad.ctaBtnText || 'Ver detalles'}</span>
          </button>
        )}
      </div>
    </div>
  );
}

// ── Ad components ─────────────────────────────────────────────────────────────

function SingleMediaAd({ ad }: { ad: MetaAd }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) { videoRef.current.pause(); setIsPlaying(false); }
    else { videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {}); }
  };

  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleTimeUpdate = () => { const p = (video.currentTime / video.duration) * 100; setProgress(isNaN(p) ? 0 : p); };
    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const isWhatsApp = ad.ctaDomain?.toLowerCase().includes('whatsapp') || ad.ctaBtnText?.toLowerCase().includes('mensaje');

  return (
    <div className="w-full bg-[#242526]/95 backdrop-blur-sm rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-zinc-700/50 overflow-hidden font-sans flex-shrink-0 h-full flex flex-col transition-all duration-300">
      <PlatformLabel label="Facebook Ads" color="#0866ff" />
      <AdHeader ad={ad} />
      <ExpandableText text={ad.mainText} maxLength={300} />
      <div className="relative bg-black/50 group overflow-hidden border-y border-zinc-700/50 w-full flex items-center justify-center flex-1 min-h-0">
        {ad.videoUrl ? (
          <>
            <video ref={videoRef} className="w-full h-full object-contain cursor-pointer block" playsInline loop muted={isMuted} onClick={togglePlay} preload="metadata">
              <source src={`${ad.videoUrl}#t=0.001`} type="video/mp4" />
            </video>
            {!isPlaying && (
              <button onClick={togglePlay} className="absolute w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center border border-white/20 transition transform hover:scale-105 z-10 backdrop-blur-sm shadow-lg">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </button>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden relative">
                <div className="absolute h-full bg-[#0866ff] transition-all duration-100" style={{ width: `${progress}%` }} />
              </div>
              <div className="flex items-center justify-between px-1">
                <button onClick={togglePlay} className="text-white hover:text-[#0866ff] transition">
                  {isPlaying ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> : <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>}
                </button>
                <button onClick={toggleMute} className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition backdrop-blur-sm border border-white/10">
                  {isMuted ? <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM4 9v6h4l5 5V4L8 9H4zM19 12c0 2.97-1.75-5.51-4.25 6.64l1.42 1.42C19.34 18.33 21 15.35 21 12s-1.66-6.33-4.83-8.06l-1.42 1.42C17.25 6.49 19 9.03 19 12z"/></svg> : <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L8 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-[240px] bg-[#18191a]" />
        )}
      </div>
      <AdFooter ad={ad} isWhatsApp={isWhatsApp} />
      <SocialActions />
    </div>
  );
}

function SingleImageAd({ ad }: { ad: MetaAd }) {
  const isWhatsApp = ad.ctaDomain?.toLowerCase().includes('whatsapp') || ad.ctaBtnText?.toLowerCase().includes('mensaje');
  return (
    <div className="w-full bg-[#242526]/95 backdrop-blur-sm rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-zinc-700/50 overflow-hidden font-sans flex-shrink-0 h-full flex flex-col transition-all duration-300">
      <PlatformLabel label="Facebook Ads" color="#0866ff" />
      <AdHeader ad={ad} />
      <ExpandableText text={ad.mainText} maxLength={300} />
      <div className="relative bg-black/50 overflow-hidden border-y border-zinc-700/50 w-full flex items-center justify-center flex-1 min-h-0">
        {ad.imageUrl ? (
          <ImageWithFallback src={ad.imageUrl} fallback={ad.imageFallback || ''} alt={ad.ctaTitle} className="w-full h-full object-contain block" />
        ) : (
          <div className="w-full h-[240px] bg-[#18191a]" />
        )}
      </div>
      <AdFooter ad={ad} isWhatsApp={isWhatsApp} />
      <SocialActions />
    </div>
  );
}

function CarouselAd({ ad }: { ad: MetaAd }) {
  const cards = ad.carouselCards || [];
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCards = 1.3;
  const maxIndex = Math.max(0, cards.length - 1);

  return (
    <div className="w-full bg-[#242526]/95 backdrop-blur-sm rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-zinc-700/50 overflow-hidden font-sans flex-shrink-0 h-full flex flex-col transition-all duration-300">
      <PlatformLabel label="Facebook Ads" color="#0866ff" />
      <AdHeader ad={ad} />
      <ExpandableText text={ad.mainText} maxLength={300} />
      <div className="relative border-y border-zinc-700/50 bg-black/30 pt-3 pb-4 px-3 overflow-hidden flex-1 min-h-0">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${scrollIndex * (100 / visibleCards)}%)` }}>
          {cards.map((card, idx) => (
            <div key={idx} className="w-[270px] flex-shrink-0 mr-3 bg-[#242526]/80 backdrop-blur-sm rounded-xl border border-zinc-700/50 overflow-hidden shadow-md flex flex-col group">
              <div className="aspect-square w-full bg-zinc-900 overflow-hidden relative">
                <ImageWithFallback src={card.image} fallback={card.fallbackImage} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between bg-[#242526]/80 border-t border-zinc-700/50">
                <div className="min-w-0 space-y-1 text-left">
                  <span className="block text-[10px] text-[#b0b3b8] font-bold tracking-wider uppercase truncate">{card.domain}</span>
                  <span className="block text-[15px] font-bold text-[#e4e6eb] truncate leading-snug group-hover:underline">{card.title}</span>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-[#25D366] hover:bg-[#1fa951] text-white font-bold text-[14px] py-2 px-3 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2.002c-5.51 0-9.99 4.48-9.99 9.99 0 1.763.458 3.483 1.332 5.006L2.013 22l5.12-1.341a9.957 9.957 0 004.879 1.343c5.51 0 9.99-4.48 9.99-9.99a9.986 9.986 0 00-10-9.99zm5.06 14.1c-.22.61-1.28 1.13-1.78 1.18-.48.05-.98.07-3.12-.76-2.73-1.06-4.47-3.85-4.61-4.04-.13-.19-1.11-1.48-1.11-2.82 0-1.34.7-2 1-2.29.23-.23.61-.35.97-.35.12 0 .23 0 .33.01.29.01.44.02.63.48.24.58.82 2 .9 2.15.08.15.13.33.03.53-.1.2-.21.33-.37.52-.16.19-.34.42-.48.56-.16.16-.33.34-.14.67.19.32.85 1.41 1.83 2.28 1.26 1.13 2.32 1.48 2.65 1.65.3.15.48.13.66-.08.19-.23.82-.95 1.04-1.28.22-.33.44-.28.74-.17.3.11 1.91.9 2.24 1.07.33.16.55.24.63.38.08.14.08.82-.14 1.43z"/></svg>
                    <span>{card.ctaText}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {scrollIndex > 0 && (
          <button onClick={() => setScrollIndex(p => p - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#242526] border border-zinc-700 shadow-[0_2px_8px_rgba(0,0,0,0.5)] flex items-center justify-center text-[#e4e6eb] hover:bg-[#3a3b3c] transition-colors z-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
        )}
        {scrollIndex < maxIndex && (
          <button onClick={() => setScrollIndex(p => p + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#242526] border border-zinc-700 shadow-[0_2px_8px_rgba(0,0,0,0.5)] flex items-center justify-center text-[#e4e6eb] hover:bg-[#3a3b3c] transition-colors z-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        )}
      </div>
      <SocialActions />
    </div>
  );
}

function InstagramCarouselAd({ ad }: { ad: MetaAd }) {
  const cards = ad.carouselCards || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const goTo = (idx: number) => setCurrentIndex(Math.max(0, Math.min(idx, cards.length - 1)));
  const LIMIT = 120;
  const isLong = ad.mainText.length > LIMIT;
  const displayCaption = expanded || !isLong ? ad.mainText : ad.mainText.substring(0, LIMIT).trim() + '…';
  const pageHandle = ad.pageName.split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '') + '_oficial';

  return (
    <div className="w-full bg-[#000] rounded-xl shadow-2xl border border-zinc-800/60 overflow-hidden font-sans flex-shrink-0 h-full flex flex-col">
      <PlatformLabel label="Instagram · ADS" color="linear-gradient(90deg,#f9ce34,#ee2a7b,#6228d7)" isGradient />
      <div className="px-3 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-[2px] rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex-shrink-0">
            <div className="w-8 h-8 rounded-full overflow-hidden border-[2px] border-black">
              <ImageWithFallback src={ad.pageLogo} fallback={`https://ui-avatars.com/api/?name=${encodeURIComponent(ad.pageName)}&background=333&color=fff`} alt={ad.pageName} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-white font-semibold text-[13px] truncate max-w-[180px]">{ad.pageName}</span>
              <svg className="w-3 h-3 text-[#0095f6] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.177 14.28l-3.54-3.541 1.415-1.414 2.125 2.124 4.596-4.597 1.415 1.414-6.011 6.014z"/></svg>
            </div>
            <span className="text-zinc-400 text-[11px] block leading-none">Publicidad</span>
          </div>
        </div>
        <button className="text-zinc-400 p-1 hover:text-white transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
      </div>
      <div className="relative w-full bg-zinc-900 overflow-hidden flex-1 min-h-0">
        <div className="flex h-full transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, idx) => (
            <div key={idx} className="w-full h-full flex-shrink-0">
              <ImageWithFallback src={card.image} fallback={card.fallbackImage} alt={card.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {currentIndex > 0 && (
          <button onClick={() => goTo(currentIndex - 1)} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 flex items-center justify-center shadow-md hover:bg-white transition z-10">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
          </button>
        )}
        {currentIndex < cards.length - 1 && (
          <button onClick={() => goTo(currentIndex + 1)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 flex items-center justify-center shadow-md hover:bg-white transition z-10">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
          </button>
        )}
        <div className="absolute top-3 right-3 bg-black/55 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm">{currentIndex + 1} / {cards.length}</div>
      </div>
      <div className="bg-[#0a0a0a] border-b border-zinc-800/60 px-3 py-2.5 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wide block">{cards[currentIndex].domain}</span>
          <span className="text-white text-[13px] font-semibold truncate block">{cards[currentIndex].title}</span>
        </div>
        <button className="flex-shrink-0 bg-[#0095f6] hover:bg-[#007acc] text-white font-bold text-[12px] px-4 py-1.5 rounded flex items-center gap-1.5 transition shadow whitespace-nowrap">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2.002c-5.51 0-9.99 4.48-9.99 9.99 0 1.763.458 3.483 1.332 5.006L2.013 22l5.12-1.341a9.957 9.957 0 004.879 1.343c5.51 0 9.99-4.48 9.99-9.99a9.986 9.986 0 00-10-9.99zm5.06 14.1c-.22.61-1.28 1.13-1.78 1.18-.48.05-.98.07-3.12-.76-2.73-1.06-4.47-3.85-4.61-4.04-.13-.19-1.11-1.48-1.11-2.82 0-1.34.7-2 1-2.29.23-.23.61-.35.97-.35.12 0 .23 0 .33.01.29.01.44.02.63.48.24.58.82 2 .9 2.15.08.15.13.33.03.53-.1.2-.21.33-.37.52-.16.19-.34.42-.48.56-.16.16-.33.34-.14.67.19.32.85 1.41 1.83 2.28 1.26 1.13 2.32 1.48 2.65 1.65.3.15.48.13.66-.08.19-.23.82-.95 1.04-1.28.22-.33.44-.28.74-.17.3.11 1.91.9 2.24 1.07.33.16.55.24.63.38.08.14.08.82-.14 1.43z"/></svg>
          {cards[currentIndex].ctaText}
        </button>
      </div>
      <div className="flex justify-center gap-1.5 pt-2 pb-0.5">
        {cards.map((_, idx) => (
          <button key={idx} onClick={() => goTo(idx)} className={`rounded-full transition-all duration-200 ${idx === currentIndex ? 'w-2 h-2 bg-[#0095f6]' : 'w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400'}`} />
        ))}
      </div>
      <div className="px-3 pt-1 pb-1 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {['heart','comment','send'].map(icon => (
            <button key={icon} className="text-white hover:text-zinc-400 transition p-1.5">
              {icon === 'heart' && <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>}
              {icon === 'comment' && <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"/></svg>}
              {icon === 'send' && <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>}
            </button>
          ))}
        </div>
        <button className="text-white hover:text-zinc-400 transition p-1.5">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/></svg>
        </button>
      </div>
      <div className="px-3 pb-4 text-left">
        <p className="text-white text-[13px] leading-snug whitespace-pre-wrap">
          <span className="font-semibold">{pageHandle} </span>
          {displayCaption}
          {isLong && !expanded && <button onClick={() => setExpanded(true)} className="text-zinc-400 text-[13px] ml-0.5">más</button>}
        </p>
      </div>
    </div>
  );
}

function TikTokVideoAd({ ad }: { ad: MetaAd }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) { videoRef.current.pause(); setIsPlaying(false); }
    else { videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {}); }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTime = () => setProgress((video.currentTime / video.duration) * 100 || 0);
    video.addEventListener('timeupdate', onTime);
    return () => video.removeEventListener('timeupdate', onTime);
  }, []);

  return (
    <div className="w-full bg-[#161823] rounded-xl shadow-2xl border border-zinc-800/40 overflow-hidden font-sans flex-shrink-0 h-full flex flex-col">
      <div className="px-3 py-1.5 flex items-center gap-1.5 border-b border-white/5">
        <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.18 8.18 0 004.79 1.52V6.72a4.85 4.85 0 01-1.02-.03z" style={{ fill: 'white' }}/></svg>
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white">TikTok Ads</span>
      </div>
      <div className="relative bg-black overflow-hidden flex-1 min-h-0" onClick={togglePlay}>
        <video ref={videoRef} className="w-full h-full object-cover cursor-pointer" playsInline loop muted={isMuted} preload="metadata">
          <source src={`${ad.videoUrl}#t=0.001`} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        )}
        <div className="absolute top-0 left-0 right-0 pt-3 pb-2 flex items-center justify-center z-20 pointer-events-none">
          <span className="text-white/50 text-[13px] font-medium px-3">Siguiendo</span>
          <span className="text-white text-[13px] font-bold px-3 border-b-2 border-white pb-0.5">Para ti</span>
          <span className="text-white/50 text-[13px] font-medium px-3">Amigos</span>
        </div>
        <button onClick={toggleMute} className="absolute top-12 right-3 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center text-white backdrop-blur-sm border border-white/10 z-10">
          {isMuted ? <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM4 9v6h4l5 5V4L8 9H4zM19 12c0 2.97-1.75 5.51-4.25 6.64l1.42 1.42C19.34 18.33 21 15.35 21 12s-1.66-6.33-4.83-8.06l-1.42 1.42C17.25 6.49 19 9.03 19 12z"/></svg> : <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L8 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>}
        </button>
        <div className="absolute right-2.5 bottom-36 flex flex-col items-center gap-4 z-20">
          <div className="relative mb-1">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-md">
              <ImageWithFallback src={ad.pageLogo} fallback={`https://ui-avatars.com/api/?name=${encodeURIComponent(ad.pageName)}&background=333&color=fff`} alt={ad.pageName} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff0050] flex items-center justify-center border border-[#161823]">
              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 5v14m-7-7h14"/></svg>
            </div>
          </div>
          {[{ icon: 'heart', count: '4.8k' }, { icon: 'comment', count: '312' }, { icon: 'share', count: 'Reenviar' }].map(({ icon, count }) => (
            <div key={icon} className="flex flex-col items-center gap-0.5">
              <button className="text-white p-1" onClick={e => e.stopPropagation()}>
                {icon === 'heart' && <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>}
                {icon === 'comment' && <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"/></svg>}
                {icon === 'share' && <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"/></svg>}
              </button>
              <span className="text-white text-[10px] font-semibold">{count}</span>
            </div>
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-white/30 bg-zinc-800/60 flex items-center justify-center animate-[spin_4s_linear_infinite]">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v9.28a4 4 0 00-1-.28 4 4 0 100 8 4 4 0 004-4V7h4V3h-7z"/></svg>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-14 space-y-2 z-20">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-[13px]">@{ad.pageName.split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '')}</span>
            <span className="bg-[#ff0050] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">Patrocinado</span>
          </div>
          <p className="text-white text-[12px] leading-snug opacity-90 line-clamp-2">{ad.mainText.split('\n')[0]}</p>
          <button className="w-full flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white font-bold text-[12px] px-4 py-2 rounded-full hover:bg-white/25 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
            {ad.ctaBtnText}
          </button>
          <div className="flex items-center gap-2 pt-0.5">
            <svg className="w-3 h-3 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v9.28a4 4 0 00-1-.28 4 4 0 100 8 4 4 0 004-4V7h4V3h-7z"/></svg>
            <span className="text-white text-[10px] opacity-75 truncate">Audio original · {ad.pageName.split(' ')[0]}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20 z-10">
          <div className="h-full bg-white transition-all duration-100" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

function LinkedInAd({ ad }: { ad: MetaAd }) {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 200;
  const isLong = ad.mainText.length > LIMIT;
  const displayText = expanded || !isLong ? ad.mainText : ad.mainText.substring(0, LIMIT).trim() + '…';

  return (
    <div className="w-full bg-[#1b1f23] rounded-lg shadow-xl border border-[#283039] overflow-hidden font-sans flex-shrink-0 h-full flex flex-col">
      <PlatformLabel label="LinkedIn ADS" color="#0a66c2" />
      <div className="p-4 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0 border border-zinc-700/60">
            <ImageWithFallback src={ad.pageLogo} fallback={`https://ui-avatars.com/api/?name=${encodeURIComponent(ad.pageName)}&background=0a66c2&color=fff`} alt={ad.pageName} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-white font-semibold text-[15px] leading-tight block">{ad.pageName}</span>
            <span className="text-zinc-400 text-[12px] block">Uniformes corporativos · 500+ seguidores</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-zinc-500 text-[11px]">Promocionado</span>
            </div>
          </div>
        </div>
        <button className="flex-shrink-0 border border-[#0a66c2] text-[#0a66c2] px-4 py-1.5 rounded-full text-[13px] font-bold hover:bg-[#0a66c2]/10 transition flex items-center gap-1 whitespace-nowrap">
          <span className="text-base leading-none">+</span><span>Seguir</span>
        </button>
      </div>
      <div className="px-4 pb-3 text-[14px] text-zinc-200 text-left leading-relaxed whitespace-pre-wrap">
        {displayText}
        {isLong && !expanded && <button onClick={() => setExpanded(true)} className="text-[#0a66c2] font-medium ml-1">…ver más</button>}
      </div>
      <div className="flex-1 min-h-0 bg-zinc-900 overflow-hidden">
        <ImageWithFallback src={ad.imageUrl || ''} fallback={ad.imageFallback || ''} alt={ad.ctaTitle} className="w-full h-full object-cover block" />
      </div>
      <div className="mx-3 mt-3 rounded border border-[#38434f] bg-[#283039] p-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <span className="text-white text-[14px] font-semibold block truncate">{ad.ctaTitle}</span>
          <span className="text-zinc-400 text-[12px] block">{ad.ctaDesc}</span>
        </div>
        <button className="flex-shrink-0 border border-[#0a66c2] text-[#0a66c2] px-4 py-1.5 rounded text-[13px] font-bold hover:bg-[#0a66c2]/10 transition whitespace-nowrap">{ad.ctaBtnText}</button>
      </div>
      <div className="px-4 pt-3 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="flex -space-x-0.5">
            <span className="w-4 h-4 rounded-full bg-[#0a66c2] flex items-center justify-center text-[8px] border border-[#1b1f23]">👍</span>
            <span className="w-4 h-4 rounded-full bg-[#df704d] flex items-center justify-center text-[8px] border border-[#1b1f23]">❤️</span>
          </div>
          <span className="text-zinc-400 text-[12px]">127</span>
        </div>
        <div className="flex items-center gap-2 text-zinc-400 text-[12px]">
          <span>28 comentarios</span><span>·</span><span>12 reenvíos</span>
        </div>
      </div>
      <div className="mx-4 border-t border-[#38434f]" />
      <div className="px-2 py-1 flex items-center">
        {[
          { label: 'Recomendar', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg> },
          { label: 'Comentar', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"/></svg> },
          { label: 'Repostear', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg> },
          { label: 'Enviar', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg> },
        ].map(({ label, icon }) => (
          <button key={label} className="flex-1 flex flex-col items-center gap-0.5 py-2 rounded hover:bg-[#283039] transition text-zinc-400 hover:text-white group">
            <span className="group-hover:text-white transition">{icon}</span>
            <span className="text-[11px] font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Render dispatcher ─────────────────────────────────────────────────────────

function renderMetaAd(ad: MetaAd): React.ReactNode {
  if (ad.id === 'andrea-aragon') return <InstagramCarouselAd ad={ad} />;
  if (ad.id === 'mayork-mx') return <LinkedInAd ad={ad} />;
  if (ad.id === 'ortopedia-justo-sierra-tiktok') return <TikTokVideoAd ad={ad} />;
  if (ad.type === 'carousel') return <CarouselAd ad={ad} />;
  if (ad.type === 'single-image') return <SingleImageAd ad={ad} />;
  return <SingleMediaAd ad={ad} />;
}

// ── Section export ────────────────────────────────────────────────────────────

const CARD_WIDTH = 420;
const CARD_HEIGHT = 810;

export default function MetaSection() {
  const { openPopup } = useContactPopup();
  return (
    <section id="redes-sociales" className="relative min-h-screen bg-transparent flex flex-col justify-between py-12 md:py-20 overflow-x-hidden border-t border-zinc-900/40">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-4 mb-10 md:mb-16">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#0866ff]">Alcance masivo y segmentación precisa</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 leading-[1.1]" style={{ fontFamily: FONTS.heading }}>
          Publicidad en <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0866ff] to-[#00c6ff]">Redes Sociales</span>
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
          Llega a quien sí te va a comprar. Campañas optimizadas para generar resultados de manera <strong className="text-white font-medium">precisa y escalable</strong>.
        </p>
      </div>

      <SectionCarousel
        items={ADS_DATABASE.map(ad => renderMetaAd(ad))}
        cardWidth={CARD_WIDTH}
        cardHeight={CARD_HEIGHT}
      />

      <div className="w-full flex justify-center mt-12 mb-4 relative z-10">
        <button onClick={() => openPopup('Publicidad en Meta (Facebook & Instagram)')} className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#0866ff] to-[#00c6ff] rounded-full shadow-[0_0_20px_rgba(8,102,255,0.3)] hover:shadow-[0_0_30px_rgba(8,102,255,0.5)] hover:scale-105 transition-all duration-300">
          Cotizar campaña
        </button>
      </div>
    </section>
  );
}
