import React, { useState, useEffect } from "react";
import { ArrowUpRight, Search, TrendingUp, CheckCircle, Smartphone, BarChart3, ArrowRight, Zap, Percent, ShieldCheck, Globe, Cog } from "lucide-react";
import { motion } from "motion/react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Link } from "./Router";

const performanceData = [
  { month: "Jan", clicks: 110000, impressions: 850000, position: 14.5, ctr: 8.2 },
  { month: "Feb", clicks: 125000, impressions: 1100000, position: 13.1, ctr: 8.8 },
  { month: "Mar", clicks: 140000, impressions: 1300000, position: 12.2, ctr: 9.5 },
  { month: "Apr", clicks: 160000, impressions: 1450000, position: 11.0, ctr: 10.1 },
  { month: "May", clicks: 185000, impressions: 1650000, position: 10.3, ctr: 10.6 },
  { month: "Jun", clicks: 210000, impressions: 1850000, position: 9.8, ctr: 11.1 },
];

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
  const [activeMetric, setActiveMetric] = useState<"clicks" | "impressions" | "ctr" | "position">("clicks");
  const [liveCounter, setLiveCounter] = useState(879142);

  // Simulate real-time click tracking on Mohan's portfolio to show dynamic energy
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveCounter((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans font-medium"
            >
              I've had the opportunity to work on projects for brands including <strong className="text-zinc-900 dark:text-white">Acharya Ganesh</strong>, <strong className="text-zinc-900 dark:text-white">Hanish Bagga</strong>, and <strong className="text-zinc-900 dark:text-white">ThinkBizz</strong>, delivering sustainable growth through Technical SEO, On-Page SEO, Core Web Vitals optimization, Content Strategy, and Social Media Optimization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
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

          {/* Interactive GSC Dashboard Mockup - Right Column */}
          <div className="lg:col-span-7" id="dashboard-mockup">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800/80 shadow-2xl overflow-hidden"
            >
               {/* Browser Window Chrome */}
              <div className="bg-zinc-50 dark:bg-zinc-900/90 px-4 py-3 border-b border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3" />
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="bg-zinc-200/40 dark:bg-zinc-800/50 text-zinc-400 dark:text-zinc-500 text-[10px] font-mono py-1 px-8 rounded-md select-none tracking-wider flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" />
                  <span>hanishbagga.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping"></span>
                  <span className="text-[10px] font-mono font-medium text-teal-600 dark:text-teal-400">LIVE</span>
                </div>
              </div>

              {/* GSC Controls / Metrics Header */}
              <div className="p-4 sm:p-6 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800/50">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-sans text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                      Search Console Overview
                    </span>
                    <span className="text-[10.5px] text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                      Property: All web referral channels
                    </span>
                  </div>
                  {/* Date range badge */}
                  <span className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-200/30 dark:border-zinc-700/30">
                    Last 6 Months vs. Previous
                  </span>
                </div>

                {/* Metrics tab selector */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                  <button
                    onClick={() => setActiveMetric("clicks")}
                    id="tab-metric-clicks"
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer focus:outline-none ${
                      activeMetric === "clicks"
                        ? "border-teal-500 ring-2 ring-teal-500/15 bg-teal-500/5"
                        : "border-zinc-100 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Total Clicks</span>
                      <TrendingUp className="w-3.5 h-3.5 text-teal-500" />
                    </div>
                    <div className="mt-1 font-mono font-extrabold text-base sm:text-lg text-zinc-950 dark:text-white">
                      {liveCounter.toLocaleString()}
                    </div>
                    <div className="text-[9px] font-mono text-teal-600 dark:text-teal-400 font-semibold mt-1 flex items-center gap-0.5 whitespace-nowrap overflow-hidden">
                      +142% vs group
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveMetric("impressions")}
                    id="tab-metric-impressions"
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer focus:outline-none ${
                      activeMetric === "impressions"
                        ? "border-indigo-500 ring-2 ring-indigo-500/15 bg-indigo-500/5"
                        : "border-zinc-100 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Impressions</span>
                      <BarChart3 className="w-3.5 h-3.5 text-indigo-500" />
                    </div>
                    <div className="mt-1 font-mono font-extrabold text-base sm:text-lg text-zinc-950 dark:text-white">
                      7.9M
                    </div>
                    <div className="text-[9px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold mt-1 whitespace-nowrap overflow-hidden">
                      +310% search
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveMetric("ctr")}
                    id="tab-metric-ctr"
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer focus:outline-none ${
                      activeMetric === "ctr"
                        ? "border-violet-500 ring-2 ring-violet-500/15 bg-violet-500/5"
                        : "border-zinc-100 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Avg. CTR</span>
                      <Percent className="w-3.5 h-3.5 text-violet-500" />
                    </div>
                    <div className="mt-1 font-mono font-extrabold text-base sm:text-lg text-zinc-950 dark:text-white">
                      11.1%
                    </div>
                    <div className="text-[9px] font-mono text-violet-600 dark:text-violet-400 font-semibold mt-1 whitespace-nowrap overflow-hidden">
                      +18.4% rates
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveMetric("position")}
                    id="tab-metric-position"
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer focus:outline-none ${
                      activeMetric === "position"
                        ? "border-amber-500 ring-2 ring-amber-500/15 bg-amber-500/5"
                        : "border-zinc-100 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Avg. Position</span>
                      <Smartphone className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <div className="mt-1 font-mono font-extrabold text-base sm:text-lg text-zinc-950 dark:text-white">
                      9.8
                    </div>
                    <div className="text-[9px] font-mono text-amber-600 dark:text-amber-400 font-semibold mt-1 whitespace-nowrap overflow-hidden">
                      Top #10 Organic
                    </div>
                  </button>
                </div>
              </div>

              {/* Chart Visual Content */}
              <div className="p-4 sm:p-6 bg-zinc-50/50 dark:bg-zinc-900/40 h-72 sm:h-80 relative select-none">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
                    <defs>
                      <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="colorCtr" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="colorPosition" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" className="dark:hidden" />
                    <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" className="hidden dark:block" />
                    <XAxis
                      dataKey="month"
                      stroke="#888888"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      style={{ fontFamily: 'var(--font-mono, monospace)' }}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      style={{ fontFamily: 'var(--font-mono, monospace)' }}
                      reversed={activeMetric === "position"} // Lower rank is better position
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#18181b",
                        border: "none",
                        borderRadius: "10px",
                        color: "#fff",
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "12px",
                      }}
                      itemStyle={{ color: "#14b8a6" }}
                    />

                    {activeMetric === "clicks" && (
                      <Area
                        type="monotone"
                        dataKey="clicks"
                        stroke="#14b8a6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorClicks)"
                      />
                    )}

                    {activeMetric === "impressions" && (
                      <Area
                        type="monotone"
                        dataKey="impressions"
                        stroke="#6366f1"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorImpressions)"
                      />
                    )}

                    {activeMetric === "ctr" && (
                      <Area
                        type="monotone"
                        dataKey="ctr"
                        stroke="#8b5cf6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorCtr)"
                      />
                    )}

                    {activeMetric === "position" && (
                      <Area
                        type="monotone"
                        dataKey="position"
                        stroke="#f59e0b"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorPosition)"
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Dashboard footer metrics */}
              <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800/50 flex flex-wrap gap-4 items-center justify-between text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
                <span>⚡ Growth multiplier: 5.4x in 6 Months</span>
                <span>SEO System Safe: Checked</span>
              </div>
            </motion.div>
          </div>
        </div>

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
