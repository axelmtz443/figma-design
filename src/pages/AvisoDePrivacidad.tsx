import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';

const sections = [
  {
    title: '1. Aviso de Privacidad Integral',
    subsections: [
      { subtitle: '1.1 Identidad del Responsable', text: 'Grupo WeProm, así como las entidades comerciales del mismo grupo, es el responsable del tratamiento de los datos personales que usted proporcione a través del sitio web, formularios de contacto, cotizaciones y cualquier otro medio de comunicación, de conformidad con la LFPDPPP vigente (DOF 20-marzo-2025).' },
      { subtitle: '1.2 Datos personales que serán tratados', text: 'Datos de identificación y contacto (no sensibles): nombre completo, cargo, empresa, correo electrónico, teléfono, ciudad o estado.\n\nDatos comerciales (no sensibles): giro o industria, necesidades de negocio, presupuesto referencial.\n\nDatos de navegación (no sensibles): dirección IP, navegador, páginas visitadas, cookies.' },
      { subtitle: '1.3 Finalidades del tratamiento', text: '• Atender y dar seguimiento a solicitudes de información, contacto o cotización.\n• Elaborar propuestas comerciales.\n• Gestionar la relación con clientes y proveedores.\n• Enviar comunicaciones institucionales.' },
      { subtitle: '1.4 Mecanismos para limitar el uso de sus datos', text: 'Solicitud escrita a juridico.corporativo@grupoweprom.com, o inscripción en el Registro Público para Evitar Publicidad (REPEP) ante PROFECO.' },
      { subtitle: '1.5 Derechos ARCO', text: 'Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos. Para ejercerlos, envíe solicitud a juridico.corporativo@grupoweprom.com indicando: nombre completo, descripción del dato o tratamiento, copia de identificación oficial.\n\nPlazo de respuesta: máximo 20 días hábiles. El ejercicio es gratuito, salvo costos de reproducción o envío.' },
      { subtitle: '1.6 Transferencia de datos a terceros', text: 'Sus datos podrán compartirse con: software tecnológico interno (hosting, CRM, analítica) bajo confidencialidad; autoridades competentes cuando exista obligación legal; empresas del mismo grupo corporativo.\n\nEl Responsable no vende, comercializa, ni comparte sus datos a terceros ajenos al grupo.' },
      { subtitle: '1.7 Medidas de seguridad', text: 'El Responsable implementa medidas administrativas, técnicas y físicas para proteger sus datos contra daño, alteración o acceso no autorizado.' },
      { subtitle: '1.8 Cambios al aviso', text: 'Cualquier modificación será actualizada sobre el presente documento en el sitio web. El uso continuado de nuestros servicios implica su aceptación.' },
    ],
  },
  {
    title: '2. Política de Cookies',
    subsections: [
      { subtitle: '2.1 ¿Qué son las cookies?', text: 'Archivos de texto que se almacenan en su dispositivo al visitar el sitio, permitiendo reconocer su navegador y recordar preferencias.' },
      { subtitle: '2.2 Tipos de cookies que utilizamos', text: '• Estrictamente necesarias — funcionamiento básico del sitio.\n• Analíticas / de rendimiento — uso del sitio (Google Analytics).\n• De funcionalidad — preferencias del usuario.\n• De marketing / rastreo — publicidad y medición de campañas.' },
      { subtitle: '2.3 Consentimiento y control', text: 'Banner de cookies al ingresar por primera vez: Aceptar todas, Rechazar no esenciales, o Configurar por categoría. Modificable en cualquier momento desde "Gestionar cookies" en el pie de página.' },
      { subtitle: '2.4 Cookies de terceros', text: 'Google Analytics, Meta Pixel, LinkedIn Insight Tag y otras herramientas de medición pueden instalar cookies propias, regidas por sus propias políticas.' },
      { subtitle: '2.5 Retención de datos', text: 'Cookies analíticas: máximo 26 meses. Cookies de sesión: se eliminan al cerrar el navegador.' },
      { subtitle: '2.6 Contacto', text: 'juridico.corporativo@grupoweprom.com' },
    ],
  },
  {
    title: '3. Términos y Condiciones de Uso del Sitio Web',
    subsections: [
      { subtitle: '3.1 Aceptación', text: 'El acceso y uso del sitio implica la aceptación plena de estos Términos y Condiciones.' },
      { subtitle: '3.2 Titularidad del sitio', text: 'Propiedad de Grupo WeProm / WeProm Marketing y/o de su Representante Legal. Protegido por la LFDA y la LFPPI vigentes.' },
      { subtitle: '3.3 Uso permitido', text: 'El sitio está destinado a fines informativos y de contacto comercial. Se permite su consulta libre, salvo las conductas prohibidas en la sección 3.4.' },
      { subtitle: '3.4 Uso prohibido', text: 'Queda prohibido: reproducir o explotar comercialmente el contenido sin autorización; usar robots o scrapers para extraer datos; introducir virus o malware; dañar la infraestructura del sitio; suplantar identidad del Responsable; usar el sitio para fines ilegales.' },
      { subtitle: '3.5 Propiedad intelectual', text: 'Todo el contenido (textos, imágenes, videos, logotipos, diseño, metodologías) es propiedad de Grupo WeProm. Las marcas de terceros referenciadas se rigen por el Aviso Legal de Uso Referencial de Marcas.' },
      { subtitle: '3.6 Formularios y envío de información', text: 'Al completar un formulario, usted declara que la información es veraz y que cuenta con facultades para representar a su empresa. El envío no genera obligación contractual; solo inicia comunicación comercial.' },
      { subtitle: '3.7 Limitación de responsabilidad', text: 'El Responsable no garantiza disponibilidad ininterrumpida ni ausencia de errores técnicos. No es responsable por decisiones tomadas con base en el contenido del sitio, ni por contenido de sitios externos enlazados.' },
      { subtitle: '3.8 Ley aplicable y jurisdicción', text: 'Rige la legislación de los Estados Unidos Mexicanos. Jurisdicción: tribunales competentes de Guadalajara, Jalisco, México.' },
      { subtitle: '3.9 Modificaciones', text: 'El Responsable puede modificar estos Términos en cualquier momento; entran en vigor desde su publicación.\n\nÚltima actualización: mayo 2026.' },
    ],
  },
  {
    title: '4. Aviso Legal General del Sitio',
    subsections: [
      { subtitle: '4.1 Titular del sitio', text: 'Grupo WeProm / WeProm Marketing.' },
      { subtitle: '4.2 Objeto', text: 'Regula el acceso y uso del sitio web. Complementa al Aviso de Privacidad, Política de Cookies, Términos y Condiciones, y al Aviso Legal de Marcas.' },
      { subtitle: '4.3 Propiedad intelectual', text: 'Contenidos protegidos por la LFDA y LFPPI. Prohibida su reproducción sin autorización, salvo excepciones legales.' },
      { subtitle: '4.4 Uso referencial de marcas de terceros', text: 'Las marcas de terceros en el sitio se usan con fines de referencia curricular. No implican asociación comercial, lucro, ni aval vigente.' },
      { subtitle: '4.5 Exactitud de la información', text: 'El contenido del sitio es informativo y puede actualizarse sin previo aviso. Se recomienda confirmar datos relevantes directamente con el área jurídica-corporativa.' },
      { subtitle: '4.6 Marco legal aplicable', text: 'LFPPI, LFPDPPP, LFDA, LFPC, Código de Comercio, Código Civil Federal.' },
      { subtitle: '4.7 Contacto legal', text: 'juridico.corporativo@grupoweprom.com' },
    ],
  },
];

export default function AvisoDePrivacidad() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-36 pb-24">
        <div className="mb-12">
          <div className="w-12 h-[3px] bg-[#599ddf] mb-5" />
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide leading-tight mb-4" style={{ fontFamily: "'Astonpoliz', sans-serif" }}>
            Aviso de Privacidad
          </h1>
          <p className="text-white/50 text-sm">Última actualización: mayo 2026</p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-white mb-6 pb-2 border-b border-white/10">
                {section.title}
              </h2>
              <div className="space-y-6">
                {section.subsections.map((sub) => (
                  <div key={sub.subtitle}>
                    <h3 className="text-[#599ddf] font-semibold text-sm uppercase tracking-wider mb-2">{sub.subtitle}</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed whitespace-pre-line">{sub.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
