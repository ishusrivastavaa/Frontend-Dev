"use strict";
/*
Q1 – Dynamic Data Parser
Tasks:
1. Convert each value into Number, Boolean, and String form.
2. Skip invalid numbers (NaN, " ", "100px") but log them separately.
3. Build two arrays — one for valid numeric data, one for invalid.
4. Print a detailed report using loops and conditional formatting.
*/

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidEntries = [];

function isValidNumberValue(v) {
  // Number() will produce NaN for invalid parses.
  const n = Number(v);
  // Consider `null` -> 0 (Number(null) === 0) but per task we probably treat null and undefined explicitly.
  if (v === null || v === undefined) return false;
  // Also treat pure whitespace as invalid
  if (typeof v === "string" && v.trim() === "") return false;
  // Accept only finite numbers
  return Number.isFinite(n);
}

for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];

  // Convert to forms (String, Boolean, Number)
  const strForm = String(raw);
  const boolForm = Boolean(raw); // Note: "" / 0 / null / undefined -> false
  const numForm = Number(raw);

  // Check numeric validity
  if (isValidNumberValue(raw)) {
    validNumbers.push({
      index: i,
      raw,
      string: strForm,
      boolean: boolForm,
      number: numForm
    });
  } else {
    invalidEntries.push({
      index: i,
      raw,
      reason: (raw === null) ? "null"
            : (raw === undefined) ? "undefined"
            : (typeof raw === "string" && raw.trim() === "") ? "empty/whitespace"
            : Number(raw) !== Number(raw) ? "NaN"
            : "non-numeric string"
    });
  }
}

// Detailed report
console.log("=== Dynamic Data Parser Report ===");
console.log(`Original data: ${JSON.stringify(apiData)}`);
console.log("\nValid numeric entries:");
validNumbers.forEach(item => {
  console.log(`  [${item.index}] raw=${JSON.stringify(item.raw)} | string="${item.string}" | boolean=${item.boolean} | number=${item.number}`);
});

console.log("\nInvalid / skipped entries:");
invalidEntries.forEach(item => {
  console.log(`  [${item.index}] raw=${JSON.stringify(item.raw)} | reason=${item.reason}`);
});

console.log("\nSummary:");
console.log(`  Valid numeric count: ${validNumbers.length}`);
console.log(`  Invalid count: ${invalidEntries.length}`);
