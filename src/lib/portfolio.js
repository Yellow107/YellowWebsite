import { getApolloClient } from './apollo-client';

import { updateUserAvatar } from './users';
import { sortObjectsByDate } from './datetime';

import {
  QUERY_ALL_PORTFOLIO_INDEX,
  QUERY_ALL_PORTFOLIO_ARCHIVE,
  QUERY_ALL_PORTFOLIO,
  QUERY_PROJECT_BY_SLUG,
  QUERY_PORTFOLIO_BY_PORTFOLIOINDUSTRY_ID_INDEX,
  QUERY_PORTFOLIO_BY_PORTFOLIOINDUSTRY_ID_ARCHIVE,
  QUERY_PORTFOLIO_BY_PORTFOLIOINDUSTRY_ID,
  QUERY_PROJECT_SEO_BY_SLUG,
  QUERY_PROJECT_PER_PAGE,
  GET_HOME_PAGE_PORTFOLIO,
  QUERY_PORTFOLIOINDUSTRY_BY_ID_FOR_PORTFOLIO,
  GET_RELATED_PORTFOLIO_FOR_PAGES,
} from '@/data/portfolio';

/**
 * projectPathBySlug
 */

export function workPathBySlug(slug) {
  return `/our-work/${slug}`;
}

/**
 * getProjectBySlug
 */

export async function getProjectBySlug(slug) {
  const apolloClient = getApolloClient();

  let projectData;
  let seoData;

  try {
    projectData = await apolloClient.query({
      query: QUERY_PROJECT_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[portfolio][getProjectBySlug] Failed to query project data: ${e.message}`);
    throw e;
  }

  if (!projectData?.data.project) return { project: undefined };

  const project = [projectData?.data.project].map(mapProjectData)[0];

    try {
      seoData = await apolloClient.query({
        query: QUERY_PROJECT_SEO_BY_SLUG,
        variables: {
          slug,
        },
      });
    } catch (e) {
      console.log(`[portfolio][getProjectBySlug] Failed to query SEO plugin: ${e.message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    const { seo = {} } = seoData?.data?.project || {};

    project.metaTitle = seo.title;
    project.metaDescription = seo.metaDesc;
    project.metaImage = seo.opengraphImage

  return {
    project,
  };
}

/**
 * getAllPortfolio
 */

const allPortfolioIncludesTypes = {
  all: QUERY_ALL_PORTFOLIO,
  archive: QUERY_ALL_PORTFOLIO_ARCHIVE,
  index: QUERY_ALL_PORTFOLIO_INDEX,
};

export async function getAllPortfolio(options = {}) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPortfolioIncludesTypes[queryIncludes],
  });

  const portfolio = data?.data.portfolio.edges.map(({ node = {} }) => node);

  return {
    portfolio: Array.isArray(portfolio) && portfolio.map(mapProjectData),
  };
}

/**
 * getPortfolioByProjectPortfolioIndustryId
 */

const portfolioByPortfolioIndustryIdIncludesTypes = {
  all: QUERY_PORTFOLIO_BY_PORTFOLIOINDUSTRY_ID,
  archive: QUERY_PORTFOLIO_BY_PORTFOLIOINDUSTRY_ID_ARCHIVE,
  index: QUERY_PORTFOLIO_BY_PORTFOLIOINDUSTRY_ID_INDEX,
};

export async function getPortfolioByPortfolioIndustryId({ portfolioIndustryId, ...options }) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  let projectData;

  try {
    projectData = await apolloClient.query({
      query: portfolioByPortfolioIndustryIdIncludesTypes[queryIncludes],
      variables: {
        portfolioIndustryId,
      },
    });
  } catch (e) {
    console.log(`[portfolio][getPortfolioByPortfolioIndustryId] Failed to query project data: ${e.message}`);
    throw e;
  }

  const portfolio = projectData?.data.portfolio.edges.map(({ node = {} }) => node);

  return {
    portfolio: Array.isArray(portfolio) && portfolio.map(mapProjectData),
  };
}

/**
 * getPortfolioIndustryByIdForPortfolio
 */

const PortfolioIndustryByIdForPortfolioTypes = {
  all: QUERY_PORTFOLIOINDUSTRY_BY_ID_FOR_PORTFOLIO,
};

export async function getPortfolioIndustryByIdForPortfolio({ portfolioIndustryId, ...options }) {
  const { queryIncludes = 'all' } = options;

  const apolloClient = getApolloClient();

  let projectData;

  try {
    projectData = await apolloClient.query({
      query: PortfolioIndustryByIdForPortfolioTypes[queryIncludes],
      variables: {
        portfolioIndustryId,
      },
    });
  } catch (e) {
    console.log(`[portfolio][getPortfolioIndustryByIdForPortfolio] Failed to query project data: ${e.message}`);
    throw e;
  }

  const portfolio = projectData?.data.portfolioIndustry.portfolio.edges.map(({ node = {} }) => node);

  return {
    portfolio: Array.isArray(portfolio) && portfolio.map(mapProjectData),
  };
}

/**
 * getRecentPortfolio
 */

export async function getRecentPortfolio({ count, ...options }) {
  const { portfolio } = await getAllPortfolio(options);
  const sorted = sortObjectsByDate(portfolio);
  return {
    portfolio: sorted.slice(0, count),
  };
}

/**
 * sanitizeExcerpt
 */

export function sanitizeExcerpt(excerpt) {
  if (typeof excerpt !== 'string') {
    throw new Error(`Failed to sanitize excerpt: invalid type ${typeof excerpt}`);
  }

  let sanitized = excerpt;

  // If the theme includes [...] as the more indication, clean it up to just ...

  sanitized = sanitized.replace(/\s?\[&hellip;\]/, '&hellip;');

  // If after the above replacement, the ellipsis includes 4 dots, it's
  // the end of a setence

  sanitized = sanitized.replace('....', '.');
  sanitized = sanitized.replace('.&hellip;', '.');

  // If the theme is including a "Continue..." link, remove it

  sanitized = sanitized.replace(/\w*<a class="more-link".*<\/a>/, '');

  return sanitized;
}

/**
 * mapProjectData
 */

export function mapProjectData(project = {}) {
  const data = { ...project };

  // Clean up the author object to avoid someone having to look an extra
  // level deeper into the node

  if (data.author) {
    data.author = {
      ...data.author.node,
    };
  }

  // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default

  if (data.author?.avatar) {
    data.author.avatar = updateUserAvatar(data.author.avatar);
  }

  // Clean up the portfolioIndustries to make them more easy to access

  if (data.portfolioIndustries) {
    data.portfolioIndustries = data.portfolioIndustries.edges.map(({ node }) => {
      return {
        ...node,
      };
    });
  }

  if (data.tags) {
    data.tags = data.tags.edges.map(({ node }) => {
      return {
        ...node,
      };
    });
  }

  // Clean up the featured image to make them more easy to access

  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  return data;
}

/**
 * sortStickyPortfolio
 */

export function sortStickyPortfolio(portfolio) {
  return [...portfolio].sort((project) => (project.isSticky ? -1 : 1));
}

/**
 * getPortfolioPerPage
 */

export async function getPortfolioPerPage() {
  //If PROJECT_PER_PAGE is defined at next.config.js
  if (process.env.PORTFOLIO_PER_PAGE) {
    return Number(process.env.PORTFOLIO_PER_PAGE);
  }

  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_PROJECT_PER_PAGE,
    });

    return Number(data.allSettings.readingSettingsPostsPerPage);
  } catch (e) {
    console.log(`Failed to query project per page data: ${e.message}`);
    throw e;
  }
}

/**
 * getPageCount
 */

export async function getPagesCount(portfolio, portfolioPerPage) {
  const _portfolioPerPage = portfolioPerPage ?? (await getPortfolioPerPage());
  return Math.ceil(portfolio.length / _portfolioPerPage);
}

/**
 * getPaginatedPortfolio
 */

export async function getPaginatedPortfolio({ currentPage = 1, ...options } = {}) {
  const { portfolio } = await getAllPortfolio(options);
  const portfolioPerPage = await getPortfolioPerPage();
  const pagesCount = await getPagesCount(portfolio, portfolioPerPage);

  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      portfolio: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = portfolioPerPage * (page - 1);
  const sortedPortfolio = sortStickyPortfolio(portfolio);
  return {
    portfolio: sortedPortfolio.slice(offset, offset + portfolioPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}

// Portfolio for HomePage
export async function getHomePagePortfolio() {

  const apolloClient = getApolloClient();

  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE_PORTFOLIO,
  });

  return data.portfolio.nodes;
}


// Related Portfolio for Pages
export async function getRelatedPortfolioForPages(slug) {

  const apolloClient = getApolloClient();

  const { data } = await apolloClient.query({
    query: GET_RELATED_PORTFOLIO_FOR_PAGES,
    variables: {
      slug,
    },
  });

  return data.page.portfolioForPages.relatedPortfolio.edges;
}