import React, { useEffect } from "react";
import About from "../components/About";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowLeft, ArrowRight, UserCheck } from "lucide-react";
import { Link } from "../components/Router";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Mohan — Technical SEO Consultant & Founder | ClickForDigital";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover Mohan's background as an organic traffic consultant. Find credentials, Core Web Vitals expertise, and bespoke outreach methodology.");
    }
  }, []);

  return (
    <div className="pt-28 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen" id="about-page-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic SEO breadcrumbs */}
        <Breadcrumbs currentPage="About Consultant" />

        {/* Section Header with structured metadata */}
        <div className="mb-10 text-left select-none">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#0ea5e9] uppercase bg-sky-500/5 px-2.5 py-1 rounded-md">
            EXECUTIVE PROFILE
          </span>
          <h1 className="mt-3 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Consultant & Founder: Mohan
          </h1>
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 font-sans font-medium max-w-2xl leading-normal">
            B2B Organic Consultant delivering white-hat search optimization services, clean HTML structures, and lightning-fast loading speeds since 2019.
          </p>
        </div>

        {/* Core modular biographical profile */}
        <div className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-150 dark:border-zinc-900 shadow-sm p-2 sm:p-5">
          <About />
        </div>

        {/* Inter-linking for crawl pathway optimization */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 bg-[#0ea5e9]/5 dark:bg-[#0ea5e9]/10 border border-[#0ea5e9]/10 rounded-2xl">
          <div className="flex items-center gap-3">
            <UserCheck className="w-5 h-5 text-[#0ea5e9]" />
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans font-semibold">
              Ready to examine the exact numbers Mohan delivered to his B2B clients?
            </p>
          </div>
          <Link
            to="/seo-results"
            id="about-cta-to-results"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#0ea5e9] hover:text-[#0284c7] transition duration-200"
          >
            Check SEO Results
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
