import React, { useEffect } from "react";
import CaseStudies from "../components/CaseStudies";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowLeft, ArrowRight, FolderKanban } from "lucide-react";
import { Link } from "../components/Router";

export default function CaseStudiesPage() {
  useEffect(() => {
    document.title = "B2B Organic SEO Case Studies & Search Growth Reports";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore direct organic traffic conversion summaries, backlink acquisition histories, and technical roadmap executions engineered by Mohan.");
    }
  }, []);

  return (
    <div className="pt-28 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen" id="case-studies-page-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic SEO breadcrumbs */}
        <Breadcrumbs currentPage="Case Studies" />

        {/* Section Header with structured metadata */}
        <div className="mb-10 text-left select-none">
          <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-500/5 px-2.5 py-1 rounded-md">
            PROVEN TRACK RECORD
          </span>
          <h1 className="mt-3 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Case Studies & Conversion Roadmaps
          </h1>
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
    </div>
  );
}
