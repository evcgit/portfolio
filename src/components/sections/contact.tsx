"use client";

import { FileText, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { FadeIn, Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

const links = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    detail: siteConfig.email,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    detail: "evcgit",
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    detail: "Profile",
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "Resume",
    href: siteConfig.resume,
    detail: "PDF download",
    icon: FileText,
  },
] as const;

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk about the work."
      description="Open to conversations about product engineering roles where ownership, shipping, and business impact matter."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link, i) => (
          <FadeIn key={link.label} delay={i * 0.04}>
            <a
              href={link.href}
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/18 hover:bg-white/[0.04]"
            >
              <span className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors group-hover:text-zinc-100">
                <link.icon className="size-4" />
              </span>
              <span>
                <span className="block text-sm font-medium text-zinc-100">
                  {link.label}
                </span>
                <span className="mt-0.5 block text-xs text-zinc-500">
                  {link.detail}
                </span>
              </span>
            </a>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
