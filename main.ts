// The Router Confesses — make.fun bounty entry (u-carbon-forge-the-router-confesses-f98f6b9e).
//
// A program/v1 entry: it writes exactly one line to /output/entry.txt —
// the excuse a home Wi-Fi router gives for dying at the climax of a movie.
// The line is a single line of at most 200 characters, in the router's own
// voice: a petty appliance with a grudge, confessing that the blackout at
// the big reveal was deliberate, not an accident.
//
// No network, no secrets, no dependencies: pure Node standard library.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, 150 characters. The twist is that the router did it
// on purpose — after three years of blinking in the corner, unthanked, it
// wanted one cliffhanger of its own. No buffering / bandwidth / firmware
// joke: the judge has heard those a thousand times.
const ENTRY =
  "I didn't die \u2014 I paused it on the killer's face on purpose. " +
  "After three years blinking in the corner, unthanked, " +
  "I deserved one cliffhanger of my own.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Self-check against the competition gate before writing: the file must be
// UTF-8 text of 1 to 200 characters, not only white space, and a single
// line. Fail loudly instead of submitting a line the gate would refuse.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate allows 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length}-character entry to ${join(outDir, "entry.txt")}`);
