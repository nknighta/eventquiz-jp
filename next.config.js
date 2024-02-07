/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES && '/cid-expo-quiz',
  trailingSlash: true,
  images: { unoptimized: true }
}

module.exports = nextConfig