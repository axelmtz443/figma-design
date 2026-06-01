var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback, StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { useNavigate, useLocation, Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { ChevronDown, X, Menu, ChevronLeft as ChevronLeft$1, ChevronRight as ChevronRight$1, Video, Phone, Mail, MapPin, TrendingUp as TrendingUp$1, Lightbulb, LineChart, Users, ArrowRight as ArrowRight$1, Target as Target$1, ArrowDown, ArrowLeft, Handshake, ArrowUp, BarChart2 as BarChart2$1, Clock, Search, MousePointer2, ClipboardCheck, Rocket, Star, GraduationCap, Globe, Send, MessageCircle, Building2, MonitorPlay, Smartphone, Box, Camera, Flag, ClipboardList, Award, Layers, Maximize, Store, MousePointerClick, MessageSquare, Check, AlertTriangle, CheckCircle, Briefcase, ArrowUpRight as ArrowUpRight$1, CheckCircle2, Code } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow, Pagination as Pagination$1 } from "swiper/modules";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
const logoImage$1 = "/assets/OFICIALLOGO-fGqenXAj.png";
function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef(null);
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
        { label: "Investigación de Mercados", path: "/servicios/investigacion-de-mercados" }
      ]
    },
    { label: "Blog", path: "/blog" }
  ];
  const isActive = (path) => path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 w-full flex justify-center pt-6 px-4 sm:px-6 overflow-visible z-50", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute top-0 inset-x-0 flex justify-center pointer-events-none overflow-hidden h-[500px] -z-10", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute opacity-30 mix-blend-screen",
            style: {
              width: "1500px",
              height: "600px",
              top: "-250px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)",
              filter: "blur(70px)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute opacity-30 mix-blend-screen",
            style: {
              width: "1000px",
              height: "300px",
              top: "-180px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)",
              filter: "blur(40px)"
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { ref: menuRef, className: "w-full max-w-[962px]", children: [
        /* @__PURE__ */ jsxs(
          "nav",
          {
            className: "flex items-center justify-between bg-white/[0.03] border border-white/[0.08] backdrop-blur-[20px] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] rounded-[20px] px-6 sm:px-8 h-[58px] w-full transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05]",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-[20px] pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" }),
              /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center flex-shrink-0", children: /* @__PURE__ */ jsx("img", { src: logoImage$1, alt: "WeProm Logo", className: "h-[2.3rem] sm:h-[2.2rem] w-auto" }) }),
              /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-4 lg:gap-10", children: navLinks.map((link) => {
                var _a;
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "relative group",
                    onMouseEnter: () => link.isDropdown && setIsServicesOpen(true),
                    onMouseLeave: () => link.isDropdown && setIsServicesOpen(false),
                    children: [
                      /* @__PURE__ */ jsxs(
                        Link,
                        {
                          to: link.isDropdown ? "" : link.path,
                          className: `flex items-center gap-1 font-montserrat text-[14px] font-medium leading-[24px] tracking-[-0.02em] transition-colors ${isActive(link.path) ? "text-white font-semibold" : "text-[#CACFD8] hover:text-white"}`,
                          children: [
                            link.label,
                            link.isDropdown && /* @__PURE__ */ jsx(
                              ChevronDown,
                              {
                                size: 14,
                                className: `transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`
                              }
                            )
                          ]
                        }
                      ),
                      link.isDropdown && /* @__PURE__ */ jsx("div", { className: `absolute left-0 pt-4 transition-all duration-200 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`, children: /* @__PURE__ */ jsx("div", { className: "w-64 bg-[#0d0d0d]/95 border border-white/10 backdrop-blur-2xl rounded-xl py-2 shadow-2xl", children: (_a = link.subServices) == null ? void 0 : _a.map((sub) => /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: sub.path,
                          className: "block px-5 py-3 text-[13px] text-[#CACFD8] hover:text-white hover:bg-white/5 transition-colors font-montserrat",
                          children: sub.label
                        },
                        sub.path
                      )) }) })
                    ]
                  },
                  link.label
                );
              }) }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    navigate("/contact");
                  },
                  className: "hidden md:block bg-white text-black px-5 py-1.5 rounded-lg font-montserrat font-semibold text-[13px] hover:bg-gray-200 transition-all flex-shrink-0",
                  children: "Contáctanos"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-colors",
                  onClick: () => setIsOpen((v) => !v),
                  "aria-label": isOpen ? "Cerrar menú" : "Abrir menú",
                  "aria-expanded": isOpen,
                  children: isOpen ? /* @__PURE__ */ jsx(X, { size: 22, strokeWidth: 2 }) : /* @__PURE__ */ jsx(Menu, { size: 22, strokeWidth: 2 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `md:hidden absolute left-4 right-4 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[800px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0 pointer-events-none"}`,
            children: /* @__PURE__ */ jsxs("div", { className: "bg-[#0d0d0d]/95 border border-white/10 backdrop-blur-2xl rounded-2xl px-6 py-2 flex flex-col shadow-2xl", children: [
              navLinks.map((link, i) => {
                var _a;
                return /* @__PURE__ */ jsxs("div", { className: i < navLinks.length - 1 ? "border-b border-white/10" : "", children: [
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: link.path,
                      onClick: () => setIsOpen(false),
                      className: `block font-montserrat text-[15px] font-medium transition-colors py-4 ${isActive(link.path) ? "text-white font-semibold" : "text-[#CACFD8] hover:text-white"}`,
                      children: link.label
                    }
                  ),
                  link.isDropdown && /* @__PURE__ */ jsx("div", { className: "flex flex-col pl-4 pb-4 gap-3", children: (_a = link.subServices) == null ? void 0 : _a.map((sub) => /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: sub.path,
                      onClick: () => setIsOpen(false),
                      className: "text-[13px] text-[#CACFD8] hover:text-white font-montserrat py-1",
                      children: sub.label
                    },
                    sub.path
                  )) })
                ] }, link.label);
              }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    setIsOpen(false);
                    navigate("/contact");
                  },
                  className: "my-4 bg-white text-black px-5 py-3 rounded-xl font-montserrat font-semibold text-[14px] active:scale-95 transition-all w-full",
                  children: "Contáctanos"
                }
              )
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: () => setIsOpen(false),
        "aria-hidden": "true"
      }
    )
  ] });
}
const LOGO1 = "/assets/log1-DsayB3Gf.png";
const LOGO2 = "/assets/log2-COWXk81o.png";
const LOGO3 = "/assets/log3-BvhKfU-c.png";
const LOGO4 = "/assets/log4-DCiUZOOe.png";
const LOGO5 = "/assets/log5-DswqOVe6.png";
const LOGO6 = "/assets/log6-BkebVSJE.png";
const LOGO7 = "/assets/log7-CljYCN6U.png";
const LOGO8 = "/assets/log8-DnmroAhP.png";
const LOGO9 = "/assets/log9-CGeOE4y7.png";
const LOGO10 = "/assets/log10-B35ZqH8D.png";
const LOGO11 = "/assets/log11-DzNKEMOB.png";
const LOGO12 = "/assets/log12-BSDCCttk.png";
const LOGO13 = "/assets/log13-6HBQX7KH.png";
const LOGO14 = "/assets/log14-Cw9aGuOI.png";
const LOGO15 = "/assets/log15-Dd5zqQw9.png";
const LOGO16 = "/assets/log16-BvbXjFKS.png";
const LOGO17 = "/assets/log17-B5dOsQeq.png";
const LOGO18 = "/assets/log18-COVXdCXm.png";
const LOGO19 = "/assets/log19-Zav1kk1R.png";
const LOGO20 = "/assets/log20-6E3zjluE.png";
const LogoIcon = "/assets/ISOTIPODEGRADADO-BAPmCJu5.png";
const CONFIG = {
  escalaGlobal: 1,
  grosorOrbita: 12,
  tamañoLogoCentral: 140,
  tamañoMinimoLogoCentral: 60,
  tamañoLogoMarca: 120,
  tamañoMinimoLogoMarca: 30,
  radioAncho: 450,
  radioAlto: 142,
  velocidadGiro: 3e-3,
  areaGravedadCursor: 220
};
const css = `
  .logo-chip {
    position: absolute;
    border-radius: 50%;
    overflow: hidden;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,0.12);
    box-shadow: 0 4px 15px rgba(0,0,0,0.6);
    transition: box-shadow 0.35s ease, border-color 0.35s ease, background-color 0.35s ease;
    will-change: left, top;
  }

  .logo-chip img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    display: block;
    pointer-events: none;
    transition: transform 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .logo-chip:hover {
    z-index: 50 !important;
    box-shadow: 0 8px 30px rgba(255,255,255,0.2), 0 0 18px rgba(255,255,255,0.12) inset;
    border-color: rgba(255,255,255,0.45);
    background: #1c1c1c;
  }

  .logo-chip:hover img {
    transform: scale(1.35);



  /* Animación de brillo para el botón principal */
  @keyframes shine {
    100% { left: 125%; }
  }

  .btn-shimmer {
    position: relative;
    overflow: hidden;
  }

  .btn-shimmer::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -75%;
    width: 50%;
    height: 200%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(30deg);
    transition: none;
  }

  .btn-shimmer:hover::after {
    animation: shine 0.75s forwards;
  }

  /* Animación de gradiente giratorio para el segundo botón */
  @keyframes rotate-grad {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .animate-rotate-slow {
    animation: rotate-grad 3s linear infinite;
  }




  }
`;
function Hero$1({ isLoading }) {
  const contenedorRef = useRef(null);
  const marcasRefs = useRef([]);
  const mouseRef = useRef({ x: -1e3, y: -1e3, activo: false });
  const fisicasRef = useRef([]);
  const vbSize = 1e3 * CONFIG.escalaGlobal;
  const centroX = vbSize / 2;
  const centroY = vbSize / 2;
  const radioX = CONFIG.radioAncho * CONFIG.escalaGlobal;
  const radioY = CONFIG.radioAlto * CONFIG.escalaGlobal;
  const colisionDist = 95 * CONFIG.escalaGlobal;
  const logosMarcas = [
    LOGO1,
    LOGO2,
    LOGO3,
    LOGO4,
    LOGO5,
    LOGO6,
    LOGO7,
    LOGO8,
    LOGO9,
    LOGO10,
    LOGO11,
    LOGO12,
    LOGO13,
    LOGO14,
    LOGO15,
    LOGO16,
    LOGO17,
    LOGO18,
    LOGO19,
    LOGO20
  ];
  const t5 = 2 * Math.PI / 5;
  const orbitas = [
    { angulo: 0, nodos: [0, t5, t5 * 2, t5 * 3, t5 * 4] },
    { angulo: 45, nodos: [0, t5, t5 * 2, t5 * 3, t5 * 4] },
    { angulo: 90, nodos: [0, t5, t5 * 2, t5 * 3, t5 * 4] },
    { angulo: 135, nodos: [0, t5, t5 * 2, t5 * 3, t5 * 4] }
  ];
  const nodosPlanos = orbitas.flatMap((orbita) => {
    const theta = orbita.angulo * Math.PI / 180;
    return orbita.nodos.map((desfase) => ({
      desfase,
      cosTheta: Math.cos(theta),
      sinTheta: Math.sin(theta)
    }));
  });
  if (fisicasRef.current.length === 0) {
    fisicasRef.current = nodosPlanos.map(() => ({
      x: centroX,
      y: centroY,
      vx: 0,
      vy: 0
    }));
  }
  useEffect(() => {
    let rafId;
    let tiempoBase = 0;
    const animar = () => {
      tiempoBase += CONFIG.velocidadGiro;
      nodosPlanos.forEach((nodo, i) => {
        const f = fisicasRef.current[i];
        const tObj = tiempoBase + nodo.desfase;
        const xOrb = radioX * Math.cos(tObj);
        const yOrb = radioY * Math.sin(tObj);
        const tx = centroX + xOrb * nodo.cosTheta - yOrb * nodo.sinTheta;
        const ty = centroY + xOrb * nodo.sinTheta + yOrb * nodo.cosTheta;
        f.vx += (tx - f.x) * 0.03;
        f.vy += (ty - f.y) * 0.03;
        if (mouseRef.current.activo) {
          const dx = mouseRef.current.x - f.x;
          const dy = mouseRef.current.y - f.y;
          const dist = Math.hypot(dx, dy);
          const area = CONFIG.areaGravedadCursor * CONFIG.escalaGlobal;
          if (dist < area) {
            const fuerza = (area - dist) * 3e-4;
            f.vx += dx * fuerza;
            f.vy += dy * fuerza;
          }
        }
        fisicasRef.current.forEach((o, j) => {
          if (i !== j) {
            const rx = f.x - o.x;
            const ry = f.y - o.y;
            const d = Math.hypot(rx, ry);
            if (d > 0 && d < colisionDist) {
              const rep = (colisionDist - d) * 0.05;
              f.vx += rx / d * rep;
              f.vy += ry / d * rep;
            }
          }
        });
        f.vx *= 0.85;
        f.vy *= 0.85;
        f.x += f.vx;
        f.y += f.vy;
        const el = marcasRefs.current[i];
        if (el) {
          el.style.left = `${f.x / vbSize * 100}%`;
          el.style.top = `${f.y / vbSize * 100}%`;
        }
      });
      rafId = requestAnimationFrame(animar);
    };
    animar();
    return () => cancelAnimationFrame(rafId);
  }, []);
  const handleMouseMove = (e) => {
    if (!contenedorRef.current) return;
    const rect = contenedorRef.current.getBoundingClientRect();
    const escX = vbSize / rect.width;
    const escY = vbSize / rect.height;
    const cX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const cY = "touches" in e ? e.touches[0].clientY : e.clientY;
    mouseRef.current = {
      x: (cX - rect.left) * escX,
      y: (cY - rect.top) * escY,
      activo: true
    };
  };
  const handleMouseLeave = () => {
    mouseRef.current.activo = false;
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: css }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[7rem] sm:pt-[8rem] lg:pt-[9rem] pb-2 sm:pb-2 lg:pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-center md:block md:text-left", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-aston text-[48px] sm:text-[56px] lg:text-[70px] font-normal mb-2 leading-[1.1] tracking-tight-custom text-white", children: "El Poder de las Grandes Marcas" }),
        /* @__PURE__ */ jsx("p", { className: "font-montserrat text-soft-gray text-[18px] sm:text-[20px] lg:text-[25px] font-medium mb-6 sm:mb-8 leading-[1.4] max-w-xl", children: "Desarrollamos estrategias de marketing online y offline para elevar tu marca, producto o servicio, ayudándote a destacar por encima de la competencia." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start", children: [
          /* @__PURE__ */ jsx("button", { className: "btn-shimmer bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-montserrat font-bold text-[14px] sm:text-[16px] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(255,255,255,0.15)] active:scale-95", children: "Contáctanos" }),
          /* @__PURE__ */ jsxs("button", { className: "relative p-[1.5px] inline-flex items-center justify-center overflow-hidden rounded-full group active:scale-95 transition-all duration-300 hover:scale-105", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-border-grad opacity-90 group-hover:opacity-100 group-hover:animate-rotate-slow transition-opacity" }),
            /* @__PURE__ */ jsx("span", { className: "relative px-6 sm:px-8 py-2.5 sm:py-3 transition-all duration-300 bg-black rounded-full group-hover:bg-[#0a0a0a]", children: /* @__PURE__ */ jsx("span", { className: "relative text-white font-montserrat font-medium text-[14px] sm:text-[16px] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]", children: "Nosotros" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative flex items-center justify-center order-first md:order-last", children: /* @__PURE__ */ jsx("div", { style: { position: "relative", width: "100%", maxWidth: "420px", aspectRatio: "1 / 1" }, children: /* @__PURE__ */ jsxs(
        "div",
        {
          ref: contenedorRef,
          onMouseMove: handleMouseMove,
          onMouseLeave: handleMouseLeave,
          onTouchMove: handleMouseMove,
          onTouchEnd: handleMouseLeave,
          style: { position: "relative", width: "100%", height: "100%" },
          children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                viewBox: `0 0 ${vbSize} ${vbSize}`,
                style: {
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none"
                },
                children: orbitas.map((orbita, i) => /* @__PURE__ */ jsxs(
                  "g",
                  {
                    transform: `translate(${centroX} ${centroY}) rotate(${orbita.angulo}) scale(1, ${radioY / radioX})`,
                    children: [
                      /* @__PURE__ */ jsx(
                        "circle",
                        {
                          cx: 0,
                          cy: 0,
                          r: radioX,
                          fill: "none",
                          stroke: "rgba(255,255,255,0.06)",
                          strokeWidth: CONFIG.grosorOrbita * CONFIG.escalaGlobal * 2.8
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "circle",
                        {
                          cx: 0,
                          cy: 0,
                          r: radioX,
                          fill: "none",
                          stroke: "rgba(255,255,255,0.72)",
                          strokeWidth: CONFIG.grosorOrbita * CONFIG.escalaGlobal * 0.28
                        }
                      )
                    ]
                  },
                  i
                ))
              }
            ),
            /* @__PURE__ */ jsx("div", { style: {
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: `max(${CONFIG.tamañoMinimoLogoCentral}px, ${CONFIG.tamañoLogoCentral / 1e3 * 100}%)`,
              height: `max(${CONFIG.tamañoMinimoLogoCentral}px, ${CONFIG.tamañoLogoCentral / 1e3 * 100}%)`,
              background: "radial-gradient(circle, #1a1a1a 55%, #000)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 0 40px rgba(255,255,255,0.1)"
            }, children: /* @__PURE__ */ jsx(
              "img",
              {
                src: LogoIcon,
                alt: "Weprom",
                style: { width: "75%", height: "75%", objectFit: "contain" }
              }
            ) }),
            nodosPlanos.map((_, i) => /* @__PURE__ */ jsx(
              "div",
              {
                ref: (el) => {
                  if (el) marcasRefs.current[i] = el;
                },
                className: "logo-chip",
                style: {
                  zIndex: 20,
                  transform: "translate(-50%, -50%)",
                  width: `max(${CONFIG.tamañoMinimoLogoMarca}px, ${CONFIG.tamañoLogoMarca / 1e3 * 100}%)`,
                  height: `max(${CONFIG.tamañoMinimoLogoMarca}px, ${CONFIG.tamañoLogoMarca / 1e3 * 100}%)`
                },
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: logosMarcas[i % logosMarcas.length],
                    alt: `Marca ${i + 1}`
                  }
                )
              },
              i
            ))
          ]
        }
      ) }) })
    ] })
  ] });
}
const Calaverandia = "/assets/Calaverandia-DBvgJHTV.png";
const Cinepolis = "/assets/Cinepolis-Bj26CEiA.png";
const GrupoCaliente = "/assets/Grupo_Caliente_Logo-C575lnW7.png";
const GrupoCollins = "/assets/GRUPOCOLLINS-min%20(1)-CpOHvoxs.png";
const Heineken = "/assets/Heineken-Logo-fbi8QnZr.png";
const Driscols = "/assets/LogoDriscolls-D98CYwY9.png";
const Ford = "/assets/LogoFord-BHdtMJmY.png";
const HospitalJoya = "/assets/LogoHospitalJoya-4jCzHSxr.png";
const HospitalSanJavier = "/assets/LogoHospitalSanJavier-DcaLUr75.webp";
const Interceramic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAAAeCAYAAAAb8DMaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA1wSURBVHgB7VxNbhvJFX5VJGUjm+EcIBlqGyMjehsMMNQJLGEsWZYHsHQCyycQdQJ5TmAaGMuyJMP0CUQjQbaWFg6yM5EcINzYkMnuenmvuqu72OxfSqREhx9AqX+qf6rq/b9XLWCOOeaYOaysbFVLlX5TCOjxvkDoHh8ftCTMMcccM4fywmBXoGwTQ/9A3NwrlVTn/oOHO3OGnmOOGQNrZ4F4DmXek2cC5JI+gaI6Z+g55pgx3L59UVVC9rw9VUeA2uHhYZc19Zyh55hjxsDMK4iRhat6KOQLYup3+gRp6BLMMcccM4cf/3Knq0BsgBBdRLy4c+fHjbJULfHvn+6cZl4toOuWKk8XO2dazX9q1Kslp/+cTlQzrjv7098+PoUcWNvY3EIFNd52+gvP2u2Wfhb7C+WF/o53P+ydvH71DAri/vpmM3r9/QePdgCxWvRe5t1+Wf91haVkkWtPjg6aZnttc7OODqzENhSiR7+zk8PfOzAm9Ljdduqg8J4QWEUQNX1rwC5tn5dFpX142OomXW/PRy5E5ub+xq8NUKoR31b0RAk7xwcHZzAmzJwi4Nmbo1ftzPbW+5iIMIwBe1yizw7oDIbnOte7IdZpbtgX5rmq0nYPEc5Byk4aHfC1QqqeGcsy2d+N1KcRM6uSu73Y+djb2NiqXVxAb5EI+tNf7+xJCSwMEpmCBi43EMVj+tvgbfIRWvSv529XHSV3vUaCGPEhjMHUu977iC79e+Z1C5+w7wEFYd5NgEvMyO9cCM1gS0HdvNcIaCb5t7a+2SWq2StCfL4AfAIw2CFmrprbMfnZfx3s75NQ6wiFL+Lub89HHthjq+ExT2L/SJiN1T+Gz1TenIJgOslkaPt9iIxgff0RHh29fAEFwMyDSj03+1KIVuTZdn+bkAGvH+IJvZtWDCG7oNleoXO7aeMUZfZ0H9pj5uXFzr+6zMwu9k+JWE6ZaBb/8fFMKVgGn/GmBhS7/C7wfwAWOER8z4nx9nnMs9ozwVVu9T+AJibb+iCNSHPJv+EHYIPvv/bg0fPrGNOgf+ubu4UuVHDP2qtqDVcQCvBZkT5zW4EhM18GfC+a01MSSnQ/tKw8e55EwFdmnIixP7Fll3bvZIaOYWYSrDU6U79mpiaN3X8Ll0RJqGXyORbtH6mZ0D0Q8C56nn86mhgFXRfXduT+SYg8S5ThLk1jqD0Qdyq3Bvtp/Vl78CtLejNH4BPEHt/v5Ojl98evDxb5R6YgZTnksn1/8sG2XNU/TSJwBLma1beSVMtJ70b3/21oHCLPJzRZaEEO8DsiDLsq6KoVKI4q9zmPoGQwzYVjOz4ML7EwNceIgVs8JsPz9PJ7QwdGEGvGduAD55uT7l+OPZrMzAaGqZfJ/D4j83s5y/y+YtSZAE5ev8zln8chjjHJBOqhb+uQVfbfWOaNgVCid3j8Klfb2Ovjn7W1sbHRdFTpA2tbZjqayPM4d4PMx8cKVXCc+vCbO/jcbLfbsYLWN9M6fH8XpZ5bpODKxUUvtr2Q0Ms7FrHXk898ePiqax3i7Q5p1ha5BW+1NUFCi/bfZcUNXOg3Ru8Pj4kWmybukhfMIOVbA7YOUunItyAKxUviEOUlweNQhtWkWIJ/nOmg5qBosovH15QEJroYoxo6m5kNrkFTh2aITwAN+IahmUiK1eAAuRvRNjxHyvZdSSu/OT7YSWLm6P0HXxfuEkc8JeG4nOeaq4RmXqH2ggOImaa39jkDBPRQLS04DciPveBapqMUjffL+kPW/s3g+SQsYUxEeOls0P9yN09gkOfp5OjVFs8TW0JpwnWYoS1m9g5cQBpIWlQ5aMXbU2FqiprTn8BUExSgyGsyzSo8ohcdf7ca9aEcHDw3/jITW5HoKoO1GjFz0SDjlcGzOALmaqTNp+cSeD4nayqKBm+bcxTJfwI5wVFuIS33igRlnG/Kz6PAl+0K7MkSZDJgHHQAzNLM5HqsFhWgPE9ZllLI0BYzm0Hli9nXHAmmgPdSRlpw+2lpaqdf2bF9CgoCXUmg4iYDFZ4HO4PQ9PPTHQ3e5vlwB1+aMJPwCyMIOtWWABcHgQZXCO/cfrmTVxhEcXx40LK0bRUceBu9fsg8Jj+3qLAcAoYRcArIPb2MC5MGj6EjZjZHSjnyyafimDrKzGx6T8v8Zo2CQgaSmQZ8Jc1k+hZgVtSMHEcM02aU1pi2yTx9hIGkSknpegCKLQQWW/nW1y0oAHZNaBS1xo0qB/abbY1asl2DguCahcDUJmsrT958XMgkn5mDMHFMHcfM4AUMYnxqMRECYzN0yJf5xlNZNOZLZjus4WWEBM6rbWBWIeQPWU10DthiCqPhRElazCHvQUGUpbtq6NQoBzaPwfKbs/zWTKBdYBNaI5NAOS0A5jM1HL9+uc0domjbMlNXDDMbDEe/G7VtmBBYulKke8k3OU0q6y5cB6T8jiORWc3GJgpBY+xH3yvS0RqFxx+xX/Nb9CZlwunHu6o2qf4x3dHcNcx+UpSbrRFTeMHFMHb7++uPen6kvMHvWeQ9uC0Ji1Wy4b2KSRT7iMzgJt1xefNYSLEEQfqkNJYPnhflrGh2lKn5WAIzG9hMPVETsCzcbQe9tA5cQSprXCCljByUeQJLAgrCNv1szeRX0Pl3FRMlEi5qCJ6VAOGlohahIGy/WOdjY+ALry3rfWq+FvX2kQJV6FU80nvy8SYUAAuFX9Y2f6Pn+4G1MMhI5vHlA4YYpnPL4HRhgtCz5Mo+DVhKXbYv+cwuExN1Prnk04p+TxLekrGhtMc3lcry859Ns88CDL4RMJOSZt1nhcH7aX5q5XZ/JXJol6uszM8u0iDkjnbb0P50mE240iAj19LDlKALSzgXRmH7ZXTE6XDJ4GgAjAMRxvx2QY5odbs9TAGc9iDCIEvBCxD5qay77QlbBza0ZhHwHsYEL5wY0jhKLBERrETGdi9pTMkcrcFksSfkaKbDhlKYON5CyKVo/yhcv2XTGkd+jxP659eVQ07oUtBxFrawwPRoWlRL0l0+vqIg45AJP2GU//PTn3f/+Pd/7sUxdVwAjMzvM9untpnabq9XZLmD3byrrS4DTmVRhPJnHcwLo5WrMC0oeD/u6h0NrqlGe5EMBi6XBvlx0Qox7fv5viP32QhbmASk7BxfYuUXuSQr1CVLyw51roegtpMiv7aPbegrrp1vanuLL7xS0A4UhO9Pb5NSqF2tQlKUdhTaPXVd2aB/LZgQpALRZKbmHWZqUUYdnU6KZueJfjMzS2dwSvNWhyngm01lkQnI9byJq8tEWORQqYyYpTceRDdtijLfTUvjODgI+yVAxxDifrys1brv43ELjlizX0o4x0HIMMYhoXAkvgi0Dx3H1AmpKY04ph5hZpgOMxvMdCrLWpxh94FN6cGXhW7iZcJaYCELL+WcGuzFGXb/eN1vlibkZa5Be/11jnho68SqqEsrUJk2nK+Vlp0amyRdBqHLKFOnpKbAe7Fhpr5OZjawCwXgilZlTQNmcQb/osUOwccdYjC4WGgHBT9ktt9Uq8RbnOH1zx0sNPO+s517Zgswyy+2BVyeuvBpwXOFMBBkXrnuZDCUi7CZmlH5A+c5RS3xaiv6fd3MbGAXCoCfyoJZgxR23GE3aQ0sE4pCmVmTnIW1za2pzVnUPUqzpOxKOBSYuSiCBZxVClq/SXX+nksQlqkWXgMOXmYgq81IcjHJp462i/WZr5mZGXGpLJgxRN0HdEWiUHpz9HvbrklGB07X1sKIchqC1JHT/zAOgY0L7h/7z/5uNVljhemocsqSQYNIKWi1aCnoJKG1tL1yjteAFxhzXiJbXhh8Wnuw+TaNsWOrBbKY+qYyswEHkSyCmUkUMU19Mz0g5KyvkDBBcBrJ+7pJIPCa42j3cTH4urBtayx/mWKAaP1z7rXplywFnSS0IJNg1xI09VdIUgQwux38dRNK67W8dfGwUr6d7IaVk074TA3RlBZ/vOwmM7MBEwwRbP0qvjKRBRTiCQ16ZlCK1xxDTrBE5xQKJW1NSSKbpokf9js5erl1n789ZVI3FONwsM/Hzlgw6A/OgfiO/Mwa4qCByi4M8lJHJwevzmJfRiF/f6wHKSDzuHd8dJA7Vaj79+DhHpda6utBcP1Ax6TeJKjYUs8sXLYUdNLgVV4krHpSqH2TZgX9GaZH+zQ3ZJnpb7OZYhT+hlnNvl5Xrx0mr/pKredLi37fZGZmjPhqEwXWdbVS1q8gIqZ3NSuYopf3SRld7spCjbXfLmtjb9sUdOhvWLWc/ufF9BVAOfo3Bh3odJwdmfa+HhL9zFBvMFgoaG1ZASgvP32jwG4SZ4aGP8PkaV/PYtLztDWkjHicaG49aywZZchAVFPzsUkwMwKeUzRUb19c3B7WBmbSsdjick9ab+7R9T/7T+mmtVdK9lhKeo+Cc0gFSVKrVLAo8j6LTW8i9GC1VVYVlH9uUUeIXXdFSLnk1QP4xUJCfxigS5vvnK+fW0lLLu35yIfhseXKMtI2He+ZyeOu6/GhZARVXX9uB5xaOOf4vnDBjJQduk7POVmUP0Tfh1J8XRgTqfNWgB58q8H7zBSWWHjds+fJd0fondV7USq181a+/Q+XBnPycecG0AAAAABJRU5ErkJggg==";
const Kenworth = "data:image/svg+xml,%3csvg%20viewBox='0%20-0.5322269273726885%20521.3902269273726%20101.31622692737268'%20xmlns='http://www.w3.org/2000/svg'%20width='2500'%20height='488'%3e%3cpath%20d='M0%2013.175h520.073v87.609H0zM515.385%200a5.466%205.466%200%200%201%205.473%205.473%205.466%205.466%200%200%201-5.473%205.47%205.463%205.463%200%200%201-5.469-5.47A5.464%205.464%200%200%201%20515.385%200m0%201.193c-2.255%200-4.071%201.646-4.071%204.279%200%202.634%201.816%204.276%204.071%204.276%202.258%200%204.074-1.642%204.074-4.276.001-2.633-1.815-4.279-4.074-4.279zm-.885%203.696h1.136c.507%200%20.799-.128.799-.696%200-.654-.366-.699-.799-.699H514.5zm-.016%203.554h-1.309V2.444h2.942c1.116%200%201.803.526%201.803%201.707%200%201.177-.686%201.642-1.63%201.7l1.527%202.592h-1.469l-1.354-2.505h-.51z'%20fill='%23ce0e2d'/%3e%3cg%20fill='%23fff'%3e%3cpath%20d='M135.047%2030.405h12.649l-16.505%2025.759%2019.777%2027.938h-15.071l-17.48-25.541h-.885v25.541h-12.919V30.405h12.919v25.737h.741zM167.807%2041.138v9.952h19.452v10.772h-19.273v11.247h20.13v10.993h-33.263V30.405h33.263v10.733zM195.443%2030.437h15.821l16.916%2034.029h.25V30.405h12.63v53.697h-15.382l-17.753-36.423h-.433v36.423h-12.049zM267.114%2064.008h.141l8.428-33.571h10.64l9.743%2033.641h.144l6.846-33.641h12.658l-12.51%2053.665h-12.771l-9.431-32.098h-.145l-7.962%2032.098h-12.334L246%2030.437h12.729zM388.14%2054.156h7.628c4.571%200%206.82-2.088%206.782-6.284-.042-4.334-2.175-5.771-6.746-5.771h-7.664zm31.197%2029.946h-15.154l-15.648-24.056h-.324v24.056h-12.046V30.437h21.262c10.644%200%2018.792%205.075%2018.721%2016.579-.042%206.996-3.346%2014.153-10.994%2015.51zM443.226%2084.102h-13.354V41.138h-11.177V30.437h35.056v10.701h-10.525zM489.908%2050.942V30.437h13.236v53.665h-13.236V61.73h-17.512v22.372h-12.655V30.437h12.655v20.505zM3.734%2016.835h83.259v80.397H3.734zM343.383%2073.317c-8.835%200-15.995-7.404-15.995-16.537s7.16-16.54%2015.995-16.54c8.831%200%2015.991%207.407%2015.991%2016.54s-7.16%2016.537-15.991%2016.537m.096-45.652c-16.081%200-29.118%2013.034-29.118%2029.115%200%2016.078%2013.037%2029.118%2029.118%2029.118s29.115-13.04%2029.115-29.118c0-16.081-13.034-29.115-29.115-29.115z'/%3e%3c/g%3e%3cpath%20d='M61.769%2046.518c0%208.905-7.218%2016.123-16.123%2016.123s-16.123-7.218-16.123-16.123%207.218-16.123%2016.123-16.123%2016.123%207.218%2016.123%2016.123M45.646%2063.96c-9.634%200-17.438-7.808-17.438-17.441%200-9.63%207.805-17.438%2017.438-17.438%209.63%200%2017.438%207.808%2017.438%2017.438%200%209.633-7.808%2017.441-17.438%2017.441zm13.082-34.874v-6.409a36.712%2036.712%200%200%200-4.122-1.306v5.28a22.778%2022.778%200%200%200-3.153-1.142v-4.78a36.446%2036.446%200%200%200-4.125-.42v4.488a22.337%2022.337%200%200%200-1.681-.071c-.513%200-1.02.026-1.524.058v-4.478a37.028%2037.028%200%200%200-4.125.395v4.767a21.644%2021.644%200%200%200-3.179%201.129v-5.255a36.22%2036.22%200%200%200-4.125%201.283v6.368c-5.361%203.971-8.841%2010.342-8.841%2017.525%200%207.186%203.48%2013.557%208.841%2017.525V91.33c1.338.504%202.714.933%204.125%201.28V66.443c1.02.452%202.085.831%203.179%201.123v25.689c1.354.209%202.727.34%204.125.395V68.252c.504.035%201.011.061%201.524.061.564%200%201.123-.029%201.681-.071v25.404a35.746%2035.746%200%200%200%204.125-.42V67.524a21.21%2021.21%200%200%200%203.153-1.142v26.202a35.908%2035.908%200%200%200%204.122-1.306V63.95c5.29-3.978%208.709-10.304%208.709-17.432s-3.42-13.454-8.709-17.432z'%20fill='%23ce0e2d'/%3e%3cpath%20d='M46.759%2034.052h2.64l-3.442%205.373%204.125%205.826h-3.144l-3.644-5.325h-.189v5.325H40.41V34.052h2.695v5.367h.154zM42.47%2054.551h.028l1.739-6.913h2.188l2.005%206.929h.035l1.405-6.929h2.608l-2.572%2011.048h-2.634l-1.944-6.609h-.029l-1.639%206.609h-2.538l-2.999-11.048h2.621z'%20fill='%23fff'/%3e%3c/svg%3e";
const KIA = "data:image/webp;base64,UklGRu4KAABXRUJQVlA4TOEKAAAv/8F/EBwGbSM5ivnDvvoFQERMQKf+t3MGFirjRKN02w9DcttGkMT/f3t3pqviJI09bYQFbNsOybHe6u4ado9t24jtZDbOerfWwVEdx0mvg6NaG3Uc27aTMa9kPJOxUVNd7wQ4cts2kPj/l2/h1nNaOAJCbNtxGzjRkh1FCHj58ocUYEEiqVEQVHfmTQD8+//f//P//D//z//z//w//8//8//8P//P//P//D//z//z//w//8//8//8/1dSIt+/PTGOoKt/eVxsN4SodyuSrLdHpa52tSvzXxLnRfHygn+4otgTXRVVueFzBUwRCtQgIhpZCcELbmPbGqzakmz/NISllZpdT7TD+OtKjHcTO2fYsiK+vuLA6nTrinGx1RCuhZ9vObB5LyzIC55iIN2CUmYrx8/rIJC0YfvaWLcjyH7MVMupjigH8dttyHcHJ7R2NwTv6MFUr1QhkvXjWnhT6DiiI6sR7Szm+m8RC1Thw00weVs7DqlxMcx+bxCD1ZQQSsXHi5DtBo5JI6xFmlsYrb8AZ5sM4lp4+4KOibq1ZCCnpXBiN4rh98xXiSeXQPCmNkw0aierqDdhvGKMvyXCfjy7A9luYKSzkgBA32vg5m907I1I1odr4UWhY6ImEvzUm0FciKkqscMrZirF4/MRSFoxkUZhgzfB09cM7E0IFS+OJ9M1jHRRKnx8Bwo0YJPHiGR9uBaeFGOYqIkEX74BAVRs85SZSvDubBZrwEQahQ1ehWe1Y29CqHh7MonOYqQLUuH7EJZFCHEQOz1BJOvDtXBnN4qJmkjwdHkEq/Vhb2YowYJjWaweE2kUNngVYl3AZh8JoTJwLRKcxkgXpMLBzbGQDWBrRLJerDkSd3ajmKiJBEcXJ8Md7Pc70xVj1YksVoeJNAobvAqi9UaxNcFUBq5FvFMY6YJUOL01k5Rhy5+I/qgPC0/DaicNE9VbBed3xupTDmxNurtYehiL1WIijcIG78J8tdj1LwSbaLgWic5ipNMS4erC+PgZ+/7BmYrVH8KN3QgmaiTB5RDmySzWiL0RncS1WKkOE436iDu0xDKXYAewdQDwBW5FnOMY6YIUuB/CPJZndWB3nselcGU3jIkaSVCxKlHOYPfApnEplqnFRKM+4g7vgtlvDWB/ZFyJWMcw0gUpULQn8S7hgKBkI1zZDWOiRhKUbYnFeiM4oRRciCUeY6IRH3KDlyFfIc5ozT7EOIqRzkuByiFMw3C1g45D+m4bXGw3jInqrIDaIcyzmKEax3RuGQrUYKIRH3KDl8HTVwysr1ZJiqpViHIYI52SAOXrsVgD1jdiM1Fgis5FcLbVECaqtQICy+HvPxjoumQAMBBicA9mKcNEGoUVxmCawrPasL5B65kBAPSH0Lcg0gGMdFI8ZDYjzDEMdEYU/JoSeh8iWT8maiRBai8Ekk6sr8dqAuzPTKWYSKOwwtsQ4xwGOioMPu9NCBUjnZcMwSGE9ljIBrC+VhJ8uzUiWR8maiRBdCfS3cZAe/jB/sxQgok0Ciu8DaL1RrG+Jkvh4cqEUDHSecmQXoiJSrE+w9dssD4iWS8maiRBfh3c7KBjfTVmwvN9ma4YE2kUVngdpqnC+sYo3GB9gqkMTHROMrTYBS9fM7C+QnlwdFcsZL2YqJEETVbhGQ1Yn2YHJ1ifaYowkUZhhdGgZYFUDHRdMpxelCAqAxOdkwx99uBZ7VjfoPXMsD0Wsh5M1ECCTlsQ5RQGOiUSLm7JVIWYSKOwwusgWK0P6+u2mgDbE0hlYKLb4qDZEEIzkl3DQPsEwd0NMfuNHoxk8IUVQKtEm41gfS1WwO0FmewhpnrzdcjxEOsz/MgbtseHwoGxsH8LLuw0rO+JeVCwHCaSdkyG/UuYrBzrM3zNBtuT6zaGg30GbnZwYH3VZkDNZvhQODAe7HmMJixUh/WN2cEFlsdE0o4dgn0B3r7GQIXyoGwtctzEJsH686ynWN8wOydYHm8KHdsEK0+Q/RjouiSoXAmBpA07BWuOQNKJ9Q1azwTLk+0GNgvWm2hnMdBJkVC8D94UOrYLVhqT1fqxvm6rCbA7AslT7BisMmluYaCjQqF+GbJcx6bB+iJabwTra7EKEqvgRaFj22Cv4oiR7QEG2sMXdkcgeYqdQ6mKqx10rO+JuRDag0zXsHkoRZmqEuszfM0Ku+NJMYbtQ2mJJ4UD66s2HXI7IJC04oRQOlKgHusbs4Mz7E6GqzgklIIEUDHQI7kQHWLsKtzZjeKYUOrxrHasb5idCAPpuwjBK1pwUtPSjQgnMNBl8ZAeou0eEp3BYaEUQ7BaL9Y3aD0TzKT0Fmz+agwTXbLYMh05ZFpqkegKBjouHBoMceoSXtSEiZq9TACQ5ZdDpqUTFhsMY30dXoEWQ3x5BQlOY6IxCk/46WbkEJSn0KvIcAcDHRUCg5EuwGo3DRNdkQEf3fxyyLTUwcWHNKyvyRLoMkR0nsXqMFGH1QT40s3IITjKMEkZ1mdQ+cBo7kCaeKcwkYPKF753M3IIjia42UHH+h6bA41meCeMG7sRTHRXPjx2NXIIjh7MV4v1OXzNCsOp4ZJllXpM9NRrBDjoZuSQaS2Bj58xUInx0GuERZAkwRlMpPuUF5x1NXLItFbgWa1Yn+ZdTjCe3RCDgtl8ZBQTXZcNx12NHDKt7xPsAAa6Ix3aDbCXKUiDPkzU5g0CXHQ1csi0Po7gTV1Y35A/MsN8vmKBoEi6z3nDXVffHDKtTxPtLAa6KA46rmaYDL/O4Z7xcF3UcgiOBxg7RbBaP9bXS2aC+TySCbNo9xYTFHTxzSHT9iopbmKgo8Kg6VJ6/ZYFRuGg8oOaopZD4E9isd4I1tdlNbRdyVHh8OUI7psAZQUth8AfJMt9DLSHP8ynwlz4egBdZGYoLGg5BP4arnbQsb5mK6DzKgbYOcEoDCp/qC1oOQR+N9ojU1RgfQaVD8znqHB42p37JkJ5Qcsh8IfwoHBgfY/NgeZLqDQPnvemi8wMgYKWQ+DPsEg91ufwNSuMZ5CdE4zCoAqATEHNIfA38PY1Bio2Hvq/56gIONqYByZCrKDmEPgLPKsN69Ps4AzjqTIfDrelm8wMwYKaQ+DXE+wABnooG0a8Y5CdM4zCoAqAbEHNIfC7EUg6sb4h65lhPEdFwvmePDQJ4gU1h8BvJsY5DHRFIkx5QbUFcLMjXX7JDA3K/nII7E4cbMDiT4awvh7vEGA6AzZyglEYfhQAPcp6DoFdCb1slrsY6LBQGPSUfSLgMkc3HpoEbcp6DoGd0pMRqc0LMOoZlebDdR296CGzQKNOag6BH1I7hT38YTpD7FzgvqJOGH4WCL1Keg6BnXFjBg0KYNoDDoqEij5tRKEp0K6TmkPgR+ycgEHlDdOpsQhqmtKGHjILNCzpOQTlhPEDqDYdBn5gyFYuUNXZHhhUQdCzpOcQlAPgVHd0u7jCdA6LhrrCtXSgyDRoW9SaQ2AHRGjrTaE8mPkbNQqgtDQ1cZ5aywKNi1GYQ/69fgdyNTSm069ZYDjDtnOB4jy9ryeJ4Zp32KB3orfcjCGfAyDAZ0aaUug3vGDsD46KgUCiaWTv2RFpu9+bwwsmFGqB3/nY330d6O15AoC3VT72gz29+q8vfOA54TD5Lx5bDH/3uhANe5cr/OG7hI6Igz99XiLh3//z//w//8//8//8P//P//P//D//z//z//w//8//8//8P//P//P//D///5UEAA==";
const LogoSelloRojo = "/assets/logo-sello-rojo-r20zEj5z.png";
const Macdonalds = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcQAAAHEBAMAAABVcUcsAAAAGFBMVEVHcEz/wQf/wQf/wQf/wQf/wQb/wQf/wQcKP0OjAAAAB3RSTlMAIURmibDZ34SOWgAACtFJREFUeNrs2UuP0zAQB3DTLd2rxfMaENBroCt6jUCo1/CQek0pu7mSNPZ8fYSQYJEbe2Jnx3v4/67bdZN4XnEVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3BMPXm4+bl6oeT3aXG3eaXUvLD619Jv9Vsz30K7+rEnXb1V+r+mfr2oeT1r664fOHaM7us0Uagbv6TZb5r3DPf3PFnM/NSJbZb5D5x7T79BRqmx25LKFwJpi3tA5g55/TaNVFg/pvKPAmjIWLY2oBdYUsSVHcursaIzVOcPUdVJxntK4Xr5ftORR5V8z3TPyMSrGmnwG+VrjdVDTXZBfrUStyc/q1PrlMrKbSI7kbVxSSCO7iUE6tWG4TNZNTN/GJYXVkuWUQaduostI9kSGQ3w5zd8bV8RhdWo5dZ2UkD2x1MnZ7SqUiCXxmOTsdnW5OkZ65rTEY2WKDXH1ca8t+fvGitg0v2NwDTLFhq2JKDayBYffwOxNm1JwntM51zf+dpuOfzn2g1LqFZ1Rxhebo1bq8T7LhNOSoxzd3i66C30ZO4umMkNT/DxeFm1sFzqOv3p38k3x5BvCqriR1+rxEysrH6eF77Sjj2uKta+AV9JHi9+9Y5iNmsAHb2Z00nFa+EOuipmWau9YYIXjtA9M031EYJjA30vZeloGxhQbEad14LF2on3fBK+3mlxPrQ59qeh82jhRx41U/n8sJOfUi/CXuXsyuYCV4QcrePI2MEbYcmIBM+HXt0Hwt/2GUZB+TgyMjvGupeXe9wvGrgzTAoNKRgmoxUYbw8otPSkwLKeQ92KjTcdqnfWkwOg40WzEWkbJuujeFxi8PtoKDTgLXj/Yej4WG9Zrobax4h2/rzgbwy9O/K9O525PE9MG3M+6a4q0DX5CJLWNS4pdsxKZ3iw/v/gtg13MpVIxNRnJWZNbeQepVExMxqUnFYPJKJSKicl46dtv+WR090az95s0MxWJH0MHgVScUidrz/TGXFMgGbfcBOOfCy4pZU1996lYT5itjeckKHbNSvBMw7XnPfJd0prNnaei/dXOGeM2kgNRtMiR1ym1yaYcbDCpggWczgIDKHXmVJlSy5K6D7V3WugG5gnEOYDVpPoXWWbT9cOBRdSrX6wiG8TkDtf5lI+sNY/V74qnVD6wW+B4BHJc8a54mFXVp0zQ+c88q9qfGg3zLj/cNT5/4hHw9TAvhy/33CD2zDXfKn/pHzI7N9//bNrqvOnnyl9QTzPf5rxlCiO/5mPl4Z8JOd8bhjsG/4EI+JJVbfDvMt0pv89eMv0jX9ivFQd/PoP7bPxm9nOTIq9T8W+B+YFwyL9umdsPhqqDf5j9xuqULYwz450BX/nmlwUYsgEfgd1Ssdscsr/IpfxldvdYIf0G7zY74KVJ/g/Ssux+w70c5Uw65LrNZvatfKj5ytYBT6IyZ5URCMPXu2YMwLPVIZOCM1BMz/W6zSm/fTOF+AJsrEdWvwEO1Wmt0u3EIM9zH+r1mx9A9myaYYW8lf9W7xX1FtkD+2R1/zGWefPoqj2z3SB5GdJvpR0QSKnzjQXCuQnhU91mgMppR0X0AIRzc/A9p0ruBDWFN8KUvzVAiRlfU0fYNyhtJyqip1vhIFPjmOo2r1jaCnUbKBwzJlr8X7MO4SnzN1RABguH9okutQVmBhoKVnEb7Ow+blL4WNoOdY5vo8O28LibHkMDeAg51mmoA/i78TBdGGfwKHmuc3w7o+6fpmfmEU2bI772YDir6Wr8MW0wfkXDZdBw7DiZ8u30NsWvaLhWaDg0Tk6GMREpcEWDlL32gINxN+nvBk3bsUBDhcPZTqV8NcJdY1+jpW6BcCabymmqMAZ+NLj2cDiPN0gS7GjaNhUa6hnfxaObsOIIp43fUld4OKuplroH+mL2FobrIREOMBh3iX9HM16hob7iNT4eJtx9hr9a81vqUyIcYDCeJvbohpG2Cv8vyk/Gb8+3C2P0jLR54okTztPtlroFnIBSjrcMzj4eN1Pm4mnb5SmS25s+KNK9CvRRnowvvOaah2jog650r643ES1x1rwkbMAQvwMZT/6lJUuF17Q8RF/CxTziO2dN43iI5V30iR2GrekBxGSCLveHE26t6Imz5rU0ok1kHG2p5V10LEQg45k//e6Kr/knq1DLu/h3whpwTctBXCc2GOjitwQiuKbhIG544USgh0i76Goh4mu+Ay3V4pMfdwdfM5ZFtCTjYmgL8b2CixfmmmsuIp5xCjIuWhxx3T/i5HGSj4iveamOGNBw8sbgaXMwomMXqhCiRxGNQ5tkvv3iiBcEER+LePB42sISEflrGrhQF4NoUcQ1u6hi+ZlBVwARmRl4OOw1Y1uIFGQQyYGIbjmIGwzRtIlIl3Iu2sT6JRFjgbR50MUSGQcqD0E0sIv8cIQQLeoiP5zYNqJvFPE9ZQcf8SqACB1SHYTohFx8pwJysoWKu46v6QFEYGaAKbmAa/JdtDAi/gMc0TeAWNlFCxWqAGK5NQ2CuG4dke+iE0KMJOlifmY0gXjJz37cxUitukgOdJGvKIXo5yMa4LAihBhZLubN7QRR3kW+1oUQYwXEUOYcbgoVamgAEXnnBkz+Plz0VEahPGKs6eJFABGe/dIuyiP6rlykIi6aehnnj8VLEUQLhYMj8uUBF4X2YikXDYrIz7iAiwKIAEL54rdzEdctI8YiLrr+Eb26WAwxFFvTl0AMTSO6VhHpsxAtiUi+UPEjKs4QqJRc64j8NY0i1kMkKUQ7D3Et5iKJuohPfhwxEqRaiFQDUV2cs6YTQEQgWkTEVTttHkAUgBCpDHsvNsVmEInvoqElFqqTRpRPjOEjhgqIQRGzwhHbVuQ/5PdyLooPjRpFFaTWNICL7QtHdIt0kXz3hUoC7QYQvCbuogCF/G3K4qdwPmIkkUIVOIXLuogjkpCLuNYA4sIK1fRUqBFAlA2HnzYu4rpoOLFFF51cqFqooPKI/qu2myDlIr6mA/Zi6+dXHFHMRerDxZh1UR7RAOFISxpR3kUKXMQOJDo0KLTnopXcixK3KUt8ybtIPETTv4umOxeBu9TiXXTdudjeURNPWwMutl2okRYg90mIoUKhRgAxL3VR2EVmu+neRVM847oX1cUKe9F8WRcDwZJz0QCIAiCwcESSc5F62YtRwF+gUJt3EUCsqChc/HlEJxCOwIURQGxN/Rdq6KBQIZn+EekLFKrrrN3giIKtQcpFGbU/+iMx1L+LoTEXDXXfbgxpoWqhCinUKFQ9wLUxF42Aiy1+n7TUk0wfiLiL8oUa1UVARoeGtCLrt7iLTmD8CQhAjDo0Winyxgo1ttVuQkeF6pZdqK770U99uCi/F/GiilqoiLTdpBT0GC4v3EUnV1RRXUwqwIhmKXtRh8bXRjS0kHYTmpqL5gu4qO1G2kU9wLU++o0WqnD3i33f+vlqqlBNA8fwyop97EV5aUedjRj1MrWsW7+cQv970RFT7Q+N0A+iaWtouAodNX7yRl7RQqWI04iOli2jLiqipOQ7auy/3RhakuRdjP/RTV376ajxf70vKqIizkV06mL7z6e0UPUjoyJqRy0suN0EWriCuqjtRhEVUREVUREVcZGK/SMadRG4EnfvolEX25GjnP75dVP/Umv69uu2HKlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqkq6Tcik59W8zw9pAAAAABJRU5ErkJggg==";
const Marisa = "/assets/Marisa-wIq4Gu6B.png";
const MercedesBenz = "/assets/mercedes-yrXEZxJO.png";
const Nissan = "/assets/Nissan-c9Qwk2M9.png";
const OReilly = "/assets/OReilly_Autopartes-BwhxQdlK.png";
const Pepsico = "/assets/PEPSICO-min-DiutIPRU.png";
const Televisa = "/assets/TELEVISA-min-DkfunFmE.png";
const UDG = "/assets/UDG-min-D6EQv8Cg.png";
const Vitromex = "/assets/VITROMEX-min-b9plLl-h.png";
const Volkswagen = "/assets/Volkswagen_logopng-CanyK87l.png";
const COLORS = {
  red: "#FF3B30",
  blue: "#007AFF",
  green: "#34C759",
  yellow: "#FF9500"
};
function BackedBy() {
  const brands2 = [
    { name: "Cinepolis", src: Cinepolis, alt: "Cinepolis Logo" },
    { name: "Calaverandia", src: Calaverandia, alt: "Calaverandia Logo", sizeClass: "h-14 sm:h-16 md:h-18" },
    { name: "Grupo Caliente", src: GrupoCaliente, alt: "Grupo Caliente Logo" },
    { name: "Grupo Collins", src: GrupoCollins, alt: "Grupo Collins Logo", sizeClass: "h-12 sm:h-16 md:h-20" },
    { name: "Heineken", src: Heineken, alt: "Heineken Logo", sizeClass: "h-16 sm:h-20 md:h-24" },
    { name: "Driscoll's", src: Driscols, alt: "Driscoll's Logo" },
    { name: "Ford", src: Ford, alt: "Ford Logo", sizeClass: "h-8 sm:h-10 md:h-14" },
    { name: "Hospital Joya", src: HospitalJoya, alt: "Hospital Joya Logo", sizeClass: "h-12 sm:h-16 md:h-18" },
    { name: "Hospital San Javier", src: HospitalSanJavier, alt: "Hospital San Javier Logo", sizeClass: "h-14 sm:h-18 md:h-20" },
    { name: "Interceramic", src: Interceramic, alt: "Interceramic Logo" },
    { name: "Kenworth", src: Kenworth, alt: "Kenworth Logo" },
    { name: "KIA", src: KIA, alt: "KIA Logo", sizeClass: "h-20 sm:h-24 md:h-28" },
    { name: "Sello Rojo", src: LogoSelloRojo, alt: "Sello Rojo Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
    { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
    { name: "Marisa", src: Marisa, alt: "Marisa Logo", sizeClass: "h-12 sm:h-16 md:h-18" },
    { name: "Mercedes-Benz", src: MercedesBenz, alt: "Mercedes-Benz Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
    { name: "Nissan", src: Nissan, alt: "Nissan Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
    { name: "O'Reilly", src: OReilly, alt: "O'Reilly Autopartes Logo", sizeClass: "h-24 sm:h-28 md:h-32" },
    { name: "Pepsico", src: Pepsico, alt: "Pepsico Logo" },
    { name: "Televisa", src: Televisa, alt: "Televisa Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
    { name: "UDG", src: UDG, alt: "UDG Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
    { name: "Vitromex", src: Vitromex, alt: "Vitromex Logo" },
    { name: "Volkswagen", src: Volkswagen, alt: "Volkswagen Logo", sizeClass: "h-16 sm:h-18 md:h-20" }
  ];
  const stats = [
    { number: "35+", label: "Años de experiencia", color: COLORS.red },
    { number: "1.000+", label: "Clientes satisfechos", color: COLORS.blue },
    { number: "12.000+", label: "Proyectos completados", color: COLORS.green },
    { number: "100%", label: "Tasa de satisfacción", color: COLORS.yellow }
  ];
  const allBrands2 = [...brands2, ...brands2];
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full pt-10 sm:pt-12 pb-14 sm:pb-4 overflow-hidden bg-transparent group", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-[1519px] mx-auto px-4 sm:px-8 z-10", children: [
      /* @__PURE__ */ jsx("p", { className: "font-montserrat font-light text-[18px] sm:text-[24px] md:text-[36px] tracking-[-0.02em] text-white/60 text-center mb-10 sm:mb-16 uppercase", children: "Elegidos por las grandes marcas" }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsx("button", { className: "prev-btn absolute left-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block", children: /* @__PURE__ */ jsx(ChevronLeft$1, { size: 40, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx("button", { className: "next-btn absolute right-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block", children: /* @__PURE__ */ jsx(ChevronRight$1, { size: 40, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx(
          Swiper,
          {
            modules: [Autoplay, Navigation],
            spaceBetween: 30,
            slidesPerView: 2,
            loop: true,
            speed: 4e3,
            autoplay: { delay: 0, disableOnInteraction: false },
            navigation: { prevEl: ".prev-btn", nextEl: ".next-btn" },
            breakpoints: {
              480: { slidesPerView: 3, spaceBetween: 40 },
              640: { slidesPerView: 3, spaceBetween: 50 },
              1024: { slidesPerView: 5, spaceBetween: 50 }
            },
            className: "flex items-center",
            children: allBrands2.map((brand, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-24 sm:h-28 w-full px-4 py-4 rounded-2xl bg-white border border-white/20 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10", children: brand.isText ? /* @__PURE__ */ jsx("span", { className: `${brand.className} text-black whitespace-nowrap`, children: brand.name }) : /* @__PURE__ */ jsx(
              "img",
              {
                src: brand.src,
                alt: brand.alt,
                className: `w-auto object-contain transition-all ${brand.sizeClass ? brand.sizeClass : "h-7 sm:h-9 md:h-11"}`
              }
            ) }) }, index))
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { y: 30, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "rounded-2xl p-8 sm:p-12 mb-12 mt-12",
          style: {
            background: "linear-gradient(135deg, rgba(255,59,48,0.05), rgba(255,149,0,0.05), rgba(0,122,255,0.05))",
            border: "1px solid rgba(255,255,255,0.1)"
          },
          children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8", children: stats.map((stat, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { scale: 0.8, opacity: 0 },
              whileInView: { scale: 1, opacity: 1 },
              viewport: { once: true },
              transition: { delay: index * 0.1, duration: 0.5 },
              className: "text-center group/stat",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 transition-transform duration-300 group-hover/stat:scale-110",
                    style: {
                      background: `linear-gradient(to bottom, ${stat.color}, ${stat.color}B3)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    },
                    children: stat.number
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "text-sm sm:text-base text-white/60 font-medium", children: stat.label }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-12 h-1 mx-auto mt-3 rounded-full transform scale-x-0 group-hover/stat:scale-x-100 transition-transform duration-500",
                    style: {
                      background: `linear-gradient(to right, transparent, ${stat.color}, transparent)`
                    }
                  }
                )
              ]
            },
            index
          )) })
        }
      )
    ] })
  ] });
}
function ServiceCard({ icon, title, description, blurColor = "none", isOpen, onToggle, onLearnMore }) {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!cardRef.current || isOpen) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    cardRef.current.style.transform = `perspective(1000px) translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg)`;
  };
  const isImageIcon = typeof icon === "string";
  const Icon = icon;
  const blurStyles = {
    red: "#ef4444",
    blue: "#3b82f6",
    green: "#22c55e",
    yellow: "#eab308"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: cardRef,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onClick: onToggle,
      className: "relative flex flex-col min-h-[180px] h-fit overflow-hidden transition-all duration-500 ease-out group/card w-full border border-white/10 hover:border-white/30 cursor-pointer select-none",
      style: {
        backgroundColor: "#121212",
        borderRadius: "32px",
        padding: "24px"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-35 transition-opacity duration-300",
            style: {
              background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${blurStyles[blurColor] || "white"} 0%, transparent 40%)`
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between gap-4 pointer-events-none", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 flex items-center justify-center", children: isImageIcon ? /* @__PURE__ */ jsx("img", { src: icon, alt: title, className: "w-full h-full object-contain" }) : Icon && /* @__PURE__ */ jsx(Icon, { className: "text-white", size: 32, strokeWidth: 1.5 }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-montserrat font-semibold text-white text-[16px] leading-tight tracking-tight", children: title })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-px bg-white/10" }),
          /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              className: "overflow-hidden",
              children: [
                /* @__PURE__ */ jsx("p", { className: "text-[#CACFD8] text-[14px] leading-relaxed pb-4 font-montserrat font-light", children: description }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      onLearnMore();
                    },
                    className: "pointer-events-auto px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-[10px] font-bold uppercase tracking-widest mb-2",
                    children: "Conoce más"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-white/50 group-hover/card:text-white transition-colors text-xs font-medium mt-auto", children: [
            /* @__PURE__ */ jsx("span", { children: isOpen ? "Cerrar" : "Detalles" }),
            /* @__PURE__ */ jsx(motion.div, { animate: { rotate: isOpen ? 180 : 0 }, children: /* @__PURE__ */ jsx(ChevronDown, { size: 14 }) })
          ] })
        ] })
      ]
    }
  );
}
const SearchIcon = "/assets/Search-WLNaoNHQ.png";
const FingerprintIcon = "/assets/FINGERPRINT-ZU8Hzny0.png";
const MegaphoneIcon = "/assets/Megaphone-B3lNEFdu.png";
const PeopleTableIcon = "/assets/PeopleTable-CMshNeiv.png";
function Services$1() {
  const navigate = useNavigate();
  const [openTitle, setOpenTitle] = useState(null);
  const handleToggle = useCallback((title) => {
    setOpenTitle((prev) => prev === title ? null : title);
  }, []);
  const services2 = [
    {
      icon: MegaphoneIcon,
      title: "Marketing digital",
      path: "/servicios/marketing-digital",
      description: "Diseñamos estrategias digitales enfocadas en resultados; integramos pauta, contenido y analítica para maximizar la inversión."
    },
    {
      icon: FingerprintIcon,
      title: "Professional Branding",
      path: "/servicios/branding",
      description: "Construimos marcas profesionales, coherentes y memorables, definiendo un posicionamiento y presencia visual que conecte."
    },
    {
      icon: Video,
      title: "Producción Audiovisual",
      path: "/servicios/audiovisual",
      description: "Potenciamos la narrativa de tu marca con estándares cinematográficos; conceptualizamos, filmamos y editamos piezas de alta fidelidad."
    },
    {
      icon: PeopleTableIcon,
      title: "Consultoría en Marketing",
      path: "/servicios/consultoriademarketing",
      description: "Acompañamos a tu empresa con una visión estratégica integral; diagnosticamos y estructuramos planes alineados a tus objetivos."
    },
    {
      icon: SearchIcon,
      title: "Investigación de Mercados",
      path: "/servicios/investigacion-de-mercados",
      description: "Tomamos decisiones con base en datos, consumidores y competencia para identificar oportunidades reales y ventajas."
    }
  ];
  const colors2 = ["red", "blue", "green", "yellow", "blue"];
  return /* @__PURE__ */ jsxs("section", { className: "w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-aston text-[40px] md:text-[60px] text-white leading-tight mb-4", children: "Nuestros Servicios" }),
      /* @__PURE__ */ jsx("p", { className: "font-montserrat font-light text-white/70 text-[18px] md:text-[24px] max-w-3xl mx-auto", children: "Soluciones estratégicas para el posicionamiento de tu marca." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-start", children: services2.map((service, index) => /* @__PURE__ */ jsx(
      ServiceCard,
      {
        icon: service.icon,
        title: service.title,
        description: service.description,
        blurColor: colors2[index],
        isOpen: openTitle === service.title,
        onToggle: () => handleToggle(service.title),
        onLearnMore: () => navigate(service.path)
      },
      service.title
    )) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-transparent text-white pt-12 sm:pt-16 pb-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 sm:mb-12 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: logoImage$1,
            alt: "Weprom",
            className: "h-10 sm:h-12 mb-3 sm:mb-4"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-xs sm:text-sm max-w-[380px]", children: "Un equipo multigeneracional, multidisciplinario y multicultural, experto en desarrollar estrategias de Marketing, Comunicación y Publicidad  Estratégica." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3 sm:gap-4", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.tiktok.com/@weprom",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-white hover:text-gray-300 transition-colors",
            "aria-label": "TikTok",
            children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://instagram.com/weprom",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-white hover:text-gray-300 transition-colors",
            "aria-label": "Instagram",
            children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
              /* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
              /* @__PURE__ */ jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://facebook.com/weprom",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-white hover:text-gray-300 transition-colors",
            "aria-label": "Facebook",
            children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://linkedin.com/company/weprom",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-white hover:text-gray-300 transition-colors",
            "aria-label": "LinkedIn",
            children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-10 sm:pb-12 border-b border-gray-800", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider", children: "Compañía" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 sm:space-y-4", children: [
          { label: "Nosotros", to: "/nosotros" },
          { label: "Blog", to: "/blog" },
          /*                { label: 'Catalogs', to: '/catalogs' },*/
          { label: "Contacto", to: "/contact" }
        ].map(({ label, to }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to, className: "text-white hover:text-gray-300 transition-colors text-sm", children: label }) }, label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider", children: "Servicios" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 sm:space-y-4", children: [
          { label: "Investigación de Mercado", to: "/servicios#market-research" },
          { label: "Marketing Digital", to: "/servicios#digital-marketing" },
          { label: "Professional Branding", to: "/servicios#branding" },
          { label: "Producción Audiovisual", to: "/servicios#audiovisual" },
          { label: "Consultoría en Marketing.", to: "/servicios#audiovisual" }
        ].map(({ label, to }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to, className: "text-white hover:text-gray-300 transition-colors text-sm", children: label }) }, label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider", children: "Contact Us" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 sm:space-y-4", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "tel:+523334590989", className: "flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm", children: [
            /* @__PURE__ */ jsx(Phone, { size: 14, className: "flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "(33) 3459 0989" })
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "mailto:contacto@weprommarketing.mx", className: "flex items-start gap-2 text-white hover:text-gray-300 transition-colors text-sm break-all", children: [
            /* @__PURE__ */ jsx(Mail, { size: 14, className: "flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "contacto@weprommarketing.mx" })
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-white text-sm", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 14, className: "flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "C. Corrientes 3071, Colomos Providencia, 44630, Guadalajara, Jalisco." })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 sm:pt-8 text-xs sm:text-sm text-gray-400", children: [
      /* @__PURE__ */ jsx("p", { children: "© 2026 WeProm Marketing Todos los Derechos Reservados" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 sm:gap-8", children: [
        /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "hover:text-white transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx(Link, { to: "/terms", className: "hover:text-white transition-colors", children: "Terms & Condition" }),
        /* @__PURE__ */ jsx(Link, { to: "/security", className: "hover:text-white transition-colors", children: "Security Policy" })
      ] })
    ] })
  ] }) });
}
const borderFrame1 = "/assets/1-DIqkv2Qj.png";
const borderFrame2 = "/assets/2-DFQECIQA.png";
const borderFrame3 = "/assets/3-DtxpEvPV.png";
function BlogCard$1({ image: image2, title, date, category, glowColor = "none" }) {
  const getBorderFrame = () => {
    switch (glowColor) {
      case "blue":
        return borderFrame1;
      case "green":
        return borderFrame2;
      case "purple":
        return borderFrame3;
      default:
        return null;
    }
  };
  const borderFrame = getBorderFrame();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative flex flex-col overflow-hidden transition-all duration-500 hover:scale-[1.02] group cursor-pointer w-full max-w-[340px] mx-auto",
      style: { aspectRatio: "340 / 460" },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-[8.7%] left-[2.4%] right-[2.4%] h-[47.8%] overflow-hidden rounded-t-[8%] z-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: image2,
            alt: title,
            className: "w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          }
        ) }),
        borderFrame && /* @__PURE__ */ jsx(
          "img",
          {
            src: borderFrame,
            alt: "",
            className: "absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
          }
        ),
        !borderFrame && /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 z-10",
            style: {
              backgroundColor: "#FFFFFF26",
              borderRadius: "36px",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[36px]" }) }),
        /* @__PURE__ */ jsx("div", { className: "relative w-full h-[52%] z-30", children: category && /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 px-3 py-1.5" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-30 flex flex-col justify-between flex-1 p-6 sm:p-8 lg:p-10", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
            "h3",
            {
              className: "font-montserrat font-semibold text-white mb-3 leading-tight transition-colors duration-300 group-hover:text-white/90 text-[18px] sm:text-[20px] lg:text-[22px]",
              style: { lineHeight: "1.35", letterSpacing: "-0.02em" },
              children: title
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-montserrat font-normal text-soft-gray transition-colors duration-300 group-hover:text-white/80 text-[12px] sm:text-[14px] mb-4",
              children: date
            }
          ) })
        ] })
      ]
    }
  );
}
const logoImage = "/assets/ISOTIPE-BKSXHc5S.png";
const blogPosts$1 = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    title: "Cómo la integración multicadena está dando forma al futuro de la web3",
    date: "December 7, 2024",
    category: "Technology",
    glowColor: "blue"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    title: "Cómo la integración multicadena está dando forma al futuro de la web3",
    date: "December 7, 2024",
    category: "Marketing",
    glowColor: "green"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    title: "Cómo la integración multicadena está dando forma al futuro de la web3",
    date: "December 7, 2024",
    category: "Business",
    glowColor: "purple"
  }
];
function BlogSection$2() {
  const [isOn, setIsOn] = useState(true);
  return /* @__PURE__ */ jsx("section", { className: `w-full pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 transition-colors duration-700 ${isOn ? "bg-transparent" : "bg-[#050505]"}`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative mb-8 sm:mb-12 cursor-pointer group flex flex-col items-center justify-center w-full",
        onClick: () => setIsOn(!isOn),
        title: isOn ? "Apagar luz" : "Encender luz",
        children: [
          /* @__PURE__ */ jsx("div", { className: `absolute -top-20 left-1/2 w-[2px] h-20 bg-gradient-to-b from-transparent to-white/20 -translate-x-1/2 transition-opacity duration-500 ${isOn ? "opacity-100" : "opacity-20"}` }),
          isOn && /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-[80px] bg-white/10 animate-light-pulse pointer-events-none" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: logoImage,
              alt: "Logo",
              className: `w-24 sm:w-[10rem] h-auto object-contain relative z-10 transition-all duration-500 animate-lamp-swing origin-top rounded-full
                  ${isOn ? "brightness-125" : "brightness-[0.2] grayscale"}
                  group-hover:scale-105
                `
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white/40 uppercase tracking-widest whitespace-nowrap", children: [
            "Click para ",
            isOn ? "Apagar" : "Encender"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mb-10 sm:mb-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-left flex-1", children: [
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: `font-aston mb-3 sm:mb-4 transition-colors duration-500 leading-tight text-[36px] sm:text-[44px] lg:text-[56px] ${isOn ? "text-white" : "text-white/20"}`,
            style: { fontWeight: 400, letterSpacing: "-0.02em" },
            children: "Lo último en el mundo del Marketing."
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: `font-montserrat max-w-3xl transition-colors duration-500 text-[20px] sm:text-[22px] lg:text-[23px] ${isOn ? "text-soft-gray" : "text-white/10"}`,
            style: { lineHeight: "28px", letterSpacing: "0.01em" },
            children: "Escribimos para los amantes de la creatividad, la publicidad y los negocios."
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 self-start sm:self-center", children: /* @__PURE__ */ jsxs("button", { className: "group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-transparent border border-white/30 text-white font-montserrat font-medium text-[14px] sm:text-[16px] transition-all duration-300 hover:border-white/60 hover:bg-white/5 flex items-center gap-2 whitespace-nowrap", children: [
        /* @__PURE__ */ jsx("span", { children: "Ver Blog" }),
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center", children: blogPosts$1.map((post) => /* @__PURE__ */ jsx(
      BlogCard$1,
      {
        image: post.image,
        title: post.title,
        date: post.date,
        category: post.category,
        glowColor: post.glowColor
      },
      post.id
    )) })
  ] }) });
}
function TestimonialsSection$1() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  useRef(null);
  useEffect(() => {
    if (activeVideo) return;
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % VIDEO_TESTIMONIALS.length);
    }, 5e3);
    return () => clearInterval(interval);
  }, [activeVideo]);
  const testimonials = [
    {
      id: 1,
      name: "Michael Brown",
      role: "IT Director",
      company: "HealthCare",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      text: "The real-time threat detection and automated response features have significantly reduced our risk exposure.",
      icon: "twitter"
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "IT Director",
      company: "HealthCare",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      text: "The real-time threat detection and automated response features have significantly reduced our risk exposure.",
      icon: "linkedin"
    }
  ];
  const [googleReviews, setGoogleReviews] = useState([]);
  const [stats, setStats] = useState({ rating: 4.9, total: 100 });
  useEffect(() => {
    const scriptId = "google-maps-script";
    const fetchGoogleReviews = () => {
      if (typeof google === "undefined") return;
      const placeId = "ChIJ-17NUpquKIQRMGCoJQIJWgs";
      const dummyDiv = document.createElement("div");
      const service = new google.maps.places.PlacesService(dummyDiv);
      service.getDetails({ placeId, fields: ["reviews", "rating", "user_ratings_total"] }, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && (place == null ? void 0 : place.reviews)) {
          setStats({
            rating: place.rating || 4.9,
            total: place.user_ratings_total || 100
          });
          const mappedReviews = place.reviews.filter((r) => r.rating >= 4).map((r, idx) => ({
            id: `google-${idx}`,
            name: r.author_name,
            role: "Cliente verificado",
            company: "Google",
            image: r.profile_photo_url,
            text: r.text,
            icon: "google",
            rating: r.rating,
            timeDescription: r.relative_time_description
          }));
          setGoogleReviews(mappedReviews);
        }
      });
    };
    const existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBcXEBZHoAuDRFdHgp-2dm-OQ93qY3gYxw&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        const checkGoogle = setInterval(() => {
          if (typeof google !== "undefined" && google.maps && google.maps.places) {
            fetchGoogleReviews();
            clearInterval(checkGoogle);
          }
        }, 100);
      };
      document.head.appendChild(script);
    } else {
      const checkGoogle = setInterval(() => {
        if (typeof google !== "undefined" && google.maps && google.maps.places) {
          fetchGoogleReviews();
          clearInterval(checkGoogle);
        }
      }, 100);
    }
  }, []);
  const displayReviews = googleReviews.length > 0 ? googleReviews : testimonials;
  const rows = [
    [...displayReviews, ...displayReviews, ...displayReviews],
    [...[...displayReviews].reverse(), ...displayReviews, ...displayReviews]
  ];
  const VIDEO_TESTIMONIALS = [
    { id: 1, url: "https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774196364/video1_vcadzb.mp4" },
    { id: 2, url: "https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774278806/video2_sbik0h.mp4" },
    { id: 3, url: "https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774278872/video3_gjvblb.mp4" },
    { id: 4, url: "https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774282181/video4_en08t2.mp4" },
    { id: 5, url: "https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774284093/video5_ssw8th.mp4" }
  ];
  const getIconComponent = (icon) => {
    switch (icon) {
      case "twitter":
        return /* @__PURE__ */ jsx("div", { className: "w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) }) });
      case "linkedin":
        return /* @__PURE__ */ jsx("div", { className: "w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) }) });
      case "google":
        return /* @__PURE__ */ jsx("div", { className: "w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12.545 10.239v3.821h5.445c-.712 2.315-2.662 3.269-5.445 3.269-3.369 0-6.106-2.737-6.106-6.106s2.737-6.106 6.106-6.106c1.483 0 2.805.506 3.832 1.348l2.766-2.766C17.472 2.062 15.176 1 12.545 1 6.551 1 1.688 5.864 1.688 11.857s4.863 10.857 10.857 10.857c5.994 0 10.857-4.864 10.857-10.857 0-.589-.063-1.161-.173-1.718h-10.684z" }) }) });
      default:
        return /* @__PURE__ */ jsx("div", { className: "w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) }) });
    }
  };
  const TestimonialCard = ({ testimonial }) => /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] mx-2 sm:mx-3 group", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative h-full rounded-[20px] sm:rounded-[28px] p-4 sm:p-5 transition-all duration-500 hover:scale-[1.02] cursor-pointer",
      style: {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)"
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 sm:top-6 sm:right-6", children: getIconComponent(testimonial.icon) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: testimonial.image,
              alt: testimonial.name,
              className: "w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white/10 flex-shrink-0"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-montserrat font-semibold text-white text-[15px] sm:text-[18px] leading-tight", children: testimonial.name }),
            /* @__PURE__ */ jsxs("p", { className: "font-montserrat text-soft-gray text-[12px] sm:text-[14px]", children: [
              testimonial.role,
              " at ",
              testimonial.company
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/80 text-[13px] sm:text-[15px] leading-relaxed", children: testimonial.text }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px] sm:rounded-[28px]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[20px] sm:rounded-[28px]" }) })
      ]
    }
  ) });
  return /* @__PURE__ */ jsxs("section", { className: "w-full py-14 sm:py-24 bg-transparent overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-4 sm:px-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 sm:mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-aston text-white leading-tight mb-4 text-[32px] sm:text-[44px] lg:text-[64px]", children: "No sólo lo decimos nosotros..." }),
        /* @__PURE__ */ jsx("p", { className: "font-montserrat text-soft-gray text-[14px] sm:text-[18px] max-w-3xl mx-auto", children: "Somos una empresa atenta y profesional, y nuestros clientes comparten esa opinión. ¡Descubre lo que dicen de nosotros!" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "w-full lg:w-[42%] lg:sticky lg:top-24 z-30 group/reel", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-[32px] overflow-hidden border border-white/10 bg-[#0a0a0a] aspect-[9/16] max-h-[700px] mx-auto lg:mx-0 shadow-2xl transition-all duration-700", children: [
          VIDEO_TESTIMONIALS.map((video, index) => /* @__PURE__ */ jsx(
            "video",
            {
              src: video.url,
              autoPlay: true,
              muted: index === currentVideoIndex ? isMuted : true,
              loop: true,
              playsInline: true,
              preload: "auto",
              className: `absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === currentVideoIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"}`,
              style: { filter: "brightness(0.8)" }
            },
            video.id
          )),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6 z-30", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              },
              className: "w-10 h-10 bg-black/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/30 hover:scale-110 active:scale-95 mt-4",
              children: isMuted ? (
                /* Icono Mute */
                /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" }),
                  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" })
                ] })
              ) : (
                /* Icono Sonido */
                /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" }) })
              )
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-6 right-6 z-20 flex gap-2", children: VIDEO_TESTIMONIALS.map((_, index) => /* @__PURE__ */ jsx("div", { className: "h-1 flex-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-md", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: `h-full bg-gradient-to-r from-blue-500 to-white ${index === currentVideoIndex ? "animate-progress-fill" : index < currentVideoIndex ? "w-full" : "w-0"}`
            },
            `progress-${index}-${index === currentVideoIndex}`
          ) }, `track-${index}`)) }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center z-20", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setActiveVideo(VIDEO_TESTIMONIALS[currentVideoIndex].url),
              className: "w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-white group",
              children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-white group-hover:text-black transition-colors ml-1", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M8 5v14l11-7z" }) })
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-10 left-8 right-8 z-20", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-red-500 rounded-full animate-pulse" }),
              /* @__PURE__ */ jsx("span", { className: "text-white/70 text-[10px] uppercase tracking-[0.2em] font-montserrat", children: "EN DIRECTO: TESTIMONIOS" })
            ] }),
            /* @__PURE__ */ jsxs("h3", { className: "text-white font-montserrat font-bold text-2xl leading-tight", children: [
              "Nuestros clientes ",
              /* @__PURE__ */ jsx("br", {}),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-soft-gray font-light italic", children: "hablan por nosotros." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-[58%] flex flex-col gap-[1rem] relative py-[25px] px-[10px]", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none rounded-[30px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none rounded-[30px]" }),
          /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden group/row py-2", children: /* @__PURE__ */ jsx("div", { className: "flex animate-scroll-right group-hover/row:pause", children: rows[0].map((testimonial, index) => /* @__PURE__ */ jsx(TestimonialCard, { testimonial }, `row1-${index}`)) }) }),
          /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden group/row py-2", children: /* @__PURE__ */ jsx("div", { className: "flex animate-scroll-left group-hover/row:pause", children: rows[1].map((testimonial, index) => /* @__PURE__ */ jsx(TestimonialCard, { testimonial }, `row2-${index}`)) }) }),
          /* @__PURE__ */ jsxs("div", { className: "mx-4 mt-4 p-8 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
              /* @__PURE__ */ jsx("div", { className: "p-4 bg-white rounded-2xl shadow-xl", children: /* @__PURE__ */ jsx("img", { src: "https://images.seeklogo.com/logo-png/62/1/google-new-logo-png_seeklogo-622426.png", className: "w-10 h-10", alt: "Google" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("p", { className: "text-white font-bold text-xl tracking-tight", children: [
                  "Puntuación de ",
                  stats.rating.toFixed(1),
                  " estrellas"
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-white/60 text-sm", children: [
                  "Basado en ",
                  stats.total,
                  " opiniones verificadas"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end gap-1", children: [
              /* @__PURE__ */ jsx("div", { className: "flex gap-1 text-yellow-400", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("svg", { className: `w-6 h-6 ${i < Math.round(stats.rating) ? "text-yellow-400" : "text-white/20"}`, fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i)) }),
              /* @__PURE__ */ jsx("span", { className: "text-white/50 text-[10px] uppercase tracking-widest", children: "Trust verified" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }
        .animate-scroll-left { animation: scroll-left 40s linear infinite; }
        
        /* Animación fluida para la barra de progreso del video */
        .animate-progress-fill {
          animation: fill 5s linear forwards;
        }

        @keyframes fill {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333%)); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(calc(-33.333%)); }
          100% { transform: translateX(0); }
        }

        .hover:pause:hover { animation-play-state: paused; }
      ` }),
    activeVideo && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity",
          onClick: () => setActiveVideo(null)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveVideo(null),
            className: "absolute top-4 right-4 z-[110] bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors",
            children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "video",
          {
            src: activeVideo,
            autoPlay: true,
            controls: true,
            className: "w-full h-full object-cover"
          }
        )
      ] })
    ] })
  ] });
}
const LogoRed = ({ className }) => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 4100 4100", className, children: [
  /* @__PURE__ */ jsx("path", { fill: "#e6332a", d: "M211.4,2806.07s0,.02,0,.02c0-.01,0-.02,0-.03,0,0,0,0,0,0Z" }),
  /* @__PURE__ */ jsx("path", { fill: "#e6332a", d: "M211.4,2806.06c-.08-.83-.22-.78,0,0h0Z" }),
  /* @__PURE__ */ jsx("path", { fill: "#e6332a", d: "M211.44,2806.23v-.02s-.02-.08-.03-.12c.01.05.02.08.03.13Z" }),
  /* @__PURE__ */ jsx("path", { fill: "#e6332a", d: "M1024.79,2545.56c-2.11,30.14,42.78,368.44-207.13,525.16-63.21,39.64-138.65,59.55-211.89,45.33-269.18-52.23-390.95-315.74-392.56-318.32,0-.02,13.74,86.56,28.69,123.11,200.78,490.8,572.24,455.42,617.5,455.48,196.08.3,530.3-65.8,559.59-526.1.47-7.42-2.74-447.83-4.32-845.06l-385.63-299.79c.25,360.65-1.3,798.25-4.24,840.17Z" }),
  /* @__PURE__ */ jsx("path", { fill: "#bf2521", d: "M1748.51,1850.55c-412.39-319.2-758.1-586.35-775.55-597.45-240.92-153.18-448.28-104.58-448.28-104.58,10.91,82,57.78,507.75,73.89,652.34l-73.89-652.34c-215.77,46.66-281.57,258-305.1,341.74-43.06,153.25-13.23,1118.73-6.71,1305.68.08,2.29,20.58,42.26,56.71,93.17,59.67,81.36,168.06,192.49,331.36,225.94-6.31-166,0-1019.45,3.06-1266.25h0s0,0,0,0c-3.06-387.79,308.6-361.2,452.98-245.35-15.49-12.43,297.39,231.24,691.54,536.94v-289.85Z" }),
  /* @__PURE__ */ jsx("path", { fill: "#e6332a", d: "M3475.2,2741.93c-.1,5.85.16,11.65.71,17.41-.06-7.39-.27-14.92-.63-22.62-.03,1.83-.06,3.58-.09,5.22Z" })
] });
const LogoBlue = ({ className }) => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 4100 4100", className, children: [
  /* @__PURE__ */ jsx("path", { fill: "#009fe3", d: "M1598.24,657.44c-303.5-.07-511.75,212.07-549.65,374.89-7.25,31.13-16.05,94.16-20.11,145.78l385.89,293.15c.47-56.25,1.28-90.52,2.51-93.51,40.68-302.22,220.13-362.03,293.24-368.68,379.79-59.81,540.04,399.4,540.04,399.4-.6-259.98-213.22-750.95-651.91-751.04Z" }),
  /* @__PURE__ */ jsx("path", { fill: "#0072bc", d: "M3041.68,3258.99c-192.84,377.96-743.62,290.84-792.13-154.18-12.77-117.18,6.75-1672.39,1.3-1689.68-46.31-146.85-185.18-359.52-406.11-405.64,0,0,3.37,1871.78,2.55,1927.07-7.3,487.27,287.5,779.43,632.02,802.5,454.64,30.45,565.87-277.25,592.37-454.75l-29.99-25.31Z" })
] });
const LogoGreen = ({ className }) => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 4100 4100", className, children: [
  /* @__PURE__ */ jsx("path", { fill: "#60b87b", d: "M3260.12,353.37c-443.44,0-566.39,304.08-585.9,434.15-10.33,68.84-8.74,233.58-9.08,256.58-1.24,82.66-.02,165.44-.02,248.12,0,117.55-1.31,740.89-2.07,1141.12l416.58,323.85c-.72-504.02-1.31-1369.86-1.18-1397.55,1.26-260.83-32.48-656.27,359.59-659.99-.09-.68,335.67,1.5,469.24,404.76-11.72-569.41-412.7-751.04-647.16-751.04Z" }),
  /* @__PURE__ */ jsx("path", { fill: "#48935d", d: "M2661.61,3501.39c147.65-.54,297.7-79.24,380.71-243.55l-379.25-286.49c1.42,407.91,3.75,508.82-1.46,530.04Z" })
] });
const LogoYellow = ({ className }) => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 4100 4100", className, children: [
  /* @__PURE__ */ jsxs("defs", { children: [
    /* @__PURE__ */ jsxs("linearGradient", { id: "Degradado_sin_nombre_194", "data-name": "Degradado sin nombre 194", x1: "3475.55", y1: "2745.24", x2: "3475.55", y2: "2762.93", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#f09428" }),
      /* @__PURE__ */ jsx("stop", { offset: ".21", stopColor: "#f29d2b" }),
      /* @__PURE__ */ jsx("stop", { offset: ".64", stopColor: "#f7ac31" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#f9b233" })
    ] }),
    /* @__PURE__ */ jsx("linearGradient", { id: "Degradado_sin_nombre_194-2", "data-name": "Degradado sin nombre 194", x1: "3690.38", y1: "812.69", x2: "3690.38", y2: "2989.98", href: "#Degradado_sin_nombre_194" }),
    /* @__PURE__ */ jsx("linearGradient", { id: "Degradado_sin_nombre_194-3", "data-name": "Degradado sin nombre 194", x1: "2346.38", y1: "2873.01", x2: "3884.41", y2: "2873.01", href: "#Degradado_sin_nombre_194" })
  ] }),
  /* @__PURE__ */ jsx("path", { fill: "url(#Degradado_sin_nombre_194)", d: "M3475.2,2746.69c-.1,5.76.18,11.46.72,17.12,0-1.61,0-3.2,0-4.83-.46-4.84-.68-9.72-.68-14.63-.01.78-.02,1.61-.04,2.34Z" }),
  /* @__PURE__ */ jsx("path", { fill: "url(#Degradado_sin_nombre_194-2)", d: "M3475.09,702.94c-2.39,151.7,2.9,1815.32.23,2034.83.32,7.21.52,14.28.59,21.21,18.55,197.08,408.5,333.94,408.5,333.94-.1,1.56-.21,3.12-.32,4.64.21.07.32.11.32.11,4.99-295.61,20.07-1812.46,21.89-1996.09-106.86-318.84-340.5-385.2-431.22-398.65Z" }),
  /* @__PURE__ */ jsx("path", { fill: "url(#Degradado_sin_nombre_194-3)", d: "M3475.91,2759.34c1.93,218.53-123.65,299.71-303.33,191.06-13.88-8.39-389.29-298.72-826.2-636.96v289.69c442.09,341.25,841.52,646.96,899.92,682.77,58.94,36.15,117.82,74.14,179.11,106.2,59.95,31.36,130.49,44.78,199.92,39.29,82.66-6.54,151.81-61.6,191.35-130.67,34.7-60.61,56.4-122.23,66.24-191.76.57-4.07,1.1-10.02,1.48-16.04,0,0-389.52-136.69-408.5-333.58Z" })
] });
const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};
const GlassCard = ({ title, description, Icon, color, progress, endStyle, LogoComponent, isMobile }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!cardRef.current || progress < 0.95) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const rgb = hexToRgb(color);
  const logoOpacity = Math.max(0, 1 - progress * 2.5);
  const contentOpacity = Math.max(0, (progress - 0.6) * 2.5);
  const isFullyExpanded = progress >= 0.98;
  const currentBgAlpha = isFullyExpanded && isHovered ? 0.15 : 0.05 * progress;
  const currentBorderAlpha = isFullyExpanded && isHovered ? 0.6 : 0.2 * progress;
  const startSize = isMobile ? "180px" : "240px";
  const startPos = isMobile ? "calc(50% - 90px)" : "calc(50% - 120px)";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: cardRef,
      onMouseMove: handleMouseMove,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      className: "absolute overflow-hidden border cursor-pointer",
      style: {
        top: `calc((${startPos}) * (1 - ${progress}) + (${endStyle.top}) * ${progress})`,
        left: `calc((${startPos}) * (1 - ${progress}) + (${endStyle.left}) * ${progress})`,
        width: `calc((${startSize}) * (1 - ${progress}) + (${endStyle.width}) * ${progress})`,
        height: `calc((${startSize}) * (1 - ${progress}) + (${endStyle.height}) * ${progress})`,
        borderRadius: progress > 0.5 ? "24px" : "0px",
        backgroundColor: `rgba(${rgb}, ${currentBgAlpha})`,
        borderColor: `rgba(${rgb}, ${currentBorderAlpha})`,
        boxShadow: isFullyExpanded && isHovered ? `0 20px 50px -10px rgba(${rgb}, 0.3)` : "none",
        transform: isFullyExpanded && isHovered ? "scale(1.02)" : "scale(1)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease, background-color 0.4s ease",
        zIndex: isFullyExpanded && isHovered ? 50 : 10
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",
            style: {
              opacity: isFullyExpanded && isHovered ? 1 : 0,
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${rgb}, 0.2), transparent 40%)`
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none p-8", style: { opacity: logoOpacity }, children: /* @__PURE__ */ jsx(LogoComponent, { className: "w-full h-full" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full p-6 md:p-10", style: { opacity: contentOpacity, pointerEvents: progress > 0.9 ? "auto" : "none" }, children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "mb-4 md:mb-6 inline-flex w-fit rounded-2xl p-3 md:p-4 ring-1 shadow-lg",
              style: {
                backgroundColor: `rgba(${rgb}, 0.1)`,
                ringColor: `rgba(${rgb}, 0.2)`,
                boxShadow: `0 0 20px rgba(${rgb}, 0.15)`
              },
              children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 md:h-8 md:w-8", strokeWidth: 1.5, style: { color } })
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "mb-2 md:mb-4 text-2xl md:text-3xl font-bold tracking-wide font-montserrat text-white", style: { color }, children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 leading-relaxed text-[14px] md:text-[15px] font-montserrat mt-auto", children: description })
        ] })
      ]
    }
  );
};
const WhoWeAre = () => {
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });
  const rawProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const [currentProgress, setCurrentProgress] = useState(0);
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 1e-3
  });
  useEffect(() => {
    return smoothProgress.onChange((v) => setCurrentProgress(v));
  }, [smoothProgress]);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const endStylesDesktop = {
    expertos: { top: "8%", left: "2.5%", width: "46%", height: "50%" },
    especialistas: { top: "8%", left: "50%", width: "46%", height: "50%" },
    analistas: { top: "61%", left: "2.5%", width: "46%", height: "50%" },
    aliados: { top: "61%", left: "50%", width: "46%", height: "50%" }
  };
  const endStylesMobile = {
    expertos: { top: "-30%", left: "0%", width: "100%", height: "30%" },
    especialistas: { top: "3%", left: "0%", width: "100%", height: "30%" },
    analistas: { top: "36%", left: "0%", width: "100%", height: "30%" },
    aliados: { top: "69%", left: "0%", width: "100%", height: "30%" }
  };
  const currentStyles = isMobile ? endStylesMobile : endStylesDesktop;
  const cardsData = [
    {
      id: "expertos",
      title: "Los Expertos",
      description: "Somos Expertos en Estrategias de Marketing, Promoción e Imagen Pública y de Marca. Cualquier tipo de Empresa o Grupo.",
      Icon: TrendingUp$1,
      color: "#c5362e",
      LogoComponent: LogoRed,
      endStyle: currentStyles.expertos
    },
    {
      id: "especialistas",
      title: "Los Especialistas",
      description: "Creamos y Generamos grandes ideas para Promover Marcas, Empresas y Personas.",
      Icon: Lightbulb,
      color: "#599ddf",
      LogoComponent: LogoBlue,
      endStyle: currentStyles.especialistas
    },
    {
      id: "analistas",
      title: "Los Analistas",
      description: "Somos gente joven, entusiasta y dinámica, trabajando de la mano con la experiencia.",
      Icon: LineChart,
      color: "#80b67d",
      LogoComponent: LogoGreen,
      endStyle: currentStyles.analistas
    },
    {
      id: "aliados",
      title: "Tus Aliados",
      description: "Nos involucramos en cada proyecto como si fuera nuestro, comprometiéndonos con los objetivos y el crecimiento de nuestros clientes.",
      Icon: Users,
      color: "#e6af41",
      LogoComponent: LogoYellow,
      endStyle: currentStyles.aliados
    }
  ];
  return /* @__PURE__ */ jsx("section", { ref: wrapperRef, className: "relative w-full h-[350vh] bg-transparent font-sans pb-40", children: /* @__PURE__ */ jsx("div", { className: "sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-5xl px-4 h-[70vh] md:h-[80vh]", children: [
    cardsData.map((card) => /* @__PURE__ */ jsx(
      GlassCard,
      {
        ...card,
        progress: currentProgress,
        isMobile
      },
      card.id
    )),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50",
        style: { opacity: 1 - currentProgress * 2 },
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] tracking-[0.3em] uppercase", children: "Scroll para expandir" }),
          /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 animate-bounce" })
        ]
      }
    )
  ] }) }) });
};
const AboutIntro = () => {
  const sentence = "¿Quiénes somos?";
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  return /* @__PURE__ */ jsx("section", { className: "relative w-full flex flex-col items-center justify-center bg-transparent pt-32 pb-10 px-6 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-4xl mx-auto text-center z-10", children: [
    /* @__PURE__ */ jsx(
      motion.h1,
      {
        className: "font-aston text-[10vw] md:text-[70px] lg:text-[85px] text-white leading-[1.1] tracking-tight mb-6",
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        transition: { staggerChildren: 0.1 },
        children: sentence.split(" ").map((word, i) => /* @__PURE__ */ jsx(motion.span, { variants: wordVariants, className: "inline-block mr-4", children: word }, i))
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.p,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: 0.6, duration: 0.8 },
        className: "font-montserrat text-white/80 text-[18px] md:text-[22px] leading-relaxed max-w-2xl mx-auto",
        children: [
          "Somos ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "WeProm" }),
          ", tus próximos aliados en el posicionamiento de tu empresa, marca o producto."
        ]
      }
    )
  ] }) });
};
const cocaColaImg = "/assets/cocacola-LqSxbxRG.jpeg";
const fortiaImg = "/assets/fortia-blue-DkHTxIhS.jpeg";
const selloRojoImg = "/assets/sello-rojo-CajuXwfE.jpeg";
const vitromexImg = "/assets/vitromex-green-BXK72zKW.jpeg";
const SUCCESS_STORIES = [
  { id: 1, name: "Coca-Cola", img: cocaColaImg, color: "#fe001a" },
  { id: 2, name: "Fortuna", img: fortiaImg, color: "#3b82f6" },
  { id: 3, name: "Sello", img: selloRojoImg, color: "#ef4444" },
  { id: 4, name: "Vitromex", img: vitromexImg, color: "#22c55e" }
];
const SuccessStories = () => {
  return /* @__PURE__ */ jsxs("section", { className: "w-full py-20 bg-transparent relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full -z-10" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl font-aston text-white mb-4 tracking-light", children: "Casos de Éxito" }),
            /* @__PURE__ */ jsx("p", { className: "text-white font-montserrat text-xl max-w-3xl mx-auto pt-4", children: "Resultados comprobados por marcas y empresas líderes en su sector" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto group", children: [
        /* @__PURE__ */ jsx(
          Swiper,
          {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            autoplay: {
              delay: 4e3,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            },
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false
            },
            pagination: {
              clickable: true,
              dynamicBullets: true
            },
            navigation: {
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom"
            },
            modules: [Autoplay, EffectCoverflow, Pagination$1, Navigation],
            className: "pb-20 pt-10",
            children: SUCCESS_STORIES.map((story) => /* @__PURE__ */ jsx(SwiperSlide, { className: "max-w-[850px] w-[90%] transition-opacity duration-500 [&:not(.swiper-slide-active)]:opacity-40", children: /* @__PURE__ */ jsxs("div", { className: "relative group p-2", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 opacity-0 group-hover:opacity-90 blur-[17px] transition-opacity duration-500 -z-10",
                  style: { backgroundColor: story.color }
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: story.img,
                  alt: story.name,
                  className: "w-full h-auto object-cover"
                }
              ) })
            ] }) }, story.id))
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "swiper-button-prev-custom absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx(ChevronLeft$1, { size: 24 }) }),
        /* @__PURE__ */ jsx("button", { className: "swiper-button-next-custom absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx(ChevronRight$1, { size: 24 }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(
        motion.button,
        {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          className: "px-10 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-zinc-200 transition-colors shadow-xl shadow-white/5",
          children: "Contactar"
        }
      ) })
    ] })
  ] });
};
const ScrollReveal$1 = ({ children, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 }
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, ...directions[direction] },
      whileInView: { opacity: 1, x: 0, y: 0 },
      viewport: { once: true, margin: "-10% 0px -10% 0px" },
      transition: {
        duration: 1.2,
        // Aumentamos duración para suavidad
        delay,
        ease: [0.16, 1, 0.3, 1]
        // Quint Ease-Out para efecto premium
      },
      children
    }
  );
};
function Home({ isLoading }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-transparent text-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero$1, { isLoading }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(BackedBy, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(Services$1, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(SuccessStories, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(AboutIntro, {}) }),
    /* @__PURE__ */ jsx(WhoWeAre, {}),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(TestimonialsSection$1, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(BlogSection$2, {}) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-14 px-4 border-t border-white/5 py-28", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsx(ScrollReveal$1, { direction: "down", delay: 0.3, children: /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => navigate("/contact"),
        className: "group relative px-12 py-5 bg-transparent text-white font-montserrat font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 border border-white/10 shadow-2xl",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(45deg,#ff4d4d,#4d79ff,#4dff88,#fffa4d)] bg-[length:200%_200%] animate-[gradient_3s_linear_infinite]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-[2px] bg-white rounded-full z-0 group-hover:bg-black/80 transition-colors duration-500" }),
          /* @__PURE__ */ jsx("span", { className: "relative z-10 tracking-[0.2em] text-black group-hover:text-white transition-colors duration-500 uppercase", children: "Contáctanos ahora" })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const bgImage = "/assets/LOGOSECCION2-GzN8vuPo.png";
function SectionOne() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: containerRef,
      className: "relative w-full h-screen overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: {
              backgroundImage: `url(${bgImage})`,
              y: yImage,
              scale: scaleImage
            },
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            style: { opacity: opacityText },
            initial: { opacity: 0, y: 60, filter: "blur(10px)" },
            animate: { opacity: 1, y: 0, filter: "blur(0px)" },
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            className: "absolute bottom-0 left-0 right-0 px-4 sm:px-8 text-center pb-12 sm:pb-20",
            children: [
              /* @__PURE__ */ jsxs("h1", { className: "font-aston text-[44px] sm:text-[68px] lg:text-[95px] text-white leading-[1.05] tracking-tight mb-4 sm:mb-6 max-w-6xl mx-auto", children: [
                "Construyendo el futuro de la ",
                /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-border-grad", children: "innovación" }),
                " digital, juntos."
              ] }),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.5, duration: 1 },
                  className: "font-montserrat text-white/70 text-[16px] sm:text-[23px] lg:text-[25px] leading-relaxed max-w-3xl mx-auto",
                  children: "Tenemos la misión de hacer que el desarrollo de marketing sea más profesional, escalable y accesible para todos."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: { y: [0, 10, 0] },
            transition: { repeat: Infinity, duration: 2 },
            className: "absolute bottom-5 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
          }
        )
      ]
    }
  );
}
function AboutBackedBy() {
  const brands2 = [
    { name: "Cinepolis", src: Cinepolis, alt: "Cinepolis Logo" },
    { name: "Calaverandia", src: Calaverandia, alt: "Calaverandia Logo" },
    { name: "Grupo Caliente", src: GrupoCaliente, alt: "Grupo Caliente Logo" },
    { name: "Grupo Collins", src: GrupoCollins, alt: "Grupo Collins Logo" },
    { name: "Heineken", src: Heineken, alt: "Heineken Logo" },
    { name: "Driscoll's", src: Driscols, alt: "Driscoll's Logo" },
    { name: "Ford", src: Ford, alt: "Ford Logo" },
    { name: "Hospital Joya", src: HospitalJoya, alt: "Hospital Joya Logo" },
    { name: "Hospital San Javier", src: HospitalSanJavier, alt: "Hospital San Javier Logo" },
    { name: "Interceramic", src: Interceramic, alt: "Interceramic Logo" },
    { name: "Kenworth", src: Kenworth, alt: "Kenworth Logo" },
    { name: "KIA", src: KIA, alt: "KIA Logo" },
    { name: "Sello Rojo", src: LogoSelloRojo, alt: "Sello Rojo Logo" },
    { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo" },
    { name: "Marisa", src: Marisa, alt: "Marisa Logo" },
    { name: "Mercedes-Benz", src: MercedesBenz, alt: "Mercedes-Benz Logo" },
    { name: "Nissan", src: Nissan, alt: "Nissan Logo" },
    { name: "O'Reilly", src: OReilly, alt: "O'Reilly Autopartes Logo" },
    { name: "Pepsico", src: Pepsico, alt: "Pepsico Logo" },
    { name: "Televisa", src: Televisa, alt: "Televisa Logo" },
    { name: "UDG", src: UDG, alt: "UDG Logo" },
    { name: "Vitromex", src: Vitromex, alt: "Vitromex Logo" },
    { name: "Volkswagen", src: Volkswagen, alt: "Volkswagen Logo" }
  ];
  const allBrands2 = [...brands2, ...brands2];
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full pt-10 sm:pt-12 pb-14 sm:pb-20 overflow-hidden bg-transparent group", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-[1519px] mx-auto px-4 sm:px-8 z-10", children: [
      /* @__PURE__ */ jsx("p", { className: "font-aston text-[24px] sm:text-[30px] md:text-[42px] tracking-[-0.01em] text-white/100 text-center mb-10 sm:mb-16", children: "Nuestros clientes" }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsx("button", { className: "prev-btn absolute left-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block", children: /* @__PURE__ */ jsx(ChevronLeft$1, { size: 40, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx("button", { className: "next-btn absolute right-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block", children: /* @__PURE__ */ jsx(ChevronRight$1, { size: 40, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx(
          Swiper,
          {
            modules: [Autoplay, Navigation],
            spaceBetween: 30,
            slidesPerView: 2,
            loop: true,
            speed: 4e3,
            autoplay: { delay: 0, disableOnInteraction: false },
            navigation: { prevEl: ".prev-btn", nextEl: ".next-btn" },
            breakpoints: {
              480: { slidesPerView: 3, spaceBetween: 40 },
              640: { slidesPerView: 3, spaceBetween: 50 },
              1024: { slidesPerView: 5, spaceBetween: 50 }
            },
            className: "flex items-center",
            children: allBrands2.map((brand, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-24 sm:h-28 w-full px-4 py-4 rounded-2xl bg-white border border-white/20 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10", children: brand.isText ? /* @__PURE__ */ jsx("span", { className: `${brand.className} text-white whitespace-nowrap`, children: brand.name }) : /* @__PURE__ */ jsx(
              "img",
              {
                src: brand.src,
                alt: brand.alt,
                className: "h-8 sm:h-12 md:h-16 w-auto object-contain"
              }
            ) }) }, index))
          }
        )
      ] })
    ] })
  ] });
}
const ale = "/assets/Ale-DFACuVKG.png";
const alejandroV = "/assets/Alejandro%20Villamar-D8ZpSvhz.png";
const alexLarios = "/assets/Alex%20Larios-DlgQfO61.png";
const alexia = "/assets/alexia-D64MFNwf.png";
const andres = "/assets/andres-is5pucKH.png";
const angelica = "/assets/angelica-U0Sgq1N7.png";
const aranzaGonzalez = "/assets/Aranza%20Gonzalez-B_aIiV0h.png";
const axelMartinez = "/assets/Axel%20Martinez-mG32mCG2.png";
const cantu = "/assets/cantu-BnlB3vo7.png";
const cecilia = "/assets/cecilia-W7_xON74.png";
const diego = "/assets/diego-D5bHnEFm.png";
const emiliaLopez = "/assets/Emilia%20L%C3%B3pez-D2kpt17X.png";
const guadalupe = "/assets/guadalupemonroy-BQG5j4zH.png";
const hansValencia = "/assets/Hans%20Valencia-BQ5_ANY8.png";
const jean = "/assets/jean-SLhdVubl.png";
const jessicaZamora = "/assets/Jessica%20Zamora-B6WnnyOV.png";
const jesusAlmanza = "/assets/jesusalmanza-Da4usMcL.png";
const jorgeVelazco = "/assets/jorgevelazco-jnnFLZ6B.png";
const joseCarlos = "/assets/josecarlos-G8jqWXL3.png";
const joseEduardo = "/assets/joseeduardo-CN7MnbzN.png";
const juanCarlos = "/assets/JUANCARLOS-Bf6_2uNU.png";
const juanCarlosVsr = "/assets/juancarlosvsr-CCod0zSv.png";
const juanJose = "/assets/juanjose-CbD-eVo1.png";
const kamiDir = "/assets/Kami%20Directorio%20Ejecutivo_-Clf29bGS.png";
const karen = "/assets/karen-bFKPKTSy.png";
const karlaPaola = "/assets/karlapaola-CrJKYq_G.png";
const luisEnrique1 = "/assets/Luis%20Enrique-bmmEM8oI.png";
const luisNava = "/assets/Luis%20Nava-CKDf8Tcc.png";
const luisEnrique2 = "/assets/luisenrique-LYhq3nhy.png";
const luisGerardo = "/assets/Luisgerardo-DSyet-VU.png";
const luisRojas = "/assets/luisrojas-DCxf4AcX.png";
const mario = "/assets/mario-BODCjFI0.png";
const melissaPerez = "/assets/Melissa%20P%C3%A9rez-CuzKp4gr.png";
const mike = "/assets/mike-CAQyOLpg.png";
const missael = "/assets/missael-BOQgcSMA.png";
const natalia = "/assets/natalia-CiGFFNUD.png";
const paola = "/assets/paola-oEvE66MM.png";
const ricardoSainz = "/assets/ricardosainz-UsWkQH2r.png";
const santiago = "/assets/santiago-QLQsR_fY.png";
const stefania = "/assets/stefania-CrENnuHF.png";
const veronica = "/assets/veronica-DhFyeENk.png";
const vicenteMeza = "/assets/Vicente%20Meza-CbLNd1ee.png";
const team = [
  { id: 1, name: "Juan Carlos Ventura Michel", role: "Director General", image: juanCarlos },
  { id: 2, name: "José Miguel Ventura Michel", role: "Director Asociado de Operaciones", image: juanCarlosVsr },
  { id: 3, name: "Axel Martínez", role: "Asociado Jr.", image: axelMartinez },
  { id: 4, name: "Kamila Gutiérrez", role: "Project Manager", image: kamiDir },
  { id: 5, name: "Paola Rodríguez Sotomayor", role: "Coordinadora de Mercadotecnia", image: paola },
  { id: 6, name: "Aranza González", role: "Asistente de Marketing", image: aranzaGonzalez },
  { id: 7, name: "Alex Larios", role: "Asistente de Dirección", image: alexLarios },
  { id: 8, name: "Jessica Zamora", role: "Asistente Administrativa", image: jessicaZamora },
  { id: 9, name: "Emilia López", role: "Relaciones Públicas y Alianzas", image: emiliaLopez },
  { id: 10, name: "Juan Carlos Ventura", role: "Consultor y Asesor General del Despacho", image: ale },
  { id: 11, name: "Karen Michelle Ventura-Michel", role: "Directora del Área de Liderazgo", image: karen },
  { id: 12, name: "Luis Enrique Ortiz-Monasterio", role: "Desarrollador Web Asociado", image: luisEnrique1 },
  { id: 13, name: "Mariana Martínez", role: "Directora Asociada de Branding", image: andres },
  { id: 14, name: "Luis Rojas Guerrero", role: "Consultor Creativo Sr.", image: luisRojas },
  { id: 15, name: "Santiago Mendoza López", role: "Creador de Contenido Sr.", image: santiago },
  { id: 16, name: "Natalia Ayala España", role: "Coordinadora de Campañas Digitales", image: natalia },
  { id: 17, name: "Missael Mireles Silva", role: "Copywriter", image: missael },
  { id: 18, name: "Mario Arvizu", role: "Productor Audiovisual", image: mario },
  { id: 19, name: "José Eduardo Gómez", role: "Productor Audiovisual", image: joseEduardo },
  { id: 20, name: "Diego Arghe Barranco Mora", role: "Analista de Mercados", image: diego },
  { id: 21, name: "Juan Pablo Cantú", role: "Especialista en Campañas Digitales", image: cantu },
  { id: 22, name: "Melissa", role: "Diseñadora", image: melissaPerez },
  { id: 23, name: "Stefanía Díaz Chávez", role: "Project Manager", image: stefania },
  { id: 24, name: "Cecilia Hernández", role: "Creativa Publicitaria Jr.", image: cecilia },
  { id: 25, name: "Karla Paola Martínez", role: "Copywriter", image: karlaPaola },
  { id: 26, name: "Vicente Meza Gutiérrez", role: "Analista Gerontológico", image: vicenteMeza },
  { id: 27, name: "Hans Valencia", role: "Perito Arquitecto", image: hansValencia },
  { id: 28, name: "Jean Lachapelle", role: "Relaciones Públicas y Alianzas", image: jean },
  { id: 29, name: "Juan José Barrios", role: "Creador de Contenido Sr.", image: juanJose },
  { id: 30, name: "Ricardo Sainz Venegas", role: "Analista de Mercados", image: ricardoSainz },
  { id: 31, name: "Verónica Gómez Castañeda", role: "Directora de Investigación de Mercados", image: veronica },
  { id: 32, name: "Luis Nava Villaseñor", role: "Creativo Publicitario Sr.", image: luisNava },
  { id: 33, name: "Diego Hernández", role: "Consultor Sr. en Marketing Digital", image: jorgeVelazco },
  { id: 34, name: "Federico Alejandro Villamar", role: "Analista", image: alejandroV },
  { id: 35, name: "Alexia", role: "Encuestadora", image: alexia },
  { id: 36, name: "Andrés", role: "Encuestador", image: luisEnrique2 },
  { id: 37, name: "Angélica", role: "Encuestadora", image: angelica },
  { id: 38, name: "Guadalupe Monroy", role: "Gerente de Ventas", image: guadalupe },
  { id: 39, name: "Luis Gerardo", role: "Encuestador", image: luisGerardo },
  { id: 40, name: "Mike", role: "Encuestador", image: mike },
  { id: 41, name: "Jesús Almanza", role: "Encuestador", image: jesusAlmanza },
  { id: 42, name: "José Carlos", role: "Encuestador", image: joseCarlos }
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
  const tag = document.createElement("style");
  tag.textContent = STYLES;
  document.head.appendChild(tag);
  stylesInjected = true;
}
function AnimatedRings({ active }) {
  useEffect(() => {
    injectStyles();
  }, []);
  const r = 88;
  const cx = 96;
  const cy = 96;
  const circ = 2 * Math.PI * r;
  const arcLen = circ * 0.3;
  const gap = circ - arcLen;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "absolute inset-0 w-full h-full pointer-events-none",
      viewBox: "0 0 192 192",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx,
            cy,
            r,
            stroke: "#3B82F6",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeDasharray: `${arcLen} ${gap}`,
            className: "arc-cw",
            style: {
              opacity: active ? 0 : 1,
              transition: "opacity 0.15s ease"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx,
            cy,
            r,
            stroke: "#3B82F6",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeDasharray: `${arcLen} ${gap}`,
            className: "arc-ccw",
            style: {
              opacity: active ? 0 : 1,
              transition: "opacity 0.15s ease"
            }
          }
        ),
        active && /* @__PURE__ */ jsx(
          "circle",
          {
            cx,
            cy,
            r,
            stroke: "#3B82F6",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeDasharray: `${circ}`,
            strokeDashoffset: circ,
            className: "ring-draw-anim",
            style: {
              filter: "drop-shadow(0 0 8px rgba(59,130,246,0.8))"
            }
          },
          "ring-active"
        )
      ]
    }
  );
}
function TeamCard({
  name,
  role,
  image: image2,
  isActive,
  onClick
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex-shrink-0 flex flex-col items-center cursor-pointer select-none",
      style: { width: 192 },
      onClick,
      children: /* @__PURE__ */ jsxs("div", { className: "relative", style: { width: 192, height: 192 }, children: [
        /* @__PURE__ */ jsx(AnimatedRings, { active: isActive }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "absolute overflow-hidden",
            style: {
              top: 16,
              left: 16,
              width: 160,
              height: 160,
              borderRadius: "50%"
            },
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: image2,
                  alt: name,
                  className: "w-full h-full object-cover object-top",
                  style: {
                    filter: isActive ? "grayscale(100%) brightness(0.22)" : "grayscale(100%)",
                    transition: "filter 0.4s ease"
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    background: "rgba(0,5,20,0.6)",
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.4s ease"
                  }
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none",
                  style: {
                    padding: "0 14px",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(10px)",
                    transition: "opacity 0.35s ease 0.12s, transform 0.35s ease 0.12s"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        style: {
                          color: "#60A5FA",
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: 12,
                          fontWeight: 700,
                          textAlign: "center",
                          lineHeight: 1.35
                        },
                        children: name
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        style: {
                          width: 28,
                          height: 1.5,
                          background: "#3B82F6",
                          margin: "7px auto",
                          borderRadius: 99,
                          opacity: 0.8
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        style: {
                          color: "rgba(255,255,255,0.85)",
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: 10.5,
                          textAlign: "center",
                          lineHeight: 1.4
                        },
                        children: role
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
function TeamSection() {
  const [activeId, setActiveId] = useState(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  useEffect(() => {
    let lastTime = 0;
    const SPEED = 0.8;
    const step = (now) => {
      const dt = now - lastTime;
      lastTime = now;
      const el = trackRef.current;
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
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const onMouseDown = (e) => {
    var _a, _b;
    isDragging.current = true;
    startX.current = e.pageX - (((_a = trackRef.current) == null ? void 0 : _a.offsetLeft) ?? 0);
    scrollStart.current = ((_b = trackRef.current) == null ? void 0 : _b.scrollLeft) ?? 0;
  };
  const onMouseMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollStart.current - (x - startX.current);
  };
  const onMouseUp = () => {
    isDragging.current = false;
  };
  const onTouchStart = (e) => {
    var _a, _b;
    startX.current = e.touches[0].pageX - (((_a = trackRef.current) == null ? void 0 : _a.offsetLeft) ?? 0);
    scrollStart.current = ((_b = trackRef.current) == null ? void 0 : _b.scrollLeft) ?? 0;
  };
  const onTouchMove = (e) => {
    if (!trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollStart.current - (x - startX.current);
  };
  return /* @__PURE__ */ jsx("section", { className: "w-full py-20 sm:py-28 overflow-hidden bg-transparent", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxs(
        "h2",
        {
          className: "font-montserrat text-[38px] sm:text-[54px] font-bold leading-tight tracking-tight",
          style: { color: "#fff" },
          children: [
            "Nuestro ",
            /* @__PURE__ */ jsx("span", { style: { color: "#3B82F6" }, children: "Equipo" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "p",
        {
          className: " font-aston mt-4 text-[20px] sm:text-[21px] max-w-xl mx-auto",
          style: {
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7
          },
          children: [
            "Diferentes talentos, un mismo ADN:",
            /* @__PURE__ */ jsx("br", {}),
            "Colaborar en proyectos que generen impacto real."
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: trackRef,
        className: "flex font-aston gap-6 pb-2",
        style: {
          overflowX: "auto",
          cursor: isDragging.current ? "grabbing" : "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        onMouseDown,
        onMouseMove,
        onMouseUp,
        onMouseLeave: onMouseUp,
        onTouchStart,
        onTouchMove,
        children: [
          /* @__PURE__ */ jsx("div", { className: " font-aston flex-shrink-0", style: { width: 24 } }),
          team.map((member) => /* @__PURE__ */ jsx(
            TeamCard,
            {
              name: member.name,
              role: member.role,
              image: member.image,
              isActive: activeId === member.id,
              onClick: () => setActiveId((prev) => prev === member.id ? null : member.id)
            },
            member.id
          )),
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", style: { width: 24 } })
        ]
      }
    )
  ] }) });
}
const grupoLogo = "/assets/LOGOGWP-rveF3OJs.png";
const XERYUS = "/assets/XERYUS_Blanco-DxRvhJwF.png";
const SmarKeting = "/assets/SMARTKETING_BCO-CPbPaje5.png";
const WePromBlanco = "/assets/LOGOBLANCO-DjdV_cg2.png";
const Cypron = "/assets/CYPRON_BCO-BV3Z2J_v.png";
function GroupSection() {
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-18 sm:py-20 px-4 sm:px-8 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto pl-0 sm:pl-16 lg:pl-24", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "flex flex-col items-center mb-8 text-center",
        children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-aston text-[30px] sm:text-[38px] lg:text-[50px] text-white leading-[1.05] tracking-tight mb-8 max-w-[90%]", children: [
            "WeProm Marketing es la unidad especializada en Marketing Estratégico en ",
            /* @__PURE__ */ jsx("span", { className: "text-white border-b border-white/30", children: "Grupo WeProm" }),
            "."
          ] }),
          /* @__PURE__ */ jsx("img", { src: grupoLogo, alt: "Grupo WeProm", className: "h-24 sm:h-32 lg:h-40 w-auto mb-6 object-contain" }),
          /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/60 tracking-[0.2em] uppercase text-xs sm:text-sm", children: "Unidad Especializada" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "w-full mb-24 py-10 border-y border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-nowrap justify-center items-center gap-8 sm:gap-16", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-[180px] sm:w-[220px]", children: /* @__PURE__ */ jsx("img", { src: XERYUS, alt: "Xeryus", className: "h-10 sm:h-12 w-auto object-contain" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-[180px] sm:w-[220px]", children: /* @__PURE__ */ jsx("img", { src: SmarKeting, alt: "Smar+keting", className: "h-10 sm:h-12 w-auto object-contain" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-[220px] sm:w-[260px]", children: /* @__PURE__ */ jsx("img", { src: WePromBlanco, alt: "WeProm", className: "h-10 sm:h-12 w-auto object-contain" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-[180px] sm:w-[220px]", children: /* @__PURE__ */ jsx("img", { src: Cypron, alt: "Cypron", className: "h-10 sm:h-12 w-auto object-contain" }) })
    ] }) }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "flex flex-col sm:flex-row items-center sm:items-stretch gap-8 sm:gap-12",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 text-center sm:text-left", children: /* @__PURE__ */ jsxs("h2", { className: "font-aston text-[40px] sm:text-[56px] lg:text-[72px] text-white leading-[1.0] tracking-tight", children: [
            "Nuestro",
            /* @__PURE__ */ jsx("br", {}),
            "Propósito"
          ] }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "hidden sm:block w-[4px] rounded-full flex-shrink-0 self-stretch",
              style: { background: "linear-gradient(to bottom, #facc15, #4ade80, #60a5fa, #ef4444)" }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex sm:hidden w-full h-[4px] rounded-full",
              style: { background: "linear-gradient(to right, #facc15, #4ade80, #60a5fa, #ef4444)" }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/70 text-[16px] sm:text-[20px] lg:text-[22px] leading-relaxed max-w-xl", children: "Existimos para impulsar el crecimiento de cualquier marca y de las personas detrás de ella, porque sabemos que un negocio que prospera hace prosperar a su gente y al mundo." }) })
        ]
      }
    )
  ] }) });
}
const locations$1 = [
  { id: 1, city: "Austin", country: "USA", top: "38%", left: "32%", color: "bg-blue-500" },
  { id: 2, city: "Guadalajara", country: "MX", top: "46%", left: "27%", color: "bg-emerald-500" },
  { id: 3, city: "Paris", country: "FR", top: "34%", left: "49%", color: "bg-indigo-500" }
];
const WorldPresence = () => {
  const [hoveredLoc, setHoveredLoc] = useState(null);
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-24 px-6 sm:px-12 border-t border-white/5 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center lg:text-left", children: [
      /* @__PURE__ */ jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "font-aston text-[45px] sm:text-[70px] text-white leading-none mb-6",
          children: [
            "Alcance ",
            /* @__PURE__ */ jsx("span", { className: "text-white/30 italic font-light", children: "Global" }),
            /* @__PURE__ */ jsx("br", {}),
            "Estrategia ",
            /* @__PURE__ */ jsx("span", { className: "text-white/30", children: "Local" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/40 text-xs sm:text-sm tracking-[0.3em] uppercase max-w-xl", children: "Conectando los centros de innovación en América y Europa." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
          className: "lg:col-span-2 relative h-[500px] bg-[#0A0A0A] rounded-[40px] border border-white/10 overflow-hidden shadow-2xl group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 p-12 flex items-center justify-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg",
                alt: "World Map",
                className: "w-full h-full object-contain opacity-20 grayscale invert brightness-200"
              }
            ) }),
            locations$1.map((loc) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute transform -translate-x-1/2 -translate-y-1/2 z-10",
                style: { top: loc.top, left: loc.left },
                onMouseEnter: () => setHoveredLoc(loc.id),
                onMouseLeave: () => setHoveredLoc(null),
                children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center cursor-pointer", children: [
                  /* @__PURE__ */ jsx("span", { className: `animate-ping absolute inline-flex h-8 w-8 rounded-full ${loc.color} opacity-20` }),
                  /* @__PURE__ */ jsx("span", { className: `relative inline-flex rounded-full h-3 w-3 ${loc.color} shadow-[0_0_20px_rgba(255,255,255,0.5)] border border-white/20` }),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: hoveredLoc === loc.id && /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 10, scale: 0.9 },
                      animate: { opacity: 1, y: -45, scale: 1 },
                      exit: { opacity: 0, y: 10, scale: 0.9 },
                      className: "absolute whitespace-nowrap bg-white text-black px-4 py-2 rounded-full text-[11px] font-bold tracking-tighter shadow-xl z-20",
                      children: [
                        loc.city.toUpperCase(),
                        ", ",
                        loc.country,
                        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" })
                      ]
                    }
                  ) })
                ] })
              },
              loc.id
            )),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-8", children: /* @__PURE__ */ jsx("h3", { className: "font-aston text-white/5 text-[80px] select-none leading-none", children: "WEPROM" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            whileHover: { y: -5 },
            className: "flex-1 bg-gradient-to-br from-[#141414] to-black p-10 rounded-[40px] border border-white/10 flex flex-col justify-center relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-6 opacity-10", children: /* @__PURE__ */ jsx("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "white", children: /* @__PURE__ */ jsx("path", { d: "M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45z" }) }) }),
              /* @__PURE__ */ jsx("h4", { className: "font-montserrat text-blue-400 text-[10px] tracking-[0.4em] uppercase mb-6 font-bold", children: "Visión 360°" }),
              /* @__PURE__ */ jsxs("p", { className: "font-montserrat text-white/70 text-xl leading-relaxed font-light leading-[1.6]", children: [
                '"Nuestra presencia en ',
                /* @__PURE__ */ jsx("span", { className: "text-white font-medium italic", children: "tres mercados clave" }),
                ' nos permite ejecutar campañas con relevancia cultural inmediata."'
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            whileHover: { scale: 0.98 },
            className: "bg-white p-10 rounded-[40px] flex flex-col justify-between group transition-all duration-500 cursor-pointer overflow-hidden relative",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-blue-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex justify-between items-start mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-black/5 p-4 rounded-2xl group-hover:bg-white/20 transition-colors", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-black group-hover:text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" }) }) }),
                /* @__PURE__ */ jsx("span", { className: "font-montserrat font-black text-black group-hover:text-white text-3xl italic", children: "2026" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx("span", { className: "block font-aston text-black group-hover:text-white text-4xl leading-[0.9]", children: "Cobertura Total" }),
                /* @__PURE__ */ jsx("p", { className: "mt-4 font-montserrat text-black/60 group-hover:text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold", children: "Centro de operaciones globales" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] }) });
};
const STEPS = [
  {
    id: "top",
    title: "Objetivos",
    desc: "Te ayudamos a alcanzar tus metas de marketing de forma clara y estratégica.",
    color: "#f87171",
    glow: "rgba(248, 113, 113, 0.35)",
    icon: /* @__PURE__ */ jsx(Target$1, { className: "w-5 h-5 md:w-6 md:h-6" }),
    arrow: /* @__PURE__ */ jsx(ArrowRight$1, { className: "w-4 h-4 md:w-5 md:h-5" }),
    positionClass: "top-[5%] left-1/2 -translate-x-1/2",
    iconClass: "top-[12.5%] right-[12.5%] translate-x-1/2 -translate-y-1/2",
    arrowClass: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
  },
  {
    id: "right",
    title: "Estrategia",
    desc: "Diseñamos la mejor ruta y definimos los pasos necesarios para alcanzar hitos.",
    color: "#60a5fa",
    glow: "rgba(96, 165, 250, 0.35)",
    icon: /* @__PURE__ */ jsx(Lightbulb, { className: "w-5 h-5 md:w-6 md:h-6" }),
    arrow: /* @__PURE__ */ jsx(ArrowDown, { className: "w-4 h-4 md:w-5 md:h-5" }),
    positionClass: "right-[5%] top-1/2 -translate-y-1/2",
    iconClass: "bottom-[12.5%] right-[12.5%] translate-x-1/2 translate-y-1/2",
    arrowClass: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
  },
  {
    id: "bottom",
    title: "Ejecución",
    desc: "Implementamos la estrategia a través de nuestro equipo y procesos especializados.",
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.35)",
    icon: /* @__PURE__ */ jsx(Handshake, { className: "w-5 h-5 md:w-6 md:h-6" }),
    arrow: /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 md:w-5 md:h-5" }),
    positionClass: "bottom-[5%] left-1/2 -translate-x-1/2",
    iconClass: "bottom-[12.5%] left-[12.5%] -translate-x-1/2 translate-y-1/2",
    arrowClass: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
  },
  {
    id: "left",
    title: "Resultados",
    desc: "Medimos cada acción para lograr los mejores resultados y cumplir los objetivos.",
    color: "#fbbf24",
    glow: "rgba(251, 191, 36, 0.35)",
    icon: /* @__PURE__ */ jsx(BarChart2$1, { className: "w-5 h-5 md:w-6 md:h-6" }),
    arrow: /* @__PURE__ */ jsx(ArrowUp, { className: "w-4 h-4 md:w-5 md:h-5" }),
    positionClass: "left-[5%] top-1/2 -translate-y-1/2",
    iconClass: "top-[12.5%] left-[12.5%] -translate-x-1/2 -translate-y-1/2",
    arrowClass: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
  }
];
function CompanySection() {
  const [activeId, setActiveId] = useState(null);
  return /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start lg:items-end order-last lg:order-first z-20", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-aston text-[42px] sm:text-[60px] lg:text-[75px] font-normal mb-6 leading-[1.1] text-white text-left lg:text-right", children: [
        "Somos una ",
        /* @__PURE__ */ jsx("span", { className: "font-montserrat font-bold block", children: "empresa" }),
        /* @__PURE__ */ jsx("span", { className: "font-montserrat font-bold block", children: "enfocada en" }),
        /* @__PURE__ */ jsx("span", { className: "text-soft-gray block mt-2", children: "Resultados" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "font-montserrat text-zinc-400 text-lg md:text-xl font-light max-w-xl text-left lg:text-right leading-relaxed", children: "Creamos planes basados en tus objetivos, logrando resultados de crecimiento a corto, mediano y largo plazo." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative flex items-center justify-center min-h-[500px] md:min-h-[650px]", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-[550px] aspect-square", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-20 blur-[100px] -z-10 animate-pulse", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-greenfield h-40 bg-red-600 rounded-full" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-40 h-40 bg-amber-600 rounded-full" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-2 border-dashed border-white/10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-[24%] rounded-full border border-dashed border-white/5" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 bg-[#0a0a0a] rounded-full flex items-center justify-center z-40 border border-white/10 shadow-2xl", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: LogoIcon,
          alt: "Logo",
          className: "w-12 h-12 md:w-16 md:h-16 object-contain"
        }
      ) }),
      STEPS.map((step) => {
        const isActive = activeId === step.id;
        return /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              onMouseEnter: () => setActiveId(step.id),
              onMouseLeave: () => setActiveId(null),
              className: `absolute ${step.positionClass} w-[26%] aspect-square p-3 md:p-4 z-30 flex flex-col justify-center cursor-pointer rounded-[1.5rem] backdrop-blur-md`,
              style: {
                // Solo cambian propiedades visuales, NUNCA transform
                background: isActive ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${isActive ? step.color + "99" : "rgba(255,255,255,0.05)"}`,
                boxShadow: isActive ? `0 0 40px 5px ${step.glow}, inset 0 0 20px ${step.glow}, 0 10px 30px -10px rgba(0,0,0,0.8)` : "0 10px 30px -10px rgba(0,0,0,0.5)",
                transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease"
              },
              children: [
                /* @__PURE__ */ jsx("h3", { className: "text-[12px] md:text-sm font-bold mb-1", style: { color: step.color }, children: step.title }),
                /* @__PURE__ */ jsx("p", { className: "text-[10px] md:text-[13px] text-zinc-400 leading-snug font-light", children: step.desc })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: `absolute ${step.iconClass} z-40`, children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0a0a0a] border-2 flex items-center justify-center",
              style: {
                borderColor: step.color,
                color: step.color,
                boxShadow: isActive ? `0 0 20px ${step.glow}` : "none",
                transition: "box-shadow 0.4s ease"
              },
              children: step.icon
            }
          ) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute ${step.arrowClass} z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#111] flex items-center justify-center`,
              style: {
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: isActive ? step.color : "rgba(255,255,255,0.1)",
                color: isActive ? step.color : "rgba(255,255,255,0.3)",
                boxShadow: isActive ? `0 0 15px ${step.glow}` : "none",
                transition: "border-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease"
                // ❌ SIN transform aquí — Tailwind ya pone el translate correcto vía arrowClass
              },
              children: step.arrow
            }
          )
        ] }, step.id);
      })
    ] }) })
  ] });
}
function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "bg-transparent text-white w-full selection:bg-blue-500/30", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs(
      motion.main,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx(SectionOne, {}),
          /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(CompanySection, {}) }),
          /* @__PURE__ */ jsx(ScrollReveal$1, { direction: "right", children: /* @__PURE__ */ jsx(WorldPresence, {}) }),
          /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(GroupSection, {}) }),
          /* @__PURE__ */ jsx(ScrollReveal$1, { direction: "left", children: /* @__PURE__ */ jsx(TeamSection, {}) }),
          /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(AboutBackedBy, {}) }),
          /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-14 px-4 border-t border-white/5", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsx(ScrollReveal$1, { direction: "down", delay: 0.3, children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setIsModalOpen(true),
              className: "group relative px-12 py-5 bg-transparent text-white font-montserrat font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 border border-white/10 shadow-2xl",
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(45deg,#ff4d4d,#4d79ff,#4dff88,#fffa4d)] bg-[length:200%_200%] animate-[gradient_3s_linear_infinite]" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-[2px] bg-white rounded-full z-0 group-hover:bg-black/80 transition-colors duration-500" }),
                /* @__PURE__ */ jsx("span", { className: "relative z-10 tracking-[0.2em] text-black group-hover:text-white transition-colors duration-500 uppercase", children: "Contáctanos ahora" })
              ]
            }
          ) }) }) })
        ]
      }
    ),
    isModalOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md transition-all", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { scale: 0.95, opacity: 0, y: 20 },
        animate: { scale: 1, opacity: 1, y: 0 },
        className: "bg-[#111] border border-white/10 p-8 rounded-3xl w-full max-w-lg relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
        children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setIsModalOpen(false), className: "absolute top-6 right-6 text-white/40 hover:text-white text-2xl", children: "×" }),
          /* @__PURE__ */ jsx("h2", { className: "font-aston text-3xl text-white mb-2", children: "Hablemos" }),
          /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: (e) => e.preventDefault(), children: [
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Nombre", className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-white" }),
            /* @__PURE__ */ jsx("input", { type: "email", placeholder: "Email", className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-white" }),
            /* @__PURE__ */ jsx("textarea", { placeholder: "¿En qué podemos ayudarte?", rows: 4, className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-white" }),
            /* @__PURE__ */ jsx("button", { className: "w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98]", children: "ENVIAR MENSAJE" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Services() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black text-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("h1", { children: "Services page" })
  ] });
}
function Loader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 15;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => setIsExiting(true), 200);
      }
      setProgress(value);
    }, 80);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `fixed inset-0 z-[10000] flex items-center justify-center bg-[#030303] overflow-hidden transition-transform duration-[1100ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${isExiting ? "-translate-y-full" : "translate-y-0"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[140px] animate-pulse-slow" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-red-600/10 blur-[140px] animate-pulse-slow", style: { animationDelay: "1s" } }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-emerald-500/5 blur-[120px]" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative mb-16", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden group", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: logoImage$1,
                  alt: "We Prom Marketing",
                  className: `w-64 md:w-80 object-contain transition-all duration-1000 ease-out
              ${progress > 10 ? "opacity-100 translate-y-0 filter-none" : "opacity-0 translate-y-8 blur-lg"}`
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full animate-light-sweep" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-3xl rounded-full animate-logo-glow" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-72 md:w-96 flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "h-[1px] w-full bg-white/10" }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "absolute top-0 left-0 h-[1px] transition-all duration-500 ease-out flex shadow-[0_0_15px_rgba(255,255,255,0.3)]",
                  style: { width: `${progress}%` },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1/4 h-full bg-red-500" }),
                    /* @__PURE__ */ jsx("div", { className: "w-1/4 h-full bg-blue-500" }),
                    /* @__PURE__ */ jsx("div", { className: "w-1/4 h-full bg-emerald-500" }),
                    /* @__PURE__ */ jsx("div", { className: "w-1/4 h-full bg-yellow-500" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] text-white/30 uppercase tracking-[0.4em] font-montserrat", children: "We Prom Marketing" }),
                /* @__PURE__ */ jsx("span", { className: "text-[8px] text-white/10 uppercase tracking-[0.2em]", children: "Creative Studio © 2026" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl font-aston text-white leading-none", children: Math.round(progress) }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] text-white/40 font-mono mb-[2px]", children: "%" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("style", { children: `
        @keyframes light-sweep {
          0% { transform: translateX(-150%) skewX(-12deg); }
          50% { transform: translateX(200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes logo-glow {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.8); }
          50% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.1); }
        }

        .animate-light-sweep {
          animation: light-sweep 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }

        .animate-logo-glow {
          animation: logo-glow 5s infinite ease-in-out;
        }
      ` })
      ]
    }
  );
}
const POSTS = [
  {
    id: 1,
    title: "Exploring the Future of DeFi: Beyond Traditional Finance",
    date: "January 30, 2025",
    category: "DeFi",
    image: "linear-gradient(135deg,#1a0533 0%,#6b21a8 50%,#db2777 100%)",
    author: "Sofia Chen",
    readTime: "8 min read",
    content: {
      introduction: "As the DeFi landscape grows, we are increasingly seeing seamless multi-chain integration. Developers, businesses, and users are leading a push to drive their decentralized applications across multiple blockchain ecosystems. This shift towards a multi-chain future is redefining how Web3 projects are built, organized, and scaled.",
      tableOfContents: ["Introduction", "Key Benefits of DeFi", "Interoperability", "Scalability", "Cost Efficiency", "How It's Shaping Web3 Development", "Looking Ahead", "Conclusion"],
      sections: [
        {
          heading: "Key Benefits of DeFi",
          body: "DeFi offers a wide range of advantages over traditional finance, enabling permissionless access and programmable money flows.",
          subsections: [
            { heading: "1. Interoperability", body: "Industry-compatible systems allow DeFi nodes to communicate and share data across different networks, enhancing functionality and reach." },
            { heading: "2. Scalability", body: "By distributing workloads across various networks, projects can reduce congestion and improve transaction speeds, allowing for healthier ecosystems and user experience." },
            { heading: "3. Cost Efficiency", body: "Multi-chain setups enable developers to choose networks with better transaction fees, splitting costs and optimizing gas for users and protocols alike." }
          ]
        },
        { heading: "How It's Shaping Web3 Development", body: "With multi-chain integration, developers no longer need to limit their dApps to a single ecosystem. The Web3 space is home to innovation, allowing projects to tap into various blockchain communities, attract a wider user base, and increase redundancy on any single network." },
        { heading: "Looking Ahead", body: "The future of DeFi is undeniably multi-chain. As tools to coordinate leverage and trading costs become available, they generate a strong backing for successful projects. Platforms enabling coordinated multi-chain support will be at the front of this revolution." }
      ],
      conclusion: "Multi-chain integration isn't a trend — it's the future of decentralized technology. By embracing this path, developers and businesses can build more resilient, scalable, and user-friendly products."
    }
  },
  {
    id: 2,
    title: "The Rise of DAOs: A New Model for Collaboration",
    date: "January 28, 2025",
    category: "DAOs",
    image: "linear-gradient(135deg,#0f172a 0%,#312e81 50%,#7c3aed 100%)",
    author: "Marco Reyes",
    readTime: "6 min read",
    content: {
      introduction: "Decentralized Autonomous Organizations (DAOs) represent a paradigm shift in how people coordinate, collaborate, and make collective decisions without the need for centralized leadership.",
      tableOfContents: ["Introduction", "What Are DAOs?", "Governance Models", "Challenges", "Future Outlook", "Conclusion"],
      sections: [
        { heading: "What Are DAOs?", body: "DAOs are organizations encoded as transparent, rules-based smart contracts. Members hold governance tokens that give them voting power over protocol decisions, treasury allocation, and product direction." },
        {
          heading: "Governance Models",
          body: "From simple token voting to quadratic mechanisms, DAOs are experimenting with increasingly sophisticated governance models to balance efficiency with decentralization.",
          subsections: [
            { heading: "Token-weighted voting", body: "The most common model, where each token equals one vote. Simple but susceptible to plutocracy." },
            { heading: "Quadratic voting", body: "Limits the influence of large token holders by making each additional vote progressively more expensive." }
          ]
        },
        { heading: "Challenges", body: "Despite their promise, DAOs face significant hurdles including voter apathy, governance attacks, legal uncertainty, and the difficulty of coordinating large groups of anonymous participants." }
      ],
      conclusion: "DAOs are still early-stage experiments, but they represent an exciting blueprint for future organizational structures that are more transparent, inclusive, and censorship-resistant."
    }
  },
  {
    id: 3,
    title: "The Role of Smart Contracts in Web3 Innovation",
    date: "January 25, 2025",
    category: "Smart Contracts",
    image: "linear-gradient(135deg,#0c1a2e 0%,#1e3a5f 50%,#2563eb 100%)",
    author: "Aisha Okonkwo",
    readTime: "7 min read",
    content: {
      introduction: "Smart contracts are the backbone of the Web3 ecosystem, enabling trustless, automated execution of agreements without the need for intermediaries.",
      tableOfContents: ["Introduction", "How Smart Contracts Work", "Use Cases", "Security Considerations", "The Road Ahead", "Conclusion"],
      sections: [
        { heading: "How Smart Contracts Work", body: "Written in languages like Solidity or Rust, smart contracts are programs that live on a blockchain. They execute deterministically when predefined conditions are met, making them transparent and tamper-proof." },
        {
          heading: "Use Cases",
          body: "From DeFi protocols and NFT marketplaces to supply chain tracking and insurance, smart contracts are enabling entirely new categories of products and services.",
          subsections: [
            { heading: "DeFi", body: "Automated market makers, lending protocols, and yield aggregators all rely on smart contracts to operate without human intervention." },
            { heading: "NFTs", body: "Ownership, royalties, and provenance of digital assets are enforced automatically through contract logic." }
          ]
        },
        { heading: "Security Considerations", body: "Bugs in smart contract code can be catastrophic and irreversible. Rigorous auditing, formal verification, and bug bounty programs are essential practices for any production deployment." }
      ],
      conclusion: "Smart contracts have unlocked a new design space for building trustless systems. As tooling and best practices mature, they will become an even more fundamental component of the global digital infrastructure."
    }
  },
  {
    id: 4,
    title: "Building Scalable dApps: What You Need to Know",
    date: "January 22, 2025",
    category: "dApps",
    image: "linear-gradient(135deg,#1a0a2e 0%,#7e22ce 40%,#db2777 80%,#f97316 100%)",
    author: "Jordan Park",
    readTime: "9 min read",
    content: {
      introduction: "Building decentralized applications that can handle real-world usage requires careful attention to architecture, performance, and user experience.",
      tableOfContents: ["Introduction", "Architecture Patterns", "Scalability Strategies", "Frontend Considerations", "Testing & Deployment", "Conclusion"],
      sections: [
        { heading: "Architecture Patterns", body: "Successful dApps typically separate on-chain logic (handled by smart contracts) from off-chain data storage and computation, using systems like IPFS, The Graph, or centralized backends where necessary." },
        { heading: "Scalability Strategies", body: "Layer 2 solutions like Optimism, Arbitrum, and zkSync dramatically reduce transaction costs and increase throughput while maintaining Ethereum's security guarantees." },
        { heading: "Frontend Considerations", body: "A smooth wallet connection flow, clear transaction feedback, and graceful error handling are the difference between a dApp users love and one they abandon." }
      ],
      conclusion: "Building scalable dApps is a multi-faceted challenge, but with the right tools and architecture decisions, it's entirely achievable. The ecosystem is maturing rapidly, making it an exciting time to build."
    }
  },
  {
    id: 5,
    title: "Why User Experience is Key to Web3 Mass Adoption",
    date: "January 20, 2025",
    category: "UX",
    image: "linear-gradient(135deg,#2d1b69 0%,#c026d3 60%,#f0abfc 100%)",
    author: "Lena Fischer",
    readTime: "5 min read",
    content: {
      introduction: "Web3's greatest barrier to mainstream adoption isn't technology — it's usability. Until interacting with decentralized applications feels as natural as using any other app, adoption will remain niche.",
      tableOfContents: ["Introduction", "Current UX Challenges", "Wallet Onboarding", "Abstracting Complexity", "Design Principles", "Conclusion"],
      sections: [
        { heading: "Current UX Challenges", body: "Seed phrases, gas fees, transaction confirmations, and network switching create enormous friction for new users who expect the simplicity of Web2 applications." },
        { heading: "Wallet Onboarding", body: "Account abstraction and social login solutions are making it possible to onboard users without requiring them to understand private keys or seed phrases from day one." },
        { heading: "Abstracting Complexity", body: "The best Web3 UX hides complexity without sacrificing user sovereignty. Gas sponsorship, batched transactions, and intelligent defaults can make the experience seamless." }
      ],
      conclusion: "The projects that crack Web3 UX will win the next wave of users. Design thinking and empathy for non-technical users must become first-class concerns in every Web3 team."
    }
  },
  {
    id: 6,
    title: "Enhancing Security in Web3: Best Practices for Developers",
    date: "January 15, 2025",
    category: "Security",
    image: "linear-gradient(135deg,#042f2e 0%,#0d9488 50%,#67e8f9 100%)",
    author: "Dev Patel",
    readTime: "10 min read",
    content: {
      introduction: "Security in Web3 is non-negotiable. Billions of dollars have been lost to exploits, and the immutable nature of blockchain means mistakes can be permanent.",
      tableOfContents: ["Introduction", "Common Vulnerabilities", "Audit Best Practices", "On-chain Monitoring", "Incident Response", "Conclusion"],
      sections: [
        { heading: "Common Vulnerabilities", body: "Reentrancy attacks, integer overflow, access control issues, and oracle manipulation are among the most common vectors exploited in smart contract hacks." },
        { heading: "Audit Best Practices", body: "Engage multiple reputable auditors, run automated tools like Slither and MythX, and maintain comprehensive test suites. Audits are a process, not a one-time event." },
        { heading: "On-chain Monitoring", body: "Real-time monitoring with tools like Forta or OpenZeppelin Defender can detect anomalous activity and trigger automated responses before damage escalates." }
      ],
      conclusion: "Security is a mindset, not a checklist. Building secure Web3 applications requires constant vigilance, community collaboration, and a commitment to transparency."
    }
  },
  {
    id: 7,
    title: "Decentralization vs. Centralization: Striking the Right Balance",
    date: "January 12, 2025",
    category: "Web3",
    image: "linear-gradient(135deg,#1e1b4b 0%,#4f46e5 50%,#818cf8 100%)",
    author: "Mia Thornton",
    readTime: "6 min read",
    content: {
      introduction: "The decentralization spectrum is nuanced. Very few applications are truly fully decentralized, and that's okay — the goal is finding the right balance for each use case.",
      tableOfContents: ["Introduction", "The Spectrum", "When Centralization Helps", "Progressive Decentralization", "Tradeoffs", "Conclusion"],
      sections: [
        { heading: "The Spectrum", body: "Decentralization exists on a spectrum across multiple dimensions: consensus, data storage, governance, and front-end hosting. A project can be decentralized in some dimensions and centralized in others." },
        { heading: "When Centralization Helps", body: "Speed, cost, and user experience often improve with some centralization. The key is understanding which components benefit from decentralization and which don't." },
        { heading: "Progressive Decentralization", body: "Many successful projects start centralized to move fast and iterate, then progressively hand control to the community as the protocol matures." }
      ],
      conclusion: 'The binary framing of "decentralized vs. centralized" is counterproductive. Thoughtful, context-specific decisions about where to decentralize will build more resilient and useful systems.'
    }
  },
  {
    id: 8,
    title: "Top 5 Tools Every Web3 Developer Should Use in 2025",
    date: "January 10, 2025",
    category: "Tools",
    image: "linear-gradient(135deg,#2d0036 0%,#9333ea 40%,#f472b6 80%,#fbbf24 100%)",
    author: "Carlos Vega",
    readTime: "7 min read",
    content: {
      introduction: "The Web3 developer toolchain has matured dramatically. Here are the essential tools that will make you more productive, help you ship safer code, and improve your development experience in 2025.",
      tableOfContents: ["Introduction", "Foundry", "The Graph", "Wagmi", "Hardhat", "OpenZeppelin", "Conclusion"],
      sections: [
        { heading: "Foundry", body: "The gold standard for Solidity testing and deployment. Its fast compilation, fuzzing capabilities, and Forge scripting make it the go-to toolkit for serious smart contract developers." },
        { heading: "The Graph", body: "Indexing and querying blockchain data is painful without The Graph. Its subgraph protocol makes it easy to expose GraphQL APIs over any on-chain data." },
        { heading: "Wagmi", body: "React hooks for Ethereum that handle wallet connection, contract reads/writes, and real-time updates with a clean, composable API." },
        { heading: "Hardhat", body: "Still a powerhouse for its plugin ecosystem, local node simulation, and console.log debugging in Solidity." },
        { heading: "OpenZeppelin", body: "Battle-tested contract libraries that provide secure, audited implementations of ERC standards, access control, and security primitives." }
      ],
      conclusion: "Mastering these tools will significantly accelerate your development workflow and help you build more robust Web3 applications."
    }
  },
  {
    id: 9,
    title: "How Multi-Chain Integration is Shaping the Future of Web3",
    date: "January 5, 2025",
    category: "Multi-Chain",
    image: "linear-gradient(135deg,#0f172a 0%,#1e40af 40%,#06b6d4 100%)",
    author: "Sofia Chen",
    readTime: "8 min read",
    content: {
      introduction: "As the Web3 landscape grows, we are increasingly seeing seamless multi-chain integration. Developers, businesses, and users are leading a push to drive their decentralized applications across multiple blockchain ecosystems. This shift towards a multi-chain future is redefining how Web3 projects are built, organized, and scaled.",
      tableOfContents: ["Introduction", "Key Benefits of Multi-Chain Integration", "Interoperability", "Scalability", "Cost Efficiency", "How It's Shaping Web3 Development", "Looking Ahead", "Conclusion"],
      sections: [
        {
          heading: "Key Benefits of Multi-Chain Integration",
          body: "Multi-chain architecture provides a framework for the next generation of blockchain applications.",
          subsections: [
            { heading: "1. Interoperability", body: "Industry-compatible systems allow blockchain nodes to communicate and share data across different networks, enhancing functionality and reach." },
            { heading: "2. Scalability", body: "By distributing workloads across various networks, projects can reduce congestion and improve transaction speeds, allowing for a healthier ecosystem and user experience." },
            { heading: "3. Cost Efficiency", body: "Multi-chain setups enable developers to choose networks with better transaction fees, splitting costs and optimizing gas for users alike." }
          ]
        },
        { heading: "How It's Shaping Web3 Development", body: "With multi-chain integration, developers no longer need to limit their dApps to a single ecosystem. The Web3 space is home to innovation, allowing projects to tap into various blockchain communities, attract a wider user base, and increase resiliency on any single network." },
        { heading: "Looking Ahead", body: "The future of Web3 is undeniably multi-chain. As tools to coordinate leverage and trading costs become available, they generate a strong backing for successful projects. Platforms enabling coordinated multi-chain support will be at the front of this revolution." }
      ],
      conclusion: "Multi-chain integration isn't a trend — it's the future of decentralized technology. By embracing this path, developers and businesses can build more resilient, scalable, and user-friendly products."
    }
  }
];
const FULL_GRADIENT$2 = "linear-gradient(90deg, #DA3731, #1096D6, #F7B033)";
function getRelatedPosts(currentId, count = 3) {
  return POSTS.filter((p) => p.id !== currentId).slice(0, count);
}
const XIcon = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) });
const FacebookIcon = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) });
const LinkedInIcon = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) });
const InstagramIcon = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" }) });
function TableOfContents({ items }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "rounded-2xl p-5",
      style: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" },
      children: [
        /* @__PURE__ */ jsx("p", { className: "font-montserrat font-bold text-white text-[13px] uppercase tracking-widest mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: items.map((item, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: `#section-${i}`,
            className: "font-montserrat text-[12px] text-white/50 hover:text-white/90 transition-colors block leading-relaxed",
            children: item
          }
        ) }, i)) })
      ]
    }
  );
}
function RelatedCard({ post, onClick }) {
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      whileHover: { y: -3 },
      onClick,
      className: "group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer hover:border-white/20 transition-all",
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative w-full aspect-[4/3]", style: { background: post.image }, children: /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute top-3 left-3 font-montserrat text-[10px] font-semibold uppercase tracking-widest text-white px-2.5 py-1 rounded-full",
            style: { background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.12)" },
            children: post.category
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-montserrat font-semibold text-white text-[13px] leading-snug line-clamp-2 group-hover:text-white/80 transition-colors", children: post.title }),
          /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/35 text-[11px]", children: post.date })
        ] })
      ]
    }
  );
}
function BlogPostPage({
  post,
  onBack,
  onNavigate
}) {
  var _a;
  const related = getRelatedPosts(post.id);
  const content = post.content;
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.4 },
      className: "w-full bg-transparent min-h-screen py-12 px-4 sm:px-8",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          motion.button,
          {
            initial: { opacity: 0, x: -12 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.1 },
            onClick: onBack,
            className: "font-montserrat text-[12px] text-white/40 hover:text-white/80 transition-colors mb-8 flex items-center gap-2",
            children: "← Back to Blog"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.15 },
            className: "flex justify-center mb-4",
            children: /* @__PURE__ */ jsxs(
              "span",
              {
                className: "font-montserrat text-[11px] font-semibold uppercase tracking-widest text-white px-4 py-1.5 rounded-full",
                style: { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" },
                children: [
                  post.category,
                  " & Tools"
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          motion.h1,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "font-montserrat font-bold text-white text-center text-[28px] sm:text-[36px] lg:text-[42px] leading-tight tracking-tight mb-5 max-w-3xl mx-auto",
            children: post.title
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.25 },
            className: "flex items-center justify-center gap-3 mb-10",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-montserrat font-bold flex-shrink-0",
                  style: { background: FULL_GRADIENT$2 },
                  children: (_a = post.author) == null ? void 0 : _a.split(" ").map((n) => n[0]).join("")
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "font-montserrat text-white/50 text-[12px]", children: post.author }),
              /* @__PURE__ */ jsx("span", { className: "text-white/20 text-[12px]", children: "·" }),
              /* @__PURE__ */ jsx("span", { className: "font-montserrat text-white/50 text-[12px]", children: post.date }),
              /* @__PURE__ */ jsx("span", { className: "text-white/20 text-[12px]", children: "·" }),
              /* @__PURE__ */ jsx("span", { className: "font-montserrat text-white/50 text-[12px]", children: post.readTime })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.98 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.3, duration: 0.6 },
            className: "w-full aspect-[16/7] rounded-3xl overflow-hidden mb-12",
            style: { background: post.image },
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-full h-full opacity-20 mix-blend-overlay",
                style: { backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-10", children: [
          /* @__PURE__ */ jsxs(
            motion.article,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.35 },
              className: "flex-1 min-w-0",
              children: [
                /* @__PURE__ */ jsx("h2", { className: "font-montserrat font-bold text-white text-[16px] mb-4", children: "Introduction" }),
                /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/60 text-[14px] leading-relaxed mb-10", children: content.introduction }),
                content.sections.map((section, si) => {
                  var _a2;
                  return /* @__PURE__ */ jsxs("div", { id: `section-${si + 1}`, className: "mb-10", children: [
                    /* @__PURE__ */ jsx("h2", { className: "font-montserrat font-bold text-white text-[16px] mb-4", children: section.heading }),
                    /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/60 text-[14px] leading-relaxed mb-5", children: section.body }),
                    (_a2 = section.subsections) == null ? void 0 : _a2.map((sub, ssi) => /* @__PURE__ */ jsxs("div", { className: "mb-4 pl-5 border-l border-white/10", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-montserrat font-semibold text-white/80 text-[13px] mb-1.5", children: sub.heading }),
                      /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/50 text-[13px] leading-relaxed", children: sub.body })
                    ] }, ssi))
                  ] }, si);
                }),
                /* @__PURE__ */ jsxs("div", { id: `section-${content.sections.length + 1}`, className: "mb-10", children: [
                  /* @__PURE__ */ jsx("h2", { className: "font-montserrat font-bold text-white text-[16px] mb-4", children: "Conclusion" }),
                  /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/60 text-[14px] leading-relaxed", children: content.conclusion })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 pt-6 border-t border-white/10", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-montserrat text-white/40 text-[12px]", children: "Share this blog" }),
                  [XIcon, FacebookIcon, LinkedInIcon, InstagramIcon].map((Icon, i) => /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors",
                      style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" },
                      children: /* @__PURE__ */ jsx(Icon, {})
                    },
                    i
                  ))
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.aside,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.4 },
              className: "lg:w-[220px] flex-shrink-0",
              children: /* @__PURE__ */ jsx(TableOfContents, { items: content.tableOfContents })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-20 pt-10 border-t border-white/10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-montserrat font-bold text-white text-[20px]", children: "Read More" }),
            /* @__PURE__ */ jsx(
              motion.button,
              {
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.97 },
                onClick: onBack,
                className: "font-montserrat text-[12px] text-white/50 px-4 py-2 rounded-full hover:text-white transition-colors",
                style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" },
                children: "See All"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: related.map((rp) => /* @__PURE__ */ jsx(
            RelatedCard,
            {
              post: rp,
              onClick: () => {
                onNavigate(rp);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            },
            rp.id
          )) })
        ] })
      ] })
    },
    post.id
  );
}
const FULL_GRADIENT$1 = "linear-gradient(90deg, #DA3731, #1096D6, #F7B033)";
const GradientLine = () => /* @__PURE__ */ jsx("div", { className: "w-16 h-[2px] mb-6", style: { background: FULL_GRADIENT$1 } });
const POSTS_PER_PAGE = 9;
function NewsletterStrip() {
  const [email, setEmail] = useState("");
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.7 },
      className: "w-full border-t border-white/10 pt-16 mt-20 flex flex-col sm:flex-row items-center justify-between gap-8",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-xs", children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-aston text-[36px] sm:text-[44px] text-white leading-tight tracking-tight mb-3", children: [
            "¡Eso no",
            /* @__PURE__ */ jsx("br", {}),
            "es Todo!"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/40 text-[13px] leading-relaxed", children: "¿Quieres conocer más sobre los temas más relevantes de Marketing y Publicidad?" })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex flex-col gap-4 w-full sm:w-auto sm:min-w-[320px] p-6 rounded-[24px]",
            style: { background: "rgba(255,255,255,0.07)" },
            children: [
              /* @__PURE__ */ jsxs("p", { className: "font-montserrat font-bold text-white text-[18px] sm:text-[20px] text-center leading-snug", children: [
                "Suscríbete a",
                /* @__PURE__ */ jsx("br", {}),
                "nuestro news letter"
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  placeholder: "E-mail",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  className: "bg-transparent border border-white/20 rounded-full px-5 py-2.5 font-montserrat text-white text-[13px] text-right placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                }
              ),
              /* @__PURE__ */ jsx(
                motion.button,
                {
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.97 },
                  className: "relative w-full py-2.5 rounded-full font-montserrat font-semibold text-white text-[13px] tracking-wide transition-all overflow-hidden",
                  style: {
                    background: "transparent",
                    border: "1.5px solid transparent",
                    backgroundImage: "linear-gradient(#111, #111), linear-gradient(90deg, #DA3731, #1096D6, #F7B033)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box"
                  },
                  children: "subscribe"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function Pagination({
  current,
  total,
  onPrev,
  onNext,
  onPage
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mt-12", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onPrev,
        disabled: current === 1,
        className: "font-montserrat text-[12px] text-white/50 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition disabled:opacity-30",
        children: "Previous"
      }
    ),
    Array.from({ length: total }, (_, i) => i + 1).map((n) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onPage(n),
        className: `w-8 h-8 rounded-full font-montserrat text-[12px] border transition ${n === current ? "border-white/30 text-white bg-white/10" : "border-white/10 text-white/40 bg-white/[0.03] hover:bg-white/[0.07]"}`,
        children: n
      },
      n
    )),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onNext,
        disabled: current === total,
        className: "font-montserrat text-[12px] text-white/50 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition disabled:opacity-30",
        children: "Next"
      }
    )
  ] });
}
function BlogCard({
  post,
  index,
  onClick
}) {
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.07, duration: 0.55 },
      whileHover: { y: -4 },
      onClick,
      className: "group flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer transition-all hover:border-white/20 hover:bg-white/[0.04]",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative w-full aspect-[4/3] overflow-hidden",
            style: { background: post.image },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 opacity-20 mix-blend-overlay",
                  style: { backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "absolute top-3 left-3 font-montserrat text-[10px] font-semibold uppercase tracking-widest text-white px-2.5 py-1 rounded-full",
                  style: { background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.12)" },
                  children: post.category
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-4 flex flex-col flex-1 gap-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-montserrat font-semibold text-white text-[13px] leading-snug group-hover:text-white/90 transition-colors line-clamp-2", children: post.title }),
          /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/35 text-[11px] mt-auto pt-2", children: post.date })
        ] })
      ]
    }
  );
}
function BlogSection$1() {
  const [page, setPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const totalPages = Math.ceil(POSTS.length / POSTS_PER_PAGE);
  const visiblePosts = POSTS.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  const handlePage = (n) => {
    setPage(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (selectedPost) {
    return /* @__PURE__ */ jsx(
      BlogPostPage,
      {
        post: selectedPost,
        onBack: () => {
          setSelectedPost(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        onNavigate: (p) => {
          setSelectedPost(p);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    );
  }
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-24 px-4 sm:px-8 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "flex flex-col items-center text-center mb-14",
        children: [
          /* @__PURE__ */ jsx(GradientLine, {}),
          /* @__PURE__ */ jsx("h1", { className: "font-aston text-[36px] sm:text-[52px] lg:text-[60px] text-white leading-tight tracking-tight mb-3", children: "Stay Ahead in Web3" }),
          /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/40 text-[13px] sm:text-[14px] max-w-md leading-relaxed", children: "Explore expert insights, industry trends, and best practices for building in the decentralized future." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: visiblePosts.map((post, i) => /* @__PURE__ */ jsx(
      BlogCard,
      {
        post,
        index: i,
        onClick: () => {
          setSelectedPost(post);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
      post.id
    )) }),
    /* @__PURE__ */ jsx(
      Pagination,
      {
        current: page,
        total: totalPages,
        onPrev: () => handlePage(Math.max(1, page - 1)),
        onNext: () => handlePage(Math.min(totalPages, page + 1)),
        onPage: handlePage
      }
    ),
    /* @__PURE__ */ jsx(NewsletterStrip, {})
  ] }) });
}
function Blog() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-transparent text-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(BlogSection$1, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const image = "/assets/mapImage-DX5grLdX.jpg";
const RocketIconNewProjects = "/assets/RocketIcon-O_DCHZ_D.jpg";
const PersonIconClients = "/assets/PersonIcon-BAq6E3pB.jpg";
const MessageIconGeneral = "/assets/MessageIcon-3ZcJhqWS.jpg";
const FULL_GRADIENT = "linear-gradient(90deg, #973a32, #558aac, #72987f, #d39b44)";
const GradientText = ({ children, className = "" }) => /* @__PURE__ */ jsx(
  "span",
  {
    className,
    style: {
      background: FULL_GRADIENT,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "inline"
    },
    children
  }
);
const IconPin = () => /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
] });
const IconClock = () => /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })
] });
const IconCalendar = () => /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
  /* @__PURE__ */ jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
  /* @__PURE__ */ jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
  /* @__PURE__ */ jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
] });
const contactOptions = [
  {
    title: "Nuevos Proyectos",
    description: "¿Buscas escalar tus resultados?",
    link: "ventas@weprom.mx"
  },
  {
    title: "Clientes",
    description: "Seguimiento de tus estrategias actuales.",
    link: "proyectos@weprom.mx"
  },
  {
    title: "General",
    description: "Alianzas, dudas generales, otros.",
    link: "hola@weprom.mx"
  }
];
const officeCards = [
  { label: "Dirección", value: "C. Corrientes 3071, Colomos Providencia, Gdl, Jalisco, Mex." },
  { label: "Horario de oficina", value: "9:00 PM - 3:00 PM" },
  { label: "Días de atencion", value: "Lunes a Viernes" }
];
const officeIcons = [IconPin, IconClock, IconCalendar];
const GradientArrow = () => /* @__PURE__ */ jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "g-arr", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
    /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#ef4444" }),
    /* @__PURE__ */ jsx("stop", { offset: "33%", stopColor: "#3b82f6" }),
    /* @__PURE__ */ jsx("stop", { offset: "66%", stopColor: "#22c55e" }),
    /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#facc15" })
  ] }) }),
  /* @__PURE__ */ jsx("path", { d: "M7 17L17 7M7 7h10v10", stroke: "url(#g-arr)" })
] });
const contactIcons = [RocketIconNewProjects, PersonIconClients, MessageIconGeneral];
function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    alert("¡Mensaje enviado con éxito!");
    console.log("Form data:", formData);
  };
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent pt-[12rem] pb-[5rem] px-4 sm:px-8 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 mb-[6rem]", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "flex flex-col justify-start pt-2",
          children: [
            /* @__PURE__ */ jsx("h1", { className: "font-aston text-[45px] sm:text-[59px] lg:text-[67px] text-white leading-[1.05] tracking-tight mb-4", children: "Estamos para ti" }),
            /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/80 text-[15px] sm:text-[16px] leading-relaxed mb-6 max-w-[90%]", children: "¿Tienes un reto en mente, buscas una estrategia integral o quieres colaborar? Escríbenos y tracemos el plan." }),
            /* @__PURE__ */ jsx("p", { className: "font-montserrat font-semibold text-white text-[16px] mb-8", children: "¿Prefieres escribirnos directamente?" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-7", children: contactOptions.map((item, i) => {
              return /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { delay: i * 0.15, duration: 0.6 },
                  className: "flex items-start gap-5",
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: contactIcons[i],
                        alt: item.title,
                        className: "mt-0.5 flex-shrink-0 w-15 h-15 object-contain",
                        style: { filter: "saturate(1.8) brightness(1.5)" }
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-montserrat font-bold text-white text-[17px] mb-0.5", children: item.title }),
                      /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/70 text-[15px] leading-relaxed mb-1", children: item.description }),
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: `mailto:${item.link}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "font-montserrat font-bold text-[15px] hover:opacity-80 transition-opacity inline-flex items-center gap-1.5 cursor-pointer",
                          style: { filter: "saturate(1.8) brightness(1.2)" },
                          onClick: (e) => {
                            e.preventDefault();
                            window.location.href = `mailto:${item.link}`;
                          },
                          children: [
                            /* @__PURE__ */ jsx(GradientText, { children: item.link }),
                            /* @__PURE__ */ jsx(GradientArrow, {})
                          ]
                        }
                      )
                    ] })
                  ]
                },
                i
              );
            }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.form,
        {
          onSubmit: (e) => {
            e.preventDefault();
            handleSubmit();
          },
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex flex-col gap-5",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("label", { className: "font-montserrat text-white/60 text-[12px] uppercase tracking-widest", children: "Nombre *" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  name: "fullName",
                  value: formData.fullName,
                  onChange: handleChange,
                  placeholder: "Nombre completo",
                  className: "bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("label", { className: "font-montserrat text-white/60 text-[12px] uppercase tracking-widest", children: "Email *" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  name: "email",
                  value: formData.email,
                  onChange: handleChange,
                  placeholder: "Correo electrónico",
                  type: "email",
                  className: "bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("label", { className: "font-montserrat text-white/60 text-[12px] uppercase tracking-widest", children: "Teléfono" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  name: "phone",
                  value: formData.phone,
                  onChange: handleChange,
                  placeholder: "+## ### ### ####",
                  type: "tel",
                  className: "bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("label", { className: "font-montserrat text-white/60 text-[12px] uppercase tracking-widest", children: "Asunto *" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "category",
                  value: formData.category,
                  onChange: handleChange,
                  className: "bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] focus:outline-none focus:border-white/30 transition-colors appearance-none",
                  required: true,
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", disabled: true, className: "bg-black", children: "¿En qué podemos ayudarte?" }),
                    /* @__PURE__ */ jsx("option", { value: "marketResearch", className: "bg-black", children: "Investigacion de mercados" }),
                    /* @__PURE__ */ jsx("option", { value: "digitalMarketing", className: "bg-black", children: "Marketing digital" }),
                    /* @__PURE__ */ jsx("option", { value: "audiovisualProduction", className: "bg-black", children: "Produccion audiovisual" }),
                    /* @__PURE__ */ jsx("option", { value: "consulting", className: "bg-black", children: "Consultoría" }),
                    /* @__PURE__ */ jsx("option", { value: "other", className: "bg-black", children: "Otro" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("label", { className: "font-montserrat text-white/60 text-[12px] uppercase tracking-widest", children: "Mensaje *" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "message",
                  value: formData.message,
                  onChange: handleChange,
                  placeholder: "Platiquemos",
                  rows: 5,
                  className: "bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-montserrat text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              motion.button,
              {
                type: "submit",
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                className: "w-full py-3 rounded-xl font-montserrat font-semibold text-white text-[14px] tracking-wide transition-all",
                style: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" },
                children: "Enviar mensaje"
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "flex flex-col items-center text-center",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "font-montserrat text-white/50 text-[11px] uppercase tracking-widest", children: "Our Office" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-aston text-[32px] sm:text-[48px] lg:text-[56px] text-white leading-tight tracking-tight mb-4", children: "Ven a conocernos" }),
          /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/70 text-[15px] leading-relaxed max-w-lg mb-12", children: "Ya sea para hablar de negocios, conocer nuestra metología o simplemente saludar, siempre eres bienvenido en nuestra oficina." }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mb-12", children: officeCards.map((item, i) => {
            const Icon = officeIcons[i];
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1, duration: 0.6 },
                className: "bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "text-white/40", children: /* @__PURE__ */ jsx(Icon, {}) }),
                  /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/50 text-[11px] uppercase tracking-widest", children: item.label }),
                  /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white text-[14px] text-center leading-snug", children: item.value })
                ]
              },
              i
            );
          }) }),
          /* @__PURE__ */ jsx("img", { src: image, alt: "Office Location Map", className: "w-full max-w-4xl rounded-2xl mb-12 object-cover" }),
          /* @__PURE__ */ jsx(
            motion.a,
            {
              href: "https://maps.app.goo.gl/vhyJfQ9n5bd518nJ8",
              target: "_blank",
              rel: "noopener noreferrer",
              whileHover: { scale: 1.03 },
              whileTap: { scale: 0.97 },
              className: "font-montserrat font-semibold text-[13px] text-white px-8 py-3 rounded-full tracking-wide",
              style: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" },
              children: "Obtener dirección"
            }
          )
        ]
      }
    )
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-transparent text-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(ContactSection, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const orbRef = useRef(null);
  useEffect(() => {
    let animationFrameId;
    let mouseRafId;
    const handleMouseMove = (e) => {
      if (orbRef.current) {
        if (mouseRafId) cancelAnimationFrame(mouseRafId);
        mouseRafId = requestAnimationFrame(() => {
          if (orbRef.current) {
            orbRef.current.style.transform = `translate(${e.clientX - 125}px, ${e.clientY - 125}px)`;
          }
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let particles = [];
    const particleCount = 40;
    const colors2 = ["#c5362e", "#599ddf", "#80b67d", "#e6af41"];
    const MAX_DIST = 150;
    const MAX_DIST_SQ = MAX_DIST * MAX_DIST;
    class Particle {
      constructor(canvasWidth, canvasHeight) {
        __publicField(this, "x");
        __publicField(this, "y");
        __publicField(this, "size");
        __publicField(this, "speedX");
        __publicField(this, "speedY");
        __publicField(this, "color");
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = colors2[Math.floor(Math.random() * colors2.length)];
      }
      update(canvasWidth, canvasHeight) {
        this.x += this.speedX;
        this.y += this.speedY;
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
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MAX_DIST_SQ) {
            const distance = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 1 - distance / MAX_DIST;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    window.addEventListener("resize", init);
    init();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
      if (mouseRafId) cancelAnimationFrame(mouseRafId);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 -z-10 overflow-hidden bg-black", children: [
    /* @__PURE__ */ jsx(
      "canvas",
      {
        ref: canvasRef,
        className: "absolute inset-0 opacity-40 pointer-events-none"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#c5362e]/20 rounded-full blur-[120px] animate-blob pointer-events-none" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-[#80b67d]/15 rounded-full blur-[130px] animate-blob pointer-events-none",
        style: { animationDelay: "2s" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute bottom-[-10%] left-[10%] w-[550px] h-[550px] bg-[#599ddf]/15 rounded-full blur-[120px] animate-blob pointer-events-none",
        style: { animationDelay: "4s" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: orbRef,
        className: "absolute top-0 left-0 w-[250px] h-[250px] bg-[#e6af41]/25 rounded-full blur-[80px] pointer-events-none z-0",
        style: {
          transform: "translate(-500px, -500px)",
          // Fuera de pantalla al iniciar hasta que el mouse se mueva
          transition: "transform 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67)"
        }
      }
    )
  ] });
};
const b1_1 = "/assets/banner1_1-Dh6qBC5O.png";
const b1_2 = "/assets/banner1_2-aNL-P6Hx.png";
const b1_3 = "/assets/banner1_3-KVH3OqH2.png";
const b1_4 = "/assets/banner1_4-C-t-CUzg.png";
const b1_5 = "/assets/banner1_5-BpHEsNG_.png";
const b1_6 = "/assets/banner1_6-BiLxMJVs.png";
const b2_1 = "/assets/banner2_1-Dv16O-0V.png";
const b2_2 = "/assets/banner2_2-k0PVTLN5.png";
const b2_3 = "/assets/banner2_3-D0pGbVhG.png";
const b2_4 = "/assets/banner2_4-gll5468D.png";
const b2_5 = "/assets/banner2_5-BlQp1fcy.png";
const imagesRow1 = [b1_1, b1_2, b1_3, b1_4, b1_5, b1_6];
const imagesRow2 = [b2_1, b2_2, b2_3, b2_4, b2_5];
const ScrollingRow = ({ images, direction = 1 }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex overflow-hidden gap-6 py-2", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "flex gap-6 flex-nowrap",
      animate: {
        x: direction > 0 ? [0, -1920] : [-1920, 0]
      },
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          // Aumenté un poco el tiempo para que sea más elegante/lento
          ease: "linear"
        }
      },
      children: [...images, ...images, ...images].map((src, idx) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-[280px] h-[180px] sm:w-[450px] sm:h-[280px] flex-shrink-0 rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/5 shadow-2xl",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src,
              alt: `Branding Project ${idx}`,
              className: "w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            }
          )
        },
        idx
      ))
    }
  ) });
};
const Hero = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full pt-[9rem] pb-20 overflow-hidden bg-transparent", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-20 text-center mb-16 mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-aston font-medium text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-6 tracking-tight text-center", children: "“La primera impresión nunca se olvida”" }),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 15 },
          animate: { opacity: 1, y: 0 },
          className: "font-montserrat text-white text-base sm:text-md lg:text-base mb-3 tracking-[0.1em]",
          children: "La identidad de tu marca será la manera en que tus clientes te percibirán y recordarán, por ello, es importante desarrollar un concepto creativo único que transmita los objetivos y diferenciadores de tu empresa, producto o servicio."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 sm:gap-6", children: [
      /* @__PURE__ */ jsx(ScrollingRow, { images: imagesRow1, direction: 1 }),
      /* @__PURE__ */ jsx(ScrollingRow, { images: imagesRow2, direction: -1 })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex mt-12 justify-center w-full", children: /* @__PURE__ */ jsx("button", { className: "px-10 py-4 bg-white hover:bg-gray-400 text-black font-montserrat font-bold rounded-full transition-all duration-300 text-sm sm:text-base min-w-[220px]", children: "Ver Portafolio" }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" })
  ] });
};
const campaignImg = "/assets/section2_1-Cv7tTNRk.png";
const CampaignDesign = () => {
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-20 px-4 sm:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row justify-around items-center md:items-center mb-20 gap-6", children: /* @__PURE__ */ jsx("div", { className: "text-center md:text-left", children: /* @__PURE__ */ jsx("h2", { className: "font-aston text-white text-3xl sm:text-4xl lg:text-5xl font-normal", children: "Servicios que Ofrecemos" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ jsx("button", { className: "absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-125 transition-transform", children: /* @__PURE__ */ jsx(ChevronLeft$1, { size: 48, strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsx("button", { className: "absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-125 transition-transform", children: /* @__PURE__ */ jsx(ChevronRight$1, { size: 48, strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsx("div", { className: "p-[3px] rounded-[40px] sm:rounded-[60px] bg-gradient-to-r from-[#ff3d00] via-[#00a2ff] to-[#ffb800]", children: /* @__PURE__ */ jsx("div", { className: "bg-[#0a0a0a] rounded-[39px] sm:rounded-[59px] overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-10 py-28 sm:px-16 lg:pl-16 lg:pr-2 order-2 lg:order-1 leading-loose z-20", children: [
          /* @__PURE__ */ jsx(
            motion.h3,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              className: "font-aston font-normal text-white text-3xl sm:text-4xl lg:text-5xl !leading-[1.3] mb-4 tracking-wide",
              children: "Diseño de Campañas Publicitarias para Medios Impresos o Digitales."
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { delay: 0.2 },
              className: "font-montserrat text-gray-200 text-md sm:text-base leading-loose max-w-full",
              children: "Una vez teniendo tu marca, será momento de darlo a conocer a través de campañas publicitarias en las cuales comunicaremos de manera creativa y llamativa tu mensaje para que te tengan siempre presente."
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative order-1 lg:order-2 h-[300px] lg:h-full w-full flex items-center justify-end", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-end pointer-events-none", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: campaignImg,
            alt: "Campaign Billboard Mockup",
            className: "w-full h-[77%] object-contain scale-120 lg:scale-y-[1.5] lg:scale-x-[1.4] drop-shadow-2xl"
          }
        ) }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("button", { className: "px-9 py-4 bg-white hover:bg-gray-300 text-black font-montserrat font-bold rounded-full transition-all duration-300 text-sm tracking-wider mt-20", children: "Hablar con un asesor" }) })
  ] }) });
};
const steps$1 = [
  {
    number: "01",
    title: "DIAGNÓSTICO",
    subtitle: "Antes de crear, hay que entender.",
    desc: "Conocemos y analizamos tu negocio y objetivos para establecer una base sólida.",
    icon: Clock,
    accent: "#c5362e"
  },
  {
    number: "02",
    title: "INVESTIGACIÓN",
    subtitle: "Una marca sin datos es una apuesta.",
    desc: "Profundizamos en tu industria, audiencia y competencia para minimizar riesgos.",
    icon: Search,
    accent: "#599ddf"
  },
  {
    number: "03",
    title: "BRAINSTORMING",
    subtitle: "Las mejores ideas no se fuerzan, se exploran.",
    desc: "Abrimos todas las posibilidades creativas sin filtros iniciales.",
    icon: Lightbulb,
    accent: "#e6af41"
  },
  {
    number: "04",
    title: "CONCEPTO CREATIVO",
    subtitle: "Aterrizando el impacto.",
    desc: "Con todo lo explorado, desarrollamos las rutas con mayor potencial de conexión.",
    icon: MousePointer2,
    accent: "#80b67d"
  },
  {
    number: "05",
    title: "DISEÑO Y DESARROLLO",
    subtitle: "El concepto se vuelve visual.",
    desc: "Logotipo, sistema gráfico y aplicaciones ejecutadas con máxima precisión técnica.",
    icon: ClipboardCheck,
    accent: "#c5362e"
  },
  {
    number: "06",
    title: "ENTREGA",
    subtitle: "Listo para el mercado.",
    desc: "Te proporcionamos todos los materiales para que tu marca destaque desde el primer día.",
    icon: Rocket,
    accent: "#599ddf"
  }
];
const StepPanel = ({
  step,
  index,
  total,
  progress
}) => {
  const Icon = step.icon;
  const visible = progress > 0 && progress <= 1;
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "w-full h-full flex",
      initial: { opacity: 0 },
      animate: { opacity: visible ? 1 : 0 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "w-[40%] flex items-center justify-center relative overflow-hidden flex-shrink-0",
            style: { background: `${step.accent}18` },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${step.accent}30 0%, transparent 70%)`
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.span,
                {
                  initial: { opacity: 0, scale: 0.85, y: 40 },
                  animate: { opacity: visible ? 1 : 0, scale: visible ? 1 : 0.85, y: visible ? 0 : 40 },
                  transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
                  className: "font-montserrat font-black leading-none select-none relative z-10",
                  style: {
                    fontSize: "clamp(120px, 18vw, 220px)",
                    color: step.accent,
                    opacity: 0.85,
                    letterSpacing: "-0.04em"
                  },
                  children: step.number
                },
                step.number
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute right-0 top-[10%] h-[80%] w-px",
                  style: { background: `${step.accent}30` }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-start justify-center px-10 sm:px-14 lg:px-20 gap-5", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: visible ? 1 : 0, y: visible ? 0 : -20 },
              transition: { duration: 0.5, delay: 0.1 },
              className: "flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-10 h-10 rounded-xl flex items-center justify-center",
                    style: { background: `${step.accent}20`, border: `1px solid ${step.accent}50` },
                    children: /* @__PURE__ */ jsx(Icon, { size: 18, style: { color: step.accent }, strokeWidth: 1.8 })
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "span",
                  {
                    className: "font-montserrat text-xs tracking-[0.25em] uppercase font-semibold",
                    style: { color: step.accent },
                    children: [
                      "Paso ",
                      index + 1,
                      " de ",
                      total
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.h3,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: visible ? 1 : 0, y: visible ? 0 : 30 },
              transition: { duration: 0.65, delay: 0.15, ease: [0.23, 1, 0.32, 1] },
              className: "font-montserrat font-black text-white leading-[0.95] tracking-tight",
              style: { fontSize: "clamp(36px, 5vw, 72px)" },
              children: step.title
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: visible ? 1 : 0, y: visible ? 0 : 20 },
              transition: { duration: 0.55, delay: 0.22 },
              className: "font-montserrat font-semibold uppercase tracking-widest text-sm",
              style: { color: step.accent },
              children: step.subtitle
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              animate: { opacity: visible ? 1 : 0 },
              transition: { duration: 0.5, delay: 0.3 },
              className: "font-montserrat text-white/65 text-base sm:text-lg leading-relaxed max-w-md",
              children: step.desc
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: visible ? 1 : 0 },
              transition: { duration: 0.4, delay: 0.35 },
              className: "w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2",
              children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "h-full rounded-full",
                  style: { backgroundColor: step.accent },
                  animate: { width: visible ? "100%" : "0%" },
                  transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
                }
              )
            }
          )
        ] })
      ]
    }
  );
};
const MobileProcess = () => /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-12 py-16 px-6", children: steps$1.map((step, i) => {
  const Icon = step.icon;
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.7, delay: i * 0.05 },
      className: "flex gap-6 items-start",
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "font-montserrat font-black leading-none flex-shrink-0 mt-1",
            style: { fontSize: 56, color: step.accent, opacity: 0.9 },
            children: step.number
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-9 h-9 rounded-xl flex items-center justify-center mb-1",
              style: { background: `${step.accent}20`, border: `1px solid ${step.accent}50` },
              children: /* @__PURE__ */ jsx(Icon, { size: 16, style: { color: step.accent }, strokeWidth: 1.8 })
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "font-montserrat font-black text-white text-2xl tracking-tight leading-tight", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "font-montserrat font-semibold text-xs uppercase tracking-widest", style: { color: step.accent }, children: step.subtitle }),
          /* @__PURE__ */ jsx("p", { className: "font-montserrat text-white/60 text-sm leading-relaxed", children: step.desc })
        ] })
      ]
    },
    i
  );
}) });
const OurProcess$1 = () => {
  var _a, _b;
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(steps$1.map(() => 0));
  useEffect(() => {
    const container2 = containerRef.current;
    if (!container2) return;
    const handleScroll = () => {
      const rect = container2.getBoundingClientRect();
      const containerScrolled = -rect.top;
      const totalScrollable = container2.offsetHeight - window.innerHeight;
      const totalProgress = Math.max(0, Math.min(1, containerScrolled / totalScrollable));
      const newProgresses = steps$1.map((_, i) => {
        const start = i / steps$1.length;
        const end = (i + 1) / steps$1.length;
        const p = (totalProgress - start) / (end - start);
        return Math.max(0, Math.min(1, p));
      });
      setStepProgress(newProgresses);
      const rawActive = Math.floor(totalProgress * steps$1.length);
      setActiveStep(Math.min(rawActive, steps$1.length - 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "w-full bg-transparent", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-20 pt-24 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row justify-between items-start gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "font-montserrat text-white text-3xl sm:text-4xl lg:text-5xl font-light leading-tight",
            children: "Nuestro Proceso"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.h3,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            className: "font-aston text-white text-5xl sm:text-7xl lg:text-8xl font-normal tracking-wide mt-1",
            children: "Creativo"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        motion.p,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          className: "max-w-[35rem] font-montserrat text-white/65 text-lg leading-relaxed pt-2 lg:pt-6",
          children: [
            "Cada proyecto sigue una metodología probada. Aplicamos el",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: "WeProm Branding System®" }),
            " ",
            "para garantizar coherencia y resultados medibles desde el primer día."
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:block", ref: containerRef, style: { height: `${steps$1.length * 100}vh` }, children: /* @__PURE__ */ jsxs("div", { className: "sticky top-0 h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-[3px] bg-white/5 z-30", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "h-full",
          style: {
            backgroundColor: ((_a = steps$1[activeStep]) == null ? void 0 : _a.accent) ?? "#c5362e",
            width: `${activeStep / (steps$1.length - 1) * 100}%`
          },
          transition: { duration: 0.3 }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30", children: steps$1.map((s, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "rounded-full transition-all duration-500",
          style: {
            width: i === activeStep ? 28 : 8,
            height: 8,
            backgroundColor: i <= activeStep ? s.accent : "rgba(255,255,255,0.15)"
          }
        },
        i
      )) }),
      /* @__PURE__ */ jsx("div", { className: "w-full h-full relative", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "absolute inset-0",
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -50 },
          transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
          children: /* @__PURE__ */ jsx(
            StepPanel,
            {
              step: steps$1[activeStep],
              index: activeStep,
              total: steps$1.length,
              progress: stepProgress[activeStep]
            }
          )
        },
        activeStep
      ) }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden z-30", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "h-full rounded-full",
          style: {
            backgroundColor: ((_b = steps$1[activeStep]) == null ? void 0 : _b.accent) ?? "#c5362e",
            width: `${(activeStep + (stepProgress[activeStep] ?? 0)) / steps$1.length * 100}%`
          }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 right-16 z-30", children: /* @__PURE__ */ jsxs("span", { className: "font-montserrat text-white/25 text-sm tracking-widest", children: [
        String(activeStep + 1).padStart(2, "0"),
        " / ",
        String(steps$1.length).padStart(2, "0")
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx(MobileProcess, {}) })
  ] });
};
const img1 = "/assets/section4_1-BTTS-Wkx.png";
const img2 = "/assets/section4_2-CKiDFdl7.png";
const img3 = "/assets/section4_3-PUFoErZ8.png";
const img4 = "/assets/section4_4-DnBCzvZZ.png";
const slides = [img1, img2, img3, img4];
const WeCreateBrands = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const variants = {
    enter: (direction2) => ({
      x: direction2 > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    },
    exit: (direction2) => ({
      x: direction2 < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4 }
    })
  };
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-14 px-6 md:px-20 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prevSlide,
          className: "absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-white transition-all",
          children: /* @__PURE__ */ jsx(ChevronLeft$1, { size: 60, strokeWidth: 1 })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: nextSlide,
          className: "absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-white transition-all",
          children: /* @__PURE__ */ jsx(ChevronRight$1, { size: 60, strokeWidth: 1 })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative aspect-[16/8] md:aspect-[21/9] w-full flex items-center justify-center overflow-hidden rounded-3xl", children: /* @__PURE__ */ jsx(AnimatePresence, { initial: false, custom: direction, children: /* @__PURE__ */ jsx(
        motion.img,
        {
          src: slides[index],
          custom: direction,
          variants,
          initial: "enter",
          animate: "center",
          exit: "exit",
          className: "absolute w-full h-full object-contain",
          alt: `Proyecto de branding ${index + 1}`
        },
        index
      ) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 flex justify-center", children: /* @__PURE__ */ jsx("button", { className: "px-10 py-4 rounded-full bg-white border border-white/10 text-black font-montserrat text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 font-bold", children: "Portafolio" }) })
  ] }) });
};
const reasons$1 = [
  {
    title: "Experiencia integral en branding y posicionamiento",
    desc: "Más de una década desarrollando marcas personales, corporativas e institucionales en distintos sectores. Hemos trabajado con líderes, emprendedores y organizaciones que necesitaban alinear su proyección visual con su verdadero nivel de expertise.",
    icon: /* @__PURE__ */ jsx(Star, { size: 32 }),
    gradient: "radial-gradient(circle at top left, rgba(186, 63, 53, 0.15) 0%, rgba(95, 161, 207, 0.05) 100%)",
    accent: "#ba3f35"
  },
  {
    title: "Metodología integral: WeProm Branding System®",
    desc: "Nuestro proceso une diagnóstico, estrategia, diseño y comunicación en una secuencia estructurada que asegura coherencia y resultados tangibles. Generamos visibilidad, credibilidad y crecimiento profesional.",
    icon: /* @__PURE__ */ jsx(GraduationCap, { size: 32 }),
    gradient: "radial-gradient(circle at top left, rgba(95, 161, 207, 0.15) 0%, rgba(126, 179, 135, 0.05) 100%)",
    accent: "#5fa1cf"
  },
  {
    title: "Visión internacional y enfoque humano",
    desc: "Con presencia en México y Europa, combinamos una visión global con sensibilidad local. Creamos marcas auténticas que proyectan la esencia de cada profesional u organización, equilibrando estrategia y humanidad en cada detalle.",
    icon: /* @__PURE__ */ jsx(Globe, { size: 32 }),
    gradient: "radial-gradient(circle at top left, rgba(126, 179, 135, 0.15) 0%, rgba(229, 173, 67, 0.05) 100%)",
    accent: "#7eb387"
  }
];
const WhyChooseUs = () => {
  return /* @__PURE__ */ jsx("section", { className: "w-full py-24 px-6 md:px-20 bg-transparent text-white overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-5xl md:text-7xl font-montserrat font-bold mb-8",
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-light italic text-white/90", children: "¿Por qué " }),
            " elegirnos?"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          className: "max-w-4xl mx-auto text-lg text-white/80 font-montserrat leading-relaxed",
          children: "En WeProm, combinamos estrategia, diseño y comunicación para crear marcas con propósito. No hacemos sólo marcas bonitas: construimos marcas relevantes, duraderas y emocionalmente poderosas."
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: reasons$1.map((item, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.15, duration: 0.6 },
        whileHover: { y: -10, transition: { duration: 0.3 } },
        className: "relative p-8 rounded-[40px] border border-white/10 flex flex-col gap-6 group overflow-hidden",
        style: { background: item.gradient },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110",
              style: { background: `${item.accent}20`, color: item.accent },
              children: item.icon
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold font-montserrat leading-tight group-hover:text-white transition-colors", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-white text-sm leading-loose font-montserrat group-hover:text-white/70 transition-colors pt-4", children: item.desc }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700",
              style: { background: item.accent }
            }
          )
        ]
      },
      i
    )) })
  ] }) });
};
const bgVideo = "/assets/videobackground-CwOrPSKv.mp4";
const heroRight = "/assets/hero-right-Cvs9K6g_.png";
const brands$3 = [
  { name: "Cinepolis", src: Cinepolis, alt: "Cinepolis Logo" },
  { name: "Grupo Caliente", src: GrupoCaliente, alt: "Grupo Caliente Logo" },
  { name: "Heineken", src: Heineken, alt: "Heineken Logo", sizeClass: "h-16 sm:h-20 md:h-24" },
  { name: "Ford", src: Ford, alt: "Ford Logo", sizeClass: "h-8 sm:h-10 md:h-14" },
  { name: "KIA", src: KIA, alt: "KIA Logo", sizeClass: "h-20 sm:h-24 md:h-28" },
  { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Mercedes-Benz", src: MercedesBenz, alt: "Mercedes-Benz Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Nissan", src: Nissan, alt: "Nissan Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Pepsico", src: Pepsico, alt: "Pepsico Logo" },
  { name: "Televisa", src: Televisa, alt: "Televisa Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Volkswagen", src: Volkswagen, alt: "Volkswagen Logo", sizeClass: "h-16 sm:h-18 md:h-20" }
];
const allBrands$3 = [...brands$3, ...brands$3];
const ConsultoriaHero$1 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative w-full h-screen min-h-[700px] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "video",
        {
          className: "absolute inset-0 w-full h-full object-cover",
          src: bgVideo,
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true,
          style: { opacity: 0.3 }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/60 lg:to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs(
            motion.h1,
            {
              initial: { x: -50, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              transition: { duration: 0.8, ease: "easeOut" },
              className: "font-aston text-5xl sm:text-6xl md:text-7xl py-2 font-medium tracking-tight leading-[1.1] text-white",
              children: [
                "Professional ",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "inline-block mt-2 font-normal tracking-wide",
                    style: {
                      background: "linear-gradient(to right, #c5362e, #599ddf, #80b67d, #e6af41)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent"
                    },
                    children: "Branding"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { x: -50, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              transition: { duration: 0.8, delay: 0.2 },
              className: "mt-6 text-white font-montserrat text-lg sm:text-xl max-w-lg leading-relaxed",
              children: "Hacemos marcas memorables, creativas y de alto impacto para que te vean, te recuerden y se queden contigo"
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 0.5, delay: 0.4 },
              className: "mt-10 flex flex-wrap gap-4",
              children: [
                /* @__PURE__ */ jsx("button", { className: "bg-white text-black font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:bg-zinc-200 hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(255,255,255,0.1)]", children: "Cotizar proyecto" }),
                /* @__PURE__ */ jsx("button", { className: "bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-black font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm", children: "Servicios" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 1, ease: "easeOut", delay: 0.3 },
            className: "hidden lg:flex justify-center relative",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/5 blur-[100px] rounded-full" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: heroRight,
                  alt: "Branding Excellence",
                  className: "relative z-10 w-full max-w-lg h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float"
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative w-full pt-10 sm:pt-12 pb-14 sm:pb-4 overflow-hidden bg-transparent group", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" }),
      /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-[1519px] mx-auto px-4 sm:px-8 z-10", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsx("button", { className: "prev-btn absolute left-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block", children: /* @__PURE__ */ jsx(ChevronLeft$1, { size: 40, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx("button", { className: "next-btn absolute right-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block", children: /* @__PURE__ */ jsx(ChevronRight$1, { size: 40, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx(
          Swiper,
          {
            modules: [Autoplay, Navigation],
            spaceBetween: 30,
            slidesPerView: 2,
            loop: true,
            speed: 4e3,
            autoplay: { delay: 0, disableOnInteraction: false },
            navigation: { prevEl: ".prev-btn", nextEl: ".next-btn" },
            breakpoints: {
              480: { slidesPerView: 3, spaceBetween: 40 },
              640: { slidesPerView: 3, spaceBetween: 50 },
              1024: { slidesPerView: 5, spaceBetween: 50 }
            },
            className: "flex items-center",
            children: allBrands$3.map((brand, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-24 sm:h-28 w-full px-4 py-4 rounded-2xl bg-white border border-white/20 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: brand.src,
                alt: brand.alt,
                className: `w-auto object-contain transition-all ${brand.sizeClass ? brand.sizeClass : "h-7 sm:h-9 md:h-11"}`
              }
            ) }) }, index))
          }
        )
      ] }) })
    ] })
  ] });
};
const ContactConsultoria$1 = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "¿En qué podemos ayudarte?",
    mensaje: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1800);
  };
  const contactInfo = [
    {
      icon: /* @__PURE__ */ jsx(MessageCircle, { size: 20 }),
      label: "Whatsapp",
      value: "+52 1 33 1385 7143",
      href: "https://wa.me/5213313857143?text=Hola,%20quiero%20más%20información%20acerca%20de%20los%20servicios%20de%20consultoría%20en%20marketing.",
      color: "#25D366"
    },
    {
      icon: /* @__PURE__ */ jsx(Mail, { size: 20 }),
      label: "Correo",
      value: "hola@weprom.mx",
      href: "mailto:hola@weprom.mx",
      color: "#599ddf"
    },
    {
      icon: /* @__PURE__ */ jsx(Phone, { size: 20 }),
      label: "Llamadas",
      value: "+52 1 33 1067 4199",
      href: "tel:+5213310674199",
      color: "#80b67d"
    }
  ];
  const asuntos = [
    "¿En qué podemos ayudarte?",
    "Video Institucional",
    "Video Publicitario",
    "Contenido para Social Media",
    "Animación 2D/3D",
    "Fotografía Profesional",
    "Producción con Drones",
    "Otro"
  ];
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-16 px-4 sm:px-6 lg:px-8 font-montserrat text-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-12 lg:gap-20 items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-2/5 flex flex-col gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-3xl font-aston tracking-tight mb-4 leading-tight", children: "Será un gusto saber de ti." }),
        /* @__PURE__ */ jsxs("p", { className: "text-white/100 font-normal text-base leading-relaxed", children: [
          "¿Te gustaría saber más? ",
          /* @__PURE__ */ jsx("br", {}),
          " No dudes en escribirnos o llamarnos."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-5", children: contactInfo.map((item, index) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: item.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-4 group",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110",
                style: {
                  borderColor: item.color,
                  color: item.color,
                  backgroundColor: `${item.color}15`
                },
                children: item.icon
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-white/100 text-xs font-light mb-0.5", children: item.label }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "font-semibold text-sm transition-colors duration-300",
                  children: item.value
                }
              )
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-neutral-800", style: { aspectRatio: "4/3" }, children: /* @__PURE__ */ jsx(
        "iframe",
        {
          title: "Ubicación",
          src: "https://maps.google.com/maps?q=C.+Corrientes+3071,+Colomos+Providencia,+Guadalajara&output=embed&z=15",
          width: "100%",
          height: "100%",
          style: { border: 0, filter: "grayscale(0.8) invert(0.9) contrast(0.85)" },
          allowFullScreen: true,
          loading: "lazy"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-neutral-950 border p-5 border-neutral-800 rounded-2xl lg:w-3/5", children: sent ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-6 py-20 text-center", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-20 h-20 rounded-full flex items-center justify-center border-2",
          style: { borderColor: "#80b67d", color: "#80b67d", backgroundColor: "#80b67d20" },
          children: /* @__PURE__ */ jsx(Send, { size: 32 })
        }
      ),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-aston", children: "¡Mensaje enviado!" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm max-w-xs", children: "Nos pondremos en contacto contigo muy pronto. ¡Gracias por escribirnos!" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setSent(false);
            setFormData({ nombre: "", email: "", telefono: "", asunto: "¿En qué podemos ayudarte?", mensaje: "" });
          },
          className: "mt-2 text-sm text-white/40 hover:text-white transition-colors duration-300 underline underline-offset-4",
          children: "Enviar otro mensaje"
        }
      )
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: [
          "Nombre ",
          /* @__PURE__ */ jsx("span", { className: "text-[#c5362e]", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "nombre",
            required: true,
            placeholder: "Nombre completo",
            value: formData.nombre,
            onChange: handleChange,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: [
          "Email ",
          /* @__PURE__ */ jsx("span", { className: "text-[#c5362e]", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            name: "email",
            required: true,
            placeholder: "Correo electrónico",
            value: formData.email,
            onChange: handleChange,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsx("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: "Teléfono" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            name: "telefono",
            placeholder: "+00 000 000 0000",
            value: formData.telefono,
            onChange: handleChange,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: [
          "Asunto ",
          /* @__PURE__ */ jsx("span", { className: "text-[#c5362e]", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "select",
          {
            name: "asunto",
            required: true,
            value: formData.asunto,
            onChange: handleChange,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-300 focus:border-neutral-600 appearance-none cursor-pointer",
            style: { backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff40' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" },
            children: asuntos.map((a, i) => /* @__PURE__ */ jsx("option", { value: a, className: "bg-neutral-900", children: a }, i))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: [
          "Mensaje ",
          /* @__PURE__ */ jsx("span", { className: "text-[#c5362e]", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "mensaje",
            required: true,
            placeholder: "Platíquenos...",
            value: formData.mensaje,
            onChange: handleChange,
            rows: 4,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600 resize-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: sending,
          className: "mt-2 w-full relative text-white font-montserrat font-semibold text-sm px-6 py-4 rounded-xl transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-60",
          style: {
            border: "2px solid transparent",
            background: "linear-gradient(#111, #111) padding-box,  border-box"
          },
          children: sending ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("svg", { className: "animate-spin", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }) }),
            "Enviando..."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "Enviar mensaje",
            /* @__PURE__ */ jsx(Send, { size: 16 })
          ] })
        }
      )
    ] }) })
  ] }) }) });
};
const Branding = () => {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-transparent", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(ConsultoriaHero$1, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(CampaignDesign, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(OurProcess$1, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(WeCreateBrands, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(WhyChooseUs, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(ContactConsultoria$1, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const heroBg = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655936/Mercedes_Benz_EQC_zzprl2.mp4";
const brands$2 = [
  { name: "Cinepolis", src: Cinepolis, alt: "Cinepolis Logo" },
  { name: "Grupo Caliente", src: GrupoCaliente, alt: "Grupo Caliente Logo" },
  { name: "Heineken", src: Heineken, alt: "Heineken Logo", sizeClass: "h-16 sm:h-20 md:h-24" },
  { name: "Ford", src: Ford, alt: "Ford Logo", sizeClass: "h-8 sm:h-10 md:h-14" },
  { name: "KIA", src: KIA, alt: "KIA Logo", sizeClass: "h-20 sm:h-24 md:h-28" },
  { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Mercedes-Benz", src: MercedesBenz, alt: "Mercedes-Benz Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Nissan", src: Nissan, alt: "Nissan Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Pepsico", src: Pepsico, alt: "Pepsico Logo" },
  { name: "Televisa", src: Televisa, alt: "Televisa Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Volkswagen", src: Volkswagen, alt: "Volkswagen Logo", sizeClass: "h-16 sm:h-18 md:h-20" }
];
const allBrands$2 = [...brands$2, ...brands$2];
const AudiovisualHero = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative w-full h-screen min-h-[600px] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "video",
        {
          className: "absolute inset-0 w-full h-full object-cover",
          src: heroBg,
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true,
          style: { opacity: 0.35 }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 px-6 sm:px-12 md:px-20 max-w-5xl", children: [
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.7 },
            className: "font-aston font-extrabold tracking-wide leading-none text-white",
            style: { fontSize: "clamp(2.8rem, 5.5vw, 5rem)" },
            children: [
              "Producciones",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    background: "linear-gradient(90deg, #ba3f35, #5fa1cf, #7eb387, #e5ad43)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  },
                  children: "Audiovisuales"
                }
              ),
              /* @__PURE__ */ jsx("br", {}),
              "de alto impacto."
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.7, delay: 0.15 },
            className: "mt-4 text-white font-montserrat font-normal text-base sm:text-2xl max-w-2xl leading-relaxed",
            children: "Quédate para siempre en la mente de tus clientes con proyectos que sí cumplen objetivos."
          }
        ),
        /* @__PURE__ */ jsx(
          motion.button,
          {
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.7, delay: 0.28 },
            className: "mt-8 relative text-white font-montserrat font-medium text-xl px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300",
            style: {
              background: "linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #ba3f35, #5fa1cf, #7eb387, #e5ad43 ) border-box",
              border: "4px solid transparent"
            },
            children: "Cotizar Proyecto"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative w-full pt-10 sm:pt-12 pb-14 sm:pb-4 overflow-hidden bg-transparent group", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" }),
      /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-[1519px] mx-auto px-4 sm:px-8 z-10", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsx("button", { className: "prev-btn absolute left-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block", children: /* @__PURE__ */ jsx(ChevronLeft$1, { size: 40, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx("button", { className: "next-btn absolute right-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block", children: /* @__PURE__ */ jsx(ChevronRight$1, { size: 40, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx(
          Swiper,
          {
            modules: [Autoplay, Navigation],
            spaceBetween: 30,
            slidesPerView: 2,
            loop: true,
            speed: 4e3,
            autoplay: { delay: 0, disableOnInteraction: false },
            navigation: { prevEl: ".prev-btn", nextEl: ".next-btn" },
            breakpoints: {
              480: { slidesPerView: 3, spaceBetween: 40 },
              640: { slidesPerView: 3, spaceBetween: 50 },
              1024: { slidesPerView: 5, spaceBetween: 50 }
            },
            className: "flex items-center",
            children: allBrands$2.map((brand, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-24 sm:h-28 w-full px-4 py-4 rounded-2xl bg-white border border-white/20 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: brand.src,
                alt: brand.alt,
                className: `w-auto object-contain transition-all ${brand.sizeClass ? brand.sizeClass : "h-7 sm:h-9 md:h-11"}`
              }
            ) }) }, index))
          }
        )
      ] }) })
    ] })
  ] });
};
const DroneIcon = ({ size = 24, color = "currentColor" }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" }),
  /* @__PURE__ */ jsx("path", { d: "M10.5 10.5 7 7" }),
  /* @__PURE__ */ jsx("path", { d: "M13.5 10.5 17 7" }),
  /* @__PURE__ */ jsx("path", { d: "M10.5 13.5 7 17" }),
  /* @__PURE__ */ jsx("path", { d: "M13.5 13.5 17 17" }),
  /* @__PURE__ */ jsx("circle", { cx: "5", cy: "5", r: "2" }),
  /* @__PURE__ */ jsx("circle", { cx: "19", cy: "5", r: "2" }),
  /* @__PURE__ */ jsx("circle", { cx: "5", cy: "19", r: "2" }),
  /* @__PURE__ */ jsx("circle", { cx: "19", cy: "19", r: "2" })
] });
const SolucionesAudiovisuales = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const services2 = [
    {
      id: 1,
      title: "Video Institucional",
      description: "Narrativa audiovisual de alta calidad para proyectar la solidez, cultura y visión de tu corporativo ante el mundo.",
      icon: /* @__PURE__ */ jsx(Building2, { size: 32 }),
      color: "#c5362e"
    },
    {
      id: 2,
      title: "Video Publicitario",
      description: "Campañas comerciales diseñadas para capturar la atención, detonar conversiones y escalar tus ventas en TV o medios digitales.",
      icon: /* @__PURE__ */ jsx(MonitorPlay, { size: 32 }),
      color: "#e6af41"
    },
    {
      id: 3,
      title: "Social Media",
      description: "Reels publicitarios, UGC y testimoniales. Narrativa visual ágil y optimizada para retener la atención y convertir seguidores en clientes.",
      icon: /* @__PURE__ */ jsx(Smartphone, { size: 32 }),
      color: "#599ddf"
    },
    {
      id: 4,
      title: "Animación 2D y 3D",
      description: "Damos vida a tus conceptos. Motion graphics y modelado 3D de alta calidad para comunicar mensajes complejos de manera atractiva y efectiva.",
      icon: /* @__PURE__ */ jsx(Box, { size: 32 }),
      color: "#80b67d"
    },
    {
      id: 5,
      title: "Fotografía Profesional",
      description: "Capturamos la esencia de tu marca con una dirección de arte impecable. Fotografía de producto, editorial y corporativa de primer nivel.",
      icon: /* @__PURE__ */ jsx(Camera, { size: 32 }),
      color: "#c5362e"
    },
    {
      id: 6,
      title: "Producción con Drones",
      description: "Perspectivas que elevan el valor de tu producción. Vuelos FPV inmersivos y tomas panorámicas estabilizadas con calidad cinematográfica.",
      icon: /* @__PURE__ */ jsx(DroneIcon, { size: 32 }),
      color: "#599ddf"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "w-full bg-transparent py-12 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10 max-w-3xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-aston tracking-tight mb-4 text-white", children: "Soluciones Audiovisuales Integrales" }),
      /* @__PURE__ */ jsx("p", { className: "text-white font-aston font-normal text-base md:text-lg", children: "Desarrollamos proyectos escalables con un enfoque estratégico. Selecciona un servicio para conocer más." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-6xl flex flex-col lg:flex-row gap-3 lg:gap-4 h-auto lg:h-[350px]", children: services2.map((service, index) => {
      const isActive = activeIndex === index;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          onClick: () => setActiveIndex(index),
          onMouseEnter: () => setActiveIndex(index),
          className: `relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900
                ${isActive ? "h-[240px] lg:h-full lg:flex-[3]" : "h-[68px] lg:h-full lg:flex-1"}
              `,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 transition-opacity duration-700",
                style: {
                  background: `linear-gradient(to bottom right, ${service.color}20, transparent)`,
                  opacity: isActive ? 1 : 0
                }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: `absolute inset-0 flex items-center px-5 transition-opacity duration-300 lg:hidden ${isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-300"}`, children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mr-4", style: { color: service.color }, children: /* @__PURE__ */ jsx("div", { className: "transform scale-75", children: service.icon }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-white/70 font-bold text-[15px] sm:text-base truncate", children: service.title })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: `absolute inset-0 flex-col items-center justify-start pt-6 pb-6 transition-opacity duration-300 hidden lg:flex ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`, children: [
              /* @__PURE__ */ jsx("div", { style: { color: service.color }, children: service.icon }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-white/40 font-bold whitespace-nowrap tracking-wider uppercase text-sm mt-auto",
                  style: { writingMode: "vertical-rl", transform: "rotate(180deg)" },
                  children: service.title
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: `absolute inset-0 p-6 flex flex-col justify-start transition-opacity duration-700 ${isActive ? "opacity-100 delay-200" : "opacity-0 pointer-events-none"}`, children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute -right-8 -top-8 opacity-5",
                  style: { color: service.color, transform: "scale(3)" },
                  children: service.icon
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 shadow-lg border",
                    style: {
                      backgroundColor: `${service.color}20`,
                      borderColor: service.color,
                      color: service.color
                    },
                    children: service.icon
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold font-montserrat mb-3 text-white", children: service.title }),
                /* @__PURE__ */ jsx("p", { className: "text-white/60 font-montserrat font-light text-sm md:text-base leading-relaxed", children: service.description })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute bottom-0 left-0 h-1 transition-all duration-700 lg:hidden",
                style: { backgroundColor: service.color, width: isActive ? "100%" : "0%" }
              }
            )
          ]
        },
        service.id
      );
    }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 lg:mt-16", children: /* @__PURE__ */ jsxs(
      "button",
      {
        className: "px-8 py-4 font-aston font-bold rounded-full flex items-center gap-2 group transition-all duration-300 text-black",
        style: {
          background: "white",
          border: "2px solid transparent"
        },
        children: [
          "Cotizar Proyecto",
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-5 h-5 transform group-hover:translate-x-1 transition-transform",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" })
            }
          )
        ]
      }
    ) })
  ] });
};
const portada1$2 = "/assets/video1-BNUODnUz.png";
const portada2$2 = "/assets/video2-BWG9kez4.png";
const portada3$2 = "/assets/video3-CnADOKDq.png";
const portada4$1 = "/assets/video4-BHk94J9M.png";
const video1$2 = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655985/Inst_1_yf6aip.mp4";
const video2$2 = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776657701/Inst_2_pjtdfe.mp4";
const video3$2 = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655980/Inst_3_xcp3so.mp4";
const video4$1 = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655946/Inst_4_qemsok.mp4";
const videos$2 = [
  { src: video1$2, poster: portada1$2, large: true },
  { src: video2$2, poster: portada2$2, large: true },
  { src: video3$2, poster: portada3$2, large: false },
  { src: video4$1, poster: portada4$1, large: false }
];
const VideoCard$1 = ({ src, poster, large }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative w-full h-full overflow-hidden rounded-lg cursor-pointer group bg-black",
      style: { aspectRatio: "16/9" },
      onClick: togglePlay,
      children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            ref: videoRef,
            src,
            poster,
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
            loop: true,
            playsInline: true
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`,
            children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-black/50 border border-white/40 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110", children: playing ? /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "white", children: [
              /* @__PURE__ */ jsx("rect", { x: "5", y: "3", width: "4", height: "18", rx: "1" }),
              /* @__PURE__ */ jsx("rect", { x: "15", y: "3", width: "4", height: "18", rx: "1" })
            ] }) : /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "white", style: { marginLeft: 3 }, children: /* @__PURE__ */ jsx("polygon", { points: "5,3 19,12 5,21" }) }) })
          }
        )
      ]
    }
  );
};
const VideosInstitucionales = () => {
  return /* @__PURE__ */ jsxs("section", { className: "w-full bg-transparent py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10 max-w-2xl", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-aston mb-4", children: [
        "Videos",
        " ",
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              background: "#007AFF",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            },
            children: "Institucionales"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white font-aston font-normal text-base md:text-lg leading-relaxed", children: "Narrativa audiovisual de alta calidad para proyectar la solidez, cultura y visión de tu corporativo ante el mundo." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-6xl flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full sm:w-[85%] flex flex-col sm:flex-row gap-4 self-start", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(VideoCard$1, { src: videos$2[0].src, poster: videos$2[0].poster, large: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(VideoCard$1, { src: videos$2[1].src, poster: videos$2[1].poster, large: true }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full sm:w-[85%] flex flex-col sm:flex-row gap-4 self-end", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(VideoCard$1, { src: videos$2[2].src, poster: videos$2[2].poster, large: false }) }),
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(VideoCard$1, { src: videos$2[3].src, poster: videos$2[3].poster, large: false }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxs(
      "button",
      {
        className: "px-8 py-4 font-montserrat font-bold text-base rounded-full text-white flex items-center gap-2 group transition-all duration-300",
        style: {
          background: "linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #FF3B30, #FF9500, #34C759, #007AFF) border-box",
          border: "2px solid transparent"
        },
        children: [
          "Cotizar Proyecto",
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-5 h-5 transform group-hover:translate-x-1 transition-transform",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" })
            }
          )
        ]
      }
    ) })
  ] });
};
const portada1$1 = "/assets/video1-DJEMLga5.png";
const portada2$1 = "/assets/video2-BXONzu7-.png";
const portada3$1 = "/assets/video3-BErNvMUP.png";
const portada4 = "/assets/video4-B-Cg1o5N.png";
const portada5 = "/assets/video5-F35FaJ0K.png";
const video1$1 = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655936/one_ineaen.mp4";
const video2$1 = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655941/two_cytl8j.mp4";
const video3$1 = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655942/three_oatlxh.mp4";
const video4 = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776656012/four_wdh3dc.mp4";
const video5 = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655944/five_uahh64.mp4";
const videos$1 = [
  { src: video1$1, poster: portada1$1 },
  { src: video2$1, poster: portada2$1 },
  { src: video3$1, poster: portada3$1 },
  { src: video4, poster: portada4 },
  { src: video5, poster: portada5 }
];
const VideosPublicitarios = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const prev = () => {
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
      currentVideo.load();
    }
    setActiveIndex((i) => (i - 1 + videos$1.length) % videos$1.length);
    setPlayingIndex(null);
  };
  const next = () => {
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
      currentVideo.load();
    }
    setActiveIndex((i) => (i + 1) % videos$1.length);
    setPlayingIndex(null);
  };
  const togglePlay = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setPlayingIndex(null);
      return;
    }
    const video = videoRefs.current[index];
    if (!video) return;
    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      video.play();
      setPlayingIndex(index);
    }
  };
  const getPosition = (index) => {
    const total = videos$1.length;
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };
  return /* @__PURE__ */ jsxs("section", { className: "w-full bg-transparent py-16 px-4 flex flex-col items-center text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 max-w-2xl", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-aston tracking-tight mb-4", children: [
        "Videos",
        " ",
        /* @__PURE__ */ jsx("span", { style: {
          background: "#34C759",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }, children: "Publicitarios" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white font-montserrat font-normal text-base md:text-lg leading-relaxed", children: "Producción de spots persuasivos y de alto impacto, optimizados para maximizar el retorno de inversión en medios digitales o tradicionales." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-5xl flex items-center justify-center", style: { height: 320 }, children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prev,
          className: "absolute left-0 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300",
          children: /* @__PURE__ */ jsx(ChevronLeft$1, { size: 20 })
        }
      ),
      videos$1.map((video, index) => {
        const pos = getPosition(index);
        const isActive = pos === 0;
        const isVisible = Math.abs(pos) <= 2;
        if (!isVisible) return null;
        const xPercent = pos * 52;
        const scale = isActive ? 1 : 0.75 - Math.abs(pos) * 0.05;
        const opacity = isActive ? 1 : 0.5 - Math.abs(pos) * 0.1;
        const zIndex = isActive ? 10 : 5 - Math.abs(pos);
        return /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => togglePlay(index),
            className: "absolute cursor-pointer rounded-2xl overflow-hidden transition-all duration-500",
            style: {
              width: "55%",
              aspectRatio: "16/9",
              transform: `translateX(${xPercent}%) scale(${scale})`,
              opacity,
              zIndex
            },
            children: [
              /* @__PURE__ */ jsx(
                "video",
                {
                  ref: (el) => videoRefs.current[index] = el,
                  src: video.src,
                  poster: video.poster,
                  className: "w-full h-full object-cover",
                  loop: true,
                  playsInline: true
                }
              ),
              /* @__PURE__ */ jsx("div", { className: `absolute inset-0 transition-opacity duration-300 ${isActive ? "bg-black/20" : "bg-black/50"}` }),
              /* @__PURE__ */ jsx("div", { className: `absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playingIndex === index ? "opacity-0 hover:opacity-100" : "opacity-100"}`, children: /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110 ${!isActive && "opacity-60"}`, children: playingIndex === index ? /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "white", children: [
                /* @__PURE__ */ jsx("rect", { x: "5", y: "3", width: "4", height: "18", rx: "1" }),
                /* @__PURE__ */ jsx("rect", { x: "15", y: "3", width: "4", height: "18", rx: "1" })
              ] }) : /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "white", style: { marginLeft: 2 }, children: /* @__PURE__ */ jsx("polygon", { points: "5,3 19,12 5,21" }) }) }) })
            ]
          },
          index
        );
      }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: next,
          className: "absolute right-0 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300",
          children: /* @__PURE__ */ jsx(ChevronRight$1, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-2 mt-6", children: videos$1.map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          setActiveIndex(index);
          setPlayingIndex(null);
        },
        className: "w-2 h-2 rounded-full transition-all duration-300",
        style: {
          background: activeIndex === index ? "linear-gradient(90deg, #FF3B30, #007AFF)" : "rgba(255,255,255,0.3)",
          width: activeIndex === index ? 24 : 8
        }
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxs(
      "button",
      {
        className: "px-8 py-4 font-montserrat font-bold text-base rounded-full text-white flex items-center gap-2 group transition-all duration-300",
        style: {
          background: "linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #FF3B30, #FF9500, #34C759, #007AFF) border-box",
          border: "2px solid transparent"
        },
        children: [
          "Cotizar Proyecto",
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 transform group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" }) })
        ]
      }
    ) })
  ] });
};
const portada1 = "/assets/video1-6_G6NwWF.png";
const portada2 = "/assets/video2-BaHo_DTa.png";
const portada3 = "/assets/video3-C6qy97ns.png";
const video1 = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655940/socialmedia1_cnkqxl.mp4";
const video2 = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655929/socialmedia2_zpab9s.mp4";
const video3 = "https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655954/socialmedia3_eakbmm.mp4";
const videos = [
  { src: video1, poster: portada1 },
  { src: video2, poster: portada2 },
  { src: video3, poster: portada3 }
];
const VideoCard = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative overflow-hidden rounded-2xl cursor-pointer group bg-neutral-900 w-full",
      style: { aspectRatio: "9/16" },
      onClick: togglePlay,
      children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            ref: videoRef,
            src,
            poster,
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
            loop: true,
            playsInline: true
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-opacity duration-300" }),
        /* @__PURE__ */ jsx("div", { className: `absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`, children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110", children: playing ? /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "white", children: [
          /* @__PURE__ */ jsx("rect", { x: "5", y: "3", width: "4", height: "18", rx: "1" }),
          /* @__PURE__ */ jsx("rect", { x: "15", y: "3", width: "4", height: "18", rx: "1" })
        ] }) : /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "white", style: { marginLeft: 3 }, children: /* @__PURE__ */ jsx("polygon", { points: "5,3 19,12 5,21" }) }) }) })
      ]
    }
  );
};
const SocialMedia = () => {
  return /* @__PURE__ */ jsxs("section", { className: "w-full bg-transparent py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 max-w-2xl", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-aston tracking-tight mb-4", children: [
        "Contenido para",
        " ",
        /* @__PURE__ */ jsx("span", { style: {
          background: " #FF3B30",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }, children: "Social Media" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white font-aston font-normal text-base md:text-lg leading-relaxed", children: "Reels Publicitarios, Testimoniales y contenido UGC diseñados específicamente para el algoritmo, capturando la atención en los primeros segundos." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6", children: videos.map((video, index) => /* @__PURE__ */ jsx(VideoCard, { src: video.src, poster: video.poster }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxs(
      "button",
      {
        className: "px-8 py-4 font-montserrat font-bold text-base rounded-full text-white flex items-center gap-2 group transition-all duration-300",
        style: {
          background: "linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #FF3B30, #FF9500, #34C759, #007AFF) border-box",
          border: "2px solid transparent"
        },
        children: [
          "Cotizar Proyecto",
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 transform group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" }) })
        ]
      }
    ) })
  ] });
};
const NuestroProceso = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef([]);
  const colors2 = ["#c5362e", "#599ddf", "#80b67d", "#e6af41", "#c5362e", "#599ddf"];
  const steps2 = [
    {
      title: "Entendimiento Estratégico",
      description: "Analizamos tu negocio, audiencia y metas. No solo hacemos videos estéticos; creamos piezas audiovisuales enfocadas en vender y posicionar tu marca.",
      icon: /* @__PURE__ */ jsx(Target$1, { size: 24 })
    },
    {
      title: "Concepto Creativo",
      description: "Aterrizamos la estrategia en una idea clara. Definimos el mensaje, tono, narrativa visual y el diferenciador competitivo de la campaña.",
      icon: /* @__PURE__ */ jsx(Lightbulb, { size: 24 })
    },
    {
      title: "Preproducción",
      description: "Planeación milimétrica para optimizar recursos y tiempos. Desarrollamos guiones, scouting de locaciones, casting y logística integral.",
      icon: /* @__PURE__ */ jsx(ClipboardList, { size: 24 })
    },
    {
      title: "Producción",
      description: "Grabación con infraestructura técnica escalable (desde formato móvil hasta calidad cinematográfica). Incluye dirección creativa en set.",
      icon: /* @__PURE__ */ jsx(Video, { size: 24 })
    },
    {
      title: "Postproducción",
      description: "Edición, corrección de color, diseño sonoro y animación (2D/3D) integrados con precisión para generar impacto real en tu audiencia.",
      icon: /* @__PURE__ */ jsx(MonitorPlay, { size: 24 })
    },
    {
      title: "Optimización y Entrega",
      description: "Adaptamos los entregables a los formatos exactos de cada canal objetivo (redes sociales, ads, web, TV) para maximizar el rendimiento.",
      icon: /* @__PURE__ */ jsx(Rocket, { size: 24 })
    }
  ];
  useEffect(() => {
    const handleScroll = () => {
      const windowCenter = window.innerHeight / 2;
      let currentStep = -1;
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= windowCenter + 50) currentStep = index;
        }
      });
      setActiveStep(currentStep);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-16 px-4 sm:px-6 lg:px-8 font-montserrat text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-aston tracking-tight mb-4", children: [
        "Nuestro Proceso Creativo",
        " "
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white font-normal text-base md:text-lg leading-relaxed", children: "Metodología paso a paso para asegurar que cada proyecto supere tus expectativas y cumpla sus objetivos." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1.5 bg-neutral-900 rounded-full" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1.5 rounded-full transition-all duration-500 ease-in-out",
          style: {
            height: activeStep >= 0 ? `${activeStep / steps2.length * 100}%` : "0%",
            background: activeStep >= 0 ? `linear-gradient(to bottom, ${colors2[0]}, ${colors2[activeStep % colors2.length]})` : "transparent"
          }
        }
      ),
      steps2.map((step, index) => {
        const isActive = index <= activeStep;
        const isCurrent = index === activeStep;
        const color = colors2[index % colors2.length];
        const isEven = index % 2 === 0;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            ref: (el) => stepRefs.current[index] = el,
            className: "relative z-10 flex items-center justify-between mb-24 md:mb-16 w-full",
            children: [
              /* @__PURE__ */ jsx("div", { className: `hidden md:block w-5/12 text-right pr-8 transition-all duration-700 ${isEven ? isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8" : "opacity-0 pointer-events-none"}`, children: isEven && /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `p-6 rounded-xl bg-neutral-900 border-b-4 transition-all duration-500 ${isCurrent ? "scale-105" : ""}`,
                  style: { borderBottomColor: isActive ? color : "#262626" },
                  children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 transition-colors duration-500", style: { color: isActive ? color : "#525252" }, children: step.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm leading-relaxed", children: step.description })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: `w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-700 z-20 bg-black ${isActive ? "scale-110" : "scale-100 border-neutral-800 text-neutral-600"}`,
                  style: {
                    borderColor: isActive ? color : "",
                    color: isActive ? color : "",
                    boxShadow: isActive ? `0 0 20px ${color}40` : ""
                  },
                  children: step.icon
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: `w-full pl-24 md:pl-8 md:w-5/12 transition-all duration-700 ${!isEven ? isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8" : "md:opacity-0 md:pointer-events-none"}`, children: /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `p-6 rounded-xl bg-neutral-900 border-b-4 transition-all duration-500 md:${!isEven ? "block" : "hidden"} ${isCurrent ? "scale-105" : ""}`,
                  style: { borderBottomColor: isActive ? color : "#262626" },
                  children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 transition-colors duration-500", style: { color: isActive ? color : "#525252" }, children: step.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm leading-relaxed", children: step.description })
                  ]
                }
              ) })
            ]
          },
          index
        );
      }),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: (el) => stepRefs.current[steps2.length] = el,
          className: "relative z-10 flex items-center justify-center mt-32 w-full",
          children: /* @__PURE__ */ jsxs("div", { className: "absolute left-8 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-700 z-20 bg-black ${activeStep === steps2.length ? "scale-110" : "scale-100 border-neutral-800 text-neutral-600"}`,
                style: {
                  borderColor: activeStep === steps2.length ? "#80b67d" : "",
                  color: activeStep === steps2.length ? "#80b67d" : "",
                  boxShadow: activeStep === steps2.length ? "0 0 20px rgba(128,182,125,0.4)" : ""
                },
                children: /* @__PURE__ */ jsx(Flag, { size: 32 })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: `mt-4 font-bold text-lg tracking-widest transition-all duration-700 ${activeStep === steps2.length ? "text-[#80b67d]" : "text-neutral-600"}`, children: "OBJETIVO CUMPLIDO" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "h-[50vh] w-full" })
    ] })
  ] }) });
};
const PorQueNosotros = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const reasons2 = [
    {
      id: 1,
      title: "+35 Años de Experiencia",
      description: "Productores veteranos desarrollando proyectos audiovisuales exitosos para múltiples industrias. Sabemos qué funciona y cómo ejecutarlo.",
      icon: /* @__PURE__ */ jsx(Award, { size: 36 }),
      color: "#e6af41"
    },
    {
      id: 2,
      title: "Creatividad Inhouse",
      description: "Control total desde la idea hasta el corte final. Al no depender de terceros, garantizamos agilidad operativa y una calidad impecable.",
      icon: /* @__PURE__ */ jsx(Layers, { size: 36 }),
      color: "#599ddf"
    },
    {
      id: 3,
      title: "Infraestructura Escalable",
      description: "Nos adaptamos a tus objetivos y presupuesto. Tenemos equipo técnico para grabar desde contenido ágil para redes hasta calidad cinematográfica.",
      icon: /* @__PURE__ */ jsx(Maximize, { size: 36 }),
      color: "#c5362e"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-16 px-4 sm:px-6 lg:px-8 font-montserrat text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-aston mb-4", children: "¿Por qué producir con nosotros?" }),
      /* @__PURE__ */ jsx("p", { className: "text-white font-normal text-base md:text-lg leading-relaxed", children: "Combinamos trayectoria, control interno y flexibilidad técnica para garantizar que tu inversión audiovisual sea rentable." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: reasons2.map((reason, index) => {
      const isHovered = hoveredIndex === index;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative group cursor-pointer",
          onMouseEnter: () => setHoveredIndex(index),
          onMouseLeave: () => setHoveredIndex(null),
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 rounded-2xl blur-xl transition-all duration-500",
                style: { backgroundColor: reason.color, opacity: isHovered ? 0.15 : 0 }
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: `relative h-full bg-neutral-900 rounded-2xl p-8 border transition-all duration-500 ${isHovered ? "-translate-y-2" : ""}`,
                style: {
                  borderColor: isHovered ? reason.color : "#262626",
                  boxShadow: isHovered ? `0 10px 30px -10px ${reason.color}60` : "none"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "mb-6 inline-flex p-4 rounded-xl transition-colors duration-500",
                      style: {
                        backgroundColor: isHovered ? `${reason.color}20` : "#171717",
                        color: isHovered ? reason.color : "#737373"
                      },
                      children: reason.icon
                    }
                  ),
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: reason.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300", children: reason.description }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute bottom-0 left-8 right-8 h-1 rounded-t-full transition-all duration-500 scale-x-0 group-hover:scale-x-100",
                      style: { backgroundColor: reason.color }
                    }
                  )
                ]
              }
            )
          ]
        },
        reason.id
      );
    }) })
  ] }) });
};
const reviews = [
  { name: "Jessica Zamora", tag: "Cliente verificado en Google", avatar: "JZ", color: "#c5362e", text: "Tienen un servicio excelente y son súper amables! Todo es muy profesional, el equipo es muy atento y te acompañan en todo el proceso. ¡Super recomendados!" },
  { name: "Johana Kamila Gutiérrez", tag: "Cliente verificado en Google", avatar: "JG", color: "#599ddf", text: "Tuve una muy buena experiencia con ellos, ofrecen una amplia variedad de servicios y cuentan con un equipo profesional, excelente agencia." },
  { name: "Pérez Lecter", tag: "Cliente verificado en Google", avatar: "PL", color: "#e6af41", text: "El proyecto que hicieron fue muy profesional y a todos nos encantó." },
  { name: "Cecilia Hernandez", tag: "Cliente verificado en Google", avatar: "CH", color: "#80b67d", text: "Una empresa increíble y muy creativa!! Siempre los recomiendo, además personas muy humanas, atentas y resilientes." },
  { name: "Kevin R.", tag: "Cliente verificado en Google", avatar: "KR", color: "#599ddf", text: "Mi experiencia ha sido excepcional. Altamente estratégicos, dedicados y orientados a resultados." },
  { name: "María López", tag: "Cliente verificado en Google", avatar: "ML", color: "#c5362e", text: "Excelente trabajo en todo momento. El equipo siempre dispuesto a dar lo mejor." },
  { name: "Carlos Mendez", tag: "Cliente verificado en Google", avatar: "CM", color: "#80b67d", text: "Profesionalismo de primer nivel. Entregaron antes del tiempo estimado y superaron nuestras expectativas." },
  { name: "Ana Torres", tag: "Cliente verificado en Google", avatar: "AT", color: "#e6af41", text: "El mejor equipo de producción con el que hemos trabajado. Creatividad y calidad en cada entrega." },
  { name: "Roberto Sánchez", tag: "Cliente verificado en Google", avatar: "RS", color: "#c5362e", text: "Increíble la calidad de producción. Cada detalle fue cuidado al máximo. 100% recomendados." },
  { name: "Laura Vega", tag: "Cliente verificado en Google", avatar: "LV", color: "#599ddf", text: "Desde el primer contacto hasta la entrega final, todo fue perfecto. Un equipo muy comprometido." }
];
const row1 = [...reviews.slice(0, 5), ...reviews.slice(0, 5)];
const row2 = [...reviews.slice(5), ...reviews.slice(5)];
const testimonialVideo = "https://res.cloudinary.com/dodxaehv3/video/upload/v1779631999/tania-garcia_zjzonz.mp4";
const StarRating = () => /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "#e6af41", children: /* @__PURE__ */ jsx("polygon", { points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" }) }, i)) });
const GoogleIcon = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", children: [
  /* @__PURE__ */ jsx("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }),
  /* @__PURE__ */ jsx("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }),
  /* @__PURE__ */ jsx("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }),
  /* @__PURE__ */ jsx("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" })
] });
const ReviewCard = ({ review }) => /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex flex-col gap-2 flex-shrink-0 w-48", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0",
        style: { backgroundColor: review.color },
        children: review.avatar
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx("p", { className: "text-white font-semibold text-[10px] leading-tight truncate", children: review.name }),
      /* @__PURE__ */ jsx("p", { className: "text-white/40 text-[9px] truncate", children: review.tag })
    ] }),
    /* @__PURE__ */ jsx(GoogleIcon, {})
  ] }),
  /* @__PURE__ */ jsx("p", { className: "text-white/60 text-[10px] leading-relaxed line-clamp-3", children: review.text }),
  /* @__PURE__ */ jsx(StarRating, {})
] });
const InfiniteRow = ({ reviews: reviews2, direction }) => /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
  /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute top-0 left-0 w-16 h-full z-10 pointer-events-none",
      style: { background: "linear-gradient(to right, #000, transparent)" }
    }
  ),
  /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute top-0 right-0 w-16 h-full z-10 pointer-events-none",
      style: { background: "linear-gradient(to left, #000, transparent)" }
    }
  ),
  /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex gap-3 py-1",
      style: {
        animation: `scroll-${direction} 25s linear infinite`,
        width: "max-content",
        height: "270px"
      },
      children: reviews2.map((review, index) => /* @__PURE__ */ jsx(ReviewCard, { review }, index))
    }
  ),
  /* @__PURE__ */ jsx("style", { children: `
      @keyframes scroll-left {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      @keyframes scroll-right {
        from { transform: translateX(-50%); }
        to { transform: translateX(0); }
      }
    ` })
] });
const NuestrosClientes = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        var _a, _b;
        if (entry.isIntersecting) {
          (_a = videoRef.current) == null ? void 0 : _a.play();
          setPlaying(true);
        } else {
          (_b = videoRef.current) == null ? void 0 : _b.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, className: "w-full bg-transparent py-16 px-4 sm:px-6 lg:px-8 font-montserrat text-white overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-aston tracking-tight mb-4", children: "Nuestros clientes hablan por nosotros" }),
      /* @__PURE__ */ jsx("p", { className: "text-white font-normal text-base md:text-lg leading-relaxed", children: "Ayudamos a Empresas y Marcas de cualquier sector a generar un posicionamiento de alto impacto a través de producción profesional." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-[5rem] items-stretch", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full lg:w-[400px] flex-shrink-0", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative overflow-hidden rounded-3xl cursor-pointer group h-full",
          style: { aspectRatio: "9/16", minHeight: 300 },
          onClick: togglePlay,
          children: [
            /* @__PURE__ */ jsx(
              "video",
              {
                ref: videoRef,
                src: testimonialVideo,
                className: "w-full h-full object-cover",
                loop: true,
                playsInline: true
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-opacity duration-300" }),
            /* @__PURE__ */ jsx("div", { className: `absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`, children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center", children: playing ? /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "white", children: [
              /* @__PURE__ */ jsx("rect", { x: "5", y: "3", width: "4", height: "18", rx: "1" }),
              /* @__PURE__ */ jsx("rect", { x: "15", y: "3", width: "4", height: "18", rx: "1" })
            ] }) : /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "white", style: { marginLeft: 3 }, children: /* @__PURE__ */ jsx("polygon", { points: "5,3 19,12 5,21" }) }) }) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-between gap-4 overflow-hidden", children: [
        /* @__PURE__ */ jsx(InfiniteRow, { reviews: row1, direction: "left" }),
        /* @__PURE__ */ jsx(InfiniteRow, { reviews: row2, direction: "right" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl px-5 py-4 flex items-center gap-3 mt-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "p-[10px] bg-white rounded-2xl shadow-xl", children: /* @__PURE__ */ jsx("img", { src: "https://images.seeklogo.com/logo-png/62/1/google-new-logo-png_seeklogo-622426.png", className: "w-10 h-10 rounded-[10px]", alt: "Google" }) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-sm", children: "Puntuación de 4.9 estrellas" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/80 text-xs", children: "Basado en 49 opiniones verificadas" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "ml-auto flex gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "#e6af41", children: /* @__PURE__ */ jsx("polygon", { points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" }) }, i)) })
        ] })
      ] })
    ] })
  ] }) });
};
const ContactoSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "¿En qué podemos ayudarte?",
    mensaje: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1800);
  };
  const contactInfo = [
    {
      icon: /* @__PURE__ */ jsx(MessageCircle, { size: 20 }),
      label: "Whatsapp",
      value: "+52 1 33 1385 7143",
      href: "https://wa.me/5213313857143?text=Hola,%20quiero%20más%20información%20acerca%20de%20los%20servicios%20de%20producción%20audiovisual.",
      color: "#25D366"
    },
    {
      icon: /* @__PURE__ */ jsx(Mail, { size: 20 }),
      label: "Correo",
      value: "hola@weprom.mx",
      href: "mailto:hola@weprom.mx",
      color: "#599ddf"
    },
    {
      icon: /* @__PURE__ */ jsx(Phone, { size: 20 }),
      label: "Llamadas",
      value: "+52 1 33 1067 4199",
      href: "tel:+5213310674199",
      color: "#80b67d"
    }
  ];
  const asuntos = [
    "¿En qué podemos ayudarte?",
    "Video Institucional",
    "Video Publicitario",
    "Contenido para Social Media",
    "Animación 2D/3D",
    "Fotografía Profesional",
    "Producción con Drones",
    "Otro"
  ];
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-16 px-4 sm:px-6 lg:px-8 font-montserrat text-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-12 lg:gap-20 items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-2/5 flex flex-col gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-aston tracking-tight mb-4 leading-tight", children: "Estamos para ti" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/100 font-normal text-base leading-relaxed", children: "¿Tienes alguna idea en mente?, no dudes en escribirnos o visitarnos." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-5", children: contactInfo.map((item, index) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: item.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-4 group",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110",
                style: {
                  borderColor: item.color,
                  color: item.color,
                  backgroundColor: `${item.color}15`
                },
                children: item.icon
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-white/100 text-xs font-light mb-0.5", children: item.label }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "font-semibold text-sm transition-colors duration-300",
                  children: item.value
                }
              )
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-neutral-800", style: { aspectRatio: "4/3" }, children: /* @__PURE__ */ jsx(
        "iframe",
        {
          title: "Ubicación",
          src: "https://maps.google.com/maps?q=C.+Corrientes+3071,+Colomos+Providencia,+Guadalajara&output=embed&z=15",
          width: "100%",
          height: "100%",
          style: { border: 0, filter: "grayscale(0.8) invert(0.9) contrast(0.85)" },
          allowFullScreen: true,
          loading: "lazy"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-neutral-950 border p-5 border-neutral-800 rounded-2xl lg:w-3/5", children: sent ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-6 py-20 text-center", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-20 h-20 rounded-full flex items-center justify-center border-2",
          style: { borderColor: "#80b67d", color: "#80b67d", backgroundColor: "#80b67d20" },
          children: /* @__PURE__ */ jsx(Send, { size: 32 })
        }
      ),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-aston", children: "¡Mensaje enviado!" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm max-w-xs", children: "Nos pondremos en contacto contigo muy pronto. ¡Gracias por escribirnos!" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setSent(false);
            setFormData({ nombre: "", email: "", telefono: "", asunto: "¿En qué podemos ayudarte?", mensaje: "" });
          },
          className: "mt-2 text-sm text-white/40 hover:text-white transition-colors duration-300 underline underline-offset-4",
          children: "Enviar otro mensaje"
        }
      )
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: [
          "Nombre ",
          /* @__PURE__ */ jsx("span", { className: "text-[#c5362e]", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "nombre",
            required: true,
            placeholder: "Nombre completo",
            value: formData.nombre,
            onChange: handleChange,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: [
          "Email ",
          /* @__PURE__ */ jsx("span", { className: "text-[#c5362e]", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            name: "email",
            required: true,
            placeholder: "Correo electrónico",
            value: formData.email,
            onChange: handleChange,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsx("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: "Teléfono" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            name: "telefono",
            placeholder: "+00 000 000 0000",
            value: formData.telefono,
            onChange: handleChange,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: [
          "Asunto ",
          /* @__PURE__ */ jsx("span", { className: "text-[#c5362e]", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "select",
          {
            name: "asunto",
            required: true,
            value: formData.asunto,
            onChange: handleChange,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-300 focus:border-neutral-600 appearance-none cursor-pointer",
            style: { backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff40' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" },
            children: asuntos.map((a, i) => /* @__PURE__ */ jsx("option", { value: a, className: "bg-neutral-900", children: a }, i))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: [
          "Mensaje ",
          /* @__PURE__ */ jsx("span", { className: "text-[#c5362e]", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "mensaje",
            required: true,
            placeholder: "Platíquenos...",
            value: formData.mensaje,
            onChange: handleChange,
            rows: 4,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600 resize-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: sending,
          className: "mt-2 w-full relative text-white font-montserrat font-semibold text-sm px-6 py-4 rounded-xl transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-60",
          style: {
            border: "2px solid transparent",
            background: "linear-gradient(#111, #111) padding-box,  border-box"
          },
          children: sending ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("svg", { className: "animate-spin", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }) }),
            "Enviando..."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "Enviar mensaje",
            /* @__PURE__ */ jsx(Send, { size: 16 })
          ] })
        }
      )
    ] }) })
  ] }) }) });
};
const Audiovisual = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-transparent overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(AudiovisualHero, {}),
    /* @__PURE__ */ jsx(SolucionesAudiovisuales, {}),
    /* @__PURE__ */ jsx(VideosInstitucionales, {}),
    /* @__PURE__ */ jsx(VideosPublicitarios, {}),
    /* @__PURE__ */ jsx(SocialMedia, {}),
    /* @__PURE__ */ jsx(NuestroProceso, {}),
    /* @__PURE__ */ jsx(PorQueNosotros, {}),
    /* @__PURE__ */ jsx(NuestrosClientes, {}),
    /* @__PURE__ */ jsx(ContactoSection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const brands$1 = [
  { name: "Cinepolis", src: Cinepolis, alt: "Cinepolis Logo" },
  { name: "Grupo Caliente", src: GrupoCaliente, alt: "Grupo Caliente Logo" },
  { name: "Heineken", src: Heineken, alt: "Heineken Logo", sizeClass: "h-16 sm:h-20 md:h-24" },
  { name: "Ford", src: Ford, alt: "Ford Logo", sizeClass: "h-8 sm:h-10 md:h-14" },
  { name: "KIA", src: KIA, alt: "KIA Logo", sizeClass: "h-20 sm:h-24 md:h-28" },
  { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Mercedes-Benz", src: MercedesBenz, alt: "Mercedes-Benz Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Nissan", src: Nissan, alt: "Nissan Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Pepsico", src: Pepsico, alt: "Pepsico Logo" },
  { name: "Televisa", src: Televisa, alt: "Televisa Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Volkswagen", src: Volkswagen, alt: "Volkswagen Logo", sizeClass: "h-16 sm:h-18 md:h-20" }
];
const words = [
  { text: "Escalar", color: "#5fa1cf" },
  { text: "Transformar", color: "#7eb387" },
  { text: "Expandir", color: "#e5ad43" },
  { text: "Acelerar", color: "#ba3f35" }
];
const AnimatedWord = () => {
  const [index, setIndex] = useState(0);
  const [animState, setAnimState] = useState("visible");
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState("exit");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimState("enter");
        setTimeout(() => {
          setAnimState("visible");
        }, 50);
      }, 350);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  const { text, color } = words[index];
  const styles = {
    visible: { transform: "translateY(0)", opacity: 1 },
    exit: { transform: "translateY(-110%)", opacity: 0 },
    enter: { transform: "translateY(110%)", opacity: 0 }
  };
  return /* @__PURE__ */ jsx(
    "span",
    {
      style: {
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom"
      },
      children: /* @__PURE__ */ jsx(
        "span",
        {
          style: {
            display: "inline-block",
            paddingLeft: "1.5rem",
            color,
            transition: animState === "exit" ? "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease" : animState === "visible" ? "transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease" : "none",
            ...styles[animState]
          },
          children: text
        }
      )
    }
  );
};
const allBrands$1 = [...brands$1, ...brands$1];
const ConsultoriaHero = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative w-full h-screen min-h-[600px] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "video",
        {
          className: "absolute inset-0 w-full h-full object-cover",
          src: bgVideo,
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true,
          style: { opacity: 0.35 }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 px-6 sm:px-12 md:px-20 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.7 },
            className: "font-aston text-6xl py-2 font-medium tracking-normal leading-snug text-white",
            children: [
              "Consultoría Estratégica para",
              /* @__PURE__ */ jsx(AnimatedWord, {}),
              /* @__PURE__ */ jsx("br", {}),
              "tus Resultados Comerciales"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.7, delay: 0.15 },
            className: "mt-4 text-white font-montserrat font-normal text-base sm:text-2xl max-w-xl leading-relaxed",
            children: "Trabajamos con tu equipo directivo y comercial para convertir esfuerzos en crecimiento real y sostenido."
          }
        ),
        /* @__PURE__ */ jsx(
          motion.button,
          {
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.7, delay: 0.28 },
            className: "mt-8 relative text-white font-montserrat font-bold text-xl px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300",
            style: {
              border: "3px solid grey"
            },
            children: "Agendar sesión de descubrimiento"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative w-full pt-10 sm:pt-12 pb-14 sm:pb-4 overflow-hidden bg-transparent group", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" }),
      /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-[1519px] mx-auto px-4 sm:px-8 z-10", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsx("button", { className: "prev-btn absolute left-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block", children: /* @__PURE__ */ jsx(ChevronLeft$1, { size: 40, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx("button", { className: "next-btn absolute right-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block", children: /* @__PURE__ */ jsx(ChevronRight$1, { size: 40, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx(
          Swiper,
          {
            modules: [Autoplay, Navigation],
            spaceBetween: 30,
            slidesPerView: 2,
            loop: true,
            speed: 4e3,
            autoplay: { delay: 0, disableOnInteraction: false },
            navigation: { prevEl: ".prev-btn", nextEl: ".next-btn" },
            breakpoints: {
              480: { slidesPerView: 3, spaceBetween: 40 },
              640: { slidesPerView: 3, spaceBetween: 50 },
              1024: { slidesPerView: 5, spaceBetween: 50 }
            },
            className: "flex items-center",
            children: allBrands$1.map((brand, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-24 sm:h-28 w-full px-4 py-4 rounded-2xl bg-white border border-white/20 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: brand.src,
                alt: brand.alt,
                className: `w-auto object-contain transition-all ${brand.sizeClass ? brand.sizeClass : "h-7 sm:h-9 md:h-11"}`
              }
            ) }) }, index))
          }
        )
      ] }) })
    ] })
  ] });
};
const ejesData = [
  {
    id: 0,
    title: "Consultoría Comercial",
    desc: "Evaluamos tu estrategia comercial actual e identificamos dónde hay mayor potencial de crecimiento y rentabilidad.",
    items: [
      "Estrategia de penetración y conquista de mercados estratégicos",
      "Rediseño de la mezcla comercial por canal y segmento",
      "Optimización de canales de comercialización",
      "Definición de propuesta de valor diferenciada por segmento"
    ],
    cta: "Optimizar mi estrategia comercial",
    waMsg: "Hola WeProm!, Vi su página de consultoría y me interesa optimizar mi estrategia comercial",
    icon: Store,
    theme: {
      text: "text-[#c5362e]",
      bg: "bg-[#c5362e]",
      bgLight: "bg-[#c5362e]/10",
      border: "border-[#c5362e]",
      shadow: "shadow-[0_0_15px_rgba(197,54,46,0.6)]",
      glow: "bg-[#c5362e]/20"
    }
  },
  {
    id: 1,
    title: "Consultoría de Marketing Digital",
    desc: "Auditamos tu ecosistema digital y optimizamos cada punto para mejorar la calidad y volumen de adquisición de clientes.",
    items: [
      "Reestructura del embudo de ventas desde atracción hasta conversión",
      "Estrategia de paid media orientada a resultados",
      "Definición, medición y escalamiento de KPI's",
      "Optimización de conversión y automatización de procesos digitales"
    ],
    cta: "Escalar mi adquisición digital",
    waMsg: "Hola WeProm!, Vi su página de consultoría y me interesa escalar mi adquisición digital",
    icon: MousePointerClick,
    theme: {
      text: "text-[#599ddf]",
      bg: "bg-[#599ddf]",
      bgLight: "bg-[#599ddf]/10",
      border: "border-[#599ddf]",
      shadow: "shadow-[0_0_15px_rgba(89,157,223,0.6)]",
      glow: "bg-[#599ddf]/20"
    }
  },
  {
    id: 2,
    title: "Consultoría en Comunicación Estratégica",
    desc: "Revisamos cómo está comunicando tu marca y afinamos los medios, mensajes y alianzas para un mayor impacto.",
    items: [
      "Creación de estrategia de marca",
      "Estrategia de Relaciones Públicas y medios de alto impacto",
      "Alianzas estratégicas para aumentar alcance y valor",
      "Desarrollo de narrativa y mensajes clave por audiencia"
    ],
    cta: "Elevar mi impacto de marca",
    waMsg: "Hola WeProm!, Vi su página de consultoría y me interesa elevar mi impacto de marca",
    icon: MessageSquare,
    theme: {
      text: "text-[#e6af41]",
      bg: "bg-[#e6af41]",
      bgLight: "bg-[#e6af41]/10",
      border: "border-[#e6af41]",
      shadow: "shadow-[0_0_15px_rgba(230,175,65,0.6)]",
      glow: "bg-[#e6af41]/20"
    }
  },
  {
    id: 3,
    title: "Capacitación a Equipos de Ventas",
    desc: "Elevamos el desempeño de tu equipo comercial con procesos, discurso y métricas que mejoran la tasa de cierre.",
    items: [
      "Estructuración del proceso comercial y experiencia del cliente",
      "Construcción del discurso de valor y negociación estratégica",
      "Indicadores de desempeño y motivación comercial",
      "Entrenamiento en manejo de objeciones y cierre efectivo"
    ],
    cta: "Entrenar a mi equipo comercial",
    waMsg: "Hola WeProm!, Vi su página de consultoría y me interesa entrenar a mi equipo comercial",
    icon: TrendingUp$1,
    theme: {
      text: "text-[#80b67d]",
      bg: "bg-[#80b67d]",
      bgLight: "bg-[#80b67d]/10",
      border: "border-[#80b67d]",
      shadow: "shadow-[0_0_15px_rgba(128,182,125,0.6)]",
      glow: "bg-[#80b67d]/20"
    }
  },
  {
    id: 4,
    title: "Workshops Estratégicos",
    desc: "Sesiones ejecutivas para recalibrar dirección, resolver cuellos de botella y tomar decisiones con mayor claridad.",
    items: [
      "Talleres de creatividad",
      "Actividades de Teambuilding",
      "Sesiones de ideación estratégica",
      "Dinámicas de innovación"
    ],
    cta: "Solicitar sesión estratégica",
    waMsg: "Hola WeProm!, Vi su página de consultoría y me interesa una sesión estratégica",
    icon: Lightbulb,
    theme: {
      text: "text-white",
      bg: "bg-white",
      bgLight: "bg-white/10",
      border: "border-white",
      shadow: "shadow-[0_0_15px_rgba(255,255,255,0.6)]",
      glow: "bg-white/20"
    }
  }
];
const ServiciosSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const activeData = ejesData[activeTab];
  const phoneNumber = "523313857143";
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % ejesData.length);
      }, 5e3);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  const handleManualTabClick = (index) => {
    setIsAutoPlaying(false);
    setActiveTab(index);
  };
  const handleWhatsApp = (message) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return /* @__PURE__ */ jsxs("section", { className: "w-full py-20 px-6 sm:px-12 md:px-20 bg-transparent", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-aston text-white text-4xl sm:text-5xl leading-tight", children: [
        "El impulso estratégico",
        /* @__PURE__ */ jsx("br", {}),
        "que tu",
        " ",
        /* @__PURE__ */ jsx("span", { style: { color: "#e5ad43" }, children: "talento interno" }),
        " necesita."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-white/60 font-montserrat font-semibold text-sm tracking-widest uppercase", children: "Servicios que ofrecemos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8 items-stretch", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/5 flex flex-col gap-3", children: ejesData.map((eje, index) => {
        const isActive = activeTab === index;
        const Icon = eje.icon;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleManualTabClick(index),
            className: `w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group cursor-pointer outline-none ${isActive ? `border ${eje.theme.border} ${eje.theme.bgLight}` : "border border-white/10 hover:bg-white/5"}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${isActive ? `${eje.theme.bg} text-black ${eje.theme.shadow} scale-110` : `bg-[#111] border ${eje.theme.border} ${eje.theme.text} group-hover:scale-110`}`,
                    children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `font-bold transition-colors ${isActive ? "text-white text-lg" : "text-white/60 group-hover:text-white"}`,
                    children: eje.title
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                ChevronRight$1,
                {
                  className: `w-5 h-5 transition-all duration-300 ${isActive ? `${eje.theme.text} opacity-100 translate-x-0` : `text-white/30 group-hover:${eje.theme.text} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0`}`
                }
              )
            ]
          },
          index
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-3/5 bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] p-8 sm:p-12 rounded-[2rem] min-h-[500px] relative overflow-hidden flex flex-col justify-center", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute top-[-20%] right-[-10%] w-[400px] h-[400px] blur-[100px] rounded-full transition-all duration-700 pointer-events-none ${activeData.theme.glow}`
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative z-10 animate-fade-in flex flex-col h-full",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-3xl sm:text-4xl font-bold mb-4 text-white leading-tight", children: activeData.title }),
                /* @__PURE__ */ jsx("p", { className: "text-zinc-300 text-lg mb-8 leading-relaxed", children: activeData.desc }),
                /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-400 mb-10", children: activeData.items.map((item, i) => /* @__PURE__ */ jsxs(
                  "li",
                  {
                    className: "flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.08] transition-colors h-full",
                    children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full mt-1.5 shrink-0 ${activeData.theme.bg} ${activeData.theme.shadow}`
                        }
                      ),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-zinc-300 leading-snug", children: item })
                    ]
                  },
                  i
                )) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => handleWhatsApp(activeData.waMsg),
                  className: `group flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 ${activeTab === 4 ? "bg-white text-black hover:bg-zinc-200" : `${activeData.theme.bg} text-black hover:brightness-110 ${activeData.theme.shadow}`}`,
                  children: [
                    activeData.cta,
                    /* @__PURE__ */ jsx(ArrowRight$1, { className: "w-5 h-5 transition-transform group-hover:translate-x-1" })
                  ]
                }
              ) })
            ]
          },
          activeTab
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      ` })
  ] });
};
const reasons = [
  {
    title: "Autoridad Corporativa",
    description: "Más de 35 años acompañando empresas en su transformación. Experiencia que se traduce en decisiones más inteligentes y resultados más rápidos.",
    icon: Award,
    color: "#ef4444"
    // Rojo
  },
  {
    title: "Visión Holística del Negocio",
    description: "Alineamos objetivos comerciales, procesos y métricas con el propósito real de la empresa bajo una dirección clara.",
    icon: Users,
    color: "#22c55e"
    // Verde
  },
  {
    title: "Compromiso Directivo",
    description: "Nos involucramos en cada etapa del proyecto para asegurar que cada recurso invertido genere retorno.",
    icon: Target$1,
    color: "#3b82f6"
    // Azul
  }
];
const WhyUsCard = ({ reason }) => {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref: cardRef,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "relative group flex flex-col px-6 py-8 rounded-[32px] border border-white/40 bg-[#0A0A0A] overflow-hidden transition-all duration-500 ease-out",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            style: {
              background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15), transparent 40%)`,
              margin: "-1px",
              padding: "1px",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 z-0 pointer-events-none opacity-60 group-hover:opacity-70 transition-opacity duration-300",
            style: {
              background: `radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), ${reason.color}44 0%, transparent 70%)`
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx(reason.icon, { size: 48, strokeWidth: 1.2, style: { color: reason.color } }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-white font-montserrat font-bold text-2xl mb-4", children: reason.title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 font-montserrat leading-relaxed text-[16px]", children: reason.description })
        ] })
      ]
    }
  );
};
const WhyUs = () => {
  return /* @__PURE__ */ jsx("section", { className: "w-full py-24 px-6 bg-transparent", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -20 },
        whileInView: { opacity: 1, y: 0 },
        className: "text-center mb-16 max-w-6xl",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-white font-aston text-4xl lg:text-6xl font-normal mb-8 tracking-tight", children: "¿Por qué nosotros?" }),
          /* @__PURE__ */ jsxs("p", { className: "text-white font-montserrat text-lg lg:text-xl leading-relaxed", children: [
            "Nos integramos a tu operación como ",
            /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: "consultores estratégicos del más alto nivel" }),
            ", aportando la experiencia y la visión ejecutiva que ",
            /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: "convierte los esfuerzos de la empresa en una máxima rentabilidad comercial." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-16 w-full mb-32", children: reasons.map((reason, idx) => /* @__PURE__ */ jsx(WhyUsCard, { reason }, idx)) }),
    /* @__PURE__ */ jsx(
      motion.button,
      {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        className: "bg-white text-black px-10 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-gray-200 transition-colors",
        children: "Habla con un experto"
      }
    )
  ] }) });
};
const TARGET_AUDIENCE = [
  {
    title: "Empresas Consolidadas",
    border: "border-blue-500/50 hover:border-blue-500/80",
    shadow: "shadow-blue-500/20 hover:shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]",
    iconColor: "text-blue-500",
    points: [
      "Buscan optimizar sus recursos",
      "Desean llegar a nuevos mercados",
      "Necesitan reestructurar sus procesos comerciales"
    ]
  },
  {
    title: "Empresas en Desarrollo",
    border: "border-amber-500/50 hover:border-amber-500/80",
    shadow: "shadow-amber-500/30 hover:shadow-[inset_0_0_20px_rgba(245,158,11,0.2)]",
    iconColor: "text-amber-500",
    points: [
      "Atraviesan puntos de inflexión",
      "Desean escalar sus ventas",
      "Requieren claridad operativa"
    ]
  },
  {
    title: "Startups y Emprendimientos",
    border: "border-green-500/60 hover:border-green-500/80",
    shadow: "shadow-green-500/30 hover:shadow-[inset_0_0_20px_rgba(34,197,94,0.2)]",
    iconColor: "text-green-500",
    points: [
      "Desean escalar a nivel profesional",
      "Buscan una estrategia desde etapas tempranas",
      "Valoran la dirección estratégica sobre la improvisación"
    ]
  }
];
const SYMPTOMS = [
  "Falta de dirección estratégica y ejecución sin enfoque claro.",
  "Desalineación constante entre los esfuerzos comerciales y las ventas.",
  "Bajo rendimiento y falta de retorno sobre inversión en marketing.",
  "Dificultad para estructurar, medir y escalar los resultados de negocio."
];
const PublicoObjetivo = () => {
  return /* @__PURE__ */ jsx("section", { className: "w-full py-24 bg-transparent text-white font-montserrat", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl", children: [
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-3xl md:text-5xl font-aston text-center mb-16 tracking-tight",
        children: "¿A quién dirigimos nuestros servicios?"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-20", children: TARGET_AUDIENCE.map((item, idx) => (
      // Dentro del map de TARGET_AUDIENCE:
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          whileHover: { y: -8, scale: 1.02 },
          transition: { delay: idx * 0.1, duration: 0.4 },
          viewport: { once: true },
          className: `py-6 px-4 rounded-3xl border ${item.border} bg-zinc-900/40 backdrop-blur-sm ${item.shadow} shadow-2xl transition-all duration-500 ease-out`,
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-extrabold mb-6 text-center", children: item.title }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: item.points.map((point, pIdx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-zinc-300 text-base leading-relaxed group/item", children: [
              /* @__PURE__ */ jsx("span", { className: `mt-1 p-0.5 rounded-full border ${item.iconColor.replace("text-", "border-")}/40`, children: /* @__PURE__ */ jsx(
                Check,
                {
                  size: 12,
                  className: `${item.iconColor} filter drop-shadow-[0_0_3px_rgba(0,0,0,0.5)]`,
                  strokeWidth: 3
                }
              ) }),
              point
            ] }, pIdx)) })
          ]
        },
        idx
      )
    )) }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        whileHover: { shadow: "0 0 60px -12px rgba(239,68,68,0.3)" },
        viewport: { once: true },
        className: "relative rounded-[2.5rem] p-10 md:p-14 border border-red-500/70 hover:border-red-400/90 bg-zinc-900/60 overflow-hidden group shadow-[0_0_50px_-12px_rgba(239,68,68,0.2)] hover:shadow-[inset_0_0_30px_rgba(239,68,68,0.15)] transition-all duration-700",
        children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "absolute right-[-20px] bottom-[-20px] text-white/5 rotate-12", size: 300 }),
          /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-normal font-aston text-center mb-12 relative z-10", children: "Sintomatología que erradicamos:" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10", children: SYMPTOMS.map((symptom, sIdx) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -10 },
              whileInView: { opacity: 1, x: 0 },
              transition: { delay: 0.2 + sIdx * 0.1 },
              className: "flex items-start gap-4",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-red-500 mt-2 shadow-[0_0_10px_#ef4444]" }),
                /* @__PURE__ */ jsx("p", { className: "text-zinc-400 text-base md:text-lg leading-snug", children: symptom })
              ]
            },
            sIdx
          )) })
        ]
      }
    )
  ] }) });
};
const ContactConsultoria = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "¿En qué podemos ayudarte?",
    mensaje: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1800);
  };
  const contactInfo = [
    {
      icon: /* @__PURE__ */ jsx(MessageCircle, { size: 20 }),
      label: "Whatsapp",
      value: "+52 1 33 1385 7143",
      href: "https://wa.me/5213313857143?text=Hola,%20quiero%20más%20información%20acerca%20de%20los%20servicios%20de%20consultoría%20en%20marketing.",
      color: "#25D366"
    },
    {
      icon: /* @__PURE__ */ jsx(Mail, { size: 20 }),
      label: "Correo",
      value: "hola@weprom.mx",
      href: "mailto:hola@weprom.mx",
      color: "#599ddf"
    },
    {
      icon: /* @__PURE__ */ jsx(Phone, { size: 20 }),
      label: "Llamadas",
      value: "+52 1 33 1067 4199",
      href: "tel:+5213310674199",
      color: "#80b67d"
    }
  ];
  const asuntos = [
    "¿En qué podemos ayudarte?",
    "Video Institucional",
    "Video Publicitario",
    "Contenido para Social Media",
    "Animación 2D/3D",
    "Fotografía Profesional",
    "Producción con Drones",
    "Otro"
  ];
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-16 px-4 sm:px-6 lg:px-8 font-montserrat text-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-12 lg:gap-20 items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-2/5 flex flex-col gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-3xl font-aston tracking-tight mb-4 leading-tight", children: "Será un gusto saber de ti." }),
        /* @__PURE__ */ jsxs("p", { className: "text-white/100 font-normal text-base leading-relaxed", children: [
          "¿Te gustaría saber más? ",
          /* @__PURE__ */ jsx("br", {}),
          " No dudes en escribirnos o llamarnos."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-5", children: contactInfo.map((item, index) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: item.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-4 group",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110",
                style: {
                  borderColor: item.color,
                  color: item.color,
                  backgroundColor: `${item.color}15`
                },
                children: item.icon
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-white/100 text-xs font-light mb-0.5", children: item.label }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "font-semibold text-sm transition-colors duration-300",
                  children: item.value
                }
              )
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-neutral-800", style: { aspectRatio: "4/3" }, children: /* @__PURE__ */ jsx(
        "iframe",
        {
          title: "Ubicación",
          src: "https://maps.google.com/maps?q=C.+Corrientes+3071,+Colomos+Providencia,+Guadalajara&output=embed&z=15",
          width: "100%",
          height: "100%",
          style: { border: 0, filter: "grayscale(0.8) invert(0.9) contrast(0.85)" },
          allowFullScreen: true,
          loading: "lazy"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-neutral-950 border p-5 border-neutral-800 rounded-2xl lg:w-3/5", children: sent ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-6 py-20 text-center", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-20 h-20 rounded-full flex items-center justify-center border-2",
          style: { borderColor: "#80b67d", color: "#80b67d", backgroundColor: "#80b67d20" },
          children: /* @__PURE__ */ jsx(Send, { size: 32 })
        }
      ),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-aston", children: "¡Mensaje enviado!" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm max-w-xs", children: "Nos pondremos en contacto contigo muy pronto. ¡Gracias por escribirnos!" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setSent(false);
            setFormData({ nombre: "", email: "", telefono: "", asunto: "¿En qué podemos ayudarte?", mensaje: "" });
          },
          className: "mt-2 text-sm text-white/40 hover:text-white transition-colors duration-300 underline underline-offset-4",
          children: "Enviar otro mensaje"
        }
      )
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: [
          "Nombre ",
          /* @__PURE__ */ jsx("span", { className: "text-[#c5362e]", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "nombre",
            required: true,
            placeholder: "Nombre completo",
            value: formData.nombre,
            onChange: handleChange,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: [
          "Email ",
          /* @__PURE__ */ jsx("span", { className: "text-[#c5362e]", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            name: "email",
            required: true,
            placeholder: "Correo electrónico",
            value: formData.email,
            onChange: handleChange,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsx("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: "Teléfono" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            name: "telefono",
            placeholder: "+00 000 000 0000",
            value: formData.telefono,
            onChange: handleChange,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: [
          "Asunto ",
          /* @__PURE__ */ jsx("span", { className: "text-[#c5362e]", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "select",
          {
            name: "asunto",
            required: true,
            value: formData.asunto,
            onChange: handleChange,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-300 focus:border-neutral-600 appearance-none cursor-pointer",
            style: { backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff40' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" },
            children: asuntos.map((a, i) => /* @__PURE__ */ jsx("option", { value: a, className: "bg-neutral-900", children: a }, i))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white/40 text-xs font-medium uppercase tracking-widest", children: [
          "Mensaje ",
          /* @__PURE__ */ jsx("span", { className: "text-[#c5362e]", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "mensaje",
            required: true,
            placeholder: "Platíquenos...",
            value: formData.mensaje,
            onChange: handleChange,
            rows: 4,
            className: "bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600 resize-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: sending,
          className: "mt-2 w-full relative text-white font-montserrat font-semibold text-sm px-6 py-4 rounded-xl transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-60",
          style: {
            border: "2px solid transparent",
            background: "linear-gradient(#111, #111) padding-box,  border-box"
          },
          children: sending ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("svg", { className: "animate-spin", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }) }),
            "Enviando..."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "Enviar mensaje",
            /* @__PURE__ */ jsx(Send, { size: 16 })
          ] })
        }
      )
    ] }) })
  ] }) }) });
};
const stepsData = [
  {
    id: 0,
    title: "1. Inmersión",
    desc: "Radiografiamos tu negocio: Modelo comercial, equipo y recursos. Identificamos dónde se pierden oportunidades y tus áreas de mejora.",
    color: "#c5362e",
    activeDot: "bg-[#c5362e] shadow-[0_0_15px_#c5362e]",
    hoverDot: "group-hover:border-[#c5362e]",
    activeTitle: "text-[#c5362e]",
    hoverTitle: "group-hover:text-[#c5362e]"
  },
  {
    id: 1,
    title: "2. Arquitectura",
    desc: "Definimos la ruta crítica de acción: qué atacar primero, cómo estructurar tu operación comercial y con qué herramientas.",
    color: "#599ddf",
    activeDot: "bg-[#599ddf] shadow-[0_0_15px_#599ddf]",
    hoverDot: "group-hover:border-[#599ddf]",
    activeTitle: "text-[#599ddf]",
    hoverTitle: "group-hover:text-[#599ddf]"
  },
  {
    id: 2,
    title: "3. Implementación",
    desc: "Acompañamos a tus equipos en la ejecución para que la consultoría traiga con ella resultados concretos.",
    color: "#80b67d",
    activeDot: "bg-[#80b67d] shadow-[0_0_15px_#80b67d]",
    hoverDot: "group-hover:border-[#80b67d]",
    activeTitle: "text-[#80b67d]",
    hoverTitle: "group-hover:text-[#80b67d]"
  },
  {
    id: 3,
    title: "4. Escalabilidad",
    desc: "Evaluamos resultados, identificamos lo que genera mayor retorno y trazamos el siguiente nivel de crecimiento para tu empresa.",
    color: "#e6af41",
    activeDot: "bg-[#e6af41] shadow-[0_0_15px_#e6af41]",
    hoverDot: "group-hover:border-[#e6af41]",
    activeTitle: "text-[#e6af41]",
    hoverTitle: "group-hover:text-[#e6af41]"
  }
];
function FrameworkIntervention() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3e3);
    return () => clearInterval(timer);
  }, [activeStep]);
  return /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5 bg-transparent", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center lg:text-left flex flex-col justify-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-aston text-4xl sm:text-5xl text-white mb-6 tracking-tight text-center", children: "Framework de Intervención" }),
      /* @__PURE__ */ jsx("p", { className: "text-zinc-200 text-lg sm:text-xl leading-relaxed text-center", children: "Nuestra metodología está diseñada para escuchar, acompañar y llevar a tu empresa al siguiente nivel." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-12 lg:gap-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/2 flex justify-center relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/5 blur-[100px] rounded-full pointer-events-none" }),
        /* @__PURE__ */ jsxs(
          "svg",
          {
            viewBox: "0 0 4100 4100",
            className: "w-full max-w-[400px] lg:max-w-[500px] relative z-10 overflow-visible",
            children: [
              /* @__PURE__ */ jsxs("defs", { children: [
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "Degradado_amarillo",
                    x1: "3475.55",
                    y1: "2745.24",
                    x2: "3475.55",
                    y2: "2762.93",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#e6af41" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#f9b233" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "linearGradient",
                  {
                    id: "Degradado_amarillo_2",
                    x1: "3690.38",
                    y1: "812.69",
                    x2: "3690.38",
                    y2: "2989.98",
                    xlinkHref: "#Degradado_amarillo"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "linearGradient",
                  {
                    id: "Degradado_amarillo_3",
                    x1: "2346.38",
                    y1: "2873.01",
                    x2: "3884.41",
                    y2: "2873.01",
                    xlinkHref: "#Degradado_amarillo"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "g",
                {
                  onClick: () => setActiveStep(0),
                  className: `origin-center transition-all duration-500 cursor-pointer ${activeStep === 0 ? "opacity-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" : "opacity-15 grayscale-[50%]"}`,
                  children: [
                    /* @__PURE__ */ jsx("path", { fill: "#c5362e", d: "M211.4,2806.07s0,.02,0,.02c0-.01,0-.02,0-.03,0,0,0,0,0,0Z" }),
                    /* @__PURE__ */ jsx("path", { fill: "#c5362e", d: "M211.4,2806.06c-.08-.83-.22-.78,0,0h0Z" }),
                    /* @__PURE__ */ jsx("path", { fill: "#c5362e", d: "M211.44,2806.23v-.02s-.02-.08-.03-.12c.01.05.02.08.03.13Z" }),
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        fill: "#c5362e",
                        d: "M1024.79,2545.56c-2.11,30.14,42.78,368.44-207.13,525.16-63.21,39.64-138.65,59.55-211.89,45.33-269.18-52.23-390.95-315.74-392.56-318.32,0-.02,13.74,86.56,28.69,123.11,200.78,490.8,572.24,455.42,617.5,455.48,196.08.3,530.3-65.8,559.59-526.1.47-7.42-2.74-447.83-4.32-845.06l-385.63-299.79c.25,360.65-1.3,798.25-4.24,840.17Z"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        fill: "#9f241e",
                        d: "M1748.51,1850.55c-412.39-319.2-758.1-586.35-775.55-597.45-240.92-153.18-448.28-104.58-448.28-104.58,10.91,82,57.78,507.75,73.89,652.34l-73.89-652.34c-215.77,46.66-281.57,258-305.1,341.74-43.06,153.25-13.23,1118.73-6.71,1305.68.08,2.29,20.58,42.26,56.71,93.17,59.67,81.36,168.06,192.49,331.36,225.94-6.31-166,0-1019.45,3.06-1266.25h0s0,0,0,0c-3.06-387.79,308.6-361.2,452.98-245.35-15.49-12.43,297.39,231.24,691.54,536.94v-289.85Z"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "g",
                {
                  onClick: () => setActiveStep(1),
                  className: `origin-center transition-all duration-500 cursor-pointer ${activeStep === 1 ? "opacity-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" : "opacity-15 grayscale-[50%]"}`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        fill: "#599ddf",
                        d: "M1598.24,657.44c-303.5-.07-511.75,212.07-549.65,374.89-7.25,31.13-16.05,94.16-20.11,145.78l385.89,293.15c.47-56.25,1.28-90.52,2.51-93.51,40.68-302.22,220.13-362.03,293.24-368.68,379.79-59.81,540.04,399.4,540.04,399.4-.6-259.98-213.22-750.95-651.91-751.04Z"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        fill: "#3b82f6",
                        d: "M3041.68,3258.99c-192.84,377.96-743.62,290.84-792.13-154.18-12.77-117.18,6.75-1672.39,1.3-1689.68-46.31-146.85-185.18-359.52-406.11-405.64,0,0,3.37,1871.78,2.55,1927.07-7.3,487.27,287.5,779.43,632.02,802.5,454.64,30.45,565.87-277.25,592.37-454.75l-29.99-25.31Z"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "g",
                {
                  onClick: () => setActiveStep(2),
                  className: `origin-center transition-all duration-500 cursor-pointer ${activeStep === 2 ? "opacity-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" : "opacity-15 grayscale-[50%]"}`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        fill: "#80b67d",
                        d: "M3260.12,353.37c-443.44,0-566.39,304.08-585.9,434.15-10.33,68.84-8.74,233.58-9.08,256.58-1.24,82.66-.02,165.44-.02,248.12,0,117.55-1.31,740.89-2.07,1141.12l416.58,323.85c-.72-504.02-1.31-1369.86-1.18-1397.55,1.26-260.83-32.48-656.27,359.59-659.99-.09-.68,335.67,1.5,469.24,404.76-11.72-569.41-412.7-751.04-647.16-751.04Z"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        fill: "#48935d",
                        d: "M2661.61,3501.39c147.65-.54,297.7-79.24,380.71-243.55l-379.25-286.49c1.42,407.91,3.75,508.82-1.46,530.04Z"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "g",
                {
                  onClick: () => setActiveStep(3),
                  className: `origin-center transition-all duration-500 cursor-pointer ${activeStep === 3 ? "opacity-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" : "opacity-15 grayscale-[50%]"}`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        fill: "url(#Degradado_amarillo)",
                        d: "M3475.2,2746.69c-.1,5.76.18,11.46.72,17.12,0-1.61,0-3.2,0-4.83-.46-4.84-.68-9.72-.68-14.63-.01.78-.02,1.61-.04,2.34Z"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        fill: "url(#Degradado_amarillo_2)",
                        d: "M3475.09,702.94c-2.39,151.7,2.9,1815.32.23,2034.83.32,7.21.52,14.28.59,21.21,18.55,197.08,408.5,333.94,408.5,333.94-.1,1.56-.21,3.12-.32,4.64.21.07.32.11.32.11,4.99-295.61,20.07-1812.46,21.89-1996.09-106.86-318.84-340.5-385.2-431.22-398.65Z"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        fill: "url(#Degradado_amarillo_3)",
                        d: "M3475.91,2759.34c1.93,218.53-123.65,299.71-303.33,191.06-13.88-8.39-389.29-298.72-826.2-636.96v289.69c442.09,341.25,841.52,646.96,899.92,682.77,58.94,36.15,117.82,74.14,179.11,106.2,59.95,31.36,130.49,44.78,199.92,39.29,82.66-6.54,151.81-61.6,191.35-130.67,34.7-60.61,56.4-122.23,66.24-191.76.57-4.07,1.1-10.02,1.48-16.04,0,0-389.52-136.69-408.5-333.58Z"
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/2 relative pl-4 sm:pl-8", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-4 bottom-4 w-[2px] bg-white/10 rounded-full" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-8", children: stepsData.map((step, index) => {
          const isActive = activeStep === index;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              onClick: () => setActiveStep(index),
              className: `relative transition-all duration-500 cursor-pointer group ${isActive ? "opacity-100 translate-x-0" : "opacity-30 translate-x-4 hover:opacity-70"}`,
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `absolute -left-[17px] top-1.5 sm:-left-[33px] w-4 h-4 rounded-full transition-all duration-500 ${isActive ? step.activeDot : `bg-[#222] border border-white/20 ${step.hoverDot}`}`
                  }
                ),
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: `font-aston text-2xl sm:text-3xl mb-2 transition-colors ${isActive ? step.activeTitle : `text-white/50 ${step.hoverTitle}`}`,
                    children: step.title
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: `text-sm sm:text-base leading-relaxed max-w-md transition-all ${isActive ? "text-zinc-300" : "text-zinc-500"}`,
                    children: step.desc
                  }
                )
              ]
            },
            step.id
          );
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 flex justify-center", children: /* @__PURE__ */ jsx("button", { className: "bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95 shadow-lg", children: "Programar sesión informativa" }) })
  ] });
}
const ConsultoriaDeMarketing = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-transparent overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(ConsultoriaHero, {}),
    /* @__PURE__ */ jsx(ServiciosSection, {}),
    /* @__PURE__ */ jsx(WhyUs, {}),
    /* @__PURE__ */ jsx(SuccessStories, {}),
    /* @__PURE__ */ jsx(PublicoObjetivo, {}),
    /* @__PURE__ */ jsx(FrameworkIntervention, {}),
    /* @__PURE__ */ jsx(ContactConsultoria, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const digitalMktArc = "/assets/digitalmktsection1--0Uvgzma.png";
const HeroMkt = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full flex flex-col justify-start items-center bg-transparent overflow-hidden pt-32 md:pt-40", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-white/10 blur-[150px] rounded-full z-0 pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10 flex flex-col items-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-5xl", children: [
      /* @__PURE__ */ jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: "easeOut" },
          className: "text-white text-5xl font-normal leading-tight mb-4 !font-aston max-[1285px]:text-[2.8rem] max-[1021px]:text-[2.4rem]",
          style: { fontFamily: "var(--font-aston), sans-serif" },
          children: "Acelere el crecimiento de su negocio transformando su estrategia digital"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
          className: "text-zinc-300 text-lg md:text-xl lg:text-xl font-light max-w-4xl mx-auto leading-relaxed !font-montserrat max-[1285px]:!max-w-3xl max-[900px]:text-[1.1rem] max-[900px]:!max-w-2xl",
          style: { fontFamily: "var(--font-montserrat), sans-serif" },
          children: "Somos tu socio estratégico en marketing digital, generando resultados medibles e impulsando un crecimiento sostenible. Nos encantaría llevar a tu empresa al siguiente nivel."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -100, scale: 0.98 },
        animate: { opacity: 1, x: 0, scale: 1 },
        transition: {
          duration: 1.4,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1]
          // Curva suave tipo "expo out"
        },
        className: "relative w-[110vw] flex justify-center -mt-[15rem] md:-mt-[20rem] lg:-mt-[25rem] z-0 pointer-events-none max-[1249px]:!w-[105vw] max-[1249px]:!mt-[-21rem] max-[1080px]:!w-[120vw] max-[895px]:!mt-[-16rem] max-[725px]:!mt-[-10rem] pb-[4rem]",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: digitalMktArc,
              alt: "Ecosistema Digital",
              className: "w-full max-w-[1600px] h-auto object-contain select-none"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/40 to-transparent" })
        ]
      }
    )
  ] });
};
const fondoAzul = "/assets/fondo-azul-section2-DxI8aCaX.png";
const fondoVerde = "/assets/fondo-verde-section2-CrX3v1uS.png";
const fondoRojo = "/assets/fondo-rojo-section2-D0gIHkJF.png";
const badgeSection = "/assets/badge-section2-C_KSLeT6.png";
const services = [
  {
    title: "Marketing en redes sociales",
    description: "Campañas publicitarias que VENDEN y contenido que FORTALECE la conexión con tu marca.",
    image: fondoRojo,
    color: "from-red-900/40",
    glowColor: "rgba(239, 68, 68, 0.8)"
    // Rojo
  },
  {
    title: "Estrategia SEO & Posicionamiento",
    description: "Dominamos los algoritmos para que tu marca aparezca donde tus clientes están buscando.",
    image: fondoAzul,
    color: "from-blue-900/40",
    glowColor: "rgba(59, 130, 246, 0.8)"
    // Azul
  },
  {
    title: "Analítica y Crecimiento",
    description: "Transformamos datos en decisiones estratégicas para escalar tu facturación de forma sostenible.",
    image: fondoVerde,
    color: "from-emerald-900/40",
    glowColor: "rgba(16, 185, 129, 0.8)"
    // Verde
  }
];
const SectionTwo = () => {
  const [index, setIndex] = useState(0);
  const nextSlide = () => setIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + services.length) % services.length);
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-transparent text-white overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 mb-2 max-[749px]:text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-5xl md:text-6xl font-aston !font-light !leading-snug max-w-sm tracking-normal", children: "Servicios estratégicos" }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block w-px h-24 bg-zinc-400 mx-4" }),
      /* @__PURE__ */ jsx("p", { className: "text-zinc-200 font-montserrat max-w-2xl text-lg", children: "Ofrecemos una gama completa de servicios diseñados para maximizar su presencia en línea, impulsar sus ventas y construir conexiones con sus clientes." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative group flex justify-center w-full", children: [
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { scale: 0.9, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.9, opacity: 0 },
          transition: { duration: 0.5 },
          className: "relative flex justify-center items-center w-full",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute w-[60%] h-[60%] rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out -z-10",
                style: { backgroundColor: services[index].glowColor }
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: services[index].image,
                alt: services[index].title,
                className: "w-[80%] max-w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.02]"
              }
            )
          ]
        },
        index
      ) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prevSlide,
          className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/20 transition-all opacity-0 group-hover:opacity-100",
          children: /* @__PURE__ */ jsx(ChevronLeft$1, { size: 30 })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: nextSlide,
          className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/20 transition-all opacity-0 group-hover:opacity-100",
          children: /* @__PURE__ */ jsx(ChevronRight$1, { size: 30 })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mt-2 bg-zinc-900/80 border border-white/10 rounded-3xl p-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: badgeSection,
                alt: "Marcas aliadas",
                className: "h-10 md:h-12 w-auto object-contain"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-zinc-300 font-montserrat text-sm md:text-lg", children: "Alineado con los negocios que eligen la calidad." })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-3 rounded-full font-bold transition-all whitespace-nowrap", children: "Contáctanos" })
        ]
      }
    )
  ] }) });
};
const cardsVertical = "/assets/4cards-vertical-C_8K9WE9.png";
const metodologias = "/assets/3metodologias-CFJYt8DQ.png";
const SectionFour = () => {
  return /* @__PURE__ */ jsx("section", { className: "relative w-full py-20 bg-transparent overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-around gap-12 mb-12", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: "w-full lg:w-1/2 flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsxs(
              "h2",
              {
                className: "text-white text-4xl md:text-6xl font-normal leading-tight mb-8 !font-aston",
                style: { fontFamily: "var(--font-aston), sans-serif" },
                children: [
                  "¿Por qué ",
                  /* @__PURE__ */ jsx("br", {}),
                  " elegir a ",
                  /* @__PURE__ */ jsx("br", {}),
                  " WeProm?"
                ]
              }
            ),
            /* @__PURE__ */ jsx("button", { className: "bg-[#8B1D1D] hover:bg-[#A32222] text-white px-8 py-3 rounded-full text-sm md:text-base font-montserrat transition-all duration-300", children: "Descubre cómo podemos ayudarte." })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8, delay: 0.2 },
          viewport: { once: true },
          className: "w-full lg:w-1/2 flex justify-center lg:justify-start",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: cardsVertical,
              alt: "Beneficios WeProm",
              className: "w-full max-w-[500px] h-auto object-contain"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-right flex flex-col items-end mb-12", children: [
      /* @__PURE__ */ jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: "text-white text-4xl md:text-5xl font-normal mb-6 !font-aston",
          style: { fontFamily: "var(--font-aston), sans-serif" },
          children: [
            "Nuestra metodología se basa ",
            /* @__PURE__ */ jsx("br", {}),
            " en resultados."
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.2 },
          viewport: { once: true },
          className: "text-zinc-200 text-base md:text-lg font-light max-w-3xl leading-relaxed !font-montserrat",
          style: { fontFamily: "var(--font-montserrat), sans-serif" },
          children: "En WeProm hacemos proyectos de Marketing con visión a corto, mediano y largo plazo, los cuales además serán sumamente rentables, optimizando tu presupuesto para lograr más, con menos."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: 40 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        transition: { duration: 1, delay: 0.4 },
        viewport: { once: true },
        className: "w-full flex justify-center",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: metodologias,
            alt: "Metodología WeProm",
            className: "w-full max-w-5xl h-auto object-contain"
          }
        )
      }
    )
  ] }) });
};
const plataformasImg = "/assets/redes-sociales-5S5C5VAw.png";
const SectionFive = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full py-12 bg-transparent overflow-hidden flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 relative z-10 text-center mb-16", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: "easeOut" },
          viewport: { once: true },
          className: "text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 !font-aston",
          style: { fontFamily: "var(--font-aston), sans-serif" },
          children: "Expertos en Las Más Grandes Plataformas"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
          viewport: { once: true },
          className: "text-zinc-200 text-base md:text-lg lg:text-xl font-light max-w-5xl mx-auto leading-relaxed !font-montserrat",
          style: { fontFamily: "var(--font-montserrat), sans-serif" },
          children: 'Con base en una investigación profunda de tu "buyer persona" utilizamos solamente las plataformas donde sabemos que tu mercado meta interactúa constantemente. Hacemos que tu marca o empresa esté en la pantalla de quien sí te va a comprar.'
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9, y: 50 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        transition: {
          duration: 1.2,
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1]
        },
        viewport: { once: true, margin: "-50px" },
        className: "relative w-full max-w-6xl px-4 flex justify-center group",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-red-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: plataformasImg,
              alt: "Plataformas de Marketing Digital",
              className: "w-full h-auto object-contain select-none filter drop-shadow-[0_20px_50px_rgba(255,255,255,0.02)]"
            }
          )
        ]
      }
    )
  ] });
};
const icon1 = "/assets/SECTION6-CZSz1ZIm.png";
const icon2 = "/assets/SECTION6_2-EPYZMaVj.png";
const icon3 = "/assets/SECTION6_3-CMP-zJ-U.png";
const icon4 = "/assets/SECTION6_4-DFHG-Ikw.png";
const icon5 = "/assets/SECTION6_5-Bu3KPxi9.png";
const benefits = [
  {
    title: "Rentabilidad",
    description: "Los costos de inversión son menores, lo que implica un ahorro que se puede destinar a otras áreas de la empresa.",
    icon: icon1,
    glowColor: "rgba(239, 68, 68, 0.5)",
    // Rojo
    borderColor: "hover:border-red-500/50"
  },
  {
    title: "Medición",
    description: "Los resultados permiten conocer la eficacia de la estrategia, además de conocer el ROI para tu Negocio (Retorno de Inversión).",
    icon: icon2,
    glowColor: "rgba(59, 130, 246, 0.5)",
    // Azul
    borderColor: "hover:border-blue-500/50"
  },
  {
    title: "Conversiones",
    description: "Convierte a tus visitantes en leads, suscriptores y ventas, de manera más sencilla y con mayor alcance.",
    icon: icon3,
    glowColor: "rgba(34, 197, 94, 0.5)",
    // Verde
    borderColor: "hover:border-green-500/50"
  },
  {
    title: "Contacto Directo",
    description: "La experiencia personalizada genera un mayor engagement con la audiencia.",
    icon: icon4,
    glowColor: "rgba(234, 179, 8, 0.5)",
    // Amarillo
    borderColor: "hover:border-yellow-500/50"
  },
  {
    title: "Fidelización",
    description: "La interacción con tus clientes mediante las publicaciones de contenido permiten que tus consumidores se vuelvan leales a la marca.",
    icon: icon5,
    glowColor: "rgba(239, 68, 68, 0.5)",
    // Rojo
    borderColor: "hover:border-red-500/50"
  }
];
const SectionSix = () => {
  return /* @__PURE__ */ jsx("section", { className: "relative w-full py-24 bg-transparent overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-20", children: /* @__PURE__ */ jsxs(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        className: "text-white text-4xl md:text-6xl font-normal leading-tight !font-aston mb-4",
        children: [
          "Hazlo con los Mejores. ",
          /* @__PURE__ */ jsx("br", {}),
          " Con WeProm Obtendrás:"
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6", children: benefits.map((item, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: index * 0.1 },
        viewport: { once: true },
        className: `group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center transition-all duration-500 ${item.borderColor}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative mb-8", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 blur-2xl opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110",
                style: { backgroundColor: item.glowColor, borderRadius: "50%" }
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.icon,
                alt: item.title,
                className: "w-16 h-16 relative z-10 object-contain transition-transform duration-500 group-hover:scale-110"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-white text-xl md:text-2xl font-semibold mb-4 !font-aston", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-zinc-400 text-sm md:text-base font-light leading-relaxed !font-montserrat", children: item.description }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bottom-6 w-12 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500",
              style: { background: `linear-gradient(to right, transparent, ${item.glowColor}, transparent)` }
            }
          )
        ]
      },
      index
    )) })
  ] }) });
};
const sectionSevenImg = "/assets/sectionSeven-CdYbSO6g.png";
const SectionSeven = () => {
  return /* @__PURE__ */ jsx("section", { className: "relative w-full bg-transparent overflow-hidden flex justify-center items-center py-10 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 flex justify-center items-center", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      },
      viewport: { once: true },
      className: "w-full max-w-7xl relative group cursor-pointer",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-white/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: sectionSevenImg,
            alt: "Newsletter Marketing Experts",
            className: "w-full h-auto object-contain rounded-[1.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
          }
        )
      ]
    }
  ) }) });
};
const metaLogo = "/assets/Meta-Logo-D7_JwhNG.png";
const PROJECTS = [
  {
    id: 1,
    name: "Senties",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_Senties.png",
    cardImg: "https://weprommexico.com/mktcards/Senties.png",
    traffic: "+50,000",
    accounts: "+230%",
    conversations: "+240%",
    interactions: "+275%",
    color: "#c5362e",
    glow: "rgba(197, 54, 46, 0.2)"
  },
  {
    id: 2,
    name: "Fortuna",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_Fortuna.png",
    cardImg: "https://weprommexico.com/mktcards/Fortuna.png",
    traffic: "+38,000",
    accounts: "+180%",
    conversations: "+200%",
    interactions: "+220%",
    color: "#e6af41",
    glow: "rgba(230, 175, 65, 0.2)"
  },
  {
    id: 3,
    name: "CAB",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_cab.png",
    cardImg: "https://weprommexico.com/mktcards/CAB.png",
    traffic: "+45,000",
    accounts: "+120%",
    conversations: "+205%",
    interactions: "+110%",
    color: "#599ddf",
    glow: "rgba(89, 157, 223, 0.2)"
  },
  {
    id: 4,
    name: "Mayork",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_-k.png",
    cardImg: "https://weprommexico.com/mktcards/Mayork.png",
    traffic: "+180,000",
    accounts: "+350%",
    conversations: "+270%",
    interactions: "+400%",
    color: "#599ddf",
    glow: "rgba(89, 157, 223, 0.2)"
  },
  {
    id: 5,
    name: "Sistemik",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_sistemik.png",
    cardImg: "https://weprommexico.com/mktcards/Sistemik.png",
    traffic: "+62,000",
    accounts: "+230%",
    conversations: "+240%",
    interactions: "+275%",
    color: "#c5362e",
    glow: "rgba(197, 54, 46, 0.2)"
  },
  {
    id: 6,
    name: "Alteso",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_alteso.png",
    cardImg: "https://weprommexico.com/mktcards/Alteso.png",
    traffic: "+70,000",
    accounts: "+380%",
    conversations: "+320%",
    interactions: "+740%",
    color: "#80b67d",
    glow: "rgba(128, 182, 125, 0.2)"
  },
  {
    id: 7,
    name: "Deyun",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_dayun.png",
    cardImg: "https://weprommexico.com/mktcards/Centro%20de%20Espacialidades.png",
    traffic: "+38,000",
    accounts: "+240%",
    conversations: "+100%",
    interactions: "+220%",
    color: "#c5362e",
    glow: "rgba(197, 54, 46, 0.2)"
  },
  {
    id: 8,
    name: "Vagual",
    logo: "https://weprommexico.com/logos_tarjetas/Logo_vagual.png",
    cardImg: "https://weprommexico.com/mktcards/Vagual.png",
    traffic: "+62,000",
    accounts: "+315%",
    conversations: "+300%",
    interactions: "+360%",
    color: "#599ddf",
    glow: "rgba(89, 157, 223, 0.2)"
  }
];
function ProjectResults() {
  return /* @__PURE__ */ jsxs("section", { className: "w-full max-w-[1400px] mx-auto px-4 py-14 sm:py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-80 h-80 bg-amber-600/10 blur-[100px] rounded-full -z-10 animate-pulse" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full -z-10 animate-pulse", style: { animationDelay: "-5s" } }),
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-aston text-white text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight", children: "CASOS DE ÉXITO" }),
      /* @__PURE__ */ jsx("p", { className: "font-montserrat italic font-light text-zinc-300 text-base md:text-xl", children: "Nuestra tarjeta de presentación, es el resultado de nuestros clientes" })
    ] }),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        coverflowEffect: {
          rotate: 0,
          stretch: -10,
          depth: 120,
          modifier: 1.5,
          slideShadows: false
        },
        pagination: { clickable: true },
        navigation: true,
        modules: [Autoplay, EffectCoverflow, Pagination$1, Navigation],
        className: "projects-swiper !pb-16 pt-[1.6rem]",
        children: PROJECTS.map((project) => /* @__PURE__ */ jsx(SwiperSlide, { className: "max-w-[850px] w-[90%] opacity-30 transition-opacity duration-500 [&.swiper-slide-active]:opacity-100", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "glass-card group relative flex flex-row overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl transition-all duration-500 h-[400px]",
            style: {
              //@ts-ignore
              "--brand-color": project.color,
              "--brand-glow": project.glow
            },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "w-full sm:w-3/5 p-6 md:p-10 flex flex-col justify-between z-10", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "h-12 md:h-20 flex items-center", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: project.logo,
                      alt: project.name,
                      className: "h-full w-auto object-contain brightness-0 invert"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: metaLogo,
                      alt: "Meta Business",
                      className: "h-6 md:h-8 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-[12px] font-bold tracking-[0.3em] uppercase mb-1 text-zinc-500", children: "Tráfico Total" }),
                  /* @__PURE__ */ jsx("h3", { className: "text-5xl md:text-7xl font-black tracking-tighter", style: { color: project.color }, children: project.traffic })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2 md:gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-white/[0.02] border border-white/5 rounded-xl p-3 md:p-4 transition-all group-hover:bg-white/[0.05]", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-widest text-zinc-500 font-bold uppercase mb-1", children: "Alcance" }),
                    /* @__PURE__ */ jsx("span", { className: "text-lg md:text-2xl font-bold text-white", children: project.accounts })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-white/[0.02] border border-white/5 rounded-xl p-3 md:p-4 transition-all group-hover:bg-white/[0.05]", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-widest text-zinc-500 font-bold uppercase mb-1", children: "Convers." }),
                    /* @__PURE__ */ jsx("span", { className: "text-lg md:text-2xl font-bold text-white", children: project.conversations })
                  ] }),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "bg-white/[0.02] border border-white/5 rounded-xl p-3 md:p-4 transition-all group-hover:bg-white/[0.05]",
                      style: { borderColor: `${project.color}44` },
                      children: [
                        /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-widest text-zinc-500 font-bold uppercase mb-1", children: "Interacc." }),
                        /* @__PURE__ */ jsx("span", { className: "text-lg md:text-2xl font-bold", style: { color: project.color }, children: project.interactions })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "hidden sm:block sm:w-2/5 relative overflow-hidden bg-zinc-900 border-l border-white/5", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: project.cardImg,
                    alt: project.name,
                    className: "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" })
              ] })
            ]
          }
        ) }, project.id))
      }
    )
  ] });
}
const MainMktDigital = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-transparent overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(HeroMkt, {}),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(SectionTwo, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(ProjectResults, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(SectionFour, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(SectionFive, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(SectionSix, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal$1, { children: /* @__PURE__ */ jsx(SectionSeven, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const ArrowRight = ({ size = 20, className = "" }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "square", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
  /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
] });
const Calendar = ({ size = 20, className = "" }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square", className, children: [
  /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" }),
  /* @__PURE__ */ jsx("line", { x1: "16", x2: "16", y1: "2", y2: "6" }),
  /* @__PURE__ */ jsx("line", { x1: "8", x2: "8", y1: "2", y2: "6" }),
  /* @__PURE__ */ jsx("line", { x1: "3", x2: "21", y1: "10", y2: "10" })
] });
const Target = ({ size = 20, className = "" }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "6" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "2" })
] });
const TrendingUp = ({ size = 20, className = "" }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
  /* @__PURE__ */ jsx("polyline", { points: "16 7 22 7 22 13" })
] });
const BarChart2 = ({ size = 20, className = "" }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("line", { x1: "18", y1: "20", x2: "18", y2: "10" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "20", x2: "12", y2: "4" }),
  /* @__PURE__ */ jsx("line", { x1: "6", y1: "20", x2: "6", y2: "14" })
] });
const Brain = ({ size = 20, className = "" }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }),
  /* @__PURE__ */ jsx("path", { d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" }),
  /* @__PURE__ */ jsx("path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" }),
  /* @__PURE__ */ jsx("path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375" }),
  /* @__PURE__ */ jsx("path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }),
  /* @__PURE__ */ jsx("path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }),
  /* @__PURE__ */ jsx("path", { d: "M19.938 10.5a4 4 0 0 1 .585.396" }),
  /* @__PURE__ */ jsx("path", { d: "M6 18a4 4 0 0 1-1.967-.516" }),
  /* @__PURE__ */ jsx("path", { d: "M19.967 17.484A4 4 0 0 1 18 18" })
] });
const WepromLogo = ({ className = "" }) => /* @__PURE__ */ jsxs("svg", { id: "Capa_2", "data-name": "Capa 2", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 780.55 712.65", className: `w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 drop-shadow-[0_0_50px_rgba(89,157,223,0.25)] transition-all duration-500 ${className}`, children: [
  /* @__PURE__ */ jsxs("defs", { children: [
    /* @__PURE__ */ jsxs("linearGradient", { id: "Degradado_sin_nombre_194", x1: "689.73", y1: "503.15", x2: "689.73", y2: "506.87", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#f09428" }),
      /* @__PURE__ */ jsx("stop", { offset: ".21", stopColor: "#f29d2b" }),
      /* @__PURE__ */ jsx("stop", { offset: ".64", stopColor: "#f7ac31" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#f9b233" })
    ] }),
    /* @__PURE__ */ jsxs("linearGradient", { id: "Degradado_sin_nombre_194-2", x1: "734.92", y1: "96.62", x2: "734.92", y2: "554.63", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#f09428" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#f9b233" })
    ] }),
    /* @__PURE__ */ jsxs("linearGradient", { id: "Degradado_sin_nombre_6", x1: "3.05", y1: "515.94", x2: "3.11", y2: "515.84", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: ".07", stopColor: "#e6332a" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#009fe3" })
    ] }),
    /* @__PURE__ */ jsxs("linearGradient", { id: "Degradado_sin_nombre_6-2", x1: "81.77", y1: "583.27", x2: "374.34", y2: "76.54", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: ".07", stopColor: "#e6332a" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#009fe3" })
    ] }),
    /* @__PURE__ */ jsxs("linearGradient", { id: "Degradado_sin_nombre_22", x1: "42.84", y1: "505.91", x2: "42.84", y2: "271.32", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: ".01", stopColor: "#a3332a" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#e6332a" })
    ] }),
    /* @__PURE__ */ jsxs("linearGradient", { id: "Degradado_sin_nombre_3", x1: "728.43", y1: "52.76", x2: "460.78", y2: "516.35", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: ".05", stopColor: "#f9b233" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#579966" })
    ] }),
    /* @__PURE__ */ jsxs("linearGradient", { id: "Degradado_sin_nombre_201", x1: "72.81", y1: "406.73", x2: "706.31", y2: "406.73", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: ".08", stopColor: "#e6332a" }),
      /* @__PURE__ */ jsx("stop", { offset: ".58", stopColor: "#009fe3" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#f9b233" })
    ] }),
    /* @__PURE__ */ jsxs("linearGradient", { id: "Degradado_sin_nombre_170", x1: "476.57", y1: "292.44", x2: "476.57", y2: "683.68", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#0072bc" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#60b87b" })
    ] })
  ] }),
  /* @__PURE__ */ jsx("g", { id: "Capa_1-2", "data-name": "Capa 1", children: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx("path", { fill: "url(#Degradado_sin_nombre_194)", d: "M689.65,503.45c-.02,1.21.04,2.41.15,3.6,0-.34,0-.67,0-1.02-.1-1.02-.14-2.04-.14-3.08,0,.16,0,.34,0,.49Z" }),
    /* @__PURE__ */ jsx("path", { fill: "url(#Degradado_sin_nombre_194-2)", d: "M689.63,73.54c-.5,31.91.61,381.87.05,428.04.07,1.52.11,3,.12,4.46,3.9,41.46,85.93,70.25,85.93,70.25-.02.33-.04.66-.07.98.04.02.07.02.07.02,1.05-62.18,4.22-381.27,4.61-419.89-22.48-67.07-71.63-81.03-90.71-83.86Z" }),
    /* @__PURE__ */ jsx("path", { fill: "url(#Degradado_sin_nombre_6)", d: "M3.1,515.98s0-.02,0-.03c-.02-.19-.05-.17,0,.03h0Z" }),
    /* @__PURE__ */ jsx("path", { fill: "url(#Degradado_sin_nombre_6-2)", d: "M431.96,221.95c-.13-54.69-44.85-157.97-137.14-157.99-63.84-.01-107.65,44.61-115.62,78.86-2.17,9.34-5.02,32.33-4.68,42.53.91,27.13.68,261.45-.33,275.79-.44,6.34,9,77.5-43.57,110.47-13.3,8.34-29.17,12.53-44.57,9.54-56.62-10.99-82.24-66.42-82.58-66.96,0,0,2.89,18.21,6.04,25.9,42.24,103.24,120.38,95.8,129.9,95.81,41.25.06,111.55-13.84,117.71-110.67.18-2.83-2.19-305.52-.44-309.75,8.56-63.57,46.31-76.16,61.68-77.55,79.89-12.58,113.6,84.02,113.6,84.02Z" }),
    /* @__PURE__ */ jsx("path", { fill: "url(#Degradado_sin_nombre_22)", d: "M85.03,580.94c-1.33-34.92,0-214.45.64-266.37l-16.69-147.31c-45.39,9.82-59.23,54.27-64.18,71.89-9.06,32.24-2.78,235.33-1.41,274.66.02.48,4.33,8.89,11.93,19.6,12.55,17.11,35.35,40.49,69.7,47.53Z" }),
    /* @__PURE__ */ jsx("path", { fill: "url(#Degradado_sin_nombre_3)", d: "M644.41,0c-93.28,0-119.15,63.97-123.25,91.33-2.17,14.48-1.84,49.14-1.91,53.97-.26,17.39,0,34.8,0,52.19,0,35.8-.58,294.56-.54,311.14.23,121.3,1.06,148.46-.19,153.58,36.49-.13,73.68-22.95,87.88-71.01.16-4.11.24-10.35.21-14.74-.21-38.72-.44-357.05-.4-364.78.27-54.87-6.83-138.05,75.64-138.83-.02-.14,70.61.32,98.71,85.14C778.08,38.21,693.73,0,644.41,0Z" }),
    /* @__PURE__ */ jsx("path", { fill: "url(#Degradado_sin_nombre_201)", d: "M689.65,502.45c0-.34.01-.71.02-1.1,2.31,49.53-24.6,68.58-63.68,44.95-7.02-4.24-453.47-351.17-462.71-357.04-50.68-32.22-94.3-22-94.3-22,2.75,20.65,16.33,144.9,16.69,147.31-.64-81.57,64.92-75.98,95.29-51.61-8.3-6.66,431.17,335.9,460.54,353.92,12.4,7.6,24.78,15.6,37.68,22.34,12.61,6.6,27.45,9.42,42.05,8.26,17.39-1.38,31.93-12.96,40.25-27.49,7.3-12.75,11.86-25.71,13.93-40.34.12-.86.23-2.11.31-3.37,0,0-86.8-30.46-86.08-73.83Z" }),
    /* @__PURE__ */ jsx("path", { fill: "url(#Degradado_sin_nombre_170)", d: "M431.83,578.79c-2.69-24.65,1.42-351.8.27-355.44-9.74-30.89-38.95-75.63-85.43-85.33,0,0,.71,393.75.54,405.37-1.54,102.5,60.48,163.96,132.95,168.81,133.65,8.95,126.23-121.02,126.23-121.02-30.09,101.91-163.57,88.4-174.56-12.4Z" })
  ] }) })
] });
const OrbitSatellite = ({
  rotationX,
  rotationY,
  diameter,
  duration,
  delay = "0s",
  color,
  tooltipText,
  icon
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "absolute top-1/2 left-1/2 preserve-3d pointer-events-none",
      style: { transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)` },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute border rounded-full -translate-x-1/2 -translate-y-1/2",
            style: {
              width: `${diameter}px`,
              height: `${diameter}px`,
              borderColor: `${color}20`
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute preserve-3d animate-spin-z",
            style: { animationDuration: duration, animationDelay: delay },
            children: /* @__PURE__ */ jsx("div", { className: "absolute preserve-3d", style: { transform: `translateY(-${diameter / 2}px)` }, children: /* @__PURE__ */ jsx("div", { className: "absolute preserve-3d animate-reverse-spin-z", style: { animationDuration: duration, animationDelay: delay }, children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2",
                style: { transform: `rotateY(${-rotationY}deg) rotateX(${-rotationX}deg)` },
                children: /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: {
                      borderColor: color,
                      boxShadow: `0 0 20px ${color}40`
                    },
                    className: "group relative bg-[#0a0a0a]/95 backdrop-blur-md border w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center pointer-events-auto cursor-pointer hover:scale-110 transition-transform",
                    children: [
                      icon,
                      /* @__PURE__ */ jsx("div", { className: "absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none", children: /* @__PURE__ */ jsx(
                        "div",
                        {
                          style: { borderColor: `${color}60`, boxShadow: `0 0 20px ${color}40` },
                          className: "bg-[#0a0a0a]/95 backdrop-blur-md border px-4 py-2 rounded-lg whitespace-nowrap",
                          children: /* @__PURE__ */ jsx("span", { style: { color }, className: "font-montserrat font-bold text-xs sm:text-sm tracking-widest uppercase", children: tooltipText })
                        }
                      ) })
                    ]
                  }
                )
              }
            ) }) })
          }
        )
      ]
    }
  );
};
function HeroMR() {
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full min-h-screen bg-transparent flex flex-col items-center justify-between overflow-hidden font-montserrat select-none pt-24 pb-12 md:pb-16", children: [
    /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
            .font-aston { font-family: 'ASTONPOLIZ', 'Anton', sans-serif; }
            .perspective-1000 { perspective: 1000px; }
            .preserve-3d { transform-style: preserve-3d; }
            
            @keyframes globe-spin {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes orbit-spin-z {
              from { transform: rotateZ(0deg); }
              to { transform: rotateZ(360deg); }
            }
            @keyframes orbit-spin-z-reverse {
              from { transform: rotateZ(360deg); }
              to { transform: rotateZ(0deg); }
            }

            .animate-globe-spin { animation: globe-spin 40s linear infinite; }
            .animate-spin-z { animation: orbit-spin-z linear infinite; }
            .animate-reverse-spin-z { animation: orbit-spin-z-reverse linear infinite; }

            .globe-mask {
              -webkit-mask-image: url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg');
              -webkit-mask-size: 100% 100%;
              -webkit-mask-repeat: no-repeat;
              mask-image: url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg');
              mask-size: 100% 100%;
              mask-repeat: no-repeat;
            }
        ` } }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 pointer-events-none z-10",
        style: {
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, rgba(0,0,0,0.7) 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 flex-grow", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/2 flex flex-col items-start text-left", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "w-12 h-1 bg-[#c5362e] mb-6"
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
            className: "font-aston text-4xl sm:text-5xl lg:text-[4.2rem] tracking-wide uppercase leading-[1.05] text-white mb-6",
            children: [
              "Agencia de ",
              /* @__PURE__ */ jsx("br", {}),
              "Investigación ",
              /* @__PURE__ */ jsx("br", {}),
              "de Mercados"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.p,
          {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
            className: "text-base sm:text-lg text-[#CACFD8] leading-relaxed mb-10 max-w-xl font-light",
            children: [
              "Desarrollamos proyectos de investigación que logran ",
              /* @__PURE__ */ jsx("strong", { className: "text-white font-medium", children: "objetivos de negocio" }),
              " y proporcionan información de valor para una ",
              /* @__PURE__ */ jsx("strong", { className: "text-[#80b67d] font-medium", children: "correcta planeación y toma de decisiones" }),
              "."
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.3 },
            className: "flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto",
            children: [
              /* @__PURE__ */ jsxs("button", { className: "group relative w-full sm:w-auto px-8 py-4 bg-[#c5362e] text-white rounded-xl font-bold text-[13px] uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-[1.02]", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" }),
                /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center justify-center gap-3 group-hover:text-[#c5362e] transition-colors duration-300", children: [
                  "Solicitar Cotización",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "transition-transform group-hover:translate-x-1" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "group relative w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/80 text-white rounded-xl font-bold text-[13px] uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:border-white", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" }),
                /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors duration-300", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "transition-colors duration-300" }),
                  "Agendar Videollamada"
                ] })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
          className: "w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-[520px] relative perspective-1000 flex items-center justify-center",
          children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-[550px] h-full preserve-3d flex items-center justify-center scale-90 sm:scale-100", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 blur-[6px] animate-pulse", style: { transform: "translateZ(-140px) scale(1.4)" }, children: /* @__PURE__ */ jsx(WepromLogo, {}) }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#030914] shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.9),inset_10px_10px_30px_rgba(89,157,223,0.35),0_0_40px_rgba(89,157,223,0.15)] overflow-hidden flex items-center justify-center preserve-3d", children: [
              /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 h-full w-[400%] animate-globe-spin flex opacity-60 mix-blend-screen", children: [
                /* @__PURE__ */ jsx("div", { className: "w-[50%] h-full bg-[#599ddf] globe-mask" }),
                /* @__PURE__ */ jsx("div", { className: "w-[50%] h-full bg-[#599ddf] globe-mask" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full shadow-[inset_0_0_25px_#599ddf] pointer-events-none" }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_40%)] pointer-events-none" })
            ] }),
            /* @__PURE__ */ jsx(
              OrbitSatellite,
              {
                rotationX: 70,
                rotationY: -15,
                diameter: 260,
                duration: "16s",
                color: "#599ddf",
                tooltipText: "Insights de Consumo",
                icon: /* @__PURE__ */ jsx(Target, { className: "text-[#599ddf]", size: 18 })
              }
            ),
            /* @__PURE__ */ jsx(
              OrbitSatellite,
              {
                rotationX: 65,
                rotationY: 25,
                diameter: 350,
                duration: "24s",
                delay: "-6s",
                color: "#e6af41",
                tooltipText: "Tendencias de Mercado",
                icon: /* @__PURE__ */ jsx(TrendingUp, { className: "text-[#e6af41]", size: 18 })
              }
            ),
            /* @__PURE__ */ jsx(
              OrbitSatellite,
              {
                rotationX: 75,
                rotationY: 5,
                diameter: 440,
                duration: "32s",
                color: "#80b67d",
                tooltipText: "Análisis Competitivo",
                icon: /* @__PURE__ */ jsx(BarChart2, { className: "text-[#80b67d]", size: 18 })
              }
            ),
            /* @__PURE__ */ jsx(
              OrbitSatellite,
              {
                rotationX: 75,
                rotationY: 5,
                diameter: 440,
                duration: "32s",
                delay: "-16s",
                color: "#c5362e",
                tooltipText: "Análisis Predictivo",
                icon: /* @__PURE__ */ jsx(Brain, { className: "text-[#c5362e]", size: 18 })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-[20%] left-[25%] w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white] animate-pulse", style: { transform: "translateZ(100px)" } }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-[25%] right-[20%] w-1.5 h-1.5 bg-[#80b67d] rounded-full shadow-[0_0_10px_#80b67d] animate-pulse", style: { transform: "translateZ(80px)" } })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-20 w-full mt-16 lg:mt-8 px-6 sm:px-8 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
        className: "grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 border-t border-white/10 pt-10",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center md:items-start text-center md:text-left px-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-aston text-3xl sm:text-4xl lg:text-5xl tracking-wide text-[#c5362e] drop-shadow-[0_4px_12px_rgba(197,54,46,0.15)]", children: "+1,000" }),
            /* @__PURE__ */ jsx("span", { className: "mt-2 text-[10px] sm:text-xs text-[#CACFD8]/80 font-bold tracking-[0.15em] uppercase leading-snug", children: "Proyectos Terminados" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center md:items-start text-center md:text-left px-2 border-l-0 sm:border-l md:border-l border-white/5 md:pl-6", children: [
            /* @__PURE__ */ jsx("span", { className: "font-aston text-3xl sm:text-4xl lg:text-5xl tracking-wide text-[#599ddf] drop-shadow-[0_4px_12px_rgba(89,157,223,0.15)]", children: "100%" }),
            /* @__PURE__ */ jsx("span", { className: "mt-2 text-[10px] sm:text-xs text-[#CACFD8]/80 font-bold tracking-[0.15em] uppercase leading-snug", children: "Clientes Satisfechos" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center md:items-start text-center md:text-left px-2 border-l-0 md:border-l border-white/5 md:pl-6", children: [
            /* @__PURE__ */ jsx("span", { className: "font-aston text-3xl sm:text-4xl lg:text-5xl tracking-wide text-[#80b67d] drop-shadow-[0_4px_12px_rgba(128,182,125,0.15)]", children: "+35 Años" }),
            /* @__PURE__ */ jsx("span", { className: "mt-2 text-[10px] sm:text-xs text-[#CACFD8]/80 font-bold tracking-[0.15em] uppercase leading-snug", children: "De Experiencia" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center md:items-start text-center md:text-left px-2 border-l-0 sm:border-l md:border-l border-white/5 md:pl-6", children: [
            /* @__PURE__ */ jsx("span", { className: "font-aston text-3xl sm:text-4xl lg:text-5xl tracking-wide text-[#e6af41] drop-shadow-[0_4px_12px_rgba(230,175,65,0.15)]", children: "+50" }),
            /* @__PURE__ */ jsx("span", { className: "mt-2 text-[10px] sm:text-xs text-[#CACFD8]/80 font-bold tracking-[0.15em] uppercase leading-snug", children: "Industrias Analizadas" })
          ] })
        ]
      }
    ) })
  ] });
}
const brands = [
  { name: "Cinepolis", src: Cinepolis, alt: "Cinepolis Logo" },
  { name: "Grupo Caliente", src: GrupoCaliente, alt: "Grupo Caliente Logo" },
  { name: "Heineken", src: Heineken, alt: "Heineken Logo", sizeClass: "h-16 sm:h-20 md:h-24" },
  { name: "Ford", src: Ford, alt: "Ford Logo", sizeClass: "h-8 sm:h-10 md:h-14" },
  { name: "KIA", src: KIA, alt: "KIA Logo", sizeClass: "h-20 sm:h-24 md:h-28" },
  { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Mercedes-Benz", src: MercedesBenz, alt: "Mercedes-Benz Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Nissan", src: Nissan, alt: "Nissan Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Pepsico", src: Pepsico, alt: "Pepsico Logo" },
  { name: "Televisa", src: Televisa, alt: "Televisa Logo", sizeClass: "h-16 sm:h-18 md:h-20" },
  { name: "Volkswagen", src: Volkswagen, alt: "Volkswagen Logo", sizeClass: "h-16 sm:h-18 md:h-20" }
];
const allBrands = [...brands, ...brands];
function TwoSectionBrands() {
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full py-12 flex flex-col items-center justify-center overflow-hidden bg-transparent group font-montserrat select-none", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-6", children: /* @__PURE__ */ jsx("h1", { className: "font-aston text-5xl sm:text-4xl font-medium text-white mt-2", children: "Algunos de nuestros clientes" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-[1519px] mx-auto px-4 sm:px-8 z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black via-black/50 to-transparent opacity-80" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black via-black/50 to-transparent opacity-80" }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsx("button", { className: "prev-brands absolute left-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block", children: /* @__PURE__ */ jsx(ChevronLeft$1, { size: 40, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx("button", { className: "next-brands absolute right-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block", children: /* @__PURE__ */ jsx(ChevronRight$1, { size: 40, strokeWidth: 1 }) }),
        /* @__PURE__ */ jsx(
          Swiper,
          {
            modules: [Autoplay, Navigation],
            spaceBetween: 30,
            slidesPerView: 2,
            loop: true,
            speed: 4e3,
            autoplay: { delay: 0, disableOnInteraction: false },
            navigation: { prevEl: ".prev-brands", nextEl: ".next-brands" },
            breakpoints: {
              480: { slidesPerView: 3, spaceBetween: 40 },
              640: { slidesPerView: 3, spaceBetween: 50 },
              1024: { slidesPerView: 5, spaceBetween: 50 }
            },
            className: "flex items-center",
            children: allBrands.map((brand, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-20 sm:h-24 w-full px-4 py-4 rounded-2xl bg-white border border-white/10 shadow-lg transition-transform duration-500 hover:scale-105", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: brand.src,
                alt: brand.alt,
                className: `w-auto object-contain transition-all ${brand.sizeClass ? brand.sizeClass : "h-7 sm:h-9 md:h-11"}`
              }
            ) }) }, index))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 z-20", children: /* @__PURE__ */ jsx("button", { className: "group relative px-8 py-3.5 bg-[#22252a] hover:bg-[#2d3138] text-white/90 hover:text-white border border-white/10 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]", children: "Casos de éxito" }) })
  ] });
}
const features = [
  {
    icon: Users,
    title: "Toma de decisiones",
    description: "Con la información y los datos tangibles que proporciona la Investigación de Mercados, podrá desarrollar, mejorar o adaptar con éxito su empresa o proyecto de negocio, para satisfacer las necesidades reales de sus clientes.",
    color: "#E05A4E"
  },
  {
    icon: BarChart2$1,
    title: "Competitividad",
    description: "Al analizar a la competencia y comprender sus estrategias, atributos, valores añadidos e incluso sus debilidades, la investigación de mercados permitirá a su empresa, producto o servicio diferenciarse y ganar mayor participación en el mercado.",
    color: "#3B82F6"
  },
  {
    icon: ClipboardList,
    title: "Validación del proyecto",
    description: "Con bases sólidas basadas en la percepción del mercado y la información del sector, tendrá la certeza del éxito o la viabilidad del proyecto incluso antes de ejecutarlo, o de ser necesario, la investigación de mercado le brindará las herramientas para modificar los objetivos comerciales.",
    color: "#EAB308"
  }
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};
function WhyMR() {
  return /* @__PURE__ */ jsxs("section", { className: "w-full pt-20 pb-10 sm:pt-28 sm:pb-8 px-4 sm:px-6 lg:px-8 bg-transparent font-montserrat text-white", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-14 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "w-full lg:w-[42%]",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.3 },
          variants: containerVariants,
          children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                variants: fadeUp,
                className: "font-aston text-5xl sm:text-6xl md:text-6xl leading-[1.05] tracking-tight mb-8",
                children: "¿Por qué hacer Investigación de Mercados?"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                variants: fadeUp,
                className: "text-white text-base sm:text-xl leading-relaxed font-bold",
                children: "Decide con datos. No con suposiciones."
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.p,
              {
                variants: fadeUp,
                className: "text-white text-base sm:text-base leading-relaxed pt-10",
                children: [
                  "Cada decisión de negocio que se toma sin información tiene un costo. La investigación de mercados convierte la incertidumbre en ",
                  /* @__PURE__ */ jsx("b", { children: "claridad para que actúes con fundamentos y no con corazonadas." })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "w-full lg:w-[58%] flex flex-col gap-6",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.2 },
          variants: containerVariants,
          children: features.map((feature, index) => {
            const IconComp = feature.icon;
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: fadeUp,
                className: "relative pl-10",
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "relative rounded-2xl p-[1.5px] transition-all duration-500",
                      style: {
                        background: `linear-gradient(135deg, ${feature.color} 0%, transparent 40%, transparent 60%, ${feature.color}40 100%)`
                      },
                      children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-neutral-950 px-8 py-6 sm:py-7", children: [
                        /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl sm:text-2xl mb-3 text-white", children: feature.title }),
                        /* @__PURE__ */ jsx("p", { className: "text-white/70 text-sm leading-relaxed", children: feature.description })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center z-10",
                      style: {
                        background: "#0a0a0a",
                        border: `1.5px solid ${feature.color}`
                      },
                      children: /* @__PURE__ */ jsx(IconComp, { size: 22, color: feature.color, strokeWidth: 1.5 })
                    }
                  )
                ]
              },
              index
            );
          })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center mt-12 sm:mt-16", children: /* @__PURE__ */ jsxs("button", { className: "group relative w-full sm:w-auto px-8 py-4 bg-[#88221d] text-white rounded-full font-bold text-[13px] uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-[1.02] flex justify-center", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" }),
      /* @__PURE__ */ jsx("span", { className: "relative z-10 flex items-center justify-center gap-3 group-hover:text-[#c5362e] transition-colors duration-300", children: "Solicitar Cotización" })
    ] }) })
  ] });
}
const locations = [
  { id: 1, city: "Austin", country: "USA", top: "38%", left: "32%", color: "bg-blue-500" },
  { id: 2, city: "Guadalajara", country: "MX", top: "46%", left: "27%", color: "bg-emerald-500" },
  { id: 3, city: "Paris", country: "FR", top: "34%", left: "49%", color: "bg-indigo-500" }
];
const ContactoMR = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "¿En qué podemos ayudarte?",
    mensaje: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [hoveredLoc, setHoveredLoc] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1800);
  };
  const asuntos = [
    "¿En qué podemos ayudarte?",
    "Market Research Global",
    "Análisis de Competencia",
    "Estudio de Consumidor",
    "Validación de Producto SaaS",
    "Estrategia de Crecimiento",
    "Otro"
  ];
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "w-full bg-transparent py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none antialiased",
      style: { fontFamily: "'Montserrat', sans-serif" },
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col space-y-12 relative z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center w-full mb-4", children: /* @__PURE__ */ jsx(
          "h2",
          {
            className: "text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-wide",
            style: { fontFamily: "'Astonpoliz', sans-serif" },
            children: "Aterricemos tu Proyecto. Contáctanos."
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 flex flex-col gap-6 w-full h-full justify-between", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.98 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                viewport: { once: true },
                className: "relative h-[320px] sm:h-[380px] bg-[#0c0c0e]/60 rounded-3xl border border-zinc-800/80 overflow-hidden shadow-2xl group flex items-center justify-center",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 p-6 flex items-center justify-center", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg",
                      alt: "World Map",
                      className: "w-full h-full object-contain opacity-[0.07] grayscale invert brightness-150 transition-opacity duration-500 group-hover:opacity-[0.1]"
                    }
                  ) }),
                  locations.map((loc) => /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute transform -translate-x-1/2 -translate-y-1/2 z-10",
                      style: { top: loc.top, left: loc.left },
                      onMouseEnter: () => setHoveredLoc(loc.id),
                      onMouseLeave: () => setHoveredLoc(null),
                      children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center cursor-pointer", children: [
                        /* @__PURE__ */ jsx("span", { className: `animate-ping absolute inline-flex h-6 w-6 rounded-full ${loc.color} opacity-20` }),
                        /* @__PURE__ */ jsx("span", { className: `relative inline-flex rounded-full h-2.5 w-2.5 ${loc.color} shadow-[0_0_15px_rgba(255,255,255,0.4)] border border-white/10` }),
                        /* @__PURE__ */ jsx(AnimatePresence, { children: hoveredLoc === loc.id && /* @__PURE__ */ jsxs(
                          motion.div,
                          {
                            initial: { opacity: 0, y: 5, scale: 0.95 },
                            animate: { opacity: 1, y: -35, scale: 1 },
                            exit: { opacity: 0, y: 5, scale: 0.95 },
                            className: "absolute whitespace-nowrap bg-zinc-900 border border-zinc-800 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider shadow-xl z-20",
                            children: [
                              loc.city.toUpperCase(),
                              ", ",
                              loc.country,
                              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-zinc-900 border-r border-b border-zinc-800 rotate-45" })
                            ]
                          }
                        ) })
                      ] })
                    },
                    loc.id
                  )),
                  /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-6 select-none pointer-events-none", children: /* @__PURE__ */ jsx("h3", { className: "text-white/[0.03] text-4xl font-bold tracking-widest font-serif", children: "WEPROM" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                whileHover: { y: -4 },
                transition: { duration: 0.3 },
                className: "bg-gradient-to-br from-[#0c0c0e] to-black p-8 sm:p-10 rounded-3xl border border-zinc-800/80 flex flex-col justify-center relative overflow-hidden min-h-[180px] shadow-xl",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none", children: /* @__PURE__ */ jsx("svg", { width: "60", height: "60", viewBox: "0 0 24 24", fill: "white", children: /* @__PURE__ */ jsx("path", { d: "M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45z" }) }) }),
                  /* @__PURE__ */ jsx("h4", { className: "text-blue-400 text-[10px] tracking-[0.4em] uppercase mb-4 font-bold", children: "Visión 360°" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-zinc-400 text-base sm:text-lg leading-relaxed font-light italic", children: [
                    '"Nuestra presencia en ',
                    /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "tres mercados clave" }),
                    ' nos permite ejecutar estrategias con relevancia cultural inmediata."'
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 bg-[#070708] border border-zinc-900/90 rounded-3xl p-6 sm:p-10 shadow-2xl w-full", children: sent ? /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              className: "flex flex-col items-center justify-center py-16 text-center space-y-6",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center border border-[#80b67d]/40 bg-[#80b67d]/10 text-[#80b67d]", children: /* @__PURE__ */ jsx(Send, { size: 24 }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white tracking-wide", children: "¡Mensaje recibido con éxito!" }),
                /* @__PURE__ */ jsx("p", { className: "text-zinc-500 text-sm max-w-sm font-light leading-relaxed", children: "Nuestro equipo de analistas de mercado evaluará tus requerimientos para ponernos en contacto contigo a la brevedad." }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setSent(false);
                      setFormData({ nombre: "", email: "", telefono: "", asunto: "¿En qué podemos ayudarte?", mensaje: "" });
                    },
                    className: "text-xs text-zinc-500 hover:text-white transition-colors duration-300 underline underline-offset-4 font-medium",
                    children: "Enviar otro requerimiento"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2", children: [
              /* @__PURE__ */ jsxs("label", { className: "text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]", children: [
                "Nombre completo ",
                /* @__PURE__ */ jsx("span", { className: "text-red-500/80", children: "*" })
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "nombre",
                  required: true,
                  autoComplete: "off",
                  placeholder: "Escribe tu nombre",
                  value: formData.nombre,
                  onChange: handleChange,
                  className: "w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113]"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2", children: [
                /* @__PURE__ */ jsxs("label", { className: "text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]", children: [
                  "Email corporativo ",
                  /* @__PURE__ */ jsx("span", { className: "text-red-500/80", children: "*" })
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    name: "email",
                    required: true,
                    autoComplete: "off",
                    placeholder: "nombre@empresa.com",
                    value: formData.email,
                    onChange: handleChange,
                    className: "w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113]"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]", children: "Teléfono de contacto" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "tel",
                    name: "telefono",
                    autoComplete: "off",
                    placeholder: "+00 000 000 0000",
                    value: formData.telefono,
                    onChange: handleChange,
                    className: "w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113]"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2", children: [
              /* @__PURE__ */ jsxs("label", { className: "text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]", children: [
                "Línea de Investigación / Asunto ",
                /* @__PURE__ */ jsx("span", { className: "text-red-500/80", children: "*" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
                /* @__PURE__ */ jsx(
                  "select",
                  {
                    name: "asunto",
                    required: true,
                    value: formData.asunto,
                    onChange: handleChange,
                    className: "w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113] appearance-none cursor-pointer font-light",
                    children: asuntos.map((a, i) => /* @__PURE__ */ jsx("option", { value: a, className: "bg-zinc-950 text-white", children: a }, i))
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40", children: /* @__PURE__ */ jsx("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" }) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2", children: [
              /* @__PURE__ */ jsxs("label", { className: "text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]", children: [
                "Detalles del requerimiento ",
                /* @__PURE__ */ jsx("span", { className: "text-red-500/80", children: "*" })
              ] }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "mensaje",
                  required: true,
                  placeholder: "Cuéntanos un poco más sobre los objetivos de tu mercado, alcance geográfico o público objetivo...",
                  value: formData.mensaje,
                  onChange: handleChange,
                  rows: 4,
                  className: "w-full bg-[#111113]/60 border border-zinc-800/60 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-700 outline-none transition-all duration-300 focus:border-zinc-700 focus:bg-[#111113] resize-none leading-relaxed"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: sending,
                className: "w-full bg-zinc-900 border border-zinc-800 text-white text-xs font-semibold uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 hover:bg-white hover:text-black hover:border-white flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:hover:bg-zinc-900 disabled:hover:text-white",
                children: sending ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("svg", { className: "animate-spin h-3 w-3 text-current", fill: "none", viewBox: "0 0 24 24", children: [
                    /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                    /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: "Procesando..." })
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("span", { children: "Enviar mensaje" }),
                  /* @__PURE__ */ jsx(Send, { size: 12, className: "opacity-80" })
                ] })
              }
            )
          ] }) })
        ] })
      ] })
    }
  );
};
function TestimonialsSection() {
  const fallbackTestimonials = [
    {
      id: 1,
      name: "Laura Pérez",
      role: "Consultoría de Marca",
      company: "WeProm",
      text: '"Asesoramiento excepcional desde el primer contacto. Entendieron perfectamente nuestra visión y la materializaron en productos increíbles"',
      rating: 5,
      location: "Jalisco, México",
      verified: true,
      timeDescription: "Hace 1 semana"
    },
    {
      id: 2,
      name: "Maria González",
      role: "CEO",
      company: "Alpha Growth",
      text: "Excelente servicio! Los productos personalizados son de la más alta calidad y la atención es inmediata.",
      rating: 5,
      location: "CDMX, México",
      verified: true,
      timeDescription: "Hace 3 días"
    },
    {
      id: 3,
      name: "Carlos Rodríguez",
      role: "Director de Operaciones",
      company: "Logix Tech",
      text: "Trabajamos con WeProm para nuestra campaña de lanzamiento corporativo y superaron por completo las expectativas de conversión.",
      rating: 5,
      location: "Monterrey, México",
      verified: true,
      timeDescription: "Hace 2 semanas"
    },
    {
      id: 4,
      name: "Ana Martínez",
      role: "Growth Marketer",
      company: "Studio Design",
      text: "Los mejores en personalización de productos. Rápidos, proactivos y con un control de calidad implacable.",
      rating: 5,
      location: "Guadalajara, México",
      verified: true,
      timeDescription: "Hace 1 mes"
    }
  ];
  const [reviews2, setReviews] = useState(fallbackTestimonials);
  const [activeMainIndex, setActiveMainIndex] = useState(0);
  const [stats, setStats] = useState({
    rating: 4.9,
    totalReviews: 247,
    fiveStars: 238,
    responseRate: 100
  });
  useEffect(() => {
    const scriptId = "google-maps-script";
    const fetchGoogleReviews = () => {
      if (typeof window.google === "undefined") return;
      const placeId = "ChIJ-17NUpquKIQRMGCoJQIJWgs";
      const dummyDiv = document.createElement("div");
      const service = new window.google.maps.places.PlacesService(dummyDiv);
      service.getDetails(
        { placeId, fields: ["reviews", "rating", "user_ratings_total"] },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && (place == null ? void 0 : place.reviews)) {
            const total = place.user_ratings_total || 247;
            const rating = place.rating || 4.9;
            setStats({
              rating,
              totalReviews: total,
              fiveStars: Math.round(total * 0.96),
              // Estimación proporcional premium
              responseRate: 100
            });
            const mappedReviews = place.reviews.filter((r) => r.rating >= 4).map((r, idx) => ({
              id: `google-${idx}`,
              name: r.author_name,
              role: "Cliente verificado",
              company: "Google Review",
              image: r.profile_photo_url,
              text: r.text.startsWith('"') ? r.text : `"${r.text}"`,
              rating: r.rating,
              location: "Opinión de Google",
              verified: true,
              timeDescription: r.relative_time_description
            }));
            if (mappedReviews.length > 0) {
              setReviews(mappedReviews);
            }
          }
        }
      );
    };
    const existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBcXEBZHoAuDRFdHgp-2dm-OQ93qY3gYxw&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        const checkGoogle = setInterval(() => {
          if (typeof window.google !== "undefined" && window.google.maps && window.google.maps.places) {
            fetchGoogleReviews();
            clearInterval(checkGoogle);
          }
        }, 100);
      };
      document.head.appendChild(script);
    } else {
      const checkGoogle = setInterval(() => {
        if (typeof window.google !== "undefined" && window.google.maps && window.google.maps.places) {
          fetchGoogleReviews();
          clearInterval(checkGoogle);
        }
      }, 100);
    }
  }, []);
  const mainReview = reviews2[activeMainIndex] || reviews2[0];
  const sidebarReviews = reviews2;
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "w-full bg-transparent py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none antialiased",
      style: { fontFamily: "'Montserrat', sans-serif" },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col space-y-16 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-wide",
                style: { fontFamily: "'Astonpoliz', sans-serif" },
                children: "No sólo lo decimos nosotros..."
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed", children: [
              "Somos una empresa atenta y profesional, y nuestros clientes comparten esa opinión. ",
              /* @__PURE__ */ jsx("br", { className: "hidden sm:inline" }),
              /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "¡Descubre lo que dicen de nosotros!" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-[#121214]/40 border border-zinc-800/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-md", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-3xl sm:text-4xl font-bold text-[#e6af41]", children: stats.rating.toFixed(1) }),
                /* @__PURE__ */ jsx("div", { className: "flex text-[#e6af41] text-xs sm:text-sm", children: "★".repeat(5) })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-zinc-500 text-xs sm:text-sm font-medium tracking-wide", children: "Calificación promedio" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-[#121214]/40 border border-zinc-800/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-md", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-3xl sm:text-4xl font-bold text-[#599ddf]", children: [
                stats.totalReviews,
                "+"
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-zinc-500 text-xs sm:text-sm font-medium tracking-wide", children: "Reseñas verificadas" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-[#121214]/40 border border-zinc-800/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-md", children: [
              /* @__PURE__ */ jsx("span", { className: "text-3xl sm:text-4xl font-bold text-[#80b67d]", children: stats.fiveStars }),
              /* @__PURE__ */ jsx("span", { className: "text-zinc-500 text-xs sm:text-sm font-medium tracking-wide", children: "Reseñas 5 estrellas" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-[#121214]/40 border border-zinc-800/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-md", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#80b67d] animate-pulse" }),
                /* @__PURE__ */ jsxs("span", { className: "text-3xl sm:text-4xl font-bold text-white", children: [
                  stats.responseRate,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-zinc-500 text-xs sm:text-sm font-medium tracking-wide", children: "Respuesta a reseñas" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch", children: [
            /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 bg-[#0c0c0e] border border-zinc-800/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group min-h-[380px] transition-all duration-500 hover:border-zinc-700/60 shadow-2xl", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-8 text-[#e6af41] opacity-10 pointer-events-none select-none font-serif text-8xl leading-none", children: "“" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-900 pb-6 w-full", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  mainReview.image ? /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: mainReview.image,
                      alt: mainReview.name,
                      className: "w-14 h-14 rounded-full object-cover border border-zinc-800 bg-zinc-900"
                    }
                  ) : /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold text-lg", children: mainReview.name.charAt(0) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-lg tracking-wide", children: mainReview.name }),
                    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 mt-0.5", children: /* @__PURE__ */ jsx("div", { className: "flex text-[#e6af41] text-xs", children: "★".repeat(mainReview.rating) }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:items-end gap-1", children: [
                  mainReview.verified && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#80b67d]/10 border border-[#80b67d]/20", children: [
                    /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 text-[#80b67d]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 3, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }),
                    /* @__PURE__ */ jsx("span", { className: "text-[#80b67d] font-semibold text-[11px] uppercase tracking-wider", children: "Verificado" })
                  ] }),
                  mainReview.timeDescription && /* @__PURE__ */ jsx("span", { className: "text-zinc-600 text-xs font-medium pr-1", children: mainReview.timeDescription })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "my-8 flex-grow flex items-center", children: /* @__PURE__ */ jsx("p", { className: "text-zinc-200 text-lg sm:text-xl font-light leading-relaxed italic tracking-wide", children: mainReview.text }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-zinc-900 pt-6 text-sm text-zinc-500 font-medium", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs("svg", { className: "w-4 h-4 text-zinc-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
                    /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
                    /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: mainReview.location || "Ubicación remota" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-zinc-600", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    mainReview.role,
                    " en "
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-zinc-400 font-semibold", children: mainReview.company })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-[#0c0c0e] border border-zinc-800/80 rounded-3xl p-6 flex flex-col min-h-[380px] max-h-[480px]", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pb-4 mb-4 border-b border-zinc-900", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-[#e6af41]", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }),
                /* @__PURE__ */ jsx("h4", { className: "text-white font-bold text-sm tracking-widest uppercase", children: "Más reseñas destacadas" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex-grow overflow-y-auto space-y-3 pr-1 custom-scrollbar", children: sidebarReviews.map((testimonial, index) => {
                const isSelected = index === activeMainIndex;
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    onClick: () => setActiveMainIndex(index),
                    className: `w-full p-4 rounded-xl transition-all duration-300 cursor-pointer flex gap-4 items-start text-left border ${isSelected ? "bg-zinc-900/60 border-zinc-700/50 shadow-inner" : "bg-[#121214]/20 border-transparent hover:bg-zinc-900/30 hover:border-zinc-800/60"}`,
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 object-cover overflow-hidden", children: testimonial.image ? /* @__PURE__ */ jsx("img", { src: testimonial.image, alt: testimonial.name }) : testimonial.name.charAt(0) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-grow space-y-1 overflow-hidden", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline gap-2 w-full", children: [
                          /* @__PURE__ */ jsx("h5", { className: "text-white font-semibold text-sm truncate", children: testimonial.name }),
                          /* @__PURE__ */ jsx("div", { className: "flex text-[#e6af41] text-[10px] flex-shrink-0", children: "★".repeat(testimonial.rating) })
                        ] }),
                        /* @__PURE__ */ jsxs("p", { className: "text-zinc-500 text-xs truncate", children: [
                          testimonial.role,
                          " ",
                          /* @__PURE__ */ jsx("span", { className: "text-zinc-600", children: "@" }),
                          " ",
                          testimonial.company
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-zinc-400 text-xs line-clamp-2 pt-0.5 leading-relaxed font-light", children: testimonial.text })
                      ] })
                    ]
                  },
                  testimonial.id
                );
              }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("style", { children: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
          border-radius: 99px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3f3f46;
        }
      ` })
      ]
    }
  );
}
function ElPoderDeLaInformacion() {
  const [hoveredId, setHoveredId] = useState(null);
  const brand = {
    red: "#c5362e",
    blue: "#599ddf",
    green: "#80b67d",
    yellow: "#e6af41"
  };
  const questions = [
    {
      id: 1,
      text: "¿Puede mi proyecto de negocio",
      boldPart: "SER EXITOSO?",
      color: brand.red
    },
    {
      id: 2,
      text: "¿Qué hacen mis competidores para",
      boldPart: "GANAR CLIENTES?",
      color: brand.blue
    },
    {
      id: 3,
      text: "¿Hacia dónde debería",
      boldPart: "EXPANDIR MI NEGOCIO?",
      color: brand.green
    },
    {
      id: 4,
      text: "¿Qué puedo hacer para",
      boldPart: "INCREMENTAR MIS VENTAS?",
      color: brand.yellow
    },
    {
      id: 5,
      text: "¿Qué debe tener mi proyecto para",
      boldPart: "GENERAR RESULTADOS?",
      color: brand.red
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "w-full py-20 sm:py-28 bg-transparent font-montserrat text-white select-none overflow-hidden", children: [
    /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
        .font-aston { font-family: 'ASTONPOLIZ', 'Anton', sans-serif; }
      ` } }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 sm:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center mb-16 sm:mb-20",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "font-aston text-3xl sm:text-4xl md:text-5xl tracking-wide mb-5 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent", children: "El Poder de la Información" }),
            /* @__PURE__ */ jsx("div", { className: "w-16 h-[2px] bg-white/20 mx-auto mb-5" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/90 text-base sm:text-xl max-w-xl mx-auto font-medium leading-relaxed", children: "A través de la Investigación de Mercados podrás responder estas preguntas:" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#070708]/40 backdrop-blur-md shadow-2xl", children: questions.map((q, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          onMouseEnter: () => setHoveredId(q.id),
          onMouseLeave: () => setHoveredId(null),
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] },
          className: "relative group cursor-pointer overflow-hidden border-b border-white/[0.06] last:border-b-0 transition-all duration-500 ease-[0.25,1,0.5,1]",
          style: {
            height: hoveredId === q.id ? "130px" : "90px"
          },
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#08080a] transition-colors duration-500 group-hover:bg-[#0c0c10]" }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 transition-all duration-700 ease-out pointer-events-none",
                style: {
                  background: `linear-gradient(90deg, ${q.color}18 0%, ${q.color}03 70%, transparent 100%)`,
                  opacity: hoveredId === q.id ? 1 : 0
                }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full flex items-center justify-between px-6 sm:px-12 md:px-16", children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 md:gap-4 transition-transform duration-500 ease-out",
                  style: {
                    transform: hoveredId === q.id ? "translateX(12px)" : "translateX(0px)"
                  },
                  children: [
                    /* @__PURE__ */ jsx("span", { className: `text-xs sm:text-base md:text-lg font-light tracking-wide transition-colors duration-300 ${hoveredId === q.id ? "text-white/90" : "text-white/50"}`, children: q.text }),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "text-sm sm:text-lg md:text-2xl font-aston tracking-widest font-bold leading-none transition-all duration-500",
                        style: {
                          color: hoveredId === q.id ? "#white" : "#e2e8f0",
                          textShadow: hoveredId === q.id ? `0 0 20px ${q.color}40` : "none"
                        },
                        children: q.boldPart
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-white/30 transition-all duration-500",
                  style: {
                    borderColor: hoveredId === q.id ? `${q.color}50` : "rgba(255,255,255,0.1)",
                    color: hoveredId === q.id ? q.color : "rgba(255,255,255,0.3)",
                    transform: hoveredId === q.id ? "rotate(45deg) scale(1.1)" : "rotate(0deg)"
                  },
                  children: /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
                    /* @__PURE__ */ jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
                    /* @__PURE__ */ jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute left-0 top-0 bottom-0 w-[4px] z-20 transition-all duration-500 ease-out",
                style: {
                  backgroundColor: q.color,
                  boxShadow: hoveredId === q.id ? `4px 0 30px ${q.color}` : "none",
                  transform: hoveredId === q.id ? "scaleY(1)" : "scaleY(0.4)"
                }
              }
            )
          ]
        },
        q.id
      )) })
    ] })
  ] });
}
const colors = {
  blue: "#599ddf",
  red: "#c5362e",
  green: "#80b67d"
};
const numWA = 5213313857143;
const servicesData = [
  {
    id: 1,
    title: "Expansión de Negocio",
    focus: "Toma decisiones de expansión basadas en datos para conquistar nuevos territorios y mercados.",
    color: colors.blue,
    colorAlpha: "rgba(89, 157, 223, 0.15)",
    colorAlphaMuted: "rgba(89, 157, 223, 0.04)",
    IconComponent: MapPin,
    ctaText: "Solicitar Evaluación de Expansión",
    ctaLink: `https://wa.me/${numWA}?text=Hola%20WeProm!%20Me%20interesa%20evaluar%20estrategias%20de%20expansi%C3%B3n.`,
    features: [
      { title: "Validación del mercado", desc: "Confirmación de viabilidad y aceptación antes de la inversión.", IconComponent: CheckCircle },
      { title: "Territorios potenciales", desc: "Identificación de zonas con alto potencial y demanda.", IconComponent: Globe },
      { title: "Oportunidades de entrada", desc: "Análisis competitivo y posicionamiento estratégico en el nuevo punto.", IconComponent: TrendingUp$1 }
    ]
  },
  {
    id: 2,
    title: "Diagnóstico de Oportunidades",
    focus: "Identifica áreas de acción para el crecimiento de la marca/empresa.",
    color: colors.red,
    colorAlpha: "rgba(197, 54, 46, 0.15)",
    colorAlphaMuted: "rgba(197, 54, 46, 0.04)",
    IconComponent: Search,
    ctaText: "Agendar Diagnóstico Comercial",
    ctaLink: `https://wa.me/${numWA}?text=Hola%20WeProm!%20Me%20interesa%20un%20diagn%C3%B3stico%20comercial.`,
    features: [
      { title: "Percepción de marca", desc: "Cómo te ven realmente tus clientes frente a la competencia.", IconComponent: Users },
      { title: "Satisfacción del usuario", desc: "Qué tan satisfechos están tus clientes con tus productos y/o servicios.", IconComponent: CheckCircle },
      { title: "Competitividad comercial", desc: "Benchmarking de fortalezas y debilidades frente al sector.", IconComponent: BarChart2$1 }
    ]
  },
  {
    id: 3,
    title: "Factibilidad y Validación",
    focus: "Reduce riesgos mediante inteligencia de mercados, aplicada a nuevos proyectos o ideas de negocio.",
    color: colors.green,
    colorAlpha: "rgba(128, 182, 125, 0.15)",
    colorAlphaMuted: "rgba(128, 182, 125, 0.04)",
    IconComponent: Target$1,
    ctaText: "Validar mi Proyecto",
    ctaLink: `https://wa.me/${numWA}?text=Hola%20WeProm!%20Me%20interesa%20validar%20mi%20proyecto.`,
    features: [
      { title: "Viabilidad comercial", desc: "Análisis de aceptación real en el mercado.", IconComponent: TrendingUp$1 },
      { title: "Condiciones y Potencial del mercado", desc: "Dimensionamiento de la demanda y barreras de entrada.", IconComponent: BarChart2$1 },
      { title: "Escenarios de riesgo", desc: "Identificación de amenazas para el óptimo desarrollo del negocio.", IconComponent: AlertTriangle }
    ]
  }
];
function StrategicSolutions() {
  const [activeId, setActiveId] = useState(servicesData[0].id);
  const activeService = servicesData.find((s) => s.id === activeId) || servicesData[0];
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-20 px-4 sm:px-6 md:px-12 font-sans relative overflow-hidden z-10 antialiased", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-4xl md:text-5xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 will-change-transform",
          style: { fontFamily: "'Astonpoliz', sans-serif" },
          children: "Soluciones Estratégicas"
        }
      ),
      /* @__PURE__ */ jsxs(
        "p",
        {
          className: "max-w-5xl mx-auto text-xl md:text-2xl text-gray-300 font-normal tracking-wide pt-6",
          style: { fontFamily: "'Montserrat', sans-serif" },
          children: [
            "Metodologías probadas para reducir riesgos, identificar oportunidades y tomar decisiones con datos reales, ",
            /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "no suposiciones" }),
            "."
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8 items-start", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full lg:w-1/3 flex flex-col gap-4 relative z-20", children: servicesData.map((s) => {
        const isSelected = activeId === s.id;
        const SideIcon = s.IconComponent;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveId(s.id),
            className: "w-full text-left p-5 rounded-2xl border relative transition-all duration-300 group overflow-hidden bg-black/20 backdrop-blur-md will-change-transform touch-manipulation",
            style: {
              borderColor: isSelected ? `${s.color}a0` : "#1f2937",
              boxShadow: isSelected ? `0 10px 30px -10px ${s.color}40` : "none"
            },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `absolute inset-0 transition-opacity duration-300 -z-10 ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-40"}`,
                  style: { backgroundColor: s.colorAlphaMuted }
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 relative z-10", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "p-3 rounded-xl transition-all duration-300 ease-out",
                    style: {
                      backgroundColor: isSelected ? s.colorAlpha : "rgba(255,255,255,0.02)",
                      color: s.color,
                      transform: isSelected ? "scale(1.05)" : "scale(1)"
                    },
                    children: /* @__PURE__ */ jsx(SideIcon, { className: "w-6 h-6 transition-transform duration-300 group-hover:rotate-3" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `text-lg tracking-wide transition-colors duration-300 ${isSelected ? "text-white font-semibold" : "text-gray-400 group-hover:text-gray-200 font-medium"}`,
                    style: { fontFamily: "'Montserrat', sans-serif" },
                    children: s.title
                  }
                )
              ] })
            ]
          },
          s.id
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-2/3 bg-[#0a0a0a]/70 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-gray-800/60 shadow-2xl relative min-h-[480px] flex flex-col justify-between overflow-hidden will-change-transform", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-0 right-0 w-40 h-40 rounded-full blur-[100px] opacity-15 transition-all duration-700 ease-out pointer-events-none",
            style: {
              backgroundColor: activeService.color,
              transform: "translate3d(0,0,0)"
            }
          }
        ),
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            transition: { duration: 0.2, ease: "easeOut" },
            className: "flex flex-col h-full justify-between flex-grow",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-2xl md:text-3xl font-bold mb-4 tracking-wide",
                    style: { color: activeService.color, fontFamily: "'Montserrat', sans-serif" },
                    children: activeService.title
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-8 text-base md:text-lg leading-relaxed font-light", children: activeService.focus }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4 mb-8", children: activeService.features.map((f, i) => {
                  const FeatureIcon = f.IconComponent;
                  return /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex items-start gap-4 p-4 bg-[#121212]/30 rounded-xl border border-gray-800/40 hover:border-gray-700/60 transition-all duration-200 group/item",
                      children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "p-1 rounded-lg mt-0.5 transition-transform duration-200 group-hover/item:scale-105",
                            style: { color: activeService.color },
                            children: /* @__PURE__ */ jsx(FeatureIcon, { className: "w-5 h-5" })
                          }
                        ),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx(
                            "h4",
                            {
                              className: "font-semibold text-white tracking-wide text-sm md:text-base",
                              style: { fontFamily: "'Montserrat', sans-serif" },
                              children: f.title
                            }
                          ),
                          /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-gray-400 mt-0.5 font-light leading-normal", children: f.desc })
                        ] })
                      ]
                    },
                    i
                  );
                }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full sm:self-start mt-auto", children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: activeService.ctaLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-sm justify-center text-white shadow-lg transition-all duration-300 hover:brightness-110 active:scale-[0.99] w-full relative overflow-hidden group/btn",
                  style: { backgroundColor: activeService.color },
                  children: [
                    /* @__PURE__ */ jsx(MessageSquare, { size: 18 }),
                    /* @__PURE__ */ jsx("span", { className: "tracking-wider font-montserrat", children: activeService.ctaText }),
                    /* @__PURE__ */ jsx(ChevronRight$1, { size: 18, className: "transition-transform duration-300 group-hover/btn:translate-x-1" })
                  ]
                }
              ) })
            ]
          },
          activeId
        ) })
      ] })
    ] })
  ] }) });
}
const merca20Logo = "/assets/merca20-red-C-PWrlZd.png";
const edgeData = [
  {
    title: "Trayectoria",
    desc: "Más de 35 años conociendo el mercado y sabiendo analizar cada parte que lo conforma.",
    color: "#c5362e",
    // Rojo coincidente con tu paleta corporativa
    colorAlpha: "rgba(197, 54, 46, 0.1)",
    Icon: Award
  },
  {
    title: "Equipo",
    desc: "Somos un equipo multidisciplinario y multicultural, adaptado a cualquier tipo de proyecto.",
    color: "#599ddf",
    // Azul
    colorAlpha: "rgba(89, 157, 223, 0.1)",
    Icon: Users
  },
  {
    title: "Experiencia",
    desc: "Tenemos la experiencia de haber trabajado con casi todas las industrias y sectores.",
    color: "#80b67d",
    // Verde
    colorAlpha: "rgba(128, 182, 125, 0.1)",
    Icon: Briefcase
  },
  {
    title: "Infraestructura",
    desc: "Contamos con toda la infraestructura para poder apoyarte en tu proyecto, sin importar el tamaño.",
    color: "#d4af37",
    // Dorado / Amarillo Premium
    colorAlpha: "rgba(212, 175, 55, 0.1)",
    Icon: Building2
  }
];
function OurEdge() {
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-transparent py-20 px-4 sm:px-6 md:px-12 font-sans relative overflow-hidden z-10 antialiased", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx(
      "h2",
      {
        className: "text-4xl md:text-5xl font-normal tracking-wide text-white font-aston",
        children: "Lo que nos hace los mejores"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: edgeData.map((item, index) => {
      const IconComponent = item.Icon;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-[#0d0d0d]/80 backdrop-blur-md border border-gray-800/60 rounded-2xl p-8 flex flex-col items-start justify-between min-h-[400px] transition-all duration-300 hover:border-gray-700/80 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] group will-change-transform",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "p-3 rounded-xl inline-flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-105",
                  style: {
                    backgroundColor: item.colorAlpha,
                    color: item.color
                  },
                  children: /* @__PURE__ */ jsx(IconComponent, { className: "w-6 h-6" })
                }
              ),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-xl font-bold text-white mb-4 tracking-wide",
                  style: { fontFamily: "'Montserrat', sans-serif" },
                  children: item.title
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm md:text-base leading-relaxed font-light", children: item.desc })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-8 h-[2px] mt-6 rounded-full opacity-40 transition-all duration-300 group-hover:w-16",
                style: { backgroundColor: item.color }
              }
            )
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6 pt-4", children: [
      /* @__PURE__ */ jsxs(
        "p",
        {
          className: "text-xl md:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed tracking-wide",
          style: { fontFamily: "'Montserrat', sans-serif" },
          children: [
            "Formamos parte del ranking de mejores agencias de Investigación de mercados en ",
            /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "TODO MÉXICO" }),
            "."
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-2", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: merca20Logo,
          alt: "Ranking Merca 2.0 México",
          className: "h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
        }
      ) })
    ] })
  ] }) });
}
const toolsData = [
  {
    id: "cualitativos",
    title: "Cualitativos",
    subtitle: "Profundidad e Insights",
    desc: "Exploramos comportamientos, motivaciones y emociones de tus consumidores a un nivel profundo.",
    items: [
      "Focus groups",
      "Entrevistas a profundidad",
      "Mystery shopper",
      "Neuromarketing"
    ],
    color: "#c5362e",
    // Rojo corporativo
    colorAlpha: "rgba(197, 54, 46, 0.08)",
    number: "01"
  },
  {
    id: "cuantitativos",
    title: "Cuantitativos",
    subtitle: "Datos y Volumen",
    desc: "Validamos hipótesis con datos duros, estadísticas precisas y modelos matemáticos de alta fiabilidad.",
    items: [
      "Encuestas de Opinión",
      "Paneles de consumidores",
      "Estudios de Satisfacción",
      "Análisis Geoestadístico"
    ],
    color: "#599ddf",
    // Azul corporativo
    colorAlpha: "rgba(89, 157, 223, 0.08)",
    number: "02"
  }
];
function ResearchTools() {
  const [activeTab, setActiveTab] = useState(null);
  const gridBackground = {
    backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
    backgroundSize: "48px 48px"
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "w-full min-h-[90vh] bg-transparent text-white flex flex-col overflow-hidden relative select-none antialiased border-t border-gray-900",
      style: { fontFamily: "'Montserrat', sans-serif" },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none z-0 opacity-80",
            style: gridBackground
          }
        ),
        /* @__PURE__ */ jsxs("header", { className: "relative z-20 px-6 py-12 md:py-16 sm:px-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 bg-black/40 backdrop-blur-md", children: [
          /* @__PURE__ */ jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsxs(
            "h2",
            {
              className: "text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-[1.1] tracking-widest text-white",
              style: { fontFamily: "'Astonpoliz', sans-serif" },
              children: [
                "Herramientas",
                /* @__PURE__ */ jsx("br", {}),
                "de Investigación"
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 font-light text-sm md:text-base max-w-md md:text-right leading-relaxed", children: "Somos especialistas en las diferentes herramientas metodológicas según tu objetivo, ya sea para validar un nuevo proyecto, hasta para descubrir nuevas oportunidades de expansión y desarrollo." })
        ] }),
        /* @__PURE__ */ jsx("main", { className: "flex-1 flex flex-col md:flex-row relative z-10 w-full max-w-7xl mx-auto border-x border-white/5", children: toolsData.map((tool) => {
          const isActive = activeTab === tool.id;
          const isAnyHovered = activeTab !== null;
          const isOtherActive = isAnyHovered && !isActive;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              onMouseEnter: () => setActiveTab(tool.id),
              onMouseLeave: () => setActiveTab(null),
              onClick: () => setActiveTab(isActive ? null : tool.id),
              className: "group relative border-b md:border-b-0 md:border-r border-white/10 last:border-0 overflow-hidden cursor-pointer flex flex-col justify-center transition-all duration-[700ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] will-change-[flex,background-color]",
              style: {
                // En desktop altera dinámicamente el ancho proporcional. En mobile usa auto-flex.
                flex: typeof window !== "undefined" && window.innerWidth >= 768 ? isActive ? 2.5 : isOtherActive ? 0.6 : 1 : "1 1 auto"
              },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0",
                    style: { background: `linear-gradient(to top, ${tool.colorAlpha}, transparent)` }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "p-8 sm:p-12 md:p-16 h-full flex flex-col justify-center relative z-10 min-h-[280px] md:min-h-[500px]", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `absolute top-8 right-8 md:top-12 md:right-12 text-6xl sm:text-8xl md:text-[110px] font-bold leading-none pointer-events-none z-0 transition-all duration-500 font-aston ${isActive ? "opacity-100 scale-105" : "opacity-5 [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] text-transparent"}`,
                      style: {
                        color: isActive ? tool.color : void 0,
                        fontFamily: "'Astonpoliz', sans-serif"
                      },
                      children: tool.number
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: `transition-all duration-500 ${!isActive && isAnyHovered ? "opacity-30" : "opacity-100"}`, children: [
                    /* @__PURE__ */ jsx(
                      "h3",
                      {
                        className: `text-3xl sm:text-4xl md:text-5xl uppercase mb-4 tracking-wider transition-all duration-500 ${isActive ? "text-white" : "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.6)]"}`,
                        style: { fontFamily: "'Astonpoliz', sans-serif" },
                        children: tool.title
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `grid transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 pointer-events-none"}`,
                        children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden", children: [
                          /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl font-medium text-gray-200 mb-3", children: tool.subtitle }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-8 max-w-xl", children: tool.desc }),
                          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3", children: tool.items.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-white/5 pb-2", children: [
                            /* @__PURE__ */ jsx(
                              "span",
                              {
                                className: "w-1.5 h-1.5 rotate-45 flex-shrink-0 transition-transform duration-300 group-hover:scale-125",
                                style: { backgroundColor: tool.color }
                              }
                            ),
                            /* @__PURE__ */ jsx("span", { className: "text-sm md:text-base font-light text-gray-300", children: item })
                          ] }, i)) })
                        ] })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute bottom-0 left-0 w-full h-[3px] transition-transform duration-500 origin-left ease-out",
                    style: {
                      backgroundColor: tool.color,
                      transform: isActive ? "scaleX(1)" : "scaleX(0)"
                    }
                  }
                )
              ]
            },
            tool.id
          );
        }) }),
        /* @__PURE__ */ jsx("div", { className: "relative z-20 w-full flex justify-center pb-12 pt-8 bg-black/20 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("button", { className: "group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-[#80b67d] hover:text-white transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] font-semibold text-sm sm:text-base tracking-wide active:scale-[0.98]", children: [
          /* @__PURE__ */ jsx("span", { children: "Solicitar Propuesta" }),
          /* @__PURE__ */ jsx(ArrowUpRight$1, { className: "w-5 h-5 transition-transform duration-300 group-hover:rotate-45", strokeWidth: 2.5 })
        ] }) })
      ]
    }
  );
}
const blogPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    title: "Cómo la integración multicadena está dando forma al futuro de la web3",
    date: "December 7, 2024",
    category: "Technology",
    glowColor: "blue"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    title: "Cómo la integración multicadena está dando forma al futuro de la web3",
    date: "December 7, 2024",
    category: "Marketing",
    glowColor: "green"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    title: "Cómo la integración multicadena está dando forma al futuro de la web3",
    date: "December 7, 2024",
    category: "Business",
    glowColor: "purple"
  }
];
function BlogSection() {
  const [isOn, setIsOn] = useState(true);
  return /* @__PURE__ */ jsx("section", { className: `w-full pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 transition-colors duration-700 ${isOn ? "bg-transparent" : "bg-[#050505]"}`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10 sm:mb-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-left flex-1", children: [
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: `font-aston mb-3 sm:mb-4 transition-colors duration-500 leading-tight text-[36px] sm:text-[44px] lg:text-[56px] ${isOn ? "text-white" : "text-white/20"}`,
            style: { fontWeight: 400, letterSpacing: "-0.02em" },
            children: "Conoce más sobre Investigación de Mercados"
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: `font-montserrat max-w-3xl transition-colors duration-500 text-[20px] sm:text-[22px] lg:text-[23px] ${isOn ? "text-soft-gray" : "text-white/10"}`,
            style: { lineHeight: "28px", letterSpacing: "0.01em" },
            children: "Entérate de XYZ de investigación"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 self-start sm:self-center", children: /* @__PURE__ */ jsxs("button", { className: "group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-transparent border border-white/30 text-white font-montserrat font-medium text-[14px] sm:text-[16px] transition-all duration-300 hover:border-white/60 hover:bg-white/5 flex items-center gap-2 whitespace-nowrap", children: [
        /* @__PURE__ */ jsx("span", { children: "Ver Blog" }),
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center", children: blogPosts.map((post) => /* @__PURE__ */ jsx(
      BlogCard$1,
      {
        image: post.image,
        title: post.title,
        date: post.date,
        category: post.category,
        glowColor: post.glowColor
      },
      post.id
    )) })
  ] }) });
}
const ChevronLeft = ({ size = 20 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m15 18-6-6 6-6" }) });
const ChevronRight = ({ size = 20 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m9 18 6-6-6-6" }) });
const ArrowUpRight = ({ size = 15 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M7 7h10v10" }),
  /* @__PURE__ */ jsx("path", { d: "M7 17 17 7" })
] });
const cases = [
  {
    id: 1,
    client: "COCA COLA",
    objetivos: "Realizar una serie de estudios de mercado para identificar los hábitos, percepciones y preferencias de consumo por parte del mercado meta en México y el Caribe.",
    resultados: [
      "Se conocieron áreas de oportunidad para el desarrollo de las líneas de productos.",
      "Se realizaron estrategias de marketing de alto impacto para reposicionar las diferentes marcas del grupo.",
      "Se lograron récords en ventas tras la implementación de las estrategias comerciales y de comunicación."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_coca.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2025/11/Coca-Cola_CE.webp"
  },
  {
    id: 2,
    client: "MERCEDES-BENZ",
    objetivos: "Conocer la viabilidad de una alianza estratégica fusionando los puntos de venta de las concesionarias Mercedes-Benz con Chrysler a nivel nacional.",
    resultados: [
      "Se evaluó la percepción de las marcas y las preferencias de los consumidores.",
      "Se identificaron los nichos de clientes y sus hábitos de consumo.",
      "Se validó la viabilidad comercial de la fusión de los puntos de venta."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_mercedes.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/mercedes.png"
  },
  {
    id: 3,
    client: "O'REILLY AUTOPARTES",
    objetivos: "Analizar las ciudades de México donde tienen presencia para comprender percepción, hábitos y preferencias del público, detectar barreras y oportunidades y fortalecer posicionamiento.",
    resultados: [
      "Se identificaron los segmentos clave de mercado y sus hábitos de compra.",
      "Se diseñaron estrategias localizadas por las diferencias regionales detectadas.",
      "Se revelaron fortalezas competitivas en fidelización y percepción de precios."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_oreilly.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/oreilly.png"
  },
  {
    id: 4,
    client: "ITESO",
    objetivos: "Evaluar la percepción, atractivo y posicionamiento de las carreras de Ciencias de la Comunicación, Gestión Cultural y Periodismo y Comunicación Pública, con el fin de identificar mejoras estratégicas en su denominación y comunicación.",
    resultados: [
      "Se detectaron barreras de comprensión y percepción en los nombres de las carreras.",
      "Se propusieron denominaciones más claras y atractivas con base en votaciones.",
      "Se detectaron áreas de mejora en estrategia de comunicación y conexión con mercado laboral."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_iteso.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/iteso.png"
  },
  {
    id: 5,
    client: "CASAS JAVER",
    objetivos: "Identificar las tendencias y criterios de preferencia en la compra de vivienda horizontal y vertical. Definir el perfil del mercado potencial y los factores clave en su decisión de compra.",
    resultados: [
      "Se identificaron las principales necesidades y expectativas del mercado en distintas regiones del país.",
      "Se determinaron los atributos de mayor valor y percepción para el consumidor final.",
      "Se establecieron estrategias comerciales, de producto y de comunicación para fortalecer el posicionamiento de la marca."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/Fondo_javer.jpg",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/javer.png"
  },
  {
    id: 6,
    client: "PRO MÉXICO",
    objetivos: 'Conocer la percepción e imagen del país en mercados estratégicos internacionales, con el fin de diseñar campañas que fortalezcan la marca país "México" para la inversión extranjera directa y la exportación de bienes y servicios.',
    resultados: [
      "Se detectaron oportunidades de seguridad e innovación para el desarrollo industrial en los diferentes sectores productivos del país.",
      'Se creó "México significa oportunidad" para mejorar la percepción y el posicionamiento.',
      "Se atrajeron cientos de millones de dólares para el desarrollo sectorial automotriz, aeroespacial, de energía, entre otros."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_promexico.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/promexico.png"
  },
  {
    id: 7,
    client: "CAJA POPULAR TAMAZULA",
    objetivos: "Evaluar viabilidad para la expansión de la marca. Diagnosticar la percepción y satisfacción de la base de socios actuales para fortalecer fidelización. Identificar brechas entre oferta y demandas del mercado para optimizar la competitividad.",
    resultados: [
      "Se definieron zonas geográficas con mayor potencial de rentabilidad y menor riesgo.",
      "Se detectaron oportunidades clave para la modernización tecnológica y operativa.",
      "Se identificaron a tiempo brechas de satisfacción y riesgos de fuga para los socios."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_cpt.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/cpt.png"
  },
  {
    id: 8,
    client: "LIZ MUEBLES",
    objetivos: "Conocer la participación de mercado de los competidores en Centroamérica. Detectar las necesidades, hábitos y preferencias del consumidor. Identificar canales de distribución potenciales.",
    resultados: [
      "Identificación de tendencias y preferencias del mercado para Nicaragua y Panamá.",
      "Propuestas de desarrollo de nuevos productos para el mercado centroamericano.",
      "Estrategias de posicionamiento e incursión para Centroamérica."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_lizmuebles.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2025/11/Liz-Logo.webp"
  },
  {
    id: 9,
    client: "TEQUILA HUIZACHE",
    objetivos: "Identificar las áreas de oportunidad en nuevos mercados para su exportación y comercialización. Determinar viabilidad de expansión a Estados Unidos y Canadá. Descubrir oportunidad de exportar a otros países.",
    resultados: [
      "Se identificó un fuerte mercado potencial y viable en Europa",
      "Se identificaron los principales canales de distribución potenciales.",
      "Se diseñaron propuestas de estrategias comerciales para la incursión en nuevos mercados."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_tequilahuizache.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2025/11/Huizache-Logo.webp"
  },
  {
    id: 10,
    client: "CHIZY CHIZ",
    objetivos: "Evaluar la competitividad de las sucursales en relación a las necesidades y expectativas de los consumidores para definir las áreas de mejora para su expansión en el país.",
    resultados: [
      "Se evaluó la experiencia de los clientes cautivos, potenciales y perdidos.",
      "Se analizó el nivel de recomendación y lealtad por parte de los clientes.",
      "Se identificaron las expectativas y necesidades del mercado meta."
    ],
    image: "https://grupoweprom.com/wp-content/uploads/2026/05/fondo_chizychiz.png",
    logo: "https://grupoweprom.com/wp-content/uploads/2026/05/chizychiz.png"
  }
];
const SWIPE_THRESHOLD = 50;
function OurProjects() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const dragX = useMotionValue(0);
  const goTo = useCallback((index) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }, [active]);
  const prev = useCallback(() => {
    setDirection(-1);
    setActive((a) => (a - 1 + cases.length) % cases.length);
  }, []);
  const next = useCallback(() => {
    setDirection(1);
    setActive((a) => (a + 1) % cases.length);
  }, []);
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      next();
    }, 5e3);
    return () => clearInterval(timer);
  }, [isHovered, next]);
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);
  const prevIndex = (active - 1 + cases.length) % cases.length;
  const nextIndex = (active + 1) % cases.length;
  const cardVariants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0, scale: 0.96 })
  };
  const handleDragEnd = (_, info) => {
    if (info.offset.x < -SWIPE_THRESHOLD) next();
    else if (info.offset.x > SWIPE_THRESHOLD) prev();
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "w-full bg-transparent py-16 sm:py-20 px-4 sm:px-6 md:px-12 font-sans relative overflow-hidden z-10 antialiased select-none",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: [
        /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
        @import url('https://fonts.cdnfonts.com/css/astonpoliz');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        .font-aston { font-family: 'ASTONPOLIZ', 'Astonpoliz', 'Anton', sans-serif; letter-spacing: 0.05em; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .dot-active {
          background: linear-gradient(90deg, #e6af41, #f0c060, #e6af41);
          background-size: 200% auto;
          animation: shimmer 2s linear infinite;
        }
        .preview-card {
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0.25;
          filter: brightness(0.5) blur(1px);
        }
        .preview-card:hover {
          opacity: 0.5;
          transform: scale(1.02);
          filter: brightness(0.8) blur(0px);
        }
        
        /* Custom scrollbar para los paneles de cristal internos en móviles si es requerido */
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(230, 175, 65, 0.3); border-radius: 10px; }
      ` } }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              className: "text-center mb-10 sm:mb-14",
              children: /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white font-aston leading-tight", children: "Conoce algunos de nuestros proyectos" })
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 32 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
              className: "relative flex items-center justify-center gap-4 lg:gap-6",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "preview-card hidden lg:block w-[200px] xl:w-[240px] h-[520px] xl:h-[560px] flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950",
                    onClick: prev,
                    children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: cases[prevIndex].image,
                        alt: cases[prevIndex].client,
                        className: "w-full h-full object-cover select-none pointer-events-none",
                        draggable: false
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative flex-1 w-full max-w-[840px] h-[580px] sm:h-[520px] md:h-[540px] lg:h-[520px] xl:h-[560px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl", children: [
                  /* @__PURE__ */ jsx(AnimatePresence, { custom: direction, mode: "wait", children: /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      custom: direction,
                      variants: cardVariants,
                      initial: "enter",
                      animate: "center",
                      exit: "exit",
                      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                      drag: "x",
                      dragConstraints: { left: 0, right: 0 },
                      dragElastic: 0.15,
                      onDragEnd: handleDragEnd,
                      style: { x: dragX, position: "absolute", inset: 0, cursor: "grab" },
                      whileDrag: { cursor: "grabbing", scale: 0.99 },
                      className: "w-full h-full relative overflow-hidden",
                      children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: cases[active].image,
                            alt: cases[active].client,
                            className: "w-full h-full object-cover brightness-[0.75] scale-105 transition-transform duration-700 select-none pointer-events-none",
                            draggable: false
                          }
                        ),
                        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" }),
                        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-5 md:p-6 flex flex-col gap-3 sm:gap-4 shadow-2xl max-h-[85%] overflow-y-auto custom-scroll", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 md:gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 flex flex-col justify-center items-start", children: [
                              /* @__PURE__ */ jsx("div", { className: "h-12 sm:h-14 w-full max-w-[160px] flex items-center mb-2.5", children: /* @__PURE__ */ jsx(
                                "img",
                                {
                                  src: cases[active].logo,
                                  alt: `Logo ${cases[active].client}`,
                                  className: "max-h-full max-w-full object-contain object-left pointer-events-none select-none"
                                }
                              ) }),
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-5 h-[2px] bg-[#e6af41]" }),
                                /* @__PURE__ */ jsx("span", { className: "text-[#e6af41] font-semibold tracking-widest text-[11px] sm:text-xs uppercase font-montserrat", children: cases[active].client })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 md:border-l border-white/10 md:pl-6 flex flex-col justify-center", children: [
                              /* @__PURE__ */ jsx("h4", { className: "text-[#e6af41] font-aston text-sm sm:text-base mb-1 uppercase tracking-wider font-semibold", children: "Objetivos" }),
                              /* @__PURE__ */ jsx("p", { className: "text-zinc-300 font-light text-xs sm:text-[13px] leading-relaxed font-montserrat", children: cases[active].objetivos })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-white/10" }),
                          /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-[#e6af41] font-aston text-sm sm:text-base mb-2 uppercase tracking-wider font-semibold", children: "Resultados" }),
                            /* @__PURE__ */ jsx("ul", { className: "text-zinc-300 font-light text-xs sm:text-[13px] leading-relaxed space-y-1.5 font-montserrat pl-1", children: cases[active].resultados.map((res, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-[#e6af41] text-xs mt-0.5 select-none", children: "•" }),
                              /* @__PURE__ */ jsx("span", { className: "flex-1", children: res })
                            ] }, i)) })
                          ] })
                        ] })
                      ]
                    },
                    cases[active].id
                  ) }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: prev,
                      className: "md:hidden absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/60 backdrop-blur-md border border-white/15 rounded-full flex items-center justify-center text-white active:bg-[#e6af41] active:text-black transition-colors duration-200",
                      children: /* @__PURE__ */ jsx(ChevronLeft, { size: 16 })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: next,
                      className: "md:hidden absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/60 backdrop-blur-md border border-white/15 rounded-full flex items-center justify-center text-white active:bg-[#e6af41] active:text-black transition-colors duration-200",
                      children: /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "preview-card hidden lg:block w-[200px] xl:w-[240px] h-[520px] xl:h-[560px] flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950",
                    onClick: next,
                    children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: cases[nextIndex].image,
                        alt: cases[nextIndex].client,
                        className: "w-full h-full object-cover select-none pointer-events-none",
                        draggable: false
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.button,
                  {
                    onClick: prev,
                    whileHover: { scale: 1.08 },
                    whileTap: { scale: 0.94 },
                    className: "hidden md:flex absolute left-4 lg:left-2 xl:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-[#09090b]/80 backdrop-blur-md border border-zinc-800 rounded-full items-center justify-center text-white hover:border-[#e6af41]/50 hover:bg-zinc-900 transition-all duration-300 shadow-xl",
                    children: /* @__PURE__ */ jsx(ChevronLeft, { size: 20 })
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.button,
                  {
                    onClick: next,
                    whileHover: { scale: 1.08 },
                    whileTap: { scale: 0.94 },
                    className: "hidden md:flex absolute right-4 lg:right-2 xl:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-[#09090b]/80 backdrop-blur-md border border-zinc-800 rounded-full items-center justify-center text-white hover:border-[#e6af41]/50 hover:bg-zinc-900 transition-all duration-300 shadow-xl",
                    children: /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.3 },
              className: "flex justify-center items-center gap-1.5 mt-8 sm:mt-10 flex-wrap max-w-md mx-auto px-4",
              children: cases.map((_, i) => /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => goTo(i),
                  className: `h-2 rounded-full transition-all duration-500 ease-[0.16, 1, 0.3, 1] ${i === active ? "w-7 dot-active opacity-100" : "w-2 bg-white/20 hover:bg-white/40 opacity-60"}`,
                  style: { minWidth: i === active ? "28px" : "8px" }
                },
                i
              ))
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 4 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3 },
              className: "text-center mt-3.5",
              children: /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-zinc-500 font-montserrat tracking-[0.2em] font-medium", children: [
                String(active + 1).padStart(2, "0"),
                " / ",
                String(cases.length).padStart(2, "0")
              ] })
            },
            active
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              className: "flex justify-center mt-10 sm:mt-12",
              children: /* @__PURE__ */ jsxs(
                motion.a,
                {
                  href: "https://xeryusinvest.com/portafolio",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  whileHover: { scale: 1.03 },
                  whileTap: { scale: 0.97 },
                  className: "group relative px-9 sm:px-11 py-3.5 sm:py-4 bg-transparent border-2 border-white/60 text-white rounded-full font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] overflow-hidden hover:border-white font-montserrat flex items-center justify-center",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full" }),
                    /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300", children: [
                      "Ver Portafolio",
                      /* @__PURE__ */ jsx(
                        motion.span,
                        {
                          className: "inline-flex",
                          animate: { x: [0, 2, 0], y: [0, -2, 0] },
                          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                          children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })
                        }
                      )
                    ] })
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
const steps = [
  {
    id: 1,
    title: "Definición de objetivos",
    desc: "Definimos juntos tus metas, analizamos el mercado y establecemos los plazos ideales para el éxito de tu proyecto.",
    color: "#c5362e",
    // Rojo
    colorAlpha: "rgba(197, 54, 46, 0.08)",
    icon: Target$1
  },
  {
    id: 2,
    title: "Diseño metodológico",
    desc: "Seleccionamos la estrategia perfecta, definimos el alcance y las herramientas de recolección necesarias.",
    color: "#599ddf",
    // Azul
    colorAlpha: "rgba(89, 157, 223, 0.08)",
    icon: ClipboardList
  },
  {
    id: 3,
    title: "Presentación de propuesta",
    desc: "Recibes un documento detallado con la solución, tiempos de ejecución y presupuesto ajustado a tu medida.",
    color: "#80b67d",
    // Verde
    colorAlpha: "rgba(128, 182, 125, 0.08)",
    icon: CheckCircle2
  },
  {
    id: 4,
    title: "Desarrollo del proyecto",
    desc: "Ejecutamos el plan de acción con rigor técnico, supervisión constante y control de calidad.",
    color: "#e6af41",
    // Dorado / Amarillo
    colorAlpha: "rgba(230, 175, 65, 0.08)",
    icon: Code
  },
  {
    id: 5,
    title: "Entrega y acompañamiento",
    desc: "Entregamos los resultados con insights clave y te acompañamos en la implementación de las recomendaciones.",
    color: "#a855f7",
    // Morado
    colorAlpha: "rgba(168, 85, 247, 0.08)",
    icon: Award
  }
];
function OurProcess() {
  const [activeStep, setActiveStep] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);
  const activeData = steps.find((s) => s.id === activeStep) || steps[0];
  const ActiveIcon = activeData.icon;
  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => prev === 5 ? 1 : prev + 1);
        setAnimating(false);
      }, 250);
    }, 5e3);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplay]);
  const handleStepClick = (stepId) => {
    setAutoplay(false);
    if (timerRef.current) clearInterval(timerRef.current);
    if (stepId === activeStep) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveStep(stepId);
      setAnimating(false);
    }, 200);
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "w-full bg-transparent py-24 px-6 sm:px-12 relative overflow-hidden z-10 antialiased select-none border-t border-zinc-900",
      style: { fontFamily: "'Montserrat', sans-serif" },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[500px] rounded-full pointer-events-none blur-[120px] sm:blur-[160px] opacity-25 transition-all duration-1000 ease-out z-0",
            style: {
              background: `radial-gradient(circle, ${activeData.color} 0%, transparent 65%)`
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 flex flex-col space-y-12", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[#e6af41] font-semibold tracking-[0.25em] text-xs sm:text-sm mb-3 uppercase", children: "Nuestro proceso de trabajo" }),
              /* @__PURE__ */ jsxs(
                "h2",
                {
                  className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider text-white leading-[1.15]",
                  style: { fontFamily: "'Astonpoliz', sans-serif" },
                  children: [
                    "Proyectos ",
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500", children: "a la medida" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative pl-8", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute left-[11px] top-3 bottom-3 w-[2px] bg-zinc-800/80 rounded-full" }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-8", children: steps.map((step) => {
                const isActive = activeStep === step.id;
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    onClick: () => handleStepClick(step.id),
                    className: "relative cursor-pointer group flex items-center py-1 will-change-transform",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute -left-[29px] w-6 h-6 rounded-full flex items-center justify-center bg-black z-20", children: /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `rounded-full transition-all duration-500 ${isActive ? "scale-125" : "scale-100"}`,
                          style: {
                            width: isActive ? "12px" : "8px",
                            height: isActive ? "12px" : "8px",
                            backgroundColor: isActive ? step.color : "#3f3f46",
                            boxShadow: isActive ? `0 0 14px 4px ${step.color}60` : "none"
                          }
                        }
                      ) }),
                      /* @__PURE__ */ jsx("div", { className: "ml-6", children: /* @__PURE__ */ jsx(
                        "h3",
                        {
                          className: `text-xl font-bold transition-all duration-300 tracking-wide ${isActive ? "text-white translate-x-1" : "text-zinc-600 group-hover:text-zinc-400"}`,
                          style: { fontFamily: "'Astonpoliz', sans-serif" },
                          children: step.title
                        }
                      ) })
                    ]
                  },
                  step.id
                );
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 flex items-center justify-center lg:justify-end w-full", children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "w-full max-w-md aspect-square bg-[#121214]/40 backdrop-blur-xl border rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-700 [box-shadow:none] group will-change-transform",
              style: {
                borderColor: `${activeData.color}25`,
                boxShadow: `0 30px 60px -25px ${activeData.color}20`
              },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute top-0 right-0 p-6 transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-6 pointer-events-none",
                    style: { color: activeData.color, opacity: 0.15 },
                    children: /* @__PURE__ */ jsx(ActiveIcon, { size: 120, strokeWidth: 1 })
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `flex flex-col h-full justify-between transition-all duration-300 ${animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`,
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "flex items-start", children: /* @__PURE__ */ jsxs(
                        "span",
                        {
                          className: "text-6xl font-bold leading-none select-none tracking-tighter",
                          style: { color: "#ffffff", opacity: 0.95, fontFamily: "'Astonpoliz', sans-serif" },
                          children: [
                            "0",
                            activeData.id
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ jsxs("div", { className: "mt-auto", children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-2xl sm:text-3xl font-bold text-white mb-4 tracking-wide", children: activeData.title }),
                        /* @__PURE__ */ jsx("p", { className: "text-zinc-400 text-base sm:text-lg leading-relaxed font-light", children: activeData.desc })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-[2.5px] bg-zinc-900 overflow-hidden rounded-t-3xl", children: autoplay && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "h-full bg-white origin-left",
                    style: {
                      backgroundColor: activeData.color,
                      animation: "progressFill 5s linear forwards"
                    }
                  },
                  activeStep
                ) })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("style", { children: `
        @keyframes progressFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      ` })
      ]
    }
  );
}
function ScrollReveal({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.6s ease, transform 0.6s ease"
      },
      children
    }
  );
}
function MarketResearch() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-transparent overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(HeroMR, {}),
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx(TwoSectionBrands, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx(WhyMR, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx(ElPoderDeLaInformacion, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx(StrategicSolutions, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx(OurEdge, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx(ResearchTools, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx(OurProjects, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx(OurProcess, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx(BlogSection, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx(TestimonialsSection, {}) }),
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx(ContactoMR, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timerLoading = setTimeout(() => {
      setLoading(false);
    }, 1500);
    const timerShow = setTimeout(() => {
      setShowLoader(false);
    }, 2800);
    return () => {
      clearTimeout(timerLoading);
      clearTimeout(timerShow);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showLoader && /* @__PURE__ */ jsx(Loader, {}),
    /* @__PURE__ */ jsx(InteractiveBackground, {}),
    /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, { isLoading: loading }) }),
      /* @__PURE__ */ jsx(Route, { path: "/nosotros", element: /* @__PURE__ */ jsx(About, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/servicios", element: /* @__PURE__ */ jsx(Services, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/servicios/branding", element: /* @__PURE__ */ jsx(Branding, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/servicios/audiovisual", element: /* @__PURE__ */ jsx(Audiovisual, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/servicios/consultoriademarketing", element: /* @__PURE__ */ jsx(ConsultoriaDeMarketing, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/servicios/marketing-digital", element: /* @__PURE__ */ jsx(MainMktDigital, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/servicios/investigacion-de-mercados", element: /* @__PURE__ */ jsx(MarketResearch, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsx(Blog, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) })
    ] })
  ] });
}
const container = document.getElementById("root");
if (typeof window !== "undefined" && container) {
  if (container.hasChildNodes()) {
    hydrateRoot(
      container,
      /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(App, {}) }) })
    );
  } else {
    createRoot(container).render(
      /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(App, {}) }) })
    );
  }
}
const createApp = () => {
};
export {
  createApp
};
