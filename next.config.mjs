/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wp.com-estate.com",
            },
        ],
    },
};

export default nextConfig;
