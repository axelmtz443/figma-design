import { useState, useCallback } from 'react';
import ServiceCard from './ServiceCard';
import { useNavigate } from 'react-router-dom';
import { Video } from 'lucide-react';

import SearchIcon from '../../images/servicesImages/Search.png';
import FingerprintIcon from '../../images/servicesImages/FINGERPRINT.png';
import MegaphoneIcon from '../../images/servicesImages/Megaphone.png';
import PeopleTableIcon from '../../images/servicesImages/PeopleTable.png';

function Services() {
  const navigate = useNavigate();
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  const handleToggle = useCallback((title: string) => {
    setOpenTitle(prev => prev === title ? null : title);
  }, []);

  const services = [
    {
      icon: MegaphoneIcon,
      title: 'Marketing digital',
      path: '/servicios/marketing-digital',
      description: 'Diseñamos estrategias digitales enfocadas en resultados; integramos pauta, contenido y analítica para maximizar la inversión.',
    },
    {
      icon: FingerprintIcon,
      title: 'Professional Branding',
      path: '/servicios/branding',
      description: 'Construimos marcas profesionales, coherentes y memorables, definiendo un posicionamiento y presencia visual que conecte.',
    },
    {
      icon: Video,
      title: 'Producción Audiovisual',
      path: '/servicios/audiovisual',
      description: 'Potenciamos la narrativa de tu marca con estándares cinematográficos; conceptualizamos, filmamos y editamos piezas de alta fidelidad.',
    },
    {
      icon: PeopleTableIcon,
      title: 'Consultoría en Marketing',
      path: '/servicios/consultoriademarketing',
      description: 'Acompañamos a tu empresa con una visión estratégica integral; diagnosticamos y estructuramos planes alineados a tus objetivos.',
    },
    {
      icon: SearchIcon,
      title: 'Investigación de Mercados',
      path: '/servicios/investigacion-de-mercados',
      description: 'Tomamos decisiones con base en datos, consumidores y competencia para identificar oportunidades reales y ventajas.',
    }
  ];

  const colors: ('red' | 'blue' | 'green' | 'yellow' | 'blue')[] = ['red', 'blue', 'green', 'yellow', 'blue'];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="font-aston text-[40px] md:text-[60px] text-white leading-tight mb-4">
          Nuestros Servicios
        </h2>
        <p className="font-montserrat font-light text-white/70 text-[18px] md:text-[24px] max-w-3xl mx-auto">
          Soluciones estratégicas para el posicionamiento de tu marca.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-start">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            blurColor={colors[index]}
            isOpen={openTitle === service.title}
            onToggle={() => handleToggle(service.title)}
            onLearnMore={() => navigate(service.path)}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
