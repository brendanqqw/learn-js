let strPerson = `{"firstName":"John", "lastName":"Doe", "age":25}`; // a string with JSON data

let person = JSON.parse(strPerson); // convert the string into a JavaScript object
console.log(person.firstName); // John
