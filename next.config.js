/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts'],
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com'],
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig