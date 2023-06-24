/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler:{
    styledComponents:true
  },
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}

module.exports = nextConfig
