import './style/style.css';
import Add_Icon from './images/project_add.svg';
import {getAllProjects, getOrCreateProject, getProject} from './project.js';
import {loadProjectContent} from './menuContent.js';
import {openProjectForm} from './form.js';
import {format} from 'date-fns';

export function loadHeader() {

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    const today = format(new Date(), "EEE MMM dd yyyy");
    dateDiv.textContent = today; 

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
    // default project always shows up
    const defaultProjBtn = document.createElement("button");
    defaultProjBtn.classList.add("proj_btn");
    defaultProjBtn.classList.add("default");
    defaultProjBtn.textContent = "Default Project";
    projectListDiv.appendChild(defaultProjBtn);

    defaultProjBtn.addEventListener("click", function(e) {
        const defaultProj = getOrCreateProject("default");
        resetMenuState();
        defaultProjBtn.classList.add("active");
        loadContent(defaultProj, defaultProjBtn);
    })

    //load all project from localStorage
    const projects = getAllProjects();
    projects.filter(p => p.val.name !== "default").forEach(p => {
        const projectBtn = document.createElement("button");
        projectBtn.classList.add("proj_btn");
        projectBtn.textContent = p.val.name;
        projectListDiv.appendChild(projectBtn);

        projectBtn.addEventListener("click", function(e) {
            // ensure to get new content from project
            const proj = getProject(p.val.name);
            resetMenuState();
            projectBtn.classList.add("active");
            loadContent(proj, projectBtn);
        })
    })   

    menuDiv.appendChild(titleDiv);
    menuDiv.appendChild(projectListDiv);

    return menuDiv;

}

function loadContent(project, projectBtn) {
    clearMenuContent();
    const projectContent = loadProjectContent(project, projectBtn);
    const menuContent = document.querySelector(".menu_content");
    menuContent.appendChild(projectContent);
}

function clearMenuContent() {
    const menuContent = document.querySelector(".menu_content .content");
    if (menuContent !== null) {
        menuContent.remove();
    }
}

function resetMenuState() {
    const activeMenu = document.querySelector(".proj_btn.active");
    if (activeMenu !== null) {
        activeMenu.classList.remove("active");
    }
}

function loadMenuContent() {
    const menuContent = document.createElement("div");
    menuContent.classList.add("menu_content");
    return menuContent;
}
