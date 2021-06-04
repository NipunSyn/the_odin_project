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

let choices = document.querySelectorAll("button");
for (let i = 0; i < choices.length; i++) {
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

function readFirstNumber(value) {
  calcState["firstNumber"] += value;
  document.getElementById("displaybox").textContent = calcState["firstNumber"];
}

function readSecondNumber(value) {
  calcState["secondNumber"] += value;
  document.getElementById("displaybox").textContent = calcState["secondNumber"];
}

function checkOperator(event) {
  if (calcState["firstNumber"] == "" || calcState["firstNumber"] == "-") {
    alert("Operator cannot be entered first, except minus");
  } else if (calcState["firstNumber"] == "" && event.target.value == "minus") {
    calcState["firstNumber"] = event.target.value;
    console.log("First Number: ", calcState["firstNumber"]);
  } else {
    calcState["operator"] = event.target.value;
    console.log("Operator:", calcState["operator"]);
  }
}

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

function resetFunction() {
  calcState = {
    firstNumber: "",
    secondNumber: "",
    operator: "",
    result: 0,
  };
  document.getElementById("displaybox").textContent = "0";
}

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
