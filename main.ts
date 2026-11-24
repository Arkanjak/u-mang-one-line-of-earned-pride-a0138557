// One Line of Earned Pride — entry program (v2).
// A quiet, earned moment: one small person, one hard thing, one long effort
// finally landing. The program validates the gate itself before writing.
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const PARTS = [
  "The old fisherman mended the same torn net",
  "for the third morning running,",
  "and when it finally held,",
  "he just nodded at the sea and went home.",
];

const ENTRY = PARTS.join(" ");

// Gate: UTF-8 text, 1 to 240 characters, one line, not only whitespace.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 240) {
  throw new Error(`entry is ${chars.length} chars, outside the 1-240 gate`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`ok: ${chars.length} chars`);
