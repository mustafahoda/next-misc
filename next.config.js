/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/home',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
