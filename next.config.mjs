/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Cloudflare statik `out/` klasörünü sunar. Güvenlik ve önbellek başlıkları
  // `public/_headers`, `/api/send` ise `worker/index.ts` içindedir.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
