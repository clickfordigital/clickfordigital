/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { RouterProvider, useRouter } from "./components/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Page Wrappers (Lazy-loaded for optimal TTI and initial bundle performance)
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

function PageLoading() {
  return (
    <div className="pt-36 pb-24 text-center min-h-[55vh] flex flex-col items-center justify-center bg-transparent select-none animate-pulse">
      <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-4 relative overflow-hidden">
        <span className="absolute inset-0 bg-teal-500/20 animate-ping rounded-2xl duration-1000" />
        <span className="w-4 h-4 rounded-full bg-teal-500 animate-pulse" />
      </div>
      <p className="text-[10px] sm:text-xs font-mono text-zinc-450 dark:text-zinc-500 tracking-wider uppercase font-semibold">
        Optimizing core web vitals...
      </p>
    </div>
  );
}

function MainAppContent() {
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

  const { path } = useRouter();

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

  // Dynamically update Canonical URL for SEO on page route changes
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      const baseUrl = "https://clickfordigital.vercel.app";
      const pathSuffix = path === "/" ? "" : path;
      canonicalLink.setAttribute("href", `${baseUrl}${pathSuffix}`);
    }
  }, [path]);

  // Route router switcher rendering block
  const renderPage = () => {
    switch (path) {
      case "/":
        return <HomePage />;
      case "/about":
        return <AboutPage />;
      case "/services":
        return <ServicesPage />;
      case "/contact":
        return <ContactPage />;
      default:
        return (
          <div className="pt-36 pb-24 text-center min-h-[70vh] flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 select-none animate-fade-in" id="404-routing-fallback">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center text-2xl font-black mb-6">
              !
            </div>
            <h1 className="font-sans font-extrabold text-3xl text-zinc-900 dark:text-white tracking-tight">
              404 - Node Not Indexed
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed font-sans font-medium mb-8">
              The page you requested is outside our registered organic site architecture. It could have been migrated or re-purposed.
            </p>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, "", "/");
                window.dispatchEvent(new Event("popstate"));
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-tr from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md cursor-pointer transition-all active:scale-[0.99]"
            >
              Back to Home page
            </a>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300 antialiased font-sans flex flex-col justify-between">
      
      {/* Sticky Navigation Menu */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Page Layout modules */}
      <main className="flex-grow w-full relative">
        <React.Suspense fallback={<PageLoading />}>
          {renderPage()}
        </React.Suspense>
      </main>

      {/* DETAILED ROOT FOOTER */}
      <Footer />
      
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainAppContent />
    </RouterProvider>
  );
}
