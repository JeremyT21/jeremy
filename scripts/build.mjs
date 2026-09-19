import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const client = join(dist, "client");

if (basename(dist) !== "dist" || dirname(dist) !== root) {
    throw new Error("invalid build directory");
}

await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, "server"), { recursive: true });
await mkdir(client, { recursive: true });

const files = [
    "index.html",
    "JeremyThummel_Resume.pdf",
    "css",
    "js",
    "pdfs",
    "certificatesAndAwards",
    "webpages/emojiable",
    "images/avatar.png",
    "images/jLetterFav.ico",
    "images/og.png"
];

for (const file of files) {
    await cp(join(root, file), join(client, file), { recursive: true });
}

const worker = `export default {
    async fetch(request, env) {
        const response = await env.ASSETS.fetch(request);
        if (response.status !== 404) return response;

        const url = new URL(request.url);
        if (url.pathname.includes(".")) return response;

        url.pathname = "/index.html";
        return env.ASSETS.fetch(new Request(url, request));
    }
};
`;

await writeFile(join(dist, "server", "index.js"), worker, "utf8");
console.log("portfolio build complete");
