import Link from "next/link";
import type { Session } from "@/lib/types";
import { getCategory, getTrainer } from "@/lib/data";
import { categoryIcons, ClockIcon } from "@/components/icons";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { cn, difficultyStyles, formatPrice } from "@/lib/utils";

interface SessionCardProps {
  session: Session;
  className?: string;
}

export function SessionCard({ session, className }: SessionCardProps) {
  const category = getCategory(session.category);
  const trainer = getTrainer(session.trainerId);
  const Icon = categoryIcons[session.category];

  return (
    <Link
      href={`/programs/${session.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]",
        className,
      )}
    >
      {/* Visual tile */}
      <div
        className={cn(
          "relative flex h-36 items-center justify-center bg-gradient-to-br",
          category?.gradient,
        )}
      >
        <Icon
          className={cn(
            "h-14 w-14 transition-transform duration-300 group-hover:scale-110",
            category?.accentText,
          )}
        />
        {session.featured && (
          <Badge className="absolute left-4 top-4 bg-ember-400/15 text-ember-300">
            Most popular
          </Badge>
        )}
        <Badge className={cn("absolute right-4 top-4", difficultyStyles[session.difficulty])}>
          {session.difficulty}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className={cn("text-xs font-semibold uppercase tracking-wider", category?.accentText)}>
            {category?.shortName}
          </span>
          <Rating rating={session.rating} />
        </div>

        <h3 className="mt-2 font-display text-lg font-semibold text-white transition-colors group-hover:text-mint-300">
          {session.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">
          {session.summary}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="h-3.5 w-3.5" />
            {session.duration} min · {session.weeks} weeks
          </span>
          {trainer && <span>with {trainer.name}</span>}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-4">
          <span className="mt-0.5">
            <span className="font-display text-lg font-semibold text-white">
              {formatPrice(session.price)}
            </span>
            <span className="text-xs text-slate-500"> / program</span>
          </span>
          <span className="text-sm font-medium text-mint-400 transition-transform duration-300 group-hover:translate-x-1">
            View program →
          </span>
        </div>
      </div>
    </Link>
  );
}
