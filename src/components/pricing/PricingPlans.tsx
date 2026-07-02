"use client";

import { useState } from "react";
import type { PricingPlan } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";
import { cn, formatPrice } from "@/lib/utils";

interface PricingPlansProps {
  plans: PricingPlan[];
}

export function PricingPlans({ plans }: PricingPlansProps) {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-4">
        <span className={cn("text-sm", !yearly ? "text-white" : "text-slate-500")}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={yearly}
          aria-label="Toggle yearly billing"
          onClick={() => setYearly((y) => !y)}
          className={cn(
            "relative h-7 w-13 rounded-full transition-colors duration-200",
            yearly ? "bg-mint-500" : "bg-white/10",
          )}
        >
          <span
            className={cn(
              "absolute top-1 h-5 w-5 rounded-full bg-white transition-all duration-200",
              yearly ? "left-7" : "left-1",
            )}
          />
        </button>
        <span className={cn("text-sm", yearly ? "text-white" : "text-slate-500")}>
          Yearly
          <span className="ml-2 rounded-full bg-mint-400/10 px-2 py-0.5 text-xs font-medium text-mint-400">
            2 months free
          </span>
        </span>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "relative flex flex-col rounded-2xl border p-7 shadow-card",
              plan.highlighted
                ? "border-mint-400/40 bg-gradient-to-b from-mint-400/10 to-transparent lg:-my-3 lg:py-10"
                : "border-white/8 bg-white/[0.03]",
            )}
          >
            {plan.highlighted && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-mint-400 to-mint-500 px-4 py-1 text-xs font-semibold text-ink-950">
                Most popular
              </span>
            )}

            <h3 className="font-display text-lg font-semibold text-white">{plan.name}</h3>
            <p className="mt-1 text-sm text-slate-400">{plan.description}</p>

            <p className="mt-6">
              <span className="font-display text-4xl font-bold text-white">
                {formatPrice(yearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice)}
              </span>
              <span className="text-sm text-slate-500"> / month</span>
            </p>
            <p className="mt-1 h-5 text-xs text-slate-500">
              {yearly ? `Billed ${formatPrice(plan.yearlyPrice)} yearly` : "Billed monthly · cancel anytime"}
            </p>

            <ul className="mt-7 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckIcon
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0",
                      plan.highlighted ? "text-mint-400" : "text-slate-500",
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                href={`/booking?plan=${plan.id}`}
                variant={plan.highlighted ? "primary" : "secondary"}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
