import { useState, useRef, useEffect } from 'react';

import ale            from '../../images/About/team/Ale.png';
import alejandroV     from '../../images/About/team/Alejandro Villamar.png';
import alexLarios     from '../../images/About/team/Alex Larios.png';
import alexia         from '../../images/About/team/alexia.png';
import andres         from '../../images/About/team/andres.png';
import angelica       from '../../images/About/team/angelica.png';
import aranzaGonzalez from '../../images/About/team/Aranza Gonzalez.png';
import axelMartinez   from '../../images/About/team/Axel Martinez.png';
import cantu          from '../../images/About/team/cantu.png';
import cecilia        from '../../images/About/team/cecilia.png';
import diego          from '../../images/About/team/diego.png';
import emiliaLopez    from '../../images/About/team/Emilia López.png';
import guadalupe      from '../../images/About/team/guadalupemonroy.png';
import hansValencia   from '../../images/About/team/Hans Valencia.png';
import jean           from '../../images/About/team/jean.png';
import jessicaZamora  from '../../images/About/team/Jessica Zamora.png';
import jesusAlmanza   from '../../images/About/team/jesusalmanza.png';
import jorgeVelazco   from '../../images/About/team/jorgevelazco.png';
import joseCarlos     from '../../images/About/team/josecarlos.png';
import joseEduardo    from '../../images/About/team/joseeduardo.png';
import juanCarlos     from '../../images/About/team/JUANCARLOS.png';
import juanCarlosVsr  from '../../images/About/team/juancarlosvsr.png';
import juanJose       from '../../images/About/team/juanjose.png';
import kamiDir        from '../../images/About/team/Kami Directorio Ejecutivo_.png';
import karen          from '../../images/About/team/karen.png';
import karlaPaola     from '../../images/About/team/karlapaola.png';
import luisEnrique1   from '../../images/About/team/Luis Enrique.png';
import luisNava       from '../../images/About/team/Luis Nava.png';
import luisEnrique2   from '../../images/About/team/luisenrique.png';
import luisGerardo    from '../../images/About/team/Luisgerardo.png';
import luisRojas      from '../../images/About/team/luisrojas.png';
import mario          from '../../images/About/team/mario.png';
import melissaPerez   from '../../images/About/team/Melissa Pérez.png';
import mike           from '../../images/About/team/mike.png';
import missael        from '../../images/About/team/missael.png';
import natalia        from '../../images/About/team/natalia.png';
import paola          from '../../images/About/team/paola.png';
import ricardoSainz   from '../../images/About/team/ricardosainz.png';
import santiago       from '../../images/About/team/santiago.png';
import stefania       from '../../images/About/team/stefania.png';
import veronica       from '../../images/About/team/veronica.png';
import vicenteMeza    from '../../images/About/team/Vicente Meza.png';

const team = [
  { id: 1,  name: 'Juan Carlos Ventura Michel',    role: 'Director General',                        image: juanCarlos },
  { id: 2,  name: 'José Miguel Ventura Michel',    role: 'Director Asociado de Operaciones',        image: juanCarlosVsr },
  { id: 3,  name: 'Axel Martínez',                 role: 'Asociado Jr.',                            image: axelMartinez },
  { id: 4,  name: 'Kamila Gutiérrez',              role: 'Project Manager',                         image: kamiDir },
  { id: 5,  name: 'Paola Rodríguez Sotomayor',     role: 'Coordinadora de Mercadotecnia',           image: paola },
  { id: 6,  name: 'Aranza González',               role: 'Asistente de Marketing',                  image: aranzaGonzalez },
  { id: 7,  name: 'Alex Larios',                   role: 'Asistente de Dirección',                  image: alexLarios },
  { id: 8,  name: 'Jessica Zamora',                role: 'Asistente Administrativa',                image: jessicaZamora },
  { id: 9,  name: 'Emilia López',                  role: 'Relaciones Públicas y Alianzas',          image: emiliaLopez },
  { id: 10, name: 'Juan Carlos Ventura',           role: 'Consultor y Asesor General del Despacho', image: ale },
  { id: 11, name: 'Karen Michelle Ventura-Michel', role: 'Directora del Área de Liderazgo',         image: karen },
  { id: 12, name: 'Luis Enrique Ortiz-Monasterio', role: 'Desarrollador Web Asociado',              image: luisEnrique1 },
  { id: 13, name: 'Mariana Martínez',              role: 'Directora Asociada de Branding',          image: andres },
  { id: 14, name: 'Luis Rojas Guerrero',           role: 'Consultor Creativo Sr.',                  image: luisRojas },
  { id: 15, name: 'Santiago Mendoza López',        role: 'Creador de Contenido Sr.',                image: santiago },
  { id: 16, name: 'Natalia Ayala España',          role: 'Coordinadora de Campañas Digitales',      image: natalia },
  { id: 17, name: 'Missael Mireles Silva',         role: 'Copywriter',                              image: missael },
  { id: 18, name: 'Mario Arvizu',                  role: 'Productor Audiovisual',                   image: mario },
  { id: 19, name: 'José Eduardo Gómez',            role: 'Productor Audiovisual',                   image: joseEduardo },
  { id: 20, name: 'Diego Arghe Barranco Mora',     role: 'Analista de Mercados',                    image: diego },
  { id: 21, name: 'Juan Pablo Cantú',              role: 'Especialista en Campañas Digitales',      image: cantu },
  { id: 22, name: 'Melissa',                       role: 'Diseñadora',                              image: melissaPerez },
  { id: 23, name: 'Stefanía Díaz Chávez',          role: 'Project Manager',                         image: stefania },
  { id: 24, name: 'Cecilia Hernández',             role: 'Creativa Publicitaria Jr.',               image: cecilia },
  { id: 25, name: 'Karla Paola Martínez',          role: 'Copywriter',                              image: karlaPaola },
  { id: 26, name: 'Vicente Meza Gutiérrez',        role: 'Analista Gerontológico',                  image: vicenteMeza },
  { id: 27, name: 'Hans Valencia',                 role: 'Perito Arquitecto',                       image: hansValencia },
  { id: 28, name: 'Jean Lachapelle',               role: 'Relaciones Públicas y Alianzas',          image: jean },
  { id: 29, name: 'Juan José Barrios',             role: 'Creador de Contenido Sr.',                image: juanJose },
  { id: 30, name: 'Ricardo Sainz Venegas',         role: 'Analista de Mercados',                    image: ricardoSainz },
  { id: 31, name: 'Verónica Gómez Castañeda',      role: 'Directora de Investigación de Mercados',  image: veronica },
  { id: 32, name: 'Luis Nava Villaseñor',          role: 'Creativo Publicitario Sr.',               image: luisNava },
  { id: 33, name: 'Diego Hernández',               role: 'Consultor Sr. en Marketing Digital',      image: jorgeVelazco },
  { id: 34, name: 'Federico Alejandro Villamar',   role: 'Analista',                                image: alejandroV },
  { id: 35, name: 'Alexia',                        role: 'Encuestadora',                            image: alexia },
  { id: 36, name: 'Andrés',                        role: 'Encuestador',                             image: luisEnrique2 },
  { id: 37, name: 'Angélica',                      role: 'Encuestadora',                            image: angelica },
  { id: 38, name: 'Guadalupe Monroy',              role: 'Gerente de Ventas',                       image: guadalupe },
  { id: 39, name: 'Luis Gerardo',                  role: 'Encuestador',                             image: luisGerardo },
  { id: 40, name: 'Mike',                          role: 'Encuestador',                             image: mike },
  { id: 41, name: 'Jesús Almanza',                 role: 'Encuestador',                             image: jesusAlmanza },
  { id: 42, name: 'José Carlos',                   role: 'Encuestador',                             image: joseCarlos },
];

const STYLES = `
  @keyframes arc-spin-cw {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes arc-spin-ccw {
    from { transform: rotate(180deg); }
    to   { transform: rotate(540deg); }
  }
  @keyframes ring-draw {
    from { stroke-dashoffset: 553; }
    to   { stroke-dashoffset: 0; }
  }
  .arc-cw {
    transform-origin: 96px 96px;
    animation: arc-spin-cw 5s linear infinite;
  }
  .arc-ccw {
    transform-origin: 96px 96px;
    animation: arc-spin-ccw 5s linear infinite;
  }
  .ring-draw-anim {
    animation: ring-draw 0.45s ease forwards;
  }
`;

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  const tag = document.createElement('style');
  tag.textContent = STYLES;
  document.head.appendChild(tag);
  stylesInjected = true;
}

function AnimatedRings({ active }: { active: boolean }) {
  useEffect(() => { injectStyles(); }, []);

  const r    = 88;
  const cx   = 96;
  const cy   = 96;
  const circ = 2 * Math.PI * r;
  const arcLen = circ * 0.30;
  const gap    = circ - arcLen;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 192 192"
      fill="none"
    >
      <circle
        cx={cx} cy={cy} r={r}
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={`${arcLen} ${gap}`}
        className="arc-cw"
        style={{ opacity: active ? 0 : 1, transition: 'opacity 0.15s ease' }}
      />
      <circle
        cx={cx} cy={cy} r={r}
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={`${arcLen} ${gap}`}
        className="arc-ccw"
        style={{ opacity: active ? 0 : 1, transition: 'opacity 0.15s ease' }}
      />
      {active && (
        <circle
          key="ring-active"
          cx={cx} cy={cy} r={r}
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={circ}
          className="ring-draw-anim"
          style={{ filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.8))' }}
        />
      )}
    </svg>
  );
}

function TeamCard({
  name,
  role,
  image,
  isActive,
  onClick,
  cardSize,
}: {
  name: string;
  role: string;
  image: string;
  isActive: boolean;
  onClick: () => void;
  cardSize: number;
}) {
  const innerSize = cardSize - 32;

  return (
    <div
      className="flex-shrink-0 flex flex-col items-center cursor-pointer select-none"
      style={{ width: cardSize }}
      onClick={onClick}
    >
      <div className="relative" style={{ width: cardSize, height: cardSize }}>
        <AnimatedRings active={isActive} />

        <div
          className="absolute overflow-hidden"
          style={{
            top: 16,
            left: 16,
            width: innerSize,
            height: innerSize,
            borderRadius: '50%',
          }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
            style={{
              filter: isActive
                ? 'grayscale(100%) brightness(0.22)'
                : 'grayscale(100%)',
              transition: 'filter 0.4s ease',
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'rgba(0,5,20,0.6)',
              opacity: isActive ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />

          <div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            style={{
              padding: '0 8px',
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.35s ease 0.12s, transform 0.35s ease 0.12s',
            }}
          >
            <p
              style={{
                color: '#60A5FA',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: cardSize < 160 ? 9 : 12,
                fontWeight: 700,
                textAlign: 'center',
                lineHeight: 1.35,
              }}
            >
              {name}
            </p>
            <div
              style={{
                width: 20,
                height: 1.5,
                background: '#3B82F6',
                margin: '4px auto',
                borderRadius: 99,
                opacity: 0.8,
              }}
            />
            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: cardSize < 160 ? 8 : 10.5,
                textAlign: 'center',
                lineHeight: 1.4,
              }}
            >
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [cardSize, setCardSize] = useState(192);
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number | null>(null);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 480) setCardSize(120);
      else if (width < 768) setCardSize(140);
      else setCardSize(192);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    let lastTime = 0;
    const SPEED  = 0.8;
    const step = (now: number) => {
      const dt = now - lastTime;
      lastTime  = now;
      const el  = trackRef.current;
      if (el) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += SPEED * (dt / 16.67);
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const isDragging  = useRef(false);
  const startX      = useRef(0);
  const scrollStart = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current     = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollStart.current - (x - startX.current);
  };
  const onMouseUp = () => { isDragging.current = false; };

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current      = e.touches[0].pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollStart.current - (x - startX.current);
  };

  return (
    <section className="w-full overflow-x-hidden py-10 sm:py-20 md:py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">

        <div className="text-center mb-8 sm:mb-14">
          <h2
            className="font-montserrat text-[26px] sm:text-[42px] md:text-[54px] font-bold leading-tight tracking-tight text-white"
          >
            Nuestro <span style={{ color: '#3B82F6' }}>Equipo</span>
          </h2>
          <p
            className="font-aston mt-2 sm:mt-4 text-[14px] sm:text-[19px] md:text-[21px] max-w-xl mx-auto px-4"
            style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
          >
            Diferentes talentos, un mismo ADN:<br />
            Colaborar en proyectos que generen impacto real.
          </p>
        </div>

        <div
          ref={trackRef}
          className="flex gap-3 sm:gap-6 pb-2 overflow-x-auto"
          style={{
            cursor: isDragging.current ? 'grabbing' : 'grab',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          <div className="flex-shrink-0" style={{ width: 8 }} />
          {team.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              isActive={activeId === member.id}
              cardSize={cardSize}
              onClick={() => setActiveId((prev) => prev === member.id ? null : member.id)}
            />
          ))}
          <div className="flex-shrink-0" style={{ width: 8 }} />
        </div>

      </div>
    </section>
  );
}