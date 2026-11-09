"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import type { Session } from "@/lib/types";
import { getCategory, getTrainer, pricingPlans } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input, Label, Select } from "@/components/forms/fields";
import { CalendarIcon, ClockIcon } from "@/components/icons";
import { cn, formatPrice } from "@/lib/utils";

const timeSlots = ["06:30", "08:00", "12:15", "17:30", "19:00", "20:30"];

const emptySubscribe = () => () => {};

/** True after hydration — lets us render client-only content (dates) without mismatches */
function useHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

interface DayOption {
  iso: string;
  weekday: string;
  day: string;
}

function buildNextDays(count: number): DayOption[] {
  const days: DayOption[] = [];
  const now = new Date();
  for (let i = 1; i <= count; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    days.push({
      iso: d.toISOString().slice(0, 10),
      weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
      day: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    });
  }
  return days;
}

interface BookingFormProps {
  sessions: Session[];
}

export function BookingForm({ sessions }: BookingFormProps) {
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();
  const requestedSession = searchParams.get("session");
  const requestedPlan = searchParams.get("plan");
  const selectedPlan = pricingPlans.find((p) => p.id === requestedPlan);

  const [slug, setSlug] = useState(
    sessions.some((s) => s.slug === requestedSession) ? (requestedSession as string) : sessions[0].slug,
  );
  const [dateIso, setDateIso] = useState<string>("");
  const [time, setTime] = useState(timeSlots[0]);
  const [confirmed, setConfirmed] = useState<{ name: string; reference: string } | null>(null);

  // Dates are computed on the client only, to keep prerendered HTML stable.
  const hydrated = useHydrated();
  const days = useMemo<DayOption[]>(() => (hydrated ? buildNextDays(7) : []), [hydrated]);
  const selectedIso = dateIso || days[0]?.iso || "";

  const session = useMemo(
    () => sessions.find((s) => s.slug === slug) ?? sessions[0],
    [sessions, slug],
  );
  const category = getCategory(session.category);
  const trainer = getTrainer(session.trainerId);
  const selectedDay = days.find((d) => d.iso === selectedIso);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    // Deterministic mock reference — no backend in V1
    const reference = `FH-${(slug.length * 137 + (selectedIso ? Number(selectedIso.slice(-2)) : 1) * 61 + timeSlots.indexOf(time) * 7 + 1000).toString().slice(-4)}`;
    setConfirmed({ name: name || "friend", reference });
  }

  if (confirmed) {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
      <Card className="p-8 text-center sm:p-12">
        <motion.span
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint-400/15 text-mint-400"
          initial={reduceMotion ? false : { scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden>
            <motion.path
              d="M4.5 12.5l5 5 10-11"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduceMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            />
          </svg>
        </motion.span>
        <h2 className="mt-6 font-display text-2xl font-semibold text-white">
          You&apos;re booked, {confirmed.name}!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400">
          Your spot in <span className="text-white">{session.title}</span> is reserved for{" "}
          <span className="text-white">
            {selectedDay ? `${selectedDay.weekday}, ${selectedDay.day}` : "your chosen day"} at {time}
          </span>
          {selectedPlan ? (
            <>
              {" "}
              as part of the <span className="text-white">{selectedPlan.name}</span> plan
            </>
          ) : null}
          .
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Booking reference: <span className="font-mono text-mint-400">{confirmed.reference}</span>
        </p>
        <p className="mx-auto mt-5 max-w-md rounded-xl bg-ember-400/10 px-4 py-3 text-xs leading-relaxed text-ember-300">
          Demo preview — bookings aren&apos;t stored and no confirmation email is sent yet. Live
          booking arrives with V2.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/dashboard">Go to Your Dashboard</Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setConfirmed(null)}
          >
            Book Another Session
          </Button>
        </div>
      </Card>
      </motion.div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <Label htmlFor="booking-session">Program</Label>
            <Select
              id="booking-session"
              name="session"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            >
              {sessions.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title} — {getCategory(s.category)?.shortName}
                </option>
              ))}
            </Select>
          </div>

          <fieldset>
            <legend className="mb-2 block text-sm font-medium text-slate-300">Pick a day</legend>
            {days.length === 0 ? (
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-7" aria-hidden>
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="h-16 animate-pulse rounded-xl bg-white/5" />
                ))}
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-4 gap-2 sm:grid-cols-7"
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.035 } }, hidden: {} }}
              >
                {days.map((day) => (
                  <motion.button
                    key={day.iso}
                    type="button"
                    onClick={() => setDateIso(day.iso)}
                    aria-pressed={selectedIso === day.iso}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                    animate={
                      reduceMotion
                        ? undefined
                        : { scale: selectedIso === day.iso ? 1.04 : 1 }
                    }
                    transition={{ type: "spring", stiffness: 420, damping: 24 }}
                    className={cn(
                      "rounded-xl border px-2 py-3 text-center transition-colors",
                      selectedIso === day.iso
                        ? "border-mint-400/60 bg-mint-400/10 text-white shadow-[0_0_20px_-6px_rgba(60,224,173,0.4)]"
                        : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-white",
                    )}
                  >
                    <span className="block text-xs uppercase tracking-wider">{day.weekday}</span>
                    <span className="mt-1 block text-sm font-semibold">{day.day}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </fieldset>

          <fieldset>
            <legend className="mb-2 block text-sm font-medium text-slate-300">Pick a time</legend>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((slot) => (
                <motion.button
                  key={slot}
                  type="button"
                  onClick={() => setTime(slot)}
                  aria-pressed={time === slot}
                  whileTap={reduceMotion ? undefined : { scale: 0.93 }}
                  animate={reduceMotion ? undefined : { scale: time === slot ? 1.05 : 1 }}
                  transition={{ type: "spring", stiffness: 420, damping: 24 }}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition-colors",
                    time === slot
                      ? "border-mint-400/60 bg-mint-400/10 text-white shadow-[0_0_20px_-6px_rgba(60,224,173,0.4)]"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-white",
                  )}
                >
                  {slot}
                </motion.button>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="booking-name">Your name</Label>
              <Input id="booking-name" name="name" required placeholder="Alex Morgan" />
            </div>
            <div>
              <Label htmlFor="booking-email">Email</Label>
              <Input
                id="booking-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="booking-notes" optional>
              Anything we should know?
            </Label>
            <Input
              id="booking-notes"
              name="notes"
              placeholder="Injuries, experience level, goals…"
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Confirm Booking
          </Button>
          <p className="text-center text-xs text-slate-500">
            Free to reschedule up to 12 hours before your session.
          </p>
        </form>
      </Card>

      {/* Selection summary */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <Card className="p-6 sm:p-7">
          <p className={cn("text-xs font-semibold uppercase tracking-wider", category?.accentText)}>
            {category?.name}
          </p>
          <h2 className="mt-2 font-display text-xl font-semibold text-white">{session.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{session.summary}</p>

          <dl className="mt-6 space-y-3 border-t border-white/8 pt-5 text-sm">
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-2 text-slate-400">
                <ClockIcon className="h-4 w-4" /> Session length
              </dt>
              <dd className="text-white">{session.duration} minutes</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-2 text-slate-400">
                <CalendarIcon className="h-4 w-4" /> Selected slot
              </dt>
              <dd className="text-white">
                {selectedDay ? `${selectedDay.weekday} ${selectedDay.day}` : "—"} · {time}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-400">Coach</dt>
              <dd className="text-white">{trainer?.name}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-400">Difficulty</dt>
              <dd className="text-white">{session.difficulty}</dd>
            </div>
            {selectedPlan && (
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Selected plan</dt>
                <dd className="text-white">
                  {selectedPlan.name} · {formatPrice(selectedPlan.monthlyPrice)}/mo
                </dd>
              </div>
            )}
            <div className="flex items-center justify-between border-t border-white/8 pt-3">
              <dt className="text-slate-400">Program price</dt>
              <dd className="font-display text-lg font-semibold text-white">
                {formatPrice(session.price)}
              </dd>
            </div>
          </dl>

          <p className="mt-5 rounded-xl bg-mint-400/8 p-4 text-xs leading-relaxed text-slate-400">
            <span className="font-medium text-mint-300">Included with membership:</span> Hero and
            Elite members book this program at no extra cost.{" "}
            <Link href="/pricing" className="text-mint-400 underline-offset-2 hover:underline">
              Compare plans
            </Link>
          </p>
        </Card>
      </aside>
    </div>
  );
}
