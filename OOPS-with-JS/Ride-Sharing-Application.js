class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.from = fromLocation;
    this.to = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (!this.distance || this.distance < 0) {
      throw new Error("Invalid distance provided");
    }
    return this.distance * 12;
  }
}

try {
  const trip1 = new Trip("Delhi", "Noida", 15);
  console.log("Fare:", trip1.calculateFare());
  
  const trip2 = new Trip("Delhi", "Gurgaon", -5); // error
  console.log("Fare:", trip2.calculateFare());
} catch (err) {
  console.error("Trip Error:", err.message);
}
