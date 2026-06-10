import React from "react";
import { Cpu, Search, Key, Compass, PenTool, MapPin, Link, Gauge, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface ServiceItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  desc: string;
  processTime: string;
  deliverables: string[];
}

export default function Services() {
  const servicesList: ServiceItem[] = [
    {
      id: "srv-technical",
      name: "Technical SEO",
      icon: <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
      desc: "Repairing hidden crawlability and indexation structural problems that block search engines from parsing your primary domains correctly.",
      processTime: "Continuous",
      deliverables: ["Core Web Vitals Audit", "Crawl Budget Mapping", "HTTPS & SSL Repairs"]
    },
    {
      id: "srv-audit",
      name: "Comprehensive SEO Audit",
      icon: <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      desc: "A thorough evaluation of your entire organic footprint, benchmarked against competitors to reveal quick-wins.",
      processTime: "7-14 Days",
      deliverables: ["Actionable Roadmap", "Competitor Matrix Analysis", "Error Backlog Mapping"]
    },
    {
      id: "srv-keyword",
      name: "Keyword Research",
      icon: <Key className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      desc: "Locating high-volume, low-competition, transaction-oriented commercial phrases that represent immediate sales revenue channels.",
      processTime: "5-10 Days",
      deliverables: ["Transactional Map Grid", "Search Intent Auditing", "SERP Friction Scores"]
    },
    {
      id: "srv-content",
      name: "Content Strategy & Hubs",
      icon: <Compass className="w-5 h-5 text-rose-600 dark:text-rose-450" />,
      desc: "Structuring top-tier, E-E-A-T compliant topical clusters designed to convert raw informational queries into direct customer inquiries.",
      processTime: "Monthly cycles",
      deliverables: ["Topical Cluster Blueprint", "E-E-A-T Content Calendars", "Keyword Gap Auditing"]
    },
    {
      id: "srv-onpage",
      name: "On-Page SEO Relevance",
      icon: <PenTool className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      desc: "Optimizing headers, meta text, image markers, and page titles to align perfectly with target keywords.",
      processTime: "Continuous",
      deliverables: ["Snippet REST optimization", "Heading Structure Audits", "Internal Link Mesh Networks"]
    },
    {
      id: "srv-local",
      name: "Local SEO & Citations",
      icon: <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      desc: "Dominating local territory and search channels by aligning maps, citations, and regional schemas.",
      processTime: "Weekly syncs",
      deliverables: ["Google Business Alignment", "Citation NAP Consistency Profiles", "Geographic Suburb Blog Guides"]
    },
    {
      id: "srv-link",
      name: "Authority Link Building",
      icon: <Link className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      desc: "Acquiring high-authority, contextual editorial links from certified domains to raise overall search score confidence.",
      processTime: "Monthly pipeline",
      deliverables: ["Digital PR Outreaches", "Broken Link Restoration", "Niche Mentions Reclaims"]
    },
    {
      id: "srv-speed",
      name: "Website Optimization & UX",
      icon: <Gauge className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      desc: "Supercharging mobile render times and layout stability (CLS) to guarantee that incoming organic leads convert into paid buyers.",
      processTime: "7 Days Audit",
      deliverables: ["Mobile Accessibility Fixes", "Asset Compress Matrices", "Form Conversion Audits"]
    }
  ];

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50/50 dark:bg-zinc-950/40 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase block">
            Core SEO Services
          </span>
          <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Comprehensive Growth Solutions
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-sm sm:text-base font-sans font-medium">
            Strategic deliverables and optimization routines engineered to drive scalable Google search conversions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" id="services-grid">
          {servicesList.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              id={srv.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-150/80 dark:border-zinc-900 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-teal-500/30 dark:hover:border-teal-500/20 hover:scale-[1.01] transition-all duration-300 group"
            >
              <div>
                {/* Header elements */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center group-hover:scale-105 group-hover:border-teal-500/20 transition-all duration-300">
                    {srv.icon}
                  </div>
                  <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase">
                    Cycle: {srv.processTime}
                  </span>
                </div>

                <h3 className="font-sans font-extrabold text-base sm:text-lg text-zinc-950 dark:text-white mt-5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {srv.name}
                </h3>

                <p className="mt-2.5 text-xs text-zinc-550 dark:text-zinc-400 leading-relaxed font-sans font-medium">
                  {srv.desc}
                </p>
              </div>

              {/* Deliverables sub-list */}
              <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-900/60 w-full">
                <span className="text-[9px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-550 uppercase block mb-2">
                  KEY ACTION ITEMS:
                </span>
                <ul className="space-y-1.5 mb-5 select-none">
                  {srv.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="text-[10px] sm:text-xs font-sans text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-teal-500 shrink-0" />
                      <span className="font-medium leading-none">{del}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleScrollTo("#contact")}
                  className="w-full text-center bg-zinc-50 hover:bg-teal-600 hover:text-white dark:bg-zinc-950 dark:hover:bg-teal-500/20 dark:hover:text-teal-400 py-2.5 rounded-xl border border-zinc-100 dark:border-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-300 flex items-center justify-center gap-1.5 transition-all focus:outline-none"
                >
                  Order Strategy
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
