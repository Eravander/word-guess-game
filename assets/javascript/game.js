//html variables
var begin = document.getElementById("start"); //display = none during game
var winCount = document.getElementById("wins");
var docAnswer = document.getElementById("word"); //Place underscores here
var userGuess = document.getElementById("guessed"); //guesses
var guessLeft = document.getElementById("guesses"); //number of guesses remaining
var loseCount = document.getElementById("losses");

//Declare game variables
var gameVar = {

    userWins: 0,
    userLose: 0,
    toWin: 0,
    guessRemaining: 13,
    wordList: ['overwatch', 'darksiders', 'slay the spire', 'nantucket', 'dead by daylight', 'total war', 'battletech', 'anthem', 'borderlands'],
    answers: [],
    displayAnswer: [], //display correct letter and _
    guessed: [], //holds all guessed letters
    active: false, //determines start text state and entry into game loop
    userInput: "", //Will be assigned on pressing key
    proceed: false, //var for function to check if key is letter

    //Declare functions
    gameStart: function () {
        this.guessRemaining = 13;
        this.incorrect = [];
        this.correct = [];
        this.displayAnswer = [];
        this.guessed = [];
        //Pick word from array and load word into div _ _ _ _
        var ranNum = Math.floor(Math.random() * this.wordList.length);
        this.answers = this.wordList[ranNum];
        this.toWin = this.answers.length;
        this.wordUnderscore();
    },

    //Change word to underscores
    wordUnderscore: function () {
        for (i = 0; i < this.answers.length; i++) {
            if (this.answers.charAt(i) !== " ") {

                this.displayAnswer.push("_")
            } else if (this.answers.charAt(i) === " ") {
                this.displayAnswer.push("  ")
                this.toWin--;
            }
            console.log(this.displayAnswer)
            console.log(this.answers)
        }
        docAnswer.textContent = this.displayAnswer.join("")
        console.log(gameVar.toWin)
    },

    //check letters
    checkLetter: function () {

        if (this.guessed.indexOf(this.userInput) == [-1]) {
            console.log(this.userInput)
            for (var i = 0; i < gameVar.answers.length; i++) {

                if (gameVar.answers[i] === this.userInput) {
                    this.displayAnswer[i] = this.userInput
                    docAnswer.textContent = this.displayAnswer.join("")
                    gameVar.toWin--;
                }
            }
            //updates guesses
            this.guessed.push(this.userInput);
            this.guessRemaining--;
            guessLeft.textContent = ("Number of Guesses Remaining: " + this.guessRemaining);
            userGuess.textContent = (this.guessed.join(" "));


        }
        //Loss check
        if (this.guessRemaining <= 0 && gameVar.toWin !== 0) {
            gameVar.userLose++;
            loseCount.textContent = ("Losses: " + gameVar.userLose)
            gameVar.active = false;
            begin.style.display = "initial";
            begin.textContent - "You Lost! Press a key to play again!"
        }
        //Win check
        if (gameVar.toWin <= 0) {
            gameVar.active = false;
            gameVar.userWins++;
            winCount.textContent = ("Wins: " + gameVar.userWins)
            begin.style.display = "initial";
            begin.textContent - "You Won! Press a key to play again!"
        }
    },
    // key event to check a letter that's actually a letter
    keyLetter: function () {
        document.onkeyup = function (event) {
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                gameVar.proceed = true;
            }
        }
    }
}


// Player to press a key to begin
document.onkeyup = function (event) {
    // keyLetter();
   
    begin.style.display = "none";
    gameVar.userInput = event.key.toLowerCase();
    //If game is inactive: Begin game
    if (gameVar.active === false) {
        gameVar.gameStart();
        gameVar.active = true;
    }
    //Callback to check letter function which is the meat of the game
   
  
    gameVar.checkLetter();
   

}

    //Implementing check letter function

