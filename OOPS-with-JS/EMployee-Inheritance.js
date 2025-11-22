class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  work() {
    return `${this.name} works in ${this.department}`;
  }
}

class Manager extends Employee {
  work() {
    return `${this.name} manages the ${this.department} team`;
  }
}

const emp = new Employee("Amit", "Sales");
const mgr = new Manager("Rohan", "Marketing");

console.log(emp.work());
console.log(mgr.work()); // runtime polymorphism
