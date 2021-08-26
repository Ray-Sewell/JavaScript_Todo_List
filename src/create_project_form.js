const splash = document.createElement("div");
const content = document.querySelector("#content");
splash.id = "splash";

import create_project from "./create_project";
import project_nav from "./project_nav";

function create_project_form() {
    let form_container = document.createElement("div");
    let close = document.createElement("button");
    let header = document.createElement("h4");
    let form = document.createElement("form");
    let name_label = document.createElement("label");
    let name = document.createElement("input");
    let desc_label = document.createElement("label");
    let desc = document.createElement("input");
    let submit = document.createElement("div");
    form_container.id = "form_container";
    close.id = "close_form_button";
    close.innerHTML = "X";
    close.onclick = function() {
        close_create_project_form();
    }
    header.innerHTML = "Create new Project";
    name_label.innerHTML = "name";
    name.type = "text";
    desc_label.innerHTML = "description";
    desc.type = "text";
    submit.id = "submit_form_button";
    submit.innerHTML = "create";
    submit.onclick = function() {
       create_project(name.value, desc.value, "low");
       close_create_project_form();
       project_nav();
    }
    form_container.appendChild(close);
    form_container.appendChild(header);
    form_container.appendChild(form);
    form.appendChild(name_label);
    form.appendChild(name);
    form.appendChild(desc_label);
    form.appendChild(desc);
    form.appendChild(submit);
    splash.appendChild(form_container);
}

function show_create_project_form() {
    content.appendChild(splash);
}
function close_create_project_form() {
    let temp = document.querySelector("#splash");
    temp.parentNode.removeChild(temp);
}

export default {create_project_form, show_create_project_form, close_create_project_form}