let people = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 50,
  },
  {
    firstName: "Anna",
    lastName: "Smith",
    age: 25,
  },
  {
    firstName: "Peter",
    lastName: "Jones",
    age: 30,
  },
];
console.log(people); // Array(3) [Object, Object, Object]
console.log(people[1].firstName); // Anna
console.log(`${people[1].firstName} ${people[1].lastName}`); // Anna Smith
