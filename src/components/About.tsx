import React, { useState } from "react";
import { Check, ShieldCheck, Award, ThumbsUp, Activity, ArrowRight, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SkillData {
  name: string;
  level: number; // Percentage out of 100
  info: string;
  bullets: string[];
}

export default function About() {
  const [activeTab, setActiveTab] = useState<string>("Technical SEO");

  const skills: Record<string, SkillData> = {
    "Technical SEO": {
      name: "Technical SEO Optimization",
      level: 98,
      info: "Enhancing crawlability, secure architectures, indexation pipelines, and direct speed optimization to elevate search indexing scores.",
      bullets: [
        "Core Web Vitals enhancement (Optimizing LCP, CLS, and Interaction to Next Paint)",
        "Structured Schema Markup implementation (JSON-LD Organization, Local business patterns)",
        "Advanced crawling troubleshooting & XML Sitemap structure maps",
        "HTTPS SSL security checks, Robots.txt audit, and canonical link maps"
      ]
    },
    "On-Page SEO": {
      name: "On-Page Semantic Relevance",
      level: 95,
      info: "Ensuring individual pages align with direct search intent, utilizing perfect metadata pairings, structured grids, and semantic density.",
      bullets: [
        "Advanced title tagging, description metrics, and headings optimization (H1-H4)",
        "Semantic search density matching using NLP terms and natural references",
        "High-performance internal linking cluster setups to pass PageRank",
        "Image format conversions and ALT parameter alignment"
      ]
    },
    "Content Strategy": {
      name: "E-E-A-T Based Content Layouts",
      level: 92,
      info: "Drafting high-converting topic clusters and authority networks that show high expertise, experience, and authority in search.",
      bullets: [
        "Deep competitor content gaps and keyword opportunities mining",
        "Establishment of structured Content Hubs and topical authorities",
        "Search Intent mapping (Informational vs. Transactional query channels)",
        "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) auditing"
      ]
    },
    "Link Building": {
      name: "Authority and Outreach Campaigns",
      level: 89,
      info: "Securing powerful, white-hat backlink alignments from highly relevant, verified publications to elevate overall domain authority scores.",
      bullets: [
        "Strategic digital PR outreach and content assets pitch mapping",
        "Acquiring contextual natural links with optimized anchor tags",
        "Strategic toxic backlinks diagnostics and Google Disavow updates",
        "Unlinked brand mentions reclaiming campaigns"
      ]
    },
    "Local SEO": {
      name: "Hyper-Local Lead Harvesting",
      level: 96,
      info: "Connecting businesses directly to local regional traffic with maximized local search layouts, maps, and direct user maps.",
      bullets: [
        "Google Business Profile (GBP) complete structure mapping & reviews advice",
        "Structured local citation and NAP (Name, Address, Phone) consistency syncs",
        "Localized content clusters targeting regional intent phrases",
        "Local business schema structured coordinate tags"
      ]
    }
  };

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-950 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column: Visual Bio & Pitch */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-xs font-mono font-bold tracking-wider text-teal-600 dark:text-teal-400 uppercase">
              MEET THE STRATEGIST
            </span>
            <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
              I am Mohan, Founder of ClickForDigital.
            </h2>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              With over 8 years of hand-on technical experience, I manage custom organic search frameworks that consistently turn static pages into dynamic organic traffic pipelines. Our specialized boutique agency, <strong>ClickForDigital</strong>, operates on one clear standard: <em>No vanity stats. Just real ranks, more clients, and verifiable ROI.</em>
            </p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              We decode the complex algorithms of Google using direct historical data. Whether you require an immediate speed repair, a semantic content gap restoration, or a localized geographic dominance campaign, we craft search growth engines designed to last.
            </p>

            {/* Micro Credibility badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30">
                <ShieldCheck className="w-5 h-5 text-teal-500 shrink-0" />
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">White-Hat Standard Only</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30">
                <Award className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">ROI-Focused Reports</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => handleScrollTo("#contact")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition"
              >
                Let’s speak about your website goals <span className="font-sans">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Skills Tab showcase */}
          <div className="lg:col-span-7 flex flex-col" id="skills-tabs">
            <div className="bg-zinc-50/50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-100 dark:border-zinc-900 p-6 sm:p-8 shadow-sm">
              <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase block mb-4">
                CORE WORK DOMAINS
              </span>
              
              {/* Tab headers scrollable horizontally on mobile */}
              <div className="flex gap-1 overflow-x-auto pb-3 -mx-2 px-2 scrollbar-none border-b border-zinc-200/50 dark:border-zinc-800/60">
                {Object.keys(skills).map((tabName) => (
                  <button
                    key={tabName}
                    onClick={() => setActiveTab(tabName)}
                    id={`tab-skill-${tabName.toLowerCase().replace(" ", "-")}`}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-tight whitespace-nowrap transition-all focus:outline-none cursor-pointer ${
                      activeTab === tabName
                        ? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950"
                        : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {tabName}
                  </button>
                ))}
              </div>

              {/* Tab Display Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 flex flex-col"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <h3 className="font-sans font-bold text-lg text-zinc-900 dark:text-white">
                      {skills[activeTab].name}
                    </h3>
                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 font-bold uppercase shrink-0">
                      <span>Proficiency:</span>
                      <span className="text-teal-600 dark:text-teal-400">{skills[activeTab].level}%</span>
                    </div>
                  </div>

                  {/* Graphic Progress slider */}
                  <div className="mt-3 w-full bg-zinc-200/50 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skills[activeTab].level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="bg-gradient-to-r from-teal-500 to-indigo-500 h-full rounded-full"
                    />
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans font-medium">
                    {skills[activeTab].info}
                  </p>

                  <div className="mt-6 border-t border-zinc-200/40 dark:border-zinc-800/50 pt-6">
                    <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-500 uppercase block mb-3">
                      KEY STRATEGY CAPABILITIES:
                    </span>
                    <ul className="space-y-2.5">
                      {skills[activeTab].bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 font-sans">
                          <Check className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                          <span className="font-medium leading-normal">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
