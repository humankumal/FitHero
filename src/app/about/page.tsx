import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { categoryIcons, HeartPulseIcon, ShieldIcon, TrendUpIcon, UsersIcon } from "@/components/icons";
import { categories, trainers } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fit Hero exists to make whole-person transformation guided, structured, and sustainable — body, mind, and habits together.",
};

const values = [
  {
    icon: HeartPulseIcon,
    title: "Whole-person first",
    description:
      "Strength without sleep breaks down. Calm without discipline drifts. We train the whole system, because that's how humans actually change.",
  },
  {
    icon: TrendUpIcon,
    title: "Progress over perfection",
    description:
      "We design for the imperfect week — the missed session, the low-energy day. Programs that survive real life are the only ones that work.",
  },
  {
    icon: UsersIcon,
    title: "Coaching, not content",
    description:
      "Anyone can film a workout video. Our trainers coach: they cue, correct, adapt, and answer. You're a member, not a view count.",
  },
  {
    icon: ShieldIcon,
    title: "Evidence over hype",
    description:
      "No detox teas, no 30-day miracles. Every protocol we teach has evidence behind it, and we tell you honestly what it can and can't do.",
  },
];

const milestones = [
  { value: "2022", label: "Founded in a single studio" },
  { value: "4,200+", label: "Active members today" },
  { value: "38k", label: "Sessions completed" },
  { value: "92%", label: "Members active after 90 days" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Fit Hero"
        title="We believe transformation is a skill — and skills can be taught"
        description="Fit Hero started with a simple observation: the people who change their bodies but not their habits lose the change. So we built a platform that trains both."
      />

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white">
              From a gym that kept losing people, to a platform that keeps them
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-slate-400">
              <p>
                Our founders ran a successful training studio with an unsuccessful secret: most
                members quit within four months. Not because the workouts didn&apos;t work — because
                everything around the workouts didn&apos;t. Stress, sleep, habits, confidence.
              </p>
              <p>
                So we rebuilt the studio around the whole person. Training for the body. Yoga for
                movement and recovery. Meditation for the mind. Life-enhancement skills for the
                habits that hold it all together. Retention tripled. Then we turned it into Fit
                Hero, so it could work for anyone, anywhere.
              </p>
              <p>
                Today, four pillars and sixteen guided programs later, that&apos;s still the whole
                idea: <span className="text-white">become stronger, calmer, and more disciplined —
                at the same time, on purpose.</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((m) => (
                <Card key={m.label} className="p-6 text-center">
                  <p className="font-display text-3xl font-bold text-mint-400">{m.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{m.label}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/5 bg-ink-900/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we stand for"
            title="The principles behind every program"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 0.08}>
                <Card className="h-full p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-400/10 text-mint-400">
                    <value.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {value.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars strip */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The four pillars"
          title="Why we teach more than fitness"
          description="Each pillar covers a different layer of transformation. Together, they compound."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => {
            const Icon = categoryIcons[category.slug];
            return (
              <Reveal key={category.slug} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                  <span
                    className={cn(
                      "inline-flex h-11 w-11 items-center justify-center rounded-xl",
                      category.accentBg,
                      category.accentText,
                    )}
                  >
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-4 font-display font-semibold text-white">{category.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {category.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="border-y border-white/5 bg-ink-900/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The team"
            title="Coaches who've walked the path"
            description="Six specialists across strength, movement, mind, and behavior — every one of them still practices what they teach."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.map((trainer, i) => (
              <Reveal key={trainer.id} delay={(i % 3) * 0.08}>
                <Card className="h-full p-6">
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br font-display text-lg font-bold text-ink-950",
                        trainer.avatarGradient,
                      )}
                      aria-hidden
                    >
                      {trainer.initials}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-white">{trainer.name}</h3>
                      <p className="text-sm text-mint-400">{trainer.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{trainer.bio}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {trainer.specialty} · {trainer.yearsExperience} yrs
                  </p>
                </Card>
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
