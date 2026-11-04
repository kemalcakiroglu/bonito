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
];

export default portfolio;
