/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript during production builds
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  experimental: {
    // Enable if needed for app directory
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    // Make webpack more permissive
    config.resolve.preferRelative = true;
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    });
    return config;
  }
}

module.exports = nextConfig 