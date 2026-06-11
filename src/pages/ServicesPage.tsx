import React, { useEffect } from "react";
import Services from "../components/Services";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowLeft, ArrowRight, Cog } from "lucide-react";
import { Link } from "../components/Router";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "B2B Organic SEO Services & Technical Deliverables | Mohan";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore bespoke SEO service offerings: deep Speed/Core Web Vitals auditing, semantic heading optimization, schema integrations, and local NAP profile consistency.");
    }
  }, []);

  return (
    <div className="pt-28 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen" id="services-page-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic SEO breadcrumbs */}
        <Breadcrumbs currentPage="B2B SEO Services" />

        {/* Section Header with structured metadata */}
        <div className="mb-10 text-left select-none">
          <span className="text-[10px] font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase bg-teal-500/5 px-2.5 py-1 rounded-md">
            WHAT WE GUARANTEE
          </span>
          <h1 className="mt-3 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            High-Impact Organic Deliverables
          </h1>
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 font-sans font-medium max-w-2xl leading-normal">
            Every optimization campaign targets three primary organic levers: page experience parameters, deep keyword structural alignment, and backlink authority pipelines.
          </p>
        </div>

        {/* Core Services layout block */}
        <div className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-150 dark:border-zinc-900 shadow-sm p-2 sm:p-5">
          <Services />
        </div>

        {/* Inter-linking call to action */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 bg-teal-500/5 dark:bg-teal-500/10 border border-teal-500/10 rounded-2xl">
          <div className="flex items-center gap-3">
            <Cog className="w-5 h-5 text-teal-500" />
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans font-semibold">
              Need a completely bespoke organic roadmap tailored to your specific commercial vertical?
            </p>
          </div>
          <Link
            to="/contact"
            id="services-cta-to-contact"
            className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition duration-200"
          >
            Schedule Consultation Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
