import React, { useState } from "react";
import { ClipboardList, ZoomIn, FileCode, Landmark, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

interface Step {
  step: string;
  title: string;
  icon: React.ReactNode;
  desc: string;
  metric: string;
  colorBorder: string;
}

export default function Workflow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepsList: Step[] = [
    {
      step: "01",
      title: "In-Depth Site Audit",
      icon: <ClipboardList className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
      desc: "Mohan executes programmatic code examinations to uncover crawling blocks, schema errors, internal pipeline leaks, and Core Web Vitals speed limitations.",
      metric: "Crawl rate mapped",
      colorBorder: "border-teal-500",
    },
    {
      step: "02",
      title: "Keyword Research & SERPs",
      icon: <ZoomIn className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      desc: "Identifying direct competitor gaps, long-tail transactional buyer terms, and commercial intent query parameters relevant to your industry vertical.",
      metric: "Target Maps structured",
      colorBorder: "border-indigo-500",
    },
    {
      step: "03",
      title: "Rigorous Code Optimization",
      icon: <FileCode className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      desc: "Injecting microdata schemas, aligning Title/Meta fields, rebuilding canonical structures, and shrinking large script resources to drive quick SERP surges.",
      metric: "Meta density cleared",
      colorBorder: "border-amber-500",
    },
    {
      step: "04",
      title: "Content Authority Clusters",
      icon: <Landmark className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      desc: "Structuring comprehensive informational support hubs to claim E-E-A-T dominance for major commercial transactional keywords.",
      metric: "Topical hub mapped",
      colorBorder: "border-rose-500",
    },
    {
      step: "05",
      title: "Growth Tracking & CTR Outlines",
      icon: <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      desc: "Continuous search console monitoring, click-rate tuning, SERP layout diagnostics, and backlinks audits to preserve traffic peaks.",
      metric: "Ranking indexes online",
      colorBorder: "border-emerald-500",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase block">
            OUR 5-STEP CORE SEO WORKFLOW
          </span>
          <h2 className="mt-2 font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            How ClickForDigital Audits & Ranks
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-sm sm:text-base font-sans font-medium">
            A precise, structured optimization routine designed to yield measurable rankings improvements.
          </p>
        </div>

        {/* Interactive Step Timeline sequence */}
        <div className="relative mt-12" id="workflow-timeline">
          {/* Timeline Connector Line (Desktop only) */}
          <div className="absolute top-[38px] left-[5%] right-[5%] h-0.5 bg-zinc-100 dark:bg-zinc-900 z-0 hidden lg:block" />

          {/* Steps Display */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {stepsList.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer group flex flex-col p-6 rounded-2xl border transition-all duration-300 relative select-none ${
                    isActive
                      ? "bg-zinc-50 dark:bg-zinc-900/60 border-teal-500 dark:border-teal-500/30 shadow-sm"
                      : "bg-white dark:bg-zinc-950 border-zinc-100 dark:border-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-800"
                  }`}
                  id={`workflow-step-${idx}`}
                >
                  {/* Circle Step Number Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-teal-500 text-white font-bold"
                          : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-800"
                      }`}
                    >
                      <span className="font-mono text-sm leading-none font-bold">
                        {step.step}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Text Details */}
                  <h3 className="font-sans font-extrabold text-base text-zinc-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans font-medium">
                    {step.desc}
                  </p>

                  {/* Core metric badge */}
                  <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-900/50 flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-wider font-extrabold text-zinc-400 dark:text-zinc-500 uppercase">
                      Action Metric:
                    </span>
                    <span className="font-mono text-[9px] text-teal-600 dark:text-teal-400 font-bold bg-teal-500/5 px-2 py-0.5 rounded border border-teal-500/10">
                      {step.metric}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
