import project from "./project";
import todo_item from "./todo_item";
import project_nav from "./project_nav";
import display_item_list from "./display_item_list";
import item_form_helpers from"./item_form";
import "./index.css";

let project_list = [];

function get_project_list() {  
    return project_list;
}

function create_project(name, desc, priority) {
    let temp_project = project(name, desc, priority);
    project_list.push(temp_project);
    return temp_project;
}

function create_todo_item(project, name, desc, priority) {
    let temp_item = todo_item(name, desc, priority);
    project.add_item(temp_item);
    return temp_item;
}

let default_project = create_project("default project", "default desc", "high");
create_todo_item(default_project, "default item", "default desc", "low");
create_todo_item(default_project, "default item", "default desc", "medium");
create_todo_item(default_project, "default item", "default desc", "high");
let default_project_2 = create_project("default project 2", "default desc", "low");
create_todo_item(default_project_2, "default item 2", "default desc 2", "low");

display_item_list(project_list[0]);
project_nav(project_list);
item_form_helpers.create_item_form();
item_form_helpers.show_create_item_form();

export default get_project_list