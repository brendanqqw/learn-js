let people = ["David", "Alenere", "Gibert", "James"]; // Array of people

for(let i = 0; i < people.length; i++) { // Loop through the array
    console.log(people[i]); // Print the name of the person

    if( i === 1) { // If the index is 1
        break; // Stop the loop
    }
}

// Output: David
//         Alenere
