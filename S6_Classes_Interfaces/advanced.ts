// public: access every where
// private: class access only
// protected: only accessible within own class and its subclasses

class User2 {
  protected _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name.");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
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
  constructor(public jobTitle: string) {
    super();
    // super.firstName = 'Max';
  }

  work() {
    // ...
    console.log(this._firstName);
  }
}

// Abstract class: only exist in TypeScript
abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    // logic to duplicate the UI element
  }
}

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }

  // ...
}
