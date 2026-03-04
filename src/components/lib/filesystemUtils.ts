// Buat file baru di direktori tertentu
export function createFile(
  fs: Record<string, any>,
  path: string,
  name: string,
  content: string
) {
  if (!fs[path]) {
    fs[path] = {};
  }
  fs[path][name] = content;
  return fs;
}

// List file dalam direktori tertentu
export function listFiles(fs: Record<string, any>, path: string): string[] {
  if (!fs[path]) return [];
  return Object.keys(fs[path]);
}

// Parse filesystem dari initial state
export function parseFilesystem(initial: Record<string, any>): Record<string, any> {
  // Kalau sudah berbentuk tree, langsung return
  return initial;
}