import React from "react";
import { Cpu, Search, Key, Compass, PenTool, MapPin, Link, Gauge, ArrowUpRight, Share2, Layers, Users, Sparkles, Eye } from "lucide-react";
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
      id: "srv-onpage",
      name: "On Page SEO",
      icon: <PenTool className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      desc: "Fine-tuning headings, titles, image metadata, and semantic frequency arrays to rank your primary page nodes for target transactional queries.",
      processTime: "Every page",
      deliverables: ["Meta tags mapping & deployment", "Semantic density matching & NLP alignment", "Heading structures (H1-H4) audit"]
    },
    {
      id: "srv-offpage",
      name: "Off Page SEO",
      icon: <Share2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      desc: "Securing high-tier editorial links and citations from authoritative, industry-approved business platforms to boost target domain rating trust indexes.",
      processTime: "Monthly syncs",
      deliverables: ["High-authority guest outreach", "Contextual backlink asset distribution", "Toxic links audit & disavow mapping"]
    },
    {
      id: "srv-technical",
      name: "Technical SEO",
      icon: <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
      desc: "Assuring zero structural indexation leaks or slow performance benchmarks to satisfy standard search algorithms and Core Web Vitals targets.",
      processTime: "Continuous",
      deliverables: ["Core Web Vitals layout shift fixes", "Sitemap hierarchy & Robots.txt checks", "Structured Schema mapping (JSON-LD)"]
    },
    {
      id: "srv-local",
      name: "Local SEO",
      icon: <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      desc: "Optimizing Google Business Profile listings and localized regional search citations to lock down top ranks in city and regional search boxes.",
      processTime: "Weekly review",
      deliverables: ["Google Business Profile verification", "Geographic NAP synchronization", "Local map pack rankings defense"]
    },
    {
      id: "srv-audit",
      name: "SEO Audit",
      icon: <Search className="w-5 h-5 text-teal-700 dark:text-teal-400" />,
      desc: "A surgical inspection of your entire domain architecture and legacy index configurations to pinpoint and dismantle growth bottlenecks.",
      processTime: "Immediate",
      deliverables: ["Technical index block diagnostics", "Crawl-budget depletion report", "Site structure optimization schema"]
    },
    {
      id: "srv-keyword",
      name: "Keyword Research",
      icon: <Key className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      desc: "Unearthing high-intent, low-difficulty phrases representing active customer search pipelines that translate directly into inbound revenue.",
      processTime: "5 Days",
      deliverables: ["Commercial intent indexing maps", "Competitor keyword gap matrices", "Search volume-difficulty ratios"]
    },
    {
      id: "srv-competitor",
      name: "Competitor Analysis",
      icon: <Eye className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      desc: "Reverse-engineering your competitors' leading organic templates, backlink portfolios, and traffic-generation pillars to overtake them.",
      processTime: "Specialized",
      deliverables: ["Organic market-share breakdowns", "Source backlink profiling", "Competitor content gap diagnostics"]
    },
    {
      id: "srv-wordpress",
      name: "WordPress SEO",
      icon: <Layers className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      desc: "Calibrating WordPress platforms with RankMath or Yoast, speeding up render times, and setting up perfect internal link grids.",
      processTime: "On-demand",
      deliverables: ["RankMath / Yoast master setup", "Theme asset light-weight tuning", "Permalinks and taxonomy diagnostics"]
    },
    {
      id: "srv-smo",
      name: "Social Media Optimization (SMO)",
      icon: <Users className="w-5 h-5 text-pink-600 dark:text-pink-400" />,
      desc: "Amplifying organic digital brand awareness and content distribution across social channels to drive auxiliary referral traffic layers.",
      processTime: "Weekly plans",
      deliverables: ["Platform bio & visual optimization", "Shareable content loop blueprints", "Referral traffic monitoring logs"]
    },
    {
      id: "srv-content-opt",
      name: "Content Optimization",
      icon: <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      desc: "Polishing existing articles and sales pages using search-intent mapping to expand thematic footprint and boost CTR scores.",
      processTime: "Ongoing",
      deliverables: ["Topical relevance gap patching", "Click-through title tuning", "Structured readable callouts"]
    }
  ];

  const handleScrollToContact = () => {
    // Multi-page friendly, fallback scroll or route to contact
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.history.pushState(null, "", "/contact");
      window.dispatchEvent(new Event("popstate"));
    }
  };

  return (
    <section id="services" className="py-12 bg-transparent scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Services Grid (Optimized 3-Column rhythmic layout for 10 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="services-grid">
          {servicesList.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              id={srv.id}
              className="bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-150/80 dark:border-zinc-900 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-teal-500/30 dark:hover:border-teal-500/20 hover:scale-[1.01] transition-all duration-300 group"
            >
              <div>
                {/* Header elements */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-105 dark:border-zinc-800 flex items-center justify-center group-hover:scale-105 group-hover:border-teal-500/20 transition-all duration-300">
                    {srv.icon}
                  </div>
                  <span className="font-mono text-[9px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase">
                    Cycle: {srv.processTime}
                  </span>
                </div>

                <h3 className="font-sans font-extrabold text-base sm:text-lg text-zinc-950 dark:text-white mt-5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {srv.name}
                </h3>

                <p className="mt-2.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans font-medium">
                  {srv.desc}
                </p>
              </div>

              {/* Deliverables sub-list */}
              <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-900/60 w-full">
                <span className="text-[9px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-550 uppercase block mb-2">
                  KEY ACTION ITEMS:
                </span>
                <ul className="space-y-1.5 mb-5 select-none text-left">
                  {srv.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="text-[11px] font-sans text-zinc-650 dark:text-zinc-450 flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5 animate-pulse" />
                      <span className="font-medium leading-tight">{del}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleScrollToContact}
                  className="w-full text-center bg-zinc-50 hover:bg-teal-600 hover:text-white dark:bg-zinc-900 dark:hover:bg-teal-500/20 dark:hover:text-teal-400 py-2.5 rounded-xl border border-zinc-100 dark:border-zinc-850 text-xs font-bold text-zinc-850 dark:text-zinc-300 flex items-center justify-center gap-1.5 transition-all focus:outline-none cursor-pointer"
                >
                  Order Strategy Block
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
