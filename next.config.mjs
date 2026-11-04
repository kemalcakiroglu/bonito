/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Cloudflare Pages statik `out/` klasörünü sunar. Güvenlik ve önbellek
  // başlıkları `public/_headers`, `/api/send` ise `functions/api/send.ts` içindedir.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
