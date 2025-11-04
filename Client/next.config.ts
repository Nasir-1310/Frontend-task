import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'accountants-society-latest-news.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // For Unsplash images
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // CRITICAL: For avatar images
      },
    ],
  },
};

export default nextConfig;