// q6_productsFetch.js
// Fetches product data from Fake Store API and logs details
// Run in browser console OR Node.js 18+ (which has global fetch)

// Async function using async/await + try/catch
async function fetchAndDisplayProducts() {
  const apiUrl = "https://fakestoreapi.com/products";

  try {
    console.log("Loading products from API...");

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const products = await response.json();

    products.forEach((product) => {
      console.log("Product:", product.title);
      console.log("Price: $" + product.price);
      console.log("Image:", product.image);
      console.log("---------------");
    });

    // BONUS (optional): Uncomment this block if running in a browser
    /*
    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
    container.style.gap = "16px";

    products.forEach((product) => {
      const card = document.createElement("div");
      card.style.border = "1px solid #ccc";
      card.style.padding = "8px";
      card.style.borderRadius = "8px";

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.title;
      img.style.width = "100px";

      const title = document.createElement("h4");
      title.textContent = product.title;

      const price = document.createElement("p");
      price.textContent = "$" + product.price;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);
      container.appendChild(card);
    });

    document.body.appendChild(container);
    */
  } catch (error) {
    console.error("Failed to load products. Please try again.");
    console.error("Error details:", error.message);
  }
}

// Call the function
fetchAndDisplayProducts();
