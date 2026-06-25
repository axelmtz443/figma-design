import { useState, useEffect, useRef } from 'react';
import LogoWeProm from '../../images/OFICIALLOGO.png';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function Navbar() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();


  const navLinks = [
    { label: "Inicio", path: "/" },
    { label: "Nosotros", path: "/nosotros" },
    {
      label: "Servicios",
      path: "/servicios",
      isDropdown: true,
      subServices: [
        { label: "Marketing Digital", path: "/servicios/marketing-digital" },
        { label: "Professional Branding", path: "/servicios/branding" },
        { label: "Producción Audiovisual", path: "/servicios/audiovisual" },
        { label: "Consultoria en Marketing", path: "/servicios/consultoriademarketing" },
        { label: "Investigación de Mercados", path: "/servicios/investigacion-de-mercados" },
      ]
    },
    {
      label: "Portafolio",
      path: "/portafolio",
      isDropdown: true,
      subServices: [
        { label: "Investigación de Mercados", path: "/portafolio/investigacion-de-mercado" },
        { label: "Marketing Digital", path: "/portafolio/marketing-digital" },
        { label: "Branding", path: "/portafolio/branding" },
      ]
    },
    { label: "Blog", path: "/blog" },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  // Cerrar al click fuera
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Bloquear scroll cuando está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-center pt-6 px-4 sm:px-6 overflow-visible z-50">

        
        {/* Efecto de luz Premium */}
        <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none overflow-hidden h-[500px] -z-10">
          <div 
            className="absolute opacity-30 mix-blend-screen"
            style={{ 
              width: '1500px', 
              height: '600px', 
              top: '-250px', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)', 
              filter: 'blur(70px)' 
            }} 
          />
          <div 
            className="absolute opacity-30 mix-blend-screen"
            style={{ 
              width: '1000px', 
              height: '300px', 
              top: '-180px', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)', 
              filter: 'blur(40px)' 
            }} 
          />
        </div>


        <div ref={menuRef} className="w-full max-w-[962px]">
          {/* Barra principal - Eliminado width: '962px' fijo */}
          <nav className="flex items-center justify-between bg-white/[0.03] border border-white/[0.08] backdrop-blur-[20px] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] rounded-[20px] px-6 sm:px-8 h-[58px] w-full transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05]"
          >
            {/* Un sutil brillo interno en la parte superior para simular relieve */}
            <div className="absolute inset-0 rounded-[20px] pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />
                      
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src={LogoWeProm} alt="WeProm Logo" className="h-[2.3rem] sm:h-[2.2rem] w-auto" />
            </Link>

            {/* Links desktop */}
            <div className="hidden md:flex items-center gap-4 lg:gap-10">
              {navLinks.map((link) => (
                <div 
                  key={link.label} 
                  className="relative group"
                  onMouseEnter={() => link.isDropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => link.isDropdown && setOpenDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 font-montserrat text-[14px] font-medium leading-[24px] tracking-[-0.02em] transition-colors ${
                      isActive(link.path)
                      
                        ? 'text-white font-semibold'
                        : 'text-[#CACFD8] hover:text-white'
                    }`}
                  >
                    {link.label}
                    {link.isDropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    )}
                  </Link>
            
                  {/* Menú Desplegable Desktop */}
                  {link.isDropdown && (
                    <div className={`absolute left-0 pt-4 transition-all duration-200 ${
                      openDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="w-64 bg-[#0d0d0d]/95 border border-white/10 backdrop-blur-2xl rounded-xl py-2 shadow-2xl">
                        {link.subServices?.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-5 py-3 text-[13px] text-[#CACFD8] hover:text-white hover:bg-white/5 transition-colors font-montserrat"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>



            {/* CTA desktop */}
            <button 
            onClick={() => {
              navigate('/contact');
            }}
            className="hidden md:block bg-white text-black px-5 py-1.5 rounded-lg font-montserrat font-semibold text-[13px] hover:bg-gray-200 transition-all flex-shrink-0">
              Contáctanos
            </button>

            {/* Botón hamburguesa — mobile */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen
                ? <X size={22} strokeWidth={2} />
                : <Menu size={22} strokeWidth={2} />
              }
            </button>
          </nav>

          {/* Menú desplegable móvil */}
          <div
            className={`md:hidden absolute left-4 right-4 transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? 'max-h-[800px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0 pointer-events-none'
            }`}
          >
            <div className="bg-[#0d0d0d]/95 border border-white/10 backdrop-blur-2xl rounded-2xl px-6 py-2 flex flex-col shadow-2xl">
              {navLinks.map((link, i) => (
                <div key={link.label} className={i < navLinks.length - 1 ? 'border-b border-white/10' : ''}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block font-montserrat text-[15px] font-medium transition-colors py-4 ${
                      isActive(link.path)
                        ? 'text-white font-semibold'
                        : 'text-[#CACFD8] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                  
                  {/* Renderizado de sub-servicios en móvil */}
                  {link.isDropdown && (
                    <div className="flex flex-col pl-4 pb-4 gap-3">
                      {link.subServices?.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="text-[13px] text-[#CACFD8] hover:text-white font-montserrat py-1"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/contact');
                }}
                className="my-4 bg-white text-black px-5 py-3 rounded-xl font-montserrat font-semibold text-[14px] active:scale-95 transition-all w-full"
              >
                Contáctanos
              </button>
            </div>
          </div>


        </div>
      </header>

      {/* Overlay oscuro al abrir el menú */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}

export default Navbar;

