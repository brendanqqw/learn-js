let people = ["David", "Alenere", "Gibert", "James"]; // Array of people

for(let person of people){ // Loop through the array
    console.log(person); // Print each person in the array
}

// Output: David
//         Alenere
//         Gibert
//         James

for(let person in people){ // Loop through the array
    console.log(`${parseInt(person)+1}. ${people[person]}`); // Print Index
}

// Output: 1. David
//         2. Alenere
//         3. Gibert
//         4. James