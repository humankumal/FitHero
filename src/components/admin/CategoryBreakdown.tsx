"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CategorySlug } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { getCategory } from "@/lib/data";

/** Categorical hues validated for the dark surface (CVD-safe, fixed order) */
const categoryChartColor: Record<CategorySlug, string> = {
  training: "#cf7115",
  yoga: "#0284c7",
  meditation: "#8b5cf6",
  life: "#17a37a",
};

interface CategoryBreakdownProps {
  data: { category: CategorySlug; count: number }[];
}

export function CategoryBreakdown({ data }: CategoryBreakdownProps) {
  const reduceMotion = useReducedMotion();
  const total = data.reduce((sum, d) => sum + d.count, 0);
  const max = Math.max(...data.map((d) => d.count));

  return (
    <Card className="flex h-full flex-col p-6">
      <h2 className="font-display text-lg font-semibold text-white">Bookings by category</h2>
      <p className="mt-0.5 text-xs text-slate-500">
        {total.toLocaleString()} bookings this month
      </p>

      <ul className="mt-7 flex flex-1 flex-col justify-center space-y-5">
        {data.map((item, i) => {
          const category = getCategory(item.category);
          const share = Math.round((item.count / total) * 100);
          return (
            <li key={item.category}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="flex items-center gap-2 font-medium text-slate-300">
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 rounded-[3px]"
                    style={{ backgroundColor: categoryChartColor[item.category] }}
                  />
                  {category?.shortName}
                </span>
                <span className="text-slate-400">
                  <span className="font-semibold text-white">{item.count}</span> · {share}%
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: categoryChartColor[item.category] }}
                  initial={
                    reduceMotion
                      ? { width: `${(item.count / max) * 100}%` }
                      : { width: "0%" }
                  }
                  whileInView={{ width: `${(item.count / max) * 100}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
