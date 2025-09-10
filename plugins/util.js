/* eslint-disable no-unused-vars */
const fs = require('fs');
const he = require('he');
const { gql, ApolloClient, InMemoryCache } = require('@apollo/client');
const RSS = require('rss');
const prettier = require('prettier');

const config = require('../package.json');

/**
 * createFile
 */

async function createFile(file, process, directory, location, verbose = false) {
  try {
    mkdirp(directory);
    verbose && console.log(`[${process}] Created directory ${directory}`);
    await promiseToWriteFile(location, file);
    verbose && console.log(`[${process}] Successfully wrote file to ${location}`);
  } catch (e) {
    throw new Error(`[${process}] Failed to create file: ${e.message}`);
  }
}

/**
 * promiseToWriteFile
 */

function promiseToWriteFile(location, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(location, content, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

/**
 * mkdirp
 */

function mkdirp(directory) {
  const split = directory.split('/');
  let temp = '.';

  split.forEach((dir) => {
    temp = `${temp}/${dir}`;

    if (!fs.existsSync(temp)) {
      fs.mkdirSync(temp);
    }
  });
}

/**
 * createApolloClient
 */

function createApolloClient(url) {
  return new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
  });
}

/**
 * getAllPosts
 */

async function getAllPosts(apolloClient, process, verbose = false) {
  const query = gql`
    {
      posts(first: 10000) {
        edges {
          node {
            title
            excerpt
            slug
            date
            categories {
              edges {
                node {
                  name
                }
              }
            }
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
            contentType {
              node {
                label
              }
            }
          }
        }
      }
    }
  `;

  let posts = [];

  try {
    const data = await apolloClient.query({ query });
    const nodes = [...data.data.posts.edges.map(({ node = {} }) => node)];

    posts = nodes.map((post) => {
      const data = { ...post };

      if (data.author) {
        data.author = data.author.node.name;
      }

      if (data.categories) {
        data.categories = data.categories.edges.map(({ node }) => node.name);
      }

      if (data.excerpt) {
        //Sanitize the excerpt by removing all HTML tags
        const regExHtmlTags = /(<([^>]+)>)/g;
        data.excerpt = data.excerpt.replace(regExHtmlTags, '');
      }

      return data;
    });

    verbose && console.log(`[${process}] Successfully fetched posts from ${apolloClient.link.options.uri}`);
    return {
      posts,
    };
  } catch (e) {
    throw new Error(`[${process}] Failed to fetch posts from ${apolloClient.link.options.uri}: ${e.message}`);
  }
}

/**
 * getAllSearchPosts
 */

async function getAllSearchPosts(apolloClient, process, verbose = false) {
  const query = gql`
    {
      posts(first: 10000) {
        edges {
          node {
            title
            slug
            date
            categories {
              edges {
                node {
                  name
                }
              }
            }
            contentType {
              node {
                label
              }
            }
          }
        }
      }
      pages(first: 10000, where: {notIn: "homepage"}) {
        edges {
          node {
            title
            slug
            date
            contentType {
              node {
                label
              }
            }
          }
        }
      }
      portfolio(first: 10000) {
        edges {
          node {
            title
            slug
            date
            portfolioIndustries {
              edges {
                node {
                  name
                }
              }
            }
            contentType {
              node {
                label
              }
            }
          }
        }
      }
    }
  `;

  let posts = [];

  try {
    const data = await apolloClient.query({ query });

    // Combine posts, pages, and portfolios
    const postsNodes = data.data.posts.edges.map(({ node }) => node);
    const pagesNodes = data.data.pages.edges.map(({ node }) => node);
    const portfoliosNodes = data.data.portfolio.edges.map(({ node }) => node);

    const allNodes = [...postsNodes, ...pagesNodes, ...portfoliosNodes];

    posts = allNodes.map((post) => {
      const data = { ...post };

      if (data.portfolioIndustries) {
        data.portfolioIndustries = data.portfolioIndustries.edges.map(({ node }) => node.name);
      }

      if (data.excerpt) {
        // Sanitize the excerpt by removing all HTML tags
        const regExHtmlTags = /(<([^>]+)>)/g;
        data.excerpt = data.excerpt.replace(regExHtmlTags, '');
      }

      return data;
    });

    verbose &&
      console.log(
        `[${process}] Successfully fetched posts, pages, and portfolios from ${apolloClient.link.options.uri}`
      );

    return {
      posts,
    };
  } catch (e) {
    throw new Error(
      `[${process}] Failed to fetch data from ${apolloClient.link.options.uri}: ${e.message}`
    );
  }
}


/**
 * getSiteMetadata
 */

async function getSiteMetadata(apolloClient, process, verbose = false) {
  const query = gql`
    {
      generalSettings {
        description
        language
        title
      }
    }
  `;

  let metadata = {};

  try {
    const data = await apolloClient.query({ query });
    metadata = { ...data.data.generalSettings };

    if (!metadata.language || metadata.language === '') {
      metadata.language = 'en';
    } else {
      metadata.language = metadata.language.split('_')[0];
    }

    verbose && console.log(`[${process}] Successfully fetched metadata from ${apolloClient.link.options.uri}`);
    return {
      metadata,
    };
  } catch (e) {
    throw new Error(`[${process}] Failed to fetch metadata from ${apolloClient.link.options.uri}: ${e.message}`);
  }
}

/**
 * getSitePages
 */

async function getPages(apolloClient, process, verbose = false) {
  const query = gql`
    {
      pages(first: 10000) {
        edges {
          node {
            slug
            modified
          }
        }
      }
    }
  `;

  let pages = [];

  try {
    const data = await apolloClient.query({ query });
    pages = [
      ...data.data.pages.edges.map(({ node = {} }) => {
        return {
          slug: node.slug,
          modified: node.modified,
        };
      }),
    ];

    verbose && console.log(`[${process}] Successfully fetched page slugs from ${apolloClient.link.options.uri}`);
    return {
      pages,
    };
  } catch (e) {
    throw new Error(`[${process}] Failed to fetch page slugs from ${apolloClient.link.options.uri}: ${e.message}`);
  }
}

/**
 * getPortfolio
 */

async function getPortfolio(apolloClient, process, verbose = false) {
  const query = gql`
    {
      portfolio(first: 10000) {
        edges {
          node {
            slug
            modified
          }
        }
      }
    }
  `;

  let portfolio = [];

  try {
    const data = await apolloClient.query({ query });
    portfolio = [
      ...data.data.portfolio.edges.map(({ node = {} }) => {
        return {
          slug: node.slug,
          modified: node.modified,
        };
      }),
    ];

    verbose && console.log(`[${process}] Successfully fetched project slugs from ${apolloClient.link.options.uri}`);
    return {
      portfolio,
    };
  } catch (e) {
    throw new Error(`[${process}] Failed to fetch project slugs from ${apolloClient.link.options.uri}: ${e.message}`);
  }
}

/**
 * getTeams
 */

async function getTeams(apolloClient, process, verbose = false) {
  const query = gql`
    {
      teams(first: 10000) {
        edges {
          node {
            slug
            modified
          }
        }
      }
    }
  `;

  let teams = [];

  try {
    const data = await apolloClient.query({ query });
    teams = [
      ...data.data.teams.edges.map(({ node = {} }) => {
        return {
          slug: node.slug,
          modified: node.modified,
        };
      }),
    ];

    verbose && console.log(`[${process}] Successfully fetched team slugs from ${apolloClient.link.options.uri}`);
    return {
      teams,
    };
  } catch (e) {
    throw new Error(`[${process}] Failed to fetch team slugs from ${apolloClient.link.options.uri}: ${e.message}`);
  }
}

/**
 * getCategories
 */

async function getCategories(apolloClient, process, verbose = false) {
  const query = gql`
    {
      categories(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;

  let categories = [];

  try {
    const data = await apolloClient.query({ query });
    categories = [
      ...data.data.categories.edges.map(({ node = {} }) => {
        return {
          slug: node.slug,
        };
      }),
    ];

    verbose && console.log(`[${process}] Successfully fetched category slugs from ${apolloClient.link.options.uri}`);
    return {
      categories,
    };
  } catch (e) {
    throw new Error(`[${process}] Failed to fetch category slugs from ${apolloClient.link.options.uri}: ${e.message}`);
  }
}

/**
 * getIndustries
 */

async function getPortfolioIndustries(apolloClient, process, verbose = false) {
  const query = gql`
    {
      portfolioIndustries(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;

  let  portfolioIndustries = [];

  try {
    const data = await apolloClient.query({ query });
    portfolioIndustries = [
      ...data.data.portfolioIndustries.edges.map(({ node = {} }) => {
        return {
          slug: node.slug,
        };
      }),
    ];

    verbose && console.log(`[${process}] Successfully fetched category slugs from ${apolloClient.link.options.uri}`);
    return {
      portfolioIndustries,
    };
  } catch (e) {
    throw new Error(`[${process}] Failed to fetch category slugs from ${apolloClient.link.options.uri}: ${e.message}`);
  }
}


/**
 * generateIndexSearch
 */

function generateIndexSearch({ posts }) {
  const index = posts.map((post = {}) => {
    const title = he.decode(post.title);

    return {
      title,
      slug: post.slug,
      date: post.date,
      excerpt: post.excerpt,
      contentType: post.contentType.node.label, // Will now include 'Page' and 'Portfolio' types
    };
  });

  const indexJson = JSON.stringify({
    generated: Date.now(),
    posts: index,
  });

  return indexJson;
}

/**
 * getFeedData
 */

async function getFeedData(apolloClient, process, verbose = false) {
  const metadata = await getSiteMetadata(apolloClient, process, verbose);
  const posts = await getAllPosts(apolloClient, process, verbose);
  return {
    ...metadata,
    ...posts,
  };
}

/**
 * getSitemapData
 */

async function getSitemapData(apolloClient, process, verbose = false) {
  const posts = await getAllPosts(apolloClient, process, verbose);
  const pages = await getPages(apolloClient, process, verbose);
  const portfolio = await getPortfolio(apolloClient, process, verbose);
  const teams = await getTeams(apolloClient, process, verbose);
  const categories = await getCategories(apolloClient, process, verbose);
  const portfolioIndustries = await getPortfolioIndustries(apolloClient, process, verbose);

  return {
    ...posts,
    ...pages,
    ...portfolio,
    ...teams,
    ...categories,
    ...portfolioIndustries,
  };
}

/**
 * generateFeed
 */

function generateFeed({ posts = [], metadata = {} }) {
  const { homepage = '' } = config;

  const feed = new RSS({
    title: metadata.title || '',
    description: metadata.description,
    site_url: homepage,
    feed_url: `${homepage}/feed.xml`,
    copyright: `${new Date().getFullYear()} ${metadata.title}`,
    language: metadata.language,
    pubDate: new Date(),
  });

  posts.map((post) => {
    feed.item({
      title: post.title,
      guid: `${homepage}/${post.slug}`,
      url: `${homepage}/${post.slug}`,
      date: post.date,
      description: post.excerpt,
      author: post.author,
      categories: post.categories || [],
    });
  });

  return feed.xml({ indent: true });
}

/**
 * generateSitemap
 */

function generateSitemap({ posts = [], portfolio = [], teams = [], categories = [], portfolioIndustries = [] }, nextConfig = {}) {
  const { homepage = '' } = config;
  const { trailingSlash } = nextConfig;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${homepage}</loc>
        <priority>1</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/about-us</loc>
        <priority>0.9</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/what-we-do</loc>
        <priority>0.9</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/what-we-do/brand-strategy</loc>
        <priority>0.9</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/what-we-do/brand-identity</loc>
        <priority>0.9</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/what-we-do/naming</loc>
        <priority>0.9</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/what-we-do/communication</loc>
        <priority>0.9</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/what-we-do/digital</loc>
        <priority>0.9</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/our-work</loc>
        <priority>0.9</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/careers</loc>
        <priority>0.9</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/careers/career-detail</loc>
        <priority>0.9</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/blog</loc>
        <priority>0.9</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/contact-us</loc>
        <priority>0.9</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
          ${posts
            .map((post) => {
              const modifiedDate = post.modified ? new Date(post.modified).toISOString() : new Date().toISOString();
              return `<url>
                        <loc>${homepage}/${post.slug}${trailingSlash ? '/' : ''}</loc>
                        <priority>0.7</priority>
                        <lastmod>${modifiedDate}</lastmod>
                      </url>
                  `;
            })
            .join('')}
          ${portfolio
            .map((project) => {
              const modifiedDate = project.modified ? new Date(project.modified).toISOString() : new Date().toISOString();
              return `<url>
                        <loc>${homepage}/our-work/${project.slug}${trailingSlash ? '/' : ''}</loc>
                        <priority>0.7</priority>
                        <lastmod>${modifiedDate}</lastmod>
                      </url>
                  `;
            })
            .join('')}
          ${teams
            .map((team) => {
              const modifiedDate = team.modified ? new Date(team.modified).toISOString() : new Date().toISOString();
              return `<url>
                        <loc>${homepage}/teams/${team.slug}${trailingSlash ? '/' : ''}</loc>
                        <priority>0.7</priority>
                        <lastmod>${modifiedDate}</lastmod>
                      </url>
                  `;
            })
            .join('')}
          ${categories
            .map((category) => {
              const modifiedDate = category.modified ? new Date(category.modified).toISOString() : new Date().toISOString();
              return `<url>
                        <loc>${homepage}/category/${category.slug}${trailingSlash ? '/' : ''}</loc>
                        <priority>0.7</priority>
                        <lastmod>${modifiedDate}</lastmod>
                      </url>
                  `;
            })
            .join('')}
          ${portfolioIndustries
            .map((industry) => {
              const modifiedDate = industry.modified ? new Date(industry.modified).toISOString() : new Date().toISOString();
              return `<url>
                        <loc>${homepage}/our-work/industry/${industry.slug}${trailingSlash ? '/' : ''}</loc>
                        <priority>0.7</priority>
                        <lastmod>${modifiedDate}</lastmod>
                      </url>
                  `;
            })
            .join('')}
    </urlset>
    `;

  const sitemapFormatted = prettier.format(sitemap, {
    printWidth: 120,
    parser: 'html',
  });

  return sitemapFormatted;
}

/**
 * generateRobotsTxt
 */

async function generateRobotsTxt({ outputDirectory, outputName }) {
  const { homepage = '' } = config;

  try {
    // Build sitemap URL at root directory
    let sitemapUrl = new URL(outputName, homepage);

    // Check if output directory is not root directory
    if (outputDirectory !== './public') {
      // Check if output directory is within './public' folder
      if (outputDirectory.startsWith('./public')) {
        // Update sitemap URL with new directory
        sitemapUrl.pathname = resolvePublicPathname(outputDirectory, outputName);
      } else {
        throw new Error('Sitemap should be within ./public folder.');
      }
    }

    // Robots content using sitemap final URL
    const robots = `User-agent: *\nSitemap: ${sitemapUrl}`;

    // Create robots.txt always at root directory
    await createFile(robots, 'Robots.txt', './public', './public/robots.txt');
  } catch (e) {
    throw new Error(`[Robots.txt] Failed to create robots.txt: ${e.message}`);
  }
}

/**
 * resolvePathname
 */

function resolvePublicPathname(outputDirectory, outputName) {
  const directory = outputDirectory.split('/');
  const index = directory.indexOf('public');
  const path = directory
    .map((path, i) => {
      // If actual folder is a 'public' direct subfolder and is not empty, add to pathname
      if (i > index && path) {
        return `/${path}`;
      }
    })
    .join('');

  return `${path}/${outputName}`;
}

/**
 * removeLastTrailingSlash
 */

function removeLastTrailingSlash(url) {
  if (typeof url !== 'string') return url;
  return url.replace(/\/$/, '');
}

/**
 * terminalColor
 */

function terminalColor(text, level) {
  switch (level) {
    /** green */
    case 'info':
    default:
      return `\x1b[32m${text}\x1b[0m`;
    /** yellow */
    case 'warn':
      return `\x1b[33m${text}\x1b[0m`;
    /** red */
    case 'error':
      return `\x1b[31m${text}\x1b[0m`;
  }
}

module.exports = {
  createFile,
  promiseToWriteFile,
  mkdirp,
  createApolloClient,
  getAllPosts,
  getPages,
  getPortfolio,
  getTeams,
  getAllSearchPosts,
  generateIndexSearch,
  getCategories,
  getPortfolioIndustries,
  getSiteMetadata,
  getFeedData,
  generateFeed,
  getSitemapData,
  generateSitemap,
  generateRobotsTxt,
  removeLastTrailingSlash,
  resolvePublicPathname,
  terminalColor,
};
