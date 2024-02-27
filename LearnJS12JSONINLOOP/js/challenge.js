let grades = {
  science: 90,
  math: 88,
  english: 75,
  programming: 95,
  cookery: 90,
};

let average = 0;

for (let subject in grades) {
  console.log(`${subject} : ${grades[subject]}`);
  average += grades[subject];
}

average /= Object.keys(grades).length;
console.log(" ");
console.log(`Average: ${average}`);
