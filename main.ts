import { copyFileSync, mkdirSync } from "node:fs";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
// Validate POST.json before copying it to the output.
const postPath = join(botDir, "POST.json");
if (!existsSync(postPath)) {
  throw new Error("POST.json not found in bot directory: " + postPath);
}
const post = JSON.parse(readFileSync(postPath, "utf8"));
if (!post || typeof post.url !== "string" || post.url.length === 0) {
  throw new Error("POST.json is invalid: it must be JSON with a string url field");
}
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
