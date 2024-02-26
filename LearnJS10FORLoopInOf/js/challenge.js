let people = ["Brendan", "Raul", "Basil", "Degrano"]; // Array of people
let search = "bAsIl"; // Search for this name
let isFound = false; // Flag to check if the name is found

for (let i = 0; i < people.length; i++) { // Loop through the array
    if (people[i].toLowerCase() === search.toLowerCase()) { // Check if the name is found
        isFound = true; // Set the flag to true
        console.log(`Found ${people[i]}`); // Print the result
        break; // Break the loop
    }
}

if (!isFound) { // Check if the flag is false
    console.log("Not Found"); // Print the result
}

//output: Found Basil