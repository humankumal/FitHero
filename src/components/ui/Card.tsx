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
          "transition-all duration-300 ease-out hover:border-white/15 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[0_20px_48px_-20px_rgba(2,6,16,0.9),0_0_32px_-16px_rgba(60,224,173,0.25)] motion-reduce:transition-none motion-reduce:transform-none",
        className,
      )}
    >
      {children}
    </div>
  );
}
