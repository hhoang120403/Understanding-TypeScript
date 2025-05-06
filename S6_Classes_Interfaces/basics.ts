// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// Shorter
class User {
  readonly hobbies: string[] = [];

  constructor(public name: string, private age: number) {}

  greet() {
    console.log("My age: " + this.age);
  }
}

const max = new User("Max", 34);
const fred = new User("Fred", 29);

// max.hobbies = [];
max.hobbies.push("Sports");

console.log(max, fred);
