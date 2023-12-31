/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "fsladmin.paxcore.ru",
      },
      {
        protocol: "http",
        hostname: "89.111.174.239",
        port: "7777",
        pathname: "/fslight.paxcore.ru/**", // Добавьте ** для соответствия всем путям на этом хосте
      },
    ],
  },
};

module.exports = nextConfig;
