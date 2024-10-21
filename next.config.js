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
        hostname: 'wordpress.welcometoyellow.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/brand-communication-agency-post-pandemic',
        destination: '/4-truths-to-know-about-brand-communication-in-a-post-pandemic-world',
        permanent: true,
      },
      {
        source: '/our-work/category/childrens-experiences',
        destination: '/our-work/industry/childrens-experiences',
        permanent: true,
      },
      {
        source: '/our-work/category/fmcg',
        destination: '/our-work/industry/fmcg',
        permanent: true,
      },
      {
        source: '/our-work/category/healthcare',
        destination: '/our-work/industry/healthcare',
        permanent: true,
      },
      {
        source: '/our-work/category/hospitality',
        destination: '/our-work/industry/hospitality',
        permanent: true,
      },
      {
        source: '/our-work/category/luxury',
        destination: '/our-work/industry/luxury',
        permanent: true,
      },
      {
        source: '/our-work/category/retail',
        destination: '/our-work/industry/retail',
        permanent: true,
      },
      {
        source: '/blog/brand-image-of-santa-claus',
        destination: '/brand-image-of-santa-claus',
        permanent: true,
      },
      {
        source: '/blog/dubai-design-week-2018',
        destination: '/dubai-design-week-2018',
        permanent: true,
      },
      {
        source: '/blog/when-rebranding-works-it-works',
        destination: '/when-rebranding-works-it-works',
        permanent: true,
      },
    ]
  },
  env: {
    PORTFOLIO_PER_PAGE: "9",
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
