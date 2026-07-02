import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ className, children, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/8 bg-white/[0.03] shadow-card",
        hover &&
          "transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
