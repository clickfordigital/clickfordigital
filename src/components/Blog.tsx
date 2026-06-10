import React, { useState } from "react";
import { BlogArticle } from "../types";
import { Calendar, Clock, ArrowRight, Rss, Info, AlertCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const mockArticles: BlogArticle[] = [
  {
    id: "blog-1",
    title: "The Core Web Vitals Checklist for 2026",
    excerpt: "Google's algorithmic systems are increasingly prioritizing layout stability (CLS) and input latency. Discover exactly how to optimize your JavaScript execution bundles to secure rankings.",
    category: "Technical SEO",
    date: "Jun 02, 2026",
    readTime: "6 Min Read",
    featuredImage: "https://picsum.photos/seed/vital/800/500",
  },
  {
    id: "blog-2",
    title: "Topical Authority & Semantic Content Clusters",
    excerpt: "Targeting random standalone keywords is no longer effective. Learn how ClickForDigital designs structured internal networks that prove industry-level expertise to search spiders.",
    category: "Content Strategy",
    date: "May 24, 2026",
    readTime: "8 Min Read",
    featuredImage: "https://picsum.photos/seed/semantic/800/500",
  },
  {
    id: "blog-3",
    title: "Local Map Packs: Driving 400% More Calls",
    excerpt: "Discover the precise Local Coordinate Schema and NAP sync configurations Mohan utilizes to elevate click-through volumes on Google Search Maps relative to suburbs.",
    category: "Local SEO",
    date: "May 18, 2026",
    readTime: "5 Min Read",
    featuredImage: "https://picsum.photos/seed/map/800/500",
  }
];

export default function Blog() {
  const [rssActive, setRssActive] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  // Future Blogger RSS Integration Template configuration explanation
  const bloggerIntegrationTemplate = `
/**
 * TO INTEGRATE DYNAMIC BLOGGER RSS:
 * Replace this module's local state hook with standard fetcher:
 * 
 * const fetchBloggerFeed = async () => {
 *   const BLOGGER_API_KEY = process.env.VITE_BLOGGER_API_KEY;
 *   const BLOG_ID = 'your_blogger_blog_id_here'; // E.g., 232145...
 *   const response = await fetch(\`https://www.googleapis.com/books/v1/...\`);
 *   // OR standard XML/RSS Reader library parsing Mohan's blogger:
 *   // https://username.blogger.com/feeds/posts/default?alt=json
 * };
 */
  `;

  return (
    <section id="blog" className="py-24 bg-white dark:bg-zinc-950 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase block">
              ORGANIC INSIGHTS BLOG
            </span>
            <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
              SEO Knowledge Hub
            </h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-sm sm:text-base font-sans font-medium">
              Actionable guides and technical reports written by Mohan to help you understand rankings.
            </p>
          </div>

          <button
            onClick={() => setRssActive(!rssActive)}
            id="btn-blogger-rss-info"
            className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500/30 font-semibold px-4 py-2.5 rounded-xl text-xs text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 shadow-sm transition select-none cursor-pointer focus:outline-none"
          >
            <Rss className="w-4 h-4 text-orange-500" />
            Blogger RSS Config
          </button>
        </div>

        {/* Blogger RSS integration info panel */}
        <AnimatePresence>
          {rssActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 overflow-hidden bg-orange-500/5 border border-orange-500/10 rounded-2xl p-5 sm:p-6"
              id="rss-integration-drawer"
            >
              <div className="flex items-start gap-3.5">
                <Info className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-1.5">
                    Ready for blogger RSS integration
                  </h3>
                  <p className="text-xs text-zinc-550 dark:text-zinc-400 mt-1.5 leading-relaxed font-sans font-medium">
                    Mohan can dynamically synchronize this section with his custom Blogger portal! All that is required is configuring a secure widget to parse Blogger's JSON feed from: <code className="bg-zinc-100 dark:bg-zinc-900 px-1 py-0.5 rounded text-[10.5px] font-mono text-orange-500 font-bold">https://clickfordigital.blogspot.com/feeds/posts/default?alt=json</code>.
                  </p>
                  
                  {/* Code snip */}
                  <div className="mt-4 bg-zinc-950 p-4 rounded-xl overflow-x-auto border border-zinc-900">
                    <pre className="font-mono text-[10.5px] text-zinc-400 leading-normal">
                      {bloggerIntegrationTemplate.trim()}
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blog layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="blog-grid">
          {mockArticles.map((art, idx) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              id={art.id}
              className="bg-zinc-50/50 dark:bg-zinc-900/10 rounded-2xl border border-zinc-150/80 dark:border-zinc-900 overflow-hidden flex flex-col h-full group"
            >
              {/* Featured image */}
              <div className="h-48 overflow-hidden relative select-none">
                <img
                  src={art.featuredImage}
                  alt={art.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 blur-0"
                />
                
                {/* Category badge overlay */}
                <span className="absolute top-4 left-4 bg-zinc-950 border border-zinc-800 text-white text-[9.5px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md uppercase">
                  {art.category}
                </span>
              </div>

              {/* Text metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[10.5px] font-mono text-zinc-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-base sm:text-lg text-zinc-950 dark:text-white mt-3 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {art.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans font-medium line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-900/60 flex justify-between items-center">
                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="text-xs font-bold text-zinc-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 flex items-center gap-1 transition-colors cursor-pointer focus:outline-none"
                  >
                    Read Detailed Guide
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  
                  <span className="text-[10px] items-center gap-1 text-orange-500/80 font-mono font-bold flex">
                    <Sparkles className="w-3 h-3 text-orange-400 fill-orange-400 animate-pulse" />
                    Blogger Template
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Article Detail Drawer Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div
            id="article-detail-modal"
            className="fixed inset-0 z-50 bg-zinc-950/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-150 dark:border-zinc-800 max-w-2xl w-full overflow-hidden shadow-2xl relative"
            >
              <div className="h-56 relative select-none">
                <img
                  src={selectedArticle.featuredImage}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent flex items-end p-6">
                  <span className="bg-teal-500 text-white text-[9.5px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                    {selectedArticle.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 text-[10.5px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1">{selectedArticle.date}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="flex items-center gap-1">{selectedArticle.readTime}</span>
                </div>

                <h3 className="font-sans font-black text-lg sm:text-2xl text-zinc-950 dark:text-white leading-tight">
                  {selectedArticle.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-300 font-sans font-medium leading-relaxed">
                  {selectedArticle.excerpt}
                </p>
                <div className="p-4 rounded-xl border border-orange-500/10 bg-orange-500/5 text-xs text-orange-600 leading-normal font-sans font-medium">
                  <strong>Notice:</strong> This detailed content node acts as an elegant showcase. Setting up Blogger XML feeds will automatically inject long-form nested HTML body, images, and anchors dynamically!
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold px-5 py-2.5 rounded-xl text-xs transition cursor-pointer focus:outline-none"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
