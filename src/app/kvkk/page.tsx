import type { Metadata } from "next";
import PrivacyNotice from "@/components/privacy-notice";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Bonito",
  description: "Bonito web sitesinde işlenen kişisel veriler hakkında aydınlatma metni.",
  alternates: { canonical: "/kvkk", languages: { tr: "/kvkk", en: "/en/privacy" } },
};

export default function KvkkPage() {
  return <PrivacyNotice locale="tr" />;
}
