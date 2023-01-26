const mainContainer = document.getElementById('page__container');
const signInContainer = document.getElementById('signIn__container');
const startButton = document.getElementById('startButton');

const gameContainer = document.getElementById('game__container');
const playersContainer = document.getElementById('players__container');
const deckContainer = document.getElementById('deck__container');
const dealerArea = document.getElementById('dealer__area');

const cardArray = [
  { name: 'ace', value: 1, icon: 'A' },
  { name: 'two', value: 2, icon: '2' },
  { name: 'three', value: 3, icon: '3' },
  { name: 'four', value: 4, icon: '4' },
  { name: 'five', value: 5, icon: '5' },
  { name: 'six', value: 6, icon: '6' },
  { name: 'seven', value: 7, icon: '7' },
  { name: 'eight', value: 8, icon: '8' },
  { name: 'nine', value: 9, icon: '9' },
  { name: 'ten', value: 10, icon: '10' },
  { name: 'jack', value: 11, icon: 'J' },
  { name: 'queen', value: 12, icon: 'Q' },
  { name: 'king', value: 13, icon: 'K' },
];
const suitArray = ['♠', '♥', '♦', '♣'];
class Card {
  constructor(name, value, suit, icon) {
    this.name = name;
    this.value = value;
    this.suit = suit;
    this.icon = icon;
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
    this.playersArray = players;
    this.deck = [];
  }
}

let gamestate = {};

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

  const newGameDeck = buildGameArea(newGame);
  console.log('newGameDeck', newGameDeck);

  // set the intance with the new array of card
  newGame.deck = newGameDeck;
  // set state to new game
  gamestate = newGame;
  console.log('newGame', newGame);
}

function buildGameArea(newGame) {
  signInContainer.style.display = 'none';
  gameContainer.style.display = 'grid';
  buildPlayerAreas(newGame);
  // creates a deck
  const deckX = buildDeckArea();
  return deckX;
}

function proveDeck() {
  let deckArray = gamestate.deck;

  console.log('deckArray', deckArray);
  deckArray.forEach((card) => {
    console.log('card', card);
    const cardItem = document.createElement('div');
    const cardImg = document.createElement('div');
    const cardSuit = document.createElement('div');
    cardImg.className = 'card__img';
    cardItem.className = 'card__item';
    cardSuit.className = 'card__suit';
    cardImg.innerText = card.icon;
    cardSuit.innerText = card.suit;
    dealerArea.appendChild(cardItem)
    cardItem.appendChild(cardSuit)
    cardItem.appendChild(cardImg);
  });
}

function buildDeckArea() {
  const deckStack = document.getElementById('deck__stack');
  const deckTotal = document.getElementById('deck__total');

  let setupGame = createNewDeck();

  deckTotal.innerText = setupGame.length;
  return setupGame;
}
// Creates a chair/area for each player
function buildPlayerAreas(newGame) {
  const { playersArray } = newGame;

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
      const jicon = cardArray[j].icon;

      const card = new Card(jname, jvalue, suit, jicon);
      newDeck.push(card);
    }
  }
  return newDeck;
}

function shuffleDeck() {
  let shuffledDeck = gamestate.deck
  console.log('aaaaaaaaaaaaaaaaaa');
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = shuffledDeck[i];
    shuffledDeck[i] = shuffledDeck[j];
    shuffledDeck[j] = temp;
  }
  console.log('shuffledDeck', shuffledDeck);
  gamestate.deck = shuffledDeck;
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
