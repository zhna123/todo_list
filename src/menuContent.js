import ADD_TODO_ICON from './images/add_todo.svg';


export function loadProjectContent(project) {

    const content = document.createElement("div");
    content.classList.add("content");

    const todos = fetchProjectTodos(project);
    if (todos.length === 0) {

        const textDiv = document.createElement("div");
        textDiv.classList.add("text");
        textDiv.setAttribute('style', 'white-space: pre;')
        textDiv.textContent = "You don't have any TODOs yet.\r\nStart by creating a TODO.";
        content.appendChild(textDiv);

        const todoAddIcon = new Image();
        todoAddIcon.src = ADD_TODO_ICON;
        content.appendChild(todoAddIcon);
    } else {
        const todoContent = loadTodos(todos, project.name);
        content.appendChild(todoContent);
    }
    return content;
}

function fetchProjectTodos(project) {
    return project.todoItems;
}

function loadTodos(todos, projectName) {
    console.log(todos)
    const todoContent = document.createElement("div");
    const headingDiv = document.createElement("div");
    headingDiv.classList.add("heading");

    const todoAddIcon = new Image();
    todoAddIcon.src = ADD_TODO_ICON;
    headingDiv.appendChild(todoAddIcon);

    const headingTextDiv = document.createElement("div");
    headingTextDiv.classList.add("text");
    headingTextDiv.textContent = projectName;
    headingDiv.appendChild(headingTextDiv);

    todoContent.appendChild(headingDiv);

    // todos Div
    const todosDiv = loadTodosDiv(todos);
    todoContent.appendChild(todosDiv);

    return todoContent;
}

function loadTodosDiv(todos) {
    const todosDiv = document.createElement("div");
    todosDiv.classList.add("todos");

    todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const left = document.createElement("div");
        left.classList.add("left");

        left.textContent = todo.title;

        const completeBtn = document.createElement("button");
        completeBtn.classList.add("button");
        completeBtn.classList.add("complete");
        completeBtn.textContent = "COMPLETE";
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
        right.appendChild(delBtn);

        todoDiv.appendChild(right);

        todosDiv.appendChild(todoDiv);

    });

    const divider = document.createElement("hr");
    divider.classList.add("divider");
    todosDiv.appendChild(divider);

    return todosDiv;
}
