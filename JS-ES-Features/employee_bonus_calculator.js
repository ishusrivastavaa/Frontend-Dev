"use strict";
/*
Q2 – Employee Bonus Calculator
- Convert salary and years to numbers.
- bonus = salary*0.1 if years > 3 else salary*0.05.
- Use strict mode and try...catch for safety.
*/

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

function processEmployees(list) {
  for (let i = 0; i < list.length; i++) {
    try {
      const emp = list[i];
      if (!emp) throw new Error("Missing employee object");
      if (!("name" in emp)) throw new Error("Missing property: name");
      if (!("salary" in emp)) throw new Error("Missing property: salary");
      if (!("years" in emp)) throw new Error("Missing property: years");

      const salary = Number(emp.salary);
      const years = Number(emp.years);

      if (!Number.isFinite(salary)) throw new TypeError(`Invalid salary for ${emp.name}`);
      if (!Number.isFinite(years)) throw new TypeError(`Invalid years for ${emp.name}`);

      const bonusRate = years > 3 ? 0.1 : 0.05;
      const bonus = salary * bonusRate;
      const totalPay = salary + bonus;

      console.log(`Employee: ${emp.name}`);
      console.log(`  Salary: ${salary}`);
      console.log(`  Years: ${years}`);
      console.log(`  Bonus Rate: ${bonusRate * 100}%`);
      console.log(`  Bonus: ${bonus.toFixed(2)}`);
      console.log(`  Total (Salary + Bonus): ${totalPay.toFixed(2)}`);
      console.log("---");
    } catch (err) {
      console.log(`Error processing employee at index ${i}: ${err.name} - ${err.message}`);
    }
  }
}

processEmployees(employees);

/*
Debug/hoisting/observations:
- "use strict" prevents accidentally creating implicit globals (e.g., total = ...).
- All conversions use Number() and validated with Number.isFinite().
- Errors are caught and logged per-employee, so one bad record doesn't stop the batch.
*/
