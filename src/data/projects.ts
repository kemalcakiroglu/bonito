// Çözüm kategorileri. `promise` temel müşteri vaadi, `services` kapsamdaki
// hizmetlerdir. Rakam veya sonuç garantisi eklemeden önce kanıtlanabilir olduğundan emin olun.
export type SolutionService = {
  name: string;
  detail: string;
  items: string[];
};

export type Solution = {
  id: string;
  category: string;
  title: string;
  icon: string;
  promise: string;
  intro: string;
  audience: string;
  services: SolutionService[];
  note?: string;
};

const solutions: Solution[] = [
  {
    id: "digital",
    category: "Altyapı",
    title: "Dijital Varlık & Altyapı",
    icon: "/assets/services/web.svg",
    promise: "Güven veren, mobil uyumlu ve dönüşüme odaklı dijital vitrin.",
    intro:
      "Reklamın ve içeriğin getirdiği ziyaretçiyi karşılayan yer web sitenizdir. Markanızı doğru anlatan, her ekranda rahat kullanılan ve ziyaretçiyi harekete geçiren bir altyapı kuruyoruz.",
    audience:
      "Yeni site açacak, eski sitesini yenilemek isteyen veya online satışa başlayacak markalar.",
    services: [
      {
        name: "Web Sitesi Kurulumu",
        detail: "İhtiyacınıza göre üç farklı site türü kuruyoruz.",
        items: [
          "Kurumsal: markanızı ve hizmetlerinizi anlatan site",
          "E-ticaret: ürün, sepet ve ödeme akışı olan online mağaza",
          "Landing Page: tek bir ürün veya kampanyaya odaklı sayfa",
        ],
      },
      {
        name: "UI/UX Optimizasyonu ve Teknik Bakım",
        detail: "Yayındaki sitenizi iyileştiriyor ve düzenli çalışmasını sağlıyoruz.",
        items: [
          "Mobil görünüm ve kullanım kolaylığı",
          "Form, sepet ve satın alma adımlarının sadeleştirilmesi",
          "Güncellemeler, hız ve hata takibi",
        ],
      },
    ],
  },
  {
    id: "content",
    category: "İletişim",
    title: "İçerik & Marka İletişimi",
    icon: "/assets/services/social.svg",
    promise: "Düzenli marka görünürlüğü, etkileşim ve marka sadakati.",
    intro:
      "Markaların hatırlanması tek bir paylaşımla değil, düzenli ve tutarlı bir iletişimle olur. Ne paylaşılacağını planlıyor, içeriği üretiyor ve takipçilerinizle iletişimi yönetiyoruz.",
    audience:
      "Sosyal medyası düzensiz ilerleyen veya içerik üretimine zaman ayıramayan markalar.",
    services: [
      {
        name: "Sosyal Medya Yönetimi",
        detail: "Hesaplarınızı bir plan dahilinde yönetiyoruz.",
        items: [
          "Aylık içerik takvimi ve paylaşım planı",
          "Yorum ve mesajlarla topluluk yönetimi",
          "Paylaşım performansının takibi",
        ],
      },
      {
        name: "İçerik Üretimi",
        detail: "Her kanalın diline uygun içerik hazırlıyoruz.",
        items: [
          "Reels ve TikTok gibi kısa videolar",
          "Gönderi, hikâye ve reklam için statik tasarımlar",
          "Marka diline uygun metin yazarlığı",
        ],
      },
    ],
  },
  {
    id: "performance",
    category: "Büyüme",
    title: "Performans Pazarlaması",
    icon: "/assets/services/meta.svg",
    promise: "Ölçülebilir ciro artışı, potansiyel müşteri (lead) kazanımı ve yüksek ROAS.",
    intro:
      "Reklam bütçenizin nereye gittiğini ve ne getirdiğini görebilmeniz gerekir. Hedefinize göre kampanya kuruyor, sonuçları ölçüyor ve bütçeyi işe yarayan alanlara yönlendiriyoruz.",
    audience:
      "Online satışını veya form ve arama gibi müşteri taleplerini artırmak isteyen markalar.",
    services: [
      {
        name: "Meta Ads",
        detail: "Facebook ve Instagram'da doğru kitleye ulaşıyoruz.",
        items: [
          "Hedef kitle ve yeniden pazarlama kurguları",
          "Görsel, video ve metin testleri",
          "Dönüşüm takibi ve bütçe optimizasyonu",
        ],
      },
      {
        name: "Google Ads",
        detail: "Sizi arayan kişilerin karşısına çıkıyoruz.",
        items: [
          "Arama: ürün veya hizmetinizi arayanlara görünme",
          "Alışveriş: ürünleri görsel ve fiyatla gösterme",
          "Görüntülü: markayı hatırlatma ve bilinirlik",
        ],
      },
    ],
    note: "ROAS, reklama harcanan her 1 TL'nin kaç TL ciro getirdiğini gösterir. Lead ise formla veya telefonla iletişime geçen potansiyel müşteridir.",
  },
  {
    id: "visibility",
    category: "Kazanılmış Medya",
    title: "Görünürlük & Güven",
    icon: "/assets/services/seo.svg",
    promise: "Organik trafik ile uzun vadeli maliyet avantajı ve üçüncü parti güvenilirlik.",
    intro:
      "Reklam durduğunda da bulunabilir olmak ve markanızdan başkalarının bahsetmesi güven oluşturur. Arama sonuçlarındaki görünürlüğünüzü ve içerik üreticileriyle iş birliklerinizi yönetiyoruz.",
    audience:
      "Reklam bütçesine bağımlılığını azaltmak ve markasını uzun vadede güçlendirmek isteyen firmalar.",
    services: [
      {
        name: "Arama Motoru Optimizasyonu (SEO)",
        detail: "Sitenizin aramalarda daha iyi bulunması için çalışıyoruz.",
        items: [
          "Anahtar kelime ve rakip analizi",
          "Teknik SEO ve sayfa düzenlemeleri",
          "Aranan konulara yönelik içerik planı",
        ],
      },
      {
        name: "Influencer Marketing",
        detail: "Markanızı doğru içerik üreticileriyle buluşturuyoruz.",
        items: [
          "Markaya uygun KOL ve içerik üreticisi seçimi",
          "İş birliği, brief ve içerik süreci yönetimi",
          "Yayın sonrası sonuç takibi",
        ],
      },
    ],
    note: "SEO birikimli çalışır, sonuçlar zamanla görünür. KOL (Key Opinion Leader), alanında takipçilerini etkileyen fikir lideridir.",
  },
];

export default solutions;
