// document.getElementById("greenID").addEventListener("click", myfunction);


// function myfunction() {
//     console.log("helloooooooo");
// }

var audio_green = document.getElementById("AudioGreen"); 
var audio_red = document.getElementById("AudioRed"); 
var audio_yellow = document.getElementById("AudioYellow"); 
var audio_blue = document.getElementById("AudioBlue"); 


function playGreen() {
    audio_green.play();
    // document.getElementById("green-button").style.backgroundColor = "white"
}

function playRed() {
    audio_red.play();
}

function playYellow() {
    audio_yellow.play();
}

function playBlue() {
    audio_blue.play();
}



document.getElementById("green-button").addEventListener("click", playGreen);
document.getElementById("red-button").addEventListener("click", playRed);
document.getElementById("yellow-button").addEventListener("click", playYellow);
document.getElementById("blue-button").addEventListener("click", playBlue);



