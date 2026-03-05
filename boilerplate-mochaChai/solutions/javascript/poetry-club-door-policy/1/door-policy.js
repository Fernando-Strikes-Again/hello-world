export function frontDoorResponse(line) {
  const firstLetter = line[0];
  
  return firstLetter;
}

export function frontDoorPassword(word) {
  let word2Review = word.toLowerCase().split('');
  word2Review[0] = word2Review[0].toUpperCase();
  const finalWord = word2Review.join('');
  
  return finalWord;
}

export function backDoorResponse(line) {
  const word2review = line.trim();
  
  return word2review.at(-1);
}

export function backDoorPassword(word) {
  let word2review = word.trim().toLowerCase().split('');
  word2review[0] = word2review[0].toUpperCase();
  const finalWord = word2review.join('');

  return finalWord+', please';
}
