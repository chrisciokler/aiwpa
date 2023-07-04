const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {

  optimizeFonts: true,

  experimental: {
    optimizeCss: true
  },

  compiler: {
    removeConsole: isProduction,
  },
}

module.exports = nextConfig
