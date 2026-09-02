"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FadeIn, Section } from "@/components/section";
import {
  architectureIntegrations,
  architectureNodes,
} from "@/lib/site";
import { cn } from "@/lib/utils";

type Node = (typeof architectureNodes)[number] | (typeof architectureIntegrations)[number];

export function Architecture() {
  const [active, setActive] = useState<Node>(architectureNodes[0]);
  const reduceMotion = useReducedMotion();

  return (
    <Section
      eyebrow="BidzBase architecture"
      title="A simple system with clear seams."
      description="How BidzBase is wired in production. Hover each layer to see why it was chosen."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <FadeIn>
          <div className="rounded-2xl border border-white/10 bg-[#0c0c0e] p-6 sm:p-8">
            <ol className="flex flex-col items-stretch gap-2">
              {architectureNodes.map((node, index) => (
                <li key={node.id} className="flex flex-col items-center">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(node)}
                    onFocus={() => setActive(node)}
                    onClick={() => setActive(node)}
                    className={cn(
                      "w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors",
                      active.id === node.id
                        ? "border-white/25 bg-white/[0.07] text-zinc-50"
                        : "border-white/10 bg-white/[0.02] text-zinc-300 hover:border-white/18 hover:bg-white/[0.04]"
                    )}
                  >
                    {node.label}
                  </button>
                  {index < architectureNodes.length - 1 ? (
                    <div
                      aria-hidden
                      className="my-1 h-5 w-px bg-gradient-to-b from-white/25 to-white/5"
                    />
                  ) : null}
                </li>
              ))}
            </ol>

            <div className="mt-8 border-t border-white/8 pt-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
                Connected integrations
              </p>
              <div className="flex flex-wrap gap-2">
                {architectureIntegrations.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActive(item)}
                    onFocus={() => setActive(item)}
                    onClick={() => setActive(item)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs transition-colors",
                      active.id === item.id
                        ? "border-white/25 bg-white/[0.07] text-zinc-100"
                        : "border-white/10 text-zinc-400 hover:border-white/18 hover:text-zinc-200"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="lg:pt-2">
          <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              Why this layer
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="mt-3 text-lg font-medium tracking-tight text-zinc-50">
                  {active.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
