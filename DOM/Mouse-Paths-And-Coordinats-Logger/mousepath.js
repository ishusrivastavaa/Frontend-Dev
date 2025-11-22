// q7_mouse_tracker.js
// Logs mouse coordinates and drops a red dot on double-click

const trackBox = document.getElementById("track-box");
const coordsDisplay = document.getElementById("coords");

trackBox.addEventListener("mousemove", (event) => {
  coordsDisplay.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackBox.addEventListener("dblclick", (event) => {
  const boxRect = trackBox.getBoundingClientRect();

  // Calculate position inside box
  const xInside = event.clientX - boxRect.left;
  const yInside = event.clientY - boxRect.top;

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${xInside}px`;
  dot.style.top = `${yInside}px`;

  trackBox.appendChild(dot);
});
