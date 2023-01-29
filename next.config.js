// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withSentryConfig(
  nextConfig,
  { dryRun: process.env.VERCEL_ENV !== 'production' },
  { silent: true },
  { hideSourcemaps: true },
  { disableServerWebpackPlugin: true },
  { disableClientWebpackPlugin: true }
)
