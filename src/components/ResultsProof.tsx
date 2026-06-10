import React, { useState } from "react";
import { Upload, Image as ImageIcon, X, Trash2, Eye, Calendar, Tag, Check, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProofScreenshot {
  id: string;
  title: string;
  type: "gsc" | "analytics" | "ranking" | "ctr" | "indexing";
  typeName: string;
  metric: string;
  desc: string;
  imageUrl?: string; // Loaded via File Reader
  mockColor: string;
  tags: string[];
}

export default function ResultsProof() {
  const [proofList, setProofList] = useState<ProofScreenshot[]>([
    {
      id: "proof-gsc",
      title: "Google Search Console Growth Dashboard",
      type: "gsc",
      typeName: "Search Console Proof",
      metric: "Clicks: +142.5K/mo",
      desc: "Google Search Console dashboard showing continuous hockey-stick surge in organic clicks and search impressions after a canonical index cleanup.",
      mockColor: "from-amber-500/10 to-orange-500/10 border-orange-500/20",
      tags: ["GSC Proof", "Clicks Surge", "Index Cleansed"],
    },
    {
      id: "proof-analytics",
      title: "Google Analytics Organic Channel Traffic",
      type: "analytics",
      typeName: "Analytics Dashboard",
      metric: "Organic Share: 84.6%",
      desc: "Analytics screenshot showing organic channels outperforming paid, referral, and direct conversions by 4.8x within the legal services niche.",
      mockColor: "from-blue-500/10 to-indigo-500/10 border-blue-500/20",
      tags: ["GA4 Proof", "Organic Share", "Conversion-oriented"],
    },
    {
      id: "proof-rankings",
      title: "Ranking Improvements (Enterprise SaaS Keywords)",
      type: "ranking",
      typeName: "SERP Tracker",
      metric: "#1 for 18 High-Volume Phrases",
      desc: "Primary ranking tracker metrics highlighting swift ascent from #24 to #1 for high-volume high-difficulty phrases in 90 days.",
      mockColor: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
      tags: ["SERP Tracking", "Rank #1", "Difficulty 70+"],
    },
    {
      id: "proof-ctr",
      title: "Click-Through-Rate (CTR) Curve Optimization",
      type: "ctr",
      typeName: "CTR Metrics",
      metric: "Avg CTR: 4.2% → 9.8%",
      desc: "Search Console diagnostic proof demonstrating structural click-rate improvements achieved through semantic title restructuring.",
      mockColor: "from-rose-500/10 to-pink-500/10 border-rose-500/20",
      tags: ["CTR Boost", "Snippet Optimizer", "Title Schema"],
    },
    {
      id: "proof-indexing",
      title: "Indexed Pages & Crawl Coverage Growth",
      type: "indexing",
      typeName: "Technical Crawl Report",
      metric: "Indexed Pages: +450",
      desc: "Technical diagram highlighting healthy discovery indices following sitemap updates, robots.txt corrections, and server status repairs.",
      mockColor: "from-purple-500/10 to-indigo-500/10 border-purple-500/20",
      tags: ["Crawling", "Sitemaps", "Server Fix"],
    },
  ]);

  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadMetric, setUploadMetric] = useState("");
  const [uploadDesc, setUploadDesc] = useState("");
  const [uploadType, setUploadType] = useState<"gsc" | "analytics" | "ranking" | "ctr" | "indexing">("gsc");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [showUploader, setShowUploader] = useState(false);

  // Handle Drag Over
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Convert File to Base64 Url for Instant Local Display
  const processFile = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setSelectedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Drop
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  // Handle File Input Change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  // Add Uploaded Screenshot to Local State
  const handleAddProof = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadTitle.trim() || !uploadMetric.trim() || !uploadDesc.trim()) {
      alert("Please fill out all fields for the proof asset.");
      return;
    }

    const newProof: ProofScreenshot = {
      id: `proof-custom-${Date.now()}`,
      title: uploadTitle.trim(),
      type: uploadType,
      typeName: uploadType.toUpperCase() + " Upload",
      metric: uploadMetric.trim(),
      desc: uploadDesc.trim(),
      imageUrl: selectedImage || undefined,
      mockColor: "from-zinc-500/10 to-slate-500/10 border-zinc-500/20",
      tags: ["Uploaded Proof", uploadType.toUpperCase()],
    };

    setProofList([newProof, ...proofList]);
    
    // Clear Uploader States
    setUploadTitle("");
    setUploadMetric("");
    setUploadDesc("");
    setSelectedImage(null);
    setShowUploader(false);
  };

  const handleDeleteProof = (id: string) => {
    setProofList(proofList.filter((p) => p.id !== id));
  };

  return (
    <section id="seo-results" className="py-24 bg-white dark:bg-zinc-950 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase block">
              SEO RESULTS PROOF BAR
            </span>
            <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
              Aesthetic Transparency: Real Proof
            </h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-sm sm:text-base font-sans leading-relaxed">
              We stand by transparent audits. Explore Google Search Console screenshots, ranking dashboards, and traffic logs. Use the uploader to test custom proof structures.
            </p>
          </div>

          <button
            onClick={() => setShowUploader(!showUploader)}
            id="btn-toggle-uploader"
            className="inline-flex items-center gap-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-teal-600 dark:hover:bg-teal-500 hover:text-white dark:hover:text-white px-5 py-3 rounded-xl text-xs font-bold tracking-tight shadow-sm transition cursor-pointer select-none focus:outline-none"
          >
            <Upload className="w-4 h-4" />
            {showUploader ? "Collapse Editor" : "Upload Results Proof"}
          </button>
        </div>

        {/* Dynamic Image Uploader Drawer Block */}
        <AnimatePresence>
          {showUploader && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-14 overflow-hidden border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 sm:p-8 rounded-2xl"
              id="proof-uploader-panel"
            >
              <form onSubmit={handleAddProof} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Drag and Drop Zone */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-500 uppercase block mb-3 w-full text-left">
                    STEP 1: SNAPSHOT UPLOAD
                  </span>

                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    className={`w-full h-56 rounded-xl border-2 border-dashed flex flex-col items-center justify-center p-4 transition-all relative ${
                      dragActive
                        ? "border-teal-500 bg-teal-500/5"
                        : selectedImage
                        ? "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                        : "border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 hover:border-zinc-400"
                    }`}
                  >
                    {selectedImage ? (
                      <div className="w-full h-full relative group">
                        <img
                          src={selectedImage}
                          alt="Uploaded proof snippet"
                          className="w-full h-full object-contain rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => setSelectedImage(null)}
                          className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow-sm"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="text-center flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 dark:text-zinc-505 mb-3">
                          <ImageIcon className="w-6 h-6" />
                        </div>
                        <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                          Drag and drop proof screenshot, or <label className="text-teal-600 hover:underline cursor-pointer">browse<input
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*"
                            className="hidden"
                          /></label>
                        </p>
                        <p className="text-[10px] text-zinc-400 mt-2 font-mono">
                          Supports JPG, PNG (Max 10MB)
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Proof Information Form */}
                <div className="md:col-span-7 space-y-4">
                  <span className="text-[10px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-505 uppercase block mb-1">
                    STEP 2: METRIC PARAMETERS
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10.5px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase block mb-1.5">
                        Screenshot Title
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="E.g., Legal Agency GSC Surges"
                        value={uploadTitle}
                        onChange={(e) => setUploadTitle(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                      />
                    </div>
                    <div>
                      <label className="text-[10.5px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase block mb-1.5">
                        Highlight Metric
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="E.g., Clicks: +210% (Ranks #1)"
                        value={uploadMetric}
                        onChange={(e) => setUploadMetric(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10.5px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase block mb-1.5">
                        Metric Channel Class
                      </label>
                      <select
                        value={uploadType}
                        onChange={(e) => setUploadType(e.target.value as any)}
                        className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                      >
                        <option value="gsc">Google Search Console</option>
                        <option value="analytics">Google Analytics Traffic</option>
                        <option value="ranking">Keyword Ranks tracker</option>
                        <option value="ctr">Meta CTR Optimization</option>
                        <option value="indexing">Sitemaps & Technical Indexing</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white p-3 rounded-xl text-xs font-bold shadow-md hover:shadow-lg hover:scale-[1.01] transition focus:outline-none cursor-pointer"
                      >
                        Insert Into Live Showcase
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10.5px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase block mb-1.5">
                      Case Outline / Strategy
                    </label>
                    <textarea
                      required
                      placeholder="Briefly state what technical or directory adjustments Mohan carried out to achieve this organic proof."
                      rows={3}
                      value={uploadDesc}
                      onChange={(e) => setUploadDesc(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    />
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Proof Assets Display List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="proof-showcase-grid">
          {proofList.map((proof) => (
            <motion.div
              layout
              key={proof.id}
              className="bg-zinc-50/50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-100 dark:border-zinc-900 overflow-hidden flex flex-col h-full group"
            >
              {/* Image Graphic / Simulated GSC screen */}
              <div
                className={`h-48 border-b border-zinc-100 dark:border-zinc-900/60 bg-gradient-to-tr relative p-5 flex flex-col justify-between ${proof.mockColor}`}
              >
                {/* Simulated UI Chrome */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-450 dark:text-zinc-500 font-bold uppercase tracking-wider bg-white dark:bg-zinc-900 px-2 py-1 rounded-md border border-zinc-100 dark:border-zinc-800 shadow-sm">
                    {proof.typeName}
                  </span>
                  <div className="flex items-center gap-1.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 px-20 py-0.5 rounded-md border border-teal-500/20 text-[9px] font-mono font-bold uppercase">
                    <Check className="w-3 h-3 text-teal-600" />
                    <span>Verified</span>
                  </div>
                </div>

                {proof.imageUrl ? (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={proof.imageUrl}
                      alt={proof.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  /* Elegant Vector Representation */
                  <div className="flex flex-col gap-2 mt-4 z-10 select-none">
                    <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 block uppercase">
                      ORGANIC OUTCOME
                    </span>
                    <span className="font-mono font-black text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
                      {proof.metric}
                    </span>
                    {/* Simulated mock search lines */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="h-1.5 bg-teal-500/40 rounded-full w-24" />
                      <div className="h-1.5 bg-indigo-500/30 rounded-full w-14" />
                      <div className="h-1.5 bg-zinc-300 dark:bg-zinc-700/50 rounded-full w-8" />
                    </div>
                  </div>
                )}

                {/* Mock bottom lines */}
                <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 dark:text-zinc-500 z-10">
                  <span>Audit property: Live data</span>
                  <span>ClickForDigital ©</span>
                </div>
              </div>

              {/* Text content details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {proof.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-[9px] font-mono font-bold tracking-wider rounded px-1.5 py-0.5 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-sans font-bold text-sm sm:text-base text-zinc-950 dark:text-white mt-3 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {proof.title}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans font-medium">
                    {proof.desc}
                  </p>
                </div>

                {/* Actions (Delete uploaded items to allow full dynamic customization testing) */}
                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-900/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-zinc-450 font-mono font-semibold text-[10px] uppercase">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Updated 2026</span>
                  </div>

                  {proof.id.startsWith("proof-custom-") && (
                    <button
                      onClick={() => handleDeleteProof(proof.id)}
                      className="p-1.5 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition"
                      aria-label="Remove customized proof"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
