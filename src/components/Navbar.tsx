import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon, Globe, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Services", href: "#services" },
    { name: "SEO Results", href: "#results" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm border-b border-zinc-100 dark:border-zinc-900 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            id="nav-logo"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
              <Globe className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg leading-tight tracking-tight text-zinc-950 dark:text-white">
                Mohan<span className="text-teal-500 font-black">.</span>
              </span>
              <span className="font-mono text-[10px] tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold group-hover:text-teal-500 transition-colors">
                Founder @ ClickForDigital
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6" id="nav-links-desktop">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    id={`link-${link.name.toLowerCase().replace(" ", "-")}`}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="font-sans text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800"></div>

            {/* Dark mode Toggle & CTA */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                id="btn-theme-toggle"
                aria-label="Toggle visual theme"
                className="p-2.2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50"
              >
                {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>

              <a
                href="#audit"
                id="cta-nav-audit"
                onClick={(e) => handleScrollTo(e, "#audit")}
                className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-teal-600 dark:hover:bg-teal-500 hover:text-white dark:hover:text-white px-4 py-2.2 rounded-xl text-xs font-semibold tracking-tight shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
              >
                Free AI Audit
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile Right Controls - Menu and Dark Mode */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              id="btn-theme-toggle-mobile"
              aria-label="Toggle visual theme"
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm focus:outline-none"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              id="btn-mobile-menu"
              aria-label="Toggle mobile menu"
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900 overflow-hidden shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 pt-2 pb-6 space-y-3">
              <ul className="space-y-1" id="nav-links-mobile">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      id={`link-mobile-${link.name.toLowerCase().replace(" ", "-")}`}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="block px-3 py-2.5 rounded-xl font-sans text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-teal-600 dark:hover:text-teal-400 transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-2 px-3 border-t border-zinc-100 dark:border-zinc-900">
                <a
                  href="#audit"
                  id="cta-mobile-audit"
                  onClick={(e) => {
                    handleScrollTo(e, "#audit");
                  }}
                  className="w-full text-center bg-gradient-to-r from-teal-500 to-indigo-600 text-white py-3 rounded-xl block font-sans text-xs font-semibold tracking-wide shadow-md shadow-teal-500/10 hover:shadow-lg transition-transform focus:outline-none"
                >
                  Get Free AI SEO Audit & Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
