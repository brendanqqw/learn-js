let person = {
  firstName: "Brendan",
  lastName: "Degrano",
  age: 22,
};
for (let i in person) {
  //Explaination: This is a for-in loop that iterates through the properties of the person object
  console.log(i); //Explaination: This logs the property name
}

//Output: firstName
//        lastName
//        age
