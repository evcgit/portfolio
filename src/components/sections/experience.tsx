"use client";

import { FadeIn, Section } from "@/components/section";
import { experience } from "@/lib/site";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="What I shipped at Right Angle."
      description="Three-person engineering team. I own frontend and DevOps, with heavy influence on the backend. Promoted from project manager after building the internal tools myself."
    >
      <div className="grid gap-3">
        {experience.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.03}>
            <article className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/16 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="text-[15px] font-medium tracking-tight text-zinc-100 sm:max-w-xs">
                  {item.title}
                </h3>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                    {item.result}
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">{item.detail}</p>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
