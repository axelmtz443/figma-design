import { useState, useRef, ReactNode } from 'react';
import { COLORS, FONTS } from './utils';
import { useContactPopup } from '../../../../context/ContactPopupContext';

interface Campaign {
  id: number;
  brand: string;
  handle: string;
  niche: string;
  videoUrl: string;
  caption: string;
  audio: string;
  platform: 'tiktok' | 'instagram' | 'facebook';
  likes: string;
  comments: string;
  shares: string;
  roi: string;
}

const CAMPAIGNS: Campaign[] = [
  {
    id: 1,
    brand: "CBR",
    handle: "@cbr",
    niche: "Lifestyle & Moda",
    videoUrl: "https://res.cloudinary.com/dodxaehv3/video/upload/q_auto,f_auto/v1782150637/CBR3_jbiphu.mp4",
    caption: "El estilo que defines tú ✨ Nueva colección disponible #CBR #Moda #Lifestyle",
    audio: "Audio original · CBR",
    platform: "tiktok",
    likes: "48.2K",
    comments: "1.3K",
    shares: "8.7K",
    roi: "340%",
  },
  {
    id: 2,
    brand: "Batros Marina Residences",
    handle: "@batrosmarinaresidences",
    niche: "Bienes Raíces · Puerto Vallarta",
    videoUrl: "https://res.cloudinary.com/dodxaehv3/video/upload/q_auto,f_auto/v1782150652/BATROS2_ou2e99.mp4",
    caption: "Vive frente al mar en Marina Vallarta 🌊 Preventa disponible #BatrosMarina #PuertoVallarta",
    audio: "Audio original · Batros Marina",
    platform: "instagram",
    likes: "12.4K",
    comments: "342",
    shares: "2.1K",
    roi: "280%",
  },
  {
    id: 3,
    brand: "Mercedes-Benz Eurostern",
    handle: "@mb_eurostern",
    niche: "Automotriz · Guadalajara",
    videoUrl: "https://res.cloudinary.com/dodxaehv3/video/upload/q_auto,f_auto/v1782150899/GLC300_ogcygl.mp4",
    caption: "GLC 300 2026. La perfección tiene nombre 🚗 #MercedesBenz #Eurostern #GLC300",
    audio: "Audio original · Mercedes-Benz Eurostern",
    platform: "facebook",
    likes: "5.2K",
    comments: "234",
    shares: "1.8K",
    roi: "520%",
  },
];

const PLATFORM_CONFIG = {
  tiktok: { label: 'TikTok', color: '#FE2C55', glow: 'rgba(254,44,85,0.25)' },
  instagram: { label: 'Instagram Reels', color: '#C13584', glow: 'rgba(193,53,132,0.25)' },
  facebook: { label: 'Facebook Reels', color: '#0866ff', glow: 'rgba(8,102,255,0.25)' },
};

function Action({ icon, count, color = '#fff' }: { icon: string; count?: string; color?: string }) {
  const icons: Record<string, ReactNode> = {
    heart:    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
    like:     <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>,
    comment:  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>,
    share:    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>,
    send:     <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>,
    bookmark: <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>,
    more:     <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>,
  };
  return (
    <div className="flex flex-col items-center gap-0.5 sm:gap-1">
      <div style={{ color }}>{icons[icon]}</div>
      {count && <span className="text-white text-[10px] sm:text-xs font-semibold drop-shadow">{count}</span>}
    </div>
  );
}

function TikTokOverlay({ c, isPlaying }: { c: Campaign; isPlaying: boolean }) {
  return (
    <>
      <div className="absolute top-0 inset-x-0 px-3 sm:px-4 pt-3 sm:pt-4 md:pt-5 pb-2 sm:pb-3 z-20 flex items-center justify-between">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 509.05 587.81"><path d="M509.05,141v100c-49.69-.51-98.54-15.29-138.99-44l-.02,211.49c-6.18,119.68-117.9,204.7-235.41,172.43C10.31,546.78-40.73,394.49,36.64,291.09c40.07-53.55,106.55-82.16,173.41-73.09v102c-36.97-9.47-74.19,1.72-96.22,33.28-28.18,40.37-15.93,98.11,26.55,122.89,57.17,33.36,125.99-7.08,128.71-71.63l-.04-404.54h99.5l1.4,1.58c-1.05,7.52.1,16.94,1.39,24.63,8.81,52.29,50.61,95.57,100.94,110.06,4.33,1.25,16.53,4.74,20.26,4.74h16.5Z"/></svg>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <span className="text-white/60 text-[11px] sm:text-sm font-semibold">Siguiendo</span>
          <span className="text-white text-[11px] sm:text-sm font-bold border-b-2 border-white pb-0.5">Para ti</span>
        </div>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/></svg>
      </div>
      <div className="absolute right-2 sm:right-3 md:right-4 bottom-28 sm:bottom-30 md:bottom-32 flex flex-col items-center gap-3 sm:gap-4 md:gap-5 z-20">
        <div className="flex flex-col items-center gap-0.5 sm:gap-1">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#FE2C55] to-[#25F4EE]" />
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#FE2C55] rounded-full flex items-center justify-center -mt-2 sm:-mt-3 border border-black"><span className="text-white text-[7px] sm:text-[8px] md:text-[9px] font-bold">+</span></div>
        </div>
        <Action icon="heart" count={c.likes} color="#FE2C55" />
        <Action icon="comment" count={c.comments} />
        <Action icon="share" count={c.shares} />
        <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-[3px] border-zinc-600 bg-zinc-900 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white" />
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 px-3 sm:px-4 md:px-5 pb-4 sm:pb-5 md:pb-6 z-20">
        <p className="text-white font-bold text-[11px] sm:text-xs md:text-sm mb-0.5 sm:mb-1">{c.handle}</p>
        <p className="text-white/85 text-[10px] sm:text-[11px] md:text-xs leading-relaxed mb-2 sm:mb-3 max-w-[70%] sm:max-w-[75%] line-clamp-3">{c.caption}</p>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
          <span className="text-white/80 text-[9px] sm:text-[10px] md:text-xs truncate">{c.audio}</span>
        </div>
      </div>
    </>
  );
}

function InstagramOverlay({ c, isPlaying }: { c: Campaign; isPlaying: boolean }) {
  return (
    <>
      <div className="absolute top-0 inset-x-0 px-3 sm:px-4 pt-3 sm:pt-4 md:pt-5 pb-2 sm:pb-3 z-20 flex items-center justify-between">
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
        <span className="text-white font-bold text-[11px] sm:text-xs md:text-sm">Reels</span>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
      </div>
      <div className="absolute right-2 sm:right-3 md:right-4 bottom-28 sm:bottom-30 md:bottom-32 flex flex-col items-center gap-3 sm:gap-4 md:gap-5 z-20">
        <Action icon="heart" count={c.likes} />
        <Action icon="comment" count={c.comments} />
        <Action icon="send" count={c.shares} />
        <Action icon="bookmark" />
        <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl overflow-hidden border border-white/30 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }}>
          <div className="w-full h-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]" />
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 px-3 sm:px-4 md:px-5 pb-4 sm:pb-5 md:pb-6 z-20">
        <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-2">
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-gradient-to-br from-[#833AB4] to-[#FCAF45] shrink-0" />
          <span className="text-white font-bold text-[11px] sm:text-xs md:text-sm">{c.handle}</span>
          <span className="text-white text-[9px] sm:text-[10px] md:text-xs border border-white/60 rounded-md px-1.5 sm:px-2 py-0.5 ml-0.5 sm:ml-1">Seguir</span>
        </div>
        <p className="text-white/85 text-[10px] sm:text-[11px] md:text-xs leading-relaxed mb-1.5 sm:mb-2 max-w-[70%] sm:max-w-[78%] line-clamp-3">{c.caption}</p>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
          <span className="text-white/80 text-[9px] sm:text-[10px] md:text-xs truncate">{c.audio}</span>
        </div>
      </div>
    </>
  );
}

function FacebookOverlay({ c, isPlaying }: { c: Campaign; isPlaying: boolean }) {
  return (
    <>
      <div className="absolute top-0 inset-x-0 px-3 sm:px-4 pt-3 sm:pt-4 md:pt-5 pb-2 sm:pb-3 z-20 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          <span className="text-white font-bold text-[11px] sm:text-xs md:text-sm">Reels</span>
        </div>
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 532.8 529.49"><path d="M308.11,529.49l-.06-186.13h61.67l12.23-76.9h-73.9v-54.17c.9-8.2,2.89-16.36,8-22.96,15.87-20.53,46.36-12.69,68.9-14.24v-65.91c-40.8-5.11-86.46-12.42-122.2,12.87-26.35,18.65-36.83,49.35-38.11,80.73-.86,21.01.68,42.62.02,63.69h-67.41v76.9h67.41l-.06,186.11C87.33,507.67-10.11,383.98.84,245.41,11.79,106.84,127.44-.02,266.44,0c139,.02,254.62,106.92,265.53,245.49,10.91,138.57-86.57,262.24-223.86,284Z"/></svg>
      </div>
      <div className="absolute right-2 sm:right-3 md:right-4 bottom-32 sm:bottom-34 md:bottom-36 flex flex-col items-center gap-3 sm:gap-4 md:gap-5 z-20">
        <Action icon="like" count={c.likes} color="#0866ff" />
        <Action icon="comment" count={c.comments} />
        <Action icon="share" count={c.shares} />
        <Action icon="more" />
        <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-[#0866ff]/50 bg-[#0866ff]/20 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }}>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white" />
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 px-3 sm:px-4 md:px-5 pb-4 sm:pb-5 md:pb-6 z-20">
        <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-2">
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-[#0866ff] flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-[8px] sm:text-[9px] md:text-xs">M</span>
          </div>
          <span className="text-white font-bold text-[11px] sm:text-xs md:text-sm">{c.handle}</span>
        </div>
        <p className="text-white/85 text-[10px] sm:text-[11px] md:text-xs leading-relaxed mb-2 sm:mb-3 max-w-[70%] sm:max-w-[78%] line-clamp-3">{c.caption}</p>
        <button className="text-[9px] sm:text-[10px] md:text-xs font-bold text-white border border-white/60 rounded-lg px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5">Seguir página</button>
      </div>
    </>
  );
}

function VideoCard({ campaign }: { campaign: Campaign }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cfg = PLATFORM_CONFIG[campaign.platform];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) { videoRef.current.pause(); } else { videoRef.current.play().catch(() => {}); }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 flex-1 min-w-0">
      <div className="flex items-center gap-2 sm:gap-2.5">
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: cfg.color, boxShadow: `0 0 8px ${cfg.color}` }} />
        <span className="text-[10px] sm:text-[11px] md:text-sm font-bold tracking-widest uppercase text-zinc-400" style={{ fontFamily: FONTS.body }}>{cfg.label}</span>
      </div>
      <div
        className="relative w-full overflow-hidden rounded-2xl cursor-pointer"
        style={{ aspectRatio: '9/16', boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 24px 64px rgba(0,0,0,0.5), 0 0 40px ${cfg.glow}` }}
        onClick={togglePlay}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/50 z-10 pointer-events-none" />
        
        <video 
          ref={videoRef} 
          src={campaign.videoUrl} 
          className="absolute inset-0 w-full h-full object-cover" 
          playsInline 
          loop 
          muted={isMuted}
          preload="metadata"
          onPlay={() => setIsPlaying(true)} 
          onPause={() => setIsPlaying(false)} 
        />

        {campaign.platform === 'tiktok' && <TikTokOverlay c={campaign} isPlaying={isPlaying} />}
        {campaign.platform === 'instagram' && <InstagramOverlay c={campaign} isPlaying={isPlaying} />}
        {campaign.platform === 'facebook' && <FacebookOverlay c={campaign} isPlaying={isPlaying} />}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        )}
        <button onClick={toggleMute} className="absolute top-14 sm:top-16 right-2 sm:right-3 md:right-4 z-30 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white">
          {isMuted ? <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
          : <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L8 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>}
        </button>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 px-1">
        <div>
          <p className="text-base sm:text-lg font-bold" style={{ color: COLORS.influencer, fontFamily: FONTS.heading }}>{campaign.roi}</p>
          <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-600" style={{ fontFamily: FONTS.body }}>ROI</p>
        </div>
        <div className="w-px h-6 sm:h-7 md:h-8 bg-zinc-800" />
        <div>
          <p className="text-base sm:text-lg font-bold text-white" style={{ fontFamily: FONTS.heading }}>{campaign.likes}</p>
          <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-600" style={{ fontFamily: FONTS.body }}>Likes</p>
        </div>
        <div className="w-px h-6 sm:h-7 md:h-8 bg-zinc-800" />
        <div>
          <p className="text-base sm:text-lg font-bold text-white" style={{ fontFamily: FONTS.heading }}>{campaign.comments}</p>
          <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-600" style={{ fontFamily: FONTS.body }}>Comentarios</p>
        </div>
        <div className="w-px h-6 sm:h-7 md:h-8 bg-zinc-800" />
        <div>
          <p className="text-base sm:text-lg font-bold text-white" style={{ fontFamily: FONTS.heading }}>{campaign.shares}</p>
          <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-600" style={{ fontFamily: FONTS.body }}>Compartidos</p>
        </div>
      </div>
      <p className="text-[10px] sm:text-[11px] md:text-xs text-zinc-500 px-1" style={{ fontFamily: FONTS.body }}>{campaign.brand} · {campaign.niche}</p>
    </div>
  );
}

export default function InfluencerSection() {
  const { openPopup } = useContactPopup();
  return (
    <section id="influencer" className="relative min-h-screen flex flex-col justify-between py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden border-t border-zinc-900/40">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 w-full">
        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-2 sm:mb-3 block" style={{ color: COLORS.influencer }}>
            Alcance real · Audiencias comprometidas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-[1.1]" style={{ fontFamily: FONTS.heading }}>
            Influencer Marketing <br/>
            <span style={{ color: COLORS.influencer }}>y Contenido UGC</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed font-light" style={{ fontFamily: FONTS.body }}>
            Creamos contenido auténtico para TikTok, Instagram Reels y Facebook Reels que convierte audiencias en clientes reales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
          {CAMPAIGNS.map((campaign) => (
            <VideoCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-14 sm:mt-16 lg:mt-20 mb-4 relative z-10">
        <button onClick={() => openPopup('Influencer Marketing / UGC')} className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base font-bold text-black rounded-full hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: COLORS.influencer, boxShadow: '0 0 32px rgba(230,175,65,0.3)' }}>
          Cotizar Campaña
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
        </button>
      </div>
    </section>
  );
}