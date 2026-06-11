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
    const scriptId = "blogger-jsonp-script";

    const fetchBloggerFeed = () => {
      const callbackName = `bloggerCallback_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
      
      // Define the global callback function
      (window as any)[callbackName] = (data: any) => {
        if (!isMounted) return;
        try {
          const entries = data.feed?.entry || [];
          if (!entries || entries.length === 0) {
            throw new Error("No articles publish found.");
          }

          const seenUrls = new Set<string>();
          const parsedPosts: BloggerPost[] = [];

          for (const entry of entries) {
            // Find alternate link
            const url = entry.link?.find((l: any) => l.rel === "alternate")?.href;
            if (!url) continue;
            
            // Prevent duplicate posts
            if (seenUrls.has(url)) continue;
            seenUrls.add(url);

            const title = entry.title?.$t || "Untitled Post";
            
            // Get category/label
            const category = entry.category && entry.category.length > 0 && entry.category[0].term 
              ? entry.category[0].term 
              : "SEO Insights";

            // Get publish date
            const rawDateStr = entry.published?.$t || "";
            let formattedDate = "Recent Post";
            if (rawDateStr) {
              try {
                const d = new Date(rawDateStr);
                formattedDate = d.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric"
                });
              } catch (e) {}
            }

            // Excerpt extraction: strip script, style, and HTML tags, limit length target
            let rawContent = entry.content?.$t || entry.summary?.$t || "";
            let cleanText = rawContent
              .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, "")
              .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, "")
              .replace(/<[^>]*>/g, " ")
              .replace(/\s+/g, " ")
              .trim();

            let excerpt = cleanText;
            if (excerpt.length > 135) {
              excerpt = excerpt.substring(0, 132) + "...";
            }
            if (!excerpt) {
              excerpt = "Click read article, discover expert analysis on SEO and digital marketing directly on our blog.";
            }

            // Get featured image: first img tag from content, or fallback media$thumbnail, or professional backup placeholder
            let featuredImage = "";
            if (entry.content?.$t) {
              const imgMatch = entry.content.$t.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch && imgMatch[1]) {
                featuredImage = imgMatch[1];
              }
            }
            if (!featuredImage && entry.media$thumbnail?.url) {
              featuredImage = entry.media$thumbnail.url.replace(/\/s[0-9]+(-[a-zA-Z0-9_-]+)?\//, "/s1600/");
              if (!featuredImage.startsWith("http")) {
                featuredImage = entry.media$thumbnail.url;
              }
            }
            if (!featuredImage) {
              // High-quality professional placeholder matching dark slate/tech design
              featuredImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
            }

            parsedPosts.push({
              id: entry.id?.$t || url,
              title,
              excerpt,
              category,
              date: formattedDate,
              rawDate: rawDateStr,
              featuredImage,
              url
            });
          }

          // Sort posts by latest published date
          parsedPosts.sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime());

          // Display latest 6 posts
          const finalPosts = parsedPosts.slice(0, 6);
          setPosts(finalPosts);
          setLoading(false);
        } catch (err: any) {
          console.error("JSONP parsing error:", err);
          setError("Failed to load feed articles");
          setLoading(false);
        } finally {
          cleanup();
        }
      };

      // Create Script tag for JSONP to bypass browser CORS completely
      const baseUrl = "https://mohaninsight.blogspot.com/feeds/posts/default";
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `${baseUrl}?alt=json-in-script&callback=${callbackName}`;
      script.async = true;

      // Timeout safety check
      const timeoutId = setTimeout(() => {
        if (isMounted) {
          console.error("Blogger jsonp fetch timed out");
          setError("Timeout loading Blogger feed");
          setLoading(false);
          cleanup();
        }
      }, 7000);

      const cleanup = () => {
        clearTimeout(timeoutId);
        const existingScript = document.getElementById(scriptId);
        if (existingScript) existingScript.remove();
        delete (window as any)[callbackName];
      };

      script.onerror = () => {
        if (isMounted) {
          console.error("Blogger jsonp script failed to execute");
          setError("Failed to fetch RSS script");
          setLoading(false);
          cleanup();
        }
      };

      document.body.appendChild(script);
      return cleanup;
    };

    const cancelFeed = fetchBloggerFeed();

    return () => {
      isMounted = false;
      if (cancelFeed) cancelFeed();
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
