//
// 'Space Age' exercise
//

export const age = (planet,seconds) => {
  const planet2Review = planet.toLowerCase().trim();
  const secondsInEarthYear = 31557600;
  let calculatedAge;
  
  switch(planet2Review){
    case 'mercury':
      calculatedAge = Number((seconds/(0.2408467 * secondsInEarthYear)).toFixed(2));
      break;
    case 'venus':
      calculatedAge = Number((seconds/(0.61519726 * secondsInEarthYear)).toFixed(2));
      break;
    case 'earth':
      calculatedAge = Number((seconds/(1 * secondsInEarthYear)).toFixed(2));
      break;
    case 'mars':
      calculatedAge = Number((seconds/(1.8808158 * secondsInEarthYear)).toFixed(2));
      break;
    case 'jupiter':
      calculatedAge = Number((seconds/(11.862615 * secondsInEarthYear)).toFixed(2));
      break;
    case 'saturn':
      calculatedAge = Number((seconds/(29.447498 * secondsInEarthYear)).toFixed(2));
      break;
    case 'uranus':
      calculatedAge = Number((seconds/(84.016846 * secondsInEarthYear)).toFixed(2));
      break;
    case 'neptune':
      calculatedAge = Number((seconds/(164.79132 * secondsInEarthYear)).toFixed(2));
      break;
    default:
      throw new Error('not a planet');
  }
  return calculatedAge;
};
