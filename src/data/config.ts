// TODO(bonito): `legal` alanına şirketin tam ticari unvanı ve adresi yazılmalı
// (KVKK aydınlatma metninde veri sorumlusu olarak görünür).
// İletişim formu mesajları `email` adresine gönderir; boş bırakılan sosyal
// medya bağlantıları sitede gösterilmez.
const config = {
  // Arama sonucunda görünen başlık (50-60 karakter) ve açıklama (~150 karakter).
  title: "İstanbul Reklam Ajansı: Dijital Reklam ve Web | Bonito",
  description: {
    long: "İstanbul merkezli reklam ajansı: web sitesi, sosyal medya, Meta ve Google reklamları ile SEO tek ekipte. Projeleri inceleyin, teklif alın.",
    short:
      "Dijital altyapıdan içeriğe, performans pazarlamasından SEO'ya İstanbul merkezli reklam ajansı.",
  },
  author: "Bonito",

  // TODO(bonito): Google İşletme Profili'ndekiyle HARFİYEN aynı yazın. Boş
  // bırakılan alanlar sitede ve yapılandırılmış veride (JSON-LD) gösterilmez.
  // Müşteri kabul edilmeyen bir adresse sokak adresini boş bırakın.
  business: {
    city: "İstanbul",
    district: "", // örn. "Kağıthane"
    streetAddress: "", // örn. "Örnek Mah. Örnek Sok. No: 1"
    postalCode: "",
    phone: "", // uluslararası biçimde, örn. "+90 212 000 00 00"
    foundingYear: "", // örn. "2025"
  },
  email: "info@bonitoagency.com",
  site: "https://bonitoagency.com",

  legal: {
    name: "Bonito",
    address: "",
  },

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    instagram: "https://www.instagram.com/bonitoagency/",
    linkedin: "",
    twitter: "",
  },
};
export { config };
