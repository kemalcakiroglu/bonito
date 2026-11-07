import type { Metadata } from "next";
import { config } from "@/data/config";
import HomePage from "@/components/home-page";

const title = "Bonito | Advertising Agency";
const description =
  "Bonito is an advertising agency offering website development, social media management, content production, Meta and Google Ads, SEO and influencer marketing under one roof.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/en", languages: { tr: "/", en: "/en" } },
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
