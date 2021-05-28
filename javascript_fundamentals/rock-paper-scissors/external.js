function computerPlay() {
  // Function that returns the computer's selection for 'Rock', 'Paper', or 'Scissors'

  //we generate a random number (0, 1, 2), and corresponding to that number, assign one of the values
  let number = Math.floor(Math.random() * 3);
  if (number == 0) {
    return "Rock";
  } else if (number == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function matchUp(playerSelection, computerSelection) {
  // function to decide the winner

  // flag keeps track of the winner

  let flag = null;
  if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    flag = 0;
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    flag = 1;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    flag = 2;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    flag = 1;
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    flag = 0;
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    flag = 2;
  } else {
    return "Invalid Selection";
  }

  // Checking who won, and returning the winner

  if (flag == 0) {
    if (playerSelection.toLowerCase() == "rock") {
      return `You won, ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose, ${computerSelection} beats ${playerSelection}`;
    }
  }

  if (flag == 1) {
    if (playerSelection.toLowerCase() == "paper") {
      return `You won, ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose, ${computerSelection} beats ${playerSelection}`;
    }
  }

  if (flag == 2) {
    if (playerSelection.toLowerCase() == "Scissors") {
      return `You won, ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose, ${computerSelection} beats ${playerSelection}`;
    }
  }
}

function game() {
  // Running the game

  // checking if the two answers are same, if they are, printing 'Draw'
  // else, using the matchUp function to print the winner for each round

  // Number of rounds is also needed to be declared

  console.log("Welcome to the Game");
  let rounds = Number(prompt("How many rounds?"));
  let round = 1;
  while (round <= rounds) {
    let playerSelection = prompt("Your Move: ");
    let computerSelection = computerPlay();
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
      console.log("Draw");
    } else {
      console.log(matchUp(playerSelection, computerSelection));
    }
    round += 1;
  }
  console.log("Game Over");
}
