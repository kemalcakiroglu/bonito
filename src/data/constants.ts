// order = keycap layout, 6 per row
export enum SkillNames {
  STRATEGY = "strategy",
  BRAND = "brand",
  CREATIVE = "creative",
  COPY = "copy",
  VIDEO = "video",
  PHOTO = "photo",
  SOCIAL = "social",
  ADS = "ads",
  MEDIA = "media",
  SEO = "seo",
  WEB = "web",
  ANALYTICS = "analytics",
}
export type Skill = {
  id: number;
  name: string;
  /**
   * Also rendered as 3D text on the keyboard, whose font metrics only cover
   * ASCII: keep labels free of ç, ğ, ı, İ, ö, ş and ü.
   */
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Optional local artwork for the 3D key; falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};

const CORAL = "#ff5a4f";
const AMBER = "#f5a524";
const TEAL = "#14b8a6";
const BLUE = "#3b82f6";
const NAVY = "#12303f";

const service = (
  id: number,
  name: SkillNames,
  label: string,
  shortDescription: string,
  color: string,
  keyboardColor: string
): Skill => ({
  id,
  name,
  label,
  shortDescription,
  color,
  icon: `/assets/services/${name}.svg`,
  keyboardIcon: `/assets/keyboard/logos/${name}.svg`,
  keyboardColor,
});

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.STRATEGY]: service(1, SkillNames.STRATEGY, "Strateji", "Pazarı ve hedef kitleyi okuyup yol haritası çıkarırız.", CORAL, CORAL),
  [SkillNames.BRAND]: service(2, SkillNames.BRAND, "Marka", "İsimden görsel kimliğe markanın dilini kurarız.", AMBER, NAVY),
  [SkillNames.CREATIVE]: service(3, SkillNames.CREATIVE, "Kreatif", "Kalabalıkta fark edilen kampanya fikirleri üretiriz.", TEAL, TEAL),
  [SkillNames.COPY]: service(4, SkillNames.COPY, "Metin", "Sloganlardan site metinlerine markanın sesini yazarız.", BLUE, NAVY),
  [SkillNames.VIDEO]: service(5, SkillNames.VIDEO, "Video", "Reklam filmi ve kısa video içerikleri üretiriz.", CORAL, NAVY),
  [SkillNames.PHOTO]: service(6, SkillNames.PHOTO, "Foto", "Ürün ve marka çekimlerini planlayıp hayata geçiririz.", AMBER, AMBER),
  [SkillNames.SOCIAL]: service(7, SkillNames.SOCIAL, "Sosyal Medya", "İçerik takvimi, üretim ve topluluk yönetimi yaparız.", TEAL, NAVY),
  [SkillNames.ADS]: service(8, SkillNames.ADS, "Reklam", "Dijital reklam kampanyalarını kurar ve yönetiriz.", BLUE, BLUE),
  [SkillNames.MEDIA]: service(9, SkillNames.MEDIA, "Medya Plan", "Bütçenizi doğru kanala ve doğru zamana dağıtırız.", CORAL, NAVY),
  [SkillNames.SEO]: service(10, SkillNames.SEO, "SEO", "Markanın aramalarda bulunmasını sağlayacak işleri yaparız.", AMBER, NAVY),
  [SkillNames.WEB]: service(11, SkillNames.WEB, "Web", "Marka siteleri ve kampanya sayfaları tasarlarız.", TEAL, NAVY),
  [SkillNames.ANALYTICS]: service(12, SkillNames.ANALYTICS, "Analitik", "Sonuçları ölçer, kararları veriye göre veririz.", BLUE, CORAL),
};

export type ProcessStep = {
  id: number;
  title: string;
  summary: string;
  description: string[];
  skills: SkillNames[];
};

export const PROCESS: ProcessStep[] = [
  {
    id: 1,
    title: "Keşif",
    summary: "Markayı ve hedefi birlikte netleştiririz",
    description: [
      "Markanızı, rakiplerinizi ve hedef kitlenizi birlikte inceleriz.",
      "Başarının neye göre ölçüleceğini en baştan belirleriz.",
    ],
    skills: [SkillNames.STRATEGY, SkillNames.ANALYTICS],
  },
  {
    id: 2,
    title: "Strateji",
    summary: "Fikri ve yol haritasını kurarız",
    description: [
      "Ana mesajı, kanalları ve bütçe dağılımını planlarız.",
      "Takvimi ve sorumlulukları tek bir planda toplarız.",
    ],
    skills: [SkillNames.STRATEGY, SkillNames.BRAND, SkillNames.MEDIA],
  },
  {
    id: 3,
    title: "Üretim",
    summary: "Fikri içeriğe dönüştürürüz",
    description: [
      "Görsel, metin ve videoları aynı dille üretiriz.",
      "İşleri yayın öncesinde onayınıza sunarız.",
    ],
    skills: [SkillNames.CREATIVE, SkillNames.COPY, SkillNames.VIDEO, SkillNames.PHOTO],
  },
  {
    id: 4,
    title: "Yayın ve Ölçüm",
    summary: "Yayınlar, ölçer ve iyileştiririz",
    description: [
      "Kampanyayı planlanan kanallarda yayına alırız.",
      "Sonuçları raporlar, öğrendiklerimizle sonraki adımı iyileştiririz.",
    ],
    skills: [SkillNames.ADS, SkillNames.SOCIAL, SkillNames.ANALYTICS],
  },
];

export const themeDisclaimers = {
  light: ["Aydınlık temaya geçmek ister misiniz?"],
  dark: ["Karanlık tema açıldı."],
};
