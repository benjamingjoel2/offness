import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/request/confirmation", "/api/"] },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
