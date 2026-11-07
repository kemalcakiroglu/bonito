import type { MetadataRoute } from "next";
import { config } from "@/data/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.site,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { tr: config.site, en: `${config.site}/en` } },
    },
    {
      url: `${config.site}/en`,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { tr: config.site, en: `${config.site}/en` } },
    },
    { url: `${config.site}/kvkk`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${config.site}/en/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
