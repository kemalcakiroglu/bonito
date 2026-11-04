import { z } from "zod";
import { config } from "../../src/data/config";

// Cloudflare Pages Function: statik çıktıda Next.js route handler çalışmadığı
// için iletişim formu `/api/send` adresini buradan karşılar.
type Env = { RESEND_API_KEY?: string };

// Yalnızca aynı Worker örneği içinde geçerlidir: kaba bir fren, kesin sınır değil.
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const Email = z.object({
  fullName: z.string().min(2, "Ad soyad geçersiz."),
  email: z.string().email({ message: "E-posta geçersiz." }),
  message: z.string().min(10, "Mesaj çok kısa."),
});

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const onRequestPost = async ({
  request,
  env,
}: {
  request: Request;
  env: Env;
}) => {
  try {
    const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin." },
        { status: 429 }
      );
    }

    const parsed = Email.safeParse(await request.json());
    if (!parsed.success) {
      return Response.json({ error: parsed.error.message }, { status: 400 });
    }
    const { fullName, email, message } = parsed.data;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Bonito Web <onboarding@resend.dev>",
        to: [config.email],
        reply_to: email,
        subject: "Web sitesinden yeni mesaj",
        html: `<h1>Gönderen: ${escapeHtml(fullName)}</h1><p>${escapeHtml(email)} size bir mesaj gönderdi</p><blockquote>${escapeHtml(message)}</blockquote>`,
      }),
    });

    if (!response.ok) {
      return Response.json({ error: "E-posta gönderilemedi" }, { status: 500 });
    }
    return Response.json(await response.json());
  } catch {
    return Response.json({ error: "E-posta gönderilemedi" }, { status: 500 });
  }
};
