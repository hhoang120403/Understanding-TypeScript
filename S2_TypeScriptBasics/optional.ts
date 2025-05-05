function generateError(msg?: string) {
  throw new Error(msg);
}

generateError("An error occurred!");
generateError();

type User = {
  name: string;
  age: number;
  role?: "admin" | "guest";
};

var input = null;
const didProvideInput = input || false;

// ?? : check null or undefined
// ||, && : check falsy value
