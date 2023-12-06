// index.js - Lab 16 JSON and APIs
// Author: Sergio Armenta
// Date: 12/06/2023


var preURL = "https://xkcd.com/";
var postURL = "info.0.json";


//a helper function 
function make_safe(str) {
    return str.replace(/'/g, '&apos;').replace(/"/g, "&qout;");
}

function getComic(num) {
    var numStr;
    if (typeof num === 'undefined') {
        numStr = "";
    }
    else {
        numStr = num.toString() + "/";
    }
    var URL = preURL + numStr + postURL;

    const comicObj = {
        url: URL,
        methods: "GET",
        dataType: "json",
        success: ajaxSuccess,
        error: ajaxError
    }

    $.ajax(comicObj);
}

//event listener
$("#my-button").click(function () {
    const comicObj = {
        url: URL,
        methods: "GET",
        dataType: "json",
        success: ajaxSuccess,
        error: ajaxError
    }

    $.ajax(comicObj);
})

function ajaxSuccess(data) {
    console.log(data);

    //extracting results
    var title = data.title;
    title = make_safe(title);
    var img = data.img;
    img = make_safe(img);
    var day = data.day;
    day = make_safe(day);
    var month = data.month;
    month = make_safe(month);
    var year = data.year;
    year = make_safe(year);
    var alt = data.alt;
    alt = make_safe(alt);
    var comicNum = data.num;

    var html = `<h3><u>${title} - ${month}/${day}/${year}</u></h3>
    <img src="${img}" title="${alt}"><br></br>
    <button id="previous">Previous</button> <button id="next">Next</button>`;

    //output
    $("#output").html(html);

    //button event listener
    $("#previous").click(function () {
        getComic(comicNum - 1)
    })

    $("#next").click(function () {
        getComic(comicNum + 1)
    })

}

function ajaxError(request, error) {
    console.log("Error", request, error);
}

getComic();