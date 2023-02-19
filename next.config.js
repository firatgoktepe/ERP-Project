// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Filter out default Next.js CSS rules:
    config.module.rules = config.module.rules.filter((r) => !r.oneOf)

    // Add your own rules

    config.module.rules.push({
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    })
    return config
  },
}

module.exports = withSentryConfig(
  nextConfig,
  { dryRun: process.env.VERCEL_ENV !== 'production' },
  { silent: true },
  { hideSourceMaps: true },
  { disableServerWebpackPlugin: true },
  { disableClientWebpackPlugin: true }
)
