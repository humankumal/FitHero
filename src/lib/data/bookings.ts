import type { Booking, UserStats, AdminStats } from "@/lib/types";

/** Bookings for the demo member shown on the user dashboard */
export const userBookings: Booking[] = [
  {
    id: "bk-1042",
    sessionSlug: "full-body-strength",
    memberName: "Alex Morgan",
    date: "2026-07-03",
    time: "07:00",
    status: "confirmed",
  },
  {
    id: "bk-1043",
    sessionSlug: "daily-stillness",
    memberName: "Alex Morgan",
    date: "2026-07-03",
    time: "21:30",
    status: "confirmed",
  },
  {
    id: "bk-1044",
    sessionSlug: "morning-flow",
    memberName: "Alex Morgan",
    date: "2026-07-05",
    time: "06:30",
    status: "pending",
  },
  {
    id: "bk-1045",
    sessionSlug: "discipline-builder",
    memberName: "Alex Morgan",
    date: "2026-07-06",
    time: "18:00",
    status: "confirmed",
  },
];

export const userStats: UserStats = {
  memberName: "Alex Morgan",
  memberSince: "March 2026",
  streakDays: 23,
  minutesThisWeek: 186,
  sessionsCompleted: 47,
  calmScore: 78,
  weeklyGoals: [
    { label: "Training sessions", current: 2, target: 3, unit: "sessions" },
    { label: "Meditation minutes", current: 54, target: 70, unit: "min" },
    { label: "Yoga practice", current: 3, target: 4, unit: "flows" },
    { label: "Sleep before 11pm", current: 4, target: 5, unit: "nights" },
  ],
};

/** Recent bookings across all members, for the admin dashboard */
export const adminBookings: Booking[] = [
  { id: "bk-1051", sessionSlug: "full-body-strength", memberName: "Rachel Kim", date: "2026-07-02", time: "06:00", status: "completed" },
  { id: "bk-1052", sessionSlug: "sleep-calm", memberName: "Tom Alvarez", date: "2026-07-02", time: "21:00", status: "confirmed" },
  { id: "bk-1053", sessionSlug: "morning-flow", memberName: "Priya Sharma", date: "2026-07-03", time: "06:30", status: "confirmed" },
  { id: "bk-1054", sessionSlug: "productivity-flow", memberName: "James Whitfield", date: "2026-07-03", time: "12:00", status: "pending" },
  { id: "bk-1055", sessionSlug: "fat-loss-foundation", memberName: "Aisha Okonkwo", date: "2026-07-03", time: "17:30", status: "confirmed" },
  { id: "bk-1056", sessionSlug: "anxiety-relief-breathing", memberName: "Lukas Berger", date: "2026-07-04", time: "08:00", status: "confirmed" },
  { id: "bk-1057", sessionSlug: "mobility-reset", memberName: "Dana Petrov", date: "2026-07-04", time: "19:00", status: "pending" },
  { id: "bk-1058", sessionSlug: "habit-mastery", memberName: "Chris Yamada", date: "2026-07-05", time: "10:00", status: "confirmed" },
  { id: "bk-1059", sessionSlug: "stress-relief-yoga", memberName: "Fatima El-Sayed", date: "2026-07-05", time: "18:30", status: "cancelled" },
  { id: "bk-1060", sessionSlug: "home-workout-hero", memberName: "Oliver Novak", date: "2026-07-06", time: "07:30", status: "confirmed" },
];

export const adminStats: AdminStats = {
  totalMembers: 4218,
  memberGrowthPct: 12.4,
  activeSessions: 16,
  bookingsThisMonth: 1847,
  bookingGrowthPct: 8.9,
  monthlyRevenue: 128460,
  revenueGrowthPct: 15.2,
  revenueByMonth: [
    { month: "Feb", revenue: 74200 },
    { month: "Mar", revenue: 86900 },
    { month: "Apr", revenue: 94100 },
    { month: "May", revenue: 103800 },
    { month: "Jun", revenue: 111500 },
    { month: "Jul", revenue: 128460 },
  ],
  bookingsByCategory: [
    { category: "training", count: 642 },
    { category: "yoga", count: 489 },
    { category: "meditation", count: 438 },
    { category: "life", count: 278 },
  ],
};
