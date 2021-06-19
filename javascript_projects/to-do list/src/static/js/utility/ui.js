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

  static changeToDoList() {
    const mainDiv = document.createElement("div");
  }

  static changeProjectTitle(name) {
    document.getElementById("projectTitle").innerHTML = name;
  }
}
