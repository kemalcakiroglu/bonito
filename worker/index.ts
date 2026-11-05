import { z } from "zod";
import { config } from "../src/data/config";

// Cloudflare Worker: statik çıktıda Next.js route handler çalışmadığı için
// iletişim formu `/api/send` adresini buradan karşılar. Diğer her istek
// `out/` klasöründeki statik dosyalara gider (bkz. wrangler.toml).
type Env = {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  RESEND_API_KEY?: string;
};

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

// `code` gizli bilgi içermez, yalnızca sorunun türünü söyler; ayrıntı Worker günlüğündedir.
const sendFailed = (code: string) =>
  Response.json({ error: "E-posta gönderilemedi", code }, { status: 500 });

const handleSend = async (request: Request, env: Env) => {
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

    if (!env.RESEND_API_KEY) return sendFailed("missing_api_key");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Bonito Web <${config.email}>`,
        to: [config.email],
        reply_to: email,
        subject: "Web sitesinden yeni mesaj",
        html: `<h1>Gönderen: ${escapeHtml(fullName)}</h1><p>${escapeHtml(email)} size bir mesaj gönderdi</p><blockquote>${escapeHtml(message)}</blockquote>`,
      }),
    });

    if (!response.ok) {
      console.error("Resend hatası", response.status, await response.text());
      return sendFailed(`resend_${response.status}`);
    }
    return Response.json(await response.json());
  } catch (error) {
    console.error("Form hatası", error);
    return sendFailed("unexpected");
  }
};

export default {
  fetch(request: Request, env: Env) {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/send") {
      if (request.method !== "POST") {
        return new Response(null, { status: 405, headers: { Allow: "POST" } });
      }
      return handleSend(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
