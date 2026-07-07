import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';
import { getTeamMembers, TeamMember } from '../../lib/sanityQueries';
import { urlFor } from '../../lib/sanityImage';
import { useContactPopup } from '../../context/ContactPopupContext';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

function TeamCard({ member, onClick }: { member: TeamMember; onClick: () => void }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group" onClick={onClick}>
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
        <img
          src={urlFor(member.photo)}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white font-montserrat font-semibold text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/40 rounded-full px-4 py-1.5">
            Ver más
          </span>
        </div>
      </div>
      <p className="mt-3 font-montserrat font-bold text-white text-[15px] sm:text-[16px] text-center leading-tight">
        {member.name}
      </p>
      <p className="font-montserrat text-white/50 text-[12px] text-center mt-0.5">
        {member.role}
      </p>
    </div>
  );
}

function TeamMemberModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  const { openPopup } = useContactPopup();

  const handleContact = () => {
    onClose();
    openPopup(`Contacto para ${member.name}`);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-neutral-950 border border-white/10 rounded-3xl overflow-y-auto shadow-2xl flex flex-col sm:flex-row">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full sm:w-5/12 flex-shrink-0 flex items-center justify-center p-6 sm:p-8">
          <img
            src={urlFor(member.photo)}
            alt={member.name}
            className="max-w-full max-h-[400px] sm:max-h-[500px] w-auto h-auto object-contain rounded-lg"
          />
        </div>

        <div className="flex-1 p-6 sm:p-8 flex flex-col gap-4">
          <div>
            <h3 className="font-montserrat font-bold text-white text-xl sm:text-2xl leading-tight">{member.name}</h3>
            <p className="font-montserrat font-semibold text-[#3B82F6] text-sm sm:text-base mt-1">{member.role}</p>
          </div>

          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="font-montserrat text-white/60 hover:text-white text-sm flex items-center gap-2 transition-colors w-fit"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {member.email}
            </a>
          )}

          {member.description && (
            <p className="font-montserrat text-white/70 text-sm leading-relaxed">{member.description}</p>
          )}

          <button
            onClick={handleContact}
            className="mt-auto self-start px-6 py-2.5 rounded-full bg-[#3B82F6] hover:bg-[#2563eb] text-white font-montserrat font-semibold text-sm transition-colors"
          >
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    getTeamMembers().then(setTeam).catch(() => {});
  }, []);

  if (team.length === 0) return null;

  return (
    <section className="w-full py-20 sm:py-28 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2
            className="font-montserrat text-[38px] sm:text-[54px] font-bold leading-tight tracking-tight"
            style={{ color: '#fff' }}
          >
            Nuestro <span style={{ color: '#3B82F6' }}>Equipo</span>
          </h2>
          <p
            className="font-aston mt-4 text-[20px] sm:text-[21px] max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
          >
            Diferentes talentos, un mismo ADN:<br />
            Colaborar en proyectos que generen impacto real.
          </p>
        </div>

        <div className="relative px-10 sm:px-14">
          <button
            ref={prevRef}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            ref={nextRef}
            aria-label="Siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Autoplay, EffectCoverflow, Navigation]}
            onSwiper={(s) => { swiperRef.current = s; }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            effect="coverflow"
            centeredSlides={true}
            slideToClickedSlide={true}
            initialSlide={0}
            loop={team.length > 5}
            slidesPerView={1}
            spaceBetween={30}
            speed={700}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 150, modifier: 1.5, slideShadows: false }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="!pb-2"
          >
            {team.map((member) => (
              <SwiperSlide key={member._id} className="!h-auto">
                <TeamCard member={member} onClick={() => setSelected(member)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {selected && <TeamMemberModal member={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
