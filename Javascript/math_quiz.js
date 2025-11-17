// Q9: Random Math Quiz Generator

let a = Math.floor(Math.random() * 20) + 1;
let b = Math.floor(Math.random() * 20) + 1;
let operators = ["+", "-", "*", "/"];
let op = operators[Math.floor(Math.random() * operators.length)];

let answer;

switch (op) {
    case "+":
        answer = a + b;
        break;
    case "-":
        answer = a - b;
        break;
    case "*":
        answer = a * b;
        break;
    case "/":
        answer = (a / b).toFixed(2);
        break;
}

console.log(`Question: ${a} ${op} ${b}`);
console.log(`Correct Answer: ${answer}`);
