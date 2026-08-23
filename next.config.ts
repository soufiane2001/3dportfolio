import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "soufianeboutatss.sbs" }],
        destination: "https://www.soufianeboutatss.sbs/:path*",
        permanent: true,
      },
      {
        source: "/creation-site-internet-casablanca",
        destination: "/creation-site-web-casablanca",
        permanent: true,
      },
      { source: "/referencement-seo-casablanca", destination: "/casablanca/seo", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "soufianeboutatssdev.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "slelguoygbfzlpylpxfs.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
