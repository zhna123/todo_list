import Storage from './storage.js';

export class Project {
    constructor(name, todoItems) {
        this.name = name;
        this.todoItems = todoItems;
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

export function getOrCreateProject(name) {
    return storage.getOrCreateProject(name);
}

export function getProject(name) {
    return storage.getProjectByName(name);
}

export function saveTodoItemInProject(projectName, todoItem) {
    storage.saveTodoItemInProject(projectName, todoItem);
}

export function updateTodoItem(projectName, todoItem, index) {
    storage.updateTodoItem(projectName, todoItem, index);
}

export function deleteTodoItem(projectName, index) {
    storage.deleteTodoItem(projectName, index);
}