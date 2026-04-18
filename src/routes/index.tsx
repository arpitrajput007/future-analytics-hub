import { createFileRoute } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/aurora-background";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { Features } from "@/components/features";
import { CopilotShowcase } from "@/components/copilot-showcase";
import { Pricing } from "@/components/pricing";
import { CtaFooter } from "@/components/cta-footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Profit Control — The control room for profitable D2C brands" },
      {
        name: "description",
        content:
          "Real-time profit, ROAS and SKU economics for Shopify brands — unified into one luminous dashboard, narrated by an AI co-pilot.",
      },
      { property: "og:title", content: "Profit Control — Run your D2C store from the future" },
      {
        property: "og:description",
        content:
          "Unified profit, ad spend and unit economics for modern commerce. Powered by Gemini.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <AuroraBackground />
      <SiteNav />
      <Hero />
      <LogoMarquee />
      <Features />
      <CopilotShowcase />
      <Pricing />
      <CtaFooter />
    </main>
  );
}
