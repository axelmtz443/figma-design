import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import portada1 from '../../../images/portadaVideosPubl/video1.png'
import portada2 from '../../../images/portadaVideosPubl/video2.png'
import portada3 from '../../../images/portadaVideosPubl/video3.png'
import portada4 from '../../../images/portadaVideosPubl/video4.png'
import portada5 from '../../../images/portadaVideosPubl/video5.png'

const video1 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655936/one_ineaen.mp4'
const video2 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655941/two_cytl8j.mp4'
const video3 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655942/three_oatlxh.mp4'
const video4 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776656012/four_wdh3dc.mp4'
const video5 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655944/five_uahh64.mp4'

const videos = [
  { src: video1, poster: portada1 },
  { src: video2, poster: portada2 },
  { src: video3, poster: portada3 },
  { src: video4, poster: portada4 },
  { src: video5, poster: portada5 },
];

const VideosPublicitarios = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const prev = () => {
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) { 
      currentVideo.pause(); 
      currentVideo.currentTime = 0; 
      currentVideo.load();
    }
    setActiveIndex((i) => (i - 1 + videos.length) % videos.length);
    setPlayingIndex(null);
  };

  const next = () => {
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) { 
      currentVideo.pause(); 
      currentVideo.currentTime = 0; 
      currentVideo.load();
    }
    setActiveIndex((i) => (i + 1) % videos.length);
    setPlayingIndex(null);
  };

  const togglePlay = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setPlayingIndex(null);
      return;
    }
    const video = videoRefs.current[index];
    if (!video) return;
    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      video.play();
      setPlayingIndex(index);
    }
  };

  const getPosition = (index: number) => {
    const total = videos.length;
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 px-4 flex flex-col items-center text-white overflow-hidden">

      {/* Encabezado */}
      <div className="text-center mb-10 sm:mb-12 max-w-2xl px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-aston tracking-tight mb-3 sm:mb-4">
          Videos{' '}
          <span style={{
            background: '#34C759',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Publicitarios
          </span>
        </h2>
        <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
          Producción de spots persuasivos y de alto impacto, optimizados para maximizar el retorno de inversión en medios digitales o tradicionales.
        </p>
      </div>

      {/* Carrusel - Responsive */}
      <div className="relative w-full max-w-5xl flex items-center justify-center" style={{ height: 'clamp(200px, 40vw, 320px)' }}>

        {/* Botón prev */}
        <button
          onClick={prev}
          className="absolute left-0 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
        </button>

        {/* Videos */}
        {videos.map((video, index) => {
          const pos = getPosition(index);
          const isActive = pos === 0;
          const isVisible = Math.abs(pos) <= 2;

          if (!isVisible) return null;

          const xPercent = pos * 45;
          const scale = isActive ? 1 : 0.7 - Math.abs(pos) * 0.05;
          const opacity = isActive ? 1 : 0.4 - Math.abs(pos) * 0.1;
          const zIndex = isActive ? 10 : 5 - Math.abs(pos);

          return (
            <div
              key={index}
              onClick={() => togglePlay(index)}
              className="absolute cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500"
              style={{
                width: 'clamp(45%, 55%, 60%)',
                aspectRatio: '16/9',
                transform: `translateX(${xPercent}%) scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.src}
                poster={video.poster}
                className="w-full h-full object-cover"
                loop
                playsInline
              />

              <div className={`absolute inset-0 transition-opacity duration-300 ${isActive ? 'bg-black/20' : 'bg-black/50'}`} />

              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playingIndex === index ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110 ${!isActive && 'opacity-60'}`}>
                  {playingIndex === index ? (
                    <svg width="12" height="12" className="sm:w-[14px] sm:h-[14px]" viewBox="0 0 24 24" fill="white">
                      <rect x="5" y="3" width="4" height="18" rx="1" />
                      <rect x="15" y="3" width="4" height="18" rx="1" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" className="sm:w-[14px] sm:h-[14px]" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 1 }}>
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Botón next */}
        <button
          onClick={next}
          className="absolute right-0 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight size={16} className="sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-5 sm:mt-6">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => { setActiveIndex(index); setPlayingIndex(null); }}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              background: activeIndex === index
                ? 'linear-gradient(90deg, #FF3B30, #007AFF)'
                : 'rgba(255,255,255,0.3)',
              width: activeIndex === index ? 20 : 8,
            }}
          />
        ))}
      </div>

      {/* Botón CTA */}
      <div className="mt-10 sm:mt-12">
        <button
          className="px-6 sm:px-8 py-3 sm:py-4 font-montserrat font-bold text-sm sm:text-base rounded-full text-white flex items-center gap-2 group transition-all duration-300"
          style={{
            background: 'linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #FF3B30, #FF9500, #34C759, #007AFF) border-box',
            border: '2px solid transparent',
          }}
        >
          Cotizar Proyecto
          <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default VideosPublicitarios;