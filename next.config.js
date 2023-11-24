/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/(main)?',
        destination: '/main/1',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
