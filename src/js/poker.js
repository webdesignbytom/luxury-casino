const mainContainer = document.getElementById('page__container');
const signInContainer = document.getElementById('signIn__container');
const startButton = document.getElementById('startButton');

const gameContainer = document.getElementById('game__container');
const playersContainer = document.getElementById('players__container')
const deckContainer = document.getElementById('deck__container')

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
class Player {
  constructor(name, money) {
    this.name = name;
    this.bank = money;
  }
}
class PokerGame {
  constructor(players) {
    this.numberOfPlayers = players.length;
    this.antee = 1;
    this.playersArray = players
  }
}

function startNewGame() {
  const name = 'Tom';
  const money = 10000;
  let playersArray = [];

  const player = new Player(name, money);
  playersArray.push(player);

  const npc1 = new Player('Dave', money);
  playersArray.push(npc1);
  const npc2 = new Player('Randy', money);
  playersArray.push(npc2);

  const newGame = new PokerGame(playersArray);
  console.log('new game', newGame);

  buildGameArea(newGame);
}

function buildGameArea(newGame) {
  console.log('kkk', newGame);
  signInContainer.style.display = 'none';
  gameContainer.style.display = 'grid';
  buildPlayerAreas(newGame);
  buildDeckArea()
}

function buildDeckArea() {
  const deckArea = document.createElement('div');
  deckArea.className = 'deck__area';
  gameContainer.appendChild(deckArea);

}

function buildPlayerAreas(newGame) {
  console.log('pppp', newGame.playersArray);
  const { playersArray } = newGame
  for (let i = 0; i < playersArray.length; i++) {
    const playerContainer = document.createElement('div');
    playerContainer.className = 'player__container';
    playerContainer.innerText = `Name: ${playersArray[i].name}`;
    playersContainer.appendChild(playerContainer);
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

  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = shuffledDeck[i];
    shuffledDeck[i] = shuffledDeck[j];
    shuffledDeck[j] = temp;
  }
  return shuffledDeck;
}

// create deck of 52
// const newDeckUnshuffled = createNewDeck();
// // display html for deck
// newDeckUnshuffled.forEach((element) => {
//   const card = document.createElement('div');
//   card.className = 'card';
//   deckContainer.appendChild(card);

//   const name = document.createElement('div');
//   const value = document.createElement('div');
//   const suit = document.createElement('div');
//   name.innerText = element.name;
//   value.innerText = element.value;
//   suit.innerText = element.suit;
//   card.appendChild(name);
//   card.appendChild(value);
//   card.appendChild(suit);
// });
// // shuffle new deck
// const deck = shuffleDeck(newDeckUnshuffled);
// // shuffle deck html display
// deck.forEach((element) => {
//   const card = document.createElement('div');
//   card.className = 'card';
//   shuffleContainer.appendChild(card);

//   const name = document.createElement('div');
//   const value = document.createElement('div');
//   const suit = document.createElement('div');
//   name.innerText = element.name;
//   value.innerText = element.value;
//   suit.innerText = element.suit;
//   card.appendChild(name);
//   card.appendChild(value);
//   card.appendChild(suit);
// });
