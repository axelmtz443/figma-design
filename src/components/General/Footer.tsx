import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import LogoWeProm from '../../images/OFICIALLOGO.png';
import { openCookieSettings } from './CookieBanner';

function Footer() {
  return (
    <footer className="bg-transparent text-white pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 sm:mb-12 gap-6">
          {/* Logo and Address */}
          <div>
            <img
              src={LogoWeProm}
              alt="Weprom"
              className="h-10 sm:h-12 mb-3 sm:mb-4"
            />
            <p className="text-gray-400 text-xs sm:text-sm max-w-[380px]">
              Un equipo multigeneracional, multidisciplinario y multicultural, experto en desarrollar estrategias de Marketing, Comunicación y Publicidad  Estratégica.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 sm:gap-4">
            <a href="https://www.facebook.com/Weprommarketing/" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@weprommarketing" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
              </svg>
            </a>
            <a href="https://mx.linkedin.com/company/weprom-mexico" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/weprommarketing/" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://open.spotify.com/show/0PKjah0SngnhP9N7c2UzTD?si=273d2392b0694001" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors" aria-label="Spotify">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-10 sm:pb-12 border-b border-gray-800">
          {/* Company */}
          <div>
            <h3 className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">Compañía</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: 'Nosotros', to: '/nosotros' },
                { label: 'Blog', to: '/blog' },
                /*                { label: 'Catalogs', to: '/catalogs' },*/
                { label: 'Contacto', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white hover:text-gray-300 transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: 'Investigación de Mercado', to: '/servicios#market-research' },
                { label: 'Marketing Digital', to: '/servicios#digital-marketing' },
                { label: 'Professional Branding', to: '/servicios#branding' },
                { label: 'Producción Audiovisual', to: '/servicios#audiovisual' },
                { label: 'Consultoría en Marketing.', to: '/servicios#audiovisual' },

              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white hover:text-gray-300 transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources 
          <div>
            <h3 className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">Recursos</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: 'Preguntas frecuentes', to: '/documentation' },
                
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white hover:text-gray-300 transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
*/}
          {/* Contact */}
          <div>
            <h3 className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="tel:+523334590989" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm">
                  <Phone size={14} className="flex-shrink-0" />
                  <span>(33) 3459 0989</span>
                </a>
              </li>
              <li>
                <a href="mailto:contacto@weprommarketing.mx" className="flex items-start gap-2 text-white hover:text-gray-300 transition-colors text-sm break-all">
                  <Mail size={14} className="flex-shrink-0 mt-0.5" />
                  <span>contacto@weprommarketing.mx</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-white text-sm">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                  <span>C. Corrientes 3071, Colomos Providencia, 44630, Guadalajara, Jalisco.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 sm:pt-8 text-xs sm:text-sm text-gray-400">
          <p>© 2026 WeProm Marketing Todos los Derechos Reservados</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/aviso-de-privacidad" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
            <Link to="/aclaratoria-legal" className="hover:text-white transition-colors">Aclaratoria de Marcas</Link>
            <button onClick={openCookieSettings} className="hover:text-white transition-colors cursor-pointer">Gestionar cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;