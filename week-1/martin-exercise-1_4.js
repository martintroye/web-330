/*
============================================
; Title: Exercise 1.4
; Author: Troy Martin
; Date: 04/18/2019
; Modified By: Troy Martin
; Description: Exercise 1.4, Duck Typing, A.K.A. "Interfaces"
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 1.4"));
console.log("");

/*
  Expected output:

  Troy Martin
  Exercise 1.4
  <Today's Date>

  Car added to the racetrack!
  Truck added to the racetrack!
  Jeep added to the racetrack!

  -- The following vehicles have been added to the racetrack --
  Truck: <Model>
  Car: <Model>
  Jeep: <Model>

*/

// variable declaration and assignment

// Declare an array to represent a racetrack
let racetrack = [];

// Declare an instance of the Car, Truck and Jeep
let toyota = new Car("Avalon");
let ford = new Truck("F150", 2018);
let jeep = new Jeep("Wrangler", 2017, "Black");

// function declaration

/*
; Params: model: string
; Response: undefined.
; Description: Car object.
*/
function Car(model){
  // Declare and set the local variables to the parameter values
  this.model = model;
}
/*
; Params: none
; Response: undefined.
; Description: Output that the instance of the car was added to the racetrack.
*/
Car.prototype.start = function(){
  // Call the console log function to output that the vehicle is on the racetrack.
  console.log("Car added to the racetrack!");
}

/*
; Params: model: string, year: string
; Response: undefined.
; Description: Truck object.
*/
function Truck(model, year){
  // Declare and set the local variables to the parameter values
  this.model = model;
  this.year = year;
}
/*
; Params: none
; Response: undefined.
; Description: Output that the instance of the truck was added to the racetrack.
*/
Truck.prototype.start = function(){
  // Call the console log function to output that the vehicle is on the racetrack.
  console.log("Truck added to the racetrack!");
}

/*
; Params: model: string, year: string, color: string
; Response: undefined.
; Description: Jeep object.
*/
function Jeep(model, year, color){
  // Declare and set the local variables to the parameter values
  this.model = model;
  this.year = year;
  this.color = color;
}
/*
; Params: none
; Response: undefined.
; Description: Output that the instance of the jeep was added to the racetrack.
*/
Jeep.prototype.start = function(){
  // Call the console log function to output that the vehicle is on the racetrack.
  console.log("Jeep added to the racetrack!");
}

/*
; Params: vehicle: object
; Response: undefined.
; Description: Call the defined start function and push the object to the racetrack array.
*/
function driveIt(vehicle){
  // Call the start function on the vehicle passed into the function.
  vehicle.start();
  // Add the vehicle to the racetrack array
  racetrack.push(vehicle);
}

// Call the driveIt function for each declared vehicle
driveIt(toyota);
driveIt(ford);
driveIt(jeep);

// output
// Call the console log function to format the output the header value
console.log("");
console.log("-- The following vehicles have been added to the racetrack --");
// Call the Array forEach function to output the vehicles in the racetrack array
// Call the console log function to output the value.
// Get the name of the object using the constructor name.
racetrack.forEach(vehicle => console.log(`${vehicle.constructor.name}: ${vehicle.model}`))
// end program
