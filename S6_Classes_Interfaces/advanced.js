"use strict";
// public: access every where
// private: class access only
// protected: only accessible within own class and its subclasses
class User2 {
    _firstName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name.");
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name.");
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    static eid = "USER";
    static greet() {
        console.log("Hello World!");
    }
}
console.log(User2.eid);
User2.greet();
const newUser = new User2();
newUser.firstName = "Jay";
newUser.lastName = "T";
console.log(newUser.fullName);
// Inheritance
class Employee extends User2 {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
        // super.firstName = 'Max';
    }
    work() {
        // ...
        console.log(this._firstName);
    }
}
// Abstract class: only exist in TypeScript
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        // logic to duplicate the UI element
    }
}
class SideDrawerElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
