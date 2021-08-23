const project_list = []

function set_project_list(project) {
    project_list.push(project);
}
function get_project_list() {
    return project_list;
}

export default {set_project_list, get_project_list}