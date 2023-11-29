/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/(main)?',
        destination: '/main/1?limit=10',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
