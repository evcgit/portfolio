import { CommandPalette } from "@/components/command-palette";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Architecture } from "@/components/sections/architecture";
import { Contact } from "@/components/sections/contact";
import { CurrentFocus } from "@/components/sections/current-focus";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { ProductThinking } from "@/components/sections/product-thinking";
import { Technologies } from "@/components/sections/technologies";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-zinc-100 focus:px-3 focus:py-2 focus:text-sm focus:text-zinc-950"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <CurrentFocus />
        <Impact />
        <Experience />
        <ProductThinking />
        <Technologies />
        <FeaturedProduct />
        <Architecture />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
      <CommandPalette />
    </>
  );
}
