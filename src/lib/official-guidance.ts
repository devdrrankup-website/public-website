// Site-wide destinations for references to published professional and platform guidance.
const guidance = [
  { label: /BM(?:&|&amp;)DC telemedicine(?: guidelines?)?/g, href: 'https://www.bmdc.org.bd/docs/BMDC_Telemedicine_Guidelines_July2020.pdf' },
  { label: /DGHS telehealth(?: guidelines?| guidance)?/g, href: 'https://dghs.gov.bd/pages/miscellaneous-infos/69c958ba55db8e93577d3fd5' },
  { label: /Google(?:'s)? (?:Search Essentials|search guidance)/g, href: 'https://developers.google.com/search/docs/essentials' },
  { label: /Google Business Profile eligibility/g, href: 'https://support.google.com/business/answer/3038177' },
  { label: /\bGoogle Ads\b/g, href: 'https://support.google.com/adspolicy/answer/176031' },
  { label: /\bMeta\b(?: advertising)?(?: requirements| policies)?/g, href: 'https://transparency.meta.com/policies/ad-standards/' },
  { label: /BM(?:&|&amp;)DC/g, href: 'https://www.bmdc.org.bd/docs/EthicsBookMakeupfinal.pdf' },
  { label: /DGHS/g, href: 'https://dghs.gov.bd/pages/miscellaneous-infos/69c958ba55db8e93577d3fd5' },
] as const;

export type GuidancePart = { text: string; href?: string };

export function officialGuidanceParts(text: string, seen = new Set<string>()): GuidancePart[] {
  const matches = guidance.flatMap(({ label, href }) => [...text.matchAll(label)].map(match => ({
    start: match.index, end: match.index + match[0].length, text: match[0], href,
  }))).sort((a, b) => a.start - b.start || b.end - a.end);
  const parts: GuidancePart[] = [];
  let cursor = 0;
  for (const match of matches) {
    if (match.start < cursor) continue;
    if (match.start > cursor) parts.push({ text: text.slice(cursor, match.start) });
    parts.push(seen.has(match.href) ? { text: match.text } : { text: match.text, href: match.href });
    seen.add(match.href);
    cursor = match.end;
  }
  if (cursor < text.length) parts.push({ text: text.slice(cursor) });
  return parts;
}

// Source fragments are authored HTML; only their text nodes are linkified.
export function linkOfficialGuidanceHtml(html: string, seen = new Set<string>()): string {
  let insideLink = false;
  return html.split(/(<[^>]+>)/g).map(token => {
    if (token.startsWith('<')) {
      if (/^<a\b/i.test(token)) insideLink = true;
      if (/^<\/a\b/i.test(token)) insideLink = false;
      return token;
    }
    if (insideLink) return token;
    return officialGuidanceParts(token, seen).map(part => part.href
      ? `<a href="${part.href}" target="_blank" rel="noopener noreferrer" aria-label="${part.text.replace(/&amp;/g, '&amp;')} guidance (opens in a new tab)">${part.text}</a>`
      : part.text).join('');
  }).join('');
}
