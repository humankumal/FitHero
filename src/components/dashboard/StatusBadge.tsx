import type { BookingStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const statusStyles: Record<BookingStatus, { dot: string; chip: string; label: string }> = {
  confirmed: { dot: "bg-mint-400", chip: "bg-mint-400/10 text-mint-300", label: "Confirmed" },
  pending: { dot: "bg-ember-400", chip: "bg-ember-400/10 text-ember-300", label: "Pending" },
  completed: { dot: "bg-sky-400", chip: "bg-sky-400/10 text-sky-300", label: "Completed" },
  cancelled: { dot: "bg-slate-500", chip: "bg-white/8 text-slate-400", label: "Cancelled" },
};

export function StatusBadge({ status }: { status: BookingStatus }) {
  const style = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        style.chip,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", style.dot)} aria-hidden />
      {style.label}
    </span>
  );
}
