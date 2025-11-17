"use strict";
/*
Q9 – JSON Audit
- Parse entries, detect missing keys and invalid JSON.
- Push valid entries to clean array; log errors with line numbers.
- Convert age to Number and filter under-18 users.
*/

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    let parsed;
    try {
      parsed = JSON.parse(line);
    } catch (parseErr) {
      throw new SyntaxError(`Invalid JSON at line ${i}: ${parseErr.message}`);
    }

    // Check required keys: user, age
    if (!("user" in parsed) || !("age" in parsed)) {
      throw new Error(`Missing keys at line ${i} - required: user, age`);
    }

    // Convert age to Number
    const numericAge = Number(parsed.age);
    if (!Number.isFinite(numericAge)) {
      throw new TypeError(`Invalid age at line ${i}`);
    }

    parsed.age = numericAge;
    clean.push(parsed);
  } catch (err) {
    errors.push({ line: i, raw: line, name: err.name, message: err.message });
    console.log(`Error parsing line ${i}: ${err.name} - ${err.message}`);
  }
}

console.log("\nClean entries:", clean);
console.log("Errors:", errors);

// Bonus: filter under-18 users
const adults = clean.filter(u => u.age >= 18);
const minors = clean.filter(u => u.age < 18);

console.log("Adults (>=18):", adults);
console.log("Minors (<18):", minors);

/*
Debugging notes:
- Put a breakpoint inside the try{} block to inspect 'parsed' for each line.
- Observe control flow: invalid JSON jumps straight to catch; missing keys triggers manual throw.
*/
