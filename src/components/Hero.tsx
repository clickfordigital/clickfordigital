import React, { useState, useEffect } from "react";
import { ArrowUpRight, Search, TrendingUp, CheckCircle, Smartphone, BarChart3, ArrowRight, Zap, Percent, ShieldCheck, Globe, Cog, Rocket, Target, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "./Router";
import mohanPortrait from "../assets/images/mohan.png";
import { AcharyaGaneshSvg, HanishBaggaSvg, ThinkBizzSvg } from "./BrandLogos";
import acharyaGaneshLogo from "../assets/images/acharya_ganesh_logo_1781336005108.jpg";
import hanishBaggaLogo from "../assets/images/regenerated_image_1781336504219.png";
import thinkbizLogo from "../assets/images/thinkbiz_logo_1781336740783.jpg";

// Removed performanceData

const STACK_TOOLS = [
  {
    name: "Google Search Console",
    logo: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#4285F4"/>
        <path d="M12 2a10 10 0 0 0-10 10c0 1.85.5 3.58 1.39 5.07l13.68-13.68A9.92 9.92 0 0 0 12 2z" fill="#EA4335"/>
        <path d="M17.07 18.61A9.95 9.95 0 0 0 22 12c0-1.85-.5-3.58-1.39-5.07L6.93 20.61c1.49.89 3.22 1.39 5.07 1.39 1.85 0 3.58-.5 5.07-1.39z" fill="#34A853"/>
        <circle cx="12" cy="12" r="5" fill="#FBBC05"/>
        <path d="M10 12h4M12 10v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "Google Analytics 4",
    logo: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="14" width="3" height="6" rx="1.5" fill="#F4B400" />
        <rect x="10.5" y="8" width="3" height="12" rx="1.5" fill="#DB4437" />
        <rect x="17" y="3" width="3" height="17" rx="1.5" fill="#E37400" />
      </svg>
    )
  },
  {
    name: "Ahrefs",
    logo: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#001B34" />
        <path d="M6 16v-3a1 1 0 0 1 1-1h1a1 1 0 0 1 1-1v3M10 16V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7M14 16V5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 18h14" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 4l4 1-1 4" stroke="#FF5C35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="5" r="1.5" fill="#FF5C35" />
      </svg>
    )
  },
  {
    name: "SEMrush",
    logo: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2500/svg">
        <circle cx="12" cy="12" r="9" fill="#FF6422" />
        <circle cx="12" cy="12" r="5" fill="white" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10C21.9 6.55 17.5 2.1 12 2z" stroke="#FF6422" strokeWidth="1" />
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#4C2314" opacity="0.15" />
        <circle cx="12" cy="12" r="2" fill="#FF6422" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Screaming Frog",
    logo: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="6" fill="#1B1F23" />
        <circle cx="9" cy="9" r="2.5" fill="#2CE254" />
        <circle cx="15" cy="9" r="2.5" fill="#2CE254" />
        <circle cx="9" cy="9" r="1" fill="#1B1F23" />
        <circle cx="15" cy="9" r="1" fill="#1B1F23" />
        <path d="M12 11c-2.5 0-4.5 1.5-5 3.5h10c-.5-2-2.5-3.5-5-3.5z" fill="#2CE254" />
        <path d="M6 18c0-2.5 1.5-4 4-4h4c2.5 0 4 1.5 4 4" stroke="#2CE254" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Google Tag Manager",
    logo: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#E8F0FE" />
        <path d="M12 2L3 7l9 5 9-5-9-5z" fill="#4285F4" />
        <path d="M3 7v10l9 5v-10L3 7z" fill="#34A853" />
        <path d="M12 12v10l9-5V7l-9 5z" fill="#FBBC05" />
        <circle cx="12" cy="12" r="3" fill="#EA4335" />
      </svg>
    )
  },
  {
    name: "Google Business Profile",
    logo: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="11" width="16" height="9" rx="1" fill="#4285F4" />
        <path d="M3 7h18l-1 4H4L3 7z" fill="#FA8072" />
        <path d="M3 7l1.5-2h15l1.5 2H3z" fill="#EA4335" />
        <rect x="8" y="14" width="3" height="6" fill="#1A73E8" />
        <rect x="13" y="14" width="3" height="3" fill="white" />
      </svg>
    )
  },
  {
    name: "Google PageSpeed Insights",
    logo: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#E5E7EB" strokeWidth="2" />
        <path d="M12 3a9 9 0 0 1 9 9c0 1.5-.37 2.91-1 4.16" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M3 12a9 9 0 0 1 9-9" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M5.4 17.5A9 9 0 0 1 3 12" stroke="#FBBC05" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 12l5-5" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="#111827" />
      </svg>
    )
  },
  {
    name: "Google Trends",
    logo: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 19h18" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 16l4-4 4 3 8-9" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6h4v4" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="6" r="2" fill="#34A853" />
      </svg>
    )
  },
  {
    name: "Yoast SEO",
    logo: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#A42B74" />
        <path d="M7 15l3.5-6L14 15h-1.5l-2-3.5L8.5 15H7z" fill="white" />
        <rect x="6" y="16" width="3" height="1.5" fill="#59A03A" />
        <rect x="10.5" y="16" width="3" height="1.5" fill="#DE5921" />
        <rect x="15" y="16" width="3" height="1.5" fill="#1C6FAC" />
      </svg>
    )
  },
  {
    name: "Rank Math",
    logo: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#1E2A47" />
        <path d="M12 4a8 8 0 0 1 8 8 8 8 0 0 1-8 8" stroke="#1677FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12h8" stroke="#FF8A00" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 8l4 4-4 4" stroke="#FF8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.5" fill="#FF8A00" />
      </svg>
    )
  },
  {
    name: "Bing Webmaster Tools",
    logo: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 6v12l8 4 8-4V6l-8-4z" fill="#008272" opacity="0.15" />
        <path d="M12 2L4 6v6l8 4 8-4V6l-8-4z" fill="#0078D4" />
        <path d="M4 12v6l8 4v-6L4 12z" fill="#00B7C3" />
        <path d="M12 16v6l8-4v-6l-8 4z" fill="#005A9E" />
      </svg>
    )
  }
];

const DOUBLE_STACK_TOOLS = [...STACK_TOOLS, ...STACK_TOOLS, ...STACK_TOOLS];

export default function Hero() {
  const [activeClientIdx, setActiveClientIdx] = useState(0);
  const [clientTouchStart, setClientTouchStart] = useState<number | null>(null);

  const handleNextClient = () => {
    setActiveClientIdx((prev) => (prev + 1) % 3);
  };

  const handlePrevClient = () => {
    setActiveClientIdx((prev) => (prev - 1 + 3) % 3);
  };

  const handleClientTouchStart = (e: React.TouchEvent) => {
    setClientTouchStart(e.touches[0].clientX);
  };

  const handleClientTouchEnd = (e: React.TouchEvent) => {
    if (clientTouchStart === null) return;
    const diff = clientTouchStart - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNextClient();
    } else if (diff < -50) {
      handlePrevClient();
    }
    setClientTouchStart(null);
  };

  const handleScrollTo = (id: string) => {
    if (typeof window !== "undefined") {
      if (window.location.pathname !== "/") {
        window.history.pushState(null, "", "/" + id);
        window.dispatchEvent(new Event("popstate"));
        setTimeout(() => {
          const target = document.querySelector(id);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      } else {
        const target = document.querySelector(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-50/50 dark:bg-zinc-950/40"
    >
      {/* Visual background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 border border-teal-200/50 dark:border-teal-900/40 text-teal-700 dark:text-teal-300 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide w-fit mx-auto lg:mx-0 mb-6"
            >
              <span>🚀 Helping Businesses Grow Through Data-Driven SEO</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="hero-headline"
              className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-3xl xl:text-4xl tracking-tight leading-[1.1] text-zinc-900 dark:text-white"
            >
              SEO & SMO Strategies That <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">Drive Measurable Business Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="hero-subheadline"
              className="mt-5 text-sm sm:text-base text-zinc-650 dark:text-zinc-400 font-medium leading-relaxed"
            >
              I'm <strong className="text-zinc-900 dark:text-white">Mohan</strong>, an SEO & SMO Specialist passionate about helping businesses increase organic traffic, improve Google rankings, strengthen their social media presence, and build a powerful online presence through ethical, data-driven digital marketing strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              id="hero-ctas"
            >
              <Link
                to="/about"
                id="btn-hero-about-me"
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl px-6 py-3 text-xs sm:text-sm font-semibold tracking-normal shadow-md hover:shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
              >
                About Me
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                id="btn-hero-contact"
                className="border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900/60 rounded-xl px-6 py-3 text-xs sm:text-sm font-semibold tracking-normal shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
              >
                Hire Me
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </Link>
            </motion.div>

            {/* Micro proof badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-900/60 flex flex-wrap gap-x-5 gap-y-2.5 justify-center lg:justify-start text-[11px] text-zinc-550 dark:text-zinc-400 font-sans"
              id="hero-micro-proof"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-teal-500" />
                <span>100% Google Safe White-Hat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#0ea5e9]" />
                <span>Organic Rank Spikes Proven</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-500" />
                <span>SMO Optimization Synergies</span>
              </div>
            </motion.div>
          </div>

          {/* Main Hero Portrait Section with Premium Float Frame */}
          <div className="lg:col-span-7 flex items-center justify-center relative py-6 md:py-10" id="hero-portrait-section">
            {/* Soft radial gradient blurred glow behind the image to make it stand out */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] pointer-events-none z-0">
              <div className="absolute top-10 left-10 w-44 sm:w-72 h-44 sm:h-72 bg-cyan-400/20 dark:bg-cyan-500/15 rounded-full blur-[70px] sm:blur-[100px]" />
              <div className="absolute bottom-10 right-10 w-44 sm:w-72 h-44 sm:h-72 bg-blue-500/25 dark:bg-blue-600/15 rounded-full blur-[70px] sm:blur-[100px]" />
            </div>

            {/* Float container with glassmorphism frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[390px] aspect-[4/5] z-10"
            >
              {/* Outer Cyan/Blue glow and high-contrast backplate */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/25 via-emerald-400/15 to-indigo-500/25 rounded-[2.5rem] sm:rounded-[3rem] blur-3xl opacity-60 dark:opacity-45 pointer-events-none transition-all duration-1000" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-[2.2rem] sm:rounded-[2.7rem] blur-md opacity-25 dark:opacity-15 pointer-events-none" />

              {/* Floating animation wrapper */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full relative"
              >
                {/* Premium Modern Glassmorphism Frame */}
                <div className="w-full h-full rounded-[2.2rem] sm:rounded-[2.7rem] p-2 bg-white/40 dark:bg-zinc-900/50 backdrop-blur-2xl border border-white/60 dark:border-zinc-800/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.18)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] group overflow-hidden transition-all duration-700 hover:shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                  
                  {/* Subtle inner grid/gradient card */}
                  <div className="w-full h-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.3rem] bg-gradient-to-b from-zinc-100/50 to-zinc-200/50 dark:from-zinc-950/40 dark:to-zinc-900/40 relative">
                    {/* Tech mesh grid decoration */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                    
                    {/* Hero Portrait Image */}
                    <img
                      src={mohanPortrait}
                      alt="Mohan - SEO & SMO Specialist Portfolio Portrait"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop";
                      }}
                    />

                    {/* Subtle aesthetic overlay to enrich image tones */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/20 via-transparent to-transparent dark:from-zinc-950/20 pointer-events-none" />
                  </div>
                </div>

                {/* Elegant floating badges strategically positioned around the image to not cover the face */}
                {/* 1. Top-Left: SEO & SMO Specialist */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  whileHover={{ scale: 1.08, zIndex: 30 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-[12%] -left-6 sm:-left-12 group/badge z-20"
                >
                  <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/75 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/50 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(20,184,166,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover/badge:border-teal-500/50 group-hover/badge:shadow-[0_0_25px_rgba(20,184,166,0.35)] transition-all duration-300 cursor-help select-none">
                    <div className="absolute inset-0.5 rounded-full bg-gradient-to-tr from-teal-500/10 to-emerald-500/10 opacity-70 group-hover/badge:opacity-100 transition-opacity duration-300" />
                    <Rocket className="w-5 h-5 text-teal-600 dark:text-teal-400 z-10 animate-pulse" />
                  </div>
                  {/* Glassmorphic Slide-out Tooltip */}
                  <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 flex items-center z-30 opacity-0 scale-95 pointer-events-none group-hover/badge:opacity-100 group-hover/badge:scale-100 transition-all duration-300 origin-left">
                    <div className="w-1.5 h-3 border-y-[6px] border-y-transparent border-r-[6px] border-r-zinc-950 dark:border-r-white" />
                    <div className="px-3 py-1.5 bg-zinc-950/95 dark:bg-white text-white dark:text-zinc-950 text-[11px] font-sans font-bold rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-white/10 dark:border-zinc-200/60 whitespace-nowrap flex items-center gap-1.5">
                      <span>🚀</span>
                      <span>SEO & SMO Specialist</span>
                    </div>
                  </div>
                </motion.div>

                {/* 2. Top-Right: Google Search Console */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  whileHover={{ scale: 1.08, zIndex: 30 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-[26%] -right-6 sm:-right-12 group/badge z-20"
                >
                  <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/75 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/50 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(59,130,246,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover/badge:border-blue-500/50 group-hover/badge:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 cursor-help select-none">
                    <div className="absolute inset-0.5 rounded-full bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 opacity-70 group-hover/badge:opacity-100 transition-opacity duration-300" />
                    <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400 z-10 animate-bounce" />
                  </div>
                  {/* Glassmorphic Slide-out Tooltip */}
                  <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 flex items-center z-30 opacity-0 scale-95 pointer-events-none group-hover/badge:opacity-100 group-hover/badge:scale-100 transition-all duration-300 origin-right">
                    <div className="px-3 py-1.5 bg-zinc-950/95 dark:bg-white text-white dark:text-zinc-950 text-[11px] font-sans font-bold rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-white/10 dark:border-zinc-200/60 whitespace-nowrap flex items-center gap-1.5">
                      <span>📈</span>
                      <span>Google Search Console</span>
                    </div>
                    <div className="w-1.5 h-3 border-y-[6px] border-y-transparent border-l-[6px] border-l-zinc-950 dark:border-l-white" />
                  </div>
                </motion.div>

                {/* 3. Center-Left: Core Web Vitals */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ scale: 1.08, zIndex: 30 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-[44%] -left-8 sm:-left-16 group/badge z-20"
                >
                  <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/75 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/50 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(245,158,11,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover/badge:border-amber-500/50 group-hover/badge:shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all duration-300 cursor-help select-none">
                    <div className="absolute inset-0.5 rounded-full bg-gradient-to-tr from-amber-500/10 to-yellow-500/10 opacity-70 group-hover/badge:opacity-100 transition-opacity duration-300" />
                    <Zap className="w-5 h-5 text-amber-550 dark:text-amber-400 z-10 animate-pulse" />
                  </div>
                  {/* Glassmorphic Slide-out Tooltip */}
                  <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 flex items-center z-30 opacity-0 scale-95 pointer-events-none group-hover/badge:opacity-100 group-hover/badge:scale-100 transition-all duration-300 origin-left">
                    <div className="w-1.5 h-3 border-y-[6px] border-y-transparent border-r-[6px] border-r-zinc-950 dark:border-r-white" />
                    <div className="px-3 py-1.5 bg-zinc-950/95 dark:bg-white text-white dark:text-zinc-950 text-[11px] font-sans font-bold rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-white/10 dark:border-zinc-200/60 whitespace-nowrap flex items-center gap-1.5">
                      <span>⚡</span>
                      <span>Core Web Vitals</span>
                    </div>
                  </div>
                </motion.div>

                {/* 4. Center-Right: Google Analytics 4 */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                  whileHover={{ scale: 1.08, zIndex: 30 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-[58%] -right-8 sm:-right-16 group/badge z-20"
                >
                  <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/75 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/50 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(249,115,22,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover/badge:border-orange-500/50 group-hover/badge:shadow-[0_0_25px_rgba(249,115,22,0.35)] transition-all duration-300 cursor-help select-none">
                    <div className="absolute inset-0.5 rounded-full bg-gradient-to-tr from-orange-500/10 to-red-500/10 opacity-70 group-hover/badge:opacity-100 transition-opacity duration-300" />
                    <BarChart3 className="w-5 h-5 text-orange-600 dark:text-orange-400 z-10" />
                  </div>
                  {/* Glassmorphic Slide-out Tooltip */}
                  <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 flex items-center z-30 opacity-0 scale-95 pointer-events-none group-hover/badge:opacity-100 group-hover/badge:scale-100 transition-all duration-300 origin-right">
                    <div className="px-3 py-1.5 bg-zinc-950/95 dark:bg-white text-white dark:text-zinc-950 text-[11px] font-sans font-bold rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-white/10 dark:border-zinc-200/60 whitespace-nowrap flex items-center gap-1.5">
                      <span>📊</span>
                      <span>Google Analytics 4</span>
                    </div>
                    <div className="w-1.5 h-3 border-y-[6px] border-y-transparent border-l-[6px] border-l-zinc-950 dark:border-l-white" />
                  </div>
                </motion.div>

                {/* 5. Bottom-Left: Technical SEO */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  whileHover={{ scale: 1.08, zIndex: 30 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-[76%] -left-6 sm:-left-12 group/badge z-20"
                >
                  <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/75 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/50 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(99,102,241,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover/badge:border-indigo-500/50 group-hover/badge:shadow-[0_0_25px_rgba(99,102,241,0.35)] transition-all duration-300 cursor-help select-none">
                    <div className="absolute inset-0.5 rounded-full bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 opacity-70 group-hover/badge:opacity-100 transition-opacity duration-300" />
                    <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400 z-10" />
                  </div>
                  {/* Glassmorphic Slide-out Tooltip */}
                  <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 flex items-center z-30 opacity-0 scale-95 pointer-events-none group-hover/badge:opacity-100 group-hover/badge:scale-100 transition-all duration-300 origin-left">
                    <div className="w-1.5 h-3 border-y-[6px] border-y-transparent border-r-[6px] border-r-zinc-950 dark:border-r-white" />
                    <div className="px-3 py-1.5 bg-zinc-950/95 dark:bg-white text-white dark:text-zinc-950 text-[11px] font-sans font-bold rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-white/10 dark:border-zinc-200/60 whitespace-nowrap flex items-center gap-1.5">
                      <span>🔍</span>
                      <span>Technical SEO</span>
                    </div>
                  </div>
                </motion.div>

              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Premium "I've Worked With" Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-24 relative rounded-[2.5rem] overflow-hidden border border-zinc-200/50 dark:border-zinc-850 shadow-[0_30px_70px_rgba(0,0,0,0.02)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.45)] bg-gradient-to-tr from-zinc-50/90 via-white to-zinc-100/70 dark:from-zinc-950/75 dark:via-zinc-900/45 dark:to-zinc-950/50 backdrop-blur-3xl px-4 sm:px-10 py-12 sm:py-16 md:-mx-8 lg:-mx-16 xl:-mx-24"
          id="premium-clients-showcase"
        >
          {/* Soft abstract background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] pointer-events-none z-0 opacity-40 dark:opacity-30">
            <div className="absolute -top-12 left-1/4 w-80 h-80 bg-teal-400/10 dark:bg-teal-500/5 rounded-full blur-[100px]" />
            <div className="absolute -bottom-12 right-1/4 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Centered bold heading with decorative elements */}
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-teal-600 dark:text-teal-400 uppercase block mb-3">
                <Sparkles className="w-3.5 h-3.5 inline-block mr-1.5 animate-pulse text-teal-500" />
                Valued Clients & Collaborations
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-zinc-900 dark:text-white leading-none uppercase">
                I've Worked With
              </h2>
              <div className="h-1.5 w-16 bg-gradient-to-r from-teal-500 via-emerald-400 to-indigo-600 mx-auto mt-5 rounded-full shadow-sm" />
            </div>

            {/* Slider container with relative boundaries & swiping listeners */}
            <div 
              className="relative w-full overflow-hidden select-none"
              onTouchStart={handleClientTouchStart}
              onTouchEnd={handleClientTouchEnd}
            >
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-zinc-50/20 dark:from-zinc-950/20 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-zinc-50/20 dark:from-zinc-950/20 to-transparent z-10 pointer-events-none" />

              {/* Slider Track */}
              <div className="relative overflow-visible">
                <motion.div 
                  className="flex w-full"
                  animate={{ x: `-${activeClientIdx * 100}%` }}
                  transition={{ type: "spring", stiffness: 220, damping: 28 }}
                >
                  {[
                    {
                      name: "Acharya Ganesh",
                      logo: acharyaGaneshLogo,
                      fallback: <AcharyaGaneshSvg />,
                      category: "Astrology, Devotional & EdTech",
                      metric: "+608% Organics Scaling",
                      niche: "EdTech & Spiritual Consultation Platform",
                      metricsBadge: "Sub-Second Loading Timing",
                      summary: "Successfully compressed bulk content, deferred heavy render-blocking JS executes, styled elegant custom layout details, and bridged topical content gaps.",
                      results: [
                        "Drove a stellar 99/100 PageSpeed Core Web Vitals rating",
                        "Secured prominent Google Knowledge Graph snippets",
                        "Programmatic NLP keyword silos bypassed crawl limits"
                      ],
                      classGlow: "shadow-[0_0_50px_-10px_rgba(20,184,166,0.25)]",
                      glowHex: "#14b8a6"
                    },
                    {
                      name: "Hanish Bagga",
                      logo: hanishBaggaLogo,
                      fallback: <HanishBaggaSvg />,
                      category: "Consulting & Executive Mentorship",
                      metric: "+240% Course Registrations",
                      niche: "High-Ticket Enterprise Advisory",
                      metricsBadge: "100% Tracking Accuracy GTM",
                      summary: "Configured flawless Google Tag Manager purchase/order logging events, purged client-side measurement noise, and injected strict structured schema profiles.",
                      results: [
                        "Ranked #1 for regional Consulting Consulting search phrases",
                        "Eliminated transaction duplicate loops on analytic dashboards",
                        "Spurred direct organic advisory inbound traffic scale of +544%"
                      ],
                      classGlow: "shadow-[0_0_50px_-10px_rgba(249,115,22,0.25)]",
                      glowHex: "#f97316"
                    },
                    {
                      name: "ThinkBizz Hightech",
                      logo: thinkbizLogo,
                      fallback: <ThinkBizzSvg />,
                      category: "SaaS & Directory Portal",
                      metric: "100% Crawl Indexability",
                      niche: "Directory Portal & Directory SaaS Ecosystem",
                      metricsBadge: "Zero Index Errors",
                      summary: "Architected modern canonical hierarchy rules, restaged automated sitemaps, solved heavy pagination issues, and expanded semantic coverage mapping.",
                      results: [
                        "Recovered 100% perfect crawl efficiency scoring metrics",
                        "Successfully indexated 50,000+ custom list pages",
                        "Bypassed legacy directory search crawler bottlenecking"
                      ],
                      classGlow: "shadow-[0_0_50px_-10px_rgba(168,85,247,0.25)]",
                      glowHex: "#a855f7"
                    }
                  ].map((partner, pIdx) => (
                    <div 
                      key={pIdx} 
                      className="w-full shrink-0 px-2 sm:px-6 md:px-12"
                    >
                      <div className={`mx-auto max-w-5xl rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-2xl p-6 sm:p-10 ${partner.classGlow} hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300`}>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
                          
                          {/* Col 1: Prominent Logo, Niche, Category */}
                          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                            <div className="relative group/logo">
                              {/* Ambient animated glow ring behind logo */}
                              <div 
                                className="absolute -inset-1.5 rounded-3xl blur-md opacity-25 group-hover/logo:opacity-50 transition duration-500 animate-pulse" 
                                style={{ backgroundColor: partner.glowHex }}
                              />
                              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-zinc-50 dark:bg-zinc-950 p-2 border border-zinc-200/60 dark:border-zinc-800/80 shadow-md flex items-center justify-center overflow-hidden shrink-0 group-hover/logo:scale-105 transition-transform duration-300">
                                {partner.logo ? (
                                  <img 
                                    src={partner.logo} 
                                    alt={`${partner.name} Logo`} 
                                    className="w-full h-full object-contain"
                                    referrerPolicy="no-referrer"
                                  />
                                ) : (
                                  partner.fallback
                                )}
                              </div>
                            </div>

                            <div className="space-y-1">
                              <span className="text-[10px] font-mono font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase block">
                                {partner.category}
                              </span>
                              <h3 className="font-sans font-black text-xl sm:text-2xl text-zinc-900 dark:text-white leading-tight">
                                {partner.name}
                              </h3>
                              <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono">
                                Role: SEO Consultant
                              </p>
                            </div>
                          </div>

                          {/* Col 2: Metric highlight, detailed bullets list */}
                          <div className="md:col-span-8 space-y-5">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                              <div className="space-y-0.5">
                                <span className="text-[9px] font-mono tracking-widest font-black text-zinc-400 uppercase block">
                                  Primary Metric Scaled
                                </span>
                                <span className="text-xl sm:text-2xl font-sans font-black tracking-tight text-emerald-600 dark:text-emerald-400">
                                  {partner.metric}
                                </span>
                              </div>
                              <span className="self-start sm:self-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] font-mono font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                                {partner.metricsBadge}
                              </span>
                            </div>

                            <p className="text-zinc-600 dark:text-zinc-350 text-xs sm:text-[13px] leading-relaxed font-semibold">
                              {partner.summary}
                            </p>

                            <div className="space-y-2.5">
                              <h4 className="text-[10px] sm:text-xs font-mono font-bold text-zinc-500 tracking-wider uppercase">
                                Verified Results Delivered
                              </h4>
                              <ul className="grid grid-cols-1 gap-2">
                                {partner.results.map((bullet, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-50/50 dark:bg-zinc-900/30 p-2.5 rounded-xl border border-zinc-150/40 dark:border-zinc-805/40 transition-all hover:translate-x-1 duration-200">
                                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="font-semibold text-zinc-800 dark:text-zinc-300 leading-snug">{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Slider Arrow Controls */}
              <div className="absolute inset-y-0 left-0 flex items-center md:pl-2 z-20">
                <button
                  onClick={handlePrevClient}
                  className="w-10 h-10 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-md flex items-center justify-center hover:scale-105 active:scale-95 text-zinc-700 dark:text-zinc-300 transition-all cursor-pointer focus:outline-none"
                  aria-label="Previous Partner"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center md:pr-2 z-20">
                <button
                  onClick={handleNextClient}
                  className="w-10 h-10 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-md flex items-center justify-center hover:scale-105 active:scale-95 text-zinc-700 dark:text-zinc-300 transition-all cursor-pointer focus:outline-none"
                  aria-label="Next Partner"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Pagination Indicators / DOTS */}
            <div className="flex gap-2.5 pt-8 select-none">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveClientIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeClientIdx === idx 
                      ? "bg-teal-500 dark:bg-teal-400 w-7" 
                      : "bg-zinc-300 dark:bg-zinc-750 hover:bg-zinc-400 dark:hover:bg-zinc-600 w-2.5"
                  }`}
                  aria-label={`Jump to partner ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </motion.div>

        {/* 🛠 My Digital Marketing Stack Section */}
        <div className="mt-20 border-t border-zinc-150/70 dark:border-zinc-900/80 pt-16 animate-fade-in" id="marketing-stack">
          <div className="text-center max-w-3xl mx-auto mb-10 px-4">
            <h2 className="mt-3 font-sans font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white tracking-tight flex items-center justify-center gap-2">
              🛠 My Digital Marketing Stack
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 font-sans font-medium">
              The professional tools I use every day to research, analyze, optimize, monitor, and grow websites.
            </p>
          </div>

          {/* Infinite Scroll Slider */}
          <div className="relative w-full overflow-hidden py-4 hover-pause -mx-4 sm:-mx-6 lg:-mx-8">
            {/* Soft fade gradients on both ends of the slider */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50/95 dark:from-zinc-950/95 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50/95 dark:from-zinc-950/95 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex gap-6 items-center py-2">
              {DOUBLE_STACK_TOOLS.map((tool, idx) => (
                <div
                  key={`${tool.name}-${idx}`}
                  className="flex flex-col items-center justify-center p-5 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded-2xl w-40 sm:w-48 h-28 shrink-0 shadow-xs hover:shadow-md hover:border-teal-500/20 dark:hover:border-teal-500/10 transition-all duration-300 select-none cursor-default"
                >
                  <div className="flex items-center justify-center h-12 w-12 text-zinc-700 dark:text-zinc-200">
                    {tool.logo}
                  </div>
                  <span className="mt-3 font-sans text-[10.5px] sm:text-[11px] font-semibold text-zinc-650 dark:text-zinc-300 tracking-tight text-center truncate w-full">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
