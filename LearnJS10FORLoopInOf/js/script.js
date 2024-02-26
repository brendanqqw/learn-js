let people = ["David", "Alenere", "Gibert", "James"]; // Array of people

let i = 1;
for(let person of people){ // Loop through the array
    console.log(`${i}. ${person}`); // Print each person in the array
    i++;
}

// Output: 1. David
//         2. Alenere
//         3. Giber
//         4. James

for(let person in people){ // Loop through the array
    console.log(`${parseInt(person)+1}. ${people[person]}`); // Print Index
}

// Output: 1. David
//         2. Alenere
//         3. Gibert
//         4. James