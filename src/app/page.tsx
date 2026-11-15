import type { Metadata } from "next";
import HomePage from "@/components/home-page";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { tr: "/", en: "/en", "x-default": "/" } },
};

export default function TurkishHome() {
  return <HomePage />;
}
