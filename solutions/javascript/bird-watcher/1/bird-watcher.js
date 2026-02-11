
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalCount = 0;
  for (let i=0; i<birdsPerDay.length; i++){
    totalCount= totalCount + birdsPerDay[i];
  }
  return totalCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let birdsTotal = 0;
  let weeksCount = (week - 1) * 7;
  for(let i = weeksCount; i < weeksCount + 7; i++){
    birdsTotal = birdsTotal + birdsPerDay[i];
  }
  return birdsTotal;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  
  for(let i = 0; i<birdsPerDay.length; i++){
    if(i%2===0){
      birdsPerDay[i]++;
    }
  }
}
