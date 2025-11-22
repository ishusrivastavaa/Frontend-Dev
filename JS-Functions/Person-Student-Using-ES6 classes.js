// q9_studentClass.js
// Same inheritance as Q5 but done using modern ES6 classes

class Person {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log("Name:", this.name);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name); // calls Person constructor
    this.branch = branch;
  }
  showBranch() {
    console.log("Branch:", this.branch);
  }
}

const stu = new Student("Ishu", "CSE");
stu.showName();   // from Person
stu.showBranch(); // from Student

/*
Both class and prototype versions behave the same because:
- ES6 class syntax is just cleaner syntax built on top of the prototype system.
*/
