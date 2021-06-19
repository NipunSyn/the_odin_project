import { ToDo } from "./logic";
import { projects } from "./storage";

export default class UI {
  static changeSidePanel(newProject) {
    const ul = document.getElementById("projectList");
    const li = document.createElement("li");
    li.className = "project";
    const div = document.createElement("div");
    div.className = "project-div";
    const p = document.createElement("p");
    p.classList.add("project-name");
    p.innerText = newProject;

    div.id = newProject;
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
  }

  static changeToDoList(toDo) {
    const mainDiv = document.createElement("div");

    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const div4 = document.createElement("div")

    div1.className = "miniDiv"
    div2.className = "miniDiv"
    div3.className = "miniDiv"
    div4.className = "miniDiv"

    const h1_1 = document.createElement("h2")
    h1_1.textContent = toDo.title
    h1_1.className = "title-1"
    const p = document.createElement("p")
    p.textContent = toDo.description
    p.className = "text-1"
    div1.appendChild(h1_1)
    div1.appendChild(p)
    div1.classList.add("small-div")

    const h1_2 = document.createElement("h2")
    h1_2.textContent = toDo.priority
    h1_2.className = "title-1";
    const button = document.createElement("button")
    button.innerHTML = "change"
    div2.appendChild(h1_2)
    div2.appendChild(button)
    div2.classList.add("small-div");


    const h1_3 = document.createElement("h1")
    h1_3.textContent = toDo.dueDate
    h1_3.className = "title-1";
    div3.appendChild(h1_3)
    div3.classList.add("small-div");


    const button_2 = document.createElement("button")
    button_2.innerHTML = "done"
    button_2.classList.add("close-tag")
    const button_3 = document.createElement("button")
    button_3.innerHTML = "+"
    button_3.classList.add("close-tag")
    div4.appendChild(button_2)
    div4.appendChild(button_3)
    div4.classList.add("small-div");


    mainDiv.appendChild(div1)
    mainDiv.appendChild(div2)
    mainDiv.appendChild(div3)
    mainDiv.appendChild(div4)
    mainDiv.classList.add("to-do-div")

    document.getElementById("toDoList").appendChild(mainDiv)
  }

  static changeProjectTitle(name) {
    document.getElementById("projectTitle").innerHTML = name;
  }
}
