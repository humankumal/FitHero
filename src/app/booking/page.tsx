import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/PageHeader";
import { BookingForm } from "@/components/forms/BookingForm";
import { sessions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Reserve your spot in any Fit Hero program — pick a program, day, and time, and start your transformation.",
};

export default function BookingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Booking"
        title="Reserve your next session"
        description="Choose a program, pick a slot that fits your week, and we'll take care of the rest — reminders, preparation notes, and your coach will be expecting you."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Suspense fallback={null}>
          <BookingForm sessions={sessions} />
        </Suspense>
      </section>
    </>
  );
}
