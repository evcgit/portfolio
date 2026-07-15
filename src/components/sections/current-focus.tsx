"use client";

import { FadeIn, Section } from "@/components/section";
import { focusBadges, siteConfig } from "@/lib/site";

export function CurrentFocus() {
  return (
    <Section id="about" eyebrow="Current Focus" className="pt-8 sm:pt-12">
      <FadeIn>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm text-zinc-500">Building</p>
              <h3 className="mt-1 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
                BidzBase
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                A live multi-tenant SaaS for subcontractors—estimates, proposals,
                scheduling, time tracking, and payments in one workflow.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-40 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Live in Production
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {focusBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#bidzbase"
              className="text-sm text-zinc-300 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Read the case study
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href={siteConfig.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-300 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Open live demo
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
