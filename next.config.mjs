/** @type {{reactStrictMode: boolean, experimental: {runtime: string}, swcMinify: boolean}} */
const nextConfig = {
    experimental: {
        runtime: 'experimental-edge',
    },
    reactStrictMode: true,
    swcMinify: true,
}
module.exports = nextConfig
