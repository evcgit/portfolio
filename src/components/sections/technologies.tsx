"use client";

import { FadeIn, Section } from "@/components/section";
import { technologies } from "@/lib/site";

export function Technologies() {
  return (
    <Section
      eyebrow="Technologies"
      title="Tools used to ship."
      description="Stack behind the production ops platform at Right Angle Engineering—and BidzBase. Not a skill meter."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(technologies).map(([category, items], i) => (
          <FadeIn key={category} delay={i * 0.03}>
            <div>
              <h3 className="text-sm font-medium text-zinc-300">{category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
