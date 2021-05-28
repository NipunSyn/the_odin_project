function computerPlay() {
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

