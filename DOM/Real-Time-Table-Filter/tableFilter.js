// q6_table_filter.js
// Filters table rows based on search input (case-insensitive)

const searchBox = document.getElementById("search-box");
const tableBody = document.querySelector("#student-table tbody");
const noResultsMessage = document.getElementById("no-results");

searchBox.addEventListener("input", () => {
  const searchTerm = searchBox.value.trim().toLowerCase();

  let anyVisible = false;

  Array.from(tableBody.rows).forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    const matches = rowText.includes(searchTerm);

    row.style.display = matches ? "" : "none";
    if (matches) anyVisible = true;
  });

  noResultsMessage.style.display = anyVisible ? "none" : "block";
});

