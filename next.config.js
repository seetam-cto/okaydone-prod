/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'media.graphassets.com', 'picsum.photos'],
  },
  async rewrites(){
    return [
      {
        source: '/blogs/:path*',
        destination: 'https://blogs.okaydone.in/:path*'
      }
    ]
  }
}

const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = nextConfig
