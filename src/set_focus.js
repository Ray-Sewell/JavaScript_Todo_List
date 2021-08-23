import project_list_helpers from "./project_list";
import display_item_list from "./display_item_list";

const content = document.querySelector("#content");

function set_focus(i) {
    let project_list = project_list_helpers.get_project_list();
    let project = project_list[i];
    content.dataset.index = i;
    display_item_list(project);
}

export default set_focus