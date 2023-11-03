// index.js - Lab 8 Anon Functions and Callbacks
// Author: Sergio Armenta
// Date: 11/3/2023

//declaring variables/array
numbersArray = [3, 6, 9, 12, 15];
//displaying array
console.log("Here is the array: ", numbersArray);

//declaring functinos 
function cubeNumbers (x) {
    return x ** 3;
}

//testing function by passing elements from the array
cubeNumbers(numbersArray[1]);
cubeNumbers(numbersArray[2]);

//map 
var resultOne = numbersArray.map(cubeNumbers);
console.log("Here are the numbers from the array cubed: ", resultOne);

//map with anon function 
var resultTwo = numbersArray.map(function(x) {
    return x * Math.PI;
})
console.log("Here are the numbers from the array mulitplied by PI: ", resultTwo);




