const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {

  compiler: {
    removeConsole: isProduction,
  },
}

module.exports = nextConfig
