import { ArrowUpRight } from "lucide-react";
import portfolio from "@/data/portfolio";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const PortfolioSection = () => {
  return (
    <SectionWrapper id="portfolio" className="max-w-7xl mx-auto px-4 py-24">
      <SectionHeader
        id="portfolio"
        title="Projeler"
        desc="Markalar ve kendi ürünlerimiz için yaptıklarımız."
        className="static mb-14"
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolio.map((item) => (
          <li key={item.id} className="pointer-events-auto">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground transition-colors duration-300 hover:border-brand"
            >
              <div className="aspect-[3/2] overflow-hidden bg-secondary">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={`${item.title} ekran görüntüsü`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="text-xs font-medium text-brand">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium">
                  {item.linkLabel}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default PortfolioSection;
