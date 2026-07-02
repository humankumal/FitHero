import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { StatTile } from "@/components/dashboard/StatTile";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { RevenueChart } from "@/components/admin/RevenueChart";
import { CategoryBreakdown } from "@/components/admin/CategoryBreakdown";
import { CalendarIcon, DumbbellIcon, TrendUpIcon, UsersIcon } from "@/components/icons";
import { adminBookings, adminStats, getCategory, getSession, sessions } from "@/lib/data";
import { formatDate, formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Bookings, revenue, members, and program performance at a glance.",
};

export default function AdminPage() {
  const topPrograms = [...sessions]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 5);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint-400">
              Admin
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Studio overview
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              July 2026 · all times local to the studio
            </p>
          </div>
          <Badge className="bg-ember-400/10 text-ember-300">Demo data</Badge>
        </div>
      </Reveal>

      {/* KPIs */}
      <Reveal className="mt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatTile
            label="Monthly revenue"
            value={formatPrice(adminStats.monthlyRevenue)}
            deltaPct={adminStats.revenueGrowthPct}
            hint="vs June"
            icon={TrendUpIcon}
          />
          <StatTile
            label="Bookings this month"
            value={adminStats.bookingsThisMonth.toLocaleString()}
            deltaPct={adminStats.bookingGrowthPct}
            hint="vs June"
            icon={CalendarIcon}
            accent="bg-sky-400/10 text-sky-400"
          />
          <StatTile
            label="Total members"
            value={adminStats.totalMembers.toLocaleString()}
            deltaPct={adminStats.memberGrowthPct}
            hint="vs June"
            icon={UsersIcon}
            accent="bg-haze-400/10 text-haze-400"
          />
          <StatTile
            label="Active programs"
            value={`${adminStats.activeSessions}`}
            hint="across 4 pillars"
            icon={DumbbellIcon}
            accent="bg-ember-400/10 text-ember-400"
          />
        </div>
      </Reveal>

      {/* Charts */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <RevenueChart data={adminStats.revenueByMonth} />
        </Reveal>
        <Reveal delay={0.08} className="flex">
          <div className="w-full">
            <CategoryBreakdown data={adminStats.bookingsByCategory} />
          </div>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Recent bookings */}
        <Reveal>
          <Card className="overflow-hidden">
            <div className="flex items-center justify-between px-6 pt-6">
              <h2 className="font-display text-lg font-semibold text-white">Recent bookings</h2>
              <span className="text-xs text-slate-500">{adminBookings.length} latest</span>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/8 text-xs uppercase tracking-wider text-slate-500">
                    <th scope="col" className="px-6 py-3 font-medium">Member</th>
                    <th scope="col" className="px-4 py-3 font-medium">Program</th>
                    <th scope="col" className="px-4 py-3 font-medium">When</th>
                    <th scope="col" className="px-6 py-3 text-right font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {adminBookings.map((booking) => {
                    const session = getSession(booking.sessionSlug);
                    return (
                      <tr key={booking.id} className="transition-colors hover:bg-white/[0.03]">
                        <td className="px-6 py-3.5 font-medium text-white">
                          {booking.memberName}
                        </td>
                        <td className="px-4 py-3.5 text-slate-400">{session?.title}</td>
                        <td className="px-4 py-3.5 whitespace-nowrap text-slate-400">
                          {formatDate(booking.date)} · {booking.time}
                        </td>
                        <td className="px-6 py-3.5 text-right">
                          <StatusBadge status={booking.status} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </Reveal>

        {/* Top programs */}
        <Reveal delay={0.08}>
          <Card className="p-6">
            <h2 className="font-display text-lg font-semibold text-white">Top programs</h2>
            <p className="mt-0.5 text-xs text-slate-500">by member reviews</p>
            <ul className="mt-5 divide-y divide-white/5">
              {topPrograms.map((session, i) => {
                const category = getCategory(session.category);
                return (
                  <li key={session.slug} className="flex items-center gap-4 py-3.5">
                    <span className="w-5 font-display text-sm font-bold text-slate-600">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/programs/${session.slug}`}
                        className="block truncate font-medium text-white transition-colors hover:text-mint-300"
                      >
                        {session.title}
                      </Link>
                      <p className="text-xs text-slate-500">
                        <span className={category?.accentText}>{category?.shortName}</span> ·{" "}
                        {session.reviewCount} reviews · ★ {session.rating.toFixed(1)}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {formatPrice(session.price)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
