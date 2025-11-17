// Q2: String Manipulation Report

let product = " wireless headphones PRO ";

// Step 1: Trim spaces + convert to lowercase
product = product.trim().toLowerCase();

// Step 2: Capitalize every word
product = product
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

// Step 3: Replace "Pro" with "Pro Edition"
product = product.replace("Pro", "Pro Edition");

// Output
console.log("Cleaned Title:", product);
console.log("Length:", product.length);

