// index.js - Hello World experiment 
// Author: Sergio Armenta
// Date: 11/15/2023

console.log("Javascript is working");

//slecting button element, prompting user to input string, modifying header 1 from html
$("#my-button").click(function() {
    console.log("The Button is working");
    var name = prompt("Name please: ");
    $("#title").html("Hello " + name);
});