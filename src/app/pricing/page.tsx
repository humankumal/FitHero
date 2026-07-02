import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { FaqList } from "@/components/Faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ShieldIcon } from "@/components/icons";
import { faqs, pricingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple membership plans for the full Fit Hero platform — training, yoga, meditation, and life-enhancement programs. Cancel anytime.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="One membership. Every pillar of your transformation."
        description="Start free-spirited, go all-in, or add 1-on-1 coaching. Every plan is month-to-month with no lock-in."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <PricingPlans plans={pricingPlans} />

        <Reveal className="mt-12">
          <p className="flex items-center justify-center gap-2 text-center text-sm text-slate-500">
            <ShieldIcon className="h-4 w-4 text-mint-400" />
            14-day money-back guarantee on all plans. No questions, no hoops.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-white/5 bg-ink-900/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            description="Everything members usually ask before starting. Still unsure? We're one message away."
          />
          <Reveal className="mt-12">
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>

      <div className="pt-24">
        <CtaBand
          title="Still deciding?"
          description="Book a free consultation — we'll help you pick the right plan and programs for your goals. No pressure, no card required."
          secondaryHref="/contact"
          secondaryLabel="Get a Free Consultation"
        />
      </div>
    </>
  );
}
