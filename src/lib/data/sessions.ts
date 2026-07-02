import type { Session } from "@/lib/types";

export const sessions: Session[] = [
  // ── Training ──────────────────────────────────────────────
  {
    slug: "full-body-strength",
    title: "Full Body Strength",
    category: "training",
    summary:
      "A progressive strength program built around the big lifts — squat, hinge, push, pull — for a stronger, more capable body.",
    description:
      "Full Body Strength is our flagship training program. Three coached sessions per week take you through the fundamental movement patterns with a clear progression model: master the technique, add load, repeat. Every session includes a guided warm-up, a strength block, and an accessory circuit, with video coaching cues at every step. Whether you're returning to training or breaking a plateau, this program gives you a structure that simply works.",
    benefits: [
      "Measurable strength gains in the squat, hinge, push, and pull",
      "A repeatable weekly structure that removes guesswork",
      "Technique coaching that protects your joints as load increases",
      "Confidence in the gym — you'll always know what to do next",
    ],
    structure: [
      { week: "Weeks 1–2", focus: "Movement foundations — technique, tempo, and baseline testing" },
      { week: "Weeks 3–5", focus: "Volume build — progressive sets across the four patterns" },
      { week: "Weeks 6–7", focus: "Intensity phase — heavier loads, longer rests, focused effort" },
      { week: "Week 8", focus: "Peak & retest — measure your progress and set new baselines" },
    ],
    duration: 55,
    weeks: 8,
    sessionsPerWeek: 3,
    difficulty: "Intermediate",
    trainerId: "maya-chen",
    price: 149,
    rating: 4.9,
    reviewCount: 412,
    equipment: ["Barbell or dumbbells", "Bench", "Resistance bands"],
    featured: true,
  },
  {
    slug: "fat-loss-foundation",
    title: "Fat Loss Foundation",
    category: "training",
    summary:
      "Sustainable fat loss through smart conditioning, strength work, and habits — no crash plans, no burnout.",
    description:
      "Fat Loss Foundation combines metabolic conditioning with foundational strength training and simple nutrition habits. Instead of punishing workouts you can't sustain, Daniel builds your weekly output gradually so your body adapts and your results last. Each week pairs three training sessions with one habit focus, from protein targets to step counts, so the change happens in your lifestyle — not just your workouts.",
    benefits: [
      "A conditioning base that makes everyday life feel easier",
      "Strength work that preserves muscle while you lose fat",
      "One simple nutrition habit per week — no extreme dieting",
      "A pace designed for consistency, not burnout",
    ],
    structure: [
      { week: "Weeks 1–2", focus: "Baseline conditioning and movement quality" },
      { week: "Weeks 3–5", focus: "Intervals + strength circuits, habit stacking begins" },
      { week: "Weeks 6–8", focus: "Higher output sessions with full recovery days" },
      { week: "Weeks 9–10", focus: "Consolidation — lock in the routine you'll keep" },
    ],
    duration: 45,
    weeks: 10,
    sessionsPerWeek: 3,
    difficulty: "Beginner",
    trainerId: "daniel-okafor",
    price: 129,
    rating: 4.8,
    reviewCount: 356,
    equipment: ["Dumbbells", "Jump rope (optional)"],
  },
  {
    slug: "mobility-reset",
    title: "Mobility Reset",
    category: "training",
    summary:
      "Undo years of sitting. Restore hips, spine, and shoulders with guided mobility and strength in new ranges.",
    description:
      "Mobility Reset is a six-week program for anyone whose body feels tighter than it should. Marcus combines assessment-driven mobility drills with loaded stretching and controlled articular work, so you don't just get flexible — you get strong in the ranges you unlock. Sessions are short, focused, and designed to slot around your existing training or busy schedule.",
    benefits: [
      "Noticeably freer hips, spine, and shoulders",
      "Less stiffness after long days at a desk",
      "Strength in end ranges, so gains actually stick",
      "A daily 10-minute maintenance routine you'll keep forever",
    ],
    structure: [
      { week: "Week 1", focus: "Assessment — find your restrictions and set baselines" },
      { week: "Weeks 2–3", focus: "Hips and ankles — regain the foundation" },
      { week: "Weeks 4–5", focus: "Spine and shoulders — rotation, extension, overhead range" },
      { week: "Week 6", focus: "Integration — full-body flows and your maintenance plan" },
    ],
    duration: 30,
    weeks: 6,
    sessionsPerWeek: 4,
    difficulty: "All Levels",
    trainerId: "marcus-reid",
    price: 89,
    rating: 4.9,
    reviewCount: 287,
    equipment: ["Yoga mat", "Light resistance band"],
  },
  {
    slug: "home-workout-hero",
    title: "Home Workout Hero",
    category: "training",
    summary:
      "A complete bodyweight and minimal-equipment program that turns any room into a gym.",
    description:
      "No gym, no problem. Home Workout Hero proves that progressive training doesn't need machines. Using bodyweight progressions and a single pair of dumbbells, Daniel guides you through eight weeks of structured training — from push-up and squat foundations to advanced unilateral work. Each session fits in under 40 minutes and needs no more space than a yoga mat.",
    benefits: [
      "Real strength progression with minimal equipment",
      "Sessions under 40 minutes that fit any schedule",
      "Bodyweight skill progressions — push-ups to pistols",
      "No commute, no waiting for equipment, no excuses",
    ],
    structure: [
      { week: "Weeks 1–2", focus: "Foundation — bodyweight patterns and tempo control" },
      { week: "Weeks 3–4", focus: "Volume — density circuits and unilateral work" },
      { week: "Weeks 5–6", focus: "Progression — harder variations, added load" },
      { week: "Weeks 7–8", focus: "Peak — skill tests and your next-step plan" },
    ],
    duration: 40,
    weeks: 8,
    sessionsPerWeek: 4,
    difficulty: "Beginner",
    trainerId: "daniel-okafor",
    price: 99,
    rating: 4.7,
    reviewCount: 501,
    equipment: ["Yoga mat", "One pair of dumbbells (optional)"],
  },

  // ── Yoga ──────────────────────────────────────────────────
  {
    slug: "morning-flow",
    title: "Morning Flow",
    category: "yoga",
    summary:
      "Twenty-minute sunrise flows that wake up your body, settle your breath, and set the tone for the day.",
    description:
      "Morning Flow is a daily practice designed for the first hour of your day. Elena sequences gentle-to-dynamic vinyasa flows that build heat gradually — perfect for a body that just woke up. Each session ends with two minutes of intention-setting, so you step off the mat clear about your day. No experience needed; every pose comes with modifications.",
    benefits: [
      "Wake up energized instead of reaching for a third coffee",
      "Build a morning routine that actually sticks",
      "Gradually improve flexibility with daily consistency",
      "Start each day with two minutes of clear intention",
    ],
    structure: [
      { week: "Week 1", focus: "Gentle awakening — sun salutation foundations" },
      { week: "Week 2", focus: "Building heat — standing sequences and balance" },
      { week: "Weeks 3–4", focus: "Full flows — linking breath and movement" },
      { week: "Beyond", focus: "A rotating library of 20-minute morning practices" },
    ],
    duration: 20,
    weeks: 4,
    sessionsPerWeek: 5,
    difficulty: "All Levels",
    trainerId: "elena-rossi",
    price: 69,
    rating: 4.9,
    reviewCount: 623,
    equipment: ["Yoga mat"],
    featured: true,
  },
  {
    slug: "stress-relief-yoga",
    title: "Stress Relief Yoga",
    category: "yoga",
    summary:
      "Slow, grounding sequences and long-held poses that release physical tension and quiet a racing mind.",
    description:
      "When stress lives in your body — tight shoulders, shallow breath, a jaw that won't unclench — Stress Relief Yoga is the antidote. Elena blends yin-style long holds with restorative postures and guided breathing, teaching your nervous system to downshift on demand. Evening-friendly and deliberately unhurried, this is the practice to end hard days well.",
    benefits: [
      "Release chronic tension in the neck, shoulders, and hips",
      "Learn breathing patterns that calm your nervous system fast",
      "Sleep more easily after evening practice",
      "A toolkit of five go-to poses for acute stress moments",
    ],
    structure: [
      { week: "Week 1", focus: "Grounding — breath awareness and supported postures" },
      { week: "Week 2", focus: "Release — hips and shoulders, where stress hides" },
      { week: "Week 3", focus: "Stillness — longer holds and guided body scans" },
      { week: "Week 4", focus: "Integration — your personal wind-down sequence" },
    ],
    duration: 35,
    weeks: 4,
    sessionsPerWeek: 3,
    difficulty: "Beginner",
    trainerId: "elena-rossi",
    price: 69,
    rating: 4.8,
    reviewCount: 389,
    equipment: ["Yoga mat", "Cushion or bolster"],
  },
  {
    slug: "flexibility-builder",
    title: "Flexibility Builder",
    category: "yoga",
    summary:
      "A structured six-week path to measurably deeper flexibility — hamstrings, hips, and spine.",
    description:
      "Flexibility isn't a gift, it's a practice. Flexibility Builder takes a training-based approach to yoga: consistent progressive stretching, active flexibility drills, and weekly benchmark poses so you can see your range grow. Elena's sequencing balances passive and active work, which means your new flexibility is usable — not just impressive in photos.",
    benefits: [
      "Measurable progress with weekly benchmark poses",
      "Active flexibility you can use in sport and daily life",
      "Safer stretching technique that respects your joints",
      "Visible progress in hamstrings, hips, and spine by week six",
    ],
    structure: [
      { week: "Week 1", focus: "Baseline — benchmark poses and safe range finding" },
      { week: "Weeks 2–3", focus: "Hamstrings and hips — passive and active work" },
      { week: "Weeks 4–5", focus: "Spine and shoulders — backbends and rotation" },
      { week: "Week 6", focus: "Retest — measure your gains, plan the next cycle" },
    ],
    duration: 30,
    weeks: 6,
    sessionsPerWeek: 4,
    difficulty: "Intermediate",
    trainerId: "elena-rossi",
    price: 79,
    rating: 4.7,
    reviewCount: 244,
    equipment: ["Yoga mat", "Yoga blocks", "Strap"],
  },
  {
    slug: "posture-correction-yoga",
    title: "Posture Correction Yoga",
    category: "yoga",
    summary:
      "Reverse desk posture with targeted strengthening and opening — stand taller in six weeks.",
    description:
      "Hours at a screen shorten the chest, weaken the upper back, and teach the spine to slump. Posture Correction Yoga systematically reverses that pattern: opening what's tight, strengthening what's weak, and rebuilding your body's default alignment. Marcus and Elena co-designed this program to blend physiotherapy principles with yoga practice — expect precise, purposeful sessions.",
    benefits: [
      "Stand and sit taller without constant effort",
      "Relieve tension headaches and neck strain at the source",
      "Strengthen the deep muscles that hold you upright",
      "Micro-practices you can do at your desk between meetings",
    ],
    structure: [
      { week: "Weeks 1–2", focus: "Open — chest, hip flexors, and thoracic spine" },
      { week: "Weeks 3–4", focus: "Strengthen — upper back, core, and glutes" },
      { week: "Week 5", focus: "Align — integrate new posture into movement" },
      { week: "Week 6", focus: "Automate — desk micro-practices and daily habits" },
    ],
    duration: 25,
    weeks: 6,
    sessionsPerWeek: 4,
    difficulty: "All Levels",
    trainerId: "elena-rossi",
    price: 79,
    rating: 4.8,
    reviewCount: 318,
    equipment: ["Yoga mat", "Yoga blocks"],
  },

  // ── Meditation ────────────────────────────────────────────
  {
    slug: "sleep-calm",
    title: "Sleep Calm",
    category: "meditation",
    summary:
      "Evening meditations and breathwork that quiet the mind and guide you into deep, restorative sleep.",
    description:
      "Sleep Calm rebuilds your relationship with bedtime. Arjun guides you through progressive relaxation, slow breathing protocols, and body-scan meditations engineered for the transition into sleep. The program also covers the behavioral side — light, screens, and timing — so your evenings start working with your biology instead of against it.",
    benefits: [
      "Fall asleep faster with guided wind-down practices",
      "Wake less during the night as your baseline calm improves",
      "A repeatable 15-minute pre-sleep ritual",
      "Practical sleep hygiene without the lecture",
    ],
    structure: [
      { week: "Week 1", focus: "The wind-down — breath and progressive relaxation" },
      { week: "Week 2", focus: "Body scans — releasing physical restlessness" },
      { week: "Week 3", focus: "Racing minds — techniques for thought-heavy nights" },
      { week: "Week 4", focus: "Your ritual — a personalized pre-sleep sequence" },
    ],
    duration: 15,
    weeks: 4,
    sessionsPerWeek: 6,
    difficulty: "Beginner",
    trainerId: "arjun-mehta",
    price: 59,
    rating: 4.9,
    reviewCount: 712,
    equipment: [],
    featured: true,
  },
  {
    slug: "focus-reset",
    title: "Focus Reset",
    category: "meditation",
    summary:
      "Short attention-training sessions that rebuild your ability to concentrate in a distracted world.",
    description:
      "Focus is trainable — and most of us have let it atrophy. Focus Reset applies classic concentration meditation to the modern attention crisis: ten-minute daily sits that strengthen your mind's ability to stay where you put it. Arjun pairs the practice with simple work rituals (single-tasking blocks, transition breaths) so the gains show up in your actual workday.",
    benefits: [
      "Longer stretches of deep, undistracted work",
      "Catch distraction earlier and return to task faster",
      "Lower mental fatigue at the end of the day",
      "Rituals that make focus your default, not a struggle",
    ],
    structure: [
      { week: "Week 1", focus: "Anchoring — breath-focused attention training" },
      { week: "Week 2", focus: "Noticing — catching the wandering mind sooner" },
      { week: "Week 3", focus: "Returning — recovering focus without frustration" },
      { week: "Week 4", focus: "Applying — single-tasking rituals for real work" },
    ],
    duration: 10,
    weeks: 4,
    sessionsPerWeek: 5,
    difficulty: "All Levels",
    trainerId: "arjun-mehta",
    price: 49,
    rating: 4.8,
    reviewCount: 456,
    equipment: [],
  },
  {
    slug: "anxiety-relief-breathing",
    title: "Anxiety Relief Breathing",
    category: "meditation",
    summary:
      "Evidence-based breathing protocols that calm anxiety in minutes and lower your baseline over weeks.",
    description:
      "Your breath is the fastest lever you have on your nervous system. This program teaches the protocols with the strongest evidence behind them — extended exhales, physiological sighs, coherent breathing — and builds them into a daily practice. Arjun explains the why behind each technique, then guides you through it, so you finish with tools you trust when anxiety spikes.",
    benefits: [
      "Interrupt anxiety spirals in under three minutes",
      "Lower baseline stress with a daily 12-minute practice",
      "Understand the physiology, so the tools feel trustworthy",
      "Discreet techniques you can use anywhere — meetings included",
    ],
    structure: [
      { week: "Week 1", focus: "Foundations — how breath drives the nervous system" },
      { week: "Week 2", focus: "Rescue tools — fast protocols for acute moments" },
      { week: "Week 3", focus: "Daily practice — coherent breathing and consistency" },
      { week: "Week 4", focus: "Resilience — combining tools into your own system" },
    ],
    duration: 12,
    weeks: 4,
    sessionsPerWeek: 5,
    difficulty: "Beginner",
    trainerId: "arjun-mehta",
    price: 49,
    rating: 4.9,
    reviewCount: 534,
    equipment: [],
  },
  {
    slug: "daily-stillness",
    title: "10-Minute Daily Stillness",
    category: "meditation",
    summary:
      "The simplest habit with the highest return: ten minutes of guided stillness, every day, for life.",
    description:
      "Daily Stillness is the meditation program for people who don't have time to meditate. One guided ten-minute sit per day — that's the whole commitment. Arjun rotates the themes (breath, sound, body, open awareness) to keep the practice fresh while the habit takes root. After four weeks, most members report they'd no sooner skip it than skip brushing their teeth.",
    benefits: [
      "A meditation habit that survives busy weeks",
      "Noticeably steadier moods within a month",
      "Variety that keeps daily practice interesting",
      "The foundation for every other mental skill",
    ],
    structure: [
      { week: "Week 1", focus: "Breath — the classic anchor, made approachable" },
      { week: "Week 2", focus: "Body — grounding attention in physical sensation" },
      { week: "Week 3", focus: "Sound — open, effortless listening practice" },
      { week: "Week 4", focus: "Open awareness — resting in stillness itself" },
    ],
    duration: 10,
    weeks: 4,
    sessionsPerWeek: 7,
    difficulty: "All Levels",
    trainerId: "arjun-mehta",
    price: 39,
    rating: 4.8,
    reviewCount: 892,
    equipment: [],
  },

  // ── Life Enhancement ──────────────────────────────────────
  {
    slug: "discipline-builder",
    title: "Discipline Builder",
    category: "life",
    summary:
      "Stop relying on motivation. Build the identity and systems of a disciplined person in six weeks.",
    description:
      "Discipline isn't a personality trait — it's an architecture. Sofia walks you through building it deliberately: keystone routines, friction design, commitment devices, and the identity shifts that make consistency feel natural. Each week pairs a short video lesson with one concrete implementation task, so by week six you're not learning about discipline — you're living inside systems that produce it.",
    benefits: [
      "A morning keystone routine you actually keep",
      "Environment design that makes good choices automatic",
      "Recovery protocols for the days you slip",
      "An identity-based approach that outlasts motivation",
    ],
    structure: [
      { week: "Weeks 1–2", focus: "Foundations — keystone habits and identity" },
      { week: "Weeks 3–4", focus: "Environment — friction, triggers, and defaults" },
      { week: "Week 5", focus: "Pressure-testing — protocols for hard days" },
      { week: "Week 6", focus: "Your system — a written personal operating manual" },
    ],
    duration: 25,
    weeks: 6,
    sessionsPerWeek: 3,
    difficulty: "All Levels",
    trainerId: "sofia-lindqvist",
    price: 119,
    rating: 4.9,
    reviewCount: 378,
    equipment: ["Notebook or journal"],
    featured: true,
  },
  {
    slug: "confidence-reset",
    title: "Confidence Reset",
    category: "life",
    summary:
      "Rebuild genuine confidence through evidence, exposure, and self-respect — not affirmations.",
    description:
      "Real confidence comes from keeping promises to yourself and collecting proof that you can handle things. Confidence Reset is a five-week program of graduated challenges — social, physical, and professional — paired with Sofia's coaching on self-talk, posture, and presence. No hype, no fake-it-till-you-make-it. Just a systematic rebuild of your relationship with yourself.",
    benefits: [
      "A track record of kept self-promises — the root of confidence",
      "Graduated comfort-zone challenges that actually stick",
      "Practical presence skills: voice, posture, eye contact",
      "Self-talk repair without cringe-worthy affirmations",
    ],
    structure: [
      { week: "Week 1", focus: "Audit — where confidence leaks and why" },
      { week: "Weeks 2–3", focus: "Evidence — small wins and kept promises" },
      { week: "Week 4", focus: "Exposure — graduated challenges in the real world" },
      { week: "Week 5", focus: "Presence — carrying yourself like you belong" },
    ],
    duration: 20,
    weeks: 5,
    sessionsPerWeek: 3,
    difficulty: "All Levels",
    trainerId: "sofia-lindqvist",
    price: 109,
    rating: 4.7,
    reviewCount: 265,
    equipment: ["Notebook or journal"],
  },
  {
    slug: "habit-mastery",
    title: "Habit Mastery",
    category: "life",
    summary:
      "The complete system for building habits that last and breaking the ones that don't serve you.",
    description:
      "Habit Mastery distills behavioral science into a working system: cue design, habit stacking, tracking that doesn't feel like homework, and the art of the two-minute start. Sofia guides you to install two new habits and dismantle one old one over six weeks — and more importantly, to leave with a method you can reuse for any habit, forever.",
    benefits: [
      "Two new habits installed and running on autopilot",
      "One unwanted habit dismantled at the trigger level",
      "A reusable method for any future habit",
      "Tracking systems that take under a minute a day",
    ],
    structure: [
      { week: "Week 1", focus: "The mechanics — cue, craving, response, reward" },
      { week: "Weeks 2–3", focus: "Installation — stacking and two-minute starts" },
      { week: "Weeks 4–5", focus: "Removal — breaking a habit at the trigger" },
      { week: "Week 6", focus: "The method — your personal habit playbook" },
    ],
    duration: 20,
    weeks: 6,
    sessionsPerWeek: 3,
    difficulty: "Beginner",
    trainerId: "sofia-lindqvist",
    price: 99,
    rating: 4.8,
    reviewCount: 421,
    equipment: ["Notebook or journal"],
  },
  {
    slug: "productivity-flow",
    title: "Productivity Flow",
    category: "life",
    summary:
      "Design a workday around deep focus, honest priorities, and sustainable energy — not busyness.",
    description:
      "Productivity Flow is about doing what matters, not doing more. Sofia teaches a complete personal workflow: weekly planning that takes fifteen minutes, daily deep-work blocks, energy-based scheduling, and a shutdown ritual that lets you actually stop working. The program blends time-management craft with the focus and energy practices from our meditation and training programs.",
    benefits: [
      "Two protected deep-work blocks in every workday",
      "A 15-minute weekly planning ritual that drives the week",
      "Energy-based scheduling — hard work when you're sharpest",
      "A shutdown ritual that ends the workday cleanly",
    ],
    structure: [
      { week: "Week 1", focus: "Audit — where your time and energy actually go" },
      { week: "Week 2", focus: "Priorities — planning weeks around what matters" },
      { week: "Weeks 3–4", focus: "Deep work — building your daily focus blocks" },
      { week: "Week 5", focus: "Sustainability — energy, boundaries, and shutdown" },
    ],
    duration: 25,
    weeks: 5,
    sessionsPerWeek: 3,
    difficulty: "Intermediate",
    trainerId: "sofia-lindqvist",
    price: 119,
    rating: 4.8,
    reviewCount: 293,
    equipment: ["Notebook or calendar app"],
  },
];

export function getSession(slug: string): Session | undefined {
  return sessions.find((s) => s.slug === slug);
}

export function getSessionsByCategory(category: string): Session[] {
  return sessions.filter((s) => s.category === category);
}

export function getFeaturedSessions(): Session[] {
  return sessions.filter((s) => s.featured);
}

export function getRelatedSessions(session: Session, count = 3): Session[] {
  const sameCategory = sessions.filter(
    (s) => s.category === session.category && s.slug !== session.slug,
  );
  const others = sessions.filter(
    (s) => s.category !== session.category && s.slug !== session.slug,
  );
  return [...sameCategory, ...others].slice(0, count);
}
