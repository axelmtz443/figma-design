import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X, Image as ImageIcon, Sparkles } from 'lucide-react';
import { getSuccessStories, SuccessStory } from '../../../lib/sanityQueries';
import { urlFor } from '../../../lib/sanityImage';

const customStyles = `
  @import url('https://fonts.cdnfonts.com/css/astonpoliz');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  .font-astonpoliz {
    font-family: 'Astonpoliz', 'Playfair Display', 'Georgia', serif;
    letter-spacing: 0.05em;
  }

  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
`;

interface FallbackImages {
  cover: string;
  expanded1: string;
  expanded2: string;
}

interface PortfolioItem {
  id: number;
  client: string;
  service: string;
  logo: string;
  coverImage: string;
  expandedImage1: string;
  expandedImage2: string;
  size: string;
  color: string;
  description: string;
  fallbackImages: FallbackImages;
}

interface SafeLogoProps {
  src: string;
  client: string;
  color: string;
  className?: string;
}

type ImageErrors = Record<string, boolean>;

function sanityToPortfolio(s: SuccessStory, idx: number): PortfolioItem {
  return {
    id: idx + 1,
    client: s.client,
    service: s.service,
    description: s.description,
    logo: urlFor(s.logo),
    coverImage: urlFor(s.coverImage),
    expandedImage1: urlFor(s.expandedImage1),
    expandedImage2: urlFor(s.expandedImage2),
    color: s.color,
    size: s.gridSize || 'md:col-span-1 md:row-span-1',
    fallbackImages: { cover: '', expanded1: '', expanded2: '' },
  };
}

const FALLBACK_PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    client: "Mercedes-Benz EQ",
    service: "Campaña Creativa",
    logo: "www.grupoweprom.com/portafolio_branding/LOGO_MERCEDES.png",
    coverImage: "www.grupoweprom.com/portafolio_branding/Portada_Mercedes.png",
    expandedImage1: "www.grupoweprom.com/portafolio_branding/1eurostern.png",
    expandedImage2: "www.grupoweprom.com/portafolio_branding/2Mercedes.png",
    size: "md:col-span-2 md:row-span-2",
    color: "#80b67d",
    description: "Desarrollo conceptual y ejecución de la campaña creativa 'La Máquina Del tiempo' para la división de movilidad eléctrica de lujo Mercedes-Benz EQ. Diseñamos los activos visuales y la estrategia de localización para adaptar los pilares globales de innovación y sustentabilidad al mercado local, generando una narrativa de alto impacto.",
    fallbackImages: {
      cover: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
      expanded1: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000",
      expanded2: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000",
    },
  },
  {
    id: 2,
    client: "Casa Sok",
    service: "Branding & Estrategia",
    logo: "www.grupoweprom.com/portafolio_branding/LOGO_CASASOK.png",
    coverImage: "www.grupoweprom.com/portafolio_branding/portada_casasok.png",
    expandedImage1: "www.grupoweprom.com/portafolio_branding/1casasok.png",
    expandedImage2: "www.grupoweprom.com/portafolio_branding/2casasok.png",
    size: "md:col-span-1 md:row-span-1",
    color: "#c5362e",
    description: "Estructuración de la estrategia de marca y branding integral para Casa Sok, una propuesta disruptiva en el sector de heladerías artesanales. Creamos una identidad visual sólida, sofisticada y memorable que conecta la tradición chiapaneca y sus ingredientes locales con una experiencia de consumo contemporánea y personalizada.",
    fallbackImages: {
      cover: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=1000",
      expanded1: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=1000",
      expanded2: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=1000",
    },
  },
  {
    id: 3,
    client: "AltoCanto",
    service: "Diseño de Espacio Comercial",
    logo: "www.grupoweprom.com/portafolio_branding/LOGO_ALTOCANTO.png",
    coverImage: "www.grupoweprom.com/portafolio_branding/PORTADA_ALTOCANTO.jpeg",
    expandedImage1: "www.grupoweprom.com/portafolio_branding/PORTADA_ALTOCANTO.jpeg",
    expandedImage2: "www.grupoweprom.com/portafolio_branding/2ALTOCANTO.webp",
    size: "md:col-span-1 md:row-span-2",
    color: "#8b5cf6",
    description: "Diseño conceptual y arquitectura efímera para el stand de punto de contacto (PDC) premium de AltoCanto. Tradujimos la narrativa visual de esta firma de tequila artesanal en una experiencia física inmersiva que refleja el misticismo del terroir, la herencia familiar y la pureza del agave orgánico.",
    fallbackImages: {
      cover: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000",
      expanded1: "https://images.unsplash.com/photo-1608885898957-a599fb18ec3f?auto=format&fit=crop&q=80&w=1000",
      expanded2: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=1000",
    },
  },
  {
    id: 4,
    client: "Agua Caliente",
    service: "Rebranding",
    logo: "https://aguacaliente.com.mx/wp-content/uploads/2022/02/LOGOAGUACALIENTEBLANCO-1.png",
    coverImage: "www.grupoweprom.com/portafolio_branding/PORTADA_AGUACALIENTE.png",
    expandedImage1: "www.grupoweprom.com/portafolio_branding/2AguaCaliente.png",
    expandedImage2: "www.grupoweprom.com/portafolio_branding/1AguaCaliente.png",
    size: "md:col-span-1 md:row-span-1",
    color: "#e6af41",
    description: "Rebranding estratégico para Agua Caliente, un parque acuático y balneario termal de gran tradición en Villa Corona, Jalisco. Redefinimos por completo el concepto del logotipo y refrescamos el sistema de comunicación institucional, logrando modernizar su identidad visual para conectar de forma efectiva con las nuevas generaciones de turismo familiar.",
    fallbackImages: {
      cover: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=1000",
      expanded1: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1000",
      expanded2: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=1000",
    },
  },
  {
    id: 5,
    client: "Aldora",
    service: "ADN de Marca & Branding",
    logo: "www.grupoweprom.com/portafolio_branding/LOGO_ALDORA.png",
    coverImage: "www.grupoweprom.com/portafolio_branding/PORTADA_ALDORA.jpg",
    expandedImage1: "www.grupoweprom.com/portafolio_branding/1Aldora.png",
    expandedImage2: "www.grupoweprom.com/portafolio_branding/2Aldora.jpeg",
    size: "md:col-span-4 md:row-span-3",
    color: "#599ddf",
    description: "Estructuración integral del ADN de marca, propósito y estrategia de identidad visual para Aldora, firma especializada en refrigeración, climatización y cocción comercial. Desarrollamos una narrativa institucional basada en el compromiso postventa y el respaldo técnico humano, transformando un servicio operativo en una propuesta de valor enfocada en la continuidad y la confianza a largo plazo.",
    fallbackImages: {
      cover: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?auto=format&fit=crop&q=80&w=1200",
      expanded1: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&q=80&w=1000",
      expanded2: "https://images.unsplash.com/photo-1501162561295-3343360b0942?auto=format&fit=crop&q=80&w=1000",
    },
  },
];

const resolveImagePath = (url: string): string | null => {
  if (!url) return null;
  if (url.startsWith('www.')) return `https://${url}`;
  return url;
};

function SafeLogo({ src, client, color, className = 'h-12' }: SafeLogoProps) {
  const [hasError, setHasError] = useState(false);
  const cleanSrc = resolveImagePath(src);

  if (hasError || !cleanSrc) {
    return (
      <div className={`flex items-center gap-2 select-none ${className}`}>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/20"
          style={{ backgroundColor: `${color}15` }}
        >
          <Sparkles size={16} style={{ color }} />
        </div>
        <span className="font-astonpoliz text-lg font-bold tracking-wider text-white">
          {client}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-start ${className}`}>
      <img
        src={cleanSrc}
        alt={`Logo ${client}`}
        className="max-h-full max-w-[240px] w-auto h-auto object-contain object-left filter drop-shadow-md"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export default function SuccessStories() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(FALLBACK_PORTFOLIO);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<ImageErrors>({});

  useEffect(() => {
    getSuccessStories().then(data => {
      if (data && data.length > 0) setPortfolioItems(data.map(sanityToPortfolio));
    }).catch(() => {});
  }, []);

  const handleImageError = (itemId: number, type: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [`${itemId}_${type}`]: true,
    }));
  };

  return (
    <div className="min-h-screen bg-transparent text-white font-montserrat flex flex-col items-center p-3 sm:p-5 md:p-8 relative overflow-hidden py-10 sm:py-14 md:py-20">
      <div className="w-full max-w-7xl mx-auto z-10 flex flex-col items-center">

        {/* Encabezado */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col items-center text-center w-full px-2">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-5 sm:w-6 h-[2px] bg-[#e6af41]" />
            <span className="text-[#e6af41] font-semibold tracking-wider text-[10px] sm:text-xs md:text-sm uppercase">
              Casos de Éxito
            </span>
            <div className="w-5 sm:w-6 h-[2px] bg-[#e6af41]" />
          </div>
          <h2 className="font-astonpoliz text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Marcas que dejan huella
          </h2>
          <p className="text-zinc-400 font-light text-xs sm:text-sm md:text-base max-w-xs sm:max-w-lg md:max-w-2xl">
            Explora una selección de nuestros mejores proyectos de identidad y estrategia. Creemos que cada marca tiene una historia única que merece ser contada con un diseño excepcional.
          </p>
        </div>

        {/*
          Grid Bento:
          - Mobile (< md): una columna, cards apiladas con altura fija
          - Tablet (md): grid de 4 col con row heights fijas — igual que el original
          - Los items con size "md:col-span-4" ocupan ancho completo en tablet+
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-[240px_240px_140px] gap-3 sm:gap-4 h-auto md:h-[650px] w-full relative">
          {portfolioItems.map((item) => {
            const isExpanded = expandedId === item.id;
            const isHidden = expandedId !== null && !isExpanded;

            if (isHidden) return null;

            const coverErrorKey = `${item.id}_cover`;
            const displayCover =
              imageErrors[coverErrorKey] || !item.coverImage
                ? item.fallbackImages.cover
                : resolveImagePath(item.coverImage);

            return (
              <div
                key={item.id}
                onClick={() => !isExpanded && setExpandedId(item.id)}
                className={`group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 transition-all duration-700 ease-in-out ${
                  isExpanded
                    ? 'col-span-1 sm:col-span-2 md:col-span-4 row-span-1 md:row-span-3 cursor-default z-20 min-h-[620px] sm:min-h-[680px] md:h-full md:min-h-0'
                    : `${item.size} h-44 sm:h-52 md:h-auto cursor-pointer z-10 hover:shadow-2xl`
                }`}
              >
                {/* Vista normal */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  {displayCover && (
                    <img
                      src={displayCover}
                      alt={item.client}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-70 group-hover:opacity-90"
                      onError={() => handleImageError(item.id, 'cover')}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                  <div className={`absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end ${item.id === 5 ? 'md:justify-center' : ''}`}>
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 w-full">
                      <div className={`flex ${item.id === 5 ? 'md:flex-row md:items-center md:justify-between' : 'flex-col'} gap-3 sm:gap-4`}>
                        <div className="flex-1">
                          <div className="mb-2 sm:mb-3 h-7 sm:h-8 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                            <SafeLogo src={item.logo} client={item.client} color={item.color} className="h-full" />
                          </div>
                          <div
                            className="w-8 h-[2px] mb-2 transition-all duration-500 w-0 group-hover:w-8"
                            style={{ backgroundColor: item.color }}
                          />
                          <span
                            className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                            style={{ color: item.color }}
                          >
                            {item.service}
                          </span>
                          <h3 className="font-astonpoliz text-lg sm:text-2xl md:text-3xl text-white drop-shadow-lg">
                            {item.client}
                          </h3>
                        </div>
                        <div className="flex items-center justify-end">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45 hover:bg-white/20 flex-shrink-0">
                            <ArrowUpRight size={18} className="text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vista expandida */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 flex flex-col md:flex-row bg-[#0c0c0c] ${
                    isExpanded ? 'opacity-100 delay-150' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedId(null);
                    }}
                    className="absolute top-3 right-3 sm:top-5 sm:right-5 md:top-8 md:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 z-30"
                  >
                    <X size={20} />
                  </button>

                  {/* Panel izquierdo */}
                  <div className="w-full md:w-5/12 p-6 sm:p-8 md:p-14 flex flex-col justify-center relative z-10 max-h-[55vw] sm:max-h-none md:max-h-none md:h-full overflow-y-auto border-b md:border-b-0 md:border-r border-white/5">
                    <div className="h-12 sm:h-16 md:h-20 flex items-center mb-5 sm:mb-8 flex-shrink-0">
                      <SafeLogo src={item.logo} client={item.client} color={item.color} className="h-full" />
                    </div>
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-6 sm:w-8 h-[2px]" style={{ backgroundColor: item.color }} />
                      <span className="font-semibold tracking-wider text-[10px] sm:text-xs md:text-sm uppercase" style={{ color: item.color }}>
                        {item.service}
                      </span>
                    </div>
                    <h3 className="font-astonpoliz text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
                      {item.client}
                    </h3>
                    <p className="text-zinc-300 font-light text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Panel derecho */}
                  <div className="w-full md:w-7/12 p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row gap-3 sm:gap-4 flex-1 md:h-full bg-zinc-950/40">
                    {(() => {
                      const exp1ErrorKey = `${item.id}_exp1`;
                      const displayExp1 =
                        imageErrors[exp1ErrorKey] || !item.expandedImage1
                          ? item.fallbackImages.expanded1
                          : resolveImagePath(item.expandedImage1);

                      return (
                        <div className="w-full sm:w-1/2 min-h-[140px] sm:h-full rounded-xl overflow-hidden relative border border-white/5 bg-zinc-900/60 flex items-center justify-center">
                          {displayExp1 ? (
                            <img
                              src={displayExp1}
                              alt={`${item.client} - Identidad Visual`}
                              className="absolute inset-0 w-full h-full object-cover"
                              onError={() => handleImageError(item.id, 'exp1')}
                            />
                          ) : (
                            <div className="flex flex-col items-center text-center p-4 sm:p-6 gap-3">
                              <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-white/10"
                                style={{ backgroundColor: `${item.color}10` }}
                              >
                                <ImageIcon size={20} style={{ color: item.color }} />
                              </div>
                              <div>
                                <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-zinc-400 uppercase">Fotografía Principal</p>
                                <p className="text-[9px] sm:text-[10px] text-zinc-500 mt-1">Diseño de Identidad / Concepto</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })()}

                    {(() => {
                      const exp2ErrorKey = `${item.id}_exp2`;
                      const displayExp2 =
                        imageErrors[exp2ErrorKey] || !item.expandedImage2
                          ? item.fallbackImages.expanded2
                          : resolveImagePath(item.expandedImage2);

                      return (
                        <div className="w-full sm:w-1/2 min-h-[140px] sm:h-full rounded-xl overflow-hidden relative border border-white/5 bg-zinc-900/60 flex items-center justify-center">
                          {displayExp2 ? (
                            <img
                              src={displayExp2}
                              alt={`${item.client} - Aplicación`}
                              className="absolute inset-0 w-full h-full object-cover"
                              onError={() => handleImageError(item.id, 'exp2')}
                            />
                          ) : (
                            <div className="flex flex-col items-center text-center p-4 sm:p-6 gap-3">
                              <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-white/10"
                                style={{ backgroundColor: `${item.color}10` }}
                              >
                                <Sparkles size={20} style={{ color: item.color }} />
                              </div>
                              <div>
                                <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-zinc-400 uppercase">Aplicación de Marca</p>
                                <p className="text-[9px] sm:text-[10px] text-zinc-500 mt-1">Diseño de Packaging / Editorial</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 md:mt-16 flex justify-center z-10 w-full px-4">
          <Link
            to="/portafolio"
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-7 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-[#e6af41] text-[#e6af41] font-semibold tracking-wider uppercase text-[10px] sm:text-xs md:text-sm rounded-full overflow-hidden transition-all duration-300 hover:bg-[#e6af41] hover:text-black hover:shadow-[0_0_30px_rgba(230,175,65,0.35)] w-full sm:w-auto justify-center"
          >
            <span>Ver portafolio completo</span>
            <ArrowUpRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}