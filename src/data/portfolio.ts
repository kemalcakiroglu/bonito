import type { Locale } from "@/i18n/locale";

// Gerçek işler. Yeni proje eklerken görseli `public/assets/portfolio/` altına
// (3:2 oranında) koyup buraya bir kayıt ekleyin; sonuç rakamı uydurmayın.
export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  linkLabel: string;
};

const portfolio: PortfolioItem[] = [
  {
    id: "gokturkkimya",
    title: "Göktürk Kimya",
    category: "Kurumsal Web Sitesi",
    description:
      "Endüstriyel yapıştırıcı ve hot-melt tutkal alanında çalışan Göktürk Kimya için kurumsal web sitesi.",
    image: "/assets/portfolio/gokturkkimya.jpg",
    href: "https://www.gokturkkimya.com/",
    linkLabel: "gokturkkimya.com",
  },
  {
    id: "ambalajmagaza",
    title: "GastroPack",
    category: "E-ticaret Sitesi",
    description:
      "Baskılı karton bardak ve ambalaj ürünleri sunan GastroPack için e-ticaret sitesi.",
    image: "/assets/portfolio/ambalajmagaza.jpg",
    href: "https://www.ambalajmagaza.com/",
    linkLabel: "ambalajmagaza.com",
  },
  {
    id: "stronghold",
    title: "Stronghold Chemical",
    category: "Kurumsal Web Sitesi",
    description:
      "Türkiye merkezli yapıştırıcı tedarikçisi Stronghold Chemical için kurumsal web sitesi.",
    image: "/assets/portfolio/stronghold.jpg",
    href: "https://www.strongholdchemical.com/",
    linkLabel: "strongholdchemical.com",
  },
  {
    id: "eugastropack",
    title: "GastroPack Europe",
    category: "Sosyal Medya Yönetimi",
    description:
      "GastroPack'in Avrupa pazarına yönelik Instagram hesabının yönetimi.",
    image: "/assets/portfolio/eugastropack.jpg",
    href: "https://www.instagram.com/eugastropack/",
    linkLabel: "@eugastropack",
  },
  {
    id: "basricakiroglu",
    title: "Prof. Dr. Basri Çakıroğlu",
    category: "Kişisel Web Sitesi",
    description:
      "İstanbul'da üroloji ve robotik cerrahi uzmanı Prof. Dr. Basri Çakıroğlu için randevu formlu web sitesi.",
    image: "/assets/portfolio/basricakiroglu.jpg",
    href: "https://www.basricakiroglu.com.tr/",
    linkLabel: "basricakiroglu.com.tr",
  },
  {
    id: "skinsimulator",
    title: "Skin Simulator",
    category: "Web Uygulaması",
    description:
      "Kasa açma ve trade-up deneyimini gerçek para olmadan tarayıcıda sunan ücretsiz simülatör.",
    image: "/assets/portfolio/skinsimulator.jpg",
    href: "https://skinsimulator.com/",
    linkLabel: "skinsimulator.com",
  },
  {
    id: "chestsimulator",
    title: "Chest Simulator",
    category: "Web Oyunu",
    description:
      "Tarayıcıda hesap açmadan oynanan, hayran yapımı ücretsiz sandık açma ve koleksiyon oyunu.",
    image: "/assets/portfolio/chestsimulator.jpg",
    href: "https://chestsimulator.com/",
    linkLabel: "chestsimulator.com",
  },
  {
    id: "potu",
    title: "POTÜ Design Studio",
    category: "Kurumsal Web Sitesi",
    description:
      "Mutfak, banyo, yaşam alanı ve mağaza projeleri yapan tasarım stüdyosu POTÜ için web sitesi.",
    image: "/assets/portfolio/potu.jpg",
    href: "https://www.xn--pot-joa.com/",
    linkLabel: "potü.com",
  },
  {
    id: "potudesign",
    title: "POTÜ Design",
    category: "Sosyal Medya Yönetimi",
    description:
      "Kişiye özel ahşap ve dekorasyon çözümleri sunan POTÜ Design'ın Instagram hesabının yönetimi.",
    image: "/assets/portfolio/potudesign.jpg",
    href: "https://www.instagram.com/potudesign/",
    linkLabel: "@potudesign",
  },
  {
    id: "enesozdemir",
    title: "Enes Özdemir",
    category: "Kişisel Web Sitesi",
    description:
      "Oyuncu Enes Özdemir için biyografi, kariyer, showreel ve galeri içeren kişisel web sitesi.",
    image: "/assets/portfolio/enesozdemir.jpg",
    href: "https://enesozdemir.tr/",
    linkLabel: "enesozdemir.tr",
  },
  {
    id: "lorisparfum",
    title: "Loris Parfum Herold Center",
    category: "Sosyal Medya Yönetimi",
    description:
      "Almanya Norderstedt'teki Herold Center mağazası için Instagram hesabının yönetimi.",
    image: "/assets/portfolio/lorisparfum.jpg",
    href: "https://www.instagram.com/lorisparfum_heroldcenter/",
    linkLabel: "@lorisparfum_heroldcenter",
  },
];

const PORTFOLIO_EN: Record<string, Pick<PortfolioItem, "category" | "description">> = {
  gokturkkimya: { category: "Corporate Website", description: "Corporate website for Göktürk Kimya, an industrial adhesive and hot-melt glue company." },
  ambalajmagaza: { category: "E-commerce Website", description: "E-commerce website for GastroPack, a supplier of printed paper cups and packaging." },
  stronghold: { category: "Corporate Website", description: "Corporate website for Stronghold Chemical, a Turkey-based adhesive supplier." },
  eugastropack: { category: "Social Media Management", description: "Managing the Instagram account of GastroPack for the European market." },
  basricakiroglu: { category: "Personal Website", description: "Website with an appointment form for Prof. Dr. Basri Çakıroğlu, a urology and robotic surgery specialist in Istanbul." },
  skinsimulator: { category: "Web App", description: "A free simulator that brings case opening and trade-ups to the browser, with no real money involved." },
  chestsimulator: { category: "Web Game", description: "A free, fan-made chest opening and collection game you can play in the browser without an account." },
  potu: { category: "Corporate Website", description: "Website for POTÜ, a design studio working on kitchen, bathroom, living space and retail projects." },
  potudesign: { category: "Social Media Management", description: "Managing the Instagram account of POTÜ Design, which offers custom woodwork and decoration." },
  enesozdemir: { category: "Personal Website", description: "Personal website for actor Enes Özdemir with his biography, career, showreel and gallery." },
  lorisparfum: { category: "Social Media Management", description: "Managing the Instagram account of the Herold Center store in Norderstedt, Germany." },
};

export const getPortfolio = (locale: Locale): PortfolioItem[] =>
  locale === "tr"
    ? portfolio
    : portfolio.map((item) => ({ ...item, ...PORTFOLIO_EN[item.id] }));

export default portfolio;
