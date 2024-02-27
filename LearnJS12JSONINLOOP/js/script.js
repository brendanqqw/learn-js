let person = {
  firstName: "Brendan",
  lastName: "Degrano",
  age: 22,
};

let keys = Object.keys(person); //Object.keys() is a method that returns an array of a given object's own property names, in the same order as we get with a normal loop.
console.log(keys); //Explanation: This will return an array of the keys in the object person.

//Output:
// [ 'firstName', 'lastName', 'age' ]
