// index.js - Lab  13 Loops
// Author: Sergio Armenta
// Date: 11/22/2023

//for loop function that list numbers between 1 and 200. 
function fizzBuzz () {
    console.log("the function is being displayed");
    var oneLongString = "";

    for (i=1; i <= 200; i++) {
        //checking if number is a multiple of of 3 and 5
        if(i%105 == 0) {
            console.log("FIZZBUZZBOOM"); 
            oneLongString += i + "FizzBuzzBoom"; 
            }
        //checking if number is a multiple of 3 and 7
        else if(i%35 == 0) {
            console.log("BUZZBOOM");
            oneLongString += i + "BuzzBoom";
            }
        //checking if number is a multiple of 5 and 7
        else if(i%21 == 0) {
            console.log("FIZZBOOM"); 
            oneLongString += i + "FizzBoom"; 
        }
        //checking if number is a multiple of 3, 5, and 7
         else if(i%15 == 0) {
            console.log("FIZZBUZZ");
            oneLongString += i + "FizzBuzz";
            }
        //checking if number is a multiple of three
        else if (i%3 == 0) {
            console.log("FIZZ");
            oneLongString += i +"Fizz";    
        } 
        //checking if number is a multiple of five
        else if (i%5 == 0) {
            console.log("BUZZ");
            oneLongString += i + "Buzz";
        } 
        //checking if number is a multiple of seven
        else if (i%7 == 0) {
            console.log("BOOM");
            oneLongString += i + "Boom";
        }
        else {
            console.log(i);
        }
    }    
    return oneLongString;
}

//displaying results
//event listener for button 
$("#button").click(function () {
    $("#output").html("<div class = 'text'><p id = loop>" + fizzBuzz() + "</p></div?");
});