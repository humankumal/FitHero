import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategory,
  getRelatedSessions,
  getSession,
  getTrainer,
  sessions,
} from "@/lib/data";
import { SessionCard } from "@/components/sessions/SessionCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { Reveal } from "@/components/motion/Reveal";
import { categoryIcons, CheckIcon, ClockIcon, CalendarIcon, ShieldIcon } from "@/components/icons";
import { cn, difficultyStyles, formatPrice } from "@/lib/utils";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return sessions.map((session) => ({ slug: session.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const session = getSession(slug);
  if (!session) return { title: "Program not found" };
  return {
    title: session.title,
    description: session.summary,
  };
}

export default async function SessionDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const session = getSession(slug);
  if (!session) notFound();

  const category = getCategory(session.category);
  const trainer = getTrainer(session.trainerId);
  const related = getRelatedSessions(session);
  const Icon = categoryIcons[session.category];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className={cn(
              "absolute -top-32 left-1/2 h-[400px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-br blur-[130px] opacity-60",
              category?.gradient,
            )}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
              <Link href="/programs" className="transition-colors hover:text-white">
                Programs
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <span className={category?.accentText}>{category?.name}</span>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl",
                  category?.accentBg,
                  category?.accentText,
                )}
              >
                <Icon className="h-6 w-6" />
              </span>
              <Badge className={difficultyStyles[session.difficulty]}>{session.difficulty}</Badge>
              {session.featured && (
                <Badge className="bg-ember-400/15 text-ember-300">Most popular</Badge>
              )}
            </div>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {session.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
              {session.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <Rating rating={session.rating} reviewCount={session.reviewCount} />
              <span className="inline-flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4" />
                {session.duration} min per session
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4" />
                {session.sessionsPerWeek}×/week for {session.weeks} weeks
              </span>
              {trainer && (
                <span>
                  Coached by <span className="text-white">{trainer.name}</span>
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-14">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-white">
                About this program
              </h2>
              <p className="mt-4 leading-relaxed text-slate-400">{session.description}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-white">What you&apos;ll gain</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {session.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-4"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-mint-400" />
                    <span className="text-sm leading-relaxed text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-white">Program structure</h2>
              <ol className="mt-5 space-y-0">
                {session.structure.map((phase, i) => (
                  <li key={phase.week} className="relative flex gap-5 pb-8 last:pb-0">
                    {i < session.structure.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-[15px] top-8 h-full w-px bg-white/10"
                      />
                    )}
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-mint-400/40 bg-ink-900 text-xs font-semibold text-mint-400">
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        {phase.week}
                      </p>
                      <p className="mt-1 text-slate-300">{phase.focus}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            {trainer && (
              <Reveal>
                <h2 className="font-display text-2xl font-semibold text-white">Your coach</h2>
                <Card className="mt-5 p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <span
                      className={cn(
                        "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br font-display text-xl font-bold text-ink-950",
                        trainer.avatarGradient,
                      )}
                      aria-hidden
                    >
                      {trainer.initials}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {trainer.name}
                      </h3>
                      <p className="text-sm text-mint-400">
                        {trainer.role} · {trainer.yearsExperience} years experience
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">{trainer.bio}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            )}
          </div>

          {/* Booking sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <Card className="p-6">
                <p>
                  <span className="font-display text-4xl font-bold text-white">
                    {formatPrice(session.price)}
                  </span>
                  <span className="text-sm text-slate-500"> / full program</span>
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Included free with Hero &amp; Elite memberships
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/8 pt-6 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckIcon className="h-4 w-4 shrink-0 text-mint-400" />
                    {session.weeks} weeks · {session.sessionsPerWeek} sessions per week
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="h-4 w-4 shrink-0 text-mint-400" />
                    Live coaching &amp; on-demand replays
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="h-4 w-4 shrink-0 text-mint-400" />
                    Progress tracking on your dashboard
                  </li>
                  <li className="flex items-center gap-3">
                    <ShieldIcon className="h-4 w-4 shrink-0 text-mint-400" />
                    14-day money-back guarantee
                  </li>
                </ul>

                {session.equipment.length > 0 && (
                  <div className="mt-6 border-t border-white/8 pt-6">
                    <h3 className="text-sm font-semibold text-white">You&apos;ll need</h3>
                    <ul className="mt-2 space-y-1 text-sm text-slate-400">
                      {session.equipment.map((item) => (
                        <li key={item}>· {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  <Button href={`/booking?session=${session.slug}`} className="w-full" size="lg">
                    Book This Program
                  </Button>
                  <Button href="/pricing" variant="secondary" className="w-full">
                    See Membership Plans
                  </Button>
                </div>
              </Card>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-white/5 bg-ink-900/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white">
              Members also practice
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedSession, i) => (
              <Reveal key={relatedSession.slug} delay={i * 0.08} className="flex">
                <SessionCard session={relatedSession} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
