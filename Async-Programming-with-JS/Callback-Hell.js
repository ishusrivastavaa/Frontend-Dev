// q5_buildPipeline.js
// Shows messy nested callbacks vs clean async/await for a UI build pipeline

// Helper: generic async stage with 1s delay
function runStage(stageName, callback) {
  setTimeout(() => {
    console.log(stageName);
    callback && callback();
  }, 1000);
}

// --------- 1) Callback Hell Version ---------
function runPipelineWithCallbacks() {
  console.log("Starting pipeline with CALLBACKS...");

  runStage("Stage 1: design", () => {
    runStage("Stage 2: build", () => {
      runStage("Stage 3: test", () => {
        runStage("Stage 4: deploy", () => {
          runStage("Stage 5: celebrate 🎉", () => {
            console.log("Pipeline finished (callbacks)");
          });
        });
      });
    });
  });
}

// --------- 2) async/await Version ---------
function runStagePromise(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(stageName);
      resolve();
    }, 1000);
  });
}

async function runPipelineAsync() {
  console.log("Starting pipeline with async/await...");

  await runStagePromise("Stage 1: design");
  await runStagePromise("Stage 2: build");
  await runStagePromise("Stage 3: test");
  await runStagePromise("Stage 4: deploy");
  await runStagePromise("Stage 5: celebrate 🎉");

  console.log("Pipeline finished (async/await)");
}

/*
Why async/await is better:
- The callback version becomes deeply nested, hard to read, and harder to maintain.
- With async/await, each step looks like synchronous code (top-to-bottom),
  even though it is non-blocking under the hood.
- Error handling is easier as well using try/catch around awaited calls.
*/

runPipelineWithCallbacks();

setTimeout(() => {
  // Run async version after a short delay so logs don't mix too much
  runPipelineAsync();
}, 6000);
