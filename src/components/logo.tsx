import { cn } from "@/lib/utils";

/* Yazılı logo: harfler karanlık temada beyaz, aydınlık temada koyudur. */
const Logo = ({ className }: { className?: string }) => (
  <>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/assets/logo/bonito-dark.png"
      alt="Bonito"
      width={800}
      height={229}
      className={cn("w-auto dark:hidden", className)}
    />
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/assets/logo/bonito-light.png"
      alt="Bonito"
      width={800}
      height={229}
      className={cn("hidden w-auto dark:block", className)}
    />
  </>
);

export default Logo;
