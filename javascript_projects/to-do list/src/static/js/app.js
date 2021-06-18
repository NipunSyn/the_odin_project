// importing body and style sheet
import "../css/style.css";
import "../css/form.css";
import body from "./body";
body();

// making things interactive
const addtodo = document.getElementById("addToDo");
addtodo.addEventListener("click", () => {
  document.querySelector(".bg-modal.to-do-modal-container").style.display =
    "flex";
});

const addproject = document.getElementById("addProject");
addproject.addEventListener("click", () => {
  document.querySelector(".bg-modal.project-modal-container").style.display =
    "flex";
});

const closeProjectBtn = document.getElementById("projectFormClose");
closeProjectBtn.addEventListener("click", () => {
  document.querySelector(".bg-modal.project-modal-container").style.display =
    "none";
});

const closeToDoBtn = document.getElementById("toDoFormClose");
closeToDoBtn.addEventListener("click", () => {
  document.querySelector(".bg-modal.to-do-modal-container").style.display =
    "none";
});
