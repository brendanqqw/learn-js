let person = {
  firstName: "Brendan",
  lastName: "Degrano",
  age: 22,
};

let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
  console.log(person[keys[i]]);
}
