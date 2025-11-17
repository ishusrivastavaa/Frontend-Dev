"use strict";
/*
Q7 – Smart Calculator
- Supports: add, divide, power, root, subtract
- Handle divide by 0 and root of negative number
- If unknown operation -> InvalidOperationError
*/

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0; // given test numbers

class InvalidOperationError extends Error { constructor(op) { super(`Invalid operation: ${op}`); this.name = "InvalidOperationError"; } }
class MathDomainError extends Error { constructor(msg) { super(msg); this.name = "MathDomainError"; } }

function smartCalc(operation, a, b) {
  try {
    let result;
    switch (operation) {
      case "add":
        result = a + b;
        break;
      case "subtract":
        result = a - b;
        break;
      case "divide":
        if (b === 0) throw new MathDomainError("Division by zero");
        result = a / b;
        break;
      case "power":
        result = Math.pow(a, b);
        break;
      case "root":
        if (a < 0) throw new MathDomainError("Root of negative number");
        // b = degree of root; if b === 0 -> invalid
        if (b === 0) throw new MathDomainError("Zeroth root is invalid");
        result = Math.pow(a, 1 / b);
        break;
      default:
        throw new InvalidOperationError(operation);
    }

    console.log(`Operation: ${operation}`);
    console.log(`  Inputs: a=${a}, b=${b}`);
    console.log(`  Result: ${result}`);
  } catch (err) {
    console.log(`Operation ${operation} failed: ${err.name} - ${err.message}`);
  }
}

// run tests for each operation
for (let op of operations) {
  smartCalc(op, num1, num2);
}

/*
Observations:
- Division by zero is handled and reported.
- Root of negative number triggers domain error.
- Unknown operation throws InvalidOperationError.
- Use try...catch to keep UI responsive and print formatted results.
*/
