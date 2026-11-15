import type { MetadataRoute } from "next";
import { config } from "@/data/config";

export const dynamic = "force-static";

// Her TR/EN sayfa çifti karşılıklı hreflang taşır; x-default Türkçe sürümdür.
const pair = (tr: string, en: string) => ({
  languages: { tr: config.site + tr, en: config.site + en, "x-default": config.site + tr },
});

export default function sitemap(): MetadataRoute.Sitemap {
  const home = pair("", "/en");
  const legal = pair("/kvkk", "/en/privacy");
  return [
    { url: config.site, changeFrequency: "monthly", priority: 1, alternates: home },
    { url: `${config.site}/en`, changeFrequency: "monthly", priority: 0.9, alternates: home },
    { url: `${config.site}/kvkk`, changeFrequency: "yearly", priority: 0.3, alternates: legal },
    { url: `${config.site}/en/privacy`, changeFrequency: "yearly", priority: 0.3, alternates: legal },
  ];
}
