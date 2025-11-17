"use strict";
/*
Q5 – Hoisting Lab: The Sequence Trap
Given snippet (predict then run):
console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() { console.log(status); }

Tasks:
1. Explain each hoisted element's memory state.
2. Fix code to run properly.
3. Rewrite using arrow functions to compare hoisting differences.
*/

// Explanation (comments):
// - Function declarations are hoisted completely (announce and startGame available before definition).
// - var declarations are hoisted (declaration hoisted, initialization stays), so console.log(score) prints undefined before assignment.
// - let/const are hoisted to TDZ (Temporal Dead Zone) and accessing them before declaration throws ReferenceError.
// - Calling startGame before 'status' (which is declared with let) would throw; functions can access variables declared later only after they are initialized.

// Fixed sequential version:
function fixedSequence() {
  console.log("Fixed sequence start:");
  var score = 50; // declared and initialized before log
  console.log(score); // prints 50
  announce(); // works because function is hoisted
  let status = "ready";
  startGame();

  function announce() {
    console.log("Game started");
  }
  function startGame() {
    console.log("Status:", status);
  }
}
fixedSequence();

// Arrow-function version (note hoisting differences):
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = (status) => console.log("Status (arrow):", status);

let scoreArrow = 50;
let statusArrow = "ready";

console.log("Arrow version:");
announceArrow();
startGameArrow(statusArrow);

// Observations:
// - Function declarations are hoisted — available before their textual definition.
// - Function expressions (const announceArrow = () => ...) are NOT hoisted; they are in TDZ until initialized.
// - var variables are hoisted but default to undefined until assigned.
// - let/const variables are in TDZ and will throw if accessed before declaration.
//
// Debug notes:
// - To observe hoisting, place breakpoints on the top-level and step through initialization phase.
