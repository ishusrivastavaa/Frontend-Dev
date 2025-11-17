"use strict";
/*
Q3 – Transaction Validator
Tasks:
1. Throw custom errors for negative amount, missing fields, null entries.
2. Catch and categorize each error type in arrays.
3. Print final reports with counts of successful and failed transactions.
*/

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

// Error categories (arrays)
const invalid = [];
const valid = [];

class TransactionError extends Error { constructor(message) { super(message); this.name = "TransactionError"; } }
class NegativeAmountError extends TransactionError { constructor(id) { super(`Negative amount for transaction ${id}`); this.name = "NegativeAmountError"; } }
class MissingFieldError extends TransactionError { constructor(id) { super(`Missing id or amount for transaction ${id}`); this.name = "MissingFieldError"; } }
class NullEntryError extends TransactionError { constructor(index) { super(`Null transaction at index ${index}`); this.name = "NullEntryError"; } }

for (let i = 0; i < transactions.length; i++) {
  try {
    const t = transactions[i];
    if (t === null) throw new NullEntryError(i);
    if (typeof t !== "object") throw new TransactionError(`Invalid transaction type at index ${i}`);

    if (!("id" in t) || !("amount" in t)) throw new MissingFieldError(t.id || `index:${i}`);

    if (typeof t.amount !== "number") throw new TransactionError(`Amount is not numeric for id ${t.id}`);

    if (t.amount < 0) throw new NegativeAmountError(t.id);

    // Passed validation
    valid.push(t);
    console.log(`Transaction ${t.id} processed: amount=${t.amount}`);
  } catch (err) {
    invalid.push({ index: i, error: err.name, message: err.message });
    console.log(`Transaction at index ${i} failed: ${err.name} - ${err.message}`);
  }
}

console.log("\n=== Final Transaction Summary ===");
console.log(`Successful transactions: ${valid.length}`);
console.log(`Failed transactions: ${invalid.length}`);
console.log("Invalid details:", invalid);

/*
Debug tips:
- Set a breakpoint inside the loop (e.g., at "if (t === null)" line) and watch `t`, `i`, `valid`, `invalid`.
- Observe the thrown error types and stack traces in debugger to categorize.
*/
