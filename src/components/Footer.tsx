import React from "react";
import { Globe, Heart, Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 py-16 scroll-mt-2 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Globe className="w-4.5 h-4.5 animate-spin-slow" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-base leading-tight text-white">
                  Mohan<span className="text-teal-400 font-black">.</span>
                </span>
                <span className="font-mono text-[9px] tracking-wider text-zinc-500 uppercase">
                  Founder @ ClickForDigital
                </span>
              </div>
            </div>
            
            <p className="text-xs text-zinc-500 leading-relaxed font-sans max-w-sm">
              Helping businesses expand their customer acquisition pipelines via organic search algorithms. No hollow branding, just pure numbers, ranks, structures, and conversions.
            </p>
          </div>

          {/* Quick links col */}
          <div className="md:col-span-2.5">
            <h4 className="text-[11.5px] font-mono tracking-widest font-extrabold text-white uppercase mb-4">
              SITE MAPS
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="hover:text-teal-400 transition-colors">
                  Top Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="hover:text-teal-400 transition-colors">
                  About Consultant
                </a>
              </li>
              <li>
                <a href="#case-studies" onClick={(e) => handleScrollTo(e, "#case-studies")} className="hover:text-teal-400 transition-colors">
                  Growth Cases
                </a>
              </li>
              <li>
                <a href="#audit" onClick={(e) => handleScrollTo(e, "#audit")} className="hover:text-teal-400 transition-colors">
                  AI SEO Auditor
                </a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => handleScrollTo(e, "#blog")} className="hover:text-teal-400 transition-colors">
                  Insights blog
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services col */}
          <div className="md:col-span-2.5">
            <h4 className="text-[11.5px] font-mono tracking-widest font-extrabold text-white uppercase mb-4">
              SEO DELIVERABLES
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-teal-400 transition-colors">
                  Technical Auditing
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-teal-400 transition-colors">
                  On-Page Semantic Relevance
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-teal-400 transition-colors">
                  E-E-A-T Content Clustering
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-teal-400 transition-colors">
                  Hyper-Local Search Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11.5px] font-mono tracking-widest font-extrabold text-white uppercase mb-4">
              CONTACT INFO
            </h4>
            <p className="text-xs text-zinc-500 leading-normal font-mono select-all">
              clickfordigitalinfo<br />@gmail.com
            </p>
            
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-white transition font-bold"
            >
              Back to peak
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright block with compliance specs */}
        <div className="border-t border-zinc-900 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-600">
          <span>
            ClickForDigital © 2026. Mohan portfolio website. All Rights Reserved.
          </span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-teal-500" />
              Index Indexability: Checked
            </span>
            <span className="flex items-center gap-0.5">
              Crafted with
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              by click ClickForDigital
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
