import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SeoAuditor from "../components/SeoAuditor";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Testimonials";
import { ArrowRight, ChevronRight, Compass, Shield, Zap, Sparkles } from "lucide-react";
import { Link } from "../components/Router";

export default function HomePage() {
  useEffect(() => {
    document.title = "Mohan — Premium SEO Growth Analyst | Founder of ClickForDigital";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Elevate your search rankings, traffic clicks, and leads pipeline with Mohan, founder of ClickForDigital. Get a free server-side AI website SEO audit.");
    }
  }, []);

  return (
    <div className="space-y-0" id="home-page-view">
      
      {/* 1. HERO COVER */}
      <Hero />

      {/* 2. STATS SECTION */}
      <Stats />

      {/* 3. DOCK-LIKE GATEWAY ROADMAPS (Dynamic pathways to subpages to maximize core conversion metrics & organic link flow) */}
      <section className="py-16 bg-white dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 tracking-widest uppercase font-extrabold flex items-center justify-center gap-1.5 mb-2">
              <Compass className="w-3.5 h-3.5" />
              SITEMAP ARCHITECTURE
            </span>
            <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white tracking-tight">
              Explore Our Custom Optimization Hub
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans font-medium">
              Click individual nodes below to navigate through Mohan's fully multi-page modular directories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Services Portal */}
            <Link
              to="/services"
              id="gateway-services"
              className="p-5 bg-zinc-50 hover:bg-zinc-100/50 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 rounded-2xl border border-zinc-100 dark:border-zinc-900 group transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="p-2 bg-teal-500/10 rounded-xl text-teal-600 dark:text-teal-400 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                  <Zap className="w-4.5 h-4.5" />
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="font-sans font-bold text-sm text-zinc-900 dark:text-white mt-4 group-hover:text-teal-500 transition-colors">
                1. Professional SEO Deliverables
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-medium leading-relaxed">
                Core Web Vitals acceleration, semantic structure clustering, and localized map packs optimization frameworks.
              </p>
            </Link>

            {/* Case Studies Portal */}
            <Link
              to="/case-studies"
              id="gateway-case-studies"
              className="p-5 bg-zinc-50 hover:bg-zinc-100/50 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 rounded-2xl border border-zinc-100 dark:border-zinc-900 group transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="p-2 bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400 transition-colors group-hover:bg-indigo-500 group-hover:text-white">
                  <Shield className="w-4.5 h-4.5" />
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="font-sans font-bold text-sm text-zinc-900 dark:text-white mt-4 group-hover:text-indigo-500 transition-colors">
                2. Organic Traffic Case Studies
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-medium leading-relaxed">
                Step-by-step documentation detailing B2B organic checkouts increases and keyword indexing expansions.
              </p>
            </Link>

            {/* SEO Results Verification */}
            <Link
              to="/seo-results"
              id="gateway-seo-results"
              className="p-5 bg-zinc-50 hover:bg-zinc-100/50 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 rounded-2xl border border-zinc-100 dark:border-zinc-900 group transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="p-2 bg-sky-500/10 rounded-xl text-sky-600 dark:text-sky-400 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                  <Sparkles className="w-4.5 h-4.5" />
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="font-sans font-bold text-sm text-zinc-900 dark:text-white mt-4 group-hover:text-sky-500 transition-colors">
                3. Rank Screen Verification
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-medium leading-relaxed">
                Certified Search Console indexing logs and organic ranking screenshots confirming 400%+ growth rates.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* 4. REAL-TIME AI AUDITOR PANEL */}
      <SeoAuditor />

      {/* 5. SEAMLESS REINFORCEMENT WORKFLOW */}
      <Workflow />

      {/* 6. VERIFIABLE CLIENT TESTIMONIALS */}
      <Testimonials />

    </div>
  );
}
