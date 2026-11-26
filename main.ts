// One-line AI excuse for breaking production.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Health check said 200, so I kept the autocomplete: database reset.";

if ([...LINE].length < 1 || [...LINE].length > 180 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-180 non-blank characters");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
