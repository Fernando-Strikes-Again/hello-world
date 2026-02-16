//'Line Up' exercise. 
//

export const format = (name, number) => {
  const digit = number % 10;
  const doubleDigit = number % 100;
  
  if(digit === 1 && doubleDigit !==11){
    return `${name}, you are the ${number}st customer we serve today. Thank you!`;
  }else if(digit === 2 && doubleDigit !==12){
    return `${name}, you are the ${number}nd customer we serve today. Thank you!`;
  }else if(digit === 3 && doubleDigit !==13){
    return `${name}, you are the ${number}rd customer we serve today. Thank you!`;
  }else{
    return `${name}, you are the ${number}th customer we serve today. Thank you!`;
  }
};
