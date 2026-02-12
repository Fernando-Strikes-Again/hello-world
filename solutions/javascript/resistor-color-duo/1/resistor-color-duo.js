//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (requestedResistor) => {
  const colors = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];
  let num1 = String(colors.indexOf(requestedResistor[0]));
  let num2 = String(colors.indexOf(requestedResistor[1]));
  let sum = num1+num2;

  return Number(sum);
  
};
