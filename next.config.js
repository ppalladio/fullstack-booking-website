/** @type {import('next').NextConfig} */
const nextConfig = {
	export:"output",
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['avatar.githubusercontent.com', 'lh3.googleusercontent.com','res.cloudinary.com'],
    },
};

module.exports = nextConfig;
