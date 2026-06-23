import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Testimonial } from "../types";

const testimonialsList: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Chen",
    role: "Director of Organic Growth",
    company: "Lumina Designs",
    review: "Mohan completely repaired our eCommerce search traffic. Our organic clicks surged from 12k to 68k in 6 Months, and our online product sales have grown proportionally. He is a technical SEO genius!",
    rating: 5,
    avatar: "https://picsum.photos/seed/sarah/150/150",
  },
  {
    id: "test-2",
    name: "Marcus Aurelius",
    role: "Managing Attorney & Founder",
    company: "Aurelius Legal",
    review: "ClickForDigital identified our canonical indexing leaks within 10 days. We are now ranking #1 for the most competitive law specialties in our state. Absolute masters of search intent.",
    rating: 5,
    avatar: "https://picsum.photos/seed/marcus/150/150",
  },
  {
    id: "test-3",
    name: "Emma Watson",
    role: "Head of Marketing",
    company: "TechScribe Automation",
    review: "The AI auditor audit and Mohan's customized sitemap roadmap was the highest returning investment we carried out all year. Our organic signup numbers have grown week over week.",
    rating: 5,
    avatar: "https://picsum.photos/seed/emma/150/150",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-zinc-950/40 border-t border-zinc-100 dark:border-zinc-900/10 scroll-mt-12 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header indicator */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase block">
            CLIENT VOUCHERS
          </span>
          <h2 className="mt-2 font-sans font-extrabold text-3xl text-zinc-900 dark:text-white tracking-tight">
            Vouched by Growing Brands
          </h2>
        </div>

        {/* Testimonial slider card */}
        <div className="relative" id="testimonials-carousel">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-150 dark:border-zinc-800 p-8 sm:p-12 shadow-sm relative flex flex-col items-center text-center"
            >
              {/* Quote vector background decorative */}
              <Quote className="absolute top-6 left-6 w-16 h-16 text-zinc-100 dark:text-zinc-800/40 pointer-events-none" />

              {/* Avatar structure */}
              <div className="relative">
                <img
                  src={testimonialsList[currentIndex].avatar}
                  alt={testimonialsList[currentIndex].name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-teal-500/10 shadow-sm"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white border-2 border-white dark:border-zinc-900">
                  <Award className="w-3 h-3" />
                </div>
              </div>

              {/* Star rating */}
              <div className="flex gap-1.5 mt-5">
                {Array.from({ length: testimonialsList[currentIndex].rating }).map((_, idx) => (
                  <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Quote text */}
              <p className="mt-6 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 italic font-medium leading-relaxed max-w-2xl">
                "{testimonialsList[currentIndex].review}"
              </p>

              {/* Contributor Details */}
              <div className="mt-8 border-t border-zinc-100 dark:border-zinc-850 pt-5 w-full">
                <span className="font-sans font-extrabold text-sm sm:text-base text-zinc-950 dark:text-white block">
                  {testimonialsList[currentIndex].name}
                </span>
                <span className="text-xs text-zinc-550 dark:text-zinc-400 mt-0.5 block font-mono font-bold uppercase tracking-wide">
                  {testimonialsList[currentIndex].role} — {testimonialsList[currentIndex].company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              id="btn-prev-testimonial"
              aria-label="Previous testimonial review"
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition shadow-sm flex items-center justify-center cursor-pointer focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <span className="text-xs font-mono font-bold text-zinc-400">
              {currentIndex + 1} / {testimonialsList.length}
            </span>

            <button
              onClick={handleNext}
              id="btn-next-testimonial"
              aria-label="Next testimonial review"
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition shadow-sm flex items-center justify-center cursor-pointer focus:outline-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
