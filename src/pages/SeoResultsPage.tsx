import React, { useEffect } from "react";
import ResultsProof from "../components/ResultsProof";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowLeft, ArrowRight, LineChart } from "lucide-react";
import { Link } from "../components/Router";

export default function SeoResultsPage() {
  useEffect(() => {
    document.title = "Verifiable SEO Results, Ranking Proofs & Metrics | Mohan";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Browse certified Search Console verification screenshots, traffic spike profiles, and keyword placement charts established by Mohan.");
    }
  }, []);

  return (
    <div className="pt-28 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen" id="seo-results-page-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic SEO breadcrumbs */}
        <Breadcrumbs currentPage="SEO Results Proof" />

        {/* Section Header with structured metadata */}
        <div className="mb-10 text-left select-none">
          <span className="text-[10px] font-mono font-bold tracking-widest text-sky-600 dark:text-sky-400 uppercase bg-sky-500/5 px-2.5 py-1 rounded-md">
            PROVEN RESULTS
          </span>
          <h1 className="mt-3 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Verifiable Google Search Console SPIKES
          </h1>
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 font-sans font-medium max-w-2xl leading-normal">
            No vanity reports. Explore actual rankings screenshots, absolute indexing trajectories, and real-time organic transaction logs proven to represent 100% genuine traffic.
          </p>
        </div>

        {/* Core ResultsProof layout block */}
        <div className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-150 dark:border-zinc-900 shadow-sm p-4 sm:p-6">
          <ResultsProof />
        </div>

        {/* Inter-linking call to action */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/10 rounded-2xl">
          <div className="flex items-center gap-3">
            <LineChart className="w-5 h-5 text-sky-500" />
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans font-semibold">
              Read Mohan's detailed guides, technical reports, and insights on our dedicated blog?
            </p>
          </div>
          <Link
            to="/blog"
            id="results-cta-to-blog"
            className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition duration-200"
          >
            Explore Organic Insights Blog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
