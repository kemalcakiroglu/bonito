// order = keycap layout, 4 per row (see keyboard-scene.tsx)
export enum SkillNames {
  WEB = "web",
  UX = "ux",
  SOCIAL = "social",
  CONTENT = "content",
  META = "meta",
  GOOGLE = "google",
  SEO = "seo",
  INFLUENCER = "influencer",
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

const CORAL = "#ff3131";
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
  [SkillNames.WEB]: service(1, SkillNames.WEB, "Web Sitesi", "Kurumsal site, e-ticaret ve landing page kuruyoruz.", TEAL, TEAL),
  [SkillNames.UX]: service(2, SkillNames.UX, "UI/UX", "Arayüzü iyileştiriyor, teknik bakımı üstleniyoruz.", TEAL, NAVY),
  [SkillNames.SOCIAL]: service(3, SkillNames.SOCIAL, "Sosyal Medya", "Topluluğunuzu ve içerik takviminizi yönetiyoruz.", AMBER, AMBER),
  [SkillNames.CONTENT]: service(4, SkillNames.CONTENT, "Kreatif", "Reels/TikTok, statik tasarım ve metin üretiyoruz.", AMBER, NAVY),
  [SkillNames.META]: service(5, SkillNames.META, "Meta Ads", "Facebook ve Instagram reklamlarınızı yönetiyoruz.", CORAL, CORAL),
  [SkillNames.GOOGLE]: service(6, SkillNames.GOOGLE, "Google Ads", "Arama, alışveriş ve görüntülü reklamlar kuruyoruz.", CORAL, NAVY),
  [SkillNames.SEO]: service(7, SkillNames.SEO, "SEO", "Arama motorlarında organik görünürlük kazandırıyoruz.", BLUE, BLUE),
  [SkillNames.INFLUENCER]: service(8, SkillNames.INFLUENCER, "Influencer", "KOL ve içerik üreticileriyle iş birlikleri kuruyoruz.", BLUE, NAVY),
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
    skills: [SkillNames.SEO, SkillNames.UX],
  },
  {
    id: 2,
    title: "Strateji",
    summary: "Fikri ve yol haritasını kurarız",
    description: [
      "Ana mesajı, kanalları ve bütçe dağılımını planlarız.",
      "Takvimi ve sorumlulukları tek bir planda toplarız.",
    ],
    skills: [SkillNames.META, SkillNames.GOOGLE, SkillNames.SOCIAL],
  },
  {
    id: 3,
    title: "Üretim",
    summary: "Fikri içeriğe dönüştürürüz",
    description: [
      "Görsel, metin ve videoları aynı dille üretiriz.",
      "İşleri yayın öncesinde onayınıza sunarız.",
    ],
    skills: [SkillNames.CONTENT, SkillNames.WEB, SkillNames.INFLUENCER],
  },
  {
    id: 4,
    title: "Yayın ve Ölçüm",
    summary: "Yayınlar, ölçer ve iyileştiririz",
    description: [
      "Kampanyayı planlanan kanallarda yayına alırız.",
      "Sonuçları raporlar, öğrendiklerimizle sonraki adımı iyileştiririz.",
    ],
    skills: [SkillNames.META, SkillNames.GOOGLE, SkillNames.SEO],
  },
];

export const themeDisclaimers = {
  light: ["Aydınlık temaya geçmek ister misiniz?"],
  dark: ["Karanlık tema açıldı."],
};
