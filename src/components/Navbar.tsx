import React, { useState, useEffect, useMemo } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon, Globe, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useActiveSection } from "../hooks/useActiveSection";

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

  const navLinks = useMemo(() => [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Services", href: "#services" },
    { name: "SEO Results", href: "#seo-results" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ], []);

  const sectionIds = useMemo(() => navLinks.map((link) => link.href), [navLinks]);
  const activeSection = useActiveSection(sectionIds);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    console.log(`[Navbar] Navigation click/tap event detected. Target: "${href}"`);
    
    const isMobile = window.innerWidth < 1024;
    const target = document.querySelector(href) as HTMLElement | null;
    
    if (!target) {
      console.error(`[Navbar] Target section with reference "${href}" was not found!`);
      return;
    }
    
    console.log(`[Navbar] Target element found: <${target.tagName.toLowerCase()} id="${target.id}">`);
    
    // Calculate static, absolute top position relative to the entire document.
    // This provides a stable, invariant offset that is 100% immune to scroll momentum,
    // active scrolling speeds, viewport zoom, or page transitions.
    const getAbsoluteTop = (element: HTMLElement): number => {
      let top = 0;
      let curr: HTMLElement | null = element;
      while (curr) {
        top += curr.offsetTop;
        curr = curr.offsetParent as HTMLElement | null;
      }
      return top;
    };
    
    const targetTop = getAbsoluteTop(target);
    const headerOffset = isMobile ? 70 : 85;
    const offsetPosition = targetTop - headerOffset;
    
    console.log(`[Navbar] Absolute target coordinate is: ${targetTop}px. Scroll offset top will be: ${offsetPosition}px.`);
    
    if (isMobile) {
      // Close mobile drawer instantly to prevent exit layout recalculations from cancelling
      // the smooth scroll behavior in mobile browsers (WebKit/iOS Safari and Android Chrome).
      setIsOpen(false);
      console.log(`[Navbar] Mobile menu toggled closed.`);
      
      // Delay scrolling by a tiny margin to let the click touch action finish cleanly in the event loop.
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        console.log(`[Navbar] Mobile scroll execution completed to target height: ${offsetPosition}px`);
      }, 50);
    } else {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      console.log(`[Navbar] Desktop scroll execution completed to target height: ${offsetPosition}px`);
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-sm border-b border-zinc-100 dark:border-zinc-900 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
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
                    className={`font-sans text-sm font-medium transition-colors relative py-1 ${
                      activeSection === link.href
                        ? "text-teal-600 dark:text-teal-400 font-semibold"
                        : "text-zinc-600 dark:text-zinc-300 hover:text-teal-600 dark:hover:text-teal-400"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.href && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-teal-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
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

      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-zinc-950/20 dark:bg-zinc-950/40 backdrop-blur-xs z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900 overflow-y-auto max-h-[calc(100vh-80px)] shadow-lg absolute top-full left-0 right-0 z-50"
          >
            <div className="max-w-7xl mx-auto px-4 pt-2 pb-6 space-y-3">
              <ul className="space-y-1" id="nav-links-mobile">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      id={`link-mobile-${link.name.toLowerCase().replace(" ", "-")}`}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className={`block px-3 py-2.5 rounded-xl font-sans text-sm font-medium transition-all active:scale-[0.99] cursor-pointer select-none ${
                        activeSection === link.href
                          ? "bg-teal-50/50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400 font-semibold"
                          : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-teal-600 dark:hover:text-teal-400"
                      }`}
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
                  onClick={(e) => handleScrollTo(e, "#audit")}
                  className="w-full text-center bg-gradient-to-r from-teal-500 to-indigo-600 text-white py-3 rounded-xl block font-sans text-xs font-semibold tracking-wide shadow-md shadow-teal-500/10 hover:shadow-lg active:scale-[0.98] transition-all focus:outline-none cursor-pointer"
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
