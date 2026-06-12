import React, { useState, useEffect } from "react";
import { Calendar, Clock, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

interface BloggerPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  rawDate: string;
  featuredImage: string;
  url: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BloggerPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadFeed() {
      try {
        const response = await fetch("/api/blog-posts");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts from API");
        }
        const data = await response.json();
        if (isMounted) {
          if (data.success && Array.isArray(data.articles)) {
            setPosts(data.articles);
          } else {
            throw new Error("Invalid posts schema received");
          }
          setLoading(false);
        }
      } catch (err: any) {
        console.error("Error loading blog posts:", err);
        if (isMounted) {
          setError("Failed to load feed articles");
          setLoading(false);
        }
      }
    }

    loadFeed();

    return () => {
      isMounted = false;
    };
  }, []);

  // Compute read-time safely based on dummy word length or fallback to consistent 5 min
  const getReadTime = (text: string) => {
    const words = text.split(/\s+/).length;
    const min = Math.ceil(words / 200);
    return `${Math.max(3, min)} Min Read`;
  };

  return (
    <section id="blog" className="py-24 bg-zinc-50 dark:bg-zinc-950 scroll-mt-12 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0ea5e9] uppercase block mb-3">
            ORGANIC INSIGHTS
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Latest Insights From Our Blog
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-sm sm:text-base font-sans font-medium leading-relaxed">
            Read our latest articles on SEO, Core Web Vitals, AI Tools, Blogging, Digital Marketing, Affiliate Marketing and Online Business Growth.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20" id="blog-loading-state">
            <div className="relative w-12 h-12">
              <span className="absolute inset-0 border-4 border-zinc-200 dark:border-zinc-800 rounded-full"></span>
              <span className="absolute inset-0 border-4 border-t-sky-500 rounded-full animate-spin"></span>
            </div>
            <p className="mt-4 text-sm font-sans font-medium text-zinc-500 dark:text-zinc-400 animate-pulse">
              Loading latest articles...
            </p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="max-w-md mx-auto text-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm flex flex-col items-center" id="blog-error-state">
            <AlertCircle className="w-12 h-12 text-[#ef4444] mb-4" />
            <h3 className="font-sans font-bold text-lg text-zinc-900 dark:text-white mb-2">
              Feed Connection Offline
            </h3>
            <p className="text-sm text-zinc-550 dark:text-zinc-405 mb-6 leading-relaxed font-sans font-medium">
              We encountered a temporary connection issue syncing our live Blogger RSS feed. You can still access our real posts directly.
            </p>
            <a
              href="https://mohaninsight.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              id="btn-error-visit-blog"
              className="inline-flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all group focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20"
            >
              Visit Our Blog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        )}

        {/* Blog Posts Cards layout grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-grid">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index % 3 * 0.1 }}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-150/80 dark:border-zinc-800/80 shadow-sm hover:shadow-md hover:border-sky-500/30 dark:hover:border-sky-500/30 overflow-hidden flex flex-col h-full group transition-all duration-300"
              >
                {/* Featured image with consistent ratio */}
                <div className="aspect-[16/10] overflow-hidden relative select-none bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  
                  {/* Category badge overlay */}
                  <span className="absolute top-4 left-4 bg-zinc-950/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 text-white text-[9px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Card details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date and time read labels */}
                    <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {getReadTime(post.excerpt)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-extrabold text-base sm:text-lg text-zinc-950 dark:text-white mt-3 leading-snug group-hover:text-[#0ea5e9] dark:group-hover:text-[#0ea5e9] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Short Excerpt */}
                    <p className="mt-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans font-medium line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer read more links */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/50 flex justify-between items-center">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-zinc-950 dark:text-white group-hover:text-[#0ea5e9] dark:group-hover:text-[#0ea5e9] flex items-center gap-1.5 transition-colors focus:outline-none"
                    >
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    
                    <span className="text-[10px] items-center gap-1 text-[#f97316] font-mono font-bold flex">
                      <Sparkles className="w-3 h-3 text-orange-400 fill-orange-400 animate-pulse" />
                      Live Feed
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
