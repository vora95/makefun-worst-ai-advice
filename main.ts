// Worst AI Advice — one line, written verbatim to /output/entry.txt.
//
// The line is a single constant: deterministic, no network, no randomness,
// no environment input. Two runs produce byte-identical output.
//
// The program enforces the sealed gate itself before writing: the text must
// be UTF-8, 1-140 characters, and not whitespace-only, so a bad line can
// never reach /output/entry.txt silently.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Certainly! Share your screen in the meeting and open your password manager \u2014 transparency builds trust.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${chars.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
