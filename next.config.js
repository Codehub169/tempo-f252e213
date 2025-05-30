/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optional: Add other Next.js configurations here if needed in the future
  // For example, to allow images from external domains:
  // images: {
  //   domains: ['images.unsplash.com'],
  // },
  webpack: (config, { isServer }) => {
    // Allows importing SVG files as React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
