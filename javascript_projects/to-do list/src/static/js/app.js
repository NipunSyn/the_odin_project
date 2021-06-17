// importing body and style sheet
import "../css/style.css";
import body from "./body";
body();

// making things interactive
const addtodo = document.getElementById("addToDo");
addtodo.addEventListener("click", () => {
  const ul = document.getElementById("toDoList");
  const li = document.createElement("li");
  li.className = "to-do-list";
  const toDoDiv = document.createElement("div");
  toDoDiv.className = "to-do-div";
  toDoDiv.innerHTML = "Hey";
  li.appendChild(toDoDiv);
  ul.appendChild(li);
});

const addproject = document.getElementById("addProject");
addproject.addEventListener("click", () => {
  const ul = document.getElementById("projectList");
  const li = document.createElement("li");
  li.classList.add("project");
  const minidiv = document.createElement("div");
  minidiv.classList.add("project-div");
  const p = document.createElement("p");
  p.classList.add("project-name");
  p.innerText = "New Project";
  minidiv.appendChild(p);
  li.appendChild(minidiv);
  ul.appendChild(li);
});
