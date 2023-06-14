/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  // distDir: 'dist'
}

module.exports = nextConfig
