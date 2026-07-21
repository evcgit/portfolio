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

const desktopScreenshots = [
  {
    src: "/screenshots/job-detail.png",
    alt: "BidzBase job detail with line items, bid status, and invoice actions",
    caption: "Job detail — estimates, bids, and status in one place",
  },
  {
    src: "/screenshots/schedule.png",
    alt: "BidzBase crew schedule board",
    caption: "Crew scheduling",
  },
  {
    src: "/screenshots/analytics.png",
    alt: "BidzBase analytics dashboard with collections and bid pipeline",
    caption: "Shop analytics",
  },
  {
    src: "/screenshots/time.png",
    alt: "BidzBase time tracking for crews",
    caption: "Time tracking",
  },
  {
    src: "/screenshots/customers.png",
    alt: "BidzBase customers list",
    caption: "Customers",
  },
] as const;

const mobileScreenshots = [
  {
    src: "/screenshots/mobile-jobs.png",
    alt: "BidzBase jobs list on a phone",
    caption: "Jobs on mobile",
  },
  {
    src: "/screenshots/mobile-job-detail.png",
    alt: "BidzBase job detail on a phone",
    caption: "Job detail on mobile",
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

function PhoneFrame({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="mx-auto w-full max-w-[280px]">
      <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-[#0c0c0e] p-2 shadow-[0_24px_80px_-40px_rgba(255,255,255,0.2)]">
        <div className="relative mx-auto mb-2 h-1.5 w-16 rounded-full bg-white/15" />
        <div className="relative aspect-[390/844] overflow-hidden rounded-[1.4rem] bg-zinc-950">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="280px"
          />
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-zinc-500">
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
      description="From initial idea to a production SaaS with real users in roughly one month. Built for desktop and phone—so shop owners can run estimates, scheduling, and collections from the job site or the office."
    >
      <FadeIn>
        <ScreenshotCard {...desktopScreenshots[0]} priority />
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
          <ScreenshotCard {...desktopScreenshots[1]} />
        </FadeIn>
        <FadeIn delay={0.06}>
          <ScreenshotCard {...desktopScreenshots[2]} />
        </FadeIn>
      </div>

      <FadeIn className="mt-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
            Mobile-friendly
          </p>
          <h3 className="mt-2 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
            Built to work on a phone, not just desktop.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Field crews and owners check jobs, status, and dollars from their
            pocket. The same workflow—responsive layouts, touch-friendly
            actions, and a focused mobile job list—without a separate app.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 sm:justify-items-center">
          {mobileScreenshots.map((shot) => (
            <PhoneFrame key={shot.src} {...shot} />
          ))}
        </div>
      </FadeIn>

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
          <ScreenshotCard {...desktopScreenshots[3]} />
        </FadeIn>
        <FadeIn delay={0.06}>
          <ScreenshotCard {...desktopScreenshots[4]} />
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
