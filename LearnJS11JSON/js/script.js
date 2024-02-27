let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

console.log(person);
let strPerson = JSON.stringify(person); //Explanation: JSON.stringify() method converts a JavaScript object or value to a JSON string
//Turns the person object into a JSON string
console.log(strPerson); //Output: {"firstName":"John","lastName":"Doe","age":25}
