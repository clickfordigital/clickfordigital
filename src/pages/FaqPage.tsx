import React, { useEffect } from "react";
import FaqSection from "../components/FaqSection";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "../components/Router";

export default function FaqPage() {
  useEffect(() => {
    document.title = "Frequently Asked SEO Questions & Consultation SLA | Mohan";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get transparent answers on timelines, expectations, backlink outreach procedures, spam audits, and website loading crawl speed optimization details.");
    }
  }, []);

  return (
    <div className="pt-28 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen" id="faq-page-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic SEO breadcrumbs */}
        <Breadcrumbs currentPage="Frequently Asked Questions" />

        {/* Section Header with structured metadata */}
        <div className="mb-10 text-left select-none">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#0ea5e9] uppercase bg-sky-500/5 px-2.5 py-1 rounded-md">
            GOT CURIOSITIES?
          </span>
          <h1 className="mt-3 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            SEO & Campaign FAQs
          </h1>
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 font-sans font-medium max-w-2xl leading-normal">
            Read transparent, direct details about white-hat outreach limitations, structural auditing timescales, and how soon to expect visible ranking adjustments in Google.
          </p>
        </div>

        {/* Core FaqSection layout block */}
        <div className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-150 dark:border-zinc-900 shadow-sm p-4 sm:p-6">
          <FaqSection />
        </div>

        {/* Inter-linking call to action */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 bg-[#0ea5e9]/5 dark:bg-[#0ea5e9]/10 border border-[#0ea5e9]/10 rounded-2xl">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#0ea5e9]" />
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans font-semibold">
              Ready to submit your crawl details or schedule a live screen SEO audit with Mohan?
            </p>
          </div>
          <Link
            to="/contact"
            id="faq-cta-to-contact"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#0ea5e9] hover:text-[#0284c7] transition duration-200"
          >
            Submit Lead Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
