import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    theme: z.enum(['minimalista', 'academico', 'moderno', 'oscuro']).optional(),
    
    // ¡NUEVOS METADATOS OPCIONALES!
    date: z.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    orden: z.number().optional(), 
  }),
});

export const collections = { docs };