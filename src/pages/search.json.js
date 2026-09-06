import { getCollection } from 'astro:content';

function limpiarTexto(texto) {
  if (!texto) return "";
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export async function GET() {
  const docs = await getCollection('docs');
  
  const searchList = docs.map(doc => ({
    title: doc.data.title,
    cleanTitle: limpiarTexto(doc.data.title), // <-- NUEVO: Enviamos el título limpio
    url: `/docs/${doc.id.replace(/\\/g, '/')}`,
    tags: doc.data.tags || [],
    author: doc.data.author || '',
    date: doc.data.date || ''
  }));
  
  return new Response(JSON.stringify(searchList), {
    headers: { 'Content-Type': 'application/json' }
  });
}