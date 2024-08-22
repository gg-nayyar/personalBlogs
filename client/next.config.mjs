/** @type {import('next').NextConfig} */
// import background from './public/background'
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "printmag.com",
      },
    ],
  },
};

export default nextConfig;
