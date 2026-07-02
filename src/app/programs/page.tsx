import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/PageHeader";
import { ProgramsExplorer } from "@/components/sessions/ProgramsExplorer";
import { CtaBand } from "@/components/CtaBand";
import { sessions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Browse 16 guided programs across training, yoga, meditation, and life-enhancement skills. Filter by category, difficulty, and more.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Find the program that meets you where you are"
        description="Sixteen guided programs across four pillars — strength, flexibility, stillness, and self-mastery. Filter by what you need most right now."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Suspense fallback={null}>
          <ProgramsExplorer sessions={sessions} />
        </Suspense>
      </section>

      <CtaBand
        title="Not sure where to start?"
        description="Book a free consultation and we'll match you with the right programs for your goals, schedule, and starting point."
        secondaryHref="/contact"
        secondaryLabel="Get a Free Consultation"
      />
    </>
  );
}
