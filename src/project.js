import Storage from './storage.js';

export class Project {
    constructor(name, todoItems) {
        this.name = name;
        this.todoItems = todoItems;
    } 

    addToTodoItemToProject(todoItem) {
        // const project = 
    }
}

const storage = new Storage();

export function createNewProject(name) {
    const project = new Project(name, []);
    console.log(project);
    storage.saveProject(project);
}

export function getAllProjects() {
    return storage.getAllProjects();
}