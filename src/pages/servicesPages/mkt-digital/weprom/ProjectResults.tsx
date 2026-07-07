import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { SiMeta, SiGoogle, SiTiktok } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { getMktDigitalProjects, MktDigitalProject, MktDigitalPlatform } from '../../../../lib/sanityQueries';
import { urlFor } from '../../../../lib/sanityImage';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PLATFORM_ICONS: Record<MktDigitalPlatform, { Icon: typeof SiMeta; label: string }> = {
  meta: { Icon: SiMeta, label: 'Meta' },
  google: { Icon: SiGoogle, label: 'Google' },
  tiktok: { Icon: SiTiktok, label: 'TikTok' },
  linkedin: { Icon: FaLinkedin, label: 'LinkedIn' },
};

import logoSenties from '../../../../images/Logos_Clientes/Logo_Senties.png';
import logoFortuna from '../../../../images/Logos_Clientes/Logo_Fortuna.png';
import logoCAB from '../../../../images/Logos_Clientes/Logo_cab.png';
import logoMayorkCard from '../../../../images/Logos_Clientes/Logo_-k.png';
import logoSistemik from '../../../../images/Logos_Clientes/Logo_sistemik.png';
import logoAlteso from '../../../../images/Logos_Clientes/Logo_alteso.png';
import logoDeyun from '../../../../images/Logos_Clientes/Logo_deyun-ctro-de-especialidades.png';
import logoVagual from '../../../../images/Logos_Clientes/Logo_vagual.png';
import logoMercedes from '../../../../images/Logos_Clientes/logo_mercedes.png';
import logoAndreaAragon from '../../../../images/Logos_Clientes/Andrea Aragón_Logotipo bco.png';

import cardSenties from '../../../../images/mktdigital_meta/datacards/mktcard_Senties.png';
import cardFortuna from '../../../../images/mktdigital_meta/datacards/mktcard_Fortuna.png';
import cardCAB from '../../../../images/mktdigital_meta/datacards/mktcard_CAB.png';
import cardMayork from '../../../../images/mktdigital_meta/datacards/mktcard_Mayork.png';
import cardSistemik from '../../../../images/mktdigital_meta/datacards/mktcard_Sistemik.png';
import cardAlteso from '../../../../images/mktdigital_meta/datacards/mktcard_Alteso.png';
import cardDeyun from '../../../../images/mktdigital_meta/datacards/mktcard_Centro de Espacialidades.png';
import cardVagual from '../../../../images/mktdigital_meta/datacards/mktcard_Vagual.png';
import cardMercedes from '../../../../images/mktdigital_meta/datacards/mktcard_Mercedes.png';
import cardAndreaAragon from '../../../../images/mktdigital_meta/datacards/mktcard_AA.png';

type Project = {
  id: number; name: string; subname: string; logo: string; cardImg: string;
  traffic: string; accounts: string; conversations: string; metricLabel: string; interactions: string;
  platforms: MktDigitalPlatform[]; color: string; glow: string;
};

function sanityToProject(p: MktDigitalProject, i: number): Project {
  return {
    id: i + 1,
    name: p.name,
    subname: p.subname || '',
    logo: urlFor(p.logo),
    cardImg: urlFor(p.cardImg),
    traffic: p.traffic,
    accounts: p.accounts,
    conversations: p.conversations,
    metricLabel: p.metricLabel || 'Conversaciones',
    interactions: p.interactions,
    platforms: p.platforms && p.platforms.length > 0 ? p.platforms : ['meta'],
    color: p.color,
    glow: `${p.color}33`,
  };
}

const FALLBACK_PROJECTS = [
  { id: 1, name: "Mercedes-Benz", subname: "Eurostern", logo: logoMercedes, cardImg: cardMercedes, traffic: "+2.45M", accounts: "+818%", conversations: "+315", metricLabel: "Conversaciones", interactions: "+2,900", platforms: ["meta"] as MktDigitalPlatform[], color: "#3b82f6", glow: "rgba(59, 130, 246, 0.2)" },
  { id: 2, name: "Andrea Aragón", subname: "Studio", logo: logoAndreaAragon, cardImg: cardAndreaAragon, traffic: "+250,000", accounts: "31.9%", conversations: "+375%", metricLabel: "Conversaciones", interactions: "+650%", platforms: ["meta"] as MktDigitalPlatform[], color: "#f59e0b", glow: "rgba(245, 158, 11, 0.2)" },
  { id: 3, name: "Senties", subname: "", logo: logoSenties, cardImg: cardSenties, traffic: "+50,000", accounts: "+230%", conversations: "+240%", metricLabel: "Conversaciones", interactions: "+275%", platforms: ["meta"] as MktDigitalPlatform[], color: "#c5362e", glow: "rgba(197, 54, 46, 0.2)" },
  { id: 4, name: "Fortuna", subname: "", logo: logoFortuna, cardImg: cardFortuna, traffic: "+38,000", accounts: "+180%", conversations: "+200%", metricLabel: "Conversaciones", interactions: "+220%", platforms: ["meta"] as MktDigitalPlatform[], color: "#e6af41", glow: "rgba(230, 175, 65, 0.2)" },
  { id: 5, name: "CAB", subname: "", logo: logoCAB, cardImg: cardCAB, traffic: "+45,000", accounts: "+120%", conversations: "+205%", metricLabel: "Conversaciones", interactions: "+110%", platforms: ["meta"] as MktDigitalPlatform[], color: "#599ddf", glow: "rgba(89, 157, 223, 0.2)" },
  { id: 6, name: "Mayork", subname: "", logo: logoMayorkCard, cardImg: cardMayork, traffic: "+180,000", accounts: "+350%", conversations: "+270%", metricLabel: "Conversaciones", interactions: "+400%", platforms: ["meta"] as MktDigitalPlatform[], color: "#599ddf", glow: "rgba(89, 157, 223, 0.2)" },
  { id: 7, name: "Sistemik", subname: "", logo: logoSistemik, cardImg: cardSistemik, traffic: "+62,000", accounts: "+230%", conversations: "+240%", metricLabel: "Conversaciones", interactions: "+275%", platforms: ["meta"] as MktDigitalPlatform[], color: "#c5362e", glow: "rgba(197, 54, 46, 0.2)" },
  { id: 8, name: "Alteso", subname: "", logo: logoAlteso, cardImg: cardAlteso, traffic: "+70,000", accounts: "+380%", conversations: "+320%", metricLabel: "Conversaciones", interactions: "+740%", platforms: ["meta"] as MktDigitalPlatform[], color: "#80b67d", glow: "rgba(128, 182, 125, 0.2)" },
  { id: 9, name: "Deyun", subname: "", logo: logoDeyun, cardImg: cardDeyun, traffic: "+38,000", accounts: "+240%", conversations: "+100%", metricLabel: "Conversaciones", interactions: "+220%", platforms: ["meta"] as MktDigitalPlatform[], color: "#c5362e", glow: "rgba(197, 54, 46, 0.2)" },
  { id: 10, name: "Vagual", subname: "", logo: logoVagual, cardImg: cardVagual, traffic: "+62,000", accounts: "+315%", conversations: "+300%", metricLabel: "Conversaciones", interactions: "+360%", platforms: ["meta"] as MktDigitalPlatform[], color: "#599ddf", glow: "rgba(89, 157, 223, 0.2)" }
];

function ProjectResults() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);

  useEffect(() => {
    getMktDigitalProjects().then(data => {
      if (data && data.length > 0) setProjects(data.map(sanityToProject));
    }).catch(() => {});
  }, []);

  return (
    <section className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 relative overflow-hidden">

      <div className="absolute top-1/4 left-1/4 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-amber-600/10 blur-[80px] sm:blur-[100px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-blue-600/10 blur-[80px] sm:blur-[100px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '-5s' }} />

      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <h2 className="font-aston text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 lg:mb-4 leading-tight">
          CASOS DE ÉXITO
        </h2>
        <p className="font-montserrat italic font-light text-zinc-300 text-sm sm:text-base md:text-lg lg:text-xl">
          Nuestra tarjeta de presentación, es el resultado de nuestros clientes
        </p>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -10,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="projects-swiper !pb-12 sm:!pb-14 md:!pb-16 pt-[1.2rem] sm:pt-[1.4rem] md:pt-[1.6rem]"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="max-w-[700px] sm:max-w-[750px] md:max-w-[850px] w-[90%] opacity-30 transition-opacity duration-500 [&.swiper-slide-active]:opacity-100">
            <div
              className="glass-card group relative flex flex-col sm:flex-row overflow-hidden rounded-2xl sm:rounded-[1.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl transition-all duration-500 h-[420px] sm:h-[400px]"
              style={{
                //@ts-ignore
                '--brand-color': project.color,
                '--brand-glow': project.glow
              }}
            >
              <div className="order-2 sm:order-1 w-full sm:w-3/5 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 flex items-center">
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="h-full w-auto object-contain brightness-0 invert max-w-[120px] sm:max-w-[160px] md:max-w-[200px]"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {project.platforms.map((platform) => {
                      const { Icon, label } = PLATFORM_ICONS[platform];
                      return (
                        <Icon
                          key={platform}
                          title={label}
                          className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white opacity-40 group-hover:opacity-100 transition-all duration-300"
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="mb-3 sm:mb-4">
                  <p className="text-[10px] sm:text-[11px] md:text-[12px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-0.5 sm:mb-1 text-zinc-500 truncate">{project.metricLabel}</p>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter truncate" style={{ color: project.color }}>
                    {project.conversations}
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                  <div className="bg-white/[0.02] border border-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 transition-all group-hover:bg-white/[0.05]">
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-widest text-zinc-500 font-bold uppercase mb-0.5 sm:mb-1">Tráfico</p>
                    <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-white truncate block">{project.traffic}</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 transition-all group-hover:bg-white/[0.05]">
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-widest text-zinc-500 font-bold uppercase mb-0.5 sm:mb-1">Alcance</p>
                    <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-white truncate block">{project.accounts}</span>
                  </div>
                  <div
                    className="bg-white/[0.02] border border-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 transition-all group-hover:bg-white/[0.05]"
                    style={{ borderColor: `${project.color}44` }}
                  >
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-widest text-zinc-500 font-bold uppercase mb-0.5 sm:mb-1">Interacciones</p>
                    <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold truncate block" style={{ color: project.color }}>
                      {project.interactions}
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-1 sm:order-2 w-full h-40 sm:h-auto sm:w-2/5 relative overflow-hidden bg-zinc-900 border-b sm:border-b-0 sm:border-l border-white/5 sm:min-h-[280px] md:min-h-[380px]">
                <img
                  src={project.cardImg}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent sm:block hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent sm:hidden"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProjectResults;