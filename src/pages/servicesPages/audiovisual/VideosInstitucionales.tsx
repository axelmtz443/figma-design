import React, { useRef, useState, useEffect } from 'react';

import portada1 from '../../../images/portadaVideosInst/video1.png';
import portada2 from '../../../images/portadaVideosInst/video2.png';
import portada3 from '../../../images/portadaVideosInst/video3.png';
import portada4 from '../../../images/portadaVideosInst/video4.png';

const video1 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1779675805/Dulceri%CC%81a_de_los_Altos_Video_Institucional_dfqhml.mp4'
const video2 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776657701/Inst_2_pjtdfe.mp4'
const video3 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655980/Inst_3_xcp3so.mp4'
const video4 = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655946/Inst_4_qemsok.mp4'

const videos = [
    { src: video1, poster: portada1, large: true },
    { src: video2, poster: portada2, large: true },
    { src: video3, poster: portada3, large: false },
    { src: video4, poster: portada4, large: false },
];

const VideoCard = ({ src, poster, large }: { src: string; poster: string; large: boolean }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = () => setPlaying(true);
        const handlePause = () => setPlaying(false);

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, []);

    const togglePlay = (e: React.MouseEvent) => {
        if (!videoRef.current) return;
        if (e.target === videoRef.current && playing) return;

        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    };

    return (
        <div
            className="relative w-full h-full overflow-hidden rounded-lg sm:rounded-xl bg-black"
            style={{ aspectRatio: '16/9' }}
            onClick={togglePlay}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                controls={playing}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loop
                playsInline
            />

            {!playing && (
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            )}

            {!playing && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/50 border border-white/40 backdrop-blur-sm flex items-center justify-center">
                        <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 2 }}>
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
};

const VideosInstitucionales = () => {
    return (
        <section className="w-full bg-transparent py-12 sm:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white">

            {/* Encabezado */}
            <div className="text-center mb-10 sm:mb-12 max-w-2xl px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-aston mb-3 sm:mb-4">
                    Videos{' '}
                    <span
                        style={{
                            background: '#007AFF',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Institucionales
                    </span>
                </h2>
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                    Narrativa audiovisual de alta calidad para proyectar la solidez, cultura y visión de tu corporativo ante el mundo.
                </p>
            </div>

            {/* Contenedor maestro en vertical */}
            <div className="w-full max-w-6xl flex flex-col gap-4 sm:gap-5 md:gap-6">
                
                {/* Fila Superior: Alineada a la IZQUIERDA */}
                <div className="w-full sm:w-[90%] md:w-[85%] flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 self-start">
                    <div className="flex-1">
                        <VideoCard src={videos[0].src} poster={videos[0].poster} large={true} />
                    </div>
                    <div className="flex-1">
                        <VideoCard src={videos[1].src} poster={videos[1].poster} large={true} />
                    </div>
                </div>

                {/* Fila Inferior: Alineada a la DERECHA */}
                <div className="w-full sm:w-[90%] md:w-[85%] flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 self-end">
                    <div className="flex-1">
                        <VideoCard src={videos[2].src} poster={videos[2].poster} large={false} />
                    </div>
                    <div className="flex-1">
                        <VideoCard src={videos[3].src} poster={videos[3].poster} large={false} />
                    </div>
                </div>

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
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
            </div>

        </section>
    );
};

export default VideosInstitucionales;