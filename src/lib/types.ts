export type CategorySlug = "training" | "yoga" | "meditation" | "life";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  /** Tailwind classes for the category accent chip/tile */
  accentText: string;
  accentBg: string;
  gradient: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  initials: string;
  /** Tailwind gradient classes for the avatar tile */
  avatarGradient: string;
  yearsExperience: number;
}

export interface Session {
  slug: string;
  title: string;
  category: CategorySlug;
  summary: string;
  description: string;
  benefits: string[];
  structure: { week: string; focus: string }[];
  duration: number; // minutes per session
  weeks: number;
  sessionsPerWeek: number;
  difficulty: Difficulty;
  trainerId: string;
  price: number; // per program, USD
  rating: number;
  reviewCount: number;
  equipment: string[];
  featured?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Testimonial {
  id: string;
  name: string;
  result: string;
  quote: string;
  rating: number;
  category: CategorySlug;
}

export type BookingStatus = "confirmed" | "pending" | "completed" | "cancelled";

export interface Booking {
  id: string;
  sessionSlug: string;
  memberName: string;
  date: string; // ISO date
  time: string;
  status: BookingStatus;
}

export interface WeeklyGoal {
  label: string;
  current: number;
  target: number;
  unit: string;
}

export interface UserStats {
  memberName: string;
  memberSince: string;
  streakDays: number;
  minutesThisWeek: number;
  sessionsCompleted: number;
  calmScore: number; // 0-100
  weeklyGoals: WeeklyGoal[];
}

export interface AdminStats {
  totalMembers: number;
  memberGrowthPct: number;
  activeSessions: number;
  bookingsThisMonth: number;
  bookingGrowthPct: number;
  monthlyRevenue: number;
  revenueGrowthPct: number;
  revenueByMonth: { month: string; revenue: number }[];
  bookingsByCategory: { category: CategorySlug; count: number }[];
}

export interface Faq {
  question: string;
  answer: string;
}
