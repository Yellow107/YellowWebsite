/**
 * withRetry
 *
 * Retries a build-time CMS call with backoff before giving up. Used in
 * getStaticPaths across dynamic routes so a transient CMS blip during
 * `next build` doesn't silently degrade every visitor to fallback:'blocking'
 * until the next deploy.
 */
export async function withRetry(fn, { retries = 2, delayMs = 750 } = {}) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e;
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, delayMs * (attempt + 1)));
      }
    }
  }

  throw lastError;
}
