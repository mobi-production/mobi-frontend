/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    ACADEMY_APPLY_FORM_URL: process.env.ACADEMY_APPLY_FORM_URL
  },
  transpilePackages: ['@repo/lib'],
  eslint: {
    ignoreDuringBuilds: true
  }
}
