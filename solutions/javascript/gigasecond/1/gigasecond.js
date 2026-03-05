//
// 'Gigasecond' exercise. 
//

export const gigasecond = (inputDate) => {

  const gigasecondMs = 1e12;
  
  const startDate = inputDate.getTime();
  const futureDate = startDate + gigasecondMs;

  return new Date(futureDate);
};
