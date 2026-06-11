import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Link } from "../components/Router";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Mohan — Schedule Your B2B Organic SEO Audit";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Submit your crawl credentials or schedule a live organic roadmap workshop with Mohan. Fast feedback loop within 24 hours guaranteed.");
    }
  }, []);

  return (
    <div className="pt-28 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen" id="contact-page-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic SEO breadcrumbs */}
        <Breadcrumbs currentPage="Contact Consultant" />

        {/* Section Header with structured metadata */}
        <div className="mb-10 text-left select-none">
          <span className="text-[10px] font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase bg-teal-500/5 px-2.5 py-1 rounded-md">
            GET IN CONTACT
          </span>
          <h1 className="mt-3 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Schedule Your Organic Consultation
          </h1>
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 font-sans font-medium max-w-2xl leading-normal">
            Have crawling questions or need an expert to inspect your site rankings? Fill in your website configuration below and Mohan will examine it within 24 hours.
          </p>
        </div>

        {/* Core ContactSection layout block */}
        <div className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-150 dark:border-zinc-900 shadow-sm p-4 sm:p-5">
          <ContactSection />
        </div>

        {/* Inter-linking call to action */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 bg-teal-500/5 dark:bg-teal-500/10 border border-teal-500/10 rounded-2xl">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-teal-500" />
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans font-semibold">
              Want to read what Mohan's previous clients have achieved with on-page changes?
            </p>
          </div>
          <Link
            to="/case-studies"
            id="contact-cta-to-case-studies"
            className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition duration-200"
          >
            Read Growth Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
