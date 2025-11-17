// Q8: Employee Salary Projection

let currentSalary = 30000;
let incrementRate = 10; // 10% per year

let tableData = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * (incrementRate / 100);
    tableData.push({ Year: year, Salary: Math.round(currentSalary) });
}

console.table(tableData);
