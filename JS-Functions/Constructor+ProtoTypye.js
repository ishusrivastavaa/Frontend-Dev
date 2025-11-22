// q4_carPrototype.js
// Demonstrates method sharing using prototype

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`Car: ${this.brand} ${this.model}`);
};

const c1 = new Car("Toyota", "Fortuner");
const c2 = new Car("Mahindra", "Thar");

c1.getDetails();
c2.getDetails();
