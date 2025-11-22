// q3_bugTracker.js
// Converts callback-based bug fetcher to Promise-based getBugs()

// Old-style (for reference only)
// function fetchBugs(callback) {
//   setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

// New Promise-based function
function getBugs() {
  return new Promise((resolve, reject) => {
    console.log("Fetching bugs from server...");
    setTimeout(() => {
      const apiFailed = Math.random() < 0.3; // 30% chance API fails
      if (apiFailed) {
        return reject(new Error("Bug API failed to respond"));
      }
      const bugs = ["UI glitch", "API timeout", "Login failure"];
      resolve(bugs);
    }, 1000);
  });
}

// Using .then / .catch and console.table()
getBugs()
  .then((bugs) => {
    console.log("Bugs fetched successfully:");
    console.table(bugs); // Neatly logs array
  })
  .catch((error) => {
    console.error("Error fetching bugs:", error.message);
  });
