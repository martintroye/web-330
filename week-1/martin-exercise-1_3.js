/*
============================================
; Title: Exercise 1.3
; Author: Troy Martin
; Date: 04/18/2019
; Modified By: Troy Martin
; Description: Class Refresher, define an object using a function
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 1.3"), "\n");

/*
  Expected output:
  Troy Martin
  Exercise 1.3
  <Today's Date>

  -- DISPLAYING CELL PHONE DETAILS --
  Manufacturer: Apple
  Model: iPhone 7
  Color: Black
  Price: $700.00

 */

// variable declaration and assignment
// Declare an instance of a CellPhone
let myPhone = new CellPhone("Apple", "iPhone 7", "Black", 700.00)

// function declaration
/*
; Params: manufacturer: string, model: string, color: string, price: number
; Response: undefined.
; Description: CellPhone object.
*/
function CellPhone(manufacturer, model, color, price){
  // Declare and set the local variables to the parameter values
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  /*
  ; Params: none
  ; Response: number
  ; Description: Returns the price of the cell phone, with two decimal places.
  */
  this.getPrice = function(){
    // Return the value of the price and call the toFixed function to format the number
    return this.price.toFixed(2);
  }
  /*
  ; Params: none
  ; Response: string
  ; Description: Returns the model of the CellPhone
  */
  this.getModel = function(){
    // Return the value of the model
    return this.model;
  }
  /*
  ; Params: none
  ; Response: string
  ; Description: Returns formatted details of the CellPhone
  */
  this.getDetails = function(){
    // Return a string describing the instance of the CellPhone using the local variables and calling the getModel and getPrice functions
    return `Manufacturer: ${this.manufacturer} \nModel: ${this.getModel()} \nColor: ${this.color} \nPrice: $${this.getPrice()}`;
  }
}

// output
// Call the console log function to output a blank line and header for the output
console.log("");
console.log("-- DISPLAYING CELL PHONE DETAILS --");
// Call the console log function to output the details of the instance of the cell phone
console.log(myPhone.getDetails());

// end program
