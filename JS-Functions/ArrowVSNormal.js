// q3_userThis.js
// Arrow function does NOT bind its own "this" -> issue demonstration

const user = {
  name: "Ishu",
  showName: () => {
    console.log("Arrow function output:", this.name); // ❌ this refers to global/window, not user object
  }
};

user.showName(); // undefined

// Fix using normal function (binds its own "this")
const userFixed = {
  name: "Ishu",
  showName: function () {
    console.log("Normal function output:", this.name); // ✔ correct this binding
  }
};

userFixed.showName();
