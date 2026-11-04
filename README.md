# Bonito

Bonito Reklam Ajansı'nın web sitesi. Next.js 16, React 19, Tailwind CSS, GSAP ve
3B klavye sahnesi için `@chibi3d/runtime` kullanır.

Bu site, Naresh Khatri'nin MIT lisanslı
[3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio) projesinden
uyarlanmıştır. Lisans metni `LICENSE` dosyasındadır ve korunmalıdır.

## Çalıştırma

Node.js 20.9+ ve Corepack gerekir.

```bash
corepack pnpm install
corepack pnpm dev
```

`pnpm dev` iletişim formunu çalıştırmaz, çünkü form Cloudflare Worker'ındadır.
Formla birlikte denemek için `.dev.vars` dosyasına `RESEND_API_KEY` yazın:

```bash
corepack pnpm build
corepack pnpm dlx wrangler dev
```

Kontroller:

```bash
corepack pnpm lint
corepack pnpm typecheck
```

## Yayın (Cloudflare Workers)

Site `out/` klasörüne statik olarak derlenir ve `wrangler.toml` ile Worker'a
yüklenir. Worker projesini GitHub reposuna bağlarken şu ayarları kullanın:

| Ayar | Değer |
|---|---|
| Build command | `pnpm run build` |
| Deploy command | `npx wrangler deploy` |
| Gizli değişken | `RESEND_API_KEY` |

`wrangler.toml` içindeki `name`, Cloudflare'deki Worker adıyla aynı olmalıdır.
Güvenlik ve önbellek başlıkları `public/_headers`, iletişim formu
`worker/index.ts` içindedir.

## İçerik

| Dosya | İçerik |
|---|---|
| `src/data/config.ts` | Ad, e-posta, alan adı, sosyal medya, SEO metinleri |
| `src/data/constants.ts` | Hizmetler (3B klavye tuşları), süreç adımları |
| `src/data/projects.ts` | "Neler Üretiyoruz" kartları |
| `public/assets/work/` | Kart görselleri |
| `public/assets/services/` | Hizmet ikonları (renkli, HTML ızgarası) |
| `public/assets/keyboard/logos/` | Hizmet ikonları (beyaz, 3B tuşlar) |

Tuş başlıkları 3B metin olarak çizilir ve bu fontun ölçü tablosu yalnızca ASCII
karakterleri kapsar: `label` alanlarında ç, ğ, ı, İ, ö, ş, ü kullanmayın.
`shortDescription` alanında kullanabilirsiniz.

`skills`, `projects` ve `contact` bölüm kimlikleri klavye animasyonuna bağlıdır;
değiştirmeyin.
