import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { TrendingUp, Users, Award, Calendar } from "lucide-react";

interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  color: string;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1800; // ms
    const incrementTime = Math.min(Math.floor(duration / end), 30);
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono font-black text-4xl sm:text-5xl tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsList = [
    {
      id: "stat-companies",
      label: "Companies Worked With",
      value: 2,
      suffix: "",
      icon: <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    },
    {
      id: "stat-websites",
      label: "Websites Managed",
      value: 3,
      suffix: "",
      icon: <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      id: "stat-[#0ea5e9]",
      label: "SEO & SMO Specialist",
      value: 100,
      suffix: "%",
      icon: <Award className="w-6 h-6 text-[#0ea5e9]" />,
    },
    {
      id: "stat-projects",
      label: "SEO Projects Completed",
      value: 10,
      suffix: "+",
      icon: <Calendar className="w-6 h-6 text-rose-605 dark:text-rose-405" />,
    },
  ];

  return (
    <section className="py-12 border-y border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsList.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              id={stat.id}
              className="relative p-6 sm:p-8 rounded-2xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col items-center select-none group hover:border-zinc-200 dark:hover:border-zinc-800 transition-all duration-300"
            >
              {/* Icon visual container */}
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              <div className="mt-4 text-center">
                <div className="text-zinc-900 dark:text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans font-medium tracking-tight">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
