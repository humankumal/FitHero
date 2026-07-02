import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

interface CtaBandProps {
  title?: string;
  description?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CtaBand({
  title = "Ready to become your strongest self?",
  description = "Join 4,200+ members building strength, calm, and discipline — one guided session at a time.",
  secondaryHref = "/pricing",
  secondaryLabel = "View Membership Plans",
}: CtaBandProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-6 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-mint-500/15 blur-[100px]" />
            <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-ember-500/12 blur-[100px]" />
          </div>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/booking" size="lg">
                Start Your Journey
              </Button>
              <Button href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
