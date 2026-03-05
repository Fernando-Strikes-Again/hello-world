export function getItem(cards, position) {
  const positionCard = position;
  return cards[positionCard];
}


export function setItem(cards, position, replacementCard) {
  const positionCard = position;
  cards[positionCard] = replacementCard;
  return cards;
}


export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}


export function removeItem(cards, position) {
  const position2Remove = position;
  cards.splice(position2Remove,1)
  return cards;
}

export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}


export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}


export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

export function checkSizeOfStack(cards, stackSize) {
  if(cards.length === stackSize){
    return true;
  }else{
    return false;
  }
}
