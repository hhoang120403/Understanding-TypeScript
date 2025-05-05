var hobbies = ["Sports", "Cooking"];

// hobbies.push(10);

// var users: (string | number)[];
var users: Array<string | number>;

users = [1, "Max"];
users = [5, 1];
users = ["Max", "Anna"];

var possibleResults: [number, number]; // tuple
possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

// Object Types

var user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Jay",
  age: "38",
  hobbies: ["Sports", "Shopping"],
  role: {
    description: "admin",
    id: 12,
  },
};

var val: {} = "any types except undefined and null";

var data: Record<string, number | string>; // Construct a type with a set of properties K of type T (object)
data = {
  entry1: 12,
  entry2: "some string",
};
