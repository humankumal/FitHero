import type { Difficulty } from "@/lib/types";

/** Join class names, skipping falsy values */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export const difficultyStyles: Record<Difficulty, string> = {
  Beginner: "text-mint-400 bg-mint-400/10",
  Intermediate: "text-ember-400 bg-ember-400/10",
  Advanced: "text-haze-400 bg-haze-400/10",
  "All Levels": "text-sky-400 bg-sky-400/10",
};
