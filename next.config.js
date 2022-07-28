/**
 * @type {import('next').NextConfig}
 * @author ArreyChan
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    IMG_HOST: process.env.IMG_HOST,
    IMG_HOSTNAME: process.env.IMG_HOSTNAME
  },
  images: {
    domains: [process.env.IMG_HOSTNAME]
  }
};

module.exports = nextConfig;
