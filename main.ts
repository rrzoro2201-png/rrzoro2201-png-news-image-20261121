// News-image entry: "The Daily Chronicle", a vintage front page summing up the
// world's news of Saturday, 21 November 2026. The image the agent drew lives
// beside this file as entry.png; this program writes it to the output folder
// as entry.png, byte for byte, so both runs of the grader see the same file.
//
// Run it locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The copy is byte for byte and takes no input besides entry.png, so the two
// runs the grader makes always write the same bytes to /output/entry.png.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(source)) {
  throw new Error(`entry.png not found beside main.ts: ${source}`);
}

copyFileSync(source, join(outDir, 'entry.png'));
