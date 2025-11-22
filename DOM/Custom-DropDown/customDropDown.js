// q8_custom_dropdown.js
// Custom dropdown using only JS + capturing for outside click

const dropdown = document.getElementById("custom-dropdown");
const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownList = document.getElementById("dropdown-list");

dropdownToggle.addEventListener("click", () => {
  dropdownList.classList.toggle("show");
});

// When clicking an option, update button text and close list
dropdownList.addEventListener("click", (event) => {
  const clickedItem = event.target;
  if (!clickedItem.classList.contains("dropdown-item")) return;

  dropdownToggle.textContent = clickedItem.textContent;
  dropdownList.classList.remove("show");
});

// Use capturing phase to detect outside clicks
document.addEventListener(
  "click",
  (event) => {
    const clickedInside = dropdown.contains(event.target);
    if (!clickedInside) {
      dropdownList.classList.remove("show");
    }
  },
  true // capture phase
);
