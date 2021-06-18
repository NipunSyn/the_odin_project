export class Project {
    constructor(name) {
        this.name = name
    }
}

export class ToDo {
    constructor(title, desc, priority, dueDate, isComplete) {
        this.title = title;
        this.description = desc;
        this.priority = priority;
        this.dueDate = dueDate;
        this.isComplete = isComplete;
    }
}