// Q4: Academic Performance Evaluator

let marks = [88, 92, 79, 85, 90];

let total = marks.reduce((sum, m) => sum + m, 0);
let percentage = total / marks.length;

// Check if any subject < 35
let hasFailedSubject = marks.some(m => m < 35);

if (hasFailedSubject) {
    console.log("Detained (Subject below 35)");
} else {
    if (percentage >= 85) {
        console.log("Promoted with Distinction");
    } else if (percentage >= 50) {
        console.log("Promoted");
    } else {
        console.log("Detained");
    }
}
