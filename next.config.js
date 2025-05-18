/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  output  : 'export',
  trailingSlash  : true,
  images  : { unoptimized  : true },
  assetPrefix  : process.env.GITHUB_PAGES ? '/eventeuiz-jp'   : '',
}

module.exports = nextConfig
