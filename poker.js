const mainContainer = document.getElementById('container');
const deckContainer = document.createElement('div');
const shuffleContainer = document.createElement('div');

mainContainer.className = 'main__container';
deckContainer.className = 'deck__container';
shuffleContainer.className = 'shuffle__container';

mainContainer.appendChild(deckContainer);
mainContainer.appendChild(shuffleContainer);

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
const suitArray = ['spades', 'hearts', 'diamonds', 'clubs'];

class Card {
  constructor(name, value, suit) {
    this.name = name;
    this.value = value;
    this.suit = suit;
  }
}

function createNewDeck() {
  const newDeck = [];

  for (let i = 0; i < suitArray.length; i++) {
    const suit = suitArray[i];

    for (let j = 0; j < cardArray.length; j++) {
      const jname = cardArray[j].name;
      const jvalue = cardArray[j].value;

      const card = new Card(jname, jvalue, suit);
      newDeck.push(card);
    }
  }
  return newDeck;
}

function shuffleDeck(newDeckUnshuffled) {
  let shuffledDeck = newDeckUnshuffled;

  for (let i = 0; i < shuffledDeck.length; i++) {
    const randomIndex = Math.floor(Math.random() * shuffledDeck.length);
    const randomInsert = Math.floor(Math.random() * shuffledDeck.length)
    const splicedData = shuffledDeck.splice(randomIndex, 1);
    console.log('spliced', splicedData)
    // const addedData = shuffledDeck.splice(randomIndex, 0, splicedData)
    // console.log('added', addedData)

    shuffledDeck = addedData
  }

  return shuffledDeck;
}

// create deck of 52
const newDeckUnshuffled = createNewDeck();
// display html for deck
newDeckUnshuffled.forEach((element) => {
  const card = document.createElement('div');
  card.className = 'card';
  deckContainer.appendChild(card);

  const name = document.createElement('div');
  const value = document.createElement('div');
  const suit = document.createElement('div');
    name.innerText = element.name;
    value.innerText = element.value;
    suit.innerText = element.suit;
    card.appendChild(name);
    card.appendChild(value);
    card.appendChild(suit);
});
// shuffle new deck
const deck = shuffleDeck(newDeckUnshuffled);
// shuffle deck html display
deck.forEach((element) => {
    const card = document.createElement('div');
    card.className = 'card';
    shuffleContainer.appendChild(card);
    
    const name = document.createElement('div');
    const value = document.createElement('div');
    const suit = document.createElement('div');
      name.innerText = element.name;
      value.innerText = element.value;
      suit.innerText = element.suit;
      card.appendChild(name);
      card.appendChild(value);
      card.appendChild(suit);
  });

console.log('shuffled deck:', deck);
