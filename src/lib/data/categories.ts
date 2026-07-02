import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "training",
    name: "Training Sessions",
    shortName: "Training",
    tagline: "Build real, lasting strength",
    description:
      "Coach-led strength, conditioning, and mobility programs that meet you at your level and progress week by week.",
    accentText: "text-ember-400",
    accentBg: "bg-ember-400/10",
    gradient: "from-ember-500/25 via-ember-400/10 to-transparent",
  },
  {
    slug: "yoga",
    name: "Yoga Sessions",
    shortName: "Yoga",
    tagline: "Move with strength and ease",
    description:
      "Flows for energy, flexibility, posture, and recovery — guided by instructors who care about form, not performance.",
    accentText: "text-sky-400",
    accentBg: "bg-sky-400/10",
    gradient: "from-sky-400/25 via-sky-400/10 to-transparent",
  },
  {
    slug: "meditation",
    name: "Meditation Sessions",
    shortName: "Meditation",
    tagline: "Train a calmer, sharper mind",
    description:
      "Breathing and mindfulness practices for sleep, focus, and stress — short enough to do daily, deep enough to matter.",
    accentText: "text-haze-400",
    accentBg: "bg-haze-400/10",
    gradient: "from-haze-500/25 via-haze-400/10 to-transparent",
  },
  {
    slug: "life",
    name: "Life Enhancement Skills",
    shortName: "Life Skills",
    tagline: "Upgrade how you live",
    description:
      "Practical programs for discipline, confidence, habits, and productivity — the skills that make every other goal easier.",
    accentText: "text-mint-400",
    accentBg: "bg-mint-400/10",
    gradient: "from-mint-500/25 via-mint-400/10 to-transparent",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
