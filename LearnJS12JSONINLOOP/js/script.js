let person = {
  firstName: "Brendan",
  lastName: "Degrano",
  age: 22,
};

let size = Object.keys(person).length; //Explanation: Object.keys() returns an array of a given object's own property names, in the same order as we get with a normal loop. We can use it to get the length of an object. In this case, we are getting the length of the person object.
console.log(size); //Output: 3
