import React, { useState } from "react";
import { 
  ArrowUpRight, 
  Check, 
  TrendingUp, 
  Calendar, 
  Cpu, 
  Search, 
  PenTool, 
  Share2, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  Activity, 
  Image as ImageIcon,
  CheckCircle,
  HelpCircle,
  Clock,
  Gauge,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Import newly generated high-fidelity screenshot assets
import acharyaGaneshProof from "../assets/images/acharya_ganesh_proof_1781348006025.jpg";
import ga4DashboardProof from "../assets/images/ga4_dashboard_proof_1781348023846.jpg";
import gscDashboardProof from "../assets/images/gsc_dashboard_proof_1781348040159.jpg";
import hanishBaggaProof from "../assets/images/hanish_bagga_proof_1781348058382.jpg";
import thinkbizProof from "../assets/images/thinkbiz_proof_1781348072236.jpg";

interface CaseStudyDetails {
  id: string;
  websiteName: string;
  industry: string;
  duration: string;
  overview: string;
  performanceProofImage: string;
  problems: string[];
  seoWork: {
    onPage: string[];
    offPage: string[];
    technical: string[];
  };
  results: {
    traffic: string;
    ranking: string;
    clicks: string;
    impressions: string;
  };
  beforeAfter: {
    clicks: { before: number; after: number };
    impressions: { before: string; after: string };
    keywords: { before: string; after: string };
  };
  proofImages: {
    title: string;
    metrics: string;
    type: "GSC" | "Analytics" | "Rank" | "Audit";
    colorClass: string;
  }[];
  growthData?: { month: string; clicks: number; impressions: number }[];
}

const caseStudiesList: CaseStudyDetails[] = [
  {
    id: "case-acharya",
    websiteName: "Acharya Ganesh",
    industry: "Astrology & EdTech Platform",
    duration: "6 Months Intensive",
    overview: "Acharya Ganesh is a high-growth Astrology platform providing online courses, consultancy, and daily insights. Despite strong offline popularity, the brand faced heavy search suppression barriers and critical slow-performance mobile pages.",
    performanceProofImage: acharyaGaneshProof,
    problems: [
      "Stuck at bottom of search rankings due to core Web Web Vitals cumulative layout shift (CLS) penalties.",
      "Fragmented, duplicate thin blog content with zero semantic topical groupings.",
      "Absence of local structured schema markups blocking map pack rankings for target city keywords."
    ],
    seoWork: {
      onPage: [
        "Injected advanced metadata structures and re-mapped content taxonomy across 150+ course posts.",
        "Employed NLP frequency matching (LSI phrases) to capture user commercial learning intents.",
        "Reconstructed robust internal anchor connection webs passing PageRank flows to high-converting product silos."
      ],
      offPage: [
        "Secured high-authority guest columns on certified Astro & education portals.",
        "Created brand citations and synced coordinates across 40+ national regional directories.",
        "Dismantled 80+ spam toxic scraper backlinks suppressors through official Google Disavow logs."
      ],
      technical: [
        "Compressed all heavy images and converted banners into lightweight Next-Gen formats (.webp).",
        "Configured precise JSON-LD structured schemas validating organizational and localized business profiles.",
        "Restaged sitemap indexing protocol maps, resolving persistent 404 crawl pathways."
      ]
    },
    results: {
      traffic: "+608% Clicks Growth",
      ranking: "120 → 2,400+ Top 10",
      clicks: "12K/mo → 85K/mo",
      impressions: "250K/mo → 1.8M/mo"
    },
    beforeAfter: {
      clicks: { before: 12000, after: 85000 },
      impressions: { before: "250K/mo", after: "1.8M/mo" },
      keywords: { before: "120", after: "2,400+" }
    },
    proofImages: [
      { title: "GSC Organic Performance Log", metrics: "85K Monthly Clicks (+608%)", type: "GSC", colorClass: "from-teal-500/10 to-teal-500/5 text-teal-600 dark:text-teal-400 border-teal-500/20" },
      { title: "Analytics Course Conversion Metric", metrics: "+240% Direct Course Signups", type: "Analytics", colorClass: "from-indigo-500/10 to-indigo-500/5 text-indigo-600 dark:text-indigo-400 border-indigo-500/20" },
      { title: "Web Speed Core Performance Audit", metrics: "99/100 Mobile Score (Passed CWV)", type: "Audit", colorClass: "from-amber-500/10 to-amber-500/5 text-amber-600 dark:text-amber-400 border-amber-500/20" }
    ]
  },
  {
    id: "case-gsc",
    websiteName: "Google Search Console",
    industry: "Search Intelligence Diagnostics",
    duration: "Continuous Audit",
    overview: "Google Search Console (GSC) is the source of truth for organic growth. Through deep index coverage cleanses, XML sitemap restructures, and search query re-alignment, we unlocked premium high-click organic search results for core transactional intent queries.",
    performanceProofImage: gscDashboardProof,
    problems: [
      "Critical crawl index blockages with over 45% of key pages marked as 'Crawled - Currently Not Indexed'.",
      "Low average search click-through rate (CTR) due to static, unlocalized meta snippet schemas.",
      "Severe crawl-budget leakages on duplicate parameter pages and rogue trailing slash URLs."
    ],
    seoWork: {
      onPage: [
        "Analyzed high-impression keywords inside GSC, optimizing corresponding titles and H1 headers to trigger higher click-throughs.",
        "Injected rich FAQ schema snippets and review code segments to dominate search results pages.",
        "Matched text blocks and topical coverage targeting specific user commercial transaction intent gaps."
      ],
      offPage: [
        "Evaluated toxic link anchor patterns, implementing official GSC Disavow routines for scrapers.",
        "Constructed a high-quality, relevant context natural linking map targeting primary hub pages.",
        "Earned verified authority mentions to raise crawl frequency and domain trust factors."
      ],
      technical: [
        "Corrected Robots.txt configurations and sitemap routes to optimize Googlebot crawl pathways.",
        "Wrote clean self-referential canonical directives, fixing complex parameter indexing overlaps.",
        "Automated index submission workflows to secure immediate discovery for newly produced courses and blogs."
      ]
    },
    results: {
      traffic: "+442% CTR CTR Growth",
      ranking: "Avg Pos 24.2 → 8.4",
      clicks: "24K/mo → 132.8K/mo",
      impressions: "850K/mo → 4.2M/mo"
    },
    beforeAfter: {
      clicks: { before: 24500, after: 132800 },
      impressions: { before: "850K/mo", after: "4.2M/mo" },
      keywords: { before: "480", after: "3,110+" }
    },
    proofImages: [
      { title: "GSC Performance Analysis", metrics: "135K Monthly Clicks (+442%)", type: "GSC", colorClass: "from-teal-500/10 to-teal-500/5 text-teal-600 dark:text-teal-400 border-teal-500/20" },
      { title: "Canonical Index Corrected", metrics: "99.8% Success Indexing Rate", type: "Rank", colorClass: "from-sky-500/10 to-sky-500/5 text-sky-600 dark:text-sky-400 border-sky-500/20" },
      { title: "Crawl Budget Restaged Report", metrics: "0 Duplicate Paramount Leaks", type: "Audit", colorClass: "from-rose-500/10 to-rose-500/5 text-rose-600 dark:text-rose-455 border-rose-500/20" }
    ]
  },
  {
    id: "case-ga4",
    websiteName: "Google Analytics 4",
    industry: "Conversion & Traffic Tracking",
    duration: "Strategic Measurement",
    overview: "Google Analytics 4 (GA4) setup is fundamental to accurate attribution. We dismantled flawed direct-traffic attribution spikes by configuring advanced Google Tag Manager routines and secure server conversion pathways, validating our organic search revenue streams.",
    performanceProofImage: ga4DashboardProof,
    problems: [
      "Flawed marketing attribution skewing direct-vs-organic channel reporting insights.",
      "Completely untracked lead forms, dynamic button clicks, and outbound course referrals.",
      "Stagnant user engagement metric logging due to improper session duration calculations."
    ],
    seoWork: {
      onPage: [
        "Restructured course pages and resource links to extend organic session durations.",
        "Injected context-relevant CTA triggers to drive visitors down verified, tracked lead journeys.",
        "Aligned high-traffic search intent topics with commercial landing page offers."
      ],
      offPage: [
        "Configured precise UTM parameter frameworks across global referral channels.",
        "Analyzed referral traffic shares to highlight high-value co-marketing partners.",
        "Tracked backlink conversion rates within GA4 user acquisition funnels."
      ],
      technical: [
        "Implemented secure GTM custom containers containing dynamic event variable definitions.",
        "Mapped server-side API conversions verifying genuine leads against spam submissions.",
        "Created custom exploration reports in GA4 tracking active user engagement rates and cohorts."
      ]
    },
    results: {
      traffic: "84.6% Organic Share",
      ranking: "+280% Session Duration",
      clicks: "4.8x Lead Conversions",
      impressions: "Avg Engagement 74%"
    },
    beforeAfter: {
      clicks: { before: 1800, after: 8642 },
      impressions: { before: "32% Engagement", after: "74% Engagement" },
      keywords: { before: "40s Session", after: "2m 50s" }
    },
    proofImages: [
      { title: "Organic Acquisition Share", metrics: "84.6% Organic Channel Share", type: "Analytics", colorClass: "from-[#0ea5e9]/10 to-[#0ea5e9]/5 text-[#ea5e9] dark:text-[#0ea5e9] border-[#0ea5e9]/20" },
      { title: "Engagement Tracking Setup", metrics: "74% Active User Engagement Rate", type: "Audit", colorClass: "from-violet-500/10 to-violet-500/5 text-violet-605 dark:text-violet-405 border-violet-500/20" },
      { title: "Custom Leads Exploration", metrics: "+280% Conversions Verified", type: "GSC", colorClass: "from-emerald-500/10 to-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" }
    ]
  },
  {
    id: "case-hanish",
    websiteName: "Hanish Bagga",
    industry: "Consulting & Mentorship Hub",
    duration: "4 Months Plan",
    overview: "Hanish Bagga is an elite financial and personal consultancy brand. The primary goal was to bypass cold organic results and construct a high-converting inbound customer acquisition funnel targeting corporate leads.",
    performanceProofImage: hanishBaggaProof,
    problems: [
      "No organic visibility for primary high-ticket transactional query categories.",
      "Bloated theme files making mobile Page Load speeds exceed 6 seconds.",
      "Discrepancies in metadata titles triggering low Google click-through rates (CTR)."
    ],
    seoWork: {
      onPage: [
        "Completely rewritten title tag hooks and description snippets to trigger higher ctr spikes.",
        "Aligned on-page semantic blocks with high-ticket corporate consultancy queries.",
        "Added highly distinct Q&A formatting with readable structured cards."
      ],
      offPage: [
        "Earned editorial links from leading business publications.",
        "Multiplied E-E-A-T trust signals by indexing reviews and client case proof logs.",
        "Secured localized business mentions to drive physical consulting foot traffic."
      ],
      technical: [
        "Reorganized sitemap loops and cleaned script codes to trigger fast mobile loading speeds.",
        "Configured strict canonical maps ensuring zero indexing of duplicate pagination nodes.",
        "Implemented RankMath SEO schema modules linked directly to verified Google search nodes."
      ]
    },
    results: {
      traffic: "+544% Traffic Growth",
      ranking: "80 → 950+ Top 10",
      clicks: "4.5K/mo → 29K/mo",
      impressions: "95K/mo → 680K/mo"
    },
    beforeAfter: {
      clicks: { before: 4500, after: 29000 },
      impressions: { before: "95K/mo", after: "680K/mo" },
      keywords: { before: "80", after: "950+" }
    },
    proofImages: [
      { title: "GSC Clicks Analytics Graph", metrics: "29,000 Organic Leads (+544%)", type: "GSC", colorClass: "from-[#0ea5e9]/10 to-[#0ea5e9]/5 text-[#ea5e9] dark:text-[#0ea5e9] border-[#0ea5e9]/20" },
      { title: "Google Maps Local Pack Ranking", metrics: "Ranked #1 for regional Consulting", type: "Rank", colorClass: "from-teal-500/10 to-teal-500/5 text-teal-600 dark:text-teal-400 border-teal-500/20" },
      { title: "PageSpeed Optimization report", metrics: "96/100 Mobile Speed (Passed CWV)", type: "Audit", colorClass: "from-violet-500/10 to-violet-500/5 text-violet-605 dark:text-violet-405 border-violet-500/20" }
    ]
  },
  {
    id: "case-thinkbizz",
    websiteName: "ThinkBizz",
    industry: "Business Directory & SaaS Portal",
    duration: "Continuous",
    overview: "ThinkBizz is a high-authority business directory and lead generation platform. To establish top-tier white-hat authority and attract premium B2B consulting partners, the platform optimized localized entities to dominate highly competitive advisory keywords.",
    performanceProofImage: thinkbizProof,
    problems: [
      "Deeply entrenched competition from established global directories and databases.",
      "Delayed initial crawl budget allocation for dynamically generated city nodes.",
      "Moderate click-through rates (CTR) from standardized search result layouts."
    ],
    seoWork: {
      onPage: [
        "Crafted outstanding topical clusters mapping out exactly how B2B clients grow via search channels.",
        "Optimized brand layouts and metadata fields to index cleanly inside global search directories.",
        "Deployed clean, error-free HTML architectures and XML schema nodes."
      ],
      offPage: [
        "Secured contextual natural links in tech resource directories and blogging communities.",
        "Synced Name, Address, and Phone consistent listings across major brand signal boards.",
        "Launched digital PR campaigns resulting in referral-targeted clicks."
      ],
      technical: [
        "Reduced total script assets footprint to secure sub-second page performance.",
        "Programmed a custom sitemap update script checking index statuses on-demand.",
        "Deployed clean, error-free HTML architectures and XML schema nodes."
      ]
    },
    results: {
      traffic: "+1012% Leads Growth",
      ranking: "15 → 310+ Top 3",
      clicks: "800/mo → 8.9K/mo",
      impressions: "15K/mo → 190K/mo"
    },
    beforeAfter: {
      clicks: { before: 800, after: 8900 },
      impressions: { before: "15K/mo", after: "190K/mo" },
      keywords: { before: "15", after: "310+" }
    },
    proofImages: [
      { title: "Search Console Leads Tracking", metrics: "8.9K Inbound Clicks (+1012%)", type: "GSC", colorClass: "from-emerald-500/10 to-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" },
      { title: "SEMrush Keyword Track proof", metrics: "310+ Top 3 commercial terms", type: "Rank", colorClass: "from-sky-500/10 to-sky-500/5 text-sky-600 dark:text-sky-400 border-sky-500/20" },
      { title: "Screaming Frog Audit Log", metrics: "0 Crawl Errors / 100% Indexable", type: "Audit", colorClass: "from-rose-500/10 to-rose-500/5 text-rose-600 dark:text-rose-455 border-rose-500/20" }
    ]
  }
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedProofImage, setSelectedProofImage] = useState<string | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudiesList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudiesList.length) % caseStudiesList.length);
  };

  const handleGoTo = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch Swipe Event Support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const cs = caseStudiesList[currentIndex];

  return (
    <section id="case-studies" className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation selection tabs */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 mb-8 -mx-2 px-2 scrollbar-none border-b border-zinc-200 dark:border-zinc-900 select-none">
          {caseStudiesList.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleGoTo(idx)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-extrabold tracking-tight transition-all duration-300 focus:outline-none shrink-0 cursor-pointer ${
                currentIndex === idx
                  ? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 ring-2 ring-teal-500/10"
                  : "bg-white dark:bg-zinc-900 border border-zinc-155 dark:border-zinc-850 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <span className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-pulse" />
              {item.websiteName} {item.websiteName.includes("Google") ? "Report" : "Case Study"}
            </button>
          ))}
        </div>

        {/* Selected Case Study detailed board */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-10"
            >
              
              {/* Layout grid divided into Overview & results metrics showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* 1. Project overview with the interactive carousel view */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-teal-605 dark:text-teal-400 bg-teal-550/10 dark:bg-teal-500/5 px-2.5 py-1 rounded-sm uppercase">
                      {cs.industry} &bull; {cs.duration}
                    </span>
                    <h2 className="font-sans font-black text-2xl sm:text-3xl text-zinc-950 dark:text-white mt-3">
                      {cs.websiteName} Performance Growth
                    </h2>
                    <p className="mt-4 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 font-sans font-medium leading-relaxed">
                      {cs.overview}
                    </p>

                    {/* Dedicated Carousel Area */}
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 animate-pulse" />
                          <span className="text-[10px] font-mono font-bold tracking-wider text-teal-605 dark:text-teal-400 uppercase">
                            Performance Proof Carousel
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500">
                          {currentIndex + 1} / {caseStudiesList.length}
                        </span>
                      </div>
                      
                      {/* Interactive premium mock browser frame */}
                      <div 
                        onClick={() => setSelectedProofImage(cs.performanceProofImage)}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className="relative group cursor-zoom-in rounded-[16px] overflow-hidden border border-zinc-200/80 dark:border-zinc-800/85 shadow-md bg-zinc-50 dark:bg-zinc-900 transition-all duration-500 hover:shadow-xl hover:scale-[1.015] hover:border-teal-500/30"
                      >
                        {/* Browser dot controls bar */}
                        <div className="bg-zinc-100 dark:bg-zinc-900/90 border-b border-zinc-200/80 dark:border-zinc-805 px-4 py-2.5 flex items-center gap-1.5 select-none text-zinc-400 text-[10px]">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-red-400" />
                            <span className="w-2 h-2 rounded-full bg-yellow-400" />
                            <span className="w-2 h-2 rounded-full bg-green-400" />
                          </div>
                          <span className="ml-4 font-mono text-[9px] text-zinc-450 dark:text-zinc-500 truncate w-1/2">
                            https://www.{cs.websiteName.toLowerCase().replace(/\s+/g, '')}.com/performance-audit
                          </span>
                        </div>

                        {/* Interactive dynamic showcase container */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-105 dark:bg-zinc-900 flex items-center justify-center select-none">
                          <img 
                            src={cs.performanceProofImage} 
                            alt={`${cs.websiteName} performance screenshot`}
                            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            referrerPolicy="no-referrer"
                          />
                          
                          {/* Left Navigation Arrow */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePrev();
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 backdrop-blur-md transition shadow-md z-20 cursor-pointer active:scale-95"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>

                          {/* Right Navigation Arrow */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNext();
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 backdrop-blur-md transition shadow-md z-20 cursor-pointer active:scale-95"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>

                          {/* Shimmer hovering helper badge overlay */}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-transparent to-transparent py-4 text-center">
                            <span className="px-3 py-1.5 rounded-lg bg-zinc-950/80 text-white font-sans text-2xs uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-center">
                              Click to view full screenshot
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Slider controls & swipe indicator dots */}
                      <div className="flex flex-col items-center gap-3 pt-1">
                        <div className="flex justify-center items-center gap-2 select-none">
                          {caseStudiesList.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleGoTo(idx);
                              }}
                              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                currentIndex === idx 
                                  ? "bg-teal-500 w-6" 
                                  : "bg-zinc-350 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600"
                              }`}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                        <p className="text-[10px] sm:text-[10.5px] text-center font-mono font-bold text-zinc-400 dark:text-zinc-500 tracking-wider">
                          Swipe or click arrows to navigate &bull; Click image to expand report
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Problems list */}
                  <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-2xl">
                    <span className="text-[10px] font-mono tracking-widest font-extrabold text-red-500 uppercase flex items-center gap-1.5 mb-3">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      CRITICAL BOTTLENECKS IDENTIFIED
                    </span>
                    <ul className="space-y-2.5 text-left">
                      {cs.problems.map((problem, pIdx) => (
                        <li key={pIdx} className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0 mt-2" />
                          <span className="font-medium">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. Headline Outcomes Achieved */}
                <div className="lg:col-span-5 bg-gradient-to-tr from-zinc-50 to-zinc-100/50 dark:from-zinc-900/60 dark:to-zinc-900/10 border border-zinc-150 dark:border-zinc-850 p-6 sm:p-8 rounded-2xl space-y-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase block">
                      OUTSTANDING OUTCOMES
                    </span>
                    <h3 className="font-sans font-extrabold text-lg text-zinc-900 dark:text-white mt-1">
                      Results Achieved
                    </h3>
                  </div>

                  {/* Results metrics board */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-100 dark:border-zinc-850 shadow-xs">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase font-black block">Traffic Surge</span>
                      <span className="font-sans font-extrabold text-xs sm:text-sm text-zinc-950 dark:text-white mt-1 block truncate">
                        {cs.results.traffic}
                      </span>
                    </div>

                    <div className="bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-100 dark:border-zinc-850 shadow-xs">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase font-black block">Rank Placement</span>
                      <span className="font-sans font-extrabold text-xs sm:text-sm text-zinc-950 dark:text-white mt-1 block truncate">
                        {cs.results.ranking}
                      </span>
                    </div>

                    <div className="bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-100 dark:border-zinc-850 shadow-xs">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase font-black block">Organic clicks</span>
                      <span className="font-sans font-extrabold text-xs sm:text-sm text-zinc-950 dark:text-white mt-1 block truncate">
                        {cs.results.clicks}
                      </span>
                    </div>

                    <div className="bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-100 dark:border-zinc-850 shadow-xs">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase font-black block">Page impressions</span>
                      <span className="font-sans font-extrabold text-xs sm:text-sm text-zinc-950 dark:text-white mt-1 block truncate">
                        {cs.results.impressions}
                      </span>
                    </div>
                  </div>

                  {/* Before vs After comparison sliders/counters */}
                  <div className="space-y-2.5 pt-4 border-t border-zinc-200 dark:border-zinc-805">
                    <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase block font-bold">
                      Before vs. After Comparison
                    </span>

                    <div className="p-3 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-150 dark:border-zinc-850 space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-zinc-400 dark:text-zinc-550">Traffic / Clicks Curve:</span>
                        <span className="font-mono text-teal-600 dark:text-teal-400 font-bold">
                          +{Math.floor(((cs.beforeAfter.clicks.after - cs.beforeAfter.clicks.before) / cs.beforeAfter.clicks.before) * 105)}%
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs font-mono">
                        <span className="text-zinc-400 block px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-900 rounded">
                          Before: {cs.beforeAfter.clicks.before.toLocaleString()}
                        </span>
                        <span className="text-zinc-350">→</span>
                        <span className="text-teal-650 dark:text-teal-450 font-black">
                          After: {cs.beforeAfter.clicks.after.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-150 dark:border-zinc-850 space-y-1.5 font-sans">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-zinc-400 dark:text-zinc-550">Impressions & Keyword share:</span>
                        <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">Optimized</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs font-mono">
                        <span className="text-zinc-400 block px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-900 rounded">
                          Before: {cs.beforeAfter.impressions.before}
                        </span>
                        <span className="text-zinc-350">→</span>
                        <span className="text-indigo-650 dark:text-indigo-455 font-black">
                          After: {cs.beforeAfter.impressions.after}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* 3. Detailed work breakdown: On Page, Off Page, and Technical SEO */}
              <div className="border-t border-zinc-200/60 dark:border-zinc-900/60 pt-8">
                <span className="text-[10px] font-mono tracking-widest font-extrabold text-teal-600 dark:text-teal-400 uppercase block mb-6 text-center lg:text-left">
                  SEO WORK PERFORMED BY SPECIALIST
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  
                  {/* On Page Solution */}
                  <div className="bg-white dark:bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-155 dark:border-zinc-850 space-y-3 shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-2 bg-blue-500/10 rounded-xl text-blue-600">
                        <PenTool className="w-4 h-4" />
                      </span>
                      <h4 className="font-sans font-extrabold text-base text-zinc-900 dark:text-white">
                        On Page SEO
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {cs.seoWork.onPage.map((item, idx) => (
                        <li key={idx} className="text-xs text-zinc-650 dark:text-zinc-400 flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="font-semibold">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Off Page Solution */}
                  <div className="bg-white dark:bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-155 dark:border-zinc-850 space-y-3 shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-2 bg-indigo-500/10 rounded-xl text-indigo-600">
                        <Share2 className="w-4 h-4" />
                      </span>
                      <h4 className="font-sans font-extrabold text-base text-zinc-900 dark:text-white">
                        Off Page SEO
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {cs.seoWork.offPage.map((item, idx) => (
                        <li key={idx} className="text-xs text-zinc-650 dark:text-zinc-400 flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span className="font-semibold">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Solution */}
                  <div className="bg-white dark:bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-155 dark:border-zinc-850 space-y-3 shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-2 bg-teal-500/10 rounded-xl text-teal-655">
                        <Cpu className="w-4 h-4" />
                      </span>
                      <h4 className="font-sans font-extrabold text-base text-zinc-900 dark:text-white">
                        Technical SEO
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {cs.seoWork.technical.map((item, idx) => (
                        <li key={idx} className="text-xs text-zinc-650 dark:text-zinc-400 flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                          <span className="font-semibold">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* 4. PROOF SECTION (Certified screenshots mock diagram grid) */}
              <div className="border-t border-zinc-200/60 dark:border-zinc-900/60 pt-8" id="proof-section">
                <span className="text-[10px] font-mono tracking-widest font-extrabold text-indigo-600 dark:text-indigo-400 uppercase block mb-6 text-center lg:text-left">
                  VERIFIED EVIDENCE LOG (COMPLAINT CHECKS)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cs.proofImages.map((proof, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-white dark:bg-zinc-950 border border-zinc-150 dark:border-zinc-850 rounded-2xl p-4 sm:p-5 shadow-xs relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-300"
                    >
                      {/* Browser mockup header */}
                      <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-850 pb-2.5 mb-4 font-mono text-[9px] text-zinc-400">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                          Certified Data Block
                        </span>
                        <span>{proof.type} SECURE</span>
                      </div>

                      {/* Mock performance UI */}
                      <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-850 p-4 rounded-xl flex flex-col items-center justify-center text-center h-28 relative">
                        <div className={`absolute inset-0 bg-gradient-to-tr ${proof.colorClass} opacity-10`} />
                        
                        <ImageIcon className="w-5 h-5 text-zinc-400 dark:text-zinc-500 mb-2" />
                        <span className="text-zinc-950 dark:text-white font-mono text-xs font-black tracking-wide leading-tight px-3 z-10 text-center">
                          {proof.metrics}
                        </span>
                        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-1 font-bold z-10">
                          {proof.type} VERIFIED DATA
                        </span>
                      </div>

                      <h4 className="font-sans font-bold text-xs text-zinc-700 dark:text-zinc-350 mt-3 text-center">
                        {proof.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Premium Lightbox Modal for Performance Proof Images */}
      <AnimatePresence>
        {selectedProofImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProofImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-md cursor-zoom-out"
          >
            {/* Close button in top-right */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProofImage(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all focus:outline-none cursor-pointer"
              aria-label="Close Lightbox"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scale animation container for the preview */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProofImage}
                alt="Full-Screen Performance Proof"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
