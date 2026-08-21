import parameterize from 'parameterize';

/**
 * Pure URL-path helpers with zero data-fetching dependencies. Client
 * components should import path helpers from here, not from posts.js/
 * portfolio.js/etc - those modules pull in Apollo Client + graphql-tag at
 * module scope, which otherwise ends up in the client bundle just to build
 * a path string.
 */

export function postPathBySlug(slug) {
  return `/${slug}`;
}

export function workPathBySlug(slug) {
  return `/our-work/${slug}`;
}

export function categoryPathBySlug(slug) {
  return `/category/${slug}`;
}

export function portfolioIndustryPathBySlug(slug) {
  return `/our-work/industry/${slug}`;
}

export function authorPathByName(name) {
  return `/authors/${parameterize(name)}`;
}
