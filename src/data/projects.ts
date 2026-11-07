import type { Locale } from "@/i18n/locale";

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

const solutionsEn: Solution[] = [
  {
    ...solutions[0],
    category: "Infrastructure",
    title: "Digital Presence & Infrastructure",
    promise: "A trustworthy, mobile-friendly digital storefront built to convert.",
    intro:
      "Your website is where visitors brought in by ads and content land. We build a foundation that tells your brand's story, works smoothly on every screen and moves visitors to act.",
    audience:
      "Brands launching a new website, renewing an old one or starting to sell online.",
    services: [
      {
        name: "Website Development",
        detail: "We build three types of websites depending on your needs.",
        items: [
          "Corporate: a site that presents your brand and services",
          "E-commerce: an online store with product, cart and checkout flows",
          "Landing page: a page focused on a single product or campaign",
        ],
      },
      {
        name: "UI/UX Optimization & Technical Maintenance",
        detail: "We improve your live website and keep it running smoothly.",
        items: [
          "Mobile layout and ease of use",
          "Simpler form, cart and checkout steps",
          "Updates, speed and error monitoring",
        ],
      },
    ],
  },
  {
    ...solutions[1],
    category: "Communication",
    title: "Content & Brand Communication",
    promise: "Consistent brand visibility, engagement and brand loyalty.",
    intro:
      "Brands are remembered through regular, consistent communication, not a single post. We plan what to share, produce the content and manage the conversation with your followers.",
    audience:
      "Brands whose social media runs irregularly or who can't make time for content production.",
    services: [
      {
        name: "Social Media Management",
        detail: "We manage your accounts according to a plan.",
        items: [
          "Monthly content calendar and posting plan",
          "Community management through comments and messages",
          "Tracking post performance",
        ],
      },
      {
        name: "Content Production",
        detail: "We create content that fits the language of each channel.",
        items: [
          "Short videos such as Reels and TikTok",
          "Static designs for posts, stories and ads",
          "Copywriting in your brand's voice",
        ],
      },
    ],
  },
  {
    ...solutions[2],
    category: "Growth",
    title: "Performance Marketing",
    promise: "Measurable revenue growth, lead generation and high ROAS.",
    intro:
      "You need to see where your ad budget goes and what it brings back. We set up campaigns around your goal, measure the results and move the budget to what works.",
    audience:
      "Brands that want to grow online sales or customer requests such as forms and calls.",
    services: [
      {
        name: "Meta Ads",
        detail: "We reach the right audience on Facebook and Instagram.",
        items: [
          "Audience and retargeting setups",
          "Image, video and copy testing",
          "Conversion tracking and budget optimization",
        ],
      },
      {
        name: "Google Ads",
        detail: "We put you in front of people searching for you.",
        items: [
          "Search: appear to people looking for your product or service",
          "Shopping: show products with images and prices",
          "Display: brand reminders and awareness",
        ],
      },
    ],
    note: "ROAS shows how much revenue each 1 unit spent on ads brings back. A lead is a potential customer who contacts you through a form or by phone.",
  },
  {
    ...solutions[3],
    category: "Earned Media",
    title: "Visibility & Trust",
    promise: "Long-term cost advantage through organic traffic and third-party credibility.",
    intro:
      "Being findable when ads stop, and having others talk about your brand, builds trust. We manage your visibility in search results and your partnerships with content creators.",
    audience:
      "Companies that want to rely less on ad budgets and strengthen their brand over the long term.",
    services: [
      {
        name: "Search Engine Optimization (SEO)",
        detail: "We work to make your website easier to find in search.",
        items: [
          "Keyword and competitor research",
          "Technical SEO and on-page improvements",
          "A content plan around what people search for",
        ],
      },
      {
        name: "Influencer Marketing",
        detail: "We connect your brand with the right content creators.",
        items: [
          "Selecting KOLs and creators that fit your brand",
          "Managing partnerships, briefs and the content process",
          "Tracking results after publishing",
        ],
      },
    ],
    note: "SEO compounds over time, so results take a while to show. A KOL (Key Opinion Leader) is an opinion leader who influences their followers in a field.",
  },
];

export const getSolutions = (locale: Locale) => (locale === "tr" ? solutions : solutionsEn);

export default solutions;
