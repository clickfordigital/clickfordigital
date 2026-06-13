import React, { useEffect, useState } from "react";
import CaseStudies from "../components/CaseStudies";
import Breadcrumbs from "../components/Breadcrumbs";
import { 
  ArrowLeft, 
  ArrowRight, 
  FolderKanban, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  Activity 
} from "lucide-react";
import { Link } from "../components/Router";
import { motion, AnimatePresence } from "motion/react";

// Import portfolio verified slide assets for the top carousel
import acharyaGaneshSpeed from "../assets/images/acharya_ganesh_speed_1781348883413.jpg";
import gscDashboardProof from "../assets/images/gsc_dashboard_proof_1781348040159.jpg";
import ga4DashboardProof from "../assets/images/ga4_dashboard_proof_1781348023846.jpg";
import hanishBaggaRanking from "../assets/images/hanish_bagga_ranking_1781348912333.jpg";
import thinkbizzAudit from "../assets/images/thinkbizz_audit_1781348945654.jpg";

interface CaseStudySlide {
  image: string;
  badge: string;
  title: string;
  metric: string;
  description: string;
}

const technicalSlides: CaseStudySlide[] = [
  {
    image: acharyaGaneshSpeed,
    badge: "CORE WEB VITALS",
    title: "PageSpeed Optimization & CWV Alignment",
    metric: "99/100 Mobile Rating",
    description: "Successfully audited and compressed heavy layout banners, deferred blocking JavaScript executions, and implemented next-gen image extensions to build sub-second loading speeds."
  },
  {
    image: gscDashboardProof,
    badge: "CONTENT SEARCH ARCHITECTURE",
    title: "Organic NLP Topical Coverage Mapping",
    metric: "+608% Clicks Scaling",
    description: "Mapped and resolved technical content gaps to build authority structures. Programmatic keyword siloing bypassed historical search crawl suppression limits."
  },
  {
    image: ga4DashboardProof,
    badge: "ANALYTICS INTEGRITY",
    title: "Advanced Tracking & Order Event Logs",
    metric: "+240% Course Registration Rate",
    description: "Engineered clean GTM triggers and customized conversion pathways, eliminating measurement duplicate loops."
  },
  {
    image: hanishBaggaRanking,
    badge: "SERP VISIBILITY",
    title: "Competitive transactional rankings on GSC",
    metric: "Ranked #1 for regional Consulting terms",
    description: "Integrated structured Schema markup profiles, driving direct inbound corporate client traffic of +544%."
  },
  {
    image: thinkbizzAudit,
    badge: "TECHNICAL HEALTH",
    title: "Clean Directory Architecture Audit",
    metric: "100% Crawl Indexability Score",
    description: "Restaged automated XML sitemaps, configured programmatic canonical path rules, and solved pagination crawl waste."
  }
];

export default function CaseStudiesPage() {
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isTapped, setIsTapped] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = "B2B Organic SEO Case Studies & Search Growth Reports";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore direct organic traffic conversion summaries, backlink acquisition histories, and technical roadmap executions engineered by Mohan.");
    }
  }, []);

  const handleNextSlide = () => {
    setActiveSlideIdx((prev) => (prev + 1) % technicalSlides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIdx((prev) => (prev - 1 + technicalSlides.length) % technicalSlides.length);
  };

  const handleToggleExpand = () => {
    setIsTapped(!isTapped);
  };

  const activeSlide = technicalSlides[activeSlideIdx];
  const isExpanded = isHovered || isTapped;

  return (
    <div className="pt-28 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen" id="case-studies-page-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic SEO breadcrumbs */}
        <Breadcrumbs currentPage="Case Studies" />

        {/* 1. RELEASE TECHNICAL CASE STUDY SECTION (CRITICAL HERO INTRO SECTION) */}
        <section className="bg-gradient-to-br from-zinc-950 to-zinc-900 text-white rounded-3xl border border-zinc-800 p-6 sm:p-10 mb-12 shadow-xl relative overflow-hidden" id="release-technical-study">
          <div className="absolute inset-0 bg-radial-at-t from-teal-500/10 via-transparent to-transparent opacity-90" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/15 border border-teal-500/20 rounded-full text-[10px] font-mono tracking-widest text-teal-400 font-extrabold uppercase select-none">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-teal-400" />
                Featured Intelligence Release
              </div>
              
              <h1 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight uppercase">
                Release Technical Case Study
              </h1>
              
              <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed font-semibold">
                {"Technical performance, content gaps, tracking, blog optimization, design overhaul, and backlink acquisition, significantly boosting search visibility and user experience."}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-zinc-400 font-mono text-[10px]">
                <span className="bg-zinc-800/80 border border-zinc-700/50 px-2.5 py-1 rounded-md">#CoreWebVitals</span>
                <span className="bg-zinc-800/80 border border-zinc-700/50 px-2.5 py-1 rounded-md">#NLPContentSilos</span>
                <span className="bg-zinc-800/80 border border-zinc-700/50 px-2.5 py-1 rounded-md">#GTMVerification</span>
              </div>
            </div>

            {/* Right Expanding Carousel Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="space-y-3">
                <div className="flex items-center justify-between px-1 select-none">
                  <span className="text-[10px] font-mono text-zinc-400 font-bold tracking-widest uppercase">
                    Interactive Portfolio Evidence Proof View
                  </span>
                  <span className="text-[10px] font-mono font-bold text-teal-400">
                    SLIDE {activeSlideIdx + 1} / {technicalSlides.length}
                  </span>
                </div>

                {/* Expanding Browser Mock Container */}
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleToggleExpand}
                  className={`bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden transition-all duration-500 ease-out cursor-pointer relative select-none ${
                    isExpanded 
                      ? "ring-2 ring-teal-500/30 scale-[1.02]" 
                      : "hover:scale-[1.01]"
                  }`}
                >
                  {/* Premium Browser dots frame */}
                  <div className="bg-zinc-900 border-b border-zinc-800/80 px-4 py-2.5 flex items-center justify-between text-zinc-500 text-[10px]">
                    <div className="flex gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="font-mono text-[9px] text-zinc-400 truncate max-w-[60%]">
                      https://clickfordigital.com/case-studies/audit-dashboard
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(activeSlide.image);
                      }}
                      className="p-1 hover:text-white transition duration-200"
                      title="Zoom Large View"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Dynamic Height Changing Box holding Image & Info Overlay */}
                  <motion.div 
                    animate={{ 
                      height: isExpanded ? "380px" : "240px" 
                    }}
                    transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
                    className="relative overflow-hidden w-full flex items-center justify-center bg-zinc-900"
                  >
                    {/* Active Screenshot rendered visually */}
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeSlideIdx}
                        src={activeSlide.image}
                        alt={activeSlide.title}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.01 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </AnimatePresence>

                    {/* Gradients to display indicators inside visual panels */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

                    {/* Quick indicator overlay prompting state actions */}
                    {!isExpanded && (
                      <div className="absolute top-4 right-4 bg-zinc-950/90 backdrop-blur-md px-2.5 py-1.5 rounded-md border border-zinc-800 text-[9px] font-mono tracking-wider font-extrabold uppercase animate-pulse select-none text-teal-400 flex items-center gap-1.5">
                        <Maximize2 className="w-3 h-3 text-teal-405" />
                        Hover/Tap to Expand
                      </div>
                    )}

                    {/* Bottom overlay metadata card details that display clearly when expanded */}
                    <motion.div 
                      animate={{ 
                        opacity: isExpanded ? 1 : 0.85,
                        y: isExpanded ? 0 : 15
                      }}
                      className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/40 text-left select-none border-t border-zinc-900 space-y-1.5"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-mono tracking-widest text-teal-400 font-extrabold uppercase">
                            {activeSlide.badge}
                          </span>
                          <h4 className="font-sans font-bold text-xs sm:text-sm text-white tracking-wide">
                            {activeSlide.title}
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono font-black text-rose-455 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded-sm uppercase tracking-wide whitespace-nowrap">
                          {activeSlide.metric}
                        </span>
                      </div>

                      {/* Display descriptions exclusively upon expand events */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-zinc-400 text-2xs sm:text-xs leading-relaxed font-sans font-medium"
                          >
                            {activeSlide.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Left Carousel Navigation Trigger Arrow */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevSlide();
                      }}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 text-white backdrop-blur-sm transition-all z-20 cursor-pointer active:scale-95"
                      title="Previous Evidence"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Right Carousel Navigation Trigger Arrow */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextSlide();
                      }}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 text-white backdrop-blur-sm transition-all z-20 cursor-pointer active:scale-95"
                      title="Next Evidence"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>

                {/* Dot slider position maps */}
                <div className="flex justify-center items-center gap-1.5 selection-none pt-1">
                  {technicalSlides.map((_, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setActiveSlideIdx(sIdx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        activeSlideIdx === sIdx ? "bg-teal-400 w-4.5" : "bg-zinc-700 hover:bg-zinc-650 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Header with structured metadata */}
        <div className="mb-10 text-left select-none">
          <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-500/5 px-2.5 py-1 rounded-md">
            PROVEN TRACK RECORD
          </span>
          <h2 className="mt-3 font-sans font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white tracking-tight">
            Case Studies & Conversion Roadmaps
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 font-sans font-medium max-w-2xl leading-normal">
            Verifiable records detailing how Mohan structures technical audits, repairs indexing barriers, and initiates semantic coverage strategies to outrank high-authority sites.
          </p>
        </div>

        {/* Core CaseStudies layout block */}
        <div className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-150 dark:border-zinc-900 shadow-sm p-2 sm:p-5">
          <CaseStudies />
        </div>

        {/* Inter-linking call to action */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/10 rounded-2xl">
          <div className="flex items-center gap-3">
            <FolderKanban className="w-5 h-5 text-indigo-500" />
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans font-semibold">
              Want to try our instant, server-side AI SEO Auditor and diagnostic tool?
            </p>
          </div>
          <Link
            to="/"
            id="case-studies-cta-to-home"
            className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition duration-200"
          >
            Go to AI Auditor Widget
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Lightbox Popovers */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-md cursor-zoom-out select-none"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Close Zoom"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="HQ Audit Evidence"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
