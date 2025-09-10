// lib/network.ts
export async function safeFetch(url, opts = {}, ms = 15000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);

  try {
    return await fetch(url, { ...opts, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Retries on network errors/aborts/timeouts. If the server returns a non-2xx,
 * we throw immediately (so you see real 4xx/5xx instead of silently retrying).
 */
export async function fetchWithRetry(
  url,
  opts = {},
  { retries = 3, timeoutMs = 15000, backoffMs = 1000 } = {}
) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await safeFetch(url, opts, timeoutMs);
      if (!res.ok) {
        // Surface 4xx/5xx quickly (you can choose to retry 5xx if you want)
        const text = await res.text().catch(() => '');
        const err = new Error(`HTTP ${res.status} ${res.statusText}: ${text.slice(0, 200)}`);
        (err).status = res.status;
        throw err;
      }
      return res;
    } catch (err) {
      const isLast = i === retries;
      const isAbort = err?.name === 'AbortError';
      const isNet = err?.code === 'ECONNRESET' || err?.code === 'ETIMEDOUT' || isAbort;

      if (!isNet && !isAbort) {
        // non-network errors: bubble up immediately
        throw err;
      }
      if (isLast) throw err;

      // simple linear backoff (1s, 2s, 3s…)
      await new Promise(r => setTimeout(r, backoffMs * (i + 1)));
    }
  }
  // unreachable
  throw new Error('fetchWithRetry: exhausted retries');
}
