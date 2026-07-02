import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StatTile } from "@/components/dashboard/StatTile";
import { GoalProgress } from "@/components/dashboard/GoalProgress";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { SessionCard } from "@/components/sessions/SessionCard";
import {
  categoryIcons,
  ClockIcon,
  FlameIcon,
  HeartPulseIcon,
  TrendUpIcon,
} from "@/components/icons";
import { getCategory, getSession, sessions, userBookings, userStats } from "@/lib/data";
import { cn, formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Your Dashboard",
  description: "Your upcoming sessions, weekly goals, and progress — all in one place.",
};

export default function DashboardPage() {
  const upcoming = userBookings.filter((b) => b.status !== "cancelled");
  const bookedSlugs = new Set(userBookings.map((b) => b.sessionSlug));
  const recommended = sessions
    .filter((s) => !bookedSlugs.has(s.slug))
    .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      {/* Greeting */}
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint-400">
              Your dashboard
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Welcome back, {userStats.memberName.split(" ")[0]}
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Member since {userStats.memberSince} · {userStats.sessionsCompleted} sessions
              completed
            </p>
          </div>
          <Button href="/booking">Book a Session</Button>
        </div>
      </Reveal>

      {/* Stats */}
      <Reveal className="mt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatTile
            label="Current streak"
            value={`${userStats.streakDays} days`}
            hint="Keep it alive today"
            icon={FlameIcon}
            accent="bg-ember-400/10 text-ember-400"
          />
          <StatTile
            label="Active minutes this week"
            value={`${userStats.minutesThisWeek}`}
            hint="across all pillars"
            icon={ClockIcon}
            accent="bg-sky-400/10 text-sky-400"
          />
          <StatTile
            label="Sessions completed"
            value={`${userStats.sessionsCompleted}`}
            hint="since you joined"
            icon={TrendUpIcon}
          />
          <StatTile
            label="Calm score"
            value={`${userStats.calmScore}/100`}
            hint="up 6 pts this month"
            icon={HeartPulseIcon}
            accent="bg-haze-400/10 text-haze-400"
          />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Upcoming bookings */}
        <Reveal>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-white">Upcoming sessions</h2>
              <Link
                href="/booking"
                className="text-sm font-medium text-mint-400 transition-colors hover:text-mint-300"
              >
                + Add session
              </Link>
            </div>

            {upcoming.length > 0 ? (
              <ul className="mt-5 divide-y divide-white/8">
                {upcoming.map((booking) => {
                  const session = getSession(booking.sessionSlug);
                  if (!session) return null;
                  const category = getCategory(session.category);
                  const Icon = categoryIcons[session.category];
                  return (
                    <li
                      key={booking.id}
                      className="flex flex-wrap items-center gap-4 py-4 first:pt-5 last:pb-0"
                    >
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                          category?.accentBg,
                          category?.accentText,
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/programs/${session.slug}`}
                          className="font-medium text-white transition-colors hover:text-mint-300"
                        >
                          {session.title}
                        </Link>
                        <p className="mt-0.5 text-sm text-slate-500">
                          {formatDate(booking.date)} · {booking.time} · {session.duration} min
                        </p>
                      </div>
                      <StatusBadge status={booking.status} />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="mt-5 rounded-xl border border-dashed border-white/10 px-6 py-12 text-center">
                <p className="font-medium text-white">No sessions booked yet</p>
                <p className="mt-1 text-sm text-slate-400">
                  Your week has room for one small win. Book your first session.
                </p>
                <Button href="/booking" size="sm" className="mt-5">
                  Book a Session
                </Button>
              </div>
            )}
          </Card>
        </Reveal>

        {/* Weekly goals */}
        <Reveal delay={0.08}>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-white">Weekly goals</h2>
              <span className="text-xs text-slate-500">resets Monday</span>
            </div>
            <div className="mt-6 space-y-5">
              {userStats.weeklyGoals.map((goal) => (
                <GoalProgress key={goal.label} goal={goal} />
              ))}
            </div>
            <p className="mt-6 rounded-xl bg-mint-400/8 p-4 text-xs leading-relaxed text-slate-400">
              <span className="font-medium text-mint-300">Coach&apos;s note:</span> you&apos;re one
              training session away from a perfect week. Thursday 07:00 with Maya has open spots.
            </p>
          </Card>
        </Reveal>
      </div>

      {/* Recommended */}
      <div className="mt-14">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white">
                Recommended for you
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Top-rated programs you haven&apos;t tried yet — picked for balance across your pillars.
              </p>
            </div>
            <Link
              href="/programs"
              className="hidden text-sm font-medium text-mint-400 transition-colors hover:text-mint-300 sm:block"
            >
              Browse all →
            </Link>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recommended.map((session, i) => (
            <Reveal key={session.slug} delay={i * 0.08} className="flex">
              <SessionCard session={session} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
