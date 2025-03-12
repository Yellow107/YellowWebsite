import { gql } from '@apollo/client';

export const PROJECT_FIELDS = gql`
  fragment ProjectFields on Project {
    id
    portfolioIndustries {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
    workFields {
      featuredImagevideo {
        node {
          mediaItemUrl
        }
      }
    }
    databaseId
    date
    projectId
    slug
    title
    uri
  }
`;

export const QUERY_ALL_PORTFOLIO_INDEX = gql`
  ${PROJECT_FIELDS}
  query AllPortfolioIndex {
    portfolio(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...ProjectFields
        }
      }
    }
  }
`;

export const QUERY_ALL_PORTFOLIO_ARCHIVE = gql`
  ${PROJECT_FIELDS}
  query AllPortfolioArchive {
    portfolio(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...ProjectFields
          excerpt
        }
      }
    }
  }
`;

export const QUERY_ALL_PORTFOLIO = gql`
  ${PROJECT_FIELDS}
  query AllPortfolio {
    portfolio(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...ProjectFields
          content
          excerpt
          modified
        }
      }
    }
  }
`;


export const QUERY_PROJECT_BY_SLUG = gql`
  query ProjectBySlug($slug: ID!) {
    project(id: $slug, idType: SLUG) {
      id
      uri
      portfolioIndustries {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
      tags {
        edges {
          node { 
            name
            slug
          }
        }
      }
      content
      date
      modified
      databaseId
      title
      slug
      projectId
      workFields {
        description
        subheading
        detailPageFeaturedImageVideo {
          node {
            mediaItemUrl
          }
        }
        headertags {
          edges {
            node {
              name
            }
          }
        }
      }
      portfolioForPages {
        relatedPortfolio {
          edges {
            node {
              ... on Project {
                id
                slug
                title
                date
                excerpt
                workFields {
                  featuredImagevideo {
                    node {
                      mediaItemUrl
                    }
                  }
                }
                portfolioIndustries {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const QUERY_PORTFOLIO_BY_PORTFOLIOINDUSTRY_ID_INDEX = gql`
  ${PROJECT_FIELDS}
  query PortfolioByPortfolioIndustryId($portfolioIndustryId: Int!) {
    portfolio(where: { portfolioIndustryId: $portfolioIndustryId, hasPassword: false }) {
      edges {
        node {
          ...ProjectFields
        }
      }
    }
  }
`;

export const QUERY_PORTFOLIO_BY_PORTFOLIOINDUSTRY_ID_ARCHIVE = gql`
  ${PROJECT_FIELDS}
  query PortfolioByPortfolioIndustryId($portfolioIndustryId: Int!) {
    portfolio(where: { portfolioIndustryId: $portfolioIndustryId, hasPassword: false }) {
      edges {
        node {
          ...ProjectFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const QUERY_PORTFOLIO_BY_PORTFOLIOINDUSTRY_ID = gql`
  ${PROJECT_FIELDS}
  query PortfolioByPortfolioIndustryId($portfolioIndustryId: Int!) {
    portfolio(where: { portfolioIndustryId: $portfolioIndustryId, hasPassword: false }) {
      edges {
        node {
          ...ProjectFields
          content
          excerpt
          modified
        }
      }
    }
  }
`;

export const QUERY_PORTFOLIOINDUSTRY_BY_ID_FOR_PORTFOLIO = gql`
  ${PROJECT_FIELDS}
  query PortfolioIndustryByIdForPortfolio($portfolioIndustryId: ID!) {
    portfolioIndustry(id: $portfolioIndustryId, idType: DATABASE_ID) {
      id
      name
      slug
      portfolio(where: { hasPassword: false }) {
        edges {
          node {
            ...ProjectFields
            excerpt
          }
        }
      }
    }
  }
`;

export const QUERY_PROJECT_SEO_BY_SLUG = gql`
  query ProjectSEOBySlug($slug: ID!) {
    project(id: $slug, idType: SLUG) {
      id
      seo {
        metaDesc
        title
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;

export const QUERY_PROJECT_PER_PAGE = gql`
  query ProjectPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;

export const GET_HOME_PAGE_PORTFOLIO = gql`
  query portfolioforHomePage {
    portfolio(first: 3) {
      nodes {
        id
        slug
        title
        date
        excerpt
        workFields {
          featuredImagevideo {
            node {
              mediaItemUrl
            }
          }
        }
        portfolioIndustries {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export const GET_RELATED_PORTFOLIO_FOR_PAGES = gql`
  query pageArticles($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      portfolioForPages {
        relatedPortfolio {
          edges {
            node {
              ... on Project {
                id
                slug
                title
                date
                excerpt
                workFields {
                  featuredImagevideo {
                    node {
                      mediaItemUrl
                    }
                  }
                }
                portfolioIndustries {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;