// Çözüm kategorileri: `summary` kategorinin temel müşteri vaadi, `deliverables`
// kapsamındaki hizmetlerdir. Görseller `public/assets/work/` altındadır.
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  summary: string;
  deliverables: string[];
  live?: string;
};

const projects: Project[] = [
  {
    id: "digital",
    category: "Altyapı",
    title: "Dijital Varlık & Altyapı",
    src: "/assets/work/digital.png",
    summary: "Güven veren, mobil uyumlu ve dönüşüme odaklı dijital vitrin.",
    deliverables: [
      "Web Sitesi Kurulumu (Kurumsal, E-ticaret, Landing Page)",
      "UI/UX Optimizasyonu ve Teknik Bakım",
    ],
  },
  {
    id: "content",
    category: "İletişim",
    title: "İçerik & Marka İletişimi",
    src: "/assets/work/content.png",
    summary: "Düzenli marka görünürlüğü, etkileşim ve marka sadakati.",
    deliverables: [
      "Sosyal Medya Yönetimi (Topluluk & Takvim Yönetimi)",
      "İçerik Üretimi (Reels/TikTok, Statik Tasarım, Metin Yazarlığı)",
    ],
  },
  {
    id: "performance",
    category: "Büyüme",
    title: "Performans Pazarlaması",
    src: "/assets/work/performance.png",
    summary: "Ölçülebilir ciro artışı, potansiyel müşteri (lead) kazanımı ve yüksek ROAS.",
    deliverables: [
      "Meta Ads (Facebook & Instagram reklamları)",
      "Google Ads (Arama, Alışveriş, Görüntülü Reklamlar)",
    ],
  },
  {
    id: "visibility",
    category: "Kazanılmış Medya",
    title: "Görünürlük & Güven",
    src: "/assets/work/visibility.png",
    summary: "Organik trafik ile uzun vadeli maliyet avantajı ve üçüncü parti güvenilirlik.",
    deliverables: [
      "Arama Motoru Optimizasyonu (SEO)",
      "Influencer Marketing (KOL & İçerik Üretici İş Birlikleri)",
    ],
  },
];

export default projects;
