/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      }
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com'],
  }
}

module.exports = nextConfig