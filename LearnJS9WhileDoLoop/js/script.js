let people = ["David", "Alenere", "Gibert", "James"]; //array of people
let i = 0; //index of the array
let search = "Gibert"; //search for Gibert in the array

while(people[i]){ //while there is a person in the array
    if(people[i] === search){ //if the person is Gibert
        console.log(people[i]); //print Gibert
        break; //stop the loop
    }
    i++; //increment the index
}

//Output: Gibert