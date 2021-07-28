const project = (name, description, priority) => {
    let items = [];
    return { name, description, priority, items, 
        add_item: function (item) {
            this.items.push(item);
        },
        remove_item: function (item) {
            let i = this.items.indexOf(item);
            if (i > -1) {
                this.items.splice(i, 1);
            };
        },
    };
};

const todo_item = (name, description, priority) => {
    let complete = false;
    return { 
        name, description, priority, complete, 
        change_status: function () {
            this.complete = !this.complete;
        }
    };
};

let default_project = project("default project", "default desc", "medium");
let default_item = todo_item("default name", "default desc", "high");
default_project.add_item(test_item);