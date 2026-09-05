import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    // ¡METADATOS OBLIGATORIOS!
    title: z.string(),
    
    // ¡METADATOS OPCIONALES!
    theme: z.enum(['minimalista', 'academico', 'moderno', 'oscuro']).optional(),
    date: z.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    orden: z.number().optional(),
    slides: z.boolean().optional(),
  }),
});

export const collections = { docs };