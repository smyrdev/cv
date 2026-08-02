/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — required for GitHub Pages, which serves static files only.
  output: 'export',

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize images. The on-demand optimizer needs a server, so it is disabled
  // for the static export; images are served as-is from their source URL.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },

  // Compress output
  compress: true,

  // NOTE: the previous `headers()` block was removed. Custom headers require a
  // server and are unsupported with `output: 'export'`; GitHub Pages serves its
  // own fixed headers and cannot be configured. Security headers are set via
  // <meta> where an equivalent exists, otherwise they are unavailable on Pages.

  // Reduce bundle size by excluding source maps in production
  productionBrowserSourceMaps: false,

  // PoweredByHeader removes the X-Powered-By header
  poweredByHeader: false,
}

module.exports = nextConfig