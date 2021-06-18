// importing body and style sheet
import "../css/style.css";
import "../css/form.css";
import body from "./body";
import { Project } from "./utility/logic";
import { ToDo } from "./utility/logic";
import UI from "./utility/ui";
import { projects } from "./utility/storage";
body();

// making things interactive

// buttons
const addtodo = document.getElementById("addToDo");
const addproject = document.getElementById("addProject");
const closeProjectBtn = document.getElementById("projectFormClose");
const closeToDoBtn = document.getElementById("toDoFormClose");
const projectAdder = document.getElementById("projectAdder");

// event listeners
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
  const name = document.getElementById("projectName");
  const newProject = new Project(name);
  projects.push(newProject);
  console.log(projects);
});

//functions
