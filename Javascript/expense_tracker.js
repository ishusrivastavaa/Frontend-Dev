// Q3: Monthly Expense Tracker

let expenses = [3000, 1500, 8000, 2000, 1200]; // food, travel, rent, bills, leisure

let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
let average = total / expenses.length;

let tax = total * 0.10;
let finalAmount = total + tax;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount (after 10% tax):", finalAmount.toFixed(2));
