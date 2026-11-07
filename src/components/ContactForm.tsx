"use client";
import { ChevronRight, Loader2 } from "lucide-react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { homePath, useLocale, useT } from "@/i18n/locale";
import type { UiText } from "@/i18n/ui";

const makeSchema = (t: UiText["form"]) =>
  z.object({
    fullName: z.string().min(2, t.nameError),
    email: z.string().email(t.emailError),
    message: z.string().min(10, t.messageError),
    consent: z.literal(true, { errorMap: () => ({ message: t.consentError }) }),
  });

type FieldErrors = Partial<Record<"fullName" | "email" | "message" | "consent", string>>;

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<FieldErrors>({});

  const { toast } = useToast();
  const router = useRouter();
  const locale = useLocale();
  const t = useT().form;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const result = makeSchema(t).safeParse({ fullName, email, message, consent });
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message, consent, locale }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      toast({
        title: t.successTitle,
        description: t.successDesc,
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
      });
      setLoading(false);
      setFullName("");
      setEmail("");
      setMessage("");
      setConsent(false);
      const timer = setTimeout(() => {
        router.push(homePath(locale));
        clearTimeout(timer);
      }, 1000);
    } catch (err) {
      toast({
        title: t.errorTitle,
        description: t.errorDesc,
        className: cn(
          "top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4"
        ),
        variant: "destructive",
      });
    }
    setLoading(false);
  };
  return (
    <form className="min-w-7xl mx-auto sm:mt-4" onSubmit={handleSubmit} aria-busy={loading}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="fullname">{t.nameLabel}</Label>
          <Input
            id="fullname"
            placeholder={t.namePlaceholder}
            type="text"
            value={fullName}
            onChange={(e) => { setFullName(e.target.value); setErrors((p) => ({ ...p, fullName: undefined })); }}
          />
          {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">{t.emailLabel}</Label>
          <Input
            id="email"
            placeholder={t.emailPlaceholder}
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </LabelInputContainer>
      </div>
      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="content">{t.messageLabel}</Label>
        <Textarea
          placeholder={t.messagePlaceholder}
          id="content"
          value={message}
          onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: undefined })); }}
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
        <p className="text-sm text-muted-foreground">
          {t.noticeBefore}{" "}
          <Link
            href={locale === "tr" ? "/kvkk" : "/en/privacy"}
            target="_blank"
            className="underline underline-offset-2 hover:text-foreground"
          >
            {t.noticeLink}
          </Link>
          {t.noticeAfter ? ` ${t.noticeAfter}` : "."}
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="consent" className="flex cursor-pointer items-start gap-2 text-sm text-muted-foreground">
          <input
            id="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => { setConsent(e.target.checked); setErrors((p) => ({ ...p, consent: undefined })); }}
            className="mt-0.5 size-4 shrink-0 accent-[var(--brand)]"
          />
          <span>{t.consent}</span>
        </label>
        {errors.consent && <p className="mt-1 text-sm text-red-500">{errors.consent}</p>}
      </div>
      <Button
        disabled={loading}
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <p>{t.sending}</p>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            {t.send} <ChevronRight className="w-4 h-4 ml-4" />
          </div>
        )}
        <BottomGradient />
      </Button>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-brand to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent orange-400 to-transparent" />
    </>
  );
};
