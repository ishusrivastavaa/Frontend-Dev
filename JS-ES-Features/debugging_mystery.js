"use strict";
/*
Q4 – Debugging Mystery
Original code:
function showMessage() {
  greeting = "Welcome"; // undeclared
  console.log(greeting);
}
showMessage();

Why it throws: Under "use strict", assigning to an undeclared identifier is illegal (prevents implicit global creation).
Fix: Declare the variable with let/var/const in appropriate scope.
*/

function showMessageFixed() {
  // Explicit declaration - local scope
  let greeting = "Welcome";
  console.log("Greeting inside function:", greeting);
}

showMessageFixed();

// Explanation:
// - In non-strict mode, `greeting = "Welcome"` would create a global variable (bad practice).
// - In strict mode, this becomes a ReferenceError: assignment to undeclared variable.
// - Fixing by declaring `let greeting` ensures the variable is local and respects scoping rules.
//
// Debugger instructions:
// - Put a breakpoint on the `console.log` line and watch `greeting` in the VARIABLES pane.
// - The call stack will show showMessageFixed -> global. Observe variable lifetimes.
