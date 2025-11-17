"use strict";
/*
Q6 – Pyramid Pattern Generator
- Generate a pyramid of stars; default limit = 5 (user input).
- Replace let with var and observe behavior.
- Use strict to catch undeclared loop variables.
*/

function generatePyramid(limit = 5) {
  console.log(`Generating pyramid with limit = ${limit}`);
  for (let i = 1; i <= limit; i++) {
    // build one row
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
}

generatePyramid(4); // requested pattern in the prompt

// Now using var instead of let (observe scoping differences)
function generatePyramidWithVar(limit = 5) {
  console.log("Using var for loop variables (observe scoping):");
  for (var i = 1; i <= limit; i++) {
    var row = "";
    for (var j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
  // After loop, i and j are still accessible (var is function-scoped).
  console.log("After loop i (var) =", i, " j (var) =", j);
}

generatePyramidWithVar(4);

// Debugging steps:
// - Use "use strict" to ensure undeclared variables cause errors.
// - If we accidentally omitted "var/let/const" for i or j, strict mode would throw ReferenceError.
// - Step through loops with a breakpoint to watch i and j re-use across iterations.
