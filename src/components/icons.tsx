import type { CategorySlug } from "@/lib/types";

interface IconProps {
  className?: string;
}

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true as const,
};

export function DumbbellIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />
    </svg>
  );
}

export function LotusIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 4c-1.8 2-2.6 4.2-2.6 6.2 0 2.6 1.2 4.3 2.6 5.3 1.4-1 2.6-2.7 2.6-5.3C14.6 8.2 13.8 6 12 4Z" />
      <path d="M5 8.5c.2 3.7 1.6 6.4 3.5 8 1 .9 2.2 1.5 3.5 1.8 1.3-.3 2.5-.9 3.5-1.8 1.9-1.6 3.3-4.3 3.5-8-2.1.5-3.8 1.4-5 2.6M7 11.1C5.8 9.9 6.9 9 5 8.5" />
      <path d="M2.5 13.5c1.7 3.3 4.7 5.5 9.5 5.5s7.8-2.2 9.5-5.5" />
    </svg>
  );
}

export function MindIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9.5 3.8A6.5 6.5 0 0 1 19 9.5c0 1.9-.8 3.4-1.8 4.7-.8 1-1.2 2.1-1.2 3.3V20h-5v-1.5c0-.8-.6-1.5-1.4-1.7A4.9 4.9 0 0 1 5 12c0-1 .3-2 .8-2.8" />
      <path d="M12 8.5a2.5 2.5 0 0 0 0 5M12 8.5a2.5 2.5 0 0 1 2.4 1.8" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function FlameIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5c.5 3-1 4.5-2.5 6C8 11 7 12.5 7 14.5a5 5 0 0 0 10 0c0-1.6-.6-2.9-1.5-4-.4 1-.9 1.6-1.8 2.1.4-3.1-.3-6.6-1.7-9.1Z" />
    </svg>
  );
}

export function StarIcon({ className, filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.8}
    >
      <path d="M12 3.2l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.8L12 3.2Z" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8.5" r="3.5" />
      <path d="M3 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5M15.5 5.4a3.5 3.5 0 0 1 0 6.2M17.5 14.9c2 .7 3.2 2.5 3.5 5.1" />
    </svg>
  );
}

export function TrendUpIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 17.5l5.5-5.5 3.5 3.5 7.5-7.5M15 8h5v5" />
    </svg>
  );
}

export function HeartPulseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 20.5C7 16.5 3.5 13.2 3.5 9.3 3.5 6.6 5.6 4.5 8.2 4.5c1.5 0 2.9.7 3.8 1.9a4.7 4.7 0 0 1 3.8-1.9c2.6 0 4.7 2.1 4.7 4.8 0 3.9-3.5 7.2-8.5 11.2Z" />
      <path d="M6.5 12h3l1.5-3 2 5 1.5-2.5h3" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M4.5 7.5l7.5 6 7.5-6" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.8 3.5H5A1.5 1.5 0 0 0 3.5 5.2 15.8 15.8 0 0 0 18.8 20.5a1.5 1.5 0 0 0 1.7-1.5v-1.8a1.5 1.5 0 0 0-1.1-1.5l-2.7-.7a1.5 1.5 0 0 0-1.5.5l-.7.8a11.6 11.6 0 0 1-4.8-4.8l.8-.7a1.5 1.5 0 0 0 .5-1.5l-.7-2.7a1.5 1.5 0 0 0-1.5-1.1Z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-6.5-5.7-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.3 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3l7.5 3v5.5c0 4.6-3.2 7.9-7.5 9.5-4.3-1.6-7.5-4.9-7.5-9.5V6L12 3Z" />
      <path d="M8.8 12l2.2 2.2 4.2-4.4" />
    </svg>
  );
}

export function LogoMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M13.6 2.5 5 13.5h5l-1.6 8L17 10.5h-5l1.6-8Z" />
    </svg>
  );
}

export const categoryIcons: Record<CategorySlug, (props: IconProps) => React.ReactElement> = {
  training: DumbbellIcon,
  yoga: LotusIcon,
  meditation: MindIcon,
  life: SparkIcon,
};
