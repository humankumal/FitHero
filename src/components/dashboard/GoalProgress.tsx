import type { WeeklyGoal } from "@/lib/types";
import { cn } from "@/lib/utils";

interface GoalProgressProps {
  goal: WeeklyGoal;
}

export function GoalProgress({ goal }: GoalProgressProps) {
  const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
  const done = pct >= 100;

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-medium text-slate-300">{goal.label}</p>
        <p className="text-xs text-slate-500">
          <span className={cn("font-semibold", done ? "text-mint-400" : "text-white")}>
            {goal.current}
          </span>
          /{goal.target} {goal.unit}
        </p>
      </div>
      <div
        role="progressbar"
        aria-valuenow={goal.current}
        aria-valuemin={0}
        aria-valuemax={goal.target}
        aria-label={goal.label}
        className="mt-2 h-2 overflow-hidden rounded-full bg-white/8"
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-700",
            done
              ? "bg-gradient-to-r from-mint-400 to-mint-500"
              : "bg-gradient-to-r from-mint-500 to-sky-400",
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
