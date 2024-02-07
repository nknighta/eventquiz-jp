/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: process.env.GITHUB_PAGES ? 'cid-expo-quiz': '',
  basePath: process.env.GITHUB_PAGES ? 'cid-expo-quiz': ''
}

module.exports = nextConfig
