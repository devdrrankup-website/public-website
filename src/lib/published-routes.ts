// Every public page is an index.astro route. Unfinished resources and local
// drafts must stay out of both the sitemap and the LLM site guide.
const unpublishedRoute = /^\/(?:resources|case-studies|blog|service-drafts)(?:\/|$)/;

export const publishedRoutes = [...new Set(Object.keys(import.meta.glob('../pages/**/index.astro'))
  .map(file => `/${file.slice('../pages/'.length, -'index.astro'.length)}`)
  .filter(route => !unpublishedRoute.test(route)))]
  .sort((a, b) => a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b));
