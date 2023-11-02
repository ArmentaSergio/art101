// index.js - Lab 6 Arrays and Objects
// Author: Sergio Armenta
// Date: 11/1/2023

//declaring variables

//prompt user to enter his/her nam
var userName = window.prompt("Hello, what is your name?");

//declaring function

/*function that sorts name inputted by user. variable userName is passed as an 
argument to this function. function returns name after being sorted. 
*/
function sortName (name){
    //split string into array
    var nameArray = name.toLowerCase().split('');
    //sort the new array
    var nameArraySort = nameArray.sort();
    //join the array back into a string
    var nameSorted = nameArraySort.join('');

    return nameSorted;
}

function randomName(namee) {
    //spliting a string into an array
    var arrayName = namee.toLowerCase().split(''); 

    //shuffling characters in the array
    //took for-loop code from w3schools 
    for (let i = arrayName.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = arrayName[i];
        arrayName[i] = arrayName[j];
        arrayName[j] = k;
    }
    //joining arraying back into string
    var newName = arrayName.join('');

    return newName;
} 

//output
document.writeln("Hello ", userName, ", it is nice to meet you!", "</br>");
document.writeln("Here is your sorted name: ", sortName(userName), "</br>");
document.writeln("Here is your new name: ", randomName(userName), "</br>");




