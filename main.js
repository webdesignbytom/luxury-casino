const firstArray = [
  { id: 1, name: 'one' },
  { id: 2, name: 'two' },
  { id: 3, name: 'three' },
  { id: 4, name: 'four' },
];
const secondArray = [
  { id: 1, name: 'tree' },
  { id: 2, name: 'cat' },
  { id: 3, name: 'duck' },
  { id: 4, name: 'magic' },
];
const cardArray = [
  { name: 'ace', value: 1 },
  { name: 'two', value: 2 },
  { name: 'three', value: 3 },
  { name: 'four', value: 4 },
  { name: 'five', value: 5 },
  { name: 'six', value: 6 },
  { name: 'seven', value: 7 },
  { name: 'eight', value: 8 },
  { name: 'nine', value: 9 },
  { name: 'ten', value: 10 },
  { name: 'jack', value: 11 },
  { name: 'queen', value: 12 },
  { name: 'king', value: 13 },
];
const suitArray = [
  { suit: 'spades' },
  { suit: 'hearts' },
  { suit: 'diamonds' },
  { suit: 'clubs' },
];

const newDeck = [];

for (let i = 0; i < suitArray.length; i++) {
  const newCard = {}
  console.log('newCard1', newCard)
  const suit = suitArray[i].value;
  console.log('suit', suit)
  newCard.suit = suit
console.log('newcard3', newCard)

  let cardValue;
  for (let j = 0; j < cardArray.length; j++) {
    let value = cardArray[j];
    cardValue = value;
  }

  console.log('newCard2', newCard)

}

function dealCard() {
  const card = cardArray[5];
  return card;
}

console.log(dealCard());
// const testId = 3;

// const result = firstArray.find((e) => e.id === testId);

// function addNum() {
//   let newId = firstArray.length + 1;
//   let num = { id: newId, name: 'five' };
//   return num;
// }
// firstArray.push(addNum());
// firstArray.push(addNum());
// console.log(firstArray);

// for (let i = 0; i < firstArray.length; i++) {
//   console.log('item', i)
// }
