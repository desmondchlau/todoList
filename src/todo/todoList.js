class todoList {
    constructor() {
        this.ls = [];
    }

    constructor(data) {
        this.ls = [];

        //insert todos from data
    }

    insert(todo) {
        //insert and preserve order
    }

    remove(title) {
        //search todo by title and remove from array
    }

    sort(todo) {
        //helper function to sort array before/after operation
    }

    writeToJSON(file) {
        //write data to JSON, only used upon termination of program
    }

    getList(){
        return this.ls;
    }
}