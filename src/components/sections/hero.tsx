import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";
import Logo from "../logo";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Reklam Ajansı
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <h1 className="my-2">
                    <Logo className="h-20 max-w-full lg:h-24 xl:h-28" />
                  </h1>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start mt-2 md:mt-4 max-w-md font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl bg-clip-text "
                    )}
                  >
                    {config.tagline}
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <Link href={"#contact"} className="flex-1">
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <Send size={20} />
                      <p>Teklif Al</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Link href={"#skills"}>
                    <Button
                      variant={"outline"}
                      className="block w-full overflow-hidden"
                    >
                      Hizmetlerimiz
                    </Button>
                  </Link>
                  <div className="flex items-center h-full gap-2">
                    {config.social.instagram && (
                      <Link
                        href={config.social.instagram}
                        target="_blank"
                        aria-label="Instagram"
                      >
                        <Button variant={"outline"}>
                          <SiInstagram size={24} />
                        </Button>
                      </Link>
                    )}
                    {config.social.linkedin && (
                      <Link
                        href={config.social.linkedin}
                        target="_blank"
                        aria-label="LinkedIn"
                        className="cursor-can-hover"
                      >
                        <Button variant={"outline"}>
                          <SiLinkedin size={24} />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
