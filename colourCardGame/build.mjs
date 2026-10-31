// Build the portfolio, then add the unlinked game to its static output.
import { execFileSync } from 'node:child_process';
import { cp, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
execFileSync(process.execPath,['scripts/build.mjs'],{cwd:root,stdio:'inherit'});
const target=new URL('../dist/client/colourCardGame/',import.meta.url);
await mkdir(target,{recursive:true});
for(const file of ['index.html','style.css','engine.js','game.js'])await cp(new URL(file,import.meta.url),new URL(file,target));
console.log('Colour Card Game included at /colourCardGame/index.html');
