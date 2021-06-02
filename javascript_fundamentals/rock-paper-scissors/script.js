// Get the choices
// Decide winner using those choices
// Get the final message from the result
// Change the frontend using the message and user choices

//todo make sure that the rock paper scissors game doesn't work before you press play
//todo on every iteration, update the wins, losses, and draws
//todo the function that will loop the game five times
//todo after the game gets over, display the winner and reset the game (make play -> play again)


let gameState = {
  wins: 0,
  draws: 0,
  losses: 0,
};

let play = document.getElementById("play");
play.addEventListener("click", playGame)
let rock = document.getElementById("rock");
rock.addEventListener("click", rpsGame);
let paper = document.getElementById("paper");
paper.addEventListener("click", rpsGame);
let scissors = document.getElementById("scissors");
scissors.addEventListener("click", rpsGame);


function rpsGame(event) {
  // Get the choices
  let userChoice, botChoice;
  userChoice = event.target.id;
  let randomNumber = getRandomNumber();
  botChoice = computerChoice(randomNumber);
  console.log(`Your choice: ${userChoice} | Bot choice: ${botChoice}`);
  // Decide the winner
  let results = decideWinner(userChoice, botChoice);
  console.log(results);
  // Get final message
  let finalMessage = getMessage(results);
  console.log(finalMessage["message"]);
  // Change the frontend
  changeFrontEnd(userChoice, botChoice, finalMessage);
}

// Generate a random number between 0 and 3 (3 excluded)
function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

// Using the random number, get a string as choice
function computerChoice(number) {
  let choices = { 0: "rock", 1: "paper", 2: "scissors" };
  return choices[number];
}

// Decide the winner using the two inputs
function decideWinner(userChoice, botChoice) {
  let possibilities = {
    rock: { rock: 0.5, paper: 0, scissors: 1 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { rock: 0, paper: 1, scissors: 0.5 },
  };

  let userValue = possibilities[userChoice][botChoice];
  let botValue = possibilities[botChoice][userChoice];

  return [userValue, botValue];
}

// Generate final message
function getMessage([userValue, botValue]) {
  if (userValue === 1) {
    gameState["wins"] += 1;
    return { message: "You Won, lessgoooo :)", color: "green" };
  } else if (userValue === 0) {
    gameState["losses"] += 1;
    return { message: "Mickey Won, try again :(", color: "rgb(180, 49, 49)" };
  } else {
    gameState["draws"] += 1;
    return { message: "Sigh, it's a draw, go again!", color: "blue" };
  }
}

// Change the frontend (this is the tricky part)

function changeFrontEnd(userChoice, botChoice, message) {
  imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  // changing the console screen
  humanDiv.innerHTML = `<img src='${imageDatabase[userChoice]}' height=150 width=150/>`;
  humanDiv.setAttribute("id", "humanDiv");
  botDiv.innerHTML = `<img src='${imageDatabase[botChoice]}' height=150 width=150/>`;
  botDiv.setAttribute("id", "botDiv");
  messageDiv.innerHTML = `<h1 style="color: ${message["color"]};" height=150 width=150">${message["message"]}</h1>`;
  messageDiv.setAttribute("id", "messageDiv");

  document.getElementById("console-div").appendChild(humanDiv);
  document.getElementById("console-div").appendChild(messageDiv);
  document.getElementById("console-div").appendChild(botDiv);

  // changing the results section
  document.querySelector("#wins").textContent = gameState["wins"];
  document.querySelector("#draws").textContent = gameState["draws"];
  document.querySelector("#losses").textContent = gameState["losses"];
}
