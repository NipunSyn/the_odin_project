//todo write a function to display the number typed up until the operator, after that display the second number
//todo if a third number is typed, display the result of the first two numbers, and use that as the new first number

//! MATH FUNCTIONS
function add(firstNumber, secondNumber) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  return firstNumber - secondNumber;
}

function divide(firstNumber, secondNumber) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  if (secondNumber != 0) {
    return firstNumber / secondNumber;
  } else {
    return undefined;
  }
}

function multiply(firstNumber, secondNumber) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  return firstNumber * secondNumber;
}

//! Deciding what happends on button click

let choices = document.querySelectorAll("button"); //selecting all the buttons
for (let i = 0; i < choices.length; i++) {
  //deciding the function to be carried out for different buttons
  if (
    choices[i].value == "plus" ||
    choices[i].value == "minus" ||
    choices[i].value == "divide" ||
    choices[i].value == "multiply"
  ) {
    choices[i].addEventListener("click", checkOperator);
  } else if (choices[i].value == "del") {
    choices[i].addEventListener("click", clearSelection);
  } else if (choices[i].value == "equal") {
    choices[i].addEventListener("click", evaluate);
  } else if (choices[i].value == "reset") {
    choices[i].addEventListener("click", resetFunction);
  } else {
    choices[i].addEventListener("click", whatToDo);
  }
}

//! CALCULATOR STATE
calcState = {
  firstNumber: "",
  secondNumber: "",
  operator: "",
  result: 0,
};

//! Basically the reception, which sends the different button inputs to different functions
function whatToDo(event) {
  if (calcState["operator"] == "") {
    readFirstNumber(event.target.value);
  } else if (
    calcState["operator"] == "plus" ||
    calcState["operator"] == "minus" ||
    calcState["operator"] == "multiply" ||
    calcState["operator"] == "divide"
  ) {
    readSecondNumber(event.target.value);
  } else if (calcState["secondNumber"] == "") {
    readSecondNumber(event.target.value);
  }
}

//! maintains the number before an operator
function readFirstNumber(value) {
  calcState["firstNumber"] += value;
  document.getElementById("displaybox").textContent = calcState["firstNumber"];
}

//! maintains the number after the operator
function readSecondNumber(value) {
  calcState["secondNumber"] += value;
  document.getElementById("displaybox").textContent = calcState["secondNumber"];
}

//! decides what to do on encountering different operators
function checkOperator(event) {
  if (calcState["firstNumber"] == "" || calcState["firstNumber"] == "-") {
    alert("Operator cannot be entered first, except minus"); //allow only minus to be inputted before a number
  } else if (calcState["firstNumber"] == "" && event.target.value == "minus") {
    calcState["firstNumber"] = event.target.value;
    console.log("First Number: ", calcState["firstNumber"]);
  } else {
    calcState["operator"] = event.target.value;
    console.log("Operator:", calcState["operator"]);
  }
}

//! The math part. Makes use of th MATH functions created above
function evaluate() {
  if (calcState["operator"] == "plus") {
    document.getElementById("displaybox").textContent = "+";
    calcState["result"] = add(
      calcState["firstNumber"],
      calcState["secondNumber"]
    );
    calcState["secondNumber"] = "";
    calcState["firstNumber"] = `${calcState["result"]}`;
  }
  if (calcState["operator"] == "minus") {
    document.getElementById("displaybox").textContent = "-";
    calcState["result"] = subtract(
      calcState["firstNumber"],
      calcState["secondNumber"]
    );
    calcState["secondNumber"] = "";
    calcState["firstNumber"] = `${calcState["result"]}`;
  }
  if (calcState["operator"] == "divide") {
    document.getElementById("displaybox").textContent = "/";
    calcState["result"] = divide(
      calcState["firstNumber"],
      calcState["secondNumber"]
    );
    calcState["secondNumber"] = "";
    calcState["firstNumber"] = `${calcState["result"]}`;
  }
  if (calcState["operator"] == "multiply") {
    document.getElementById("displaybox").textContent = "x";
    calcState["result"] = multiply(
      calcState["firstNumber"],
      calcState["secondNumber"]
    );
    calcState["secondNumber"] = "";
    calcState["firstNumber"] = `${calcState["result"]}`;
  }

  document.getElementById("displaybox").textContent = calcState["result"];
}

//! clears everything
function resetFunction() {
  calcState = {
    firstNumber: "",
    secondNumber: "",
    operator: "",
    result: 0,
  };
  document.getElementById("displaybox").textContent = "0";
}

//! removes the last character of the string
function clearSelection() {
  if (calcState["operator"] == "" && calcState["secondNumber"] == "") {
    calcState["firstNumber"] = calcState["firstNumber"].slice(
      0,
      calcState["firstNumber"].length - 1
    );
    document.getElementById("displaybox").textContent =
      calcState["firstNumber"];
  } else if (calcState["secondNumber"] == "") {
    calcState["operator"] = "";
  } else {
    calcState["secondNumber"] = calcState["secondNumber"].slice(
      0,
      calcState["secondNumber"].length - 1
    );
    document.getElementById("displaybox").textContent =
      calcState["secondNumber"];
  }
}
