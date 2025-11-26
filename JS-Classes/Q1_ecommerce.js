class Product{
 constructor(id,name,price,category){
  this.id=id;this.name=name;this.price=price;this.category=category;
 }
 applyDiscount(percent){ this.price -= this.price*percent/100; }
 details(){ return `${this.name} - Rs.${this.price} (${this.category})`; }
}
let products=[new Product(1,"Phone",1500,"Electronics"),new Product(2,"Pen",50,"Stationery")];
console.log(products.filter(p=>p.price>1000));
