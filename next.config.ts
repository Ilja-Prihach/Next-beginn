import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                // pathname: '/**', // опционально, если нужно ограничить пути
            },
        ],
    }
};

export default nextConfig;
