// q7_multiplierClosure.js
// Demonstrates closure usage

function makeMultiplier(multiplier) {
  return function (num) {
    return num * multiplier; // inner function remembers 'multiplier'
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

/* 
Closure Explanation:
- makeMultiplier returns an inner function.
- That inner function still has access to 'multiplier'
  even after makeMultiplier has finished executing.
*/
