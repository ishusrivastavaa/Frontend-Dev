// q6_multiLevelPrototype.js
// Multi-level prototype chain demonstration

function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function () {
  console.log(`Hello, I am ${this.name}`);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
  console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showSubject = function () {
  console.log(`Subject: ${this.subject}`);
};

const prof = new Professor("Dr. Sharma", "CSE", "AI");
prof.introduce();      // from Person
prof.showDepartment(); // from Faculty
prof.showSubject();    // from Professor
