// const userName = "Max";
// let age = 30;
// age = 29;

// arrow function
// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// printOutput(add(5, 2));
// printOutput(add(11));

const hobbies = ["Sports", "Cooking", "Shopping"];
console.log(hobbies[0]);

const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 34,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
};

const addedNumbers = add(5, 12, 26, 3, 4, 2003, 12.4);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2, remainingHobbies);

const { firstName: userName, age } = person;

console.log(userName, age);
