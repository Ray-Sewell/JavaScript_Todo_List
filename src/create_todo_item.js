import todo_item from "./todo_item";

function create_todo_item(project, name, desc, priority) {
    let temp_item = todo_item(name, desc, priority);
    project.add_item(temp_item);
    return temp_item;
}

export default create_todo_item