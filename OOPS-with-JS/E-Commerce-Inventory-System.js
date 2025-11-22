const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 4 },
  { id: 2, name: "Pen", category: "Stationery", price: 30, stock: 40 },
  { id: 3, name: "Headphones", category: "Electronics", price: 3000, stock: 2 },
  { id: 4, name: "Notebook", category: "Stationery", price: 50, stock: 3 }
];

const getLowStockProducts = () => products.filter(p => p.stock < 5);
const sortProductsByPrice = () => [...products].sort((a, b) => a.price - b.price);
const calculateTotalInventoryValue = () =>
  products.reduce((sum, p) => sum + p.price * p.stock, 0);
const groupByCategory = () =>
  products.reduce((group, p) => {
    group[p.category] = group[p.category] || [];
    group[p.category].push(p);
    return group;
  }, {});

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log("Inventory Value:", calculateTotalInventoryValue());
console.log(groupByCategory());
