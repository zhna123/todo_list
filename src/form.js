import Close_Icon from './images/close_form.svg';
import ExpandMore_Icon from './images/expand_more.svg';
import ExpandLess_Icon from './images/expand_less.svg';
import {createNewProject, saveTodoItemInProject, getAllProjects, updateTodoItem, deleteTodoItem} from './project.js';
import {TodoItem} from './todoItem.js';

export function openProjectForm() {
    const popup = createPopupStructure();
    const formContent = popup.querySelector(".form_content");
    formContent.appendChild(projectForm());

    appendPopup(popup);
}

export function openAddTodoForm(project, projectBtn) {
    const popup = createPopupStructure();
    const formContent = popup.querySelector(".form_content");
    formContent.appendChild(todoForm(project, projectBtn));

    appendPopup(popup);
}

export function openEditForm(project, todo, index, projectBtn) {
    const popup = createPopupStructure();
    const formContent = popup.querySelector(".form_content");
    formContent.appendChild(editForm(project, todo, index, projectBtn));

    appendPopup(popup);
}

function appendPopup(popup) {
    const mainContent = document.querySelector("#content");
    mainContent.appendChild(popup);
    popup.classList.add("open");
    // add overlay
    mainContent.appendChild(openOverlay());
}

function createPopupStructure() {
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup");

    const formCloseIcon = new Image();
    formCloseIcon.src = Close_Icon;

    const content = document.createElement("div");
    content.classList.add("form_content");

    popupContainer.appendChild(formCloseIcon);
    popupContainer.appendChild(content);

    formCloseIcon.addEventListener("click", function(e) {
        closeForm();
    });
    return popupContainer;
}

function projectForm() {

    const addProject = document.createElement("div");
    addProject.classList.add("add_project");
    const form = document.createElement("form");
    form.classList.add("add_project_form");
    addProject.appendChild(form);

    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input_div");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Project name…"
    input.name = "projectName";
    input.required = true;
    inputDiv.appendChild(input)

    const btnDiv = document.createElement("div")
    btnDiv.classList.add("btn_div");
    const btn = document.createElement("button");
    btn.textContent = "ADD";
    btnDiv.appendChild(btn);

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        const projectName = form.elements['projectName'].value;
        createNewProject(projectName);
        closeForm();
        location.reload();
    })

    form.appendChild(inputDiv);
    form.appendChild(btnDiv);

    return form;
}

function todoForm(project, projectBtn) {
    const addTodo = document.createElement("div");
    addTodo.classList.add("add_todo");
    const form = document.createElement("form");
    form.classList.add("add_todo_form");
    addTodo.appendChild(form);

    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input_div");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "New task ..."
    input.name = "title";
    input.required = true;
    inputDiv.appendChild(input)
    form.appendChild(inputDiv);

    const optionalDiv = document.createElement("div");
    // more options
    const moreOptionDiv = document.createElement("div");
    moreOptionDiv.classList.add("more_option");
    moreOptionDiv.textContent = "SHOW MORE OPTIONS";
    const expandMoreIcon = new Image();
    expandMoreIcon.src = ExpandMore_Icon;
    moreOptionDiv.appendChild(expandMoreIcon);
    optionalDiv.appendChild(moreOptionDiv);
    // less options
    const lessOptionDiv = document.createElement("div");
    lessOptionDiv.classList.add("less_option");
    lessOptionDiv.textContent = "SHOW LESS OPTIONS";
    const expandLessIcon = new Image();
    expandLessIcon.src = ExpandLess_Icon;
    lessOptionDiv.appendChild(expandLessIcon);
    optionalDiv.appendChild(lessOptionDiv);

    form.appendChild(optionalDiv);

    expandMoreIcon.addEventListener("click", function(e) {
        document.querySelector(".more_option").style.display = 'none';
        document.querySelector(".less_option").style.display = 'flex';
        expandHiddenFields();
    })

    expandLessIcon.addEventListener("click", function(e) {
        document.querySelector(".more_option").style.display = 'flex';
        document.querySelector(".less_option").style.display = 'none';
        hideFields();
    })

    // more fields - hidden by default
    const hiddenForm = document.createElement("div");
    hiddenForm.classList.add("hidden");
    // project drop down
    const selectProjDiv = document.createElement("div");
    selectProjDiv.classList.add("select_div");
    const selectProject = document.createElement("select");
    selectProject.name = "project";

    const option = document.createElement("option");
    option.value = "";
    option.disabled = true;
    option.selected = true;
    option.textContent = "Select project";
    selectProject.appendChild(option);

    const projects = getAllProjects();
    projects.forEach(p => {
        const option = document.createElement("option");
        option.value = p.val.name;
        option.textContent = p.val.name;
        selectProject.appendChild(option);
    })

    selectProjDiv.appendChild(selectProject);
    hiddenForm.appendChild(selectProjDiv);

    // priority drop down
    const selectPriorityDiv = document.createElement("div");
    selectPriorityDiv.classList.add("select_div");
    const selectPriority = document.createElement("select");
    selectPriority.name = "priority";

    const priorityOption = document.createElement("option");
    priorityOption.value = "";
    priorityOption.disabled = true;
    priorityOption.selected = true;
    priorityOption.textContent = "Select priority";
    selectPriority.appendChild(priorityOption);

    const allPriorities = ["Low", "Medium", "High"]
    allPriorities.forEach((p, index) => {
        const option = document.createElement("option");
        option.value = p;
        option.textContent = p;
        selectPriority.appendChild(option);
    })

    selectPriorityDiv.appendChild(selectPriority);
    hiddenForm.appendChild(selectPriorityDiv);

    // due date
    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("dueDate_div");
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.name = "dueDate";
    dateInput.placeholder = "Due date"
    dueDateDiv.appendChild(dateInput);
    hiddenForm.appendChild(dueDateDiv);

    // textarea
    const textareaDiv = document.createElement("div");
    textareaDiv.classList.add("textarea_div");
    const textarea = document.createElement("textarea");
    textarea.name = "description";
    textarea.placeholder = "Add description …";
    textareaDiv.appendChild(textarea);
    hiddenForm.appendChild(textareaDiv);

    form.appendChild(hiddenForm);

    const btnDiv = document.createElement("div")
    btnDiv.classList.add("btn_div");
    const btn = document.createElement("button");
    btn.textContent = "SAVE";
    btnDiv.appendChild(btn);

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        const title = form.elements['title'].value;
        const projectName = form.elements['project'].value !== "" ? form.elements['project'].value : project.name;
        const priority = form.elements['priority'].value !== "" ? form.elements['priority'].value : "";
        const description = form.elements['description'].value !== "" ? form.elements['description'].value : "";
        // title, dueDate, priority, description, project, complete
        const todo = new TodoItem(title, "", priority, description, projectName, false); 
        saveTodoItemInProject(projectName, todo)
        
        closeForm();
        projectBtn.click();
    })

    form.appendChild(btnDiv);

    return form;

}

function editForm(project, todo, index, projectBtn) {

    // title, dueDate, priority, description, project, complete
    const title = todo.title;
    const dueDate = todo.dueDate;
    const priority = todo.priority;
    const description = todo.description;
    const projectName = todo.project;
    const complete = false;

    const addTodo = document.createElement("div");
    addTodo.classList.add("add_todo");
    const form = document.createElement("form");
    form.classList.add("add_todo_form");
    addTodo.appendChild(form);

    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input_div");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "New task ...";
    input.name = "title";
    input.value = title;
    input.required = true;
    inputDiv.appendChild(input)
    form.appendChild(inputDiv);

    const hiddenForm = document.createElement("div");
    // project drop down
    const selectProjDiv = document.createElement("div");
    selectProjDiv.classList.add("select_div");
    const selectProject = document.createElement("select");
    selectProject.name = "project";

    const option = document.createElement("option");
    option.value = "";
    option.disabled = true;
    option.selected = true;
    option.textContent = "Select project";
    selectProject.appendChild(option);

    const projects = getAllProjects();
    projects.forEach(p => {
        const option = document.createElement("option");
        option.value = p.val.name;
        option.textContent = p.val.name;
        if (p.val.name === projectName) {
            option.selected = "true";
        }
        selectProject.appendChild(option);
    })

    selectProjDiv.appendChild(selectProject);
    hiddenForm.appendChild(selectProjDiv);

    // priority drop down
    const selectPriorityDiv = document.createElement("div");
    selectPriorityDiv.classList.add("select_div");
    const selectPriority = document.createElement("select");
    selectPriority.name = "priority";

    const priorityOption = document.createElement("option");
    priorityOption.value = "";
    priorityOption.disabled = true;
    priorityOption.selected = true;
    priorityOption.textContent = "Select priority";
    selectPriority.appendChild(priorityOption);

    const allPriorities = ["Low", "Medium", "High"]
    allPriorities.forEach((p, index) => {
        const option = document.createElement("option");
        option.value = p;
        option.textContent = p;
        if (p === priority) {
            option.selected = "true";
        }
        selectPriority.appendChild(option);
    })

    selectPriorityDiv.appendChild(selectPriority);
    hiddenForm.appendChild(selectPriorityDiv);

    // due date - TODO
    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("dueDate_div");
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.name = "dueDate";
    dateInput.placeholder = "Due date"
    dueDateDiv.appendChild(dateInput);
    hiddenForm.appendChild(dueDateDiv);

    // textarea
    const textareaDiv = document.createElement("div");
    textareaDiv.classList.add("textarea_div");
    const textarea = document.createElement("textarea");
    textarea.name = "description";
    textarea.placeholder = "Add description …";
    textarea.value = description;
    textareaDiv.appendChild(textarea);
    hiddenForm.appendChild(textareaDiv);

    form.appendChild(hiddenForm);

    const btnDiv = document.createElement("div")
    btnDiv.classList.add("btn_div");
    const btn = document.createElement("button");
    btn.textContent = "SAVE";
    btnDiv.appendChild(btn);

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        
        const title = form.elements['title'].value;
        const updatedProjectName = form.elements['project'].value !== "" ? form.elements['project'].value : project.name;
        const priority = form.elements['priority'].value !== "" ? form.elements['priority'].value : "";
        const description = form.elements['description'].value !== "" ? form.elements['description'].value : "";

        if (projectName !== updatedProjectName) {
            deleteTodoItem(projectName, index);
        }
        // title, dueDate, priority, description, project, complete
        const todo = new TodoItem(title, "", priority, description, updatedProjectName, complete); 
        updateTodoItem(updatedProjectName, todo, index)
        
        closeForm();
        projectBtn.click();
    })

    form.appendChild(btnDiv);

    return form;
}

// to darken content
function createOverlay() {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    return overlay;
}

function openOverlay() {
    const overlay = createOverlay();
    overlay.classList.add("open");
    return overlay;
}

function closeForm() {
    const popup = document.querySelector(".popup");
    popup.remove();
    const overlay = document.querySelector(".overlay");
    overlay.remove();
}

function expandHiddenFields() {
    const hiddenForm = document.querySelector(".hidden");
    hiddenForm.classList.add("open");
}

function hideFields() {
    const hiddenForm = document.querySelector(".hidden");
    hiddenForm.classList.remove("open");
}
