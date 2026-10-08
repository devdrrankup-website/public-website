import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // The entire website must use SSG, as requested by the user.
  output: 'static',
  // Retain fast cold first paint. Externalizing this completed stylesheet
  // improved simulated Lighthouse scores but regressed actual-throttling
  // first paint in the deep audit. Keep the approved styles available inline.
  build: { inlineStylesheets: 'always' },
  // Keep the local preview clear of controls that can overlap mobile CTAs.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    // Prepare the deferred animation dependency before the first dev interaction.
    // Production still loads the shared engine/plugin only near motion or on
    // lighting interaction. Prepare both dev dependencies together to avoid a
    // stale optimized module URL when ScrollTrigger first loads further down.
    optimizeDeps: { include: ['gsap', 'gsap/ScrollTrigger'] },
  },
});
