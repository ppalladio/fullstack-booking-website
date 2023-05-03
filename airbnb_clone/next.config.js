/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['avatar.githubusercontent.com'],
    },
};

module.exports = nextConfig;
