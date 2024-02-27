let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

let strPerson = JSON.stringify(person); //Explanation: JSON.stringify() method converts a JavaScript object or value to a JSON string
console.log(strPerson); //Output: {"firstName":"John","lastName":"Doe","age":25}
