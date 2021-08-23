const content = document.querySelector("#content");

import project_list_helpers from "./project_list";

function current_project() {
    return project_list_helpers.get_project_list()[content.dataset.index];
}

export default current_project