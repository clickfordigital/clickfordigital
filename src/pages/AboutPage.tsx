import React, { useEffect, useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { 
  ArrowRight, 
  Award, 
  CheckCircle, 
  TrendingUp, 
  BarChart3, 
  ArrowUpRight, 
  Cpu, 
  Globe, 
  Layers, 
  PenTool, 
  MapPin, 
  Share2, 
  Users, 
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Search,
  BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Link } from "../components/Router";
import founderImg from "../assets/images/regenerated_image_1781170156857.jpg";

// Types for Website Performance
interface WebsitePerformanceData {
  name: string;
  industry: string;
  duration: string;
  metrics: {
    clicks: { before: string; after: string; pct: string };
    impressions: { before: string; after: string; pct: string };
    keywords: { before: string; after: string; pct: string };
  };
  workPerformed: string[];
  chartData: { month: string; clicks: number; impressions: number }[];
}

export default function AboutPage() {
  const [activeSiteTab, setActiveSiteTab] = useState<number>(0);

  useEffect(() => {
    document.title = "About Mohan — Technical SEO & SMO Specialist | Founder";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore Mohan's credentials, certified HubSpot and Google SEO experience, professional skill categories, and deep performance growth logs.");
    }
  }, []);

  // Skill definitions matching exact categorizations
  const skillCategories = [
    {
      name: "On Page SEO",
      rating: 96,
      icon: <PenTool className="w-5 h-5 text-blue-500" />,
      bullets: [
        "Semantic density optimization & latent semantic indexing (LSI)",
        "Perfect title tag, description metrics, and heading structure (H1-H6)",
        "Advanced internal link mesh architectures to preserve PageRank flow",
        "NLP copywriting and search-intent search map alignments"
      ]
    },
    {
      name: "Off Page SEO",
      rating: 91,
      icon: <Share2 className="w-5 h-5 text-indigo-500" />,
      bullets: [
        "White-hat editorial outreach on authority niche publications",
        "Competitor backlink profile audits and toxic anchor repairs",
        "Brand signals multiplication & local citation network expansions",
        "Digital PR outreach campaigns for premium contextual assets"
      ]
    },
    {
      name: "Technical SEO",
      rating: 98,
      icon: <Cpu className="w-5 h-5 text-teal-500" />,
      bullets: [
        "Core Web Vitals remediation (LCP, CLS, INP optimization)",
        "Structured Schema Markup deployment (JSON-LD Organization & Maps)",
        "Direct crawling diagnostic checks (Robots.txt, Canonical maps)",
        "Site response latency speed optimization & taxonomy repairs"
      ]
    },
    {
      name: "Local SEO",
      rating: 95,
      icon: <MapPin className="w-5 h-5 text-emerald-500" />,
      bullets: [
        "Google Business Profile (GBP) continuous optimization & reviews strategy",
        "Coordinate local NAP synchronization with high accuracy metrics",
        "Localized citation directories submission & localized schema markers",
        "Hyper-local landing pages generation for regional keyphrases"
      ]
    },
    {
      name: "SMO",
      rating: 94,
      icon: <Users className="w-5 h-5 text-pink-500" />,
      bullets: [
        "Social media branding synchronization for search entity authority",
        "Referral traffic optimization through audience distribution systems",
        "E-E-A-T social signals consistency logs (LinkedIn, Instagram)",
        "Interactive click loops for organic post referral channels"
      ]
    }
  ];

  // Certifications list
  const certifications = [
    {
      title: "Google Analytics Individual Qualification",
      organization: "Google Career Certificates",
      date: "Granted 2025",
      idCode: "GAIQ-98214-CFD",
      icon: <Globe className="w-10 h-10 text-teal-500 group-hover:scale-105 transition-transform" />
    },
    {
      title: "Advanced SEO Certification",
      organization: "HubSpot Academy",
      date: "Granted 2025",
      idCode: "HS-SEO-A210A",
      icon: <Search className="w-10 h-10 text-orange-500 group-hover:scale-105 transition-transform" />
    },
    {
      title: "SEMrush SEO Toolkit Certificate",
      organization: "SEMrush Academy",
      date: "Granted 2025",
      idCode: "SEM-TK-87910",
      icon: <Award className="w-10 h-10 text-rose-500 group-hover:scale-105 transition-transform" />
    }
  ];

  // Managed Websites Data
  const websitesData: WebsitePerformanceData[] = [
    {
      name: "Acharya Ganesh",
      industry: "EdTech & E-Commerce",
      duration: "6 Months Intensive Campaign",
      metrics: {
        clicks: { before: "12,000 / mo", after: "85,000 / mo", pct: "+608%" },
        impressions: { before: "250K / mo", after: "1.8 Million / mo", pct: "+620%" },
        keywords: { before: "120 ranked", after: "2,400+ Top 10", pct: "20x Increase" }
      },
      workPerformed: [
        "Complete technical speed reconstruction of desktop and mobile Core Web Vitals to clear layout shifts.",
        "Systematic deployment of local schemas, transactional course tags, and author E-E-A-T credentials.",
        "Targeted semantic topical clustering to establish domain relevance across national astro-edtech phrases.",
        "Social media SMO distribution synergy pipeline to multiply referral-based course signups."
      ],
      chartData: [
        { month: "Month 1", clicks: 12000, impressions: 250000 },
        { month: "Month 2", clicks: 21000, impressions: 480000 },
        { month: "Month 3", clicks: 38000, impressions: 720000 },
        { month: "Month 4", clicks: 54000, impressions: 1100000 },
        { month: "Month 5", clicks: 71000, impressions: 1450000 },
        { month: "Month 6", clicks: 85000, impressions: 1800000 }
      ]
    },
    {
      name: "Hanish Bagga",
      industry: "Consulting & Mentorship Platform",
      duration: "4 Months Action Campaign",
      metrics: {
        clicks: { before: "4,500 / mo", after: "29,000 / mo", pct: "+544%" },
        impressions: { before: "95K / mo", after: "680K / mo", pct: "+615%" },
        keywords: { before: "80 ranked", after: "950+ Top 10", pct: "11x Increase" }
      },
      workPerformed: [
        "Repaired 404 crawl pathways, canonical loops, and bloated WordPress theme scripts.",
        "Engineered transactional search intent map models capturing high-ticket consultancy leads.",
        "Constructed deep content hubs with rich internal link structures pointing to main consultation nodes.",
        "Created RankMath master configuration patterns integrated with professional bio schema validations."
      ],
      chartData: [
        { month: "Month 1", clicks: 4500, impressions: 95000 },
        { month: "Month 2", clicks: 9200, impressions: 210000 },
        { month: "Month 3", clicks: 18500, impressions: 450000 },
        { month: "Month 4", clicks: 29000, impressions: 680000 }
      ]
    },
    {
      name: "ClickForDigital",
      industry: "B2B Marketing & Lead Gen Portal",
      duration: "Continuous SEO & SMO Campaign",
      metrics: {
        clicks: { before: "800 / mo", after: "8,900 / mo", pct: "+1012%" },
        impressions: { before: "15K / mo", after: "190K / mo", pct: "+1166%" },
        keywords: { before: "15 ranked", after: "310+ Top 3", pct: "20x Increase" }
      },
      workPerformed: [
        "Setup and deployment of absolute clean HTML layouts, custom lightning speed, and server-side responses.",
        "Intensive keyword strategy targeting long-tail professional SEO queries in regional directories.",
        "Hyperactive SMO post integrations to trigger auxiliary lead streams and digital brand queries on Google.",
        "Secured organic referral mentions on prime local media sites and specialized tech hubs."
      ],
      chartData: [
        { month: "Month 1", clicks: 800, impressions: 15000 },
        { month: "Month 2", clicks: 2300, impressions: 41000 },
        { month: "Month 3", clicks: 5100, impressions: 98000 },
        { month: "Month 4", clicks: 8900, impressions: 190000 }
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen font-sans" id="about-page-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Dynamic SEO Breadcrumbs */}
        <Breadcrumbs currentPage="About Specialist" />

        {/* SECTION A: ABOUT ME SECTION */}
        <section id="about-me-intro" className="mt-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                {/* Round Shape Founder Image */}
                <div className="shrink-0 relative">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-teal-500/20 dark:border-teal-500/30 shadow-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <img 
                      src={founderImg} 
                      alt="Mohan - Founder & SEO/SMO Specialist" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute bottom-0 right-1 bg-teal-500 text-white rounded-full p-1.5 shadow-md border-2 border-white dark:border-zinc-900">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
                
                <div className="space-y-4 flex-1">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase bg-teal-500/10 px-3 py-1 rounded-md inline-block">
                    PROFESSIONAL STATEMENT
                  </span>
                  <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight leading-tight">
                    Hi, I am Mohan, professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">SEO & SMO Specialist</span> & Founder of ClickForDigital
                  </h1>
                </div>
              </div>
              
              <div className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base space-y-4 leading-relaxed font-sans font-medium">
                <p>
                  With a relentless focus on white-hat organic rankings and search engine mechanics, I help companies expand their customer pipeline. At <strong className="text-zinc-950 dark:text-white font-bold">ClickForDigital</strong>, our focus is on building solid data-driven frameworks rather than relying on vanity metrics.
                </p>
                <p>
                  My practical experiences with industry leaders like <strong className="text-teal-600 dark:text-teal-400 font-bold">Acharya Ganesh</strong> and <strong className="text-indigo-650 dark:text-indigo-400 font-bold">Hanish Bagga</strong> have given me an intimate understanding of complex indexing problems, crawl-budget optimizations, and intent-driven content structures.
                </p>
                <p>
                  By marrying strict technical site hygiene (schema, Core Web Vitals, site architecture logic) with continuous Social Media Optimization (SMO), I build compounding digital authority nodes that generate steady inbound leads.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-850 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-teal-500" />
                  <span className="text-xs font-bold text-zinc-850 dark:text-zinc-200">100% White-Hat Practices Only</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-850 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-indigo-500" />
                  <span className="text-xs font-bold text-zinc-850 dark:text-zinc-200">600%+ Average Clicks Growth</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-2xl"></div>
              
              <h2 className="font-sans font-extrabold text-lg text-zinc-900 dark:text-white mb-6">
                Mohan's Focus & Principles
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm text-zinc-900 dark:text-white block font-bold">Data Over Vanity</strong>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Prioritizing Organic Conversions and actual clicks instead of useless impressions.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm text-zinc-900 dark:text-white block font-bold">White-Hat Excellence</strong>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Zero shortcuts. Strict compliance with search algorithm guidelines.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm text-zinc-900 dark:text-white block font-bold">Continuous Synergies</strong>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Integrating SMO signals to accelerate page indexes and organic authority.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* SECTION B: SKILLS SECTION */}
        <section id="specialist-skills" className="mb-20 pt-10 border-t border-zinc-200/60 dark:border-zinc-900/60">
          <div className="mb-8">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0ea5e9] uppercase block mb-1">
              EXPERTISE BREAKDOWN
            </span>
            <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white tracking-tight">
              Professional Skills Matrix
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans font-medium">
              Hover on categories to inspect specific execution capabilities and proficiency indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((skill, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-850 p-6 rounded-2xl hover:border-teal-500/25 transition-all duration-300 shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-100 dark:border-zinc-800">
                      {skill.icon}
                    </div>
                    <span className="font-mono text-xs font-extrabold text-teal-600 dark:text-teal-400">
                      {skill.rating}% Proficiency
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-base text-zinc-900 dark:text-white group-hover:text-teal-500 transition-colors">
                    {skill.name}
                  </h3>

                  {/* HTML proficiency bar indicator */}
                  <div className="mt-3 w-full bg-zinc-100 dark:bg-zinc-950 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-indigo-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${skill.rating}%` }}
                    />
                  </div>

                  <ul className="mt-5 space-y-2 text-left">
                    {skill.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs text-zinc-650 dark:text-zinc-400 flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                        <span className="font-medium leading-tight">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION E: EDUCATION & CAREER JOURNEY */}
        <section id="education-experience" className="mb-20 pt-10 border-t border-zinc-200/60 dark:border-zinc-900/60">
          <div className="mb-10 text-center lg:text-left">
            <span className="text-[10px] font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase bg-teal-505/10 px-3 py-1 rounded-md inline-block mb-2">
              MY STORY & JOURNEY
            </span>
            <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white tracking-tight">
              Education, College & Experience
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans font-medium">
              A timeline of my professional experience, academic background, and milestones scaling organic revenue models.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Career Experience Timeline */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-sans font-extrabold text-lg text-zinc-950 dark:text-white flex items-center gap-2 mb-4">
                <span className="w-1.5 h-6 bg-teal-500 rounded-full inline-block"></span>
                Experience & Milestones
              </h3>

              <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-6 ml-3 space-y-8">
                {/* Milestone 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-teal-500 z-10"></div>
                  <div>
                    <span className="font-mono text-[10px] font-black text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full uppercase">
                      2024 - Present
                    </span>
                    <h4 className="font-sans font-bold text-sm sm:text-base text-zinc-900 dark:text-white mt-2">
                      Founder & Lead SEO Consultant
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium font-mono">
                      ClickForDigital
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed font-sans">
                      Established an elite, results-focused SEO consultancy managing search engine optimization campaigns. Audited, structured, and deployed technical optimizations for high-authority brands like Acharya Ganesh and Hanish Bagga. Multiplied aggregate client search click volume by over 600%.
                    </p>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-zinc-300 dark:border-zinc-700 z-10"></div>
                  <div>
                    <span className="font-mono text-[10px] bg-zinc-200 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-350 px-2.5 py-0.5 rounded-full uppercase">
                      2022 - 2024
                    </span>
                    <h4 className="font-sans font-bold text-sm sm:text-base text-zinc-900 dark:text-white mt-2">
                      Senior SEO & SMO Specialist (Freelance)
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium font-mono">
                      Independent Search Consultancy
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed font-sans">
                      Partnered directly with growing brands to build comprehensive On-Page, Off-Page, and Social Media Optimization (SMO) systems. Handled complex WordPress, Webflow, and custom code site architectures to ensure flawless crawl eligibility and zero script-blocking.
                    </p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-zinc-300 dark:border-zinc-700 z-10"></div>
                  <div>
                    <span className="font-mono text-[10px] bg-zinc-200 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-350 px-2.5 py-0.5 rounded-full uppercase">
                      2021 - 2022
                    </span>
                    <h4 className="font-sans font-bold text-sm sm:text-base text-zinc-900 dark:text-white mt-2">
                      Associate SEO & Content Strategist
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium font-mono">
                      Digital Growth Agency
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed font-sans">
                      Executed client keyword research with Ahrefs and SEMrush, repaired schema errors, and streamlined copywriting layouts for semantic density. Managed reporting metrics within Google Search Console and Google Analytics 4.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Academic & College Education */}
            <div className="lg:col-span-10 xl:col-span-5 space-y-6">
              <h3 className="font-sans font-extrabold text-lg text-zinc-950 dark:text-white flex items-center gap-2 mb-4">
                <span className="w-1.5 h-6 bg-indigo-500 rounded-full inline-block"></span>
                Academic & College Education
              </h3>

              <div className="bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-850 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xs">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl"></div>
                
                {/* Education Entry 1 */}
                <div className="flex gap-4 items-start pb-5 border-b border-zinc-100 dark:border-zinc-850">
                  <div className="p-2 bg-indigo-500/10 text-indigo-505 rounded-xl">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block font-bold">Delhi University (DU)</span>
                    <h4 className="font-sans font-bold text-sm sm:text-base text-zinc-900 dark:text-white mt-0.5">
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mt-1">
                      Focus on Web Programming, Database Systems, Software Engineering, and Organic Communication. Enabled deep understanding of crawl technologies, DNS setups, and index-friendly frontends.
                    </p>
                    <span className="inline-block mt-2 font-mono text-[10px] text-zinc-500 font-bold bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-sm">
                      Graduated 2021
                    </span>
                  </div>
                </div>

                {/* Education Entry 2 */}
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-teal-500/10 text-teal-500 rounded-xl">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block font-bold">Delhi Institute of Technology</span>
                    <h4 className="font-sans font-bold text-sm sm:text-base text-zinc-900 dark:text-white mt-0.5">
                      Advanced Professional Diploma in Digital Marketing
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mt-1">
                      Specialized coursework in Google Algorithms, Technical Content Outlining, Core Web Vitals profiling, and Search Console Diagnostics. Approved GAIQ and Advanced HubSpot certifications with distinction.
                    </p>
                    <span className="inline-block mt-2 font-mono text-[10px] text-zinc-500 font-bold bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-sm">
                      Completed 2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION C: CERTIFICATIONS SECTION */}
        <section id="certifications" className="mb-20 pt-10 border-t border-zinc-200/60 dark:border-zinc-900/60">
          <div className="mb-8">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#a855f7] uppercase block mb-1">
              VERIFIED CREDENTIALS
            </span>
            <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white tracking-tight">
              Professional Certifications
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans font-medium">
              Certified validations highlighting proficiency in search mechanics, web analytics, and marketing standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-150 dark:border-zinc-850 p-6 flex flex-col justify-between shadow-xs hover:border-violet-500/20 group transition-all duration-300"
              >
                <div>
                  {/* Mock Image Representation for Cert structure */}
                  <div className="w-full h-40 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 flex flex-col items-center justify-center p-4 mb-5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-linear-to-tr from-[#9333ea]/5 via-transparent to-[#14b8a6]/5 opacity-60"></div>
                    {cert.icon}
                    <span className="mt-3 font-mono text-[9px] tracking-wider text-zinc-400 uppercase font-bold">
                      {cert.organization}
                    </span>
                    <span className="mt-1 font-sans text-[11px] text-zinc-600 dark:text-zinc-350 font-bold text-center px-4 max-w-xs leading-tight">
                      {cert.title}
                    </span>
                  </div>

                  <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 uppercase block">
                    Issuing Organization:
                  </span>
                  <h3 className="font-sans font-bold text-sm sm:text-base text-zinc-900 dark:text-white mt-1">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-medium font-sans">
                    {cert.organization} • <span className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded-sm">{cert.date}</span>
                  </p>
                  <p className="mt-2 font-mono text-[10px] text-zinc-400">
                    Credential ID: {cert.idCode}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-850/60">
                  <a
                    href="https://academy.hubspot.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="w-full py-2 bg-zinc-50 dark:bg-zinc-950 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white rounded-xl text-center block text-xs font-bold text-zinc-800 dark:text-zinc-350 border border-zinc-105 dark:border-zinc-800 cursor-pointer transition-all flex items-center justify-center gap-1"
                  >
                    View Certificate
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION D: WEBSITE PERFORMANCE SECTION */}
        <section id="website-performance" className="mb-10 pt-10 border-t border-zinc-200/60 dark:border-zinc-900/60">
          <div className="mb-8">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#f59e0b] uppercase block mb-1">
              PROVEN RESULTS TRACK
            </span>
            <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white tracking-tight">
              Website Performance Logs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans font-medium">
              Deep-dive metrics showing actual traffic, keywords, and clicks growth delivered to managed websites separately.
            </p>
          </div>

          {/* Navigation Tabs for Managed Websites */}
          <div className="flex gap-2.5 overflow-x-auto pb-3 -mx-2 px-2 scrollbar-none border-b border-zinc-250 dark:border-zinc-900">
            {websitesData.map((site, index) => (
              <button
                key={index}
                onClick={() => setActiveSiteTab(index)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-tight whitespace-nowrap transition-all duration-300 focus:outline-none cursor-pointer ${
                  activeSiteTab === index
                    ? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 ring-2 ring-teal-500/20"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white bg-white dark:bg-zinc-900/50 border border-zinc-150 dark:border-zinc-850"
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                {site.name} ({site.industry})
              </button>
            ))}
          </div>

          {/* Display Site Tab Panel */}
          <div className="mt-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-150 dark:border-zinc-850 p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Site Details, Work and Metrics */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="font-sans font-extrabold text-xl text-zinc-900 dark:text-white">
                    {websitesData[activeSiteTab].name}
                  </h3>
                  <p className="text-xs text-teal-605 dark:text-teal-400 font-bold tracking-tight font-mono uppercase mt-1">
                    {websitesData[activeSiteTab].industry} • {websitesData[activeSiteTab].duration}
                  </p>
                </div>

                {/* Statistics Cards Comparison: Before vs After */}
                <div className="space-y-3">
                  <span className="text-[9px] font-mono tracking-widest font-extrabold text-zinc-400 uppercase block">
                    Before vs. After Statistics:
                  </span>
                  
                  {/* Clicks comparison */}
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-150/60 dark:border-zinc-850 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-400 font-bold block uppercase font-mono">Organic Clicks</span>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-500 font-semibold mt-0.5">
                        <span>Before: {websitesData[activeSiteTab].metrics.clicks.before}</span>
                        <span className="text-zinc-355">→</span>
                        <strong className="text-zinc-800 dark:text-white font-bold text-sm">After: {websitesData[activeSiteTab].metrics.clicks.after}</strong>
                      </div>
                    </div>
                    <span className="bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-md text-[10px] sm:text-xs font-black font-mono">
                      {websitesData[activeSiteTab].metrics.clicks.pct}
                    </span>
                  </div>

                  {/* Impressions comparison */}
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-150/60 dark:border-zinc-850 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-400 font-bold block uppercase font-mono">Impressions Log</span>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-500 font-semibold mt-0.5">
                        <span>Before: {websitesData[activeSiteTab].metrics.impressions.before}</span>
                        <span className="text-zinc-355">→</span>
                        <strong className="text-zinc-800 dark:text-white font-bold text-sm">After: {websitesData[activeSiteTab].metrics.impressions.after}</strong>
                      </div>
                    </div>
                    <span className="bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-md text-[10px] sm:text-xs font-black font-mono">
                      {websitesData[activeSiteTab].metrics.impressions.pct}
                    </span>
                  </div>

                  {/* Keywords ranked */}
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-150/60 dark:border-zinc-850 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-400 font-bold block uppercase font-mono">Keywords in Top 10</span>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-500 font-semibold mt-0.5">
                        <span>Before: {websitesData[activeSiteTab].metrics.keywords.before}</span>
                        <span className="text-zinc-355">→</span>
                        <strong className="text-zinc-800 dark:text-white font-bold text-sm">After: {websitesData[activeSiteTab].metrics.keywords.after}</strong>
                      </div>
                    </div>
                    <span className="bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-1 rounded-md text-[10px] sm:text-xs font-black font-mono">
                      {websitesData[activeSiteTab].metrics.keywords.pct}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[9px] font-mono tracking-widest font-extrabold text-zinc-400 uppercase block mb-2">
                    SEO Work Performed:
                  </span>
                  <ul className="space-y-2">
                    {websitesData[activeSiteTab].workPerformed.map((work, wIdx) => (
                      <li key={wIdx} className="text-xs text-zinc-650 dark:text-zinc-400 flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-500 mt-1 shrink-0" />
                        <span className="font-medium leading-relaxed">{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Graphical growth chart column utilizing Recharts Area charts */}
              <div className="lg:col-span-7 bg-zinc-50/50 dark:bg-zinc-950/40 border border-zinc-150 dark:border-zinc-850 rounded-xl p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4 select-none">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold block">
                        Monthly Traffic Growth Progress
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        Clicks progress timeline since campaign kickoff
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-bold bg-teal-500/10 text-teal-650 dark:text-teal-400 px-2 py-1 rounded-md">
                      ACTIVE LOG
                    </span>
                  </div>

                  <div className="h-64 sm:h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={websitesData[activeSiteTab].chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                        <defs>
                          <linearGradient id={`gradClicks-${activeSiteTab}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.25} />
                            <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" className="dark:hidden" />
                        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" className="hidden dark:block" />
                        <XAxis 
                          dataKey="month" 
                          stroke="#888" 
                          style={{ fontFamily: "monospace", fontSize: 10 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis 
                          stroke="#888" 
                          style={{ fontFamily: "monospace", fontSize: 10 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: "#18181b",
                            border: "none",
                            borderRadius: "10px",
                            color: "#fff",
                            fontFamily: "monospace",
                            fontSize: "11px",
                          }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="clicks" 
                          stroke="#14b8a6" 
                          strokeWidth={3} 
                          fillOpacity={1} 
                          fill={`url(#gradClicks-${activeSiteTab})`} 
                          name="Monthly Clicks"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-150 dark:border-zinc-850 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>Growth Multiplier: {websitesData[activeSiteTab].metrics.clicks.pct}</span>
                  <span>Data Verified via Google Search Console</span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
