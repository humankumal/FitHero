import Link from "next/link";
import { LogoMark } from "@/components/icons";
import { categories } from "@/lib/data";

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book a session" },
];

const platformLinks = [
  { href: "/programs", label: "All programs" },
  { href: "/dashboard", label: "Member dashboard" },
  { href: "/admin", label: "Admin" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label="Fit Hero home">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-mint-400 to-mint-600 text-ink-950">
                <LogoMark className="h-4.5 w-4.5" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Fit<span className="text-mint-400">Hero</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Train your body. Calm your mind. Upgrade your life. One guided transformation
              platform for strength, stillness, and self-discipline.
            </p>
          </div>

          <nav aria-label="Programs">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Programs
            </h3>
            <ul className="mt-4 space-y-2.5">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/programs?category=${category.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Platform">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Platform
            </h3>
            <ul className="mt-4 space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Fit Hero. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">Built for people becoming their strongest selves.</p>
        </div>
      </div>
    </footer>
  );
}
