"use client";
import React from "react";
import { Check, Users } from "lucide-react";
import { motion } from "motion/react";

import solutions, { Solution } from "@/data/projects";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";

const SolutionsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto px-4 pb-20">
      <SectionHeader
        id="projects"
        title="Çözümler"
        desc="Markanızın ihtiyacına göre tek bir hizmetle başlayabilir veya hepsini birlikte yürütebilirsiniz."
        className="static"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <SolutionCard key={solution.id} solution={solution} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const SolutionCard = ({
  solution,
  index,
}: {
  solution: Solution;
  index: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="pointer-events-auto flex flex-col gap-6 rounded-xl border border-border bg-card p-6 text-card-foreground md:p-8"
    >
      <header className="flex items-start gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={solution.icon} alt="" className="size-10 shrink-0" />
        <div>
          <p className="text-xs font-medium text-brand">{solution.category}</p>
          <h3 className="text-xl font-bold tracking-tight md:text-2xl">
            {solution.title}
          </h3>
        </div>
      </header>

      <p className="text-base font-medium leading-relaxed text-foreground">
        {solution.promise}
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {solution.intro}
      </p>

      <div className="grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
        {solution.services.map((service) => (
          <section key={service.name}>
            <h4 className="text-sm font-bold">{service.name}</h4>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {service.detail}
            </p>
            <ul className="mt-3 space-y-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <Check className="mt-1 size-3.5 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
        <p className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
          <Users className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
          <span>
            <strong className="font-medium text-foreground">Kimler için: </strong>
            {solution.audience}
          </span>
        </p>
        {solution.note && (
          <p className="text-xs leading-relaxed text-muted-foreground">
            {solution.note}
          </p>
        )}
      </div>
    </motion.article>
  );
};

export default SolutionsSection;
