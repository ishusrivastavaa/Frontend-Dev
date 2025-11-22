// q1_product_list.js
// Manage add/edit/delete using event delegation on the <ul>

const productInput = document.getElementById("product-input");
const addProductButton = document.getElementById("add-product-btn");
const productList = document.getElementById("product-list");

let currentEditingItem = null; // track which <li> is in edit mode

// Add new product
addProductButton.addEventListener("click", () => {
  const productName = productInput.value.trim();
  if (!productName) return;

  const listItem = createProductListItem(productName);
  productList.appendChild(listItem);
  productInput.value = "";
});

// Helper to create <li> with span + edit/delete buttons
function createProductListItem(name) {
  const li = document.createElement("li");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;
  nameSpan.className = "product-name";

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit-btn";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";

  li.appendChild(nameSpan);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  return li;
}

// Event delegation for Edit/Delete
productList.addEventListener("click", (event) => {
  const clickedElement = event.target;
  const listItem = clickedElement.closest("li");
  if (!listItem) return;

  if (clickedElement.classList.contains("delete-btn")) {
    listItem.remove();
  }

  if (clickedElement.classList.contains("edit-btn")) {
    enterEditMode(listItem);
  }
});

// Activate inline edit mode
function enterEditMode(listItem) {
  if (currentEditingItem === listItem) return;

  // If another item is being edited, save it first
  if (currentEditingItem) {
    saveEdit(currentEditingItem);
  }

  currentEditingItem = listItem;

  const nameSpan = listItem.querySelector(".product-name");
  const existingText = nameSpan.textContent;

  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.value = existingText;
  inputField.className = "product-input-inline";

  // Replace span with input
  listItem.replaceChild(inputField, nameSpan);
  inputField.focus();
}

// Save edit: replace input with span again
function saveEdit(listItem) {
  const inputField = listItem.querySelector(".product-input-inline");
  if (!inputField) return;

  const newName = inputField.value.trim() || "Unnamed Product";
  const nameSpan = document.createElement("span");
  nameSpan.textContent = newName;
  nameSpan.className = "product-name";

  listItem.replaceChild(nameSpan, inputField);
  currentEditingItem = null;
}

// Auto-save when clicking outside edited item
document.addEventListener("click", (event) => {
  if (!currentEditingItem) return;

  if (!currentEditingItem.contains(event.target)) {
    // Clicked outside currentEditingItem → auto-save
    saveEdit(currentEditingItem);
  }
});
