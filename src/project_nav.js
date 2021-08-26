import set_focus from "./set_focus";
import project_list_helpers from "./project_list";
import project_form_helpers from "./create_project_form";

const project_list_html = document.querySelector("#project-list");

function project_nav() {
    project_list_html.innerHTML = "";
    let project_list = project_list_helpers.get_project_list()
    let add_project_button = document.createElement("div");
    add_project_button.id = "add-project-button";
    add_project_button.innerHTML = "+";
    add_project_button.onclick = function() {
        project_form_helpers.show_create_project_form();
    }
    project_list_html.appendChild(add_project_button);
    project_list.forEach((p, i) => {
        let project = document.createElement("div");
        project.className = "project-nav-button";
        project.innerHTML = p.name;
        project.dataset.index = i;
        project.onclick = function() {
            set_focus(i);
        };
        project_list_html.appendChild(project);
    });
}

export default project_nav