export function formatName(str: string) {
  if (!str) return '';
  let clean = str.replace(/^\d+-/, '');
  clean = clean.split('--').map(word => word.replace(/-/g, ' ')).join('-');
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

export function generateDocPaths(allDocs: any[]) {
  const paths: any[] = [];
  const folders = new Set<string>();
  
  const publishedDocs = allDocs.filter(doc => doc.data.draft !== true);
  
  publishedDocs.forEach(doc => {     
    const normalizedId = doc.id.replace(/\\/g, '/');
    const partes = normalizedId.split('/');
    const carpetaActual = partes.length > 1 ? partes.slice(0, -1).join('/') : '';
    
    let currentPath = '';
    for (let i = 0; i < partes.length - 1; i++) {
      currentPath = currentPath ? `${currentPath}/${partes[i]}` : partes[i];
      folders.add(currentPath);
    }

    const docsEnCarpeta = allDocs.filter(d => {
      const dPartes = d.id.replace(/\\/g, '/').split('/');
      const dCarpeta = dPartes.length > 1 ? dPartes.slice(0, -1).join('/') : '';
      return dCarpeta === carpetaActual;
    });
    
    docsEnCarpeta.sort((a, b) => {
      const ordenA = a.data.orden ?? 9999;
      const ordenB = b.data.orden ?? 9999;
      if (ordenA !== ordenB) return ordenA - ordenB;
      const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
      const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
      if (dateA !== dateB) return dateB - dateA;
      return a.id.localeCompare(b.id);
    });
    
    const index = docsEnCarpeta.findIndex(d => d.id === doc.id);
    const prev = index > 0 ? docsEnCarpeta[index - 1] : null;
    const next = index < docsEnCarpeta.length - 1 ? docsEnCarpeta[index + 1] : null;

    paths.push({
      params: { id: normalizedId },
      props: { type: 'file', doc, prev, next },
    });
  });

  folders.forEach(folder => {
    const directFiles = allDocs.filter(d => {
      const id = d.id.replace(/\\/g, '/');
      return id.startsWith(folder + '/') && id.split('/').length === folder.split('/').length + 1;
    });
    const subfolders = new Set<string>();
    Array.from(folders).forEach(f => {
      if (f.startsWith(folder + '/') && f.split('/').length === folder.split('/').length + 1) {
        subfolders.add(f);
      }
    });
    paths.push({
      params: { id: folder },
      props: { 
        type: 'folder', 
        folderName: folder.split('/').pop(),
        folderPath: folder,
        directFiles,
        subfolders: Array.from(subfolders)
      }
    });
  });

  const rootFiles = allDocs.filter(d => !d.id.replace(/\\/g, '/').includes('/'));
  const rootFolders = Array.from(folders).filter(f => !f.includes('/'));
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