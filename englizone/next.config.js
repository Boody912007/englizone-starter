/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Add your Bunny Stream / CDN hostname here once provisioned, e.g.:
      // { protocol: "https", hostname: "*.b-cdn.net" },
    ],
  },
};

module.exports = nextConfig;
