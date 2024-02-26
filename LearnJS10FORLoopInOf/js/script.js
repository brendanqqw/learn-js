let people = ["Brendan", "Raul", "Basil", "Degrano"]; // Array of people
let search = "bAsIl"; // Search for this name

for (let person = 0; i < people.length; i++) { // Loop through the array
    if (people[person].toLowerCase() === search.toLowerCase()) { // Check if the name is found
        console.log(`${search} is found in the array`); // Print the result
        break; // Break the loop
    }
}