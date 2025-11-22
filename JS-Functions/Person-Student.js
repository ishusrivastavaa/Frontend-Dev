// q5_studentInheritance.js
// Prototype inheritance using constructor functions

function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  console.log("Name:", this.name);
};

function Student(name, branch) {
  Person.call(this, name); // inherit property
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype); // inherit methods
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  console.log("Branch:", this.branch);
};

const s1 = new Student("Ishu", "CSE");
s1.showName();    // from Person
s1.showBranch();  // from Student
