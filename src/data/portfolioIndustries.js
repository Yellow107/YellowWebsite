import { gql } from '@apollo/client';

export const QUERY_ALL_WORKCATEGORIES = gql`
  query AllPortfolioIndustries {
    portfolioIndustries(first: 100) {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
  }
`;

export const QUERY_WORKCATEGORY_BY_SLUG = gql`
  query WorkCategoryBySlug($slug: ID!) {
    portfolioIndustry(id: $slug, idType: SLUG) {
      databaseId
      id
      name
      slug
      industryConsultant {
        consultantBio
        consultantName
        consultantImage {
          node {
            altText
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const QUERY_WORKCATEGORY_SEO_BY_SLUG = gql`
  query WorkCategorySEOBySlug($slug: ID!) {
    portfolioIndustry(id: $slug, idType: SLUG) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
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
