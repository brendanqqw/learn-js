let people = [
  {
    firstName: "Brendan",
    lastName: "Degrano",
    age: 22,
  },
  {
    firstName: "Brandon",
    lastName: "Degrano",
    age: 15,
  },
  {
    firstName: "Ira",
    lastName: "Degrano",
    age: 9,
  },
  {
    firstName: "Brenda",
    lastName: "Degrano",
    age: 45,
  },
  {
    firstName: "Raul",
    lastName: "Degrano",
    age: 50,
  },
];
for (let i = 0; i < people.length; i++) {
  console.log(`First Name : ${people[i].firstName}`);
  console.log(`Last Name  : ${people[i].lastName}`);
  console.log(`Age        : ${people[i].age}`);
  console.log(" "); //Explaination: This is to add a space between each person's information
}
