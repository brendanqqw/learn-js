let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

//Update Existing "key | value"
person["firstName"] = "Brendan";
console.log(person);

//Create New Key | Value"
person["middleInitial"] = "B";
console.log(person);
