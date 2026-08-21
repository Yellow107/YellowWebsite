import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { removeLastTrailingSlash } from './util';
let client;

/**
 * Caps concurrent in-flight GraphQL requests against WordPress. Without this,
 * Next.js can fire dozens of getStaticProps/getStaticPaths queries at once
 * during `next build` (or many blocking-fallback ISR requests at runtime),
 * which exceeds the host's PHP-FPM worker pool and comes back as 500s.
 */

const MAX_CONCURRENT_REQUESTS = 8;
let activeRequests = 0;
const queue = [];

function runNext() {
  if (activeRequests >= MAX_CONCURRENT_REQUESTS || queue.length === 0) return;
  activeRequests += 1;
  const { run, resolve, reject } = queue.shift();
  run()
    .then(resolve, reject)
    .finally(() => {
      activeRequests -= 1;
      runNext();
    });
}

function withConcurrencyLimit(run) {
  return new Promise((resolve, reject) => {
    queue.push({ run, resolve, reject });
    runNext();
  });
}

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
    const query = client.query.bind(client);
    client.query = (options) => withConcurrencyLimit(() => query(options));
  }
  return client;
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: removeLastTrailingSlash(process.env.WORDPRESS_GRAPHQL_ENDPOINT),
    }),
    cache: new InMemoryCache({
      typePolicies: {
        JobFields: { keyFields: false },
        WorkFields: { keyFields: false },
        Job: { fields: { jobFields: { merge: false } } },
        Project: { fields: { workFields: { merge: false } } },
        RootQuery: {
          queryType: true,
        },
        RootMutation: {
          mutationType: true,
        },
      },
    }),
  });
}
