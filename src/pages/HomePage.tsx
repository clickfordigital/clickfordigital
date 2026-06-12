import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import CaseStudies from "../components/CaseStudies";
import Blog from "../components/Blog";
import SeoAuditor from "../components/SeoAuditor";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Testimonials";
import { ArrowRight, ChevronRight, Globe, Layers, Zap, Award, Search, CheckCircle } from "lucide-react";
import { Link } from "../components/Router";

export default function HomePage() {
  useEffect(() => {
    document.title = "Mohan — Portfolio | Founder of ClickForDigital & SEO Specialist";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore Mohan's elite SEO portfolio: real GSC growth screenshots, case studies for major brands, expert skills matrix, and latest organic insights.");
    }
  }, []);

  return (
    <div className="space-y-0" id="home-page-view">
      
      {/* 1. HERO COVER with Name & Branding */}
      <Hero />

      {/* 2. STATS SECTION */}
      <Stats />

      {/* 3. WEBSITES WORKED ON & EXPERTISE OVERVIEW */}
      <section className="py-20 bg-white dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Websites Worked On Sub-Section */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 tracking-widest uppercase font-extrabold bg-teal-500/10 px-3 py-1 rounded-full">
                ESTABLISHED AUTHORITY
              </span>
              <h2 className="mt-3 font-sans font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white tracking-tight">
                Websites I Have Worked On
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans font-medium">
                Designing search ecosystems and scaling organic channels for industry leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Acharya Ganesh",
                  domain: "acharyaganesh.com",
                  clicks: "85K / month",
                  growth: "+608% Clicks",
                  desc: "Leading astrology EdTech in India. Reconstructed Core Web Vitals to zero out layout shifts, and deployed optimized course schema mappings.",
                },
                {
                  name: "Hanish Bagga",
                  domain: "hanishbagga.com",
                  clicks: "29K / month",
                  growth: "+544% Clicks",
                  desc: "Consulting & mentorship platform. Repaired sitemap crawl blocks, resolved indexing loops, and structured high-intent query maps.",
                },
                {
                  name: "ClickForDigital",
                  domain: "clickfordigital.com",
                  clicks: "8.9K / month",
                  growth: "+1012% Leads",
                  desc: "B2B optimization & search campaign agency. Structured highly clean custom semantic code layouts driving steady localized lead acquisition.",
                },
              ].map((site) => (
                <div
                  key={site.name}
                  className="p-6 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-2xl border border-zinc-100 dark:border-zinc-900 flex flex-col justify-between hover:border-teal-500/30 dark:hover:border-teal-500/20 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col">
                        <span className="font-sans font-extrabold text-base text-zinc-900 dark:text-white">
                          {site.name}
                        </span>
                        <span className="font-mono text-[10.5px] text-teal-655 dark:text-teal-400 mt-0.5">
                          {site.domain}
                        </span>
                      </div>
                      <span className="bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono text-[10px] font-black px-2 py-1 rounded-md">
                        {site.growth}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans leading-relaxed">
                      {site.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-zinc-150 dark:border-zinc-800/50 flex justify-between items-center text-[10px] font-mono text-zinc-400">
                    <span>Performance Verified</span>
                    <span className="font-extrabold">{site.clicks}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Skills & Expertise Sub-Section */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 tracking-widest uppercase font-extrabold bg-indigo-505/10 px-3 py-1 rounded-full">
                CORE MATRIX
              </span>
              <h2 className="mt-3 font-sans font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white tracking-tight">
                SEO Skills & Expertise
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans font-medium">
                Proven search methodologies integrated into clean, white-hat execution roadmaps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Technical Auditing",
                  icon: <Search className="w-5 h-5 text-teal-500" />,
                  desc: "Crawl path analysis, rendering performance indexation, canonical loop fixations, sitemap tree designs.",
                },
                {
                  title: "On-Page Relevance",
                  icon: <Layers className="w-5 h-5 text-blue-500" />,
                  desc: "Semantic frequency structures, NLP query mappings, structured headings distributions, metadata formulas.",
                },
                {
                  title: "E-E-A-T Authority",
                  icon: <Award className="w-5 h-5 text-indigo-500" />,
                  desc: "Contextual editorial backlink building, toxic profile detoxing, structured author biography Schema.",
                },
                {
                  title: "Local Search Domination",
                  icon: <Globe className="w-5 h-5 text-emerald-500" />,
                  desc: "Google Business Profile mapping, coordinate NAP consistency logs, hyper-local landing page grids.",
                },
              ].map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-6 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-xl border border-zinc-100 dark:border-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-800 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-805 flex items-center justify-center shadow-xs">
                    {skill.icon}
                  </div>
                  <h3 className="font-sans font-extrabold text-sm sm:text-base text-zinc-955 dark:text-white mt-4">
                    {skill.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-medium leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. FEATURED SEO PROJECTS & RESULTS (Case Studies Component) */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950 overflow-hidden" id="growth-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-indigo-650 dark:text-indigo-400 tracking-widest uppercase font-extrabold bg-indigo-500/10 px-3 py-1 rounded-full">
              Growth Case Studies
            </span>
            <h2 className="mt-3 font-sans font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white tracking-tight">
              Featured SEO Projects & Results
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans font-medium">
              Take a detailed look at how I analyze problems, formulate strategies, and deliver organic growth.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-150 dark:border-zinc-900 p-2 sm:p-5 shadow-sm">
            <CaseStudies />
          </div>
        </div>
      </section>

      {/* 5. LATEST BLOG POSTS FROM MOHAN'S BLOGGER */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-150 dark:border-zinc-900" id="blog-posts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-[#a855f7] tracking-widest uppercase font-extrabold bg-violet-500/10 px-3 py-1 rounded-full">
              KNOWLEDGE SHARING
            </span>
            <h2 className="mt-3 font-sans font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white tracking-tight">
              Latest Blog Posts from ClickForDigital
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans font-medium">
              Proven search advice, Google updates, and Technical SEO tactics fetched dynamically from my Blogger blog.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-150 dark:border-zinc-900 p-4 sm:p-5 shadow-sm">
            <Blog />
          </div>
        </div>
      </section>

      {/* 7. REAL-TIME AI AUDITOR PANEL */}
      <SeoAuditor />

      {/* 8. SEAMLESS REINFORCEMENT WORKFLOW */}
      <Workflow />

      {/* 9. VERIFIABLE CLIENT TESTIMONIALS */}
      <Testimonials />

      {/* 10. STRONG CALL-TO-ACTION */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-t from-teal-500/10 via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[10px] font-mono font-bold tracking-widest text-teal-400 uppercase bg-teal-500/10 px-3 py-1 rounded-full">
            UNLOCK YOUR SITE REVENUE NOW
          </span>
          <h2 className="mt-6 font-sans font-black text-3xl sm:text-5xl tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Dominate organic search and command your keyword niche?
          </h2>
          <p className="mt-6 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-sans font-medium leading-relaxed font-semibold">
            Stop losing qualified commercial search intents to your competitors. Schedule a complimentary crawl assessment and roadmap session with Mohan today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg shadow-teal-500/20 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer"
            >
              Request Free Consultation & Audit
            </Link>
            <a
              href="https://wa.me/918585974338"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 hover:text-white font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-xl flex items-center gap-2 transition cursor-pointer"
            >
              Direct Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
