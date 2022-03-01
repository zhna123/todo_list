import './style/style.css';
import Add_Icon from './images/project_add.svg';
import {getAllProjects} from './project.js';
import {loadProjectContent} from './menuContent.js';
import {openProjectForm} from './form.js';

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

// body has menu and menu content
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
    projects.forEach(p => {
        const projectBtn = document.createElement("button");
        projectBtn.classList.add("proj_btn");
        projectBtn.textContent = p.val.name;
        projectListDiv.appendChild(projectBtn);

        projectBtn.addEventListener("click", function(e) {
            clearMenuContent();
            const projectContent = loadProjectContent(p.val);
            const menuContent = getMenuContent();
            menuContent.appendChild(projectContent);
        })
    })   

    menuDiv.appendChild(titleDiv);
    menuDiv.appendChild(projectListDiv);

    return menuDiv;

}

function clearMenuContent() {
    const menuContent = document.querySelector(".menu_content .content");
    if (menuContent !== null) {
        menuContent.remove();
    }
}

function getMenuContent() {
    return document.querySelector(".menu_content");
}

function loadMenuContent() {

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu_content");

    const content = loadProjectContent({name: "default", todoItems: []});
    
    menuContent.appendChild(content);

    return menuContent;

}
