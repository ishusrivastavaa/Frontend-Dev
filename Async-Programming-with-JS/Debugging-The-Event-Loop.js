// q9_eventLoopDebug.js
// Confirms execution order of microtasks vs macrotasks

/*
Predicted output order:

1. "Script start"        // synchronous
2. "Script end"          // synchronous
3. "Promise callback"    // microtask
4. "Timeout callback"    // macrotask
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
Explanation:
- Synchronous logs ("Script start", "Script end") run first as they are on the main call stack.
- Promises' .then() callbacks are queued in the microtask queue.
- setTimeout callback is queued in the macrotask (task) queue.
- After the main stack is empty, JS engine processes all microtasks before moving to macrotasks.
- Therefore, "Promise callback" appears before "Timeout callback" even with a 0 ms delay.
*/
