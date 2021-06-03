// Get the choices
// Decide winner using those choices
// Get the final message from the result
// Change the frontend using the message and user choices

//?write a function to reset the game (make play -> play again) (when?)

//! object to control the state of the game
let gameState = {
  roundNumber: 1,
  state: false,
  wins: 0,
  draws: 0,
  losses: 0,
};

//! creating a global image directory, will be used to reset the console
let images = {
  rock: document.getElementById("rock").src,
  paper: document.getElementById("paper").src,
  scissors: document.getElementById("scissors").src,
};

let play = document.getElementById("play");
play.addEventListener("click", playGame);

//! Function that controls how the game is run
function playGame() {
  gameState["state"] = true;
  //todo complete this function
  if (gameState["roundNumber"] > 5) {
    document.getElementById("play").remove();
    let h2 = document.createElement("h2");
    h2.id = "result-text";
    h2.textContent = "GAME OVER";
    document.getElementById("which-round").appendChild(h2);
    if (gameState["wins"] > gameState["losses"]) {
      alert("YOU WIN");
    } else if (gameState["wins"] < gameState["losses"]) {
      alert("YOU LOSE");
    } else {
      alert("IT'S A DRAW");
    }
  } else {
    document.getElementById("play").remove();
    let h2 = document.createElement("h2");
    h2.id = "roundNumber";
    h2.textContent = "Round: " + gameState["roundNumber"];
    document.getElementById("which-round").appendChild(h2);
    let rock = document.getElementById("rock");
    rock.addEventListener("click", rpsGame);
    let paper = document.getElementById("paper");
    paper.addEventListener("click", rpsGame);
    let scissors = document.getElementById("scissors");
    scissors.addEventListener("click", rpsGame);
  }
}

//! master function, controls most of the sub functions
function rpsGame(event) {
  if (gameState["state"] === true) {
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
    gameState["roundNumber"] += 1;
    changeFrontEnd(userChoice, botChoice, finalMessage);
    // Reset the console after every round
    let playAgain = document.getElementById("play");
    playAgain.addEventListener("click", resetConsole);
    playAgain.addEventListener("click", playGame);
  } else {
    alert('Click on "Play" to begin');
  }
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

//! Decide the winner using the two inputs
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

//! Generate final message
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

//! Change the frontend (this is the tricky part)
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

  console.log(gameState["roundNumber"]);
  // button to start next round
  document.querySelector("#roundNumber").remove();
  let button = document.createElement("button");
  button.id = "play";
  button.textContent = "Next";
  document.querySelector("#which-round").appendChild(button);
}

//! resetting the console screen after every round (this was also tricky)
function resetConsole() {
  if (gameState["roundNumber"] > 1) {
    let div = document.querySelector("#console-div");
    console.log(div);
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
    let rock = document.createElement("img");
    rock.src = images["rock"];
    rock.id = "rock";
    rock.style.width = "150px";
    rock.style.height = "150px";

    let paper = document.createElement("img");
    paper.src = images["paper"];
    paper.id = "paper";
    paper.style.width = "150px";
    paper.style.height = "150px";

    let scissors = document.createElement("img");
    scissors.src = images["scissors"];
    scissors.id = "scissors";
    scissors.style.width = "150px";
    scissors.style.height = "150px";

    document.querySelector("#console-div").appendChild(rock);
    document.querySelector("#console-div").appendChild(paper);
    document.querySelector("#console-div").appendChild(scissors);
  }
}
