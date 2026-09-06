import { getCollection } from 'astro:content';

export async function GET() {
  const docs = await getCollection('docs');
  
  const searchList = docs.map(doc => ({
    title: doc.data.title,
    url: `/docs/${doc.id.replace(/\\/g, '/')}`,
    tags: doc.data.tags || [],
    author: doc.data.author || '',
    date: doc.data.date || ''
  }));
  
  return new Response(JSON.stringify(searchList), {
    headers: { 'Content-Type': 'application/json' }
  });
}