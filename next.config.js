/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:['ikhlasstore.com',"images.ctfassets.net"]
  }
}

module.exports = nextConfig
