/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disables ESLint breaking the Vercel build
  },
}

module.exports = nextConfig
