// Build-only: Astro's getImage helpers can emit unused originals as well as
// responsive WebP. Keep source originals; omit only known unreferenced copies.
import { readdir, readFile, unlink } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const walk = async folder => (await Promise.all((await readdir(folder, { withFileTypes: true }))
  .map(entry => entry.isDirectory() ? walk(join(folder, entry.name)) : join(folder, entry.name)))).flat();
const files = await walk(root);
const text = (await Promise.all(files.filter(file => /\.(html|js|css|json|svg|xml|txt)$/.test(file))
  .map(file => readFile(file, 'utf8')))).join('\n');
let removed = 0;
for (const file of files) {
  const url = relative(root, file).replaceAll('\\', '/');
  if (/^_astro\/(?:hospital-neutral|hospital-activated|doctor-chamber-hero-v1)\.[\w-]+\.png$/.test(url)
    && !text.includes(url)) {
    if (!resolve(file).startsWith(resolve(root) + sep)) throw new Error('Asset outside build output');
    await unlink(file); removed++;
  }
}
console.log(`Build cleanup: omitted ${removed} unused original image copies.`);
