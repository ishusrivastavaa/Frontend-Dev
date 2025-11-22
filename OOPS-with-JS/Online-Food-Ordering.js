const menu = {
  pizza: 200,
  burger: 120,
  fries: 80,
  momo: 150
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) throw new Error(`Item not available: ${item}`);
      return menu[item];
    });
    const total = prices.reduce((sum, p) => sum + p, 0);
    return total;
  } catch (err) {
    console.error("Order Failed:", err.message);
  }
}

console.log("Final Bill:", calculateBill(["pizza", "burger"]));
console.log("Final Bill:", calculateBill(["pizza", "biryani"])); // Error
