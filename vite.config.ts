import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module';

// Este parche inyecta "require" de forma segura en el ámbito de ES Modules
const require = createRequire(import.meta.url);
const prerender = require('vite-plugin-prerender');

export default defineConfig({
  plugins: [
    react(),
    prerender({
      // Indica dónde se guarda el build final de Vite
      staticDir: 'dist', 
      
      // La lista EXACTA de tus rutas de App.tsx para generarles su HTML estático
      routes: [
        '/',
        '/nosotros',
        '/servicios',
        '/servicios/branding',
        '/servicios/audiovisual',
        '/servicios/consultoriademarketing',
        '/servicios/marketing-digital',
        '/servicios/investigacion-de-mercados',
        '/blog',
        '/contact'
      ],
      
      // Configuración del minificador del HTML generado
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});