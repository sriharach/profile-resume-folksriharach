import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    WISDOM_DOMAIN: process.env.WISDOM_DOMAIN,
    WISDOM_MANAGEMENT_DOMAIN: process.env.WISDOM_MANAGEMENT_DOMAIN,
    IMAGE_CONVERTER_DOMAIN: process.env.IMAGE_CONVERTER_DOMAIN,
    OPEN_API_DOMAIN: process.env.OPEN_API_DOMAIN,
    URL_LINKEDIN: process.env.URL_LINKEDIN,
    URL_GITHUB: process.env.URL_GITHUB,
  },
}

export default withNextIntl(nextConfig)
