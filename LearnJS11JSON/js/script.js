let person = {
  firstName: "John",
  lastName: "Doe",
  3: 25,
};

//Only Works on a "String" Key
console.log(`${person.firstName} ${person.lastName}`);
//Output: John Doe

console.log(person.3);
//Output error because it is not a string key

console.log(person["3"]);
//Output: 25 shows the value of the key 3 because it is a string key


