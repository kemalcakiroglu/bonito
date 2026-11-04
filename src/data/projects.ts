// TODO(bonito): Bunlar gerçek müşteri işi değil, ajansın ürettiği iş türleridir.
// Gerçek işler hazır olduğunda görselleri `public/assets/work/` altına koyup
// buradaki kayıtları güncelleyin. Müşteri adı veya sonuç rakamı uydurmayın.
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
    id: "brand",
    category: "Marka",
    title: "Marka Kimliği",
    src: "/assets/work/brand.png",
    summary:
      "Yeni kurulan ya da yenilenmek isteyen markalar için konumlandırmadan görsel dile uzanan bir kimlik çalışması.",
    deliverables: ["Marka konumlandırması", "Logo ve görsel kimlik", "Marka dili rehberi", "Temel basılı ve dijital tasarımlar"],
  },
  {
    id: "campaign",
    category: "Kreatif",
    title: "Reklam Kampanyası",
    src: "/assets/work/campaign.png",
    summary:
      "Tek bir güçlü fikir etrafında kurulan, farklı kanallarda aynı hikâyeyi anlatan kampanyalar.",
    deliverables: ["Kampanya fikri", "Slogan ve metinler", "Görsel ve video üretimi", "Kanal bazlı uyarlamalar"],
  },
  {
    id: "social",
    category: "Sosyal Medya",
    title: "Sosyal Medya Yönetimi",
    src: "/assets/work/social.png",
    summary:
      "Markanın sosyal medyada düzenli ve tutarlı görünmesini sağlayan aylık içerik yönetimi.",
    deliverables: ["Aylık içerik takvimi", "Gönderi ve kısa video üretimi", "Topluluk yönetimi", "Aylık raporlama"],
  },
  {
    id: "performance",
    category: "Dijital Reklam",
    title: "Performans Reklamları",
    src: "/assets/work/performance.png",
    summary:
      "Belirlenen hedefe göre kurulan, sürekli test edilip iyileştirilen dijital reklam yönetimi.",
    deliverables: ["Hedef kitle ve bütçe planı", "Reklam kurulumu", "Kreatif testleri", "Dönüşüm takibi ve raporlama"],
  },
  {
    id: "web",
    category: "Web",
    title: "Web ve Kampanya Sayfaları",
    src: "/assets/work/web.png",
    summary:
      "Marka hikâyesini anlatan siteler ve kampanyalara özel, dönüşüm odaklı açılış sayfaları.",
    deliverables: ["Kullanıcı deneyimi ve arayüz tasarımı", "Site metinleri", "Geliştirme ve yayına alma", "Temel SEO kurulumu"],
  },
  {
    id: "video",
    category: "Prodüksiyon",
    title: "Video ve Fotoğraf",
    src: "/assets/work/video.png",
    summary:
      "Reklam filmlerinden sosyal medya videolarına, senaryodan kurguya prodüksiyon süreci.",
    deliverables: ["Senaryo ve çekim planı", "Çekim ve prodüksiyon", "Kurgu ve renk", "Kanal formatlarına uyarlama"],
  },
];

export default projects;
