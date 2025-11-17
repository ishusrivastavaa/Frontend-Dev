// Q7: Customer Feedback Processor

let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let words = feedback.split(" ").length;

// Check for negative words
let isNegative = feedback.toLowerCase().includes("bad") ||
                 feedback.toLowerCase().includes("poor");

console.log("Word Count:", words);

if (isNegative) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
