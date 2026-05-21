"use strict";
class Contact {
    contact = [];
    add(name) {
        this.contact.push(name);
        console.log(name + " Added to the contact");
    }
    search(name) {
        if (this.contact.includes(name)) {
            console.log(name + " is present ");
        }
        else {
            console.log("Not found");
        }
    }
    Delete(name) {
        this.contact.filter(c => c != name);
        console.log(name + " deleted");
    }
}
let c = new Contact();
c.add("Pratik");
c.search("Pratik");
c.Delete("Pratik");
c.search("PratCik");
