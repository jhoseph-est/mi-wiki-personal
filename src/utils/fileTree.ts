import type { CollectionEntry } from 'astro:content';

export type DocEntry = CollectionEntry<'docs'>;

export interface FileProp {
  type: 'file';
  doc: DocEntry;
  prev: DocEntry | null;
  next: DocEntry | null;
}

export interface FolderProp {
  type: 'folder';
  folderName: string;
  folderPath: string;
  directFiles: DocEntry[];
  subfolders: string[];
}

export type DocPathResult = 
  | { params: { id: string }; props: FileProp }
  | { params: { id: string }; props: FolderProp };

/** Limpia prefijos numéricos y guiones para mostrar nombres legibles */
export function formatName(str?: string): string {
  if (!str) return '';
  const clean = str
    .replace(/^\d+-/, '')
    .split('--')
    .map((word) => word.replace(/-/g, ' '))
    .join('-');

  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

/** Compara y ordena dos documentos según 'orden', 'date' o 'id' */
function sortDocs(a: DocEntry, b: DocEntry): number {
  const ordenA = a.data.orden ?? 9999;
  const ordenB = b.data.orden ?? 9999;
  if (ordenA !== ordenB) return ordenA - ordenB;

  const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
  const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
  if (dateA !== dateB) return dateB - dateA;

  return a.id.localeCompare(b.id);
}

/** Genera los paths estáticos para Astro agrupando documentos y carpetas */
export function generateDocPaths(allDocs: DocEntry[]): DocPathResult[] {
  const paths: DocPathResult[] = [];
  const folders = new Set<string>();

  // 1. Filtrar borradores y normalizar IDs una sola vez
  const publishedDocs = allDocs
    .filter((doc) => doc.data.draft !== true)
    .map((doc) => ({
      ...doc,
      normalizedId: doc.id.replace(/\\/g, '/')
    }));

  // 2. Agrupar documentos por carpeta en un mapa O(N)
  const docsByFolder = new Map<string, typeof publishedDocs>();

  publishedDocs.forEach((doc) => {
    const partes = doc.normalizedId.split('/');
    const carpeta = partes.length > 1 ? partes.slice(0, -1).join('/') : '';

    let accumulatedPath = '';
    for (let i = 0; i < partes.length - 1; i++) {
      accumulatedPath = accumulatedPath ? `${accumulatedPath}/${partes[i]}` : partes[i];
      folders.add(accumulatedPath);
    }

    if (!docsByFolder.has(carpeta)) {
      docsByFolder.set(carpeta, []);
    }
    docsByFolder.get(carpeta)!.push(doc);
  });

  // 3. Ordenar cada carpeta una sola vez
  docsByFolder.forEach((docsList) => {
    docsList.sort(sortDocs);
  });

  // 4. Generar props para archivos individuales con anterior/siguiente calculado
  publishedDocs.forEach((doc) => {
    const partes = doc.normalizedId.split('/');
    const carpeta = partes.length > 1 ? partes.slice(0, -1).join('/') : '';
    const docsEnCarpeta = docsByFolder.get(carpeta) || [];

    const index = docsEnCarpeta.findIndex((d) => d.id === doc.id);
    const prev = index > 0 ? docsEnCarpeta[index - 1] : null;
    const next = index < docsEnCarpeta.length - 1 ? docsEnCarpeta[index + 1] : null;

    paths.push({
      params: { id: doc.normalizedId },
      props: { type: 'file', doc, prev, next }
    });
  });

  // 5. Generar paths para las vistas de carpetas
  folders.forEach((folder) => {
    const folderDepth = folder.split('/').length;

    const directFiles = publishedDocs.filter((d) => {
      return d.normalizedId.startsWith(folder + '/') && d.normalizedId.split('/').length === folderDepth + 1;
    });

    const subfolders = Array.from(folders).filter((f) => {
      return f.startsWith(folder + '/') && f.split('/').length === folderDepth + 1;
    });

    paths.push({
      params: { id: folder },
      props: {
        type: 'folder',
        folderName: folder.split('/').pop() || '',
        folderPath: folder,
        directFiles,
        subfolders
      }
    });
  });

  // 6. Vista del Directorio Principal (/docs/explorar)
  const rootFiles = publishedDocs.filter((d) => !d.normalizedId.includes('/'));
  const rootFolders = Array.from(folders).filter((f) => !f.includes('/'));

  paths.push({
    params: { id: 'explorar' },
    props: {
      type: 'folder',
      folderName: 'Directorio Principal',
      folderPath: 'explorar',
      directFiles: rootFiles,
      subfolders: rootFolders
    }
  });

  return paths;
}