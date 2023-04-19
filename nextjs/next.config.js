/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
    runtime: "experimental-edge"
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
