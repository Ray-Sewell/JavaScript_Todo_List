import get_project_from_project_list from "./index";
import display_item_list from "./display_item_list";

function set_focus(i) {
    let project = get_project_from_project_list(i);
    display_item_list(project);
}

export default set_focus