export interface File {
  name: string;
  type: 'file' | 'folder';
  content?: Record<string, File[]>;
}

export interface initialFilesystem {
  [key: string]: File[];
}

export type VirtualFilesystem = Record<string, File[]>;

export function resolvePath(currentPath: string, targetPath: string): string {
  if (targetPath.startsWith('/')) {
    currentPath = '/';
    targetPath = targetPath.slice(1);
  }
  const currentParts = currentPath === '/' ? [] : currentPath.split('/').filter(Boolean);
  const targetParts = targetPath.split('/').filter(Boolean);
  const newParts: string[] = [...currentParts];
  for (const part of targetParts) {
    if (part === '..') {
      newParts.pop();
    } else if (part !== '.') {
      newParts.push(part);
    }
  }
  return '/' + newParts.join('/');
}