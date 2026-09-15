// src/pages/api/graph.json.ts
import { getCollection, type CollectionEntry } from 'astro:content';

interface GraphNode {
  id: string;
  name: string;
  val: number;
  group: string;
}

interface GraphLink {
  source: string;
  target: string;
}

export async function GET() {
  const allDocs = await getCollection('docs');
  const activeDocs = allDocs.filter((d: CollectionEntry<'docs'>) => d.data.draft !== true);

  const nodeMap = new Map<string, GraphNode>();
  
  activeDocs.forEach((d) => {
    const normalizedId = `/docs/${d.id.replace(/\\/g, '/')}`;
    const group = d.id.replace(/\\/g, '/').split('/')[0] || 'raiz';
    nodeMap.set(normalizedId, {
      id: normalizedId,
      name: d.data.title || 'Sin título',
      val: 1,
      group
    });
  });

  const links: GraphLink[] = [];
  const targetIds = Array.from(nodeMap.keys());

  activeDocs.forEach((d) => {
    // 1. Guardamos el texto en una constante para asegurar el tipo string
    const docBody = d.body;
    if (!docBody) return;

    const sourceId = `/docs/${d.id.replace(/\\/g, '/')}`;

    targetIds.forEach((targetId) => {
      if (sourceId === targetId) return;

      const cleanSlug = targetId.replace('/docs/', '');
      const hasLink = 
        docBody.includes(targetId) || 
        docBody.includes(`(${cleanSlug})`) || 
        docBody.includes(`[[${cleanSlug}`);

      if (hasLink) {
        links.push({ source: sourceId, target: targetId });
      }
    });
  });

  return new Response(
    JSON.stringify({ nodes: Array.from(nodeMap.values()), links }),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}