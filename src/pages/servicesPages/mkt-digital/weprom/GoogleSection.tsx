import { ImageWithFallback, FONTS } from './utils';
import { useState, useRef } from 'react';
import { useContactPopup } from '../../../../context/ContactPopupContext';

type GoogleAdType = 'search' | 'display' | 'shopping' | 'video';

interface GoogleShoppingProduct {
  image: string;
  title: string;
  price: string;
  store: string;
  promo?: string;
  rating?: number;
  reviews?: number;
}

interface GoogleAd {
  id: string;
  type: GoogleAdType;
  title: string;
  pageLogo?: string;
  pageName?: string;
  displayUrl?: string;
  description?: string;
  stackedSitelinks?: string[];
  tags?: string[];
  formExtension?: { title: string; subtitle: string };
  displayBgColor?: string;
  displaySubtext?: string;
  displayImageUrl?: string;
  ctaText?: string;
  finePrint?: string;
  products?: GoogleShoppingProduct[];
  videoThumbnail?: string;
  duration?: string;
  channelName?: string;
  views?: string;
  sponsorLabel?: string;
  searchImageUrl?: string;
}

const ADS_DATABASE: GoogleAd[] = [
  {
    id: "search-alteso",
    type: "search",
    pageName: "Alteso",
    displayUrl: "www.alteso.mx/plantas_de_gas",
    pageLogo: "https://ui-avatars.com/api/?name=Alteso&background=f8f9fa&color=202124&font-size=0.5",
    title: "Venta de Plantas de Luz a Gas - Te Cotizamos en 24 Horas",
    description: "Nuestros Equipos de última generación generan menos emisiones de CO2 sin afectar rendimiento o potencia",
    tags: ["Plantas de Diesel", "Plantas de Gasolina", "Plantas de..."],
    formExtension: { title: "Pide presupuesto", subtitle: "Tenemos todas las marcas" },
    searchImageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=320"
  },
  {
    id: "shopping-tech",
    type: "shopping",
    title: "Resultados de Shopping",
    products: [
      { image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300", title: "Auriculares Inalámbricos Pro Max Noise Cancelling", price: "$4,599.00", store: "TechStore MX", promo: "Envío gratis", rating: 4.8, reviews: 124 },
      { image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=300", title: "Smartwatch Deportivo Serie 8 GPS + Celular", price: "$6,200.00", store: "ElectroCity", promo: "Rebaja especial", rating: 4.5, reviews: 89 },
      { image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=300", title: "Audífonos Studio Wireless Over-Ear V2", price: "$3,850.00", store: "AudioMundo", rating: 4.2, reviews: 45 },
      { image: "https://images.unsplash.com/photo-1572569433114-6b0c20ab0e39?auto=format&fit=crop&q=80&w=300", title: "Reloj Inteligente Minimalist Negro", price: "$1,999.00", store: "GadgetMX", promo: "Envío gratis" }
    ]
  },
  {
    id: "video-promo",
    type: "video",
    title: "Domina tus Finanzas con esta Nueva Herramienta en 2026",
    videoThumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    duration: "1:12",
    channelName: "Finanzas Prácticas",
    views: "1.2 M de vistas",
    sponsorLabel: "Patrocinado",
    description: "Descubre el software definitivo para automatizar tu contabilidad y multiplicar tus ahorros."
  },
  {
    id: "blog-playas",
    type: "display",
    title: "Las 5 Playas Más Hermosas de México",
    displaySubtext: "Descubre los paraísos naturales que debes visitar este año.",
    displayImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    ctaText: "Reservar ahora",
    pageLogo: "https://ui-avatars.com/api/?name=VM&background=0d47a1&color=fff&font-size=0.5"
  }
];

// ── Arrow Carousel ────────────────────────────────────────────────────────────

interface SectionCarouselProps {
  items: React.ReactNode[];
  cardWidth: number;
  cardHeight: number;
}

function SectionCarousel({ items, cardWidth, cardHeight }: SectionCarouselProps) {
  const gap = 24;
  const len = items.length;
  const [index, setIndex] = useState(len);
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

      <button
        onClick={() => go(-1)}
        className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all"
        style={{ top: `${cardHeight / 2}px`, transform: 'translateY(-50%)' }}
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
      </button>

      <button
        onClick={() => go(1)}
        className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all"
        style={{ top: `${cardHeight / 2}px`, transform: 'translateY(-50%)' }}
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
      </button>

      <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => { if (!transitioning) setIndex(len + i); }}
            className={`rounded-full transition-all duration-300 ${dotIndex === i ? 'w-5 sm:w-6 h-1.5 sm:h-2 bg-white' : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Google logo ───────────────────────────────────────────────────────────────

const GoogleLogo = () => (
  <div className="flex font-sans text-base sm:text-xl font-medium tracking-tighter mr-2 sm:mr-4 select-none flex-shrink-0">
    <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span>
    <span className="text-[#FBBC04]">o</span><span className="text-[#4285F4]">g</span>
    <span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
  </div>
);

// ── Ad components ─────────────────────────────────────────────────────────────

function GoogleSearchAd({ ad }: { ad: GoogleAd }) {
  const dummySearchQuery = ad.tags?.[0] || ad.title.split('-')[0].trim() || ad.pageName;

  return (
    <div className="flex flex-col items-start w-full h-full">
      <div className="text-left mb-3 sm:mb-4 md:mb-5 px-1 flex-shrink-0">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">Red de Búsqueda (Search)</h3>
        <p className="text-[11px] sm:text-[12px] md:text-[13px] text-zinc-400 font-light">Aparece en los primeros resultados de texto en el buscador de Google.</p>
      </div>
      <div className="w-full bg-white/95 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-gray-200 overflow-hidden text-left font-sans relative flex flex-col flex-1 min-h-0">
        <div className="border-b border-gray-200 bg-white pt-2 sm:pt-3 md:pt-4">
          <div className="flex items-center px-3 sm:px-4 mb-2 sm:mb-3">
            <GoogleLogo />
            <div className="flex-1 flex items-center bg-white border border-gray-200 hover:shadow-md transition-shadow rounded-full px-2 sm:px-3 py-1 sm:py-1.5 shadow-sm">
              <span className="text-[#202124] text-[11px] sm:text-[12px] md:text-[13px] flex-1 truncate font-medium">{dummySearchQuery}</span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4285F4] ml-1 sm:ml-2 flex-shrink-0 cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </div>
          </div>
          <div className="flex items-center px-3 sm:px-4 space-x-3 sm:space-x-5 text-[11px] sm:text-[12px] text-[#5f6368] overflow-x-auto">
            <div className="flex items-center space-x-1 pb-2 border-b-2 border-[#1a73e8] text-[#1a73e8] font-medium cursor-pointer">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              <span>Todo</span>
            </div>
            <span className="pb-2 hover:text-[#1a0dab] cursor-pointer">Imágenes</span>
            <span className="pb-2 hover:text-[#1a0dab] cursor-pointer">Videos</span>
          </div>
        </div>
        <div className="px-3 sm:px-4 pt-1 sm:pt-2 pb-0.5 sm:pb-1 text-[10px] sm:text-[11px] text-[#70757a] flex-shrink-0">Cerca de 2,450,000 resultados (0.34 segundos)</div>
        <div className="px-3 sm:px-4 pb-4 sm:pb-5 relative flex-1 overflow-hidden">
          <div className="flex gap-2 sm:gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1.5 sm:space-x-2 mb-1.5 sm:mb-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-200 overflow-hidden shrink-0 bg-gray-50 flex items-center justify-center">
                  <ImageWithFallback src={ad.pageLogo || ''} fallback={`https://ui-avatars.com/api/?name=${encodeURIComponent(ad.pageName || 'A')}&background=f3f4f6&color=000`} alt={ad.pageName || 'Logo'} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] sm:text-[12px] md:text-[13px] text-[#202124] font-medium truncate">{ad.pageName}</span>
                  <span className="text-[9px] sm:text-[10px] md:text-[11px] text-[#4d5156] truncate">{ad.displayUrl}</span>
                </div>
              </div>
              <div className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-[#202124] mb-0.5 sm:mb-1">Patrocinado</div>
              <h3 className="text-[14px] sm:text-[15px] md:text-[17px] text-[#1a0dab] font-normal hover:underline cursor-pointer mb-1 sm:mb-1.5 leading-snug">{ad.title}</h3>
              <p className="text-[11px] sm:text-[12px] md:text-[13px] text-[#4d5156] leading-[1.4] sm:leading-[1.5]">{ad.description}</p>
              {ad.tags && (
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-3">
                  {ad.tags.map((tag, i) => (
                    <div key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-gray-300 rounded-full text-[10px] sm:text-[11px] md:text-[12px] text-[#1a0dab] hover:bg-gray-50 transition cursor-pointer whitespace-nowrap">{tag}</div>
                  ))}
                </div>
              )}
              {ad.formExtension && (
                <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200 flex items-start cursor-pointer hover:bg-gray-50 -mx-1 px-1 pb-1 transition rounded">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#5f6368] mr-2 sm:mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] sm:text-[12px] md:text-[13px] text-[#202124]">{ad.formExtension.title}</span>
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] text-[#70757a] mt-0.5">{ad.formExtension.subtitle}</span>
                  </div>
                </div>
              )}
            </div>
            {ad.searchImageUrl && (
              <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] shrink-0 rounded-lg overflow-hidden border border-gray-200 bg-gray-100 self-start mt-6 sm:mt-7 md:mt-8">
                <img src={ad.searchImageUrl} alt="Imagen del anuncio" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-4 sm:h-5 md:h-6 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 flex-shrink-0" />
      </div>
    </div>
  );
}

function GoogleShoppingAd({ ad }: { ad: GoogleAd }) {
  const dummySearchQuery = ad.products?.[0]?.title.split(' ').slice(0, 3).join(' ') || "comprar en línea";

  return (
    <div className="flex flex-col items-start w-full h-full">
      <div className="text-left mb-3 sm:mb-4 md:mb-5 px-1 flex-shrink-0">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">Google Shopping</h3>
        <p className="text-[11px] sm:text-[12px] md:text-[13px] text-zinc-400 font-light">Muestra productos con imagen y precio directamente en los resultados.</p>
      </div>
      <div className="w-full bg-white/95 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-gray-200 overflow-hidden text-left font-sans relative flex flex-col flex-1 min-h-0">
        <div className="border-b border-gray-200 bg-white pt-2 sm:pt-3 md:pt-4">
          <div className="flex items-center px-3 sm:px-4 mb-2 sm:mb-3">
            <GoogleLogo />
            <div className="flex-1 flex items-center bg-white border border-gray-200 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 shadow-sm">
              <span className="text-[#202124] text-[11px] sm:text-[12px] md:text-[13px] flex-1 truncate font-medium">{dummySearchQuery}</span>
            </div>
          </div>
        </div>
        <div className="px-3 sm:px-4 pb-4 sm:pb-5 md:pb-6 relative flex-1 overflow-hidden">
          <div className="flex items-center mb-1.5 sm:mb-2 pt-1 sm:pt-2">
            <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-[#202124]">Patrocinado</span>
          </div>
          <div className="flex space-x-2 sm:space-x-2.5 overflow-x-auto pb-2 pt-1">
            {ad.products?.map((p, i) => (
              <div key={i} className="w-[100px] sm:w-[110px] md:w-[130px] shrink-0 flex flex-col border border-gray-200 hover:border-gray-300 hover:shadow-md rounded-xl overflow-hidden transition-all cursor-pointer group bg-white">
                <div className="w-full aspect-square bg-white flex items-center justify-center p-1.5 sm:p-2">
                  <img src={p.image} className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-300" alt={p.title} />
                </div>
                <div className="p-2 sm:p-2.5 flex flex-col items-start text-left flex-1 border-t border-gray-100">
                  <span className="text-[9px] sm:text-[10px] md:text-[11px] text-[#1a0dab] font-medium leading-[1.2] sm:leading-[1.3] line-clamp-2 h-[22px] sm:h-[26px] md:h-[30px]">{p.title}</span>
                  <span className="text-[11px] sm:text-[12px] md:text-[14px] font-bold text-[#202124] mt-1 sm:mt-1.5">{p.price}</span>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] text-[#4d5156] mt-0.5 truncate w-full">{p.store}</span>
                  {p.promo && <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium text-[#137333] mt-1 bg-[#e6f4ea] px-1 py-0.5 rounded-sm">{p.promo}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-4 sm:h-5 md:h-6 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 flex-shrink-0" />
      </div>
    </div>
  );
}

const ORGANIC_VIDEOS = [
  {
    thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=600",
    title: "5 Hábitos que Tienen las Personas con Dinero (y Tú No Haces)",
    channel: "Educación Financiera MX",
    views: "845K vistas",
    ago: "hace 3 meses",
    duration: "14:32",
    desc: "Aprende los hábitos financieros que separan a quienes acumulan riqueza del resto..."
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
    title: "Cómo Invertir desde $500 en México — Guía Completa 2026",
    channel: "InvierteYa",
    views: "2.3M vistas",
    ago: "hace 8 meses",
    duration: "22:15",
    desc: "CETES, fondos, acciones y más — todo lo que necesitas saber para empezar a invertir hoy mismo."
  }
];

function GoogleVideoAd({ ad }: { ad: GoogleAd }) {
  return (
    <div className="flex flex-col items-start w-full h-full">
      <div className="text-left mb-3 sm:mb-4 md:mb-5 px-1 flex-shrink-0">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">Anuncios de Video (YouTube)</h3>
        <p className="text-[11px] sm:text-[12px] md:text-[13px] text-zinc-400 font-light">Aparece primero en los resultados de búsqueda de YouTube.</p>
      </div>
      <div className="w-full bg-[#0f0f0f] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-zinc-700/50 overflow-hidden text-left font-sans flex flex-col flex-1 min-h-0">
        <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 bg-[#0f0f0f] border-b border-zinc-800/60 flex-shrink-0">
          <div className="flex items-center text-[13px] sm:text-[15px] font-bold text-white tracking-tighter flex-shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0000] mr-0.5 sm:mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M21.582 6.186a2.594 2.594 0 0 0-1.824-1.838C18.147 3.911 12 3.911 12 3.911s-6.147 0-7.758.437A2.594 2.594 0 0 0 2.418 6.186C2 7.82 2 12 2 12s0 4.18.418 5.814a2.594 2.594 0 0 0 1.824 1.838c1.611.437 7.758.437 7.758.437s6.147 0 7.758-.437a2.594 2.594 0 0 0 1.824-1.838C22 16.18 22 12 22 12s0-4.18-.418-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </div>
          <div className="flex-1 flex items-center bg-zinc-900 border border-zinc-700 hover:border-zinc-500 rounded-full px-2 sm:px-3 py-1 gap-1.5 sm:gap-2 cursor-text transition-colors">
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <span className="text-zinc-300 text-[10px] sm:text-[11px] md:text-[12px] truncate flex-1">¿Cómo mejorar mis finanzas?</span>
          </div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#3EA6FF] flex items-center justify-center text-white text-[8px] sm:text-[9px] md:text-[10px] font-bold flex-shrink-0 cursor-pointer">U</div>
        </div>

        <div className="flex gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 border-b border-zinc-800/40 overflow-x-auto flex-shrink-0">
          {['Todo', 'Fecha de subida', 'Duración', 'Tipo', 'Características'].map((chip, i) => (
            <span key={chip} className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-[9px] sm:text-[10px] md:text-[11px] font-medium whitespace-nowrap cursor-pointer transition-colors ${i === 0 ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}>{chip}</span>
          ))}
        </div>

        <div className="flex flex-col flex-1 overflow-hidden divide-y divide-zinc-800/40">
          <div className="flex gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-3 cursor-pointer group hover:bg-zinc-900/40 transition-colors flex-shrink-0">
            <div className="w-[100px] h-[56px] sm:w-[120px] sm:h-[67px] md:w-[148px] md:h-[83px] shrink-0 relative rounded-lg overflow-hidden bg-zinc-900">
              <img src={ad.videoThumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="thumbnail" />
              <span className="absolute bottom-0.5 sm:bottom-1 right-0.5 sm:right-1 bg-black/85 text-white text-[8px] sm:text-[9px] md:text-[10px] px-0.5 sm:px-1 py-0.5 rounded font-medium">{ad.duration}</span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <div className="bg-black/70 rounded-full p-1 sm:p-1.5"><svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
              </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
              <div>
                <h3 className="text-white text-[10px] sm:text-[11px] md:text-[12px] font-medium leading-snug group-hover:text-[#3EA6FF] transition-colors line-clamp-2 mb-0.5 sm:mb-1">{ad.title}</h3>
                <span className="inline-block bg-[#fcc82d] text-black text-[7px] sm:text-[8px] md:text-[9px] font-bold px-1 sm:px-1.5 py-0.5 rounded-sm mb-0.5 sm:mb-1">{ad.sponsorLabel || 'Patrocinado'}</span>
              </div>
              <div>
                <div className="flex items-center gap-0.5 sm:gap-1 mb-0.5">
                  <span className="text-zinc-400 text-[9px] sm:text-[10px] md:text-[11px]">{ad.channelName}</span>
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-zinc-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                </div>
                <span className="text-zinc-500 text-[9px] sm:text-[10px] md:text-[11px]">{ad.views}</span>
                <p className="text-zinc-600 text-[8px] sm:text-[9px] md:text-[10px] leading-snug mt-0.5 sm:mt-1 line-clamp-1">{ad.description}</p>
              </div>
            </div>
          </div>

          {ORGANIC_VIDEOS.map((v, i) => (
            <div key={i} className="flex gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-3 cursor-pointer group hover:bg-zinc-900/40 transition-colors flex-shrink-0">
              <div className="w-[100px] h-[56px] sm:w-[120px] sm:h-[67px] md:w-[148px] md:h-[83px] shrink-0 relative rounded-lg overflow-hidden bg-zinc-900">
                <img src={v.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="thumbnail" />
                <span className="absolute bottom-0.5 sm:bottom-1 right-0.5 sm:right-1 bg-black/85 text-white text-[8px] sm:text-[9px] md:text-[10px] px-0.5 sm:px-1 py-0.5 rounded font-medium">{v.duration}</span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="bg-black/70 rounded-full p-1 sm:p-1.5"><svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                </div>
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <h3 className="text-white text-[10px] sm:text-[11px] md:text-[12px] font-medium leading-snug group-hover:text-[#3EA6FF] transition-colors line-clamp-2 mb-0.5 sm:mb-1">{v.title}</h3>
                <div>
                  <div className="flex items-center gap-0.5 sm:gap-1 mb-0.5">
                    <span className="text-zinc-400 text-[9px] sm:text-[10px] md:text-[11px]">{v.channel}</span>
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-zinc-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                  </div>
                  <span className="text-zinc-500 text-[9px] sm:text-[10px] md:text-[11px]">{v.views} · {v.ago}</span>
                  <p className="text-zinc-600 text-[8px] sm:text-[9px] md:text-[10px] leading-snug mt-0.5 sm:mt-1 line-clamp-1">{v.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GoogleDisplayAd({ ad }: { ad: GoogleAd }) {
  const BEACHES = [
    { num: 1, name: "Playa del Amor, Islas Marietas", state: "Nayarit", desc: "Una playa oculta dentro de una cueva, accesible solo nadando." },
    { num: 2, name: "Tulum Beach", state: "Quintana Roo", desc: "Arenas blancas, agua turquesa y ruinas mayas frente al mar." },
    { num: 3, name: "Balandra", state: "Baja California Sur", desc: "Aguas cristalinas poco profundas rodeadas de montañas desérticas." },
    { num: 4, name: "Puerto Escondido", state: "Oaxaca", desc: "El Tubo es la ola más famosa de México, meca del surf mundial." },
    { num: 5, name: "Holbox", state: "Quintana Roo", desc: "Sin autos, sin prisa: arenas blancas y bioluminiscencia nocturna." },
  ];

  return (
    <div className="flex flex-col items-start w-full h-full">
      <div className="text-left mb-3 sm:mb-4 md:mb-5 px-1 flex-shrink-0">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">Banners (Red de Display)</h3>
        <p className="text-[11px] sm:text-[12px] md:text-[13px] text-zinc-400">Aparece en sitios web y apps para personas con perfil viajero</p>
      </div>
      <div className="w-full bg-white/97 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-gray-200 overflow-hidden text-left font-sans relative flex flex-col flex-1 min-h-0">
        <div className="border-b border-gray-200 px-3 sm:px-4 md:px-5 py-2 flex items-center justify-between bg-white z-10 flex-shrink-0">
          <div className="flex items-center space-x-1.5 sm:space-x-2 cursor-pointer">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#0d47a1] rounded flex items-center justify-center text-white font-bold text-[9px] sm:text-xs">V</div>
            <span className="font-bold text-xs sm:text-sm text-zinc-800 tracking-tight">ViajaMéxico</span>
          </div>
          <div className="hidden sm:flex space-x-3 sm:space-x-4 text-[10px] sm:text-[11px] md:text-[12px] font-medium text-gray-500">
            <span className="text-[#0d47a1] cursor-pointer">Destinos</span>
            <span className="hover:text-black cursor-pointer transition-colors">Playas</span>
            <span className="hover:text-black cursor-pointer transition-colors">Tips</span>
          </div>
        </div>

        <div className="flex flex-col p-3 sm:p-4 bg-[#fdfdfd] relative flex-1 overflow-hidden">
          <div className="w-full h-20 sm:h-24 md:h-28 rounded-lg overflow-hidden mb-2 sm:mb-3 relative flex-shrink-0">
            <img src={ad.displayImageUrl} alt="Playas de México" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h1 className="absolute bottom-1.5 sm:bottom-2 left-2 sm:left-3 right-2 sm:right-3 text-white font-extrabold text-[12px] sm:text-[13px] md:text-[15px] leading-tight">{ad.title}</h1>
          </div>

          <p className="text-gray-600 text-[10px] sm:text-[11px] md:text-[12px] leading-relaxed mb-2 sm:mb-3 flex-shrink-0">México es un paraíso para los amantes del mar. Aquí te presentamos las playas que debes visitar al menos una vez en la vida.</p>

          <div className="w-full mb-2 sm:mb-3 flex-shrink-0">
            <span className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-400 uppercase tracking-widest mb-0.5 sm:mb-1 font-medium block">Publicidad</span>
            <div className="w-full flex rounded-lg shadow-sm overflow-hidden border border-gray-200 group cursor-pointer hover:shadow-md transition-all bg-white relative">
              <div className="absolute top-0.5 sm:top-1 right-0.5 sm:right-1 bg-white/90 px-0.5 sm:px-1 rounded shadow-sm flex items-center z-10">
                <span className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-500 font-semibold uppercase">Ad</span>
              </div>
              <div className="w-[60px] h-[48px] sm:w-[70px] sm:h-[56px] md:w-[90px] md:h-[72px] shrink-0 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Hotel resort" />
              </div>
              <div className="flex-1 flex flex-col justify-center px-2 sm:px-3 py-1.5 sm:py-2">
                <p className="text-[9px] sm:text-[10px] md:text-[11px] font-extrabold text-gray-900 leading-tight">Villa del Palmar Beach Resort</p>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-[#0d47a1] font-semibold">Cabo San Lucas · Todo incluido</p>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500 mt-0.5">Desde <span className="font-bold text-gray-800">$3,499/noche</span></p>
              </div>
              <div className="flex items-center pr-2 sm:pr-3">
                <button className="bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-[8px] sm:text-[9px] md:text-[10px] py-1 sm:py-1.5 px-1.5 sm:px-2.5 rounded shadow-sm transition-colors whitespace-nowrap">Reservar</button>
              </div>
            </div>
          </div>

          <div className="space-y-1 sm:space-y-1.5 flex-1">
            {BEACHES.map(b => (
              <div key={b.num} className="flex gap-1.5 sm:gap-2 items-start">
                <span className="text-[#0d47a1] font-extrabold text-[10px] sm:text-[11px] md:text-[12px] w-3 sm:w-4 shrink-0 leading-tight pt-px">{b.num}.</span>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-gray-900 hover:text-[#1a0dab] cursor-pointer">{b.name}</span>
                  <span className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-400 ml-0.5 sm:ml-1">· {b.state}</span>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500 leading-snug">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function renderAdComponent(ad: GoogleAd) {
  switch(ad.type) {
    case 'shopping': return <GoogleShoppingAd ad={ad} />;
    case 'video': return <GoogleVideoAd ad={ad} />;
    case 'display': return <GoogleDisplayAd ad={ad} />;
    default: return <GoogleSearchAd ad={ad} />;
  }
}

// ── Section export ────────────────────────────────────────────────────────────

const CARD_WIDTH = 500;
const CARD_HEIGHT = 580;

export default function GoogleSection() {
  const { openPopup } = useContactPopup();
  return (
    <section id="google-ads" className="relative min-h-screen flex flex-col justify-between py-10 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden border-t border-zinc-900/40">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col items-start gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#1a73e8]">La red publicitaria más grande del mundo</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 leading-[1.1]" style={{ fontFamily: FONTS.heading }}>
          Publicidad en <br/>
          <span className="text-[#1a73e8]">Google Ads</span>
        </h2>
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
          Dominamos la red publicitaria más grande del mundo. <strong className="text-white font-medium">Búsqueda, Shopping, YouTube, Display</strong> y más en una sola estrategia.
        </p>
      </div>

      <SectionCarousel
        items={ADS_DATABASE.map(ad => renderAdComponent(ad))}
        cardWidth={CARD_WIDTH}
        cardHeight={CARD_HEIGHT}
      />

      <div className="w-full flex justify-center mt-8 sm:mt-10 lg:mt-12 mb-4 relative z-10">
        <button onClick={() => openPopup('Google Ads')} className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold text-white bg-[#1a73e8] rounded-full shadow-[0_0_20px_rgba(26,115,232,0.3)] hover:shadow-[0_0_30px_rgba(26,115,232,0.5)] hover:scale-105 transition-all duration-300">
          Cotizar Campaña
        </button>
      </div>
    </section>
  );
}