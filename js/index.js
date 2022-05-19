// document.getElementById("greenID").addEventListener("click", myfunction);


// function myfunction() {
//     console.log("helloooooooo");
// }

var audio_green = document.getElementById("AudioGreen"); 
var audio_red = document.getElementById("AudioRed"); 
var audio_yellow = document.getElementById("AudioYellow"); 
var audio_blue = document.getElementById("AudioBlue"); 
var audio_wrong = document.getElementById("AudioWrong"); 

function returnColor() { element.style.backgroundColor = current_color}

// let test = document.getElementById("green-button").style.backgroundColor;
// document.getElementById("text-area").innerHTML = test;

// let test = document.getElementById("green-button");
// let cssObj= window.getComputedStyle(test, null);
// let bgColor = cssObj.getPropertyValue("background-color");
// console.log(bgColor)

// the play audio function takes the color as parameter
function playAudio(color) {

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
}

// a function that returns the background color of an element by its id
function getBackgroundColor(id) {
    let element = document.getElementById(id);
    let cssObj= window.getComputedStyle(element, null);
    let bgColor = cssObj.getPropertyValue("background-color");
    return bgColor;
}


// displayEffects is for the users when they click on the box
function displayEffects(color) {

    // play audio
    playAudio(color);

    let element = document.getElementById(color);
    let bgColor = getBackgroundColor(color);

    //showing effects by changing the following
    element.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    element.style.boxShadow =  "0 16px 32px 0 rgba(255, 255, 255, 0.8)";

    // returning to the initial state
    setTimeout(function(){
        element.style.backgroundColor = bgColor;
        element.style.boxShadow = null;
    } ,200)

    //hideBloc(color);
}

// the hideBloc function is when to game prompt a new sound
// this function will display a hide bloc for a few milliseconds
// this function basically will display the backgroung color of the bloc
// to be the same as the backgroung color of the body
function hideBloc(color) {
    // First, play audio
    playAudio(color);

    //the showing effects part:

    //getting the background color of the body
    let body_bgColor = getBackgroundColor("body");
    //console.log(body_bgColor);

    //getting the background color of this bloc/square
    let bgColor = getBackgroundColor(color);

    //showing effects part:
    let element = document.getElementById(color);
    element.style.backgroundColor = body_bgColor;

    //returning to initial state
    setTimeout(function(){
        element.style.backgroundColor = bgColor;
    },200)
    
    
}


hideBloc("green");

document.getElementById("green").addEventListener("click", function(){displayEffects('green')});
document.getElementById("red").addEventListener("click", function(){displayEffects('red')});
document.getElementById("yellow").addEventListener("click", function(){displayEffects('yellow')});
document.getElementById("blue").addEventListener("click", function(){displayEffects('blue')});


// a function that returns an integer random number between 0 and 3
function getRandomInt() {
    return Math.floor(Math.random() * 4);
  }


function play() {
    const colors = ['green', 'red', 'yellow', 'blue']
    const sequence = [];
    
    level = 0;
    while (true) {
        let random = getRandomInt();
        console.log(random);
        let color = colors[random];
        console.log(color);
        sequence[level] = color;
        level++;
        console.log(level);
        hideBloc(color);
        while (true){
            document.getElementById(color).addEventListener("click", function(){displayEffects(color)});
        }
        break;
    }
}

play();