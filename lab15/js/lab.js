// index.js - Lab  15 AJAX
// Author: Sergio Armenta
// Date: 12/01/2023


//function for an endpoint because star wars api has mulitple pages (4)
function findEndpoint(){
     var ENDPOINT;
    //generating a number between 0-3
    var endpoints = Math.floor(Math.random() * 3);

    //conditional because there are multiple endpoints
    if(endpoints == 0){
        ENDPOINT = "https://swapi.dev/api/starships/";
    }
    else if(endpoints == 1){
        ENDPOINT = "https://swapi.dev/api/starships/?page=2";
    }
    else if(endpoints == 2){
        ENDPOINT = "https://swapi.dev/api/starships/?page=3";
    }
    else if(endpoints == 3){
        ENDPOINT = "https://swapi.dev/api/starships/?page=4";
    }   

    return ENDPOINT;
}

//event listener
$("#activate").click(function () {
    //ajax
    $.ajax({
        "url": findEndpoint(),
        "dataType": "json",
        "type": "GET",

        //success/failure
        "success": function (data) {
            console.log(data);

            //generating a random number between 1-10
            var shipIndex = Math.floor(Math.random() * 11);

            //extracting results
            //var starship = data.results[shipIndex].name; 
            var starship = JSON.stringify(data.results[shipIndex]);
            //adding to output div
            $("#output").append("<ul><li>" + starship + "</li></ol>");
        },

        error: function () {
            console.log("There is an error. It may be due to the fact that page 4 of the api only has 6 elements in the array instead of 10 which all other 3 endpoints have.")
            $("#output").append("<p>There is an error. It may be due to the fact that page 4 of the api only has 6 elements in the array instead of 10 which all other 3 endpoints have.</p>");
        }
    })
})
