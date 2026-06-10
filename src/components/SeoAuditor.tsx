import React, { useState } from "react";
import { Search, RotateCcw, AlertTriangle, CheckCircle2, ChevronRight, BarChart3, HelpCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AuditResult } from "../types";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

export default function SeoAuditor() {
  const [url, setUrl] = useState("");
  const [keywords, setKeywords] = useState("");
  const [industry, setIndustry] = useState("SaaS & Custom Technology");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [errorObj, setErrorObj] = useState<string | null>(null);

  const triggerAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setErrorObj("Please insert a valid website URL address.");
      return;
    }

    setLoading(true);
    setErrorObj(null);
    setResult(null);

    try {
      const response = await fetch("/api/seo-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), keywords: keywords.trim(), industry }),
      });

      const resData = await response.json();
      if (resData.success && resData.data) {
        setResult(resData.data);
      } else {
        setErrorObj(resData.error || "SEO Audit generation could not process successfully. Try again later.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorObj("Connection error. Could not reach Mohan's AI SEO Audit Server.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUrl("");
    setKeywords("");
    setResult(null);
    setErrorObj(null);
  };

  return (
    <section id="audit" className="py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase block">
            INTERACTIVE AI LEAD MAGNET
          </span>
          <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight animate-pulse">
            Free Live AI Website SEO Auditor
          </h2>
          <p className="mt-4 text-zinc-550 dark:text-zinc-400 text-sm sm:text-base font-sans font-medium leading-relaxed">
            Submit your domain URL, primary targeted keywords, and vertical below. Mohan's server-side AI analyst will execute an audit checklist within 10 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start" id="auditor-panel">
          
          {/* Form input - Left Column */}
          <div className="lg:col-span-4 bg-zinc-50/50 dark:bg-zinc-900/40 p-6 sm:p-8 rounded-2xl border border-zinc-150/80 dark:border-zinc-900 flex flex-col justify-between">
            <span className="text-[10px] font-mono tracking-widest font-extrabold text-zinc-400 dark:text-zinc-505 uppercase block mb-6">
              AUDIT SCOPE ENGINE
            </span>

            <form onSubmit={triggerAudit} className="space-y-5">
              <div>
                <label className="text-[10.5px] font-mono tracking-wider font-extrabold text-zinc-500 dark:text-zinc-450 uppercase block mb-1.5">
                  Target Website URL <span className="text-teal-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400 text-xs sm:text-sm font-mono select-none">
                    https://
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    disabled={loading}
                    className="w-full pl-16 pr-3.5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-905 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10.5px] font-mono tracking-wider font-extrabold text-zinc-500 dark:text-zinc-450 uppercase block mb-1.5">
                  Focus Target Keywords
                </label>
                <input
                  type="text"
                  placeholder="E.g., enterprise saas, local dental clinic"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  disabled={loading}
                  className="w-full px-3.5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-905 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="text-[10.5px] font-mono tracking-wider font-extrabold text-zinc-500 dark:text-zinc-450 uppercase block mb-1.5">
                  Industry Vertical
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  disabled={loading}
                  className="w-full px-3.5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-905 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 disabled:opacity-50 cursor-pointer"
                >
                  <option value="SaaS & Custom Technology">SaaS & Custom Technology</option>
                  <option value="Legal & Advisory Services">Legal & Advisory Services</option>
                  <option value="eCommerce & Retail brands">eCommerce & Retail brands</option>
                  <option value="Local Dentistry & Health packs">Local Dentistry & Health packs</option>
                  <option value="Real Estate & Broker Networks">Real Estate & Broker Networks</option>
                </select>
              </div>

              {errorObj && (
                <div className="p-3 bg-red-650/10 border border-red-600/10 rounded-xl text-[11px] text-red-600 dark:text-red-400 leading-normal font-sans">
                  {errorObj}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                id="btn-run-audit"
                className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white p-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none focus:outline-none"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4.5 h-4.5 animate-spin" />
                    <span>Crawl auditing URL...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4.5 h-4.5" />
                    <span>Run Complete AI SEO Audit</span>
                  </>
                )}
              </button>

              {result && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer focus:outline-none"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Auditor</span>
                </button>
              )}
            </form>
          </div>

          {/* Results panel container - Right Column */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white dark:bg-zinc-900 border border-zinc-150/85 dark:border-zinc-850 rounded-2xl shadow-xl overflow-hidden"
                >
                  {/* Results Header */}
                  <div className="p-6 sm:p-8 border-b border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-zinc-50/20 dark:bg-zinc-900/60">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono tracking-widest font-extrabold text-teal-600 dark:text-teal-400 uppercase">
                        AUDITED TARGET DOMAIN:
                      </span>
                      <span className="font-sans font-extrabold text-xl sm:text-2xl text-zinc-950 dark:text-white mt-1 break-all">
                        {result.url}
                      </span>
                    </div>

                    {/* Circular Diagnostic Score Indicator */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="relative w-16 h-16 rounded-full border-4 border-teal-500/20 flex items-center justify-center font-mono text-xl sm:text-2xl font-black text-teal-600 dark:text-teal-400">
                        {result.score}
                        <span className="text-[10px] text-zinc-450 font-normal absolute bottom-1 right-2">/100</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-mono font-bold text-zinc-400 uppercase">
                          SEO Score
                        </span>
                        <span className="text-[9.5px] font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-tight mt-0.5">
                          {result.score > 75 ? "Healthy Standard" : "Attention Required"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-8">
                    {/* Findings summary block */}
                    <div>
                      <span className="text-[10px] font-mono tracking-widest font-extrabold text-zinc-400 dark:text-zinc-505 uppercase block mb-2.5">
                        Mohan’s Strategic Summary:
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-750 dark:text-zinc-300 leading-relaxed font-sans font-medium">
                        {result.summary}
                      </p>
                    </div>

                    {/* Critical priorities */}
                    <div className="border-t border-zinc-100 dark:border-zinc-850 pt-6">
                      <span className="text-[10px] font-mono tracking-widest font-extrabold text-red-500 uppercase block mb-3.5">
                        Top 3 Critical Bottlenecks (Fix First!):
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {result.criticalIssues.map((issue, idx) => (
                          <li
                            key={idx}
                            className="bg-red-500/5 text-zinc-800 dark:text-zinc-300 p-3 rounded-xl border border-red-500/10 text-xs flex items-start gap-2 leading-relaxed"
                          >
                            <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                            <span className="font-medium leading-normal">{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical & On-page tables */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-zinc-100 dark:border-zinc-850 pt-6">
                      {/* On-Page Audits */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono tracking-widest font-extrabold text-teal-600 dark:text-teal-400 uppercase block mb-1">
                          Semantic & On-Page checklist:
                        </span>
                        <div className="space-y-2.5">
                          {result.onPageChecklist.map((onP, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-850/60 bg-zinc-50/20 dark:bg-zinc-900/30">
                              <div className="flex items-center justify-between">
                                <span className="font-sans font-bold text-xs text-zinc-900 dark:text-white leading-normal">
                                  {onP.check}
                                </span>
                                <span className={`text-[8.5px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                                  onP.status === "passed"
                                    ? "bg-green-500/10 text-green-600"
                                    : onP.status === "warning"
                                    ? "bg-amber-500/10 text-amber-600"
                                    : "bg-red-500/10 text-red-600"
                                }`}>
                                  {onP.status}
                                </span>
                              </div>
                              <p className="text-[10.5px] text-zinc-500 dark:text-zinc-400 leading-normal mt-1.5 font-sans font-medium">
                                {onP.recommendation}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Audits */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono tracking-widest font-extrabold text-indigo-600 dark:text-indigo-400 uppercase block mb-1">
                          Technical SEO checklist:
                        </span>
                        <div className="space-y-2.5">
                          {result.technicalChecklist.map((tech, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-850/60 bg-zinc-50/20 dark:bg-zinc-900/30">
                              <div className="flex items-center justify-between">
                                <span className="font-sans font-bold text-xs text-zinc-900 dark:text-white leading-normal">
                                  {tech.check}
                                </span>
                                <span className={`text-[8.5px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                                  tech.status === "passed"
                                    ? "bg-green-500/10 text-green-600"
                                    : tech.status === "warning"
                                    ? "bg-amber-500/10 text-amber-600"
                                    : "bg-red-500/10 text-red-600"
                                }`}>
                                  {tech.status}
                                </span>
                              </div>
                              <p className="text-[10.5px] text-zinc-500 dark:text-zinc-400 leading-normal mt-1.5 font-sans font-medium">
                                {tech.recommendation}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Traffic potential forecast & blogs ideas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-100 dark:border-zinc-850 pt-6">
                      
                      {/* Highly-valued content blog suggestions */}
                      <div className="space-y-3.5">
                        <span className="text-[10px] font-mono tracking-widest font-extrabold text-teal-650 dark:text-teal-450 uppercase block mb-2">
                          Primary Article suggestions targeting keywords:
                        </span>
                        <ul className="space-y-2.5">
                          {result.contentSuggestions.map((sug, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 font-sans leading-normal">
                              <span className="w-5 h-5 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 text-[10.5px] font-mono font-bold flex items-center justify-center shrink-0">
                                {idx + 1}
                              </span>
                              <span className="font-medium leading-relaxed">{sug}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Dynamic Traffic Growth Forecast Chart */}
                      <div className="bg-zinc-50 dark:bg-zinc-900/60 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-850/60 flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[9.5px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-505 uppercase">
                            Organic Traffic Projection (6 Months)
                          </span>
                          <span className="text-[9.5px] font-mono font-bold text-teal-600 dark:text-teal-450">
                            Surging Potential
                          </span>
                        </div>

                        {/* Forecast chart body */}
                        <div className="h-32 sm:h-36 relative select-none">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={result.trafficForecast} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                              <defs>
                                <linearGradient id="potentialTrafficGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.2} />
                                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.0} />
                                </linearGradient>
                              </defs>
                              <XAxis
                                dataKey="month"
                                stroke="#888"
                                fontSize={9}
                                tickLine={false}
                                axisLine={false}
                                style={{ fontFamily: 'monospace' }}
                              />
                              <YAxis
                                stroke="#888"
                                fontSize={9}
                                tickLine={false}
                                axisLine={false}
                                style={{ fontFamily: 'monospace' }}
                              />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: "#18181b",
                                  border: "none",
                                  color: "#fff",
                                  fontSize: "9px",
                                  fontFamily: "monospace"
                                }}
                              />
                              <Area
                                type="monotone"
                                dataKey="potentialTraffic"
                                stroke="#14b8a6"
                                strokeWidth={2.5}
                                fillOpacity={1}
                                fill="url(#potentialTrafficGrad)"
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Consultation footer trigger */}
                  <div className="px-6 sm:p-6 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                    <span className="font-sans font-medium text-zinc-500 dark:text-zinc-400">
                      Want to implement these recommendations? Let's build a custom plan.
                    </span>
                    <a
                      href="#contact"
                      className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold px-4 py-2.5 rounded-xl hover:bg-teal-600 dark:hover:bg-teal-500 dark:hover:text-white hover:text-white transition shadow-sm w-full sm:w-auto text-center cursor-pointer select-none"
                    >
                      Book Strategy Consultation
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-zinc-50/50 dark:bg-zinc-900/10 rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-900 h-96 flex flex-col items-center justify-center text-center p-6 sm:p-12 select-none"
                >
                  <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-400 flex items-center justify-center mb-4">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-bold text-zinc-800 dark:text-zinc-300">
                    Awaiting Audit Parameters
                  </h3>
                  <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-455 font-medium max-w-sm leading-relaxed">
                    Insert your website domain parameters in the scoping engine on the left to activate the AI Crawl analysis sequence.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
