import type { PricingPlan, Faq } from "@/lib/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 19,
    yearlyPrice: 190,
    description: "For building your first consistent practice.",
    features: [
      "All meditation sessions",
      "Morning Flow yoga program",
      "Habit tracking dashboard",
      "Weekly progress email",
      "Community access",
    ],
    cta: "Start with Starter",
  },
  {
    id: "hero",
    name: "Hero",
    monthlyPrice: 39,
    yearlyPrice: 390,
    description: "The full transformation platform, all four pillars.",
    features: [
      "Everything in Starter",
      "All training, yoga & life programs",
      "Personalized weekly plan",
      "Live session booking",
      "Progress analytics & streaks",
      "Priority trainer Q&A",
    ],
    highlighted: true,
    cta: "Become a Hero",
  },
  {
    id: "elite",
    name: "Elite",
    monthlyPrice: 89,
    yearlyPrice: 890,
    description: "1-on-1 coaching layered on top of everything.",
    features: [
      "Everything in Hero",
      "Monthly 1-on-1 coaching call",
      "Custom program adjustments",
      "Form-check video reviews",
      "Direct trainer messaging",
      "Quarterly transformation review",
    ],
    cta: "Go Elite",
  },
];

export const faqs: Faq[] = [
  {
    question: "I'm a complete beginner. Is Fit Hero right for me?",
    answer:
      "Absolutely. Every program is labeled by difficulty, and most include beginner variations for every movement. Programs like Fat Loss Foundation, Morning Flow, and 10-Minute Daily Stillness were designed specifically as starting points. You'll never be thrown into something you're not ready for.",
  },
  {
    question: "How is Fit Hero different from a regular fitness app?",
    answer:
      "Most apps train your body and stop there. Fit Hero treats transformation as a whole: physical training, yoga, meditation, and life-enhancement skills like discipline and habit-building. The four pillars reinforce each other — better sleep improves training, better focus improves consistency.",
  },
  {
    question: "How much time do I need each week?",
    answer:
      "It depends on the program, but most members practice 2–4 hours per week total. Many sessions are 10–25 minutes. We'd rather you do 20 focused minutes daily than promise 90-minute sessions you'll skip.",
  },
  {
    question: "Can I switch or combine programs?",
    answer:
      "Yes. Hero and Elite members can run multiple programs at once — many combine a training program with a meditation practice. You can switch programs anytime, and your progress history stays with you.",
  },
  {
    question: "What happens after I book a session?",
    answer:
      "You'll get a confirmation with everything you need: the session link or location, what to prepare, and a calendar invite. You can reschedule up to 12 hours before any live session from your dashboard.",
  },
  {
    question: "Can I cancel my membership anytime?",
    answer:
      "Yes — memberships are month-to-month with no lock-in, and you can cancel in two clicks from your dashboard. Yearly plans can be refunded pro-rata within the first 30 days.",
  },
];
