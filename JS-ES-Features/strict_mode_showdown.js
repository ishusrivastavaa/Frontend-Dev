"use strict";
/*
Q8 – Strict Mode Showdown
Original (invalid) function:
function demo(a, a) {
  total = 10;
  delete total;
}
demo(5, 10);

Tasks:
1. Run with and without strict mode and record behavior.
2. Explain why strict mode errors occur.
3. Provide correct ES6 version.
*/

// Observations:
// - Duplicate parameter names are illegal in strict mode. In non-strict mode they were permitted (ES5), but are deprecated.
// - Assigning to an undeclared variable (total = 10) is illegal in strict mode (prevents implicit globals).
// - delete total is illegal if total is not a configurable property (also delete on variables is not allowed).

// Correct ES6 version:
function demoCorrect(a, b) {
  "use strict"; // reaffirm
  // Explicit local declaration
  let total = 10;
  // Delete can't be used on local variable; use property deletion on objects instead
  const obj = { total: total };
  console.log("Before delete:", obj);
  delete obj.total; // OK
  console.log("After delete:", obj);
  console.log("Parameters:", a, b);
}

demoCorrect(5, 10);

/*
Explanation:
- Strict mode forbids duplicate parameter names to avoid ambiguous mappings and to enable optimizations.
- It forbids implicit globals; you must declare variables with var/let/const.
- delete can't remove local bindings; it only works on object properties.
*/
