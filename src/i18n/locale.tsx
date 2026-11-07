"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ui } from "./ui";

export type Locale = "tr" | "en";

// Dil URL'den okunur: /en ve altı İngilizce, gerisi Türkçe.
export const localeFromPath = (pathname: string | null): Locale =>
  pathname === "/en" || pathname?.startsWith("/en/") ? "en" : "tr";

// Her sayfanın diğer dildeki karşılığı (dil düğmesi bunu kullanır).
const ALTERNATES: [tr: string, en: string][] = [
  ["/", "/en"],
  ["/kvkk", "/en/privacy"],
];

export const alternatePath = (pathname: string | null): string => {
  const path = pathname && pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
  for (const [tr, en] of ALTERNATES) {
    if (path === tr) return en;
    if (path === en) return tr;
  }
  return localeFromPath(pathname) === "en" ? "/" : "/en";
};

export const homePath = (locale: Locale) => (locale === "en" ? "/en" : "/");

const LocaleContext = createContext<Locale>("tr");

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = localeFromPath(usePathname());
  // Kök layout tek dil için `lang` basar; İngilizce sayfalarda düzelt.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);
export const useT = () => ui[useLocale()];
