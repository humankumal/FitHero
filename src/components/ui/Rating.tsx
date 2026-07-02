import { StarIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface RatingProps {
  rating: number;
  reviewCount?: number;
  className?: string;
}

export function Rating({ rating, reviewCount, className }: RatingProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm", className)}>
      <StarIcon className="h-4 w-4 text-ember-400" />
      <span className="font-medium text-white">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-slate-500">({reviewCount.toLocaleString()})</span>
      )}
    </span>
  );
}
