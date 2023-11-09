// index.js - Lab 9 Libraries and jQuery
// Author: Sergio Armenta
// Date: 11/8/2023

//adding buttons to id sections 
$("#challenge").append("<button id = 'button-one'> Special Button");
$("#problems").append("<button id = 'button-two'> Special Button");
$("#results").append("<button id = 'button-three'> Special Button");

//adding event listener to button-one
$("#button-one").click(function() {
    $("#challenge").toggleClass("special");
});

//adding event listener to button-two
$("#button-two").click(function() {
    $("#problems").toggleClass("special");
});

//adding event listener to button-three
$("#button-three").click(function() {
    $("#results").toggleClass("special");
});



