const todo_item = (name, description, priority) => {
    let complete = false;
    return { 
        name, description, priority, complete, 
        change_status: function () {
            this.complete = !this.complete;
        }
    };
};

export default todo_item