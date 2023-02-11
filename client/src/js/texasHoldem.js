
const npcArray = [
  {
    id: 1,
    username: 'SharkBlast',
    bank: 10000,
    image: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
  },
  {
    id: 2,
    username: 'ToastMistress',
    bank: 10000,
    image: 'https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167',
  },
  {
    id: 3,
    username: 'WinningTube',
    bank: 10000,
    image: 'https://static01.nyt.com/images/2021/10/13/science/13shatner-launch-oldest-person-sub/13shatner-launch-oldest-person-sub-superJumbo.jpg?quality=75&auto=webp',
  },
  {
    id: 4,
    username: 'RastaPoker',
    bank: 10000,
    image: 'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg',
  },
  {
    id: 5,
    username: 'PokerMon',
    bank: 10000,
    image: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg',
  },
];

const gameState = {
  maxPlayers: 6,
  currentPlayers: [],
  numOfPlayers: 0,
};

const loggedInUserState = {
  username: '',
}

class Player {
  constructor(id, username, bank, image, seatNumber) {
    this.id = id;
    this.username = username;
    this.bank = bank;
    this.image = image;
    this.seatNumber = seatNumber;
  }
}

function loginUser() {
  let loginForm = document.getElementById("loginForm");
  console.log('LOGIN TO', loginForm)

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById("username");
    let password = document.getElementById("password");
  
    if (username.value == "" || password.value == "") {
      // throw error
      console.log('no input data ')
    } else {
      // perform operation with form input
      console.log('form has data')
    }
  });

  loggedInUserState.username = username.value

  const nameNav = document.getElementById('username__nav')
  nameNav.innerText = username.value

  username.value = "";
  password.value = "";
}

function updateLoggedInPlayer() {

}

// generate a player
function generateNPCPlayers() {
  let seatNumber = 1;
  npcArray.forEach((player) => {
    let newPlayer = new Player(
      player.id,
      player.username,
      player.bank,
      player.image,
      seatNumber
    );
    gameState.currentPlayers.push(newPlayer);
    gameState.numOfPlayers++;
    seatNumber++;
  });
}

function seatNPCs() {
  let newArray = gameState.currentPlayers;
  newArray.forEach((player, index) => { 
    const playerImg = document.getElementById(`player${player.seatNumber}img`)
    playerImg.src = `${player.image}`

    const playerName = document.getElementById(`player${player.seatNumber}name`)
    playerName.innerText = player.username

    const playerBank = document.getElementById(`player${player.seatNumber}bank`)
    playerBank.innerText = player.bank
  })
}

function run() {
  updateLoggedInPlayer()
  generateNPCPlayers();
  seatNPCs();
}

run();
