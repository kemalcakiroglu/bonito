// TODO(bonito): `email`, `site` ve `social` gerçek bilgilerle doldurulmalı.
// İletişim formu mesajları `email` adresine gönderir; boş bırakılan sosyal
// medya bağlantıları sitede gösterilmez.
const config = {
  title: "Bonito | Reklam Ajansı",
  description: {
    long: "Bonito; web sitesi kurulumu, sosyal medya yönetimi, içerik üretimi, Meta ve Google reklamları, SEO ve influencer marketing hizmetlerini tek çatı altında sunan bir reklam ajansıdır.",
    short:
      "Dijital altyapıdan içeriğe, performans pazarlamasından SEO'ya uçtan uca reklam ajansı.",
  },
  keywords: [
    "Bonito",
    "reklam ajansı",
    "dijital ajans",
    "web sitesi kurulumu",
    "e-ticaret sitesi",
    "sosyal medya yönetimi",
    "içerik üretimi",
    "Meta Ads",
    "Google Ads",
    "performans pazarlaması",
    "SEO",
    "influencer marketing",
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
