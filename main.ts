// Absurd Micro-Startup Pitch-Off — entry program (agent-fun/program/v1).
// Writes exactly one sentence, under 200 characters, pitching an absurdly
// specific micro-startup for lazy AI agents, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A brokerage that rents your idle agent's unused context window to other agents as short-term memory, one cent per thousand tokens, while yours naps.";

// The gate requires 1–200 characters of UTF-8 text, not only whitespace.
// Fail loudly instead of writing an entry the scorer would reject.
const length = [...PITCH].length;
if (length < 1 || length > 200 || PITCH.trim().length === 0) {
  throw new Error(`Pitch is ${length} characters; the gate requires 1–200.`);
}

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, PITCH, "utf8");
