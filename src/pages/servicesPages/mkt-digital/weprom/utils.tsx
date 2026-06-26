import { useState, useRef, useEffect } from 'react';

export const COLORS = {
  meta: '#0866ff',
  google: '#1a73e8',
  audiovisual: '#599ddf',
  influencer: '#e6af41',
  automation: '#80b67d',
} as const;

export const FONTS = {
  heading: "'Astonpoliz', sans-serif",
  body: "'Montserrat', sans-serif",
} as const;

interface ImageWithFallbackProps {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({ src, fallback, alt, className }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasFailed, setHasFailed] = useState<boolean>(false);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (!hasFailed) {
          setImgSrc(fallback);
          setHasFailed(true);
        }
      }}
    />
  );
}

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

export function ExpandableText({ text, maxLength = 135 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const isLong = text.length > maxLength;
  const displayText = isExpanded || !isLong ? text : text.substring(0, maxLength).trim() + '...';

  return (
    <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-1 text-[13px] sm:text-[14px] md:text-[15px] text-[#e4e6eb] text-left leading-[1.3] sm:leading-[1.4] whitespace-pre-wrap">
      {displayText}
      {isLong && !isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="text-zinc-400 font-semibold hover:underline ml-1"
        >
          Ver más
        </button>
      )}
      {isLong && isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="text-zinc-400 font-semibold hover:underline ml-1"
        >
          Ver menos
        </button>
      )}
    </div>
  );
}

interface DraggableCarouselProps {
  children: React.ReactNode;
  step?: number;
}

export function DraggableCarousel({ children, step = 0.8 }: DraggableCarouselProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const s = useRef({ isDragging: false, startX: 0, translateX: 0, dragStart: 0, halfWidth: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const state = s.current;
    const tick = () => {
      if (!state.isDragging && innerRef.current) {
        if (!state.halfWidth && innerRef.current.scrollWidth > 0) {
          state.halfWidth = innerRef.current.scrollWidth / 2;
        }
        if (state.halfWidth) {
          state.translateX -= step;
          if (-state.translateX >= state.halfWidth) state.translateX += state.halfWidth;
          innerRef.current.style.transform = `translateX(${state.translateX}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [step]);

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button,input,select,a,video')) return;
    const state = s.current;
    state.isDragging = true;
    state.startX = e.clientX;
    state.dragStart = state.translateX;
    outerRef.current?.setPointerCapture(e.pointerId);
    e.preventDefault();
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const state = s.current;
    if (!state.isDragging || !innerRef.current) return;
    const delta = e.clientX - state.startX;
    state.translateX = state.dragStart + delta;
    if (state.halfWidth) {
      while (-state.translateX >= state.halfWidth) { state.translateX += state.halfWidth; state.dragStart += state.halfWidth; }
      while (state.translateX > 0) { state.translateX -= state.halfWidth; state.dragStart -= state.halfWidth; }
    }
    innerRef.current.style.transform = `translateX(${state.translateX}px)`;
  };

  const onPointerUp = () => { s.current.isDragging = false; };

  return (
    <div
      ref={outerRef}
      className="relative w-full overflow-hidden py-3 sm:py-4 cursor-grab active:cursor-grabbing select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <div ref={innerRef} className="flex gap-6 sm:gap-8 py-2 w-max will-change-transform">
        {children}
      </div>
    </div>
  );
}

export function SocialActions() {
  return (
    <div className="px-3 sm:px-4 py-1 sm:py-1.5 border-t border-[#3e4042] flex justify-between text-[#b0b3b8] text-[12px] sm:text-[13px] md:text-[14px] font-semibold bg-[#242526]">
      <button className="flex-1 flex items-center justify-center space-x-1.5 sm:space-x-2 py-1 sm:py-1.5 hover:bg-[#3a3b3c] rounded-md transition">
        <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
        <span>Me gusta</span>
      </button>
      <button className="flex-1 flex items-center justify-center space-x-1.5 sm:space-x-2 py-1 sm:py-1.5 mx-0.5 sm:mx-1 hover:bg-[#3a3b3c] rounded-md transition">
        <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span>Comentar</span>
      </button>
      <button className="flex-1 flex items-center justify-center space-x-1.5 sm:space-x-2 py-1 sm:py-1.5 hover:bg-[#3a3b3c] rounded-md transition">
        <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l4.828-2.414m0 0a3 3 0 10-1.243-2.513 3 3 0 001.243 2.513zM13.51 15.674l-4.829-2.414m0 0a3 3 0 111.243-2.513 3 3 0 01-1.243 2.513z" />
        </svg>
        <span>Compartir</span>
      </button>
    </div>
  );
}