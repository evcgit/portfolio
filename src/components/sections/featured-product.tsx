"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FadeIn, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  bidzbaseCapabilities,
  bidzbaseSections,
  siteConfig,
} from "@/lib/site";

const shots = [
  {
    src: "/screenshots/job-detail.png",
    alt: "BidzBase job detail with line items, bid status, and invoice actions",
    caption: "Job detail — estimates, bids, and status in one place",
  },
  {
    src: "/screenshots/analytics.png",
    alt: "BidzBase analytics dashboard with collections and bid pipeline",
    caption: "Shop analytics",
  },
  {
    src: "/screenshots/mobile-jobs.png",
    alt: "BidzBase jobs list on a phone",
    caption: "Jobs on mobile",
  },
] as const;

function ScreenshotCard({
  src,
  alt,
  caption,
  priority,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0e]">
      <div className="relative aspect-[16/10] bg-zinc-950">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>
      <figcaption className="border-t border-white/8 px-4 py-3 text-xs text-zinc-500">
        {caption}
      </figcaption>
    </figure>
  );
}

export function FeaturedProduct() {
  return (
    <Section
      id="work"
      eyebrow="Side product"
      title="BidzBase"
      description="A production SaaS I designed, built, and shipped on the side—idea to real users in about a month. Proof I can own a product end-to-end, not the whole story of the work."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {shots.map((shot, i) => (
          <FadeIn key={shot.src} delay={i * 0.04}>
            <ScreenshotCard {...shot} priority={i === 0} />
          </FadeIn>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {bidzbaseSections.map((section, i) => (
          <FadeIn key={section.id} delay={i * 0.04}>
            <article>
              <h3 className="text-lg font-medium tracking-tight text-zinc-100">
                {section.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {section.body}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12">
        <p className="mb-4 text-sm font-medium text-zinc-300">
          What the platform covers
        </p>
        <div className="flex flex-wrap gap-2">
          {bidzbaseCapabilities.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mt-10 flex flex-wrap gap-3">
        <Button
          asChild
          size="lg"
          className="h-11 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-950 hover:bg-white"
        >
          <a href={siteConfig.demo} target="_blank" rel="noopener noreferrer">
            Open live demo
            <ExternalLink className="size-4" />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-11 rounded-lg border-white/12 bg-transparent px-5 text-sm text-zinc-200 hover:bg-white/5"
        >
          <a
            href={siteConfig.bidzbase}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit bidzbase.com
          </a>
        </Button>
      </FadeIn>
    </Section>
  );
}
