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
  const activeDocIds = new Set<string>();

  // 1. Construir nodos e índice de IDs válidos
  activeDocs.forEach((d) => {
    const normalizedId = `/docs/${d.id.replace(/\\/g, '/')}`;
    const cleanId = d.id.replace(/\\/g, '/');
    const group = cleanId.split('/')[0] || 'raiz';

    activeDocIds.add(cleanId);
    activeDocIds.add(normalizedId);

    nodeMap.set(normalizedId, {
      id: normalizedId,
      name: d.data.title || 'Sin título',
      val: 1,
      group
    });
  });

  const links: GraphLink[] = [];
  const addedLinks = new Set<string>();

  // 2. Extraer enlaces usando regex en una sola pasada O(N)
  const linkRegex = /\[\[(.*?)\]\]|\((.*?)\)/g;

  activeDocs.forEach((d) => {
    const docBody = d.body;
    if (!docBody) return;

    const sourceId = `/docs/${d.id.replace(/\\/g, '/')}`;
    const matches = docBody.matchAll(linkRegex);

    for (const match of matches) {
      let ref = (match[1] || match[2] || '').trim();
      if (!ref || ref.startsWith('http') || ref.startsWith('#')) continue;

      ref = ref.replace('/docs/', '').replace(/\.mdx?$/, '');
      const targetId = `/docs/${ref}`;

      if (targetId !== sourceId && nodeMap.has(targetId)) {
        const linkKey = `${sourceId}->${targetId}`;
        if (!addedLinks.has(linkKey)) {
          addedLinks.add(linkKey);
          links.push({ source: sourceId, target: targetId });
        }
      }
    }
  });

  return new Response(
    JSON.stringify({ nodes: Array.from(nodeMap.values()), links }),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}