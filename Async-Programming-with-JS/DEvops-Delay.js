// q4_devopsDelay.js
// Uses Promise.all and Promise.race for two deployment servers

function deployServerA() {
  return new Promise((resolve, reject) => {
    console.log("Server A: Deployment started...");
    setTimeout(() => {
      if (Math.random() < 0.3) {
        return reject(new Error("Server A deployment failed"));
      }
      resolve("Server A deployment completed");
    }, 2000);
  });
}

function deployServerB() {
  return new Promise((resolve, reject) => {
    console.log("Server B: Deployment started...");
    setTimeout(() => {
      if (Math.random() < 0.3) {
        return reject(new Error("Server B deployment failed"));
      }
      resolve("Server B deployment completed");
    }, 3000);
  });
}

// Track fastest response
Promise.race([deployServerA(), deployServerB()])
  .then((fastestMessage) => {
    console.log("Fastest response:", fastestMessage);
  })
  .catch((error) => {
    console.error("Fastest response error:", error.message);
  });

// Track both servers completion
Promise.all([deployServerA(), deployServerB()])
  .then((messages) => {
    console.log("Deployment completed for all servers:");
    console.log(messages);
  })
  .catch((error) => {
    // If any one fails, Promise.all rejects
    console.error("Deployment failed:", error.message);
  });
