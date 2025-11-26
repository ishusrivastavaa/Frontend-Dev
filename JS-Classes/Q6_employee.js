class Employee{
 constructor(id,n,d,s){this.id=id;this.name=n;this.department=d;this.salary=s;}
 getAnnualSalary(){return this.salary*12;}
 applyBonus(p){this.salary+=this.salary*p/100;}
}
let e=[new Employee(1,"A","IT",1000),new Employee(2,"B","HR",2000)];
let total=e.reduce((a,b)=>a+b.getAnnualSalary(),0);
console.log(total);
