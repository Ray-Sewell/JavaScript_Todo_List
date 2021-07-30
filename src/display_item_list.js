const content = document.querySelector("#content");

function display_item_list(project) {
    content.innerHTML = "";
    project.items.forEach(i => {
        let item = document.createElement("div");
        let item_name = document.createElement("h2");
        let item_description = document.createElement("h5");
        let item_complete = document.createElement("input");
        item.className = "todo-item";
        item.style.background = get_item_priority_color(i);
        item_name.innerHTML = i.name;
        item_description.innerHTML = i.description;
        item_complete.type = "checkbox";
        item_complete.checked = i.complete;
        item.appendChild(item_name);
        item.appendChild(item_description);
        item.appendChild(item_complete);
        content.appendChild(item);
    });
}

function get_item_priority_color(item) {
    let p = item.priority;
    if (p == "high") {
        return "#DC143C";
    } else if (p == "medium") {
        return "#FF7F50";
    } else {
        return "#5F9EA0";
    }
}

export default display_item_list