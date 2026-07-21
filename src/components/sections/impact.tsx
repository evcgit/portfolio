"use client";

import { FadeIn, Section } from "@/components/section";
import { impactStats } from "@/lib/site";

export function Impact() {
  return (
    <Section
      id="impact"
      eyebrow="Impact"
      title="Outcomes that transfer."
      description="Payment automation, intake throughput, document workflows, performance, and deploy reliability—framed for the next team, not just the last one."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {impactStats.map((stat, i) => (
          <FadeIn
            key={stat.label}
            delay={i * 0.04}
            className="bg-[#0c0c0e] p-6 sm:p-8"
          >
            <p className="text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-zinc-400">
              {stat.label}
            </p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
