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
        destination: 'http://localhost/blogs/:path*'
      }
    ]
  }
}

const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = nextConfig
