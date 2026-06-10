import React, { useState, useEffect } from "react";
import { ChevronDown, HelpCircle, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQItem } from "../types";

const faqItems: FAQItem[] = [
  {
    question: "How long does it take to see organic rankings grow?",
    answer: "Generally, noticeable organic traffic gains manifest within 3 to 6 months of launching Mohan's blueprint. The timeline depends heavily on current keyword difficulty scoring, domain age authority, technical errors volume, and content competition intensity within your industry."
  },
  {
    question: "Are your backlink outreach services White-Hat and safe?",
    answer: "Absolutely. ClickForDigital adheres 100% to Google Webmaster Guidelines. We exclude all automated guest posts network, link farms, or spam techniques. All linkages are acquired manually through contextual editorial outreach targeting verified high-E-E-A-T publications."
  },
  {
    question: "What is Technical SEO and why does my crawl budget matter?",
    answer: "Technical SEO regulates how efficiently search engine bots find and save your pages. If your website has circular canonical tags, non-secure scripts, or a bloated XML sitemap, Google crawlers waste their daily budget limits before discovering your critical organic landing pages."
  },
  {
    question: "What are semantic topic clusters and why are they vital?",
    answer: "Topic clustering organizes your content into distinct structural trees. One high-intent transactional parent page receives deep link authority from auxiliary informational blogs. This framework signals holistic topical expertise to Google's semantic indexing spiders."
  },
  {
    question: "How will Mohan optimize our website's Core Web Vitals?",
    answer: "We strip unused CSS and bloated external scripts, compress graphics using webp configurations, implement lazy-loading variables, and eliminate layout shifting errors. Resolving these factors directly reduces bounce rates and lifts competitive rankings."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Injects proper Schema markup dynamically on mount for Rich Results
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    const scriptId = "faq-schema-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(faqSchema);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="faq" className="py-24 bg-slate-50/50 dark:bg-zinc-950/40 border-t border-zinc-100 dark:border-zinc-900/10 scroll-mt-12 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase block">
            FAQ COMPLIANT WITH OUTLINE SCHEMA
          </span>
          <h2 className="mt-2 font-sans font-extrabold text-3xl text-zinc-900 dark:text-white tracking-tight">
            Common Inquiries
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordions">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white dark:bg-zinc-900 rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-teal-500/50 dark:border-teal-500/20 shadow-sm"
                    : "border-zinc-200/60 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                {/* Accordion header click trigger */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  id={`faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:px-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                >
                  <span className="font-sans font-extrabold text-sm sm:text-base text-zinc-950 dark:text-white leading-snug">
                    {item.question}
                  </span>
                  
                  <div className={`text-zinc-400 dark:text-zinc-550 transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-zinc-100 dark:border-zinc-850"
                    >
                      <div className="p-6 sm:px-8 bg-zinc-50/20 dark:bg-zinc-900/10">
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans font-medium">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Micro visual annotation schema proof */}
        <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-400">
          <HelpCircle className="w-3.5 h-3.5 text-teal-500 animate-pulse" />
          <span>Google Rich Snippet FAQ Schema injected dynamically</span>
        </div>

      </div>
    </section>
  );
}
