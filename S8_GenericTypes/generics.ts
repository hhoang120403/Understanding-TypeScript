let names = ["Max", "Anna"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = "Max";
store.isInstructor = true;

let numStore: DataStore<number> = {};

function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge(1, 2);

function merge2<T, U>(a: T, b: U) {
  return [a, b];
}

const sortValue = merge2(1, "Max");

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: "Max" }, { age: 35 });

class User<T> {
  constructor(public id: T) {}
}

const user = new User("i1");
const user2 = new User(2);
