let names = ["Brendan", "Raul", "Basil", "Degrano"]; // Array of people
let search = "Basil"; // Search for this name

for(let name of names){ // Loop through the array
    if(name === search){ // Check if the name is found
        console.log(`${search} is found in the array`); // Print the result
      else {
        console.log(`${search} is not found in the array`); // Print the result
        }
        break;
    }
}