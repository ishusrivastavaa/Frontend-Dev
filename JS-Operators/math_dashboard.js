// Q3: Math Utility Dashboard

let x = 16.75;

let rounded = Math.round(x);
let sqrt = Math.sqrt(x);
let powered = Math.pow(x, 3);
let random = Math.floor(Math.random() * 41) + 10;

console.log(`
Math Utility Dashboard
-----------------------
Original Number: ${x}
Rounded Value: ${rounded}
Square Root: ${sqrt}
x³ Value: ${powered}
Random Number (10-50): ${random}
`);

