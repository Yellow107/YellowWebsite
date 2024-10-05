/* eslint-disable no-unused-vars */
const indexSearch = require('./plugins/search-index');
const feed = require('./plugins/feed');
const sitemap = require('./plugins/sitemap');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-156292-4703703.cloudwaysapps.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/homepage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/brand-strategy',
        destination: '/what-we-do/brand-strategy',
        permanent: true,
      },
      {
        source: '/brand-identity',
        destination: '/what-we-do/brand-identity',
        permanent: true,
      },
      {
        source: '/brand-naming',
        destination: '/what-we-do/naming',
        permanent: true,
      },
      {
        source: '/communication',
        destination: '/what-we-do/communication',
        permanent: true,
      },
      {
        source: '/digital',
        destination: '/what-we-do/digital',
        permanent: true,
      },
    ]
  },
  env: {
    POSTS_PRERENDER_COUNT: "10",
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
    WORDPRESS_MENU_LOCATION_NAVIGATION: process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || 'PRIMARY',
    WORDPRESS_PLUGIN_SEO: process.env.WORDPRESS_PLUGIN_SEO,
  },
};

// export default nextConfig;
module.exports = () => {
  const plugins = [indexSearch, feed, sitemap, withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), nextConfig);
};

/**
 * parseEnv
 * @description Helper function to check if a variable is defined and parse booelans
 */

function parseEnvValue(value, defaultValue) {
  if (typeof value === 'undefined') return defaultValue;
  if (value === true || value === 'true') return true;
  if (value === false || value === 'false') return false;
  return value;
}
