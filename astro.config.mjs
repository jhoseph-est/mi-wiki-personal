import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  output: 'static',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    // NUEVO: Configuración de los bloques de código
    shikiConfig: {
      theme: 'dracula', 
      wrap: true, 
    }
  },
});