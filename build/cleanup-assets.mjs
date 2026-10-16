// Build-only: Astro's getImage helpers can emit unused originals as well as
// responsive WebP. Keep source originals; omit only known unreferenced copies.
import { readdir, readFile, unlink } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const walk = async folder => (await Promise.all((await readdir(folder, { withFileTypes: true }))
  .map(entry => entry.isDirectory() ? walk(join(folder, entry.name)) : join(folder, entry.name)))).flat();
const files = await walk(root);
const urlOf = file => relative(root, file).replaceAll('\\', '/');
const draftFiles = files.filter(file => urlOf(file).startsWith('service-drafts/'));
for (const file of draftFiles) {
  if (!resolve(file).startsWith(resolve(root) + sep)) throw new Error('Draft outside build output');
  await unlink(file);
}
const publishedFiles = files.filter(file => !draftFiles.includes(file));
const text = (await Promise.all(publishedFiles.filter(file => /\.(html|js|css|json|svg|xml|txt)$/.test(file))
  .map(file => readFile(file, 'utf8')))).join('\n');
let removed = 0;
for (const file of publishedFiles) {
  const url = urlOf(file);
  if (/^_astro\/(?:hospital-neutral|hospital-activated|doctor-chamber-hero-v1)\.[\w-]+\.png$/.test(url)
    && !text.includes(url)) {
    if (!resolve(file).startsWith(resolve(root) + sep)) throw new Error('Asset outside build output');
    await unlink(file); removed++;
  }
}
console.log(`Build cleanup: omitted ${removed} unused original image copies and ${draftFiles.length} local draft files.`);
