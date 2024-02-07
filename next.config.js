/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: 'https://cidschool.github.io/cid-expo-quiz',
  trailingSlash: true,
  images: { unoptimized: true }
}

module.exports = nextConfig
