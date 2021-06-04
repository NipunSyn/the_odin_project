//todo figure out how to store the first number and separate it from the second number
//? string concat maybe?
//todo write a function to display the number typed up until the operator, after that display the second number
//todo if a third number is typed, display the result of the first two numbers, and use that as the new first number
//todo figure out how to work with decimal points

//! MATH FUNCTIONS
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

//! CALCULATOR STATE
calcState = {
  firstNumber: "",
  secondNumber: "",
  operator: "",
  result: "",
};

function separateNumbers(event) {
  if (
    event.target.value != "plus" ||
    event.target.value != "minus" ||
    event.target.value != "divide" ||
    event.target.value != "multiply" ||
    event.target.value != "reset" ||
    event.target.value != "del" ||
    event.target.value != "decimel" ||
    event.target.value != "equal"
  ) {
    if (calcState["firstNumber"] == "") {
      calcState["firstNumber"] += event.target.value;
    } else if (calcState["secondNumber"] == "") {
      calcState["secondNumber"] += event.target.value;
    } else {
      firstNumber = Number(firstNumber);
      secondNumber = Number(secondNumber);
      calcState["result"];
    }
  } else {
  }
}
