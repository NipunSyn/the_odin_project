// Get the choices
// Decide winner using those choices
// Get the final message from the result
// Change the frontend using the message and user choices

// for(let round= 1; round <=5; round++){

// }

function rpsGame(yourChoice) {
  // Get the choices
  let userChoice, botChoice;
  userChoice = yourChoice.id;
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
    return { message: "You Won, lessgoooo :)", color: "green" };
  } else if (userValue === 0) {
    return { message: "Mickey Won, try again :(", color: "red" };
  } else {
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

//   let yourString = document.createElement("h2");
//   yourString.innerHTML = "Your Choice";
//   let botString = document.createElement("h2");
//   botString.innerHTML = "Mickey's Choice";

//   humanDiv.appendChild(yourString);
//   botDiv.appendChild(botString);

  humanDiv.innerHTML = `<img src='${imageDatabase[userChoice]}' height=150 width=150/>`;
  humanDiv.setAttribute("id", "humanDiv");
  botDiv.innerHTML = `<img src='${imageDatabase[botChoice]}' height=150 width=150/>`;
  botDiv.setAttribute("id", "botDiv");
  messageDiv.innerHTML = `<h1 style="color: ${message["color"]};" height=150 width=150">${message["message"]}</h1>`;
  messageDiv.setAttribute("id", "messageDiv");

  document.getElementById("console-div").appendChild(humanDiv);
  document.getElementById("console-div").appendChild(messageDiv);
  document.getElementById("console-div").appendChild(botDiv);
}
