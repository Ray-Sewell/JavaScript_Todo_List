import project from "./project";
import project_list_helpers from "./project_list";

function create_project(name, desc, priority) {
    let temp_project = project(name, desc, priority);
    project_list_helpers.set_project_list(temp_project);
    return temp_project;
}

export default create_project