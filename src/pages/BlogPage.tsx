import React, { useEffect } from "react";
import Blog from "../components/Blog";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowLeft, ArrowRight, Rss } from "lucide-react";
import { Link } from "../components/Router";

export default function BlogPage() {
  useEffect(() => {
    document.title = "SEO Insights, Core Web Vitals & Affiliate Growth Blog | Mohan";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Access deep technical reports and guides on organic traffic growth, Largest Contentful Paint metrics, blogging advice, and digital marketing strategies.");
    }
  }, []);

  return (
    <div className="pt-28 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen" id="blog-page-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic SEO breadcrumbs */}
        <Breadcrumbs currentPage="Insights Blog" />

        {/* Section Header with structured metadata */}
        <div className="mb-6 text-left select-none">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#f97316] uppercase bg-orange-500/5 px-2.5 py-1 rounded-md">
            LATEST RAW DATA
          </span>
          <h1 className="mt-3 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            The Organic Insights Hub
          </h1>
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 font-sans font-medium max-w-2xl leading-normal">
            Bespoke checklists, core algorithm analyses, and detailed tutorials describing how ClickForDigital establishes durable leads volume across several international niches.
          </p>
        </div>

        {/* Core dynamic Blog component (Loads Blogger RSS automatically) */}
        <div className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-150 dark:border-zinc-900 shadow-sm p-2 sm:p-5">
          <Blog />
        </div>

        {/* Inter-linking call to action */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/10 rounded-2xl">
          <div className="flex items-center gap-3">
            <Rss className="w-5 h-5 text-orange-500 animate-pulse" />
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans font-semibold">
              Have specific questions regarding Mohan's organic outreach procedures or audit parameters?
            </p>
          </div>
          <Link
            to="/faq"
            id="blog-cta-to-faq"
            className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition duration-200"
          >
            Read Our FAQ Section
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
