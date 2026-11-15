import type { Metadata } from "next";
import { config } from "@/data/config";
import HomePage from "@/components/home-page";

const title = "Advertising Agency in Istanbul: Digital Ads & Web | Bonito";
const description =
  "Istanbul-based advertising agency: websites, social media, Meta and Google Ads and SEO from one team. See our projects and get a quote.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/en", languages: { tr: "/", en: "/en", "x-default": "/" } },
  openGraph: {
    title,
    description,
    url: `${config.site}/en`,
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "Bonito Advertising Agency" }],
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description, images: [config.ogImg] },
};

export default function EnglishHome() {
  return <HomePage />;
}
