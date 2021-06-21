import { Project, Logic } from "./logic";
export default class Storage {
  static getProjects() {
    let projects;
    if (localStorage.getItem("projects") === null) {
      projects = [];
      projects.push(new Project("Today"));
    } else {
      projects = JSON.parse(localStorage.getItem("projects"));
    }
    return projects;
  }

  static addProject(projectName) {
    const projects = Storage.getProjects();
    projects.push(projectName);
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  static removeProject(projectName) {
    const projects = Storage.getProjects();
    projects.forEach((project, index) => {
      if (projectName === project.name) {
        projects.splice(index, 1);
      }
    });
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  static addToDo(toDo) {
    const projects = Storage.getProjects();
    const projectName = document.getElementById("projectTitle").innerText;

    // console.log("Title: ", projectName)
    projects.forEach((project) => {
      // console.log("Project: ", project.name)
      console.log(project.name);
      if (project.name === projectName) {
        project.todoList.push(toDo);
      }
    });
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  static removeToDo(projectName, toDo) {
    const projects = Storage.getProjects();
    projects.forEach((project) => {
      if (project.name === projectName) {
        console.log(project.name === projectName);
        const todoList = project.todoList;
        todoList.forEach((todo, index) => {
          if (todo.title == toDo) {
            todoList.splice(index, 1);
          }
        });
      }
    });
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}
