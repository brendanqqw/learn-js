//Registered and 18 above - Valid Voter
//Not Registered and 18 above - Register First
// Registered and below 18 - Invalid Voter
//Not Registered and below 18 - Non Voter
let age = 16;
let isRegistered = false;

if (isRegistered && age >= 18) alert("Valid Voter");
else if (!isRegistered && age >= 18) alert("Register First");
else if (isRegistered && age < 18) alert("Invalid Voter");
else if (!isRegistered && age < 18) alert("Non Voter");
