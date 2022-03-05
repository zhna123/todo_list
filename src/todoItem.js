export class TodoItem {
    constructor (title, dueDate, priority, description, project, complete) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
        this.project = project;
        this.complete = complete;
    }

    // toggleComppleteStatus() {
    //     this.complete = !this.complete;
    // }
}

export function markComplete(todo) {
    todo.complete = !todo.complete;
}