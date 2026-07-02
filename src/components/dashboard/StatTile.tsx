import { Card } from "@/components/ui/Card";
import { TrendUpIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface StatTileProps {
  label: string;
  value: string;
  hint?: string;
  /** Growth percentage — renders a labeled delta chip */
  deltaPct?: number;
  icon?: (props: { className?: string }) => React.ReactElement;
  accent?: string;
}

export function StatTile({
  label,
  value,
  hint,
  deltaPct,
  icon: Icon,
  accent = "bg-mint-400/10 text-mint-400",
}: StatTileProps) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm text-slate-400">{label}</p>
        {Icon && (
          <span className={cn("flex h-9 w-9 items-center justify-center rounded-lg", accent)}>
            <Icon className="h-4.5 w-4.5" />
          </span>
        )}
      </div>
      <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white">{value}</p>
      <div className="mt-2 flex items-center gap-2 text-xs">
        {deltaPct !== undefined && (
          <span className="inline-flex items-center gap-1 rounded-full bg-mint-400/10 px-2 py-0.5 font-medium text-mint-400">
            <TrendUpIcon className="h-3 w-3" />
            +{deltaPct}%
          </span>
        )}
        {hint && <span className="text-slate-500">{hint}</span>}
      </div>
    </Card>
  );
}
