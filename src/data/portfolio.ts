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

export default portfolio;
