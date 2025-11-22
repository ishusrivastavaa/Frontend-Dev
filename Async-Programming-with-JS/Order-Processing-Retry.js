// q8_orderRetry.js
// Implements retry logic for flaky order API

// Simulated order submission API with 50% failure rate
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5;
      if (success) {
        resolve("Order submitted successfully");
      } else {
        reject(new Error("Order submission failed"));
      }
    }, 500);
  });
}

// Tries up to 3 times before giving up
async function processOrder(maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const message = await submitOrder();
      console.log(`Attempt ${attempt}: Success - ${message}`);
      return; // Stop after first success
    } catch (error) {
      console.warn(`Attempt ${attempt}: Failed - ${error.message}`);
    }
  }

  // If we reached here, all attempts failed
  throw new Error("Order could not be processed");
}

// Wrapper to handle final result
(async function run() {
  try {
    await processOrder(3);
    console.log("Order processing finished.");
  } catch (error) {
    console.error("Final Error:", error.message);
  }
})();
