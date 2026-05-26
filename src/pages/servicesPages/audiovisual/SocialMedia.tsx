import React, { useRef, useState } from 'react';

import portada1 from '../../../images/portadaVideosVerticales/video1.png'
import portada2 from '../../../images/portadaVideosVerticales/video2.png'
import portada3 from '../../../images/portadaVideosVerticales/video3.png'

const video1 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655940/socialmedia1_cnkqxl.mp4'
const video2 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655929/socialmedia2_zpab9s.mp4'
const video3 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655954/socialmedia3_eakbmm.mp4'

const videos = [
  { src: video1, poster: portada1 },
  { src: video2, poster: portada2 },
  { src: video3, poster: portada3 },
];

const VideoCard = ({ src, poster }: { src: string; poster: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer group bg-neutral-900 w-full"
      style={{ aspectRatio: '9/16' }}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-opacity duration-300" />

      {/* Botón play */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
        <div className="w-14 h-14 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <rect x="5" y="3" width="4" height="18" rx="1" />
              <rect x="15" y="3" width="4" height="18" rx="1" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 3 }}>
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <section className="w-full bg-transparent py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white">

      {/* Encabezado */}
      <div className="text-center mb-12 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-aston tracking-tight mb-4">
          Contenido para{' '}
          <span style={{
            background: ' #FF3B30',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Social Media
          </span>
        </h2>
        <p className="text-white font-aston font-normal text-base md:text-lg leading-relaxed">
          Reels Publicitarios, Testimoniales y contenido UGC diseñados específicamente para el algoritmo, capturando la atención en los primeros segundos.
        </p>
      </div>

      {/* Grid de videos verticales */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard key={index} src={video.src} poster={video.poster} />
        ))}
      </div>

      {/* Botón CTA */}
      <div className="mt-12">
        <button
          className="px-8 py-4 font-montserrat font-bold text-base rounded-full text-white flex items-center gap-2 group transition-all duration-300"
          style={{
            background: 'linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #FF3B30, #FF9500, #34C759, #007AFF) border-box',
            border: '2px solid transparent',
          }}
        >
          Cotizar Proyecto
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default SocialMedia;