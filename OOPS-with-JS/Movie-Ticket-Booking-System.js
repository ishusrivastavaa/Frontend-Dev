class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function () {
  return `🎬 ${this.movieName} | Seat: ${this.seatNo} | Price: ₹${this.price}`;
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const online = new OnlineTicket("Avengers", "A12", 300, 50);
console.log(online.printTicket()); // from prototype chain
console.log("Total:", online.getTotalAmount());
