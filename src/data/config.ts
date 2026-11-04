// TODO(bonito): `email`, `site` ve `social` gerçek bilgilerle doldurulmalı.
// İletişim formu mesajları `email` adresine gönderir; boş bırakılan sosyal
// medya bağlantıları sitede gösterilmez.
const config = {
  title: "Bonito | Reklam Ajansı",
  description: {
    long: "Bonito; marka stratejisi, kreatif üretim, sosyal medya ve dijital reklam alanlarında çalışan bir reklam ajansıdır. Markanız için fikir üretir, kampanyaları hayata geçirir ve sonuçları ölçeriz.",
    short:
      "Marka stratejisi, kreatif üretim ve dijital reklamı tek çatı altında toplayan reklam ajansı.",
  },
  keywords: [
    "Bonito",
    "reklam ajansı",
    "dijital ajans",
    "kreatif ajans",
    "marka stratejisi",
    "sosyal medya yönetimi",
    "dijital reklam",
    "video prodüksiyon",
    "web tasarım",
    "SEO",
  ],
  author: "Bonito",
  tagline: "Akılda kalan markalar için fikir üretiyoruz.",
  email: "merhaba@bonito.example",
  site: "https://bonito.example",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    instagram: "",
    linkedin: "",
    twitter: "",
  },
};
export { config };
