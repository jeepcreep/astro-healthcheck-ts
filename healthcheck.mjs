/* ssr server or hybrid required */
export const prerender = false;

/**
 * Explicit
 * @param {import('astro').APIContext} context
 * @returns {Response}
 */
export function GET(context) {
  return new Response(JSON.stringify({ healthy: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

/**
 * Less bandwidth
 * @param {import('astro').APIContext} context
 * @returns {Response}
 */
export function HEAD(context) {
  return new Response(null, {
    status: 204,
  });
}
