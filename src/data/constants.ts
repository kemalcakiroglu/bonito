import type { Locale } from "@/i18n/locale";

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

// İngilizce metinler. Etiketler 3B klavyede de çizilir: yalnızca ASCII.
const SKILL_TEXT_EN: Record<SkillNames, Pick<Skill, "label" | "shortDescription">> = {
  [SkillNames.WEB]: { label: "Website", shortDescription: "We build corporate sites, online stores and landing pages." },
  [SkillNames.UX]: { label: "UI/UX", shortDescription: "We improve your interface and take care of maintenance." },
  [SkillNames.SOCIAL]: { label: "Social Media", shortDescription: "We manage your community and content calendar." },
  [SkillNames.CONTENT]: { label: "Creative", shortDescription: "We produce Reels/TikTok, static designs and copy." },
  [SkillNames.META]: { label: "Meta Ads", shortDescription: "We manage your Facebook and Instagram ads." },
  [SkillNames.GOOGLE]: { label: "Google Ads", shortDescription: "We run search, shopping and display campaigns." },
  [SkillNames.SEO]: { label: "SEO", shortDescription: "We grow your organic visibility in search engines." },
  [SkillNames.INFLUENCER]: { label: "Influencer", shortDescription: "We set up partnerships with KOLs and content creators." },
};

export const getSkills = (locale: Locale): Record<SkillNames, Skill> =>
  locale === "tr"
    ? SKILLS
    : (Object.fromEntries(
        Object.entries(SKILLS).map(([name, skill]) => [
          name,
          { ...skill, ...SKILL_TEXT_EN[name as SkillNames] },
        ])
      ) as Record<SkillNames, Skill>);

const PROCESS_EN: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    summary: "We clarify your brand and goals together",
    description: [
      "We look at your brand, your competitors and your audience together.",
      "We agree on how success will be measured from the start.",
    ],
    skills: [SkillNames.SEO, SkillNames.UX],
  },
  {
    id: 2,
    title: "Strategy",
    summary: "We shape the idea and the roadmap",
    description: [
      "We plan the core message, the channels and the budget split.",
      "We bring the timeline and responsibilities into a single plan.",
    ],
    skills: [SkillNames.META, SkillNames.GOOGLE, SkillNames.SOCIAL],
  },
  {
    id: 3,
    title: "Production",
    summary: "We turn the idea into content",
    description: [
      "We produce visuals, copy and videos in one consistent voice.",
      "We share the work with you for approval before it goes live.",
    ],
    skills: [SkillNames.CONTENT, SkillNames.WEB, SkillNames.INFLUENCER],
  },
  {
    id: 4,
    title: "Launch & Measurement",
    summary: "We launch, measure and improve",
    description: [
      "We launch the campaign on the planned channels.",
      "We report the results and use what we learn to improve the next step.",
    ],
    skills: [SkillNames.META, SkillNames.GOOGLE, SkillNames.SEO],
  },
];

export const getProcess = (locale: Locale) => (locale === "tr" ? PROCESS : PROCESS_EN);
