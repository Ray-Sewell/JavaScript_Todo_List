const content = document.querySelector("#content");
content.dataset.index = 0;

import create_todo_item from "./create_todo_item";
import create_project from "./create_project";
import project_nav from "./project_nav";
import display_item_list from "./display_item_list";
import item_form_helpers from"./todo_item_form";
import project_list_helpers from "./project_list";
import "./index.css";

let default_project = create_project("default project", "default desc", "high");
create_todo_item(default_project, "default item", "default desc", "low");
create_todo_item(default_project, "default item", "default desc", "medium");
create_todo_item(default_project, "default item", "default desc", "high");
let default_project_2 = create_project("default project 2", "default desc", "low");
create_todo_item(default_project_2, "default item 2", "default desc 2", "low");

display_item_list();
project_nav(project_list_helpers.get_project_list());
item_form_helpers.create_item_form();
item_form_helpers.show_create_item_form();