/**
 * Cloudflare Worker to serve static assets for React SPA
 * Handles SPA routing by serving index.html for all routes
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Try to fetch the requested asset
    let response = await env.ASSETS.fetch(request);
    
    // If asset exists, return it
    if (response.status !== 404) {
      return response;
    }
    
    // For SPA routing: serve index.html for all non-asset routes
    // This ensures React Router works correctly (no 404 on refresh)
    const indexRequest = new Request(new URL('/index.html', request.url), {
      method: request.method,
      headers: request.headers,
    });
    
    const indexResponse = await env.ASSETS.fetch(indexRequest);
    
    // Return index.html with proper headers
    if (indexResponse.status !== 404) {
      return new Response(indexResponse.body, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          ...Object.fromEntries(indexResponse.headers.entries()),
        },
      });
    }
    
    // Fallback 404
    return new Response('Not Found', { status: 404 });
  },
};
