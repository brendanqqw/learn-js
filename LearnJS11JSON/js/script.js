let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  hobbies: ["reading", "coding", "swimming"],
};

//Update Existing "key | value"
person["firstName"] = "Brendan"; //Explanation: adds a new key | value to the object
//person.firstName = "Brendan"; Same Concept
console.log(person); //Output: {firstName: "Brendan", lastName: "Doe", age: 25}

//Create New Key | Value"
person["middleInitial"] = "B"; //Explanation: adds a new key | value to the object
person.middleInitial = "B"; // Same Concept
console.log(person); //Output: {firstName: "Brendan", lastName: "Doe", age: 25, middleInitial: "B"}

console.log(person.hobbies); //Output: ["reading", "coding", "swimming"]
person.hobbies[0] = "Writing";
//person.hobbies[0] = "Playing" //Same Concept
console.log(person.hobbies); //Output: ["Writing", "coding", "swimming"]
