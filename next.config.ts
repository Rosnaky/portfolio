import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Forces Next.js to generate static HTML files
  images: {
    unoptimized: true, // Required if using next/image in static export
  },
};

export default nextConfig;
