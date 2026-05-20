import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/brunch.html",
        destination: "/menu",
        permanent: true,
      },
      {
        source: "/lunch.html",
        destination: "/menu",
        permanent: true,
      },
      {
        source: "/menu.html",
        destination: "/menu",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
