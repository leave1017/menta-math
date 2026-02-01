import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce trailing slash for all URLs
  // /practice will redirect to /practice/
  trailingSlash: true,
};

export default nextConfig;
