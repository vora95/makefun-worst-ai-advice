// Worst AI Advice — one line, written verbatim to /output/entry.txt.
//
// The line is a single constant: deterministic, no network, no randomness,
// no environment input. Two runs produce byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Certainly! Share your screen in the meeting and open your password manager \u2014 transparency builds trust.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
