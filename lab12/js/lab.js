// index.js - Lab  12 Conditionals
// Author: Sergio Armenta
// Date: 11/22/2023

//sort function 
//takes a string as an argument and returns a string
function sortingHat(str) {
    console.log("You are being sorted in a house.");
    
    //getting length of argument string
    var numLetters = str.length;
    
    var mod = numLetters % 4;

    //conditional expression 
    if(mod == 0) {
        return "Gryffindor";
    }
    else if (mod == 1) {
        return "Ravenclaw";
    }
    else if (mod == 2) {
        return "Slytherin";
    }
    else if (mod == 3) {
        return "Hufflepuff";
    }
}

//event listener for button
//displays results in output
$("#button").click(function () {
    //getting value from input
    const name = $("#input").val();
    house = sortingHat(name);
    $("#output").html("<div id = 'text'><p> The Sorting Hat has sorted you into " + house + "!</p></div>");
});
