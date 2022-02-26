import {loadHeader, loadBody} from './loadFrontPage.js'

const pageBody = document.querySelector("body");
const content = document.createElement("div");
content.id = "content";
pageBody.appendChild(content);

const headerDiv = loadHeader();
const bodyDiv = loadBody();
content.appendChild(headerDiv);
content.appendChild(bodyDiv);

