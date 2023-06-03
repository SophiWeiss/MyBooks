/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.creativecommons.org',
        port: '',
        pathname: '/l/by-nc-nd/4.0/88x31.png'
      }
    ]
  }
}

module.exports = nextConfig
