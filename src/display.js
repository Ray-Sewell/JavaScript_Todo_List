const project_list_html = document.querySelector("#project-list");

function display(project_list) {
    project_list.forEach(i => {
        let project_name = document.createElement("div");
        project_name.className = "project-nav-button";
        project_name.innerHTML = i.name;
        project_list_html.appendChild(project_name);
    });
}

export default display