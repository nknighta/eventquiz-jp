/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  output  : 'export',
  trailingSlash  : true,
  images  : { unoptimized  : true },
  assetPrefix  : process.env.GITHUB_PAGES ? '/cid-expo-quiz'   : '',
}

module.exports = nextConfig
