class TaskCollection {

    constructor(tasks = []) {
        this.tasks = tasks; 
    }

    log() {
        this.tasks.forEach((task, index) => console.log(task, index));
    }



}


class Task {

    constructor(title){
        this.title = title; 
    }
}