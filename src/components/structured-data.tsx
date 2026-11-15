import { config } from "@/data/config";

// Organization + WebSite yapılandırılmış verisi (JSON-LD). Her sayfada aynı
// varlığı tanımlar; config.business'ta boş bırakılan alanlar eklenmez.
const compact = <T extends Record<string, unknown>>(obj: T) =>
  Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== "" && v != null)) as Partial<T>;

export default function StructuredData() {
  const b = config.business;
  const org = `${config.site}/#organization`;
  const sameAs = Object.values(config.social).filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      compact({
        "@type": "ProfessionalService",
        "@id": org,
        name: "Bonito",
        alternateName: "Bonito Reklam Ajansı",
        url: config.site,
        description: config.description.long,
        logo: {
          "@type": "ImageObject",
          url: `${config.site}/assets/logo/bonito-dark.png`,
          width: 800,
          height: 229,
        },
        image: config.ogImg,
        email: config.email,
        telephone: b.phone,
        foundingDate: b.foundingYear,
        address: compact({
          "@type": "PostalAddress",
          streetAddress: b.streetAddress,
          postalCode: b.postalCode,
          addressLocality: b.district || b.city,
          addressRegion: b.city,
          addressCountry: "TR",
        }),
        areaServed: [
          { "@type": "City", name: "İstanbul" },
          { "@type": "Country", name: "Türkiye" },
        ],
        knowsAbout: [
          "Reklam",
          "Web sitesi kurulumu",
          "Sosyal medya yönetimi",
          "İçerik üretimi",
          "Meta Ads",
          "Google Ads",
          "Arama motoru optimizasyonu (SEO)",
          "Influencer marketing",
        ],
        sameAs: sameAs.length ? sameAs : undefined,
      }),
      {
        "@type": "WebSite",
        "@id": `${config.site}/#website`,
        url: config.site,
        name: "Bonito",
        inLanguage: ["tr", "en"],
        publisher: { "@id": org },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // `<` kaçırılır: veri içindeki bir metin </script> ile etiketi kapatamaz.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
