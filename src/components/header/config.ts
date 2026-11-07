import { Link } from "@/types";
import { homePath, type Locale } from "@/i18n/locale";
import { ui } from "@/i18n/ui";

const getLinks = (locale: Locale): Link[] => {
  const home = homePath(locale);
  const anchor = (id: string) => `${home === "/" ? "/" : home}#${id}`;
  const t = ui[locale].nav;
  return [
    { title: t.home, href: home, thumbnail: "/assets/nav/home.png" },
    { title: t.services, href: anchor("skills"), thumbnail: "/assets/nav/services.png" },
    { title: t.process, href: anchor("process"), thumbnail: "/assets/nav/process.png" },
    { title: t.solutions, href: anchor("projects"), thumbnail: "/assets/nav/work.png" },
    { title: t.portfolio, href: anchor("portfolio"), thumbnail: "/assets/nav/portfolio.png" },
    { title: t.contact, href: anchor("contact"), thumbnail: "/assets/nav/contact.png" },
  ];
};

export { getLinks };
