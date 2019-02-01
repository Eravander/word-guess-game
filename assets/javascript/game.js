//html variables
var begin = document.getElementById("start"); //display = none during game
var winCount = document.getElementById("wins");
var docAnswer = document.getElementById("word"); //Place underscores here
var userGuess = document.getElementById("guessed"); //append incorrect letters
var guessLeft = document.getElementById("guesses"); //number of guesses remaining

//Declare game variables
var gameVar = {

    userWins: 0,
    guessRemaining: 10,
    wordList: ['overwatch', 'darksiders', 'slay the spire', 'nantucket', 'dead by daylight', 'total war', 'battletech'],
    answers: "",
    displayAnswer: [], //display correct letter and _
    incorrect: [], //display incorrect guess
    correct: [], //hold correct guesses so user can't repeat them
    active: false, //determines start text state and entry into game loop

    //Declare functions
    gameStart: function () {
        this.guessRemaining = 10;
        this.incorrect = [];
        this.correct = [];
        this.displayAnswer = [];
        //Pick word from array and load word into div _ _ _ _
        var ranNum = Math.floor(Math.random() * this.wordList.length);
        this.answers = this.wordList[ranNum];
        this.wordUnderscore();
    },

    //Change word to underscores
    wordUnderscore: function () {
        for (i = 0; i < this.answers.length; i++) {
            this.displayAnswer.push("_")

        }
        docAnswer.textContent = this.displayAnswer.join(" ")

    }
}
// Player to press a key to begin
document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();
    //If game is inactive: Begin game
    if (gameVar.active === false) {
        gameVar.gameStart();
        gameVar.active = true;
    } //ToDo set else (if?) to get into game


    //First for loop to house the game

    //Second For loop checking guess against answer

    //if guess = letter in word then reveal letter

    //else if letter guessed = nothing

    //else if deduct from guesses and add to guessed

    //else wins ++ end loop

}