/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { PROJECT_ID: "2a0x8nrs", DATASET: "production" },
  images: {
    domains: ["cdn.sanity.io", "www.pexels.com"],
  },
};

module.exports = nextConfig;
