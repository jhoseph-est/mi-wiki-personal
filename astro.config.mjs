import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import mdx from '@astrojs/mdx';
import { remarkAlert } from 'remark-github-blockquote-alert';
import remarkWikiLink from 'remark-wiki-link';

export default defineConfig({
  output: 'static',
  vite: {
    optimizeDeps: {
      include: [
        'reveal.js',
        'reveal.js/plugin/markdown',
        'reveal.js/plugin/highlight',
        'reveal.js/plugin/math',
        'reveal.js/plugin/notes'
      ]
    },
    build: {
      chunkSizeWarningLimit: 3500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/mermaid')) {
              return 'vendor-mermaid';
            }
            if (id.includes('node_modules/force-graph')) {
              return 'vendor-force-graph';
            }
            if (id.includes('node_modules/reveal.js')) {
              return 'vendor-reveal';
            }
          }
        }
      }
    }
  },
  markdown: {
    ...unified({
      remarkPlugins: [
        remarkMath, 
        remarkAlert,
        [remarkWikiLink, { 
          pathFormat: 'absolute',
          hrefTemplate: (permalink) => `/docs/${permalink}`
        }]
      ],
      rehypePlugins: [rehypeMathjax]
    }),
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
      wrap: true,
    }
  },
  integrations: [mdx()],
});