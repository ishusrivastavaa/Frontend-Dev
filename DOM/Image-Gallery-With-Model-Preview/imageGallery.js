// q5_image_gallery.js
// Opens a modal with a larger version of clicked image

const galleryContainer = document.querySelector(".gallery");
const modalOverlay = document.getElementById("modal-overlay");
const modalImage = document.getElementById("modal-image");

// Open modal on image click
galleryContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const imgSrc = event.target.src;
    modalImage.src = imgSrc;
    modalOverlay.style.display = "flex";
  }
});

// Clicking outside modal-content closes the modal
modalOverlay.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// Prevent clicks inside modal-content from closing it
const modalContent = document.querySelector(".modal-content");
modalContent.addEventListener("click", (event) => {
  event.stopPropagation(); // stop bubbling to modalOverlay
});
