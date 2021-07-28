import project from "./project";
import todo_item from "./todo_item";
import display from "./display";
import "./index.css";

let project_list = [];

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
create_todo_item(default_project, "default item", "default desc", "medium");

display(project_list);