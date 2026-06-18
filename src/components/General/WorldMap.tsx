import { useState } from 'react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const MARKERS = [
  { name: 'Austin',      country: 'USA', coordinates: [-97.74, 30.27]  as [number, number], color: '#3b82f6' },
  { name: 'Guadalajara', country: 'MX',  coordinates: [-103.35, 20.67] as [number, number], color: '#10b981' },
  { name: 'Paris',       country: 'FR',  coordinates: [2.35, 48.86]    as [number, number], color: '#818cf8' },
];

export default function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="relative h-[320px] sm:h-[380px] bg-[#0c0c0e]/80 rounded-3xl border border-zinc-800/80 overflow-hidden shadow-2xl"
    >
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('/textures/stardust.png')]" />

      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 160, center: [-20, 25] }}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1c1c1e"
                stroke="#2e2e30"
                strokeWidth={0.5}
                style={{
                  default:  { outline: 'none' },
                  hover:    { outline: 'none', fill: '#252527' },
                  pressed:  { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {MARKERS.map(({ name, country, coordinates, color }) => (
          <Marker
            key={name}
            coordinates={coordinates}
            onMouseEnter={() => setHovered(name)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Anillo de pulso */}
            <circle r={5} fill={color} opacity={0.5} style={{ pointerEvents: 'none' }}>
              <animate attributeName="r"       from="5"  to="18" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0"  dur="1.8s" repeatCount="indefinite" />
            </circle>

            {/* Punto central */}
            <circle
              r={5}
              fill={color}
              stroke="rgba(255,255,255,0.7)"
              strokeWidth={1}
              style={{ cursor: 'pointer' }}
            />

            {/* Tooltip */}
            {hovered === name && (
              <g transform="translate(0, -22)">
                <rect
                  x={-52} y={-14} width={104} height={20} rx={4}
                  fill="#18181b" stroke="#3f3f46" strokeWidth={1}
                />
                <text
                  textAnchor="middle" y={-1}
                  fill="white" fontSize={10} fontWeight="700"
                  letterSpacing={0.8}
                  style={{ fontFamily: 'Montserrat, sans-serif', pointerEvents: 'none' }}
                >
                  {name.toUpperCase()}, {country}
                </text>
              </g>
            )}
          </Marker>
        ))}
      </ComposableMap>

      <div className="absolute bottom-5 left-6 select-none pointer-events-none">
        <span className="text-white/[0.04] text-3xl font-bold tracking-widest font-serif">WEPROM</span>
      </div>
    </motion.div>
  );
}
