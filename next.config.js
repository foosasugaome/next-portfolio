/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // white listed image domains
  images: {
    domains: ['www.placecage.com']
  }
}
module.exports = nextConfig
