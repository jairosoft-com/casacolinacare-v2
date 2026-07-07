import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack doesn't infer a parent dir
  // from an unrelated lockfile (e.g. ~/pnpm-lock.yaml).
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
        // `search` deliberately omitted: the hero src carries a query string
        // (?w=2400&q=80&auto=format&fit=crop) and omission means wildcard.
      },
    ],
  },
};

export default nextConfig;
