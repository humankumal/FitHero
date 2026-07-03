"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  DumbbellIcon,
  FlameIcon,
  LotusIcon,
  MindIcon,
  SparkIcon,
  StarIcon,
} from "@/components/icons";

const stats = [
  { value: "4,200+", label: "Active members" },
  { value: "16", label: "Guided programs" },
  { value: "4.8", label: "Average rating" },
  { value: "92%", label: "Stick with it 90+ days" },
];

const floatingCards = [
  {
    icon: DumbbellIcon,
    title: "Full Body Strength",
    meta: "55 min · Intermediate",
    accent: "text-ember-400 bg-ember-400/10",
    position: "left-0 top-8",
    delay: 0.5,
  },
  {
    icon: LotusIcon,
    title: "Morning Flow",
    meta: "20 min · All levels",
    accent: "text-sky-400 bg-sky-400/10",
    position: "right-4 top-36",
    delay: 0.65,
  },
  {
    icon: MindIcon,
    title: "Sleep Calm",
    meta: "15 min · Tonight, 9:30 pm",
    accent: "text-haze-400 bg-haze-400/10",
    position: "left-10 bottom-24",
    delay: 0.8,
  },
  {
    icon: SparkIcon,
    title: "Discipline Builder",
    meta: "Week 3 of 6 · On track",
    accent: "text-mint-400 bg-mint-400/10",
    position: "right-0 bottom-4",
    delay: 0.95,
  },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2">
          <div className="h-full w-full rounded-full bg-mint-500/12 blur-[140px] animate-glow-drift" />
        </div>
        <div className="absolute right-[-160px] top-40 h-[420px] w-[420px]">
          <div
            className="h-full w-full rounded-full bg-ember-500/10 blur-[120px] animate-glow-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="absolute bottom-[-200px] left-[-120px] h-[420px] w-[420px]">
          <div
            className="h-full w-full rounded-full bg-haze-500/10 blur-[120px] animate-glow-pulse"
            style={{ animationDelay: "5s" }}
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
                <FlameIcon className="h-4 w-4 text-ember-400" />
                The complete transformation platform
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.12)}
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl"
            >
              Train your body.{" "}
              <span className="bg-gradient-to-r from-mint-300 to-sky-400 bg-clip-text text-transparent">
                Calm your mind.
              </span>{" "}
              Upgrade your life.
            </motion.h1>

            <motion.p
              {...fadeUp(0.24)}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 lg:mx-0"
            >
              Fit Hero brings training, yoga, meditation, and life-enhancement skills into one
              guided transformation platform — so you get stronger, calmer, and more disciplined
              at the same time.
            </motion.p>

            <motion.div
              {...fadeUp(0.36)}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button href="/booking" size="lg" className="w-full sm:w-auto">
                Start Your Journey
              </Button>
              <Button href="/programs" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Programs
              </Button>
            </motion.div>

            <motion.dl
              {...fadeUp(0.48)}
              className="mt-12 grid grid-cols-2 gap-6 border-t border-white/8 pt-8 sm:grid-cols-4 lg:max-w-xl"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-white">
                    {stat.value === "4.8" ? (
                      <span className="inline-flex items-center gap-1.5">
                        {stat.value}
                        <StarIcon className="h-4 w-4 text-ember-400" />
                      </span>
                    ) : (
                      stat.value
                    )}
                  </dd>
                  <dd className="mt-1 text-xs text-slate-500">{stat.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Floating session cards */}
          <div className="relative hidden h-[480px] lg:block" aria-hidden>
            <div className="absolute inset-8 rounded-[2.5rem] border border-white/8 bg-gradient-to-br from-white/[0.05] to-transparent" />
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: card.delay, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute ${card.position}`}
              >
                <div
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/90 p-4 pr-6 shadow-card backdrop-blur-sm animate-float"
                  style={{ animationDelay: `${i * 1.6}s` }}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.accent}`}
                  >
                    <card.icon className="h-5.5 w-5.5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{card.title}</span>
                    <span className="block text-xs text-slate-500">{card.meta}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
