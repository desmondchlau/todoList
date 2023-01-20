class todo {
    constructor(title = "", date = null, details = ""){
        this.title = title;
        this.date = date;
        this.details = details;
    }

    getTitle() {
        return this.title;
    }

    getDate() {
        return this.date;
    }

    getDetails(){
        return this.details;
    }
}