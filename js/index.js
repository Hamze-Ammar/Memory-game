// document.getElementById("greenID").addEventListener("click", myfunction);


// function myfunction() {
//     console.log("helloooooooo");
// }

var audio_green = document.getElementById("AudioGreen"); 
var audio_red = document.getElementById("AudioRed"); 
var audio_yellow = document.getElementById("AudioYellow"); 
var audio_blue = document.getElementById("AudioBlue"); 
var audio_wrong = document.getElementById("AudioWrong"); 

//declaring the sequence array that will record the prompted colors by the game 
var sequence = [];

// declaring the user_sequence array that will record the prompted colors by the user
var user_sequence = [];

//declaring the level variale that keeps track of the level
var level = 0;




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

    
    //Adding the color to the user_sequence array
    user_sequence.push(color);
    //console.log(user_sequence);

    //checking the answer of the user
    //but we dont wanna check before the user finishes the steps
    //in order to achieve that we are not going to validate after the length of user_sequence reaches the length of the sequence array
    if (user_sequence.length === sequence.length) {
        if (validate()) {
            //if true
            //increment level
            level++;
            //print level to html
            printLevel();

            //prompting a new color using the setTimeout function in order to have some time
            setTimeout(function(){prompt()} ,600);


            //reseting/clear the user_sequence
            user_sequence = [];
        } else {
            printGameOver();
        }
    }
    //if the user havent finished yet so length of the two arrays 
    //that keeps the sequence is not equal
    //we need only to check if the user has already broken the sequence or not
    else{
        //example sequence = ["green", "red", "yellow"]
        //user_sequence = ["green", "red"]
        //we only need to check the first two elements in both arrays
        var length_of_clicks = user_sequence.length;
        for (let i=0 ; i < length_of_clicks ; i++ ){
            if (user_sequence[i] !== sequence[i]){
                printGameOver();
            }
        }

    } 
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




// a function that returns an integer random number between 0 and 3
function getRandomInt() {
    return Math.floor(Math.random() * 4);
  }



//This function is responsible of prompting a new bloc to the user
function prompt() {
    const colors = ['green', 'red', 'yellow', 'blue'];
    
    //Choosing a random color from the list
    let random = getRandomInt();
    //console.log(random);
    let color = colors[random];
    //console.log(color);

    //adding the color that was prompted to the array 'sequence' to keep tracking
    sequence.push(color);



    //console.log(level);

    //show display- hide the color and play audio and reset the color, check hidebloc(color) function
    hideBloc(color);

}

// a function that prints the level inside the html h1
function printLevel() {
    
    let string = `Level ${level}`;
    let h1 = document.getElementById("text-area");
    h1.innerHTML = string;

}




//defining a function that checks the validity of the user respond
function validate() {
    //we need to check if the sequence of the user matches the sequence of the game
    if (sequence === user_sequence) return true;
    if (sequence == null || user_sequence == null) return false;
    if (sequence.length !== user_sequence.length) return false;
  
  
    for (var i = 0; i < sequence.length; ++i) {
      if (sequence[i] !== user_sequence[i]) return false;
    }
    return true;
}


//print game over function
function printGameOver () {
    let h1 = document.getElementById("text-area");
    h1.innerHTML = "Game Over!";

    let body_html = document.getElementById("body");
    body_html.style.backgroundColor = "red";
    audio_wrong.play();
}


//Add the start game function
function start() {
    //press enter to start?
    //reseting the sequence arrays and the level
    sequence = [];
    user_sequence = [];
    level = 0;

    //reseting the background color of the body just in case
    let body_bgColor = document.getElementById("body");
    body_bgColor.style.backgroundColor = "rgba(1, 51, 26, 0.842)";


    printLevel();
    prompt();
}

//reseting function, clear the arrays, reset the level
// function reset() {
//     sequence = [];
//     user_sequence = [];
//     level = 0;
// }




document.getElementById("green").addEventListener("click", function(){displayEffects('green')});
document.getElementById("red").addEventListener("click", function(){displayEffects('red')});
document.getElementById("yellow").addEventListener("click", function(){displayEffects('yellow')});
document.getElementById("blue").addEventListener("click", function(){displayEffects('blue')});

document.getElementById("start").addEventListener("click", function(){start()});

