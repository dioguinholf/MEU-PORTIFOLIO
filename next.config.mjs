// Gera um site 100% estático na pasta "out", pronto para GitHub Pages ou Vercel.
// Em repositório de projeto no GitHub Pages, defina NEXT_PUBLIC_BASE_PATH=/nome-do-repo
// (o workflow em .github/workflows/deploy.yml já faz isso).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
