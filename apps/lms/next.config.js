/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@repo/lib'],
  eslint: {
    ignoreDuringBuilds: true
  }
}
