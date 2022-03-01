// need to delete after testing
import {Project} from './project.js';
import {TodoItem} from './todoItem.js';


const PROJECT_PREFIX = "project_";
const TODO_PREFIX = "todo_";

export default class Storage {
    saveProject(project) {
        localStorage.setItem(PROJECT_PREFIX + project.name, JSON.stringify(project));
    }

    getProjectByName(name) {
        const project = localStorage.getItem(PROJECT_PREFIX + name);
        return project === null ? {} : JSON.parse(project);
    }

    getAllProjects() {
        // let item, results = [];
        // for (item in localStorage) {
        //     if (localStorage.hasOwnProperty(item)) {
        //         const regex = /project_.+/i;
        //         if(item.match(regex)) {
        //             const value = JSON.parse(localStorage.getItem(item));
        //             results.push({key: item, val: value});
        //         }
        //     }
        // }
        // title, dueDate, priority, description, project
        const todo = new TodoItem("todo 1", "na", "low", "na", "abc");
        const todo2 = new TodoItem("todo 2", "na", "low", "na", "abc");

        const proj = new Project("abc", [todo, todo2]);

        const results = [];
        results.push({key: "abc", val: proj});
        return results;
    }

    saveTodoItemInProject(projectName, todoItem) {
        const project = this.getProjectByName(projectName);
        project.todoItems.push(todoItem);
        this.saveProject(project)
    }

    // getTodosFromProject(project) {
    //     const todos = localStorage.getI
    // }
}