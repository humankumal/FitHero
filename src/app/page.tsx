import { Hero } from "@/components/home/Hero";
import { CategoryCard } from "@/components/sessions/CategoryCard";
import { SessionCard } from "@/components/sessions/SessionCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/CtaBand";
import { categories, getFeaturedSessions, testimonials } from "@/lib/data";
import { CalendarIcon, HeartPulseIcon, TrendUpIcon } from "@/components/icons";

const steps = [
  {
    icon: CalendarIcon,
    title: "Choose your path",
    description:
      "Pick the programs that match your goals — strength, calm, flexibility, discipline, or all four. Every program is guided step by step.",
  },
  {
    icon: HeartPulseIcon,
    title: "Show up, guided",
    description:
      "Book sessions that fit your week. Coaches guide every rep, flow, and breath, so you never wonder whether you're doing it right.",
  },
  {
    icon: TrendUpIcon,
    title: "Watch yourself change",
    description:
      "Streaks, weekly goals, and progress tracking turn small daily wins into a transformation you can see and feel.",
  },
];

export default function HomePage() {
  const featured = getFeaturedSessions();

  return (
    <>
      <Hero />

      {/* Four pillars */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The four pillars"
          title="One platform. Four ways to grow."
          description="Real transformation isn't just physical. Fit Hero trains your body, mind, and habits together — because each one makes the others stronger."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <Reveal key={category.slug} delay={i * 0.08} className="flex">
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured programs */}
      <section className="border-y border-white/5 bg-ink-900/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured programs"
            title="Start where thousands started"
            description="Our most-loved programs across every pillar — proven structures with the ratings to show for it."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((session, i) => (
              <Reveal key={session.slug} delay={i * 0.08} className="flex">
                <SessionCard session={session} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/programs" variant="secondary">
              Browse all 16 programs
            </Button>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Guided from day one"
          description="No guesswork, no generic plans. Three steps between you and a routine that finally sticks."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-white/8 bg-white/[0.03] p-7">
                <span className="absolute right-6 top-5 font-display text-5xl font-bold text-white/5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-400/10 text-mint-400">
                  <step.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-white/5 bg-ink-900/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Member stories"
            title="Real people. Real transformations."
            description="Strength, sleep, posture, promotions — here's what happens when body and mind train together."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <Reveal key={testimonial.id} delay={(i % 3) * 0.08} className="flex">
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24">
        <CtaBand />
      </div>
    </>
  );
}
