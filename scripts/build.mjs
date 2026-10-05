import { mkdirSync, copyFileSync, writeFileSync, readFileSync } from 'node:fs';
import ts from 'typescript';

// Static build: copies index.html and the stylesheet, transpiles src/main.ts
// to dist/src/main.js, and rewrites the entry references so the output works
// from any path (local file server or a GitHub Pages project site).
mkdirSync('dist/src', { recursive: true });

const html = readFileSync('index.html', 'utf8')
  .replace('href="/src/style.css"', 'href="./src/style.css"')
  .replace('src="/src/main.ts"', 'src="./src/main.js"');
writeFileSync('dist/index.html', html);

copyFileSync('src/style.css', 'dist/src/style.css');

let s = readFileSync('src/main.ts', 'utf8').replace("import './style.css';", '');
s = ts.transpileModule(s, {
  compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 },
}).outputText;
writeFileSync('dist/src/main.js', s);

writeFileSync('dist/.vite-simulated', 'Static Vite-style build output for local play.');
console.log('built dist/');
