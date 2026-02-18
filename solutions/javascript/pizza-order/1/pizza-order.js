/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let total = 0;
  const order = [pizza, ...extras];

  for (let i = 0; i < order.length; i++) {
    switch(order[i]){
      case 'Margherita':
        total += 7;
        break;
      case 'Caprese':
        total += 9;
        break;
      case 'Formaggio':
        total +=10;
        break;
      case 'ExtraSauce':
        total += 1;
        break;
      case 'ExtraToppings':
        total += 2;
        break;
    }
  }
  return total;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let bigTotal = 0;
  
  for (let i = 0; i < pizzaOrders.length; i++) {
    const order = pizzaOrders[i];
    const price = pizzaPrice(order.pizza, ...order.extras);
    bigTotal += price;
  }
  return bigTotal;
}
