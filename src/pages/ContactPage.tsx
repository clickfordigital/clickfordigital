import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Link } from "../components/Router";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Mohan — Let's Connect";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get in touch with Mohan regarding professional opportunities, collaborations, internships, and networking in digital marketing.");
    }
  }, []);

  return (
    <div className="pt-28 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen" id="contact-page-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic SEO breadcrumbs */}
        <Breadcrumbs currentPage="Contact Professional" />

        {/* Core ContactSection layout block */}
        <div className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-150 dark:border-zinc-900 shadow-sm p-4 sm:p-5">
          <ContactSection />
        </div>

        {/* Inter-linking call to action */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 bg-teal-500/5 dark:bg-teal-500/10 border border-teal-500/10 rounded-2xl">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-teal-500" />
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans font-semibold">
              Want to view the search visibility and organic traffic milestones Mohan has delivered?
            </p>
          </div>
          <Link
            to="/"
            id="contact-cta-to-case-studies"
            className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition duration-200"
          >
            View SEO Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
