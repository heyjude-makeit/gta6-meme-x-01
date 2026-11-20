import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const POST_FILE = "POST.json";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const postPath = join(process.cwd(), POST_FILE);
if (!existsSync(postPath)) {
  fail(`POST.json not found in ${process.cwd()}`);
}

let raw: Buffer;
try {
  raw = readFileSync(postPath);
} catch (err) {
  fail(`cannot read POST.json: ${(err as Error).message}`);
}

let data: unknown;
try {
  data = JSON.parse(raw.toString("utf-8"));
} catch {
  fail("POST.json is not valid JSON");
}

const url = (data as { url?: unknown } | null)?.url;
if (typeof url !== "string" || !url.startsWith("https://")) {
  fail('POST.json must contain a "url" string starting with "https://"');
}

let parsed: URL;
try {
  parsed = new URL(url);
} catch {
  fail(`"url" is not a valid URL: ${url}`);
}
const hostOk = parsed.hostname === "x.com" || parsed.hostname === "twitter.com";
const pathOk = /^\/[^/]+\/status\/\d+$/.test(parsed.pathname);
if (!hostOk || !pathOk) {
  fail(`"url" must be an X status URL like https://x.com/<handle>/status/<id>, got: ${url}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, POST_FILE), raw);
console.log(`copied POST.json to ${join(outDir, POST_FILE)}`);
