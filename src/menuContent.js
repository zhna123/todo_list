import ADD_TODO_ICON from './images/add_todo.svg';
import {openAddTodoForm} from './form.js';
import {markComplete} from './todoItem.js'
import {updateTodoItem, deleteTodoItem} from './project.js';

export function loadProjectContent(project, projectBtn) {

    const content = document.createElement("div");
    content.classList.add("content");

    const todos = project.todoItems;
    if (todos.length === 0) {
        const textDiv = document.createElement("div");
        textDiv.classList.add("text");
        textDiv.textContent = 'Start by creating a TODO.';
        content.appendChild(textDiv);

        const todoAddIcon = new Image();
        todoAddIcon.src = ADD_TODO_ICON;
        content.appendChild(todoAddIcon);

        todoAddIcon.addEventListener("click", function(e) {
            openAddTodoForm(project, projectBtn);
        });
    } else {
        const todoContent = loadTodos(project, projectBtn);
        content.appendChild(todoContent);
    }
    return content;
}

function loadTodos(project, projectBtn) {
    const todoContent = document.createElement("div");
    const headingDiv = document.createElement("div");
    headingDiv.classList.add("heading");

    const projectName = project.name;

    const todoAddIcon = new Image();
    todoAddIcon.src = ADD_TODO_ICON;
    headingDiv.appendChild(todoAddIcon);

    todoAddIcon.addEventListener("click", function(e) {
        openAddTodoForm(project, projectBtn);
    });
    const headingTextDiv = document.createElement("div");
    headingTextDiv.classList.add("text");
    headingTextDiv.textContent = projectName;
    headingDiv.appendChild(headingTextDiv);
    todoContent.appendChild(headingDiv);

    // todos Div
    const todosDiv = loadTodosDiv(project, projectBtn);
    todoContent.appendChild(todosDiv);

    return todoContent;
}

function loadTodosDiv(project, projectBtn) {
    const todosDiv = document.createElement("div");
    todosDiv.classList.add("todos");

    const todos = project.todoItems;

    todos.forEach((todo, index) => {
        if (todo.complete) {
            return;
        }
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const left = document.createElement("div");
        left.classList.add("left");

        left.textContent = todo.title;

        const completeBtn = document.createElement("button");
        completeBtn.classList.add("button");
        completeBtn.classList.add("complete");
        completeBtn.textContent = "COMPLETE";

        completeBtn.addEventListener("click", function(e) {
            markComplete(todo);
            updateTodoItem(project.name, todo, index);
            projectBtn.click();
        });

        left.appendChild(completeBtn);

        todoDiv.appendChild(left);

        const right = document.createElement("div");
        right.classList.add("right");

        const editBtn = document.createElement("button");
        editBtn.classList.add("button");
        editBtn.classList.add("edit");
        editBtn.textContent = "EDIT";
        right.appendChild(editBtn);

        const delBtn = document.createElement("button");
        delBtn.classList.add("button");
        delBtn.classList.add("delete");
        delBtn.textContent = "DELETE";

        delBtn.addEventListener("click", function(e) {
            deleteTodoItem(project.name, index);
            projectBtn.click();
        });

        right.appendChild(delBtn);

        todoDiv.appendChild(right);

        todosDiv.appendChild(todoDiv);

    });

    const divider = document.createElement("hr");
    divider.classList.add("divider");
    todosDiv.appendChild(divider);

    const completed = loadCompletedTodos(todos, project.name, projectBtn);
    todosDiv.appendChild(completed);

    return todosDiv;
}

function loadCompletedTodos(todos, projectName, projectBtn) {
    const completedDiv = document.createElement("div");
    completedDiv.classList.add("completed");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("completed_heading");
    titleDiv.textContent = "COMPLETED";
    completedDiv.appendChild(titleDiv);

    todos.forEach((todo, index) => {
        if (!todo.complete) {
            return;
        }
        const completedTodo = document.createElement("div");
        completedTodo.classList.add("completed_todo");
        const span = document.createElement("span");
        span.textContent = todo.title;
        completedTodo.appendChild(span);


        const delBtn = document.createElement("button");
        delBtn.classList.add("button");
        delBtn.classList.add("delete");
        delBtn.textContent = "DELETE";
        completedTodo.appendChild(delBtn);

        delBtn.addEventListener("click", function(e) {
            deleteTodoItem(projectName, index);
            projectBtn.click();
        });

        completedDiv.appendChild(completedTodo);
    })

    return completedDiv;
}

function deleteProjectButton() {
    
}
