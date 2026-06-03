import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import React from 'react';


// Al inicio de src/main.tsx o src/App.tsx
if (typeof window !== 'undefined') {
  (window as any).initMap = () => {
    console.log("Google Maps initMap callback ejecutado.");
  };
}

// Este es el punto de entrada para el navegador
const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

// Exporta el componente para que vite-ssg lo use durante el build
export { App };