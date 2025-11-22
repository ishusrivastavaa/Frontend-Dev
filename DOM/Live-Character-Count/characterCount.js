// q2_char_counter.js
// Tracks remaining characters and prevents typing beyond limit

const messageBox = document.getElementById("message-box");
const counterElement = document.getElementById("counter");
const resetButton = document.getElementById("reset-btn");

const maxCharacters = 100;

// Update counter text + color
function updateCounter() {
  const currentLength = messageBox.value.length;
  const remaining = maxCharacters - currentLength;

  counterElement.textContent = `${remaining} characters left`;
  counterElement.className = "normal";

  if (remaining <= 20 && remaining > 0) {
    counterElement.className = "warning";
  } else if (remaining <= 0) {
    counterElement.className = "danger";
  }
}

// Prevent extra typing when at limit
messageBox.addEventListener("keydown", (event) => {
  const currentLength = messageBox.value.length;

  // If already at max and not deleting, prevent input
  const isControlKey =
    event.key === "Backspace" ||
    event.key === "Delete" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight" ||
    event.key === "ArrowUp" ||
    event.key === "ArrowDown";

  if (currentLength >= maxCharacters && !isControlKey) {
    event.preventDefault();
  }
});

messageBox.addEventListener("input", updateCounter);

// Reset
resetButton.addEventListener("click", () => {
  messageBox.value = "";
  updateCounter();
});

// Initialize
updateCounter();
