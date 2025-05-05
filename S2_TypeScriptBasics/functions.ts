function add(a: number, b: number): number {
  return a + b;
}

function log(message: string) {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

function performJob(callbackFn: (message: string) => void) {
  // ...
  callbackFn("Job done");
}

performJob(log);

type User2 = {
  name: string;
  age: number;
  greet: () => string;
};

let newUser: User2 = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello World!");
    return this.name;
  },
};

var userName = newUser.greet();
