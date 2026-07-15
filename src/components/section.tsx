"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  narrow,
}: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <div
        className={cn(
          "mx-auto px-5 sm:px-8",
          narrow ? "max-w-3xl" : "max-w-6xl"
        )}
      >
        {(eyebrow || title || description) && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 max-w-2xl"
          >
            {eyebrow ? (
              <p className="mb-3 text-[13px] font-medium tracking-wide text-zinc-500">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-balance text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
                {description}
              </p>
            ) : null}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
