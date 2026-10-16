import type { APIRoute } from 'astro';
import { publishedRoutes } from '../lib/published-routes';

const escapeXml = (value: string) => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
})[character]!);

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('Set the production site URL before generating the sitemap.');

  const urls = publishedRoutes.map(route => `  <url><loc>${escapeXml(new URL(route, site).href)}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
