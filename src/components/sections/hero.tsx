"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,140,160,0.12),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 50% at 50% 15%, black, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-sm font-medium tracking-tight text-zinc-400"
        >
          {siteConfig.employer} · {siteConfig.location}
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-balance text-5xl font-medium tracking-tight text-zinc-50 sm:text-6xl md:text-7xl"
        >
          {siteConfig.name}.
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          Software engineer who owns the frontend and DevOps on a 3-person team,
          with heavy influence on the backend. I build billing systems,
          financial dashboards, and the tools operators use every day.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="h-11 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-950 hover:bg-white"
          >
            <a href="#experience">
              See the work
              <ArrowDownRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 rounded-lg border-white/12 bg-transparent px-5 text-sm text-zinc-200 hover:bg-white/5 hover:text-white"
          >
            <a href={siteConfig.resume} download>
              Download Resume
              <FileDown className="size-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
