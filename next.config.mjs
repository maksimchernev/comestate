/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "wp.com-estate.com",
            },
        ],
    },
};

export default nextConfig;
