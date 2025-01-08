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
        source: '/4-truths-to-know-about-brand-communication-in-a-post-pandemic-world',
        destination: '/brand-communication-agency-post-pandemic',
        permanent: true,
      },
      {
        source: '/3-ways-brands-can-provide-value-during-turbulent-times',
        destination: '/best-branding-agency-dubai-providing-value-turbulent-times',
        permanent: true,
      },
      {
        source: '/5-proven-tips-for-creating-a-successful-brand-communication-strategy',
        destination: '/brand-development-in-dubai-tips-communication-strategy',
        permanent: true,
      },
      {
        source: '/4-marketing-mistakes-to-avoid-during-and-after-the-coronavirus-crisis',
        destination: '/dubai-best-marketing-agency-marketing-tips-coronavirus',
        permanent: true,
      },
      {
        source: '/menu-design-in-the-era-of-online-ordering-and-takeout-dining',
        destination: '/menu-design-guide-online-ordering-takeout',
        permanent: true,
      },
      {
        source: '/a-guide-to-choosing-your-businesss-best-brand-touchpoints',
        destination: '/brand-strategy-guide-to-touchpoints',
        permanent: true,
      },
      {
        source: '/how-to-boost-brand-awareness-through-employee-engagement',
        destination: '/employee-engagement-tips-brand-strategy-agency-dubai',
        permanent: true,
      },
      {
        source: '/a-guide-to-digital-media-planning-in-the-era-of-the-informed-customer',
        destination: '/guide-digital-media-planning-marketing-strategy-in-dubai',
        permanent: true,
      },
      {
        source: '/brand-strategy-Dubai-marketing-brand-identity',
        destination: '/building-a-strong-brand-identity-key-elements-and-strategies',
        permanent: true,
      },
      {
        source: '/3-lessons-from-the-most-legendary-rebranding-campaigns-of-all-time',
        destination: '/lessons-branding-agency-can-use-rebranding-success',
        permanent: true,
      },
      {
        source: '/rebranding-done-right-successful-case-studies-and-lessons-learned',
        destination: '/when-rebranding-works-it-works',
        permanent: true,
      },
      {
        source: '/hue-are-you-using-color-theory-to-create-a-brand-persona',
        destination: '/hue-are-you-use-color-theory-brand-persona-visual-identity',
        permanent: true,
      },
      {
        source: '/social-media-solution-commerce',
        destination: '/social-commerce-is-here-to-stay-are-you-ready',
        permanent: true,
      },
      {
        source: '/signs-rebranding-time-change-brand-identity',
        destination: '/building-a-strong-brand-identity-key-elements-and-strategies',
        permanent: true,
      },
      {
        source: '/winning-brand-strategy-agency-dubai',
        destination: '/the-hows-and-whys-of-building-a-winning-brand-strategy',
        permanent: true,
      },
      {
        source: '/top-marketing-company-in-dubai-trends/',
        destination: '/2019s-top-5-marketing-trends-that-are-here-to-stay',
        permanent: true,
      },
      {
        source: '/top-marketing-company-in-dubai-trends',
        destination: '/2019s-top-5-marketing-trends-that-are-here-to-stay',
        permanent: true,
      },
      {
        source: '/brand-strategy-Dubai-marketing-brand-identity/',
        destination: '/building-a-strong-brand-identity-key-elements-and-strategies',
        permanent: true,
      },
      {
        source: '/marketing-companies-uae-tips-creating-go-to-marketing-strategies',
        destination: '/a-bitesize-guide-for-developing-a-new-product-go-to-market-strategy',
        permanent: true,
      },
      {
        source: '/social-media-solution-commerce/',
        destination: '/social-commerce-is-here-to-stay-are-you-ready',
        permanent: true,
      },
      {
        source: '/our-work/category/childrens-experiences',
        destination: '/our-work/industry/childrens-experiences',
        permanent: true,
      },
      {
        source: '/blog/page/4/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/our-work/category/:slug',
        destination: '/our-work/industry/:slug',
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
      {
        source: '/service/:slug',
        source: '/what-we-do',
        permanent: true,
      },
      {
        source: '/blog-gameofthronescampaigns',
        source: '/game-of-thrones-campaigns',
        permanent: true,
      },
      {
        source: '/blog-rebranding',
        source: '/thinking-of-rebranding',
        permanent: true,
      },
      {
        source: '/teams/gunjan-mathur',
        source: '/teams/gunjan',
        permanent: true,
      },
      {
        source: '/project/:slug',
        source: '/our-work/:slug',
        permanent: true,
      },
      {
        source: '/tag/:slug',
        source: '/',
        permanent: true,
      },
      {
        source: '/author/:slug',
        source: '/',
        permanent: true,
      },
      {
        source: '/job/:slug',
        source: '/careers/:slug',
        permanent: true,
      },
      {
        source: '/portfolio-industry/:slug',
        source: '/our-work/industry/:slug',
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
