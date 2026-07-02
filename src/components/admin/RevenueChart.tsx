import { Card } from "@/components/ui/Card";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface RevenueChartProps {
  data: { month: string; revenue: number }[];
}

const AXIS_MAX = 150_000;
const gridlines = [0, 50_000, 100_000, 150_000];

/**
 * Single-series revenue bars — one hue, direct label on the latest bar,
 * per-bar hover tooltip, and an sr-only table as the data fallback.
 */
export function RevenueChart({ data }: RevenueChartProps) {
  const latest = data[data.length - 1];

  return (
    <Card className="p-6">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <h2 className="font-display text-lg font-semibold text-white">Revenue by month</h2>
          <p className="mt-0.5 text-xs text-slate-500">Gross membership + program revenue, USD</p>
        </div>
        <p className="text-sm text-slate-400">
          <span className="font-display text-lg font-semibold text-mint-400">
            {formatPrice(latest.revenue)}
          </span>{" "}
          this month
        </p>
      </div>

      <div className="relative mt-8 h-56" aria-hidden>
        {/* Recessive gridlines */}
        {gridlines.map((value) => (
          <div
            key={value}
            className="absolute inset-x-0 flex items-center gap-2"
            style={{ bottom: `${(value / AXIS_MAX) * 100}%` }}
          >
            <span className="w-10 shrink-0 -translate-y-1/2 text-right text-[10px] text-slate-600">
              {value === 0 ? "0" : `${value / 1000}k`}
            </span>
            <div className="h-px flex-1 bg-white/6" />
          </div>
        ))}

        {/* Bars */}
        <div className="absolute inset-y-0 left-12 right-0 flex items-end justify-between gap-3 sm:gap-5">
          {data.map((point, i) => {
            const isLatest = i === data.length - 1;
            return (
              <div key={point.month} className="group relative flex h-full flex-1 items-end">
                {/* Hover target is the full column, not just the bar */}
                <div className="absolute inset-0" />
                <div
                  className={cn(
                    "relative mx-auto w-full max-w-10 rounded-t-[4px] transition-colors",
                    isLatest
                      ? "bg-mint-400 group-hover:bg-mint-300"
                      : "bg-mint-500/55 group-hover:bg-mint-500/80",
                  )}
                  style={{ height: `${(point.revenue / AXIS_MAX) * 100}%` }}
                />
                {/* Direct label on the latest bar only */}
                {isLatest && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-full text-xs font-semibold text-white">
                    {Math.round(point.revenue / 1000)}k
                  </span>
                )}
                {/* Tooltip */}
                <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-ink-800 px-3 py-2 text-xs opacity-0 shadow-card transition-opacity duration-150 group-hover:opacity-100">
                  <span className="block font-medium text-white">{point.month} 2026</span>
                  <span className="text-slate-400">{formatPrice(point.revenue)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="ml-12 mt-2 flex justify-between gap-3 sm:gap-5" aria-hidden>
        {data.map((point) => (
          <span key={point.month} className="flex-1 text-center text-xs text-slate-500">
            {point.month}
          </span>
        ))}
      </div>

      {/* Accessible data table */}
      <table className="sr-only">
        <caption>Revenue by month, USD</caption>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((point) => (
            <tr key={point.month}>
              <td>{point.month} 2026</td>
              <td>{formatPrice(point.revenue)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
