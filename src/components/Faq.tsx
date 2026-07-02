import type { Faq } from "@/lib/types";

interface FaqListProps {
  items: Faq[];
}

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/8 rounded-2xl border border-white/8 bg-white/[0.03]">
      {items.map((faq) => (
        <details key={faq.question} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-white [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span
              aria-hidden
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/8 text-slate-300 transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 pr-10 text-sm leading-relaxed text-slate-400">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
