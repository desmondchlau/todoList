
class todo {
    constructor() {
        this.title = "";
        this.date = null;
        this.details = "";
    }

    constructor(title, date, details = ""){
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