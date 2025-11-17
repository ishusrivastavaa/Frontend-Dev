// Q1: Scope Conflict Resolver

// Global variable
let bonus = 5000;

// Function with its own local scope
function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only if employee is permanent
    if (isPermanent) {
        salary += bonus;
    }

    console.log(`Is Permanent: ${isPermanent}, Total Salary: ${salary}`);
}

// Test outcomes
calculateSalary(true);   // Should add bonus
calculateSalary(false);  // Should not add bonus

console.log("Global Bonus Still:", bonus); // Shows global scope unaffected
