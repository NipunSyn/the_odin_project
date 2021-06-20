// importing body and style sheet
import "../css/style.css";
import "../css/form.css";

import body from "./body";
import { Project, Logic } from "./utility/logic";
import UI from "./utility/ui";
import Storage from "./utility/storage";
body();

// making things interactive

// buttons
const addtodo = document.getElementById("addToDo");
const addproject = document.getElementById("addProject");
const closeProjectBtn = document.getElementById("projectFormClose");
const closeToDoBtn = document.getElementById("toDoFormClose");
const projectAdder = document.getElementById("projectAdder");
const toDoAdder = document.getElementById("toDoAdder");
const sidePanel = document.getElementById("aside");

// event listeners

document.addEventListener("DOMContentLoaded", UI.displayProjects);
document.addEventListener("DOMContentLoaded", UI.displayToDos);

sidePanel.addEventListener("click", (e) => {
  if (e.target.innerText != "+" && e.target.className != "flex side-panel") {
    UI.changeProjectTitle(e.target.innerText);
    UI.clearToDos();
    UI.displayToDos();
  }
});

sidePanel.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-tag")) {
    UI.removeProject(e.target);
    console.log(e.target.previousElementSibling.innerText)
    Storage.removeProject(e.target.previousElementSibling.innerText);
  }
});

addtodo.addEventListener("click", () => {
  document.querySelector(".bg-modal.to-do-modal-container").style.display =
    "flex";
});

addproject.addEventListener("click", () => {
  document.querySelector(".bg-modal.project-modal-container").style.display =
    "flex";
});

closeProjectBtn.addEventListener("click", () => {
  document.querySelector("#projectForm").reset();
  document.querySelector(".bg-modal.project-modal-container").style.display =
    "none";
});

closeToDoBtn.addEventListener("click", () => {
  document.querySelector("#toDoForm").reset();
  document.querySelector(".bg-modal.to-do-modal-container").style.display =
    "none";
});

projectAdder.addEventListener("click", () => {
  const name = document.getElementById("projectName").value;
  const newProject = new Project(name);
  Storage.addProject(newProject);
  UI.changeSidePanel(name);
  document.querySelector("#projectForm").reset();
  document.querySelector(".bg-modal.project-modal-container").style.display =
    "none";
});

toDoAdder.addEventListener("click", () => {
  Logic.addToDoFunc();
  document.querySelector("#toDoForm").reset();
  document.querySelector(".bg-modal.to-do-modal-container").style.display =
    "none";
});

//todo design to-do div
//todo design close button
//todo add functionality to the toggle button (complete, not complete)
//todo add buttons to remove entire project
//todo make everything functional
