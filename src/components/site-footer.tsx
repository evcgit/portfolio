import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p className="text-zinc-600">
          Built for clarity—the work, the systems, the outcomes.
        </p>
      </div>
    </footer>
  );
}
