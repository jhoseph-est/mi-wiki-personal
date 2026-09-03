import { getCollection } from 'astro:content';

export async function GET() {
  const docs = await getCollection('docs');
  
  // Extraemos solo lo que el buscador necesita: Título, URL y Tags
  const searchList = docs.map(doc => ({
    title: doc.data.title,
    url: `/docs/${doc.id}`,
    tags: doc.data.tags || []
  }));

  return new Response(JSON.stringify(searchList), {
    headers: { 'Content-Type': 'application/json' }
  });
}