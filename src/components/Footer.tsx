import React from "react";
import { Globe, Heart, Shield, ArrowUp } from "lucide-react";
import { Link } from "./Router";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 py-16 scroll-mt-2 overflow-hidden select-none animate-fade-in">
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
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-mono tracking-widest font-extrabold text-white uppercase mb-4">
              SITE MAPS
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">
                  Portfolio (Home)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">
                  About Consultant
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">
                  Core Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">
                  Contact & Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services col */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-mono tracking-widest font-extrabold text-white uppercase mb-4">
              SEO DELIVERABLES
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">
                  Technical Auditing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">
                  On-Page Semantic Relevance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">
                  E-E-A-T Content Clustering
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">
                  Hyper-Local SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono tracking-widest font-extrabold text-white uppercase mb-4">
              CONTACT INFO
            </h4>
            <p className="text-xs text-zinc-500 leading-normal font-mono select-all">
              clickfordigitalinfo<br />@gmail.com
            </p>
            
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-white transition font-bold cursor-pointer"
            >
              Back to peak
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright block with compliance specs */}
        <div className="border-t border-zinc-900 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-650">
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
              by ClickForDigital
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
