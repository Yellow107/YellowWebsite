import { gql } from '@apollo/client';

export const TEAM_FIELDS = gql`
  fragment TeamFields on Team {
    id
    slug
    teams {
      linkedin
      email
      designation
      profilePicture {
        node {
          sourceUrl
        }
      }
      blackWhitePicture {
        node {
          sourceUrl
        }
      }
    }
    title
    content
    date
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
  }
`;

export const QUERY_ALL_TEAMS_INDEX = gql`
  ${TEAM_FIELDS}
  query AllTeamsIndex {
    teams(first: 1000, where: {hasPassword: false}) {
      edges {
        node {
          ...TeamFields
        }
      }
    }
  }
`;

export const QUERY_ALL_TEAMS_ARCHIVE = gql`
  ${TEAM_FIELDS}
  query AllTeamsArchive {
    teams(first: 1000, where: {hasPassword: false}) {
      edges {
        node {
          ...TeamFields
        }
      }
    }
  }
`;

export const QUERY_ALL_TEAMS = gql`
  ${TEAM_FIELDS}
  query AllTeams {
    teams(first: 1000, where: {hasPassword: false}) {
      edges {
        node {
          ...TeamFields
        }
      }
    }
  }
`;

export const QUERY_TEAM_BY_SLUG = gql`
  ${TEAM_FIELDS}
  query TeamBySlug($slug: ID!) {
    team(id: $slug, idType: SLUG) {
      ...TeamFields
      modified
      seo {
        title
        metaDesc
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