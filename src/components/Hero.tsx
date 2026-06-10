import React, { useState, useEffect } from "react";
import { ArrowUpRight, Search, TrendingUp, CheckCircle, Smartphone, BarChart3, ArrowRight, Zap } from "lucide-react";
import { motion } from "motion/react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const performanceData = [
  { month: "Jan", clicks: 12000, impressions: 85000, position: 24 },
  { month: "Feb", clicks: 15400, impressions: 110000, position: 19 },
  { month: "Mar", clicks: 23000, impressions: 180000, position: 14 },
  { month: "Apr", clicks: 38200, impressions: 290000, position: 8.5 },
  { month: "May", clicks: 54100, impressions: 430050, position: 4.2 },
  { month: "Jun", clicks: 76800, impressions: 640000, position: 2.1 },
];

export default function Hero() {
  const [activeMetric, setActiveMetric] = useState<"clicks" | "impressions" | "position">("clicks");
  const [liveCounter, setLiveCounter] = useState(76842);

  // Simulate real-time click tracking on Mohan's portfolio to show dynamic energy
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveCounter((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
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
              className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 border border-teal-200/50 dark:border-teal-900/40 text-teal-700 dark:text-teal-300 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide w-fit mx-auto lg:mx-0 mb-6"
            >
              <Zap className="w-3.5 h-3.5 fill-teal-600 dark:fill-teal-400" />
              <span>Rank #1. Drive Revenue. Scale Trust.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="hero-headline"
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-5xl tracking-tight leading-[1.1] text-zinc-900 dark:text-white"
            >
              Helping Businesses Grow Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">Data-Driven SEO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="hero-subheadline"
              className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed"
            >
              I help websites increase organic traffic, rankings, leads, and revenue using proven, white-hat SEO strategies and proprietary Core Web Vitals optimization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              id="hero-ctas"
            >
              <button
                onClick={() => handleScrollTo("#case-studies")}
                id="btn-hero-case-studies"
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl px-6 py-3.5 text-sm font-semibold tracking-normal shadow-md hover:shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo("#contact")}
                id="btn-hero-consultation"
                className="border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900/60 rounded-xl px-6 py-3.5 text-sm font-semibold tracking-normal shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              >
                Book SEO Consultation
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </button>
            </motion.div>

            {/* Micro proof badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-zinc-200/60 dark:border-zinc-900/60 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-xs text-zinc-500 dark:text-zinc-400 font-sans"
              id="hero-micro-proof"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>100% Google Safe (White-Hat)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-indigo-500" />
                <span>10x Growth Case Studies</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                <span>E-E-A-T SEO Framework</span>
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
                  <span>clickfordigital.com/gsc-dashboard</span>
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
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setActiveMetric("clicks")}
                    id="tab-metric-clicks"
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer focus:outline-none ${
                      activeMetric === "clicks"
                        ? "border-teal-500 ring-2 ring-teal-500/15 bg-teal-500/5"
                        : "border-zinc-100 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Total Clicks</span>
                      <TrendingUp className="w-3.5 h-3.5 text-teal-500" />
                    </div>
                    <div className="mt-1 font-mono font-extrabold text-xl sm:text-2xl text-zinc-950 dark:text-white">
                      {liveCounter.toLocaleString()}
                    </div>
                    <div className="text-[10px] font-mono text-teal-600 dark:text-teal-400 font-semibold mt-1 flex items-center gap-0.5">
                      +142% vs previous period
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveMetric("impressions")}
                    id="tab-metric-impressions"
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer focus:outline-none ${
                      activeMetric === "impressions"
                        ? "border-indigo-500 ring-2 ring-indigo-500/15 bg-indigo-500/5"
                        : "border-zinc-100 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Impressions</span>
                      <BarChart3 className="w-3.5 h-3.5 text-indigo-500" />
                    </div>
                    <div className="mt-1 font-mono font-extrabold text-xl sm:text-2xl text-zinc-950 dark:text-white">
                      (2.45M)
                    </div>
                    <div className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                      +310% search impressions
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveMetric("position")}
                    id="tab-metric-position"
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer focus:outline-none ${
                      activeMetric === "position"
                        ? "border-amber-500 ring-2 ring-amber-500/15 bg-amber-500/5"
                        : "border-zinc-100 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Avg. Position</span>
                      <Smartphone className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <div className="mt-1 font-mono font-extrabold text-xl sm:text-2xl text-zinc-950 dark:text-white">
                      2.1
                    </div>
                    <div className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-semibold mt-1">
                      Top #3 Organic Coverage
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
      </div>
    </section>
  );
}
