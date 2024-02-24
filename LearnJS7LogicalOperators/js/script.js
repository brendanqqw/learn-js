//NESTED Conditional Statements
//You can nest conditional statements inside a conditional statement

let age = 16;
let experience = 1;

if (age >= 18) {
  if (experience >= 1) {
    console.log("You are hired!");
  } else {
    console.log("You do not have enough experience");
  }
} else {
  console.log("You are not old enough to work");
}
