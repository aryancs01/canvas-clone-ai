import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.unsplash.com"
      },
      {
        protocol:"https",
        hostname:"utfs.io"
      },
      {
        protocol:"https",
        hostname:"replicate.delivery"
      },
      {
        protocol: 'https',
        hostname: '5a06csp71h.ufs.sh',
      },
    ]
  }
};

export default nextConfig;
