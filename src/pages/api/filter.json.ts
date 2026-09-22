import { getCollection, type CollectionEntry } from 'astro:content';

export async function GET() {
  const allDocs = await getCollection('docs');
  const publishedDocs = allDocs
    .filter((doc: CollectionEntry<'docs'>) => doc.data.draft !== true)
    .map((doc) => ({
      id: doc.id.replace(/\\/g, '/'),
      title: doc.data.title || 'Sin título',
      tags: doc.data.tags || [],
      curso: doc.data.curso || '',
      ciclo: doc.data.ciclo ? String(doc.data.ciclo) : '',
      dificultad: doc.data.dificultad || '',
      author: doc.data.author || '',
    }));

  return new Response(JSON.stringify(publishedDocs), {
    headers: { 'Content-Type': 'application/json' },
  });
}