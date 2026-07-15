"use client";

import { ExternalLink } from "lucide-react";
import { FadeIn, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function LiveDemo() {
  return (
    <Section className="py-16 sm:py-20">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e] px-6 py-10 sm:px-10 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_50%)]"
          />
          <div className="relative max-w-2xl">
            <p className="text-[13px] font-medium tracking-wide text-zinc-500">
              Live Demo
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">
              Experience BidzBase
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Explore the production demo without creating an account. Click
              through sample jobs, proposals, scheduling, and analytics in a
              live product environment—not a mockup.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-950 hover:bg-white"
              >
                <a
                  href={siteConfig.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore the Live Demo
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>
            <p className="mt-5 text-xs text-zinc-600">
              Opens {siteConfig.demo.replace("https://", "")}
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
