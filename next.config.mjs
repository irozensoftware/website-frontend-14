/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // অথবা সরাসরি unoptimized mode চালু করুন
    unoptimized: true,
  },
  // Security check বন্ধ করার জন্য
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;