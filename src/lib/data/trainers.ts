import type { Trainer } from "@/lib/types";

export const trainers: Trainer[] = [
  {
    id: "maya-chen",
    name: "Maya Chen",
    role: "Head Strength Coach",
    specialty: "Strength & body recomposition",
    bio: "Former competitive powerlifter with 12 years of coaching experience. Maya believes strength is a skill anyone can learn — her programs are built on progressive overload, clean technique, and zero ego.",
    initials: "MC",
    avatarGradient: "from-ember-400 to-ember-500",
    yearsExperience: 12,
  },
  {
    id: "daniel-okafor",
    name: "Daniel Okafor",
    role: "Conditioning Coach",
    specialty: "Fat loss & metabolic conditioning",
    bio: "Daniel designs conditioning programs that respect your joints and your schedule. His sessions are efficient, scalable, and built to keep you consistent long after the initial motivation fades.",
    initials: "DO",
    avatarGradient: "from-ember-500 to-haze-500",
    yearsExperience: 9,
  },
  {
    id: "elena-rossi",
    name: "Elena Rossi",
    role: "Senior Yoga Instructor",
    specialty: "Vinyasa flow & mobility",
    bio: "Trained in Mysore and certified E-RYT 500, Elena teaches yoga as a practice of attention. Expect precise cueing, honest pacing, and flows that leave you both energized and settled.",
    initials: "ER",
    avatarGradient: "from-sky-400 to-mint-500",
    yearsExperience: 14,
  },
  {
    id: "arjun-mehta",
    name: "Arjun Mehta",
    role: "Meditation Guide",
    specialty: "Breathwork & mindfulness",
    bio: "Arjun spent seven years studying meditation in India and Nepal before becoming a secular mindfulness teacher. His style is warm, practical, and free of jargon — meditation for real life.",
    initials: "AM",
    avatarGradient: "from-haze-400 to-sky-400",
    yearsExperience: 11,
  },
  {
    id: "sofia-lindqvist",
    name: "Sofia Lindqvist",
    role: "Performance Psychologist",
    specialty: "Habits, discipline & mindset",
    bio: "With a background in behavioral psychology, Sofia coaches the systems behind change: identity, environment, and routine. Her programs turn vague ambition into concrete daily practice.",
    initials: "SL",
    avatarGradient: "from-mint-400 to-sky-400",
    yearsExperience: 10,
  },
  {
    id: "marcus-reid",
    name: "Marcus Reid",
    role: "Mobility Specialist",
    specialty: "Mobility, posture & pain-free movement",
    bio: "A physiotherapist turned movement coach, Marcus helps desk-bound bodies move like athletes again. Every session blends assessment, corrective work, and strength in new ranges.",
    initials: "MR",
    avatarGradient: "from-mint-500 to-ember-400",
    yearsExperience: 13,
  },
];

export function getTrainer(id: string): Trainer | undefined {
  return trainers.find((t) => t.id === id);
}
