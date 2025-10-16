/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Remove standalone for Netlify
  // output: 'standalone',
}

module.exports = nextConfig
