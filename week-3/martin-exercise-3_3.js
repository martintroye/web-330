/*
============================================
; Title: Exercise 3.3
; Author: Troy Martin
; Date: 05/04/2019
; Modified By: Troy Martin
; Description: The Singleton Pattern
;===========================================
*/
// start program
// Require statement that imports the header.js file from my root directory.
const header = require("../header.js");
// Call the console.log() function and output a well-formatted header with a line feed
console.log(header.display("Troy", "Martin", "Exercise 3.3"));
console.log("");

/*
 Expected output:

 Troy Martin
 Exercise 3.3
 <Today's Date>

 Same database instance? true

*/

// variable declaration and assignment
// declare the class
var DatabaseSingleton = (function() {
  var instance;
  /*
  ; Params: none
  ; Response: object
  ; Description: Create an instance of the object
  */
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    /*
    ; Params: none
    ; Response: object
    ; Description: Get the instance of the object
    */
    getInstance: function() {
      // if the class property instance is not defined call the createInstance function to set it otherwise it will return the existing value
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  };
})();

/*
; Params: none
; Response: undefined
; Description: Output the results of the singleton
*/
function databaseSingletonTest() {
  // Call the getInstance function to set the sqlServer variable
  let sqlServer = DatabaseSingleton.getInstance();
  // Call the getInstance function to set the mySql variable
  let mySql = DatabaseSingleton.getInstance();
  // call the console log function to output the results of the comparison of the objects
  console.log(`Same database instance? ${(sqlServer === mySql)}`);
}

// output
// call the function to output the results
databaseSingletonTest();

// end program
