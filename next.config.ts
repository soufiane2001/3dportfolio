// next.config.js (or next.config.mjs)
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfoliosoufdev.vercel.app',
        pathname: '/**',
      },   {
        protocol: 'https',
        hostname: 'https://slelguoygbfzlpylpxfs.supabase.co/',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
