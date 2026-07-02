import { cn } from "@/lib/utils";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        className ?? "bg-white/8 text-slate-300",
      )}
    >
      {children}
    </span>
  );
}
