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

export default project