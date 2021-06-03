//! function to create the grid

let button = document.getElementById("btn");
button.addEventListener("click", createGrid);

function createGrid() {
  let consoleDiv = document.getElementById("console");

  //! checking if the console already has children, if yes, removing them
  while (consoleDiv.firstChild) {
    consoleDiv.removeChild(consoleDiv.firstChild);
  }

  //! creating a new grid, using CSS Grid (easy af)
  let gridNumber = document.getElementById("numGrids").value;
  if (gridNumber < 65 && gridNumber > 0) {
    consoleDiv.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    for (let i = 0; i < gridNumber * gridNumber; i++) {
      let div = document.createElement("div");
      div.className = "item";
      consoleDiv.appendChild(div);
    }
  } else {
    alert("Enter a number in the range 1-64");
  }
}

//! function to add the hover effects (tricky part)
let consoleDiv = document.getElementById("console");
consoleDiv.addEventListener("mouseover", changeColor);

function changeColor(e) {
  let randomColor1 = Math.floor(Math.random() * 255);
  let randomColor2 = Math.floor(Math.random() * 255);
  let randomColor3 = Math.floor(Math.random() * 255);
  if (e.target.id != "console") {
    e.target.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
  }
}
