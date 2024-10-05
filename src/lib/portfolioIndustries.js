import { getApolloClient } from './apollo-client';

import {
  QUERY_ALL_WORKCATEGORIES,
  QUERY_WORKCATEGORY_BY_SLUG,
  QUERY_WORKCATEGORY_SEO_BY_SLUG,
} from '../data/portfolioIndustries';

/**
 * portfolioIndustryPathBySlug
 */

export function portfolioIndustryPathBySlug(slug) {
  return `/our-work/industry/${slug}`;
}

/**
 * getAllportfolioIndustries
 */

export async function getAllPortfolioIndustries() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_WORKCATEGORIES,
  });

  const portfolioIndustries = data?.data.portfolioIndustries.edges.map(({ node = {} }) => node);

  return {
    portfolioIndustries,
  };
}

/**
 * getPortfolioIndustryBySlug
 */

export async function getPortfolioIndustryBySlug(slug) {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let portfolioIndustryData;
  let seoData;

  try {
    portfolioIndustryData = await apolloClient.query({
      query: QUERY_WORKCATEGORY_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[categories][getPortfolioIndustryBySlug] Failed to query portfolioIndustry data: ${e.message}`);
    throw e;
  }

  if (!portfolioIndustryData?.data.portfolioIndustry) return { portfolioIndustry: undefined };

  const portfolioIndustry = mapPortfolioIndustryData(portfolioIndustryData?.data.portfolioIndustry);

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await apolloClient.query({
        query: QUERY_WORKCATEGORY_SEO_BY_SLUG,
        variables: {
          slug,
        },
      });
    } catch (e) {
      console.log(`[portfolioIndustries][getPortfolioIndustryBySlug] Failed to query SEO plugin: ${e.message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    const { seo = {} } = seoData?.data?.portfolioIndustry || {};

    portfolioIndustry.title = seo.title;
    portfolioIndustry.description = seo.metaDesc;

    // The SEO plugin by default includes a canonical link, but we don't want to use that
    // because it includes the WordPress host, not the site host. We manage the canonical
    // link along with the other metadata, but explicitly check if there's a custom one
    // in here by looking for the API's host in the provided canonical link

    if (seo.canonical && !seo.canonical.includes(apiHost)) {
      portfolioIndustry.canonical = seo.canonical;
    }

    portfolioIndustry.og = {
      author: seo.opengraphAuthor,
      description: seo.opengraphDescription,
      image: seo.opengraphImage,
      modifiedTime: seo.opengraphModifiedTime,
      publishedTime: seo.opengraphPublishedTime,
      publisher: seo.opengraphPublisher,
      title: seo.opengraphTitle,
      type: seo.opengraphType,
    };

    portfolioIndustry.article = {
      author: portfolioIndustry.og.author,
      modifiedTime: portfolioIndustry.og.modifiedTime,
      publishedTime: portfolioIndustry.og.publishedTime,
      publisher: portfolioIndustry.og.publisher,
    };

    portfolioIndustry.robots = {
      nofollow: seo.metaRobotsNofollow,
      noindex: seo.metaRobotsNoindex,
    };

    portfolioIndustry.twitter = {
      description: seo.twitterDescription,
      image: seo.twitterImage,
      title: seo.twitterTitle,
    };
  }

  return {
    portfolioIndustry,
  };
}

/**
 * getportfolioIndustries
 */

export async function getPortfolioIndustries({ count } = {}) {
  const { portfolioIndustries } = await getAllPortfolioIndustries();
  return {
    portfolioIndustries: portfolioIndustries.slice(0, count),
  };
}

/**
 * mapPortfolioIndustryData
 */

export function mapPortfolioIndustryData(portfolioIndustry = {}) {
  const data = { ...portfolioIndustry };
  return data;
}
