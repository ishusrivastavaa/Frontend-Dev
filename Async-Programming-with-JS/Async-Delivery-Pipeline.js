// q10_deliveryPipeline.js
// Simulates a food delivery pipeline using async/await + Promises

// Helper to get random delay between 1–2 seconds
function getRandomDelay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

// Generic step creator to avoid repetition
function createStep(stepName) {
  return function stepFunction() {
    return new Promise((resolve, reject) => {
      console.log(stepName, "- started...");
      setTimeout(() => {
        const failed = Math.random() < 0.2; // 20% chance of failure
        if (failed) {
          return reject(new Error(stepName + " failed"));
        }
        console.log(stepName, "- completed.");
        resolve(stepName + " success");
      }, getRandomDelay());
    });
  };
}

// Define each step
const takeOrder = createStep("Step 1: Order taken");
const prepareFood = createStep("Step 2: Food prepared");
const packOrder = createStep("Step 3: Package ready");
const dispatchOrder = createStep("Step 4: Out for delivery");
const deliverOrder = createStep("Step 5: Delivered");

// Main pipeline using async/await
async function runPipeline() {
  console.log("Start Pipeline");

  try {
    // Even though this looks synchronous top-to-bottom,
    // each await yields control back to the event loop until the Promise settles.
    await takeOrder();
    await prepareFood();
    await packOrder();
    await dispatchOrder();
    await deliverOrder();

    console.log("Delivery completed!");
  } catch (error) {
    // If any step rejects, control jumps here
    console.error("Pipeline failed!", error.message);
  }
}

/*
Async behavior explanation:

- Each step returns a Promise with setTimeout (asynchronous operation).
- 'await' pauses the async function until the Promise settles,
  but DOES NOT block the entire thread; other tasks can still run.
- The event loop continues executing other callbacks, microtasks, etc.
- When the Promise is resolved/rejected, the async function is resumed
  from the point of the corresponding 'await'.
- try/catch around awaited calls lets us handle failures neatly in one place.
*/

runPipeline();
