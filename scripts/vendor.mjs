// Copies the reveal.js files used by index.html from node_modules into vendor/reveal.
// The site is served as static files (GitHub Pages), so these are committed.
import { cpSync, rmSync } from 'node:fs';

const src = 'node_modules/reveal.js/dist';
const dest = 'vendor/reveal';
const files = ['reset.css', 'reveal.css', 'reveal.js', 'theme/white.css', 'plugin/notes.js', 'plugin/zoom.js'];

rmSync(dest, { recursive: true, force: true });
for (const file of files) cpSync(`${src}/${file}`, `${dest}/${file}`);
console.log(`Copied ${files.length} files to ${dest}`);
