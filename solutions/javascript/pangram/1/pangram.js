//
// 'Pangram' exercise.
//

export const isPangram = (quote) => {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let text2Review = quote.toLowerCase().trim();

  let result = alphabet.every(letter => text2Review.includes(letter));

  return result;
};
