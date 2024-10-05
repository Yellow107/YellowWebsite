/* eslint-disable no-undef */
import { getApolloClient } from './apollo-client';

import {
    QUERY_ALL_JOBS_INDEX,
    QUERY_ALL_JOBS_ARCHIVE,
    QUERY_ALL_JOBS,
    QUERY_JOB_BY_SLUG,
} from '../data/jobs';

/**
 * jobPathBySlug
 */

export function jobPathBySlug(slug) {
  return `/careers/${slug}`;
}

/**
 * getJobBySlug
 */

export async function getJobBySlug(slug) {
  const apolloClient = getApolloClient();

  let jobData;

  try {
    jobData = await apolloClient.query({
      query: QUERY_JOB_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[jobs][getJobBySlug] Failed to query job data: ${e.message}`);
    throw e;
  }

  if (!jobData?.data.job) return { job: undefined };

  const job = [jobData?.data.job].map(mapJobData)[0];

  return {
    job,
  };
}

/**
 * getAllJobs
 */

const allJobsIncludesTypes = {
  all: QUERY_ALL_JOBS,
  archive: QUERY_ALL_JOBS_ARCHIVE,
  index: QUERY_ALL_JOBS_INDEX,
};

export async function getAllJobs(options = {}) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allJobsIncludesTypes[queryIncludes],
  });

  const jobs = data?.data.jobs.edges.map(({ node = {} }) => node);

  return {
    jobs: Array.isArray(jobs) && jobs.map(mapJobData),
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
 * mapJobData
 */

export function mapJobData(job = {}) {
  const data = { ...job };

  // Clean up the jobcategories to make them more easy to access
  if (data.jobCategories) {
    data.jobCategories = data.jobCategories.nodes.map(({ node }) => {
      return {
        ...node,
      };
    });
  }

  return data;
}

/**
 * sortStickyJobs
 */

export function sortStickyJobs(jobs) {
  return [...jobs].sort((job) => (job.isSticky ? -1 : 1));
}