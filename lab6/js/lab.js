// index.js - Lab 6 Arrays and Objects
// Author: Sergio Armenta
// Date: 10/26/2023

// Constants

// Functions

//declare variables
var myTransport = [
  "legs", "bus", "bike", "1995 Ford Taurus with recently repaired waterpump"
];

var myMainRide = {
  make: "Schwinn",
  model: "leToure",
  color: "gold",
  year: 1979,
  extras: "fixies, Brookes saddle"
};

//print
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
