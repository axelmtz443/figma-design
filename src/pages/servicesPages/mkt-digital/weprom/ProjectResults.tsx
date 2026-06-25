import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { TrendingUp } from 'lucide-react';
import { getMktDigitalProjects, MktDigitalProject } from '../../../../lib/sanityQueries';
import { urlFor } from '../../../../lib/sanityImage';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import metaLogo from '../../../../images/Meta-Logo.png';

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
  traffic: string; accounts: string; conversations: string; interactions: string;
  color: string; glow: string;
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
    interactions: p.interactions,
    color: p.color,
    glow: `${p.color}33`,
  };
}

const FALLBACK_PROJECTS = [
  {
    id: 1,
    name: "Mercedes-Benz",
    subname: "Eurostern",
    logo: logoMercedes,
    cardImg: cardMercedes,
    traffic: "+2.45M",
    accounts: "+818%",
    conversations: "+315",
    interactions: "+2,900",
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.2)"
  },
  {
    id: 2,
    name: "Andrea Aragón",
    subname: "Studio",
    logo: logoAndreaAragon,
    cardImg: cardAndreaAragon,
    traffic: "+250,000",
    accounts: "31.9%",
    conversations: "+375%",
    interactions: "+650%",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.2)"
  },
  {
    id: 3,
    name: "Senties",
    subname: "",
    logo: logoSenties,
    cardImg: cardSenties,
    traffic: "+50,000",
    accounts: "+230%",
    conversations: "+240%",
    interactions: "+275%",
    color: "#c5362e",
    glow: "rgba(197, 54, 46, 0.2)"
  },
  {
    id: 4,
    name: "Fortuna",
    subname: "",
    logo: logoFortuna,
    cardImg: cardFortuna,
    traffic: "+38,000",
    accounts: "+180%",
    conversations: "+200%",
    interactions: "+220%",
    color: "#e6af41",
    glow: "rgba(230, 175, 65, 0.2)"
  },
  {
    id: 5,
    name: "CAB",
    subname: "",
    logo: logoCAB,
    cardImg: cardCAB,
    traffic: "+45,000",
    accounts: "+120%",
    conversations: "+205%",
    interactions: "+110%",
    color: "#599ddf",
    glow: "rgba(89, 157, 223, 0.2)"
  },
  {
    id: 6,
    name: "Mayork",
    subname: "",
    logo: logoMayorkCard,
    cardImg: cardMayork,
    traffic: "+180,000",
    accounts: "+350%",
    conversations: "+270%",
    interactions: "+400%",
    color: "#599ddf",
    glow: "rgba(89, 157, 223, 0.2)"
  },
  {
    id: 7,
    name: "Sistemik",
    subname: "",
    logo: logoSistemik,
    cardImg: cardSistemik,
    traffic: "+62,000",
    accounts: "+230%",
    conversations: "+240%",
    interactions: "+275%",
    color: "#c5362e",
    glow: "rgba(197, 54, 46, 0.2)"
  },
  {
    id: 8,
    name: "Alteso",
    subname: "",
    logo: logoAlteso,
    cardImg: cardAlteso,
    traffic: "+70,000",
    accounts: "+380%",
    conversations: "+320%",
    interactions: "+740%",
    color: "#80b67d",
    glow: "rgba(128, 182, 125, 0.2)"
  },
  {
    id: 9,
    name: "Deyun",
    subname: "",
    logo: logoDeyun,
    cardImg: cardDeyun,
    traffic: "+38,000",
    accounts: "+240%",
    conversations: "+100%",
    interactions: "+220%",
    color: "#c5362e",
    glow: "rgba(197, 54, 46, 0.2)"
  },
  {
    id: 10,
    name: "Vagual",
    subname: "",
    logo: logoVagual,
    cardImg: cardVagual,
    traffic: "+62,000",
    accounts: "+315%",
    conversations: "+300%",
    interactions: "+360%",
    color: "#599ddf",
    glow: "rgba(89, 157, 223, 0.2)"
  }
];

const StatBox = ({ label, value }: { label: string, value: string }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex-1 min-w-[130px] transition-colors group-hover:border-white/20">
    <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider mb-2 group-hover:text-zinc-300">{label}</p>
    <div className="flex items-end justify-between">
      <span className="text-2xl font-light tracking-tight text-white">{value}</span>
      <TrendingUp className="w-5 h-5 text-green-400" />
    </div>
  </div>
);

function ProjectResults() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);

  useEffect(() => {
    getMktDigitalProjects().then(data => {
      if (data && data.length > 0) setProjects(data.map(sanityToProject));
    }).catch(() => {});
  }, []);

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-14 sm:py-20 relative overflow-hidden">

      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-600/10 blur-[100px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '-5s' }} />

      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="font-aston text-white text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight">
          CASOS DE ÉXITO
        </h2>
        <p className="font-montserrat italic font-light text-zinc-300 text-base md:text-xl">
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
          depth: 120,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="projects-swiper !pb-16 pt-[1.6rem]"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="max-w-[850px] w-[90%] opacity-30 transition-opacity duration-500 [&.swiper-slide-active]:opacity-100">
            <div
              className="glass-card group relative flex flex-row overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl transition-all duration-500 h-[400px]"
              style={{
                //@ts-ignore
                '--brand-color': project.color,
                '--brand-glow': project.glow
              }}
            >
              <div className="w-full sm:w-3/5 p-6 md:p-10 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 md:h-20 flex items-center">
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="h-full w-auto object-contain brightness-0 invert"
                    />
                  </div>
                  <img
                    src={metaLogo}
                    alt="Meta Business"
                    className="h-6 md:h-8 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>

                <div className="mb-4">
                  <p className="text-[12px] font-bold tracking-[0.3em] uppercase mb-1 text-zinc-500">Tráfico Total</p>
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter" style={{ color: project.color }}>
                    {project.traffic}
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 md:p-4 transition-all group-hover:bg-white/[0.05]">
                    <p className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase mb-1">Alcance</p>
                    <span className="text-lg md:text-2xl font-bold text-white">{project.accounts}</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 md:p-4 transition-all group-hover:bg-white/[0.05]">
                    <p className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase mb-1">Convers.</p>
                    <span className="text-lg md:text-2xl font-bold text-white">{project.conversations}</span>
                  </div>
                  <div
                    className="bg-white/[0.02] border border-white/5 rounded-xl p-3 md:p-4 transition-all group-hover:bg-white/[0.05]"
                    style={{ borderColor: `${project.color}44` }}
                  >
                    <p className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase mb-1">Interacc.</p>
                    <span className="text-lg md:text-2xl font-bold" style={{ color: project.color }}>
                      {project.interactions}
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block sm:w-2/5 relative overflow-hidden bg-zinc-900 border-l border-white/5">
                <img
                  src={project.cardImg}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProjectResults;
