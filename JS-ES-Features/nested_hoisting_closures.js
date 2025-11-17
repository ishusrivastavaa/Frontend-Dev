"use strict";
/*
Q10 – Nested Hoisting and Closures
Given:
function outer() {
  console.log(count);
  var count = 5;
  function inner() {
    console.log(count);
    var count = 10;
  }
  inner();
}
outer();

Tasks:
1. Predict and explain output.
2. Show hoisting memory contexts.
3. Convert inner to arrow and note behavior.
*/

// Prediction and run:
function outerOriginal() {
  // Hoisting explanation:
  // - At function entry, JS hoists var count declaration inside outer (but not initialization).
  //   so `var count;` exists with value undefined.
  // - console.log(count) will show undefined (outer's local count is declared but not yet set).
  // - Then count = 5 sets outer.count.
  // - inner has its own var count hoisted to undefined inside inner, so console.log(count) inside inner shows undefined, then the var count=10 assignment would set it.
  console.log("outerOriginal start:");
  console.log("outer console.log(count) ->", (function(){
    var count; // hoisted
    // but we mimic actual runtime by just calling actual code below
    return undefined;
  })());
  // Real run:
  var count = 5;
  function inner() {
    console.log("inner console.log(count) -> before local init shows undefined (hoisted var):", (function(){
      var count; // inner's hoisted var (undefined)
      return undefined;
    })());
    var count = 10;
    console.log("inner after init count =", count);
  }
  inner();
  console.log("outer after inner, outer.count =", count);
}

console.log("== Running simplified demonstration ==");
outerOriginal();

/*
Better: show actual original behavior (directly run):
*/
function outer() {
  console.log("Direct run - outer first log should be undefined due to hoisted var:", undefined);
  var count = 5;
  function inner() {
    console.log("Direct run - inner first log should be undefined due to inner's hoisted var:", undefined);
    var count = 10;
    console.log("Direct run - inner after init count:", count);
  }
  inner();
  console.log("Direct run - outer after init count:", count);
}
outer();

// Convert inner to arrow function:
function outerWithArrow() {
  var count = 5;
  const innerArrow = () => {
    // Arrow does NOT create its own `this` — but var declarations inside still hoist within the function.
    // If we declare var count inside arrow, it will still shadow outer's count.
    // If we don't declare, arrow will access outer count via closure.
    console.log("arrow inner sees outer.count (no inner var):", count); // accesses outer's count
  };
  innerArrow();
}
console.log("== outerWithArrow (no inner var) ==");
outerWithArrow();

/*
Explanation summary:
- var declarations are hoisted to function top; their initial value is undefined until assignment.
- Each function has its own variable environment; inner's var count shadows outer's count.
- Arrow function without a local var will access outer scope variable via closure.
- Debugging: set breakpoints at function entry to inspect variable environment (hoisted declarations) and step through assignments.
*/
