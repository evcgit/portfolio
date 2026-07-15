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

const screenshots = [
  {
    src: "/screenshots/jobs.png",
    alt: "BidzBase jobs pipeline for Ironpeak Trade Co.",
    caption: "Job pipeline",
  },
  {
    src: "/screenshots/job-detail.png",
    alt: "BidzBase job detail with bids and payments",
    caption: "Job detail",
  },
  {
    src: "/screenshots/schedule.png",
    alt: "BidzBase crew schedule board",
    caption: "Crew scheduling",
  },
  {
    src: "/screenshots/analytics.png",
    alt: "BidzBase analytics dashboard",
    caption: "Analytics",
  },
  {
    src: "/screenshots/customers.png",
    alt: "BidzBase customers list",
    caption: "Customers",
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
          sizes="(max-width: 768px) 100vw, 960px"
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
      id="bidzbase"
      eyebrow="Featured Product"
      title="BidzBase"
      description="From initial idea to a production SaaS with real users in roughly one month. BidzBase is the centerpiece of this portfolio because it shows the full loop: problem, product, architecture, and ongoing shipping."
    >
      <FadeIn>
        <ScreenshotCard
          {...screenshots[0]}
          priority
        />
      </FadeIn>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {bidzbaseSections.slice(0, 4).map((section, i) => (
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

      <div className="mt-16 grid gap-4 md:grid-cols-2">
        <FadeIn>
          <ScreenshotCard {...screenshots[1]} />
        </FadeIn>
        <FadeIn delay={0.06}>
          <ScreenshotCard {...screenshots[2]} />
        </FadeIn>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {bidzbaseSections.slice(4).map((section, i) => (
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

      <FadeIn className="mt-16">
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

      <div className="mt-16 grid gap-4 md:grid-cols-2">
        <FadeIn>
          <ScreenshotCard {...screenshots[3]} />
        </FadeIn>
        <FadeIn delay={0.06}>
          <ScreenshotCard {...screenshots[4]} />
        </FadeIn>
      </div>

      <FadeIn className="mt-12 flex flex-wrap gap-3">
        <Button
          asChild
          size="lg"
          className="h-11 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-950 hover:bg-white"
        >
          <a href={siteConfig.demo} target="_blank" rel="noopener noreferrer">
            Experience BidzBase
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
