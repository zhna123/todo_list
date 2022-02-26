import './style/style.css';
import Add_Icon from './images/project_add.svg';
import Close_Icon from './images/close_form.svg';
import {createNewProject, getAllProjects} from './project.js';

export function loadHeader() {

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.textContent = "Tue Feb 22 2022"; // TODO - change to use today's date

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = "TODO LIST";

    headerDiv.appendChild(dateDiv);
    headerDiv.appendChild(titleDiv);

    return headerDiv;

}

export function loadBody() {

    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("content_body");
    const menuDiv = loadMenu();
    const menuContentDiv = loadMenuContent();
    bodyDiv.appendChild(menuDiv);
    bodyDiv.appendChild(menuContentDiv);

    return bodyDiv;
    
}

function loadMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("project");
    titleDiv.textContent = "PROJECT";

    // add icon
    const projectAddIcon = new Image();
    projectAddIcon.src = Add_Icon;
    titleDiv.appendChild(projectAddIcon);

    projectAddIcon.addEventListener("click", function(e) {
        openProjectForm();
    })


    const projectListDiv = document.createElement("div");
    projectListDiv.classList.add("project_list");

    const defaultProjBtn = document.createElement("button");
    defaultProjBtn.classList.add("proj_btn");
    defaultProjBtn.classList.add("default");
    defaultProjBtn.textContent = "Default Project";
    projectListDiv.appendChild(defaultProjBtn);

    //load all project from localStorage
    const projects = getAllProjects();
    if (projects.length === 0) {
        console.log("empty projects")
    } else {
        console.log(projects)
    }

    projects.forEach(p => {
        const projectBtn = document.createElement("button");
        projectBtn.classList.add("proj_btn");
        projectBtn.textContent = p.val.name;
        projectListDiv.appendChild(projectBtn);
    })   

    menuDiv.appendChild(titleDiv);
    menuDiv.appendChild(projectListDiv);

    return menuDiv;

}

function loadMenuContent() {

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu_content");

    return menuContent;

}

function openProjectForm() {
    const popup = createPopupStructure();
    const formContent = popup.querySelector(".form_content");
    formContent.appendChild(projectForm());

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
