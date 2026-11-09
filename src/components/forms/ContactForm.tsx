"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckIcon } from "@/components/icons";
import { Input, Label, Select, Textarea } from "@/components/forms/fields";

const topics = [
  "Free consultation",
  "Membership question",
  "Program recommendation",
  "Corporate wellness",
  "Something else",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Card className="p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint-400/15 text-mint-400">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-white">Thanks for reaching out</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
          Heads up: this contact form is a demo preview, so your message hasn&apos;t been sent
          anywhere yet. To reach the team directly, email{" "}
          <a
            href="mailto:hello@fithero.fit"
            className="text-mint-400 underline-offset-2 hover:underline"
          >
            hello@fithero.fit
          </a>
          .
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="contact-name">Your name</Label>
            <Input id="contact-name" name="name" required placeholder="Alex Morgan" />
          </div>
          <div>
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="contact-topic">What can we help with?</Label>
          <Select id="contact-topic" name="topic" defaultValue={topics[0]}>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your goals, your schedule, or anything you're unsure about…"
          />
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send Message
        </Button>
        <p className="text-xs text-slate-500">
          Demo preview — form submissions aren&apos;t delivered yet. Email us for a real reply.
        </p>
      </form>
    </Card>
  );
}
