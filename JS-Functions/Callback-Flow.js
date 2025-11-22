// q1_greetUser.js
// Demonstrates callback execution flow

function showEndMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback(); // Executing callback after greeting
}

greetUser("Ishu", showEndMessage);
