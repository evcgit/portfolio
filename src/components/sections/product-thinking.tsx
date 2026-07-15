"use client";

import { FadeIn, Section } from "@/components/section";
import { principles } from "@/lib/site";

export function ProductThinking() {
  return (
    <Section
      eyebrow="Product Thinking"
      title="How I work."
      description="Clear principles for turning messy operational problems into software people rely on."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {principles.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.03}>
            <article className="h-full rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/16 hover:bg-white/[0.035] sm:p-6">
              <h3 className="text-[15px] font-medium tracking-tight text-zinc-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
