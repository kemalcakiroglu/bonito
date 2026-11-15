"use client";

import { config } from "@/data/config";
import { useT } from "@/i18n/locale";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

// "Nasıl bir reklam ajansıyız?": kim, nerede, ne yapıyor. Arama motorları ve
// yapay zekâ aramaları ajansı bu metinden tanır; boş bırakılan bilgiler
// (config.business) listede gösterilmez.
const AboutSection = () => {
  const t = useT().about;
  const b = config.business;
  const location = [b.district, b.city].filter(Boolean).join(", ");
  const facts = [
    { label: t.location, value: location },
    { label: t.founded, value: b.foundingYear },
    { label: t.served, value: t.servedValue },
    { label: t.email, value: config.email.replace(/@/g, "(at)") },
    { label: t.phone, value: b.phone },
  ].filter((fact) => fact.value);

  return (
    // Opak zemin: 3B klavye sahnesi "contact" bölümüne kadar ortada durur;
    // portföy bölümünde olduğu gibi metnin üstüne binmesini engeller.
    <SectionWrapper id="about" className="relative bg-background flex flex-col items-center justify-center px-4 py-24">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader id="about" title={t.title} desc={t.desc} className="relative top-0 mb-12 md:mb-16 mt-0" />
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
            {t.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <dl className="space-y-4 text-sm md:text-base">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-border pb-3">
                <dt className="text-muted-foreground">{fact.label}</dt>
                <dd className="font-medium text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
