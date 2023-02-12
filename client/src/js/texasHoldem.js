const loginForm = document.getElementById('loginForm');

// Arrays to generate data
const npcArray = [
  {
    id: 1,
    username: 'SharkBlast',
    bank: 10000,
    image:
      'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
  },
  {
    id: 2,
    username: 'ToastMistress',
    bank: 10000,
    image:
      'https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167',
  },
  {
    id: 3,
    username: 'WinningTube',
    bank: 10000,
    image:
      'https://static01.nyt.com/images/2021/10/13/science/13shatner-launch-oldest-person-sub/13shatner-launch-oldest-person-sub-superJumbo.jpg?quality=75&auto=webp',
  },
  {
    id: 4,
    username: 'RastaPoker',
    bank: 10000,
    image:
      'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg',
  },
  {
    id: 5,
    username: 'PokerMon',
    bank: 10000,
    image:
      'https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg',
  },
];
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
const suitArray = [
  { icon: '♠', name: 'spades' },
  { icon: '♥', name: 'hearts' },
  { icon: '♦', name: 'diamonds' },
  { icon: '♣', name: 'clubs' },
];

// States
const gameState = {
  maxPlayers: 6,
  currentPlayers: [],
  numOfPlayers: 0,
  nextSeatNum: 1,
  currentGame: undefined,
};
const loggedInUserState = {
  username: '',
  bank: 10000,
};

// Classes of game elements
class Card {
  constructor(name, value, suit, icon) {
    this.name = name;
    this.value = value;
    this.suit = suit;
    this.icon = icon;
  }
}
class Player {
  constructor(id, username, bank, image, seatNumber) {
    // Player Data
    this.id = id;
    this.username = username;
    this.bank = bank;
    this.image = image;
    this.seatNumber = seatNumber;
    // Game Data
    this.startingBalance = bank;
    this.finishingBalance = undefined;
    // Hand Data
    this.hand = undefined;
  }
}
class Round {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}
class Hand {
  constructor(handId, handOwner, playerHand) {
    this.handId = handId;
    this.handOwner = handOwner;
    this.playerHand = playerHand;
  }
}
class Game {
  constructor(numPlayers, playerArray) {
    this.players = numPlayers;
    this.playerArray = playerArray;
    this.title = 'Lucky Bastard Pot';
    this.numHands = 0;
    this.handId = 1;
    // Game play data
    this.antee = 1;
    this.deck = [];
    this.holeCardNum = 2;
  }

  createDeck() {
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
    return (this.deck = newDeck);
  }

  shuffleDeck() {
    let shuffledDeck = this.deck;
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = shuffledDeck[i];
      shuffledDeck[i] = shuffledDeck[j];
      shuffledDeck[j] = temp;
    }
    this.deck = shuffledDeck;
  }

  dealHand() {
    // players each get one card
    this.playerArray.forEach((player) => {
      let newPlayerHand = [];

      for (let i = 0; i < this.holeCardNum; i++) {
        let cards = this.deck.splice(0, 1);
        let card = cards[0];
        newPlayerHand.push(card);
      }

      const newHand = new Hand(this.handId, player.username, newPlayerHand);
      this.handId++;
      player.hand = newHand;
    });
  }
}

// Login Listener
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let username = document.getElementById('username');
  let password = document.getElementById('password');

  if (username.value == '' || password.value == '') {
    return alert('No username or password');
  }

  loggedInUserState.username = username.value;

  const nameNav = document.getElementById('username__nav');
  nameNav.innerText = username.value;

  username.value = '';
  password.value = '';
});

// First click to set up group
function startGame() {
  const game = new Game(gameState.numOfPlayers, gameState.currentPlayers);
  gameState.currentGame = game;
}

function startNextHand() {
  gameState.currentGame.createDeck();
  gameState.currentGame.shuffleDeck();
  gameState.currentGame.dealHand();
  renderCardsStageOne();
}

function renderCardsStageOne() {
  gameState.currentPlayers.forEach((player) => {
    // console.log('player x', player.hand.playerHand)
    const card1 = document.getElementById(`player${player.id}-1`);
    const card2 = document.getElementById(`player${player.id}-2`);

    const card1Value = document.createElement('p');
    const card2Value = document.createElement('p');
    const card1Suit = document.createElement('p');
    const card2Suit = document.createElement('p');

    card1Value.innerText = player.hand.playerHand[0].value;
    card2Value.innerText = player.hand.playerHand[1].value;
    card1Suit.innerText = player.hand.playerHand[0].suit.icon;
    card2Suit.innerText = player.hand.playerHand[1].suit.icon;

    card1.appendChild(card1Value);
    card1.appendChild(card1Suit);
    card2.appendChild(card2Value);
    card2.appendChild(card2Suit);
  });
}

function joinTable() {
  updateLoggedInPlayer();
}
function updateLoggedInPlayer() {
  const userPlayer = new Player(
    6,
    loggedInUserState.username,
    loggedInUserState.bank,
    'https://www.americanoceans.org/wp-content/uploads/2022/03/What-Are-The-Different-Types-of-Sharks.jpg',
    gameState.nextSeatNum
  );

  gameState.currentPlayers.push(userPlayer);
  gameState.numOfPlayers++;

  const playerImg = document.getElementById(
    `player${userPlayer.seatNumber}img`
  );
  playerImg.src = `${userPlayer.image}`;

  const playerName = document.getElementById(
    `player${userPlayer.seatNumber}name`
  );
  playerName.innerText = userPlayer.username;

  const playerBank = document.getElementById(
    `player${userPlayer.seatNumber}bank`
  );
  playerBank.innerText = userPlayer.bank;
}
// generate a player
function generateNPCPlayers() {
  npcArray.forEach((player) => {
    let newPlayer = new Player(
      player.id,
      player.username,
      player.bank,
      player.image,
      gameState.nextSeatNum
    );
    gameState.currentPlayers.push(newPlayer);
    gameState.numOfPlayers++;
    gameState.nextSeatNum++;
  });
}
function seatNPCs() {
  let newArray = gameState.currentPlayers;
  newArray.forEach((player, index) => {
    const playerImg = document.getElementById(`player${player.seatNumber}img`);
    playerImg.src = `${player.image}`;

    const playerName = document.getElementById(
      `player${player.seatNumber}name`
    );
    playerName.innerText = player.username;

    const playerBank = document.getElementById(
      `player${player.seatNumber}bank`
    );
    playerBank.innerText = player.bank;
  });
}
function run() {
  generateNPCPlayers();
  seatNPCs();
}

run();
