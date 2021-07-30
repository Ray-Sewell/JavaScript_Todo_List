import get_project_list from "./index";
import display_item_list from "./display_item_list";

const content = document.querySelector("#content");

function set_focus(i) {
    let project_list = get_project_list();
    let project = project_list[i];
    display_item_list(project);
    content.dataset.index = i;
}

export default set_focus