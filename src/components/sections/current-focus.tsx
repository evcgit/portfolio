"use client";

import { FadeIn, Section } from "@/components/section";
import { focusAreas } from "@/lib/site";

export function CurrentFocus() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="What I actually own."
      description="Not a feature list. The parts of the system I am accountable for—and what I am building next."
      className="pt-8 sm:pt-12"
    >
      <div className="grid gap-3 lg:grid-cols-2">
        {focusAreas.map((area, i) => (
          <FadeIn key={area.title} delay={i * 0.05}>
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <p className="text-sm text-zinc-500">{area.kicker}</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-zinc-50">
                {area.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {area.body}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
                  {area.status}
                </span>
                <a
                  href={area.href}
                  className="text-sm text-zinc-300 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {area.hrefLabel}
                </a>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
