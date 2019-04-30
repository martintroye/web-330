/*
============================================
; Title: Exercise 2.2
; Author: Troy Martin
; Date: 04/28/2019
; Modified By: Troy Martin
; Description: Exercise 2.2 Prototypes
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 2.2"));
console.log("");

/*
 Expected output:

 Troy Martin
 Exercise 2.2
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'
*/

// variable declaration and assignment

// Declare the prototype object with the getAge function
let person = {
  getAge: function(){
    return this.age;
  }
}

// Call the Object create function to create an instance of a person and set the age and full name of the instance
let troy = Object.create(person, {
      age: {value: 50},
      fullName: {value: function(){ return "Troy Martin"}
    }
  }
);


// output
// Call the console log function to format the output
// Call the console log function to output the persons name and age
console.log(`The person's full name is '${troy.fullName()}'`);
console.log(`The person's age is '${troy.getAge()}'`);
// end program
