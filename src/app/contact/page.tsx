import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about programs, memberships, or where to start? Book a free consultation or send the Fit Hero team a message.",
};

const contactDetails = [
  {
    icon: MailIcon,
    label: "Email",
    value: "hello@fithero.fit",
    hint: "The fastest way to reach the team",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+1 (555) 014-2026",
    hint: "Mon–Fri, 8am–6pm",
  },
  {
    icon: PinIcon,
    label: "Studio",
    value: "42 Northshore Ave, Portland, OR",
    hint: "Live classes & consultations",
  },
  {
    icon: ClockIcon,
    label: "Live sessions",
    value: "Daily, 6am–9:30pm",
    hint: "Across all time zones online",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to a real human about your goals"
        description="Whether you want a free consultation, help choosing a program, or just have a question — we're easy to reach and quick to reply."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white">Reach us directly</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Prefer not to fill a form? Every channel below lands with our member team — not a
              bot, not a ticket queue.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactDetails.map((detail) => (
                <Card key={detail.label} className="p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mint-400/10 text-mint-400">
                    <detail.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">{detail.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{detail.hint}</p>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-semibold text-white">Send a message</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Tell us where you are and where you want to be — we&apos;ll suggest a starting point.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
