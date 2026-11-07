import type { Metadata } from "next";
import PrivacyNotice from "@/components/privacy-notice";

export const metadata: Metadata = {
  title: "Privacy Notice | Bonito",
  description: "How Bonito processes personal data collected through its website.",
  alternates: { canonical: "/en/privacy", languages: { tr: "/kvkk", en: "/en/privacy" } },
};

export default function PrivacyPage() {
  return <PrivacyNotice locale="en" />;
}
