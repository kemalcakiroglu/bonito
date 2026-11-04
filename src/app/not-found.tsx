import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Sayfa Bulunamadı",
  description: "Aradığınız sayfa bulunamadı veya taşınmış olabilir.",
};

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
      <p className="font-display text-7xl font-bold tracking-tight sm:text-8xl" aria-hidden="true">
        404
      </p>
      <h1 className="mt-4 text-xl font-semibold sm:text-2xl">Sayfa bulunamadı</h1>
      <p className="mt-3 max-w-sm text-sm text-muted-foreground sm:text-base">
        Aradığınız sayfa kaldırılmış ya da hiç var olmamış olabilir.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Ana sayfaya dön
      </Link>
    </main>
  );
}
