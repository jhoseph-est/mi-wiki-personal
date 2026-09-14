import { getCollection } from 'astro:content';

export async function GET() {
  const allDocsGraph = await getCollection('docs');
  
  const nodes = allDocsGraph.map(d => ({
    id: `/docs/${d.id.replace(/\\/g, '/')}`,
    name: d.data.title || 'Sin título',
    val: 1,
    group: d.id.split('/')[0]
  }));

  const links: any[] = [];
  allDocsGraph.forEach(d => {
    const sourceId = `/docs/${d.id.replace(/\\/g, '/')}`;
    allDocsGraph.forEach(t => {
      const targetId = `/docs/${t.id.replace(/\\/g, '/')}`;
      if (d.body && d.body.includes(targetId) && sourceId !== targetId) {
        links.push({ source: sourceId, target: targetId });
      }
    });
  });

  return new Response(JSON.stringify({ nodes, links }), {
    headers: { 'Content-Type': 'application/json' }
  });
}