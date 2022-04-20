/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // white listed image domains
  images: {
    domains: ['www.placecage.com','raw.githubusercontent.com']
  }
}
module.exports = nextConfig
