import { getApolloClient } from './apollo-client';

import {
    QUERY_ALL_TEAMS_INDEX,
    QUERY_ALL_TEAMS_ARCHIVE,
    QUERY_ALL_TEAMS,
    QUERY_TEAM_BY_SLUG,
} from '../data/teams';

/**
 * teamPathBySlug
 */

export function teamPathBySlug(slug) {
  return `/teams/${slug}`;
}

/**
 * getTeamBySlug
 */

export async function getTeamBySlug(slug) {
  const apolloClient = getApolloClient();

  let teamData;

  try {
    teamData = await apolloClient.query({
      query: QUERY_TEAM_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[teams][getTeamBySlug] Failed to query team data: ${e.message}`);
    throw e;
  }

  if (!teamData?.data.team) return { team: undefined };

  const team = [teamData?.data.team].map(mapTeamData)[0];

  return {
    team,
  };
}

/**
 * getAllTeams
 */

const allTeamsIncludesTypes = {
  all: QUERY_ALL_TEAMS,
  archive: QUERY_ALL_TEAMS_ARCHIVE,
  index: QUERY_ALL_TEAMS_INDEX,
};

export async function getAllTeams(options = {}) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allTeamsIncludesTypes[queryIncludes],
  });

  const teams = data?.data.teams.edges.map(({ node = {} }) => node);

  return {
    teams: Array.isArray(teams) && teams.map(mapTeamData),
  };
}

/**
 * mapTeamData
 */

export function mapTeamData(team = {}) {
  const data = { ...team };
  
  return data;
}