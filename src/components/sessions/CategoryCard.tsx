import Link from "next/link";
import type { Category } from "@/lib/types";
import { getSessionsByCategory } from "@/lib/data";
import { categoryIcons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = categoryIcons[category.slug];
  const count = getSessionsByCategory(category.slug).length;

  return (
    <Link
      href={`/programs?category=${category.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-white/15 hover:shadow-[0_20px_48px_-20px_rgba(2,6,16,0.9),0_0_32px_-16px_rgba(60,224,173,0.25)] motion-reduce:transition-none motion-reduce:transform-none"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-300 group-hover:opacity-100",
          category.gradient,
        )}
        aria-hidden
      />
      <div className="relative">
        <span
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-xl",
            category.accentBg,
            category.accentText,
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold text-white">{category.name}</h3>
        <p className={cn("mt-1 text-sm font-medium", category.accentText)}>{category.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{category.description}</p>
        <p className="mt-4 text-sm font-medium text-slate-300">
          {count} programs
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </Link>
  );
}
