import React, { useState } from "react";
import { CaseStudy } from "../types";
import { ArrowUpRight, Check, TrendingUp, Calendar, Network, Tag, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

const caseStudiesList: CaseStudy[] = [
  {
    id: "case-1",
    websiteName: "FlowSync.ai",
    industry: "B2B SaaS / Productivity",
    duration: "6 Months Plan",
    challenges: [
      "Stuck at the bottom of Page 2 for primary high-intent transactional terms.",
      "High LCP (Largest Contentful Paint) scoring, resulting in high organic bounce rates.",
      "Fragmented, thin blog content with zero structural topic hierarchy."
    ],
    strategy: [
      "Created structured topic hubs focused on operational automation search query strings.",
      "Engineered clean Core Web Vitals (optimized font caching, lazy image rendering).",
      "Drafted programmatic internal semantic linking webs passing PageRank to transactional targets."
    ],
    results: {
      trafficIncrease: "+466%",
      keywordRankings: "1.4K → 6.2K",
      conversionGrowth: "+185%",
      beforeTrafficCount: 12000,
      afterTrafficCount: 68000,
      beforeKeywordsCount: 1400,
      afterKeywordsCount: 6200
    },
    growthData: [
      { month: "Month 1", traffic: 12000, keywords: 1400 },
      { month: "Month 2", traffic: 16500, keywords: 1900 },
      { month: "Month 3", traffic: 24000, keywords: 2800 },
      { month: "Month 4", traffic: 39000, keywords: 3900 },
      { month: "Month 5", traffic: 53000, keywords: 5100 },
      { month: "Month 6", traffic: 68000, keywords: 6200 }
    ]
  },
  {
    id: "case-2",
    websiteName: "MedKitExpress.com",
    industry: "Medical Supplies / eCommerce",
    duration: "9 Months Plan",
    challenges: [
      "Massive drop in key product indexation following a core algorithmic update.",
      "Toxic links from legacy spam campaigns triggering ranking suppression filters.",
      "High bounce rate on checkouts from slow script executions."
    ],
    strategy: [
      "Injected custom product schemas matching the latest structured JSON-LD specifications.",
      "Executed a comprehensive backlinks cleanup and disavowed toxic referrers.",
      "Built 'The Complete Medical Supply Blueprint'—an authoritative, E-E-A-T hub for professional buyers."
    ],
    results: {
      trafficIncrease: "+308%",
      keywordRankings: "4.5K → 18.4K",
      conversionGrowth: "+210%",
      beforeTrafficCount: 45000,
      afterTrafficCount: 184000,
      beforeKeywordsCount: 4500,
      afterKeywordsCount: 18400
    },
    growthData: [
      { month: "Month 1", traffic: 45000, keywords: 4500 },
      { month: "Month 3", traffic: 62000, keywords: 6800 },
      { month: "Month 5", traffic: 98000, keywords: 10400 },
      { month: "Month 7", traffic: 135000, keywords: 14000 },
      { month: "Month 9", traffic: 184000, keywords: 18400 }
    ]
  },
  {
    id: "case-3",
    websiteName: "ApexDentalGroup.com",
    industry: "Local Health Care / Clinic Network",
    duration: "4 Months Plan",
    challenges: [
      "Isolated search patterns restricted purely to immediate brand name queries.",
      "Discrepancies in local citation addresses (NAP) leading to low Google Map pack visibility.",
      "No specialized geo-targeted search content for adjacent high-income suburbs."
    ],
    strategy: [
      "Restructured Google Business Profile accounts and optimized patient review retrieval methods.",
      "Synced directory maps and local coordinates utilizing exact NAP data standards.",
      "Created highly targeted local guides answering regional medical questions in suburbs."
    ],
    results: {
      trafficIncrease: "+320% Clicks",
      keywordRankings: "120 → 840 Local",
      conversionGrowth: "+240% Calls",
      beforeTrafficCount: 2100,
      afterTrafficCount: 8800,
      beforeKeywordsCount: 120,
      afterKeywordsCount: 840
    },
    growthData: [
      { month: "Month 1", traffic: 2100, keywords: 120 },
      { month: "Month 2", traffic: 3400, keywords: 280 },
      { month: "Month 3", traffic: 5900, keywords: 520 },
      { month: "Month 4", traffic: 8800, keywords: 840 }
    ]
  }
];

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>("case-1");

  return (
    <section id="case-studies" className="py-24 bg-slate-50/50 dark:bg-zinc-950/40 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase block">
            VERIFIED CASE STUDIES
          </span>
          <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Our SEO Footprint: Client Growth Cases
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-sm sm:text-base font-sans font-medium">
            Explore authentic ranking audits and organic traffic charts from click ClickForDigital campaigns.
          </p>
        </div>

        {/* Case Studies grid/accordion combination */}
        <div className="space-y-6" id="case-studies-accordion">
          {caseStudiesList.map((cs) => {
            const isExpanded = expandedId === cs.id;
            return (
              <motion.div
                key={cs.id}
                layout="position"
                className={`bg-white dark:bg-zinc-900 rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${
                  isExpanded
                    ? "border-teal-500/50 dark:border-teal-500/30 shadow-md ring-2 ring-teal-500/5"
                    : "border-zinc-200/60 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                {/* Header Block click trigger */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : cs.id)}
                  id={`trigger-${cs.id}`}
                  className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/55 flex items-center justify-center text-teal-600 dark:text-teal-400 font-mono font-extrabold text-sm shrink-0">
                      {cs.websiteName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-sans font-extrabold text-xl text-zinc-900 dark:text-white">
                          {cs.websiteName}
                        </span>
                        <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                          {cs.industry}
                        </span>
                      </div>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1.5 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Timeline: <strong>{cs.duration}</strong></span>
                      </p>
                    </div>
                  </div>

                  {/* Summary Outcome results overview */}
                  <div className="flex items-center gap-6 sm:gap-10">
                    <div className="text-left md:text-right">
                      <span className="text-[10px] items-center gap-1 font-mono tracking-wider font-extrabold text-zinc-400 uppercase block">
                        TRAFFIC SURGE
                      </span>
                      <span className="font-mono font-black text-xl sm:text-2xl text-teal-600 dark:text-teal-400 flex items-center gap-1 md:justify-end mt-0.5">
                        {cs.results.trafficIncrease}
                        <TrendingUp className="w-4 h-4 animate-bounce" />
                      </span>
                    </div>

                    <div className="h-10 w-[1px] bg-zinc-100 dark:bg-zinc-800 hidden sm:block"></div>

                    <div className="text-left md:text-right hidden sm:block">
                      <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 uppercase block">
                        KEYWORDS RANKED
                      </span>
                      <span className="font-mono font-bold text-sm text-zinc-800 dark:text-zinc-200 block mt-1">
                        {cs.results.keywordRankings}
                      </span>
                    </div>

                    <div className="text-zinc-400 dark:text-zinc-500">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-zinc-100 dark:border-zinc-800/80"
                    >
                      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-zinc-50/10 dark:bg-zinc-900/10">
                        {/* Challenges & Strategy details */}
                        <div className="lg:col-span-7 space-y-6">
                          <div>
                            <span className="text-[10px] font-mono tracking-widest font-extrabold text-red-500 uppercase block mb-3">
                              PRIMARY BOTTLENECKS FOUND:
                            </span>
                            <ul className="space-y-2">
                              {cs.challenges.map((c, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-normal">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="border-t border-zinc-100 dark:border-zinc-800/50 pt-5">
                            <span className="text-[10px] font-mono tracking-widest font-extrabold text-teal-600 dark:text-teal-400 uppercase block mb-3">
                              MAPPED SEO CAMPAIGN SOLUTIONS:
                            </span>
                            <ul className="space-y-2">
                              {cs.strategy.map((s, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-normal">
                                  <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                                  <span>{s}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Visual Growth Chart Recharts */}
                        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                          <div className="bg-zinc-50 dark:bg-zinc-900/60 p-4 sm:p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800/30">
                            <div className="flex items-center justify-between mb-3 text-xs">
                              <span className="font-mono text-zinc-400 uppercase tracking-widest font-extrabold">
                                Continuous Traffic Analytics
                              </span>
                              <span className="font-mono font-bold text-teal-600 dark:text-teal-400">
                                Organic Hockey-Stick Growth
                              </span>
                            </div>

                            {/* Chart box */}
                            <div className="h-40 relative">
                              <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={cs.growthData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                                  <defs>
                                    <linearGradient id={`grad-${cs.id}`} x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.2} />
                                      <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.0} />
                                    </linearGradient>
                                  </defs>
                                  <XAxis
                                    dataKey="month"
                                    stroke="#888"
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                    style={{ fontFamily: 'monospace' }}
                                  />
                                  <Tooltip
                                    contentStyle={{
                                      backgroundColor: "#18181b",
                                      border: "none",
                                      color: "#fff",
                                      fontSize: "10px",
                                      fontFamily: "monospace"
                                    }}
                                  />
                                  <Area
                                    type="monotone"
                                    dataKey="traffic"
                                    stroke="#14b8a6"
                                    strokeWidth={2.5}
                                    fillOpacity={1}
                                    fill={`url(#grad-${cs.id})`}
                                  />
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                          </div>

                          {/* Metric split breakdown panels */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-center">
                              <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-500 uppercase block">
                                TRAFFIC GROWTH
                              </span>
                              <div className="mt-1 flex items-center justify-center gap-1 flex-wrap">
                                <span className="font-mono text-zinc-400 text-xs line-through">
                                  {cs.results.beforeTrafficCount.toLocaleString()}
                                </span>
                                <span className="font-mono text-zinc-500 text-xs">→</span>
                                <span className="font-mono text-zinc-950 dark:text-white font-black text-sm">
                                  {cs.results.afterTrafficCount.toLocaleString()}
                                </span>
                              </div>
                            </div>

                            <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-center">
                              <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-500 uppercase block">
                                KEYWORDS VALUE
                              </span>
                              <div className="mt-1 flex items-center justify-center gap-1 flex-wrap">
                                <span className="font-mono text-zinc-400 text-xs line-through">
                                  {cs.results.beforeKeywordsCount.toLocaleString()}
                                </span>
                                <span className="font-mono text-zinc-500 text-xs">→</span>
                                <span className="font-mono text-zinc-950 dark:text-white font-black text-sm">
                                  {cs.results.afterKeywordsCount.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
