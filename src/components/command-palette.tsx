"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Briefcase,
  ExternalLink,
  FileText,
  Mail,
  Sparkles,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { navItems, siteConfig } from "@/lib/site";

type CommandAction = {
  id: string;
  label: string;
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  run: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }

      if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setOpen(true);
      }
    };

    const onOpen = () => setOpen(true);

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  const go = useCallback((href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      requestAnimationFrame(() => {
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, []);

  const openExternal = (url: string) => {
    setOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const navigation: CommandAction[] = navItems.map((item) => ({
    id: item.href,
    label: item.label,
    hint: "Navigate",
    icon: Sparkles,
    run: () => go(item.href),
  }));

  const resources: CommandAction[] = [
    {
      id: "resume",
      label: "Resume",
      hint: "PDF",
      icon: FileText,
      run: () => openExternal(siteConfig.resume),
    },
    {
      id: "github",
      label: "GitHub",
      hint: "evcgit",
      icon: GitHubIcon,
      run: () => openExternal(siteConfig.github),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      hint: "Profile",
      icon: LinkedInIcon,
      run: () => openExternal(siteConfig.linkedin),
    },
    {
      id: "bidzbase",
      label: "BidzBase",
      hint: "Side product",
      icon: Briefcase,
      run: () => go("#work"),
    },
    {
      id: "demo",
      label: "BidzBase demo",
      hint: "No account needed",
      icon: ExternalLink,
      run: () => openExternal(siteConfig.demo),
    },
    {
      id: "contact",
      label: "Contact",
      hint: siteConfig.email,
      icon: Mail,
      run: () => go("#contact"),
    },
  ];

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Command palette"
      description="Jump to a section or open a resource"
    >
      <Command className="rounded-xl border-0 bg-transparent">
        <CommandInput placeholder="Jump to a section or open a resource…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigate">
            {navigation.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={item.run}
                value={item.label}
              >
                <item.icon className="size-4 text-zinc-400" />
                <span>{item.label}</span>
                {item.hint ? (
                  <span className="ml-auto text-xs text-zinc-500">
                    {item.hint}
                  </span>
                ) : null}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Resources">
            {resources.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={item.run}
                value={`${item.label} ${item.hint ?? ""}`}
              >
                <item.icon className="size-4 text-zinc-400" />
                <span>{item.label}</span>
                {item.hint ? (
                  <span className="ml-auto text-xs text-zinc-500">
                    {item.hint}
                  </span>
                ) : null}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
