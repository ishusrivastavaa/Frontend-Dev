// q1_asyncCoffee.js
// Simulates an async coffee-making process using Promises + .then() chaining

// Helper to get a random delay between 1–2 seconds
function getRandomDelay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

// Step 1: Boil water
function boilWater() {
  return new Promise((resolve, reject) => {
    console.log("Step 1: Boiling water...");
    setTimeout(() => {
      // Random failure simulation
      if (Math.random() < 0.2) {
        return reject(new Error("Kettle malfunctioned while boiling water!"));
      }
      console.log("Water boiled.");
      resolve("Hot water");
    }, getRandomDelay());
  });
}

// Step 2: Brew coffee
function brewCoffee(hotWater) {
  return new Promise((resolve, reject) => {
    console.log("Step 2: Brewing coffee with:", hotWater);
    setTimeout(() => {
      if (Math.random() < 0.2) {
        return reject(new Error("Coffee machine jammed during brewing!"));
      }
      console.log("Coffee brewed.");
      resolve("Brewed coffee");
    }, getRandomDelay());
  });
}

// Step 3: Pour into cup
function pourIntoCup(brewedCoffee) {
  return new Promise((resolve, reject) => {
    console.log("Step 3: Pouring into cup:", brewedCoffee);
    setTimeout(() => {
      if (Math.random() < 0.2) {
        return reject(new Error("Cup slipped while pouring!"));
      }
      console.log("Coffee poured into cup.");
      resolve("Coffee ready for the team!");
    }, getRandomDelay());
  });
}

// Promise chaining to simulate the process
boilWater()
  .then(brewCoffee)
  .then(pourIntoCup)
  .then((finalMessage) => {
    console.log(finalMessage);
  })
  .catch((error) => {
    // Any failure in the chain will be handled here
    console.error("Coffee process failed:", error.message);
  });
