import type { Metadata } from "next";
import HomePage from "@/components/home-page";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { tr: "/", en: "/en" } },
};

export default function TurkishHome() {
  return <HomePage />;
}
