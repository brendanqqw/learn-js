let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

//Update Existing "key | value"
person["firstName"] = "Brendan"; //Explanation: adds a new key | value to the object
//person.firstName = "Brendan"; //Explanation: adds a new key | value to the object
console.log(person); //Output: {firstName: "Brendan", lastName: "Doe", age: 25}

//Create New Key | Value"
person["middleInitial"] = "B"; //Explanation: adds a new key | value to the object
person.middleInitial = "B"; //Explanation: adds a new key | value to the object
console.log(person); //Output: {firstName: "Brendan", lastName: "Doe", age: 25, middleInitial: "B"}
