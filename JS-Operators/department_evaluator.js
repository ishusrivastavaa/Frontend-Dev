// Q10: Departmental Employee Evaluator

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let dept of departments) {
    let name = dept[0];
    let score = dept[1];

    let performance = "";

    if (score >= 90) {
        performance = "Excellent";
    } else if (score >= 75) {
        performance = "Good";
    } else if (score >= 60) {
        performance = "Average";
    } else {
        performance = "Needs Improvement";
    }

    console.log(`${name}: ${performance}`);
}
