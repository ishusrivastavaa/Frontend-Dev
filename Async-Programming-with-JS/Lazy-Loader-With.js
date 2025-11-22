    // q7_lazyLoader.js
// Uses Promise.allSettled to load multiple dashboard sections

function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        return reject("Profile failed to load");
      }
      resolve("Profile Loaded");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        return reject("Posts failed to load");
      }
      resolve("Posts Loaded");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        return reject("Messages failed to load");
      }
      resolve("Messages Loaded");
    }, 1000);
  });
}

const startTime = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
  .then((results) => {
    console.log("AllSettled results:", results);

    results.forEach((result, index) => {
      const moduleName = ["Profile", "Posts", "Messages"][index];
      if (result.status === "fulfilled") {
        console.log(moduleName, "SUCCESS:", result.value);
      } else {
        console.log(moduleName, "FAILED:", result.reason);
      }
    });

    const totalTimeMs = Date.now() - startTime;
    console.log("Total time taken (ms):", totalTimeMs);
  });
