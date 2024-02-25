//NESTED Conditional Statements
//You can nest conditional statements inside a conditional statement

let age = 20;
let experience = 5;

if (age >= 18) {
  if (experience > 1) {
    if (experience >= 5) {
      console.log("You are overqualified!");
    }
    console.log("You are hired!");
  } else {
    console.log("You do not have enough experience");
  }
} else {
  console.log("You are not old enough to work");
}
