let grade = 99;

if (grade >= 100) {
  console.log("Invalid Grade");
} else if (grade >= 98) {
  console.log("You have With Highest Honor");
} else if (grade >= 95) {
  console.log("You have With High Honor");
} else if (grade >= 90) {
  console.log("You have With Honor");
} else if (grade >= 75) {
  console.log("You have Passed");
} else if (grade <= 74) {
  console.log("You have Failed");
}
console.log("Congrats!");

//Output: You have failed
//        Congrats!
