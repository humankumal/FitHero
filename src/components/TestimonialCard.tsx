import type { Testimonial } from "@/lib/types";
import { getCategory } from "@/lib/data";
import { StarIcon } from "@/components/icons";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const category = getCategory(testimonial.category);

  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-ember-400" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
        “{testimonial.quote}”
      </blockquote>
      <footer className="mt-5 border-t border-white/8 pt-4">
        <p className="font-medium text-white">{testimonial.name}</p>
        <p className={cn("mt-0.5 text-sm font-medium", category?.accentText)}>
          {testimonial.result}
        </p>
      </footer>
    </Card>
  );
}
