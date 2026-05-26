import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let mouseRafId: number;

    // --- Lógica del Ratón (DOM Directo - Cero React Renders) ---
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        // Cancelamos el frame pendiente para evitar llamadas acumuladas (Debounce visual)
        if (mouseRafId) cancelAnimationFrame(mouseRafId);
        
        mouseRafId = requestAnimationFrame(() => {
          if (orbRef.current) {
            // El tamaño del orbe es 250px, por lo que restamos 125px para centrarlo perfectamente en el cursor
            orbRef.current.style.transform = `translate(${e.clientX - 125}px, ${e.clientY - 125}px)`;
          }
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // --- Lógica de Partículas Premium y Optimizada ---
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 40; // Mantenemos elegancia
    const colors = ['#c5362e', '#599ddf', '#80b67d', '#e6af41'];
    
    // Constantes cacheadas para optimizar matemáticas del CPU
    const MAX_DIST = 150;
    const MAX_DIST_SQ = MAX_DIST * MAX_DIST; // 22500

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number; color: string;
      
      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Comprobaciones de límite eficientes
        if (this.x > canvasWidth) this.x = 0;
        else if (this.x < 0) this.x = canvasWidth;
        
        if (this.y > canvasHeight) this.y = 0;
        else if (this.y < 0) this.y = canvasHeight;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      // Limpiamos el frame anterior si se ejecuta por un resize
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles = Array.from({ length: particleCount }, () => new Particle(canvas.width, canvas.height));
      animate();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.update(canvas.width, canvas.height);
        p.draw();
        
        // Optimización clave: Evitamos revisar partículas repetidas o a sí misma empezando por i + 1
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          
          // Usamos distancia al cuadrado primero (mucho más ligero que Math.sqrt)
          const distSq = dx * dx + dy * dy;
          
          if (distSq < MAX_DIST_SQ) {
            const distance = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 1 - (distance / MAX_DIST);
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1; // Reseteo para el siguiente dibujo
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();

    // Perfect Cleanup: Prevención de fugas de memoria
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
      if (mouseRafId) cancelAnimationFrame(mouseRafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Capa de Partículas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-40 pointer-events-none" 
      />

      {/* Orbe Rojo - Arriba Izquierda */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#c5362e]/20 rounded-full blur-[120px] animate-blob pointer-events-none" />
      
      {/* Orbe Azul - Derecha Centro */}
      <div 
        className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-[#80b67d]/15 rounded-full blur-[130px] animate-blob pointer-events-none"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Orbe Verde - Abajo Izquierda */}
      <div 
        className="absolute bottom-[-10%] left-[10%] w-[550px] h-[550px] bg-[#599ddf]/15 rounded-full blur-[120px] animate-blob pointer-events-none"
        style={{ animationDelay: '4s' }}
      />

      {/* Orbe Amarillo - Interactivo con Mouse (Ref en lugar de State) */}
      <div 
        ref={orbRef}
        className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#e6af41]/25 rounded-full blur-[80px] pointer-events-none z-0"
        style={{ 
          transform: 'translate(-500px, -500px)', // Fuera de pantalla al iniciar hasta que el mouse se mueva
          transition: 'transform 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67)' 
        }}
      />
    </div>
  );
};

export default InteractiveBackground;