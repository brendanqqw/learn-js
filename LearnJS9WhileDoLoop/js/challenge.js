
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //array of numbers
let sum = 0; //sum of the numbers
let i = 0; //index

while(number[i]){ //while there is a number in the array
    sum += number[i]; //add the number to the sum
    i++; //increment the index
}
console.log(sum); //print the sum
//output: 55
