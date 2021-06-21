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
const viewBox = document.getElementById("viewBox");

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

    if(confirm("Are you sure?")) {
      UI.removeProject(e.target);
      Storage.removeProject(e.target.previousElementSibling.innerText);
    }
    
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

viewBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-tag")) {
    if (confirm("Are you sure?")) {
      UI.removeToDo(e.target)
      const projName = document.getElementById("projectTitle").innerText
      const todoTitle = e.target.parentElement.parentElement.firstElementChild.firstElementChild.innerText
      console.log(todoTitle)
      console.log(projName)
      Storage.removeToDo(projName, todoTitle)
    }
  }
})

toDoAdder.addEventListener("click", () => {
  Logic.addToDoFunc();
  document.querySelector("#toDoForm").reset();
  document.querySelector(".bg-modal.to-do-modal-container").style.display =
    "none";
});

viewBox.addEventListener("click", (e) => {
  const item = e.target
  if(item.classList.contains("btn-done"))
  {const div = item.parentElement.parentElement
  div.classList.toggle("doneTask")
  }
})





