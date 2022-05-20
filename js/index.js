// declaring audio variales store the audio tracks
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

// displayEffects function: this function will handle displaying effects as well as handling the logic/flow of the game
// it got called whenever the user clicks on any square/color
// so it's added to the event listener- check event listener part
function displayEffects(color) {

    // play audio
    playAudio(color);


    //storing the square/bloc/color 'element' that we are at 
    let element = document.getElementById(color);
    //store the background color for that square
    let bgColor = getBackgroundColor(color);

    //showing effects by changing the following
    element.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    element.style.boxShadow =  "0 16px 32px 0 rgba(255, 255, 255, 0.8)";


    // returning to the initial state for the shadow and the background color
    setTimeout(function(){
        element.style.backgroundColor = bgColor;
        element.style.boxShadow = null;
    } ,200)

    //Adding the color to the user_sequence array
    user_sequence.push(color);
    //console.log(user_sequence);

    //checking the answer of the user
    //first thing check each try
    //secondly when the user finishes all the steps we need to check the tries before jumping in to the next level
    //otherwise a game over will be prompted
    //so for now lets handle this by checking the two arrays where are storing the steps
    if (user_sequence.length === sequence.length) {
        //calling the validate answer function
        if (validate()) {
            //if true
            //increment level
            level++;
            //print level to html
            printLevel();

            //prompting a new color [using the setTimeout function in order to have some time]
            setTimeout(function(){prompt()} ,600);

            //reseting/clear the user_sequence array
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

// the hideBloc function is when the game prompt a new sound
// this function will display a hide bloc for a few milliseconds
// this function basically will display the backgroung color of the bloc
// to be the same as the backgroung color of the body. This is how it's gonna work
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

    //show display- check hidebloc(color) function
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

//print game_over function
function printGameOver () {
    let h1 = document.getElementById("text-area");
    h1.innerHTML = "Game Over!";

    let body_html = document.getElementById("body");
    body_html.style.backgroundColor = "red";

    audio_wrong.play();
}

//Add the start game function
function start() {
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


//Event listeners for the four buttons/blocs that we have
    document.getElementById("green").addEventListener("click", function(){displayEffects('green')});
    document.getElementById("red").addEventListener("click", function(){displayEffects('red')});
    document.getElementById("yellow").addEventListener("click", function(){displayEffects('yellow')});
    document.getElementById("blue").addEventListener("click", function(){displayEffects('blue')});

document.getElementById("start").addEventListener("click", function(){start()});