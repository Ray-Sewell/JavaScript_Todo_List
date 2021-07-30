import set_focus from "./set_focus";

const project_list_html = document.querySelector("#project-list");

function project_nav(project_list) {
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