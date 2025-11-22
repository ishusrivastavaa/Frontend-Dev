// q2_applyOperation.js
// Function that applies a callback to each value in an array

function applyOperation(numbers, operation) {
  const result = [];
  for (let num of numbers) {
    result.push(operation(num)); // use callback
  }
  return result;
}

const numbers = [1, 2, 3, 4];

console.log("Double:", applyOperation(numbers, n => n * 2));
console.log("Square:", applyOperation(numbers, n => n * n));
