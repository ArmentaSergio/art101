// index.js - Lab 9 Libraries and jQuery
// Author: Sergio Armenta
// Date: 11/15/2023

// Generates an anagram of a given string.
// credit to ChatGPT/Professor's javascript source from his lab 11
function anagram(inputString) {
    // Convert the string to an array of characters
    const charArray = inputString.split('');
   
    // Use the Fisher-Yates (Knuth) shuffle algorithm to shuffle the characters
    for (let i = charArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }
   
    // Join the shuffled characters back into a string
    const anagram = charArray.join('');
   
    // Return the generated anagram
    return anagram;
   }
   
   // given a string, return string in Title Case
   // credit to ChatGPT
   String.prototype.toTitleCase = function() {
     return this.replace(/\w\S*/g, function(txt) {
       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
     });
   };

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

//event listener for sort
$("#sort").click(function() {
    //get value from input field
    const name = $("#user-name").val();
    //sorting input
    usernameSorted = sortString(name);
    //appending new div to output div
    $("#output").html("<div class = 'text'><p>" + usernameSorted + "</p></div>")
});

//event listener for shuffle
$("#shuffle").click(function() {
    //get value from input field
    const name = $("#user-name").val();
    //sorting input
    userNameAnagram = anagram(name);
    //appending new div to output div
    $("#output").html("<div class = 'text'><p>" + userNameAnagram + "</p></div>")
});