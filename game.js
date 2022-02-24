// write a function called computerPlay
// that will randomly  return either 'Rock', 'paper' or 'Scissors'

const computerPlay = () => {
  const comOptions = ["rock", "scissors", "paper"];
  const randomNum = Math.floor(Math.random() * comOptions.length);

  return comOptions[randomNum];
};

// write a function that plays a single round of ;rock paper scissors.
// the function should have two parameters the computer selection and the player selection

// playerSelection --should be case insensitive
// convert computer selection --to be case insensitive
function playRound(mySelection, youWin = false) {
  mySelection = mySelection.toLowerCase();
  computerSelection = computerPlay();
  if (mySelection == "paper" && computerSelection == "rock") {
    youWin = true;
    return youWin;
  } else if (mySelection == "rock" && computerSelection === "scissors") {
    youWin = true;
    return youWin;
  } else if (mySelection == "scissors" && computerSelection == "paper") {
    youWin = true;
    return youWin;
  } else if (mySelection == computerSelection) {
    youWin = false;
    return youWin;
  } else {
    youWin = false;
    return youWin;
  }
}

function game() {
  let numWins = 0;
  for (let i = 0; i < 5; i++) {
    let userInput = prompt("Enter your selection here :");
    if (playRound(userInput)) {
      numWins++;
    }
  }
  console.log(`you won the game ${numWins}/5 times`);
}

game();
