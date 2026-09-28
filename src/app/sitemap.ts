import type { MetadataRoute } from "next";
import { journeys } from "@/lib/journeys";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const statics: MetadataRoute.Sitemap = ["/", "/journeys", "/membership", "/request"].map(
    (route) => ({ url: `${base}${route}`, changeFrequency: "monthly", priority: route === "/" ? 1 : 0.7 }),
  );
  const journeyRoutes: MetadataRoute.Sitemap = journeys.map((journey) => ({
    url: `${base}/journeys/${journey.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...statics, ...journeyRoutes];
}
