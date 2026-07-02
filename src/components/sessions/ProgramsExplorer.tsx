"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { CategorySlug, Difficulty, Session } from "@/lib/types";
import { categories } from "@/lib/data";
import { SessionCard } from "@/components/sessions/SessionCard";
import { cn } from "@/lib/utils";

const difficulties: (Difficulty | "All")[] = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
  "All Levels",
];

type CategoryFilter = CategorySlug | "all";

interface ProgramsExplorerProps {
  sessions: Session[];
}

export function ProgramsExplorer({ sessions }: ProgramsExplorerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const paramCategory = searchParams.get("category");
  const initialCategory: CategoryFilter = categories.some((c) => c.slug === paramCategory)
    ? (paramCategory as CategorySlug)
    : "all";

  const [category, setCategory] = useState<CategoryFilter>(initialCategory);
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");
  const [query, setQuery] = useState("");

  function selectCategory(next: CategoryFilter) {
    setCategory(next);
    const params = new URLSearchParams(searchParams.toString());
    if (next === "all") {
      params.delete("category");
    } else {
      params.set("category", next);
    }
    const qs = params.toString();
    router.replace(qs ? `/programs?${qs}` : "/programs", { scroll: false });
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sessions.filter((session) => {
      if (category !== "all" && session.category !== category) return false;
      if (difficulty !== "All" && session.difficulty !== difficulty) return false;
      if (q && !`${session.title} ${session.summary}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [sessions, category, difficulty, query]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          className="flex flex-wrap justify-center gap-2 lg:justify-start"
          role="group"
          aria-label="Filter by category"
        >
          <button
            type="button"
            onClick={() => selectCategory("all")}
            aria-pressed={category === "all"}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              category === "all"
                ? "bg-mint-400 text-ink-950"
                : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white",
            )}
          >
            All programs
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => selectCategory(c.slug)}
              aria-pressed={category === c.slug}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                category === c.slug
                  ? "bg-mint-400 text-ink-950"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white",
              )}
            >
              {c.shortName}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <label className="sr-only" htmlFor="program-search">
            Search programs
          </label>
          <input
            id="program-search"
            type="search"
            placeholder="Search programs…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-mint-400/50 sm:w-56"
          />
          <label className="sr-only" htmlFor="difficulty-filter">
            Filter by difficulty
          </label>
          <select
            id="difficulty-filter"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty | "All")}
            className="w-full cursor-pointer appearance-none rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white focus:border-mint-400/50 sm:w-44 [&>option]:bg-ink-900"
          >
            {difficulties.map((d) => (
              <option key={d} value={d}>
                {d === "All" ? "Any difficulty" : d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <p className="mt-8 text-sm text-slate-500" role="status">
        Showing {filtered.length} of {sessions.length} programs
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((session) => (
            <SessionCard key={session.slug} session={session} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-20 text-center">
          <p className="font-display text-lg font-semibold text-white">No programs match</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-slate-400">
            Try a different search term, or clear the filters to see all {sessions.length}{" "}
            programs.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setDifficulty("All");
              selectCategory("all");
            }}
            className="mt-6 rounded-full bg-white/8 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
