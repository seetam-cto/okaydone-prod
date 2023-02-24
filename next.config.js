/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'media.graphassets.com'],
  },
}

const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = nextConfig
