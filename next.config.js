/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "i.ibb.co",
            "lh3.googleusercontent.com", // Fix the typo here
            "avatars.githubusercontent.com",
        ],
    },
}

module.exports = nextConfig;
