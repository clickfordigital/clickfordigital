/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import ResultsProof from "./components/ResultsProof";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import SeoAuditor from "./components/SeoAuditor";
import Blog from "./components/Blog";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check if user has theme choice cached or system theme setup
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("clickfordigital_theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("clickfordigital_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("clickfordigital_theme", "light");
    }
  }, [darkMode]);

  // Inject Open Graph, Twitter Cards, Sitemap specifications, and Robots context dynamically on mount
  useEffect(() => {
    const injectSeoMetadata = () => {
      // Modify Title
      document.title = "Mohan — Founder @ ClickForDigital | B2B SEO Growth Consultant";

      // Dynamically add schema markup (BreadcrumbList)
      const srvSchemaId = "seo-breadcrumb-jsonld";
      let script = document.getElementById(srvSchemaId) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = srvSchemaId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://clickfordigital.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Case Studies",
            "item": "https://clickfordigital.com#case-studies"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI SEO Auditor Tool",
            "item": "https://clickfordigital.com#audit"
          }
        ]
      };

      script.textContent = JSON.stringify(breadcrumbSchema);
    };

    injectSeoMetadata();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300 antialiased font-sans flex flex-col justify-between">
      
      {/* Sticky Header */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Page Layout modules */}
      <main className="flex-grow w-full">
        {/* HERO SECTION */}
        <Hero />

        {/* TRUSTSTATS SECTION */}
        <Stats />

        {/* INTERACTIVE AI AUDITOR TOOL */}
        <SeoAuditor />

        {/* BIOGRAPHICAL ABOUT SECTION */}
        <About />

        {/* SERVICES OFFERED CARDS */}
        <Services />

        {/* ACCORDION CASE STUDIES */}
        <CaseStudies />

        {/* TECHNICAL WORKFLOW */}
        <Workflow />

        {/* RESULTS PROOF WITH PHOTO LOADERS */}
        <ResultsProof />

        {/* TESTIMONIAL CAROUSEL */}
        <Testimonials />

        {/* UPDATED DYNAMIC BLOG HUB */}
        <Blog />

        {/* FAQ ACCORDION AND FAQ SCHEMA */}
        <FaqSection />

        {/* SECURED LEAD CAPTURE FORM CONTROLS */}
        <ContactSection />
      </main>

      {/* DETAILED ROOT FOOTER */}
      <Footer />
      
    </div>
  );
}
