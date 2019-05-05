/*
============================================
; Title: Exercise 3.2
; Author: Troy Martin
; Date: 05/04/2019
; Modified By: Troy Martin
; Description: The Factory Pattern
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 3.2"));
console.log("");

/*
 Expected output:

 Troy Martin
 Exercise 3.2
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// declaration and assignment
/*
; Params: {username: string, password: string, server: string}
; Response: undefined
; Description: Definition of Postgres database class
*/
function Postgres(properties) {
  // declare the properties for the class, include defaults if a value is not provided in the properties argument
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}
/*
; Params: {username: string, password: string, server: string, version: number}
; Response: undefined
; Description: Definition of MySql database class
*/
function MySql(properties) {
  // declare the properties for the class, include defaults if a value is not provided in the properties argument
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}
/*
; Params: {username: string, password: string, server: string, version: number}
; Response: undefined
; Description: Definition of Oracle database class
*/
function Oracle(properties) {
  // declare the properties for the class, include defaults if a value is not provided in the properties argument
  this.username = properties.username || "scott";
  this.password = properties.password || "tiger";
  this.server = properties.server || "localhost:1521";
  this.version = properties.version || 10.2;

  /*
  ; Params: none
  ; Response: string
  ; Description: Output the description of the database
  */
  this.toString = function(){
    // Use string interpolation to output the description, tabs affect output so format adjusted to handle this properly
    return `Oracle {
  username: '${this.username}',
  password: '${this.password}',
  server: '${this.server}',
  version: '${this.version}',
}`;
  }
}
/*
; Params: {username: string, password: string, server: string}
; Response: undefined
; Description: Definition of Informix database class
*/
function Informix(properties) {
  // declare the properties for the class, include defaults if a value is not provided in the properties argument
  this.username = properties.username || "dba";
  this.password = properties.password || "developer";
  this.server = properties.server || "localhost:1526";

  /*
  ; Params: none
  ; Response: string
  ; Description: Output the description of the database
  */
  this.toString = function(){
    // Use string interpolation to output the description, tabs affect output so format adjusted to handle
    return `Informix {
  username: '${this.username}',
  password: '${this.password}',
  server: '${this.server}'
}`;
  }
}

/*
; Params: none
; Response: undefined
; Description: Definition of the factory function
*/
function DatabaseFactory() {}

// Declare the databaseClass property on the factory prototype and default to MySql
DatabaseFactory.prototype.databaseClass = MySql;
/*
; Params: {databaseType: string, username: string, password: string, server: string, version: number}
; Response: {username: string, password: string, server: string, version: number}
; Description: Definition of the method to create a type of database based on properties
*/
DatabaseFactory.prototype.createDatabase = function(properties) {

  // Using the switch statement select the type of database class based on the databaseType
  switch(properties.databaseType){
    case "Postgres":
      this.databaseClass = Postgres;
      break;
    case "Oracle":
      this.databaseClass = Oracle;
      break;
    case "Informix":
      this.databaseClass = Informix;
      break;
    default:
      this.databaseClass = MySql;
      break;
  }

  // return the new instance of the database based on the properties
  return new this.databaseClass(properties);
};

// Declare a new factory to create Postgres databases
var postgresFactory = new DatabaseFactory();
// Declare a postgres database by calling the createDatabase method of the factory and passing in the properties
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
// Declare a mySql database by calling the createDatabase method of the factory and passing in the properties
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

var oracleFactory = new DatabaseFactory();
// Declare a oracle database by calling the createDatabase method of the factory and passing in the properties
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "test",
  password: "M@yTh3F0urthB3WithY0u!",
  server: "oma-martin-orc:1521",
  version: "10g"
});

var informixFactory = new DatabaseFactory();
// Declare a informix database by calling the createDatabase method of the factory and passing in the properties
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "ifx",
  password: "M@yTh3F0urthB3WithY0u!",
  server: "oma-martin-ifx:1526"
});


// output

// call the console log function to output the results of the oracle toString function
console.log(oracle.toString());
// call the console log function to output a blank line for formatting
console.log("")
// call the console log function to output the results of the informix toString function
console.log(informix.toString());

// end program
