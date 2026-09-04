import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from '@astrojs/mdx';
import { remarkAlert } from 'remark-github-blockquote-alert';
// 1. Importamos el plugin de enlaces wiki
import remarkWikiLink from 'remark-wiki-link';

export default defineConfig({
  output: 'static',
  markdown: {
    remarkPlugins: [
      remarkMath, 
      remarkAlert,
      // 2. Configuramos la ruta base de tus apuntes
      [remarkWikiLink, { 
        pathFormat: 'absolute',
        hrefTemplate: (permalink) => `/docs/${permalink}`
      }]
    ],
    rehypePlugins: [rehypeKatex],
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