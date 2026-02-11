
/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
      case 'Pure Strawberry Joy':
        return 0.5;
        break;
      case 'Energizer':
        return 1.5;
        break;
      case 'Green Garden':
        return 1.5;
        break;
      case 'Tropical Island':
        return 3;
        break;
      case 'All or Nothing':
        return 5;
        break;
      default:
        return 2.5
        break;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesGotten = 0;
  let limesCut = 0;
  
  while(wedgesGotten<wedgesNeeded && limes.length >0){
    let currentLime = limes.shift();
    
    switch(currentLime){
        case 'small':
        wedgesGotten+=6;
        break;
        case 'medium':
        wedgesGotten+=8;
        break;
        case 'large':
        wedgesGotten+=10;
        break;
    }
    limesCut++;
  }
  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time2Prepare = timeLeft;
  
  while (orders.length > 0 &&  time2Prepare > 0) {
    let currentOrder = orders.shift();
    let timePerDrink = timeToMixJuice(currentOrder);
    time2Prepare = time2Prepare - timePerDrink;
  }
  return orders;
}
