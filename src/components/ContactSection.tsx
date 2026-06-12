import React, { useState, useEffect } from "react";
import { Mail, Phone, Globe, Send, CheckCircle, AlertTriangle, ArrowRight, Table, ExternalLink, Inbox, MessageSquare, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  website?: string;
  message: string;
  date: string;
  service?: string;
  status: 'new' | 'contacted' | 'archived';
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [service, setService] = useState("Technical SEO & Crawling fixes");
  const [message, setMessage] = useState("");
  
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Leads list in-memory synced from backend
  const [leadsList, setLeadsList] = useState<Lead[]>([]);
  const [showInboundLeads, setShowInboundLeads] = useState(false);

  // Fetch leads on mount
  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/leads");
      const resJSON = await response.json();
      if (resJSON.success && resJSON.leads) {
        setLeadsList(resJSON.leads);
      }
    } catch (err) {
      console.error("Could not fetch server leads in real time:", err);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitError("Please fill in all required parameters.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    const formData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      website: website.trim(),
      service: service,
      message: message.trim(),
    };

    try {
      // 1. Send submission to Formspree using the VITE_FORMSPREE_ENDPOINT environment variable.
      let formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

      if (!formspreeEndpoint) {
        try {
          const configRes = await fetch("/api/config");
          if (configRes.ok) {
            const configData = await configRes.json();
            if (configData && configData.VITE_FORMSPREE_ENDPOINT) {
              formspreeEndpoint = configData.VITE_FORMSPREE_ENDPOINT;
            }
          }
        } catch (e) {
          console.warn("Could not retrieve runtime configuration from backend:", e);
        }
      }

      // If STILL not found, use a safe default fallback
      if (!formspreeEndpoint) {
        formspreeEndpoint = "https://formspree.io/f/xzbygqkd";
      }
      
      const formspreeResponse = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const responseData = await formspreeResponse.json();
      if (!formspreeResponse.ok || responseData.ok === false) {
        throw new Error(responseData.error || "Formspree submission rejected.");
      }

      // 2. Submit to local leads store if backend is running (graceful fallback)
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (localErr) {
        console.warn("Skipped local in-memory DB caching:", localErr);
      }

      setSubmitSuccess("Thank you! Your message has been sent successfully. I'll get back to you soon.");
      
      // Clear all form inputs
      setName("");
      setEmail("");
      setPhone("");
      setWebsite("");
      setMessage("");
      
      // Reload in-memory leads panel checks
      fetchLeads();
    } catch (err: any) {
      console.error("Form submission trace error:", err);
      setSubmitError(err.message || "Something went wrong. Please check your network and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Pre-compiled Whatsapp template url
  const whatsappTemplateUrl = "https://wa.me/918585974338?text=" + encodeURIComponent(
    "Hello Mohan, I want to book a consultation regarding SEO and digital growth for my business."
  );

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950 scroll-mt-12 overflow-hidden border-t border-zinc-100 dark:border-zinc-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase block">
            GET IN TOUCH FOR CLIENT ACQUISITION
          </span>
          <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Book an SEO Consultation
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-sm sm:text-base font-sans font-medium">
            Take the first step to command your SERPs. Fill out the consultation request below, or connect directly via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start" id="contact-panel-view">
          
          {/* Quick Contacts details - Left Side */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest font-extrabold text-zinc-400 dark:text-zinc-505 uppercase block mb-3">
                Mohan’s Direct Contacts
              </span>
              <h3 className="font-sans font-extrabold text-xl text-zinc-950 dark:text-white leading-snug">
                Let’s construct a long-term organic revenue strategy.
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-zinc-505 dark:text-zinc-400 leading-relaxed font-sans font-medium">
                Whether you own an eCommerce brand, a SaaS startup, or a regional clinics network, schedule an advisory call to diagnose your crawl budget and organic keyword gaps.
              </p>
            </div>

            {/* Direct Contact indicators list */}
            <div className="space-y-4">
              <a
                href="mailto:mohan@clickfordigitalinfo.gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-teal-500/20 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[9.5px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
                    EMAIL ADDRESS
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-extrabold text-zinc-800 dark:text-zinc-300 block mt-0.5 break-all">
                    clickfordigitalinfo@gmail.com
                  </span>
                </div>
              </a>

              <a
                href={whatsappTemplateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-[#25D366]/40 dark:border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 dark:from-[#25D366]/5 dark:to-transparent hover:from-[#25D366]/20 hover:to-[#25D366]/10 transition-all duration-300 shadow-md hover:shadow-lg hover:border-[#25D366] group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 fill-white stroke-[#25D366]" style={{ strokeWidth: 1.5 }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono font-black tracking-widest text-[#25D366] uppercase">
                      Instant Chat
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold font-mono bg-[#25D366] text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-white block animate-ping"></span>
                      Book on WhatsApp
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-sans font-extrabold text-zinc-900 dark:text-zinc-100 mt-1 flex items-center gap-2">
                    Chat on WhatsApp <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
                  </h4>
                  <p className="text-xs font-sans font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 leading-normal">
                    Click to message +91 8585974338 directly. Get answers within minutes!
                  </p>
                </div>
              </a>
            </div>

            {/* Social profiles and address info */}
            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[10.5px] text-zinc-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-500" />
                <span>Based: ClickForDigital, NY / remote</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="#home" className="hover:text-teal-500">LinkedIn</a>
                <a href="#home" className="hover:text-teal-500">Twitter</a>
                <a href="#home" className="hover:text-teal-500">Blogger</a>
              </div>
            </div>

            {/* Toggle: Leads in-memory panel button */}
            <div className="border-t border-zinc-100 dark:border-zinc-850 pt-6">
              <button
                type="button"
                onClick={() => {
                  fetchLeads();
                  setShowInboundLeads(!showInboundLeads);
                }}
                className="inline-flex items-center gap-2 text-[10.5px] font-mono font-bold text-zinc-450 hover:text-teal-500 cursor-pointer select-none focus:outline-none"
              >
                <Table className="w-4 h-4 text-indigo-500" />
                {showInboundLeads ? "Hide Leads Control Chamber" : "Reveal Leads Control Chamber"}
                <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 px-1.5 rounded text-[9.5px] font-black uppercase font-mono">
                  {leadsList.length}
                </span>
              </button>
            </div>
          </div>

          {/* Form Capture - Right Side */}
          <div className="lg:col-span-7" id="contact-form-card">
            <div className="bg-zinc-50/50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-150/80 dark:border-zinc-900 p-6 sm:p-8 shadow-sm">
              <span className="text-[10px] font-mono tracking-widest font-extrabold text-zinc-400 dark:text-zinc-505 uppercase block mb-6">
                Consultation Request Form
              </span>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10.5px] font-semibold text-zinc-550 dark:text-zinc-400 uppercase block mb-1.5">
                      Your Name <span className="text-teal-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g., David Miller"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={submitting}
                      className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-905 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="text-[10.5px] font-semibold text-zinc-550 dark:text-zinc-400 uppercase block mb-1.5">
                      Your Email <span className="text-teal-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="E.g., david@millerlegal.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={submitting}
                      className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-905 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                  <div>
                    <label className="text-[10.5px] font-semibold text-zinc-550 dark:text-zinc-400 uppercase block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="E.g., +1 (555) 016-4392"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={submitting}
                      className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-905 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="text-[10.5px] font-semibold text-zinc-550 dark:text-zinc-400 uppercase block mb-1.5">
                      Website URL
                    </label>
                    <input
                      type="text"
                      placeholder="E.g., millerlegal.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      disabled={submitting}
                      className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-905 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10.5px] font-semibold text-zinc-550 dark:text-zinc-400 uppercase block mb-1.5">
                    Target SEO Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    disabled={submitting}
                    className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-905 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 disabled:opacity-50 cursor-pointer"
                  >
                    <option value="Technical SEO & Crawling fixes">Technical SEO & Crawling fixes</option>
                    <option value="On-Page Content relevance optimization">On-Page relevance optimization</option>
                    <option value="Local maps hyper-local setup">Local maps hyper-local setup</option>
                    <option value="E-E-A-T Authority Link building">E-E-A-T Link building</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10.5px] font-semibold text-zinc-550 dark:text-zinc-400 uppercase block mb-1.5">
                    Briefly outline your SEO objectives <span className="text-teal-500">*</span>
                  </label>
                  <textarea
                    required
                    placeholder="Provide details about your target objectives or drop links to search console errors."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={submitting}
                    className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-905 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 disabled:opacity-50"
                  />
                </div>

                {/* Status displays */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-emerald-500/10 border border-emerald-500/10 rounded-xl text-xs text-emerald-600 flex items-start gap-2 leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{submitSuccess}</span>
                    </motion.div>
                  )}

                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-red-500/10 border border-red-500/10 rounded-xl text-xs text-red-650 flex items-start gap-2 leading-relaxed"
                    >
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    id="btn-submit-contact"
                    className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white p-3.5 rounded-xl text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus:outline-none"
                  >
                    {submitting ? "Sending consultation parameters..." : "Request Call & SEO Consultation"}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Dynamic Inbound Leads Panel Table Block - Mohan can inspect lead syncs */}
        <AnimatePresence>
          {showInboundLeads && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-14 overflow-hidden border border-zinc-150 dark:border-zinc-850 bg-zinc-50/20 dark:bg-zinc-900/10 p-6 sm:p-8 rounded-2xl"
              id="leads-dashboard"
            >
              <div className="flex items-center gap-2 mb-6">
                <Inbox className="w-5 h-5 text-indigo-500" />
                <h3 className="font-sans font-black text-sm text-zinc-900 dark:text-white uppercase tracking-wider">
                  Leads Control Chamber (Full-Stack Sync check)
                </h3>
              </div>

              <div className="overflow-x-auto w-full border border-zinc-150 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 shadow-sm scrollbar-thin">
                <table className="w-full text-xs font-sans text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 font-mono text-[9px] text-zinc-400 font-bold uppercase select-none">
                      <th className="p-3 sm:p-4">Contact name</th>
                      <th className="p-3 sm:p-4">Contact Details</th>
                      <th className="p-3 sm:p-4">Target Website</th>
                      <th className="p-3 sm:p-4">Desired Service</th>
                      <th className="p-3 sm:p-4">Objectives</th>
                      <th className="p-3 sm:p-4">Date Sub</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadsList.map((l) => (
                      <tr
                        key={l.id}
                        className="border-b last:border-b-0 border-zinc-100 dark:border-zinc-800/80 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition text-zinc-700 dark:text-zinc-300"
                      >
                        <td className="p-3 sm:p-4 font-bold">{l.name}</td>
                        <td className="p-3 sm:p-4 font-mono text-[11px] leading-relaxed">
                          <div className="select-all text-teal-600 dark:text-teal-400">{l.email}</div>
                          {l.phone && <div className="text-zinc-400 dark:text-zinc-500 font-sans text-xs">{l.phone}</div>}
                        </td>
                        <td className="p-3 sm:p-4">
                          {l.website ? (
                            <a
                              href={`https://${l.website}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 hover:underline text-indigo-600"
                            >
                              {l.website}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-zinc-400 italic">None</span>
                          )}
                        </td>
                        <td className="p-3 sm:p-4 font-medium text-zinc-600 dark:text-zinc-400">{l.service}</td>
                        <td className="p-3 sm:p-4 max-w-xs break-words leading-relaxed leading-normal">{l.message}</td>
                        <td className="p-3 sm:p-4 font-mono text-[10.5px]">
                          {new Date(l.date).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
