class Todo {

    tasks:string[] = [];

    add(task:string) {

        this.tasks.push(task);

        console.log("Task Added");
    }

    show() {

        console.log(this.tasks);
    }

    complete(task:string) {

        console.log(task + " Completed");
    }

    delete(task:string) {

        this.tasks =
            this.tasks.filter(t => t != task);

        console.log("Task Deleted");
    }
}

let t = new Todo();

t.add("Study");

t.add("Project");

t.show();

t.complete("Study");

t.delete("Project");

t.show();