// q2_taskScheduler.js
// Demonstrates microtask (Promise) vs macrotask (setTimeout) ordering

console.log("Start");

// Macrotask: scheduled in the task queue
setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

// Microtask: scheduled in the microtask queue
Promise.resolve().then(() => {
  console.log("Promise.then callback (microtask)");
});

// Synchronous log
console.log("Synchronous log");

// Final synchronous log
console.log("End");

/*
Expected order of output:

1. "Start"            // sync
2. "Synchronous log"  // sync
3. "End"              // sync
4. "Promise.then callback (microtask)" // microtask queue, runs after current stack
5. "setTimeout callback (macrotask)"   // macrotask, runs after microtasks

Explanation:
- JavaScript first completes all synchronous code.
- Then it processes all microtasks (Promises, queueMicrotask).
- Only after microtasks are cleared, it processes macrotasks like setTimeout.
*/
