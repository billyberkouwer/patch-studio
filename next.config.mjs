/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL:2678400,
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn.sanity.io' }
        ]
    },
    async redirects() {
        return [
            {
                source: '/portfolio',
                destination: '/editorial',
                permanent: true,
            },
            {
                source: '/book-appointment',
                destination: '/bookings',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
