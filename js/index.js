// document.getElementById("greenID").addEventListener("click", myfunction);


// function myfunction() {
//     console.log("helloooooooo");
// }

var audio_green = document.getElementById("AudioGreen"); 
var audio_red = document.getElementById("AudioRed"); 
var audio_yellow = document.getElementById("AudioYellow"); 
var audio_blue = document.getElementById("AudioBlue"); 

function returnColor() { element.style.backgroundColor = current_color}

// let test = document.getElementById("green-button").style.backgroundColor;
// document.getElementById("text-area").innerHTML = test;

// let test = document.getElementById("green-button");
// let cssObj= window.getComputedStyle(test, null);
// let bgColor = cssObj.getPropertyValue("background-color");
// console.log(bgColor)

function playAudio(color) {

    // play audio
    if (color === "green") {
        audio_green.play();
    }
    else if (color === "red") {
        audio_red.play();
    }
    else if (color ==="yellow") {
        audio_yellow.play();
    }
    else if (color === "blue") {
        audio_blue.play();
    }



    let element = document.getElementById(color);
    let cssObj= window.getComputedStyle(element, null);
    let bgColor = cssObj.getPropertyValue("background-color");

    element.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    element.style.boxShadow =  "0 16px 32px 0 rgba(255, 255, 255, 0.8)";

    setTimeout(function(){
        element.style.backgroundColor = bgColor;
        element.style.boxShadow = null;

    } ,200)
}



document.getElementById("green").addEventListener("click", function(){playAudio('green')});
document.getElementById("red").addEventListener("click", function(){playAudio('red')});
document.getElementById("yellow").addEventListener("click", function(){playAudio('yellow')});
document.getElementById("blue").addEventListener("click", function(){playAudio('blue')});



