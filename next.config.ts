import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  // Fix for "Detected multiple lockfiles" warning
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
