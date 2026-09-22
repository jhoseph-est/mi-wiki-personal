import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    icon: z.string().optional(),
    theme: z.enum(['minimalista', 'academico', 'moderno', 'oscuro']).optional(),
    date: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    orden: z.number().optional(),
    slides: z.boolean().optional(),
    draft: z.boolean().default(false),
         
    // Metadatos adicionales para notas académicas y wiki
    curso: z.string().optional(),
    ciclo: z.union([z.string(), z.number()]).optional(),
    dificultad: z.string().optional(),
    tiempoLectura: z.string().optional(),
    referencia: z.string().optional(),
  })
});

export const collections = { docs };