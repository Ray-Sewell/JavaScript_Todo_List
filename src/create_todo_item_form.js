const splash = document.createElement("div");
const content = document.querySelector("#content");
splash.id = "splash";

import create_todo_item from "./create_todo_item";
import current_project from "./current_project";
import display_item_list from "./display_item_list";

function create_item_form() {
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
        close_create_item_form();
    }
    header.innerHTML = "Create new Todo item";
    name_label.innerHTML = "name";
    name.type = "text";
    name.id = "item-creation-name";
    desc_label.innerHTML = "description";
    desc.type = "text";
    name.id = "item-creation-desc";
    submit.id = "submit_form_button";
    submit.innerHTML = "create";
    submit.onclick = function() {
       create_todo_item(current_project(), name.value, desc.value, "low");
       close_create_item_form();
       display_item_list();
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

function show_create_item_form() {
    content.appendChild(splash);
}
function close_create_item_form() {
    let temp = document.querySelector("#splash");
    temp.parentNode.removeChild(temp);
}

export default {create_item_form, show_create_item_form, close_create_item_form}