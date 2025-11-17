// Q6: Progressive Discount System

let total = 6500;
let discountPercent = 0;

if (total >= 10000) {
    discountPercent = 25;
} else if (total >= 5000) {
    discountPercent = 15;
} else if (total >= 2000) {
    discountPercent = 5;
}

let discountAmount = total * (discountPercent / 100);
let finalPrice = total - discountAmount;

console.log("Original Total:", total);
console.log("Discount:", discountPercent + "%");
console.log("Final Price:", Math.round(finalPrice));
