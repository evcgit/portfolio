"use client";

import { FadeIn, Section } from "@/components/section";
import { education } from "@/lib/site";

export function Education() {
  return (
    <Section
      eyebrow="Education"
      title="Background."
      description="Concise on purpose. The work above carries more weight than coursework."
      className="py-16 sm:py-20"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {education.map((item, i) => (
          <FadeIn key={item.school} delay={i * 0.04}>
            <article className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <h3 className="text-[15px] font-medium text-zinc-100">
                {item.school}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{item.program}</p>
              <p className="mt-3 text-xs text-zinc-500">{item.detail}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
