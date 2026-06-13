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
import acharyaGaneshGsc from "../assets/images/acharya_ganesh_gsc_1781348865696.jpg";
import acharyaGaneshSpeed from "../assets/images/acharya_ganesh_speed_1781348883413.jpg";

import hanishBaggaProof from "../assets/images/hanish_bagga_proof_1781348058382.jpg";
import hanishBaggaGsc from "../assets/images/hanish_bagga_gsc_1781348898562.jpg";
import hanishBaggaRanking from "../assets/images/hanish_bagga_ranking_1781348912333.jpg";

import thinkbizProof from "../assets/images/thinkbiz_proof_1781348072236.jpg";
import thinkbizzGsc from "../assets/images/thinkbizz_gsc_1781348928448.jpg";
import thinkbizzAudit from "../assets/images/thinkbizz_audit_1781348945654.jpg";

import ga4DashboardProof from "../assets/images/ga4_dashboard_proof_1781348023846.jpg";
import gscDashboardProof from "../assets/images/gsc_dashboard_proof_1781348040159.jpg";

interface CarouselImage {
  src: string;
  title: string;
  description: string;
}

interface CaseStudyDetails {
  id: string;
  websiteName: string;
  industry: string;
  duration: string;
  overview: string;
  carouselImages: CarouselImage[];
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
  achievements: string[];
  hiddenOverviewParagraph: string;
}

const caseStudiesList: CaseStudyDetails[] = [
  {
    id: "case-acharya",
    websiteName: "Acharya Ganesh",
    industry: "Astrology & EdTech Platform",
    duration: "6 Months Intensive",
    overview: "Acharya Ganesh is a high-growth Vedic Astrology platform providing professional courses, corporate consultancy, and celestial guidance. Trotz immense offline reputation, Mohan solved its technical debt, cumulative mobile layout penalties, and semantic topical gap issues to realize a colossal search visibility scaling.",
    carouselImages: [
      {
        src: acharyaGaneshProof,
        title: "Vedic Astrology Desktop Home Screen",
        description: "Elegant client portal design featuring responsive Vedic educational course catalogs and booking flows."
      },
      {
        src: acharyaGaneshGsc,
        title: "Google Search Console Organic Traffic Report",
        description: "Official GSC dashboard illustrating severe seasonal search curves transformed into a stable organic click stream."
      },
      {
        src: acharyaGaneshSpeed,
        title: "Mobile PageSpeed Core Web Vitals Score",
        description: "Lighthouse audit demonstrating a near-perfect mobile speed rating of 99/100, passing Core Web Vitals (CWV)."
      },
      {
        src: ga4DashboardProof,
        title: "Google Analytics 4 Client Engagement Flow",
        description: "GA4 Traffic acquisition analysis indicating robust user retention and high course-order checkout levels."
      },
      {
        src: gscDashboardProof,
        title: "Search Console Organic Impressions Index",
        description: "Comprehensive review of organic search impressions scaling efficiently past 1.8M impressions per month."
      }
    ],
    problems: [
      "Stuck at bottom of search rankings due to core Web Vitals cumulative layout shift (CLS) penalties.",
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
    ],
    achievements: [
      "+608% Organic Clicks Scaling (yielding 12K to 85K monthly visits)",
      "2,400+ competitive transactional keywords positioned in Google's critical Top 10",
      "99/100 Mobile PageSpeed Lighthouse scoring, passing Core Web Vitals (CWV)",
      "+240% direct Astro & EdTech course registration and checkout rate improvement",
      "Robust organizational JSON-LD schema schemas recognized flawlessly by Google crawlers"
    ],
    hiddenOverviewParagraph: "By systematically cleaning heavy runtime scripts, converting heavy layout banners into high-performance web-optimized formats (.webp), and structuring custom sitemaps, Mohan resolved complex layout blocks. In parallel, semantic NLP matching mapped astrology queries to high-converting product pages, completely bypassing historical search suppression bounds and realizing persistent organic traffic compounding."
  },
  {
    id: "case-hanish",
    websiteName: "Hanish Bagga",
    industry: "Consulting & Mentorship Hub",
    duration: "4 Months Plan",
    overview: "Hanish Bagga is an elite brand name in high-end financial consulting, astrological therapy, and corporate mentorship. Mohan laid out a high-CTR content schema and resolved complex mobile file bloated scripts to construct an unstoppable organic lead generation funnel.",
    carouselImages: [
      {
        src: hanishBaggaProof,
        title: "Desktop Consultation Landing Page",
        description: "Luxurious, high-E-E-A-T editorial interface featuring verified client reviews and private strategy bookings."
      },
      {
        src: hanishBaggaGsc,
        title: "Google Search Console Lead Growth",
        description: "GSC performance reports showing high click growth for luxury advisory search queries."
      },
      {
        src: hanishBaggaRanking,
        title: "Google Local Map Pack Position Tracker",
        description: "Rank tracking suite demonstrating stable #1 Map Pack positioning for regional consulting search terms."
      },
      {
        src: ga4DashboardProof,
        title: "Google Analytics 4 Lead Optimization Funnel",
        description: "GA4 conversions tracking panel highlighting a 4.8x boost in high-ticket customer consultations."
      },
      {
        src: gscDashboardProof,
        title: "Consolidated Search Click Data Log",
        description: "Clean organic traffic report indexing stable user expansion and healthy click-through ratios (CTR)."
      }
    ],
    problems: [
      "No organic visibility for primary high-ticket transactional query categories.",
      "Bloated theme files making mobile Page Load speeds exceed 6 seconds.",
      "Discrepancies in metadata titles triggering low Google click-through rates (CTR)."
    ],
    seoWork: {
      onPage: [
        "Completely rewritten title tag hooks and description snippets to trigger higher CTR spikes.",
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
    ],
    achievements: [
      "+544% Strategic Corporate and Premium Astrological Lead Count Scaling",
      "950+ high-ticket corporate consultancy keywords ranking securely in Top 10",
      "Sub-2 second mobile rendering, eliminating complex script execution bottlenecks",
      "4.8x increase in direct outbound consult bookings via optimized CTA conversion paths",
      "Stable #1 Google Maps Local Pack positioning across targeted regional search zones"
    ],
    hiddenOverviewParagraph: "By conducting precise high-E-E-A-T author schema integrations, configuring GTM conversion triggers, and engineering content clusters around luxury advisory terms, Mohan bypassing standard cold calling bottlenecks. High-authority digital PR backlinks supported the physical consulting hubs, producing immediate, sustainable, high-value organic client inbound pathways."
  },
  {
    id: "case-thinkbizz",
    websiteName: "ThinkBizz HighTech",
    industry: "Business Directory & SaaS Portal",
    duration: "Continuous",
    overview: "ThinkBizz HighTech is a high-volume B2B catalog directory connecting premium advisory companies with enterprise leads. Mohan executed a dynamic programmatic localized category scheme and automated Googlebot crawl optimization sitemaps to win maximum market share.",
    carouselImages: [
      {
        src: thinkbizProof,
        title: "B2B SaaS Directory Hub UI",
        description: "Modern directory grid showcasing high-speed indexation blocks and multi-category layout nodes."
      },
      {
        src: thinkbizzGsc,
        title: "Search Console 10x Lead Velocity Report",
        description: "GSC charts detailing high-velocity growth, logging a spectacular 1,012% spike in directory clicks."
      },
      {
        src: thinkbizzAudit,
        title: "Screaming Frog Technical Crawl Audit",
        description: "Specialized Crawler layout documenting 100% Indexable health score, zero crawl blockages, and fast rendering speeds."
      },
      {
        src: ga4DashboardProof,
        title: "GA4 Outbound Lead Form Conversion",
        description: "GA4 custom exploration report detailing micro-conversion tracking for outbound directory partner leads."
      },
      {
        src: gscDashboardProof,
        title: "Dynamic Canonical Integration Insights",
        description: "GSC index data highlighting fast mapping of over 300+ newly introduced regional category landers."
      }
    ],
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
    ],
    achievements: [
      "+1,012% B2B lead generation escalation via targeted localized directory hubs",
      "310+ high-volume commercial transactional keywords placed directly in Top 3 search nodes",
      "100% Indexable technical crawl status with zero runtime site errors across index maps",
      "Streamlined automated programmatic canonical path mappings avoiding pagination waste",
      "Exceptional sub-second technical processing overheads, maximizing Googlebot crawl budgets"
    ],
    hiddenOverviewParagraph: "By organizing semantic clusters of enterprise solutions, programming automatic XML update endpoints, and optimizing canonical pathways, Mohan bypassed long crawl times. This technical restructuring allowed the directory framework to outshine well-entrenched competitors and scale leads dramatically."
  }
];

export default function CaseStudies() {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const [selectedProofImage, setSelectedProofImage] = useState<string | null>(null);

  const handleCarouselNext = () => {
    setActiveSlideIdx((prev) => (prev + 1) % 5);
  };

  const handleCarouselPrev = () => {
    setActiveSlideIdx((prev) => (prev - 1 + 5) % 5);
  };

  const handleSwitchProject = (index: number) => {
    setActiveProjectIdx(index);
    setActiveSlideIdx(0); // Reset slide index when changing project tab!
  };

  // Touch Swipe Support for Carousels
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
      handleCarouselNext();
    } else if (isRightSwipe) {
      handleCarouselPrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const cs = caseStudiesList[activeProjectIdx];

  return (
    <section id="case-studies" className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation selection tabs for the 3 elite projects */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 mb-8 -mx-2 px-2 scrollbar-none border-b border-zinc-200 dark:border-zinc-900 select-none">
          {caseStudiesList.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleSwitchProject(idx)}
              className={`flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-extrabold tracking-tight transition-all duration-300 focus:outline-none shrink-0 cursor-pointer ${
                activeProjectIdx === idx
                  ? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 ring-2 ring-teal-500/10 shadow-md"
                  : "bg-white dark:bg-zinc-900 border border-zinc-155 dark:border-zinc-850 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <span className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-pulse" />
              {item.websiteName} Case Study
            </button>
          ))}
        </div>

        {/* Selected Case Study detailed board */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, scale: 0.99, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.99, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              
              {/* Layout grid divided into Overview & results metrics showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* 1. Project overview with the interactive carousel view */}
                <div className="lg:col-span-12 space-y-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-teal-605 dark:text-teal-400 bg-teal-550/10 dark:bg-teal-500/5 px-2.5 py-1 rounded-sm uppercase">
                      {cs.industry} &bull; {cs.duration}
                    </span>
                    <h2 className="font-sans font-black text-2xl sm:text-3xl text-zinc-950 dark:text-white mt-3 leading-snug">
                      {cs.websiteName} SEO Architecture
                    </h2>
                    <p className="mt-4 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 font-sans font-medium leading-relaxed">
                      {cs.overview}
                    </p>

                    {/* Dedicated Carousel Area - 5 images per project */}
                    <div className="mt-8 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-500 dark:bg-teal-400 animate-pulse" />
                          <span className="text-[10px] font-mono font-bold tracking-wider text-teal-605 dark:text-teal-400 uppercase">
                            Performance Proof Carousel
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500">
                          IMAGE {activeSlideIdx + 1} / 5
                        </span>
                      </div>
                      
                      {/* Interactive premium mock browser frame */}
                      <div 
                        onClick={() => setSelectedProofImage(cs.carouselImages[activeSlideIdx].src)}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className="relative group cursor-zoom-in rounded-[16px] overflow-hidden border border-zinc-200/80 dark:border-zinc-800/85 shadow-md bg-zinc-50 dark:bg-zinc-900 transition-all duration-500 hover:shadow-xl hover:scale-[1.01] hover:border-teal-500/30"
                      >
                        {/* Browser dot controls bar */}
                        <div className="bg-zinc-100 dark:bg-zinc-900/90 border-b border-zinc-200/80 dark:border-zinc-805 px-4 py-2.5 flex items-center gap-1.5 select-none text-zinc-400 text-[10px]">
                          <div className="flex gap-1 shrink-0">
                            <span className="w-2 h-2 rounded-full bg-red-400" />
                            <span className="w-2 h-2 rounded-full bg-yellow-400" />
                            <span className="w-2 h-2 rounded-full bg-green-400" />
                          </div>
                          <span className="ml-4 font-mono text-[9px] text-zinc-450 dark:text-zinc-500 truncate w-[70%]">
                            https://www.{cs.websiteName.toLowerCase().replace(/\s+/g, '')}.com/audits/proof-slide-{activeSlideIdx + 1}
                          </span>
                        </div>

                        {/* Interactive dynamic showcase container */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-105 dark:bg-zinc-900 flex items-center justify-center select-none">
                          <AnimatePresence mode="wait">
                            <motion.img 
                              key={activeSlideIdx}
                              src={cs.carouselImages[activeSlideIdx].src} 
                              alt={`${cs.websiteName} performance screenshot ${activeSlideIdx + 1}`}
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 1.02 }}
                              transition={{ duration: 0.25 }}
                              className="object-cover w-full h-full"
                              referrerPolicy="no-referrer"
                            />
                          </AnimatePresence>
                          
                          {/* Left Navigation Arrow */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCarouselPrev();
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/55 hover:bg-black/75 text-white border border-white/10 backdrop-blur-md transition-all shadow-md z-20 cursor-pointer active:scale-90"
                            aria-label="Previous screenshot"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>

                          {/* Right Navigation Arrow */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCarouselNext();
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/55 hover:bg-black/75 text-white border border-white/10 backdrop-blur-md transition-all shadow-md z-20 cursor-pointer active:scale-90"
                            aria-label="Next screenshot"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>

                          {/* Shimmer hovering helper badge overlay */}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-transparent to-transparent py-4 text-center">
                            <span className="px-3 py-1.5 rounded-lg bg-zinc-950/95 text-white font-sans text-2xs uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-center">
                              Click to expand screenshot
                            </span>
                          </div>
                        </div>

                        {/* Interactive Custom Slide Info Footer Overlay Bar */}
                        <div className="bg-zinc-50 dark:bg-zinc-950/95 p-3.5 sm:p-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 z-10 select-none">
                          <div className="space-y-0.5">
                            <h4 className="font-sans font-extrabold text-[11px] sm:text-[12px] uppercase tracking-wide text-zinc-900 dark:text-white leading-tight">
                              {cs.carouselImages[activeSlideIdx].title}
                            </h4>
                            <p className="font-sans text-[10px] text-zinc-500 dark:text-zinc-400 font-medium max-w-xl">
                              {cs.carouselImages[activeSlideIdx].description}
                            </p>
                          </div>
                          <div className="shrink-0 flex items-center">
                            <span className="text-[10px] font-mono tracking-widest text-[#a855f7] bg-violet-500/10 border border-violet-500/10 px-2 py-0.5 rounded-md uppercase font-black">
                              STAGES {activeSlideIdx + 1} / 5
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Slider controls & swipe indicator dots */}
                      <div className="flex flex-col items-center gap-2.5 pt-1">
                        <div className="flex justify-center items-center gap-2.5 select-none">
                          {cs.carouselImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSlideIdx(idx);
                              }}
                              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                activeSlideIdx === idx 
                                  ? "bg-teal-500 w-6" 
                                  : "bg-zinc-350 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-650 w-2.5"
                              }`}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                        <p className="text-[10px] sm:text-[10.5px] text-center font-mono font-bold text-zinc-400 dark:text-zinc-550 tracking-wider uppercase">
                          Swipe or click arrows to crawl evidence &bull; Click card to zoom
                        </p>
                      </div>
                    </div>


                  </div>
                </div>



              </div>

              {/* 3. Detailed work breakdown: On Page, Off Page, and Technical SEO */}
              <div className="border-t border-zinc-200/80 dark:border-zinc-900/60 pt-8">
                <span className="text-[10px] font-mono tracking-widest font-extrabold text-teal-600 dark:text-teal-400 uppercase block mb-6 text-center lg:text-left">
                  SEO WORK PERFORMED BY SPECIALIST
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  
                  {/* On Page Solution */}
                  <div className="bg-white dark:bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-155 dark:border-zinc-850 space-y-3.5 shadow-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="p-2.5 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
                        <PenTool className="w-4 h-4" />
                      </span>
                      <h4 className="font-sans font-bold text-sm sm:text-base text-zinc-900 dark:text-white uppercase tracking-wider">
                        On Page SEO
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {cs.seoWork.onPage.map((item, idx) => (
                        <li key={idx} className="text-xs text-zinc-650 dark:text-zinc-400 flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Off Page Solution */}
                  <div className="bg-white dark:bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-155 dark:border-zinc-850 space-y-3.5 shadow-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400">
                        <Share2 className="w-4 h-4" />
                      </span>
                      <h4 className="font-sans font-bold text-sm sm:text-base text-zinc-900 dark:text-white uppercase tracking-wider">
                        Off Page SEO
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {cs.seoWork.offPage.map((item, idx) => (
                        <li key={idx} className="text-xs text-zinc-650 dark:text-zinc-400 flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Solution */}
                  <div className="bg-white dark:bg-zinc-950 p-5 sm:p-6 rounded-2xl border border-zinc-155 dark:border-zinc-850 space-y-3.5 shadow-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="p-2.5 bg-teal-500/10 rounded-xl text-teal-605 dark:text-teal-400">
                        <Cpu className="w-4 h-4" />
                      </span>
                      <h4 className="font-sans font-bold text-sm sm:text-base text-zinc-900 dark:text-white uppercase tracking-wider">
                        Technical SEO
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {cs.seoWork.technical.map((item, idx) => (
                        <li key={idx} className="text-xs text-zinc-650 dark:text-zinc-400 flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-md cursor-zoom-out font-sans select-none"
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
