import { useState, useRef, useEffect } from 'react';
import { COLORS, FONTS } from './utils';
import { useContactPopup } from '../../../../context/ContactPopupContext';

import thumbEQC from '../../../../images/portadaVideosPubl/video3.png';
import thumbCantina from '../../../../images/portadaVideosVerticales/video1.png';
import thumbDulceria from '../../../../images/portadaVideosInst/video1.png';
import thumbHarley from '../../../../images/portadaVideosVerticales/video2.png';

interface Project {
  id: number;
  title: string;
  client: string;
  thumbnail: string;
  videoUrl: string;
  stats: { views: string; engagement: string };
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Campaña de Lanzamiento EQC",
    client: "Mercedes-Benz Eurostern",
    thumbnail: thumbEQC,
    videoUrl: "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655936/Mercedes_Benz_EQC_zzprl2.mp4",
    stats: { views: "2.1M", engagement: "12.4%" }
  },
  {
    id: 2,
    title: "Videos Promocionales",
    client: "Cantina Xalisco",
    thumbnail: thumbCantina,
    videoUrl: "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655940/socialmedia1_cnkqxl.mp4",
    stats: { views: "890K", engagement: "18.7%" }
  },
  {
    id: 3,
    title: "Video Institucional",
    client: "Dulcería los Altos",
    thumbnail: thumbDulceria,
    videoUrl: "https://res.cloudinary.com/dexcrnwcu/video/upload/v1779675805/Dulceri%CC%81a_de_los_Altos_Video_Institucional_dfqhml.mp4",
    stats: { views: "1.5M", engagement: "24.2%" }
  },
  {
    id: 4,
    title: "Video Promocional",
    client: "Harley Davidson",
    thumbnail: thumbHarley,
    videoUrl: "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655929/socialmedia2_zpab9s.mp4",
    stats: { views: "1.5M", engagement: "24.2%" }
  }
];

export default function AudiovisualSection() {
  const { openPopup } = useContactPopup();
  const [activeProject, setActiveProject] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsPlaying(false);
    if (videoRef.current) videoRef.current.load();
  }, [activeProject]);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) { videoRef.current.pause(); setIsPlaying(false); }
    else { videoRef.current.play().then(() => setIsPlaying(true)).catch(err => console.error(err)); }
  };

  const currentProject = PROJECTS[activeProject];

  return (
    <section id="audiovisual" className="relative min-h-screen flex flex-col justify-between py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden border-t border-zinc-900/40">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 w-full">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-2 sm:mb-3 block" style={{ color: COLORS.audiovisual }}>
            Contenido que posiciona, conecta y convierte
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 leading-[1.1]" style={{ fontFamily: FONTS.heading }}>
            Producción <br/>
            <span style={{ color: COLORS.audiovisual }}>Audiovisual</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed font-light" style={{ fontFamily: FONTS.body }}>
            Conceptos creativos desarrollados para atraer clientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          <div className="relative w-full bg-zinc-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl flex items-center justify-center max-h-[65vh] sm:max-h-[70vh] lg:max-h-[75vh]">
            {currentProject.videoUrl ? (
              <video
                ref={videoRef}
                src={currentProject.videoUrl}
                poster={currentProject.thumbnail}
                className="w-full h-auto max-h-[65vh] sm:max-h-[70vh] lg:max-h-[75vh] object-contain block cursor-pointer"
                playsInline
                onClick={handlePlayToggle}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls={isPlaying}
              />
            ) : (
              <img src={currentProject.thumbnail} alt={currentProject.title} className="w-full h-auto max-h-[75vh] object-contain block" />
            )}

            {!isPlaying && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                <button onClick={handlePlayToggle} className="absolute inset-0 flex items-center justify-center group/btn">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300 group-hover/btn:scale-110 shadow-lg" style={{ backgroundColor: 'rgba(89, 157, 223, 0.2)', borderColor: 'rgba(89, 157, 223, 0.4)' }}>
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 text-white pointer-events-none">
                  <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold mb-1.5 sm:mb-2" style={{ backgroundColor: 'rgba(89, 157, 223, 0.2)', color: COLORS.audiovisual }}>{currentProject.client}</span>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3" style={{ fontFamily: FONTS.heading }}>{currentProject.title}</h3>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-300" style={{ fontFamily: FONTS.body }}>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: COLORS.audiovisual }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      <span>{currentProject.stats.views}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: COLORS.automation }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                      <span>{currentProject.stats.engagement} engagement</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="space-y-3 sm:space-y-4 w-full">
            {PROJECTS.map((project, idx) => (
              <button key={project.id} onClick={() => setActiveProject(idx)}
                className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all duration-300 ${
                  activeProject === idx 
                    ? 'bg-zinc-900/90 backdrop-blur-sm shadow-lg' 
                    : 'bg-zinc-900/60 backdrop-blur-sm border-zinc-700/50 hover:border-zinc-600'
                }`}
                style={activeProject === idx ? { borderColor: 'rgba(89, 157, 223, 0.5)', boxShadow: '0 10px 30px rgba(89, 157, 223, 0.1)' } : {}}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-16 sm:w-20 h-11 sm:h-14 rounded-lg overflow-hidden shrink-0 bg-zinc-950">
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs text-zinc-500 mb-0.5 sm:mb-1" style={{ fontFamily: FONTS.body }}>{project.client}</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate" style={{ fontFamily: FONTS.heading }}>{project.title}</p>
                  </div>
                  <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: activeProject === idx ? COLORS.audiovisual : '#27272a' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-8 sm:mt-10 lg:mt-12 mb-4 relative z-10">
        <button onClick={() => openPopup('Producción Audiovisual')} className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold text-white rounded-full hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: COLORS.audiovisual, boxShadow: `0 0 20px rgba(89,157,223,0.3)` }}>
          Cotizar Producción
        </button>
      </div>
    </section>
  );
}