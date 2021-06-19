import UI from "./ui";

const toDos = [];

export class Project {
  constructor(name) {
    this.name = name;
  }
}

export class ToDo {
  constructor(title, desc, priority, dueDate, isComplete = false) {
    this.title = title;
    this.description = desc;
    this.priority = priority;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
  }
}

export class Logic {
  static addToDoFunc() {
    const title = document.getElementById("toDoName").value;
    const description = document.getElementById("toDoDesc").value;
    let priority;
    let radios = document.getElementsByName("priority");
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        priority = radios[i].value;
        break;
      }
    }
    const date = document.getElementById("date").value;
    const dueDate = new Date(date);

    const toDo = new ToDo(title, description, priority, dueDate);
    toDos.push(toDo);

    UI.changeToDoList(toDo)
  }
}
