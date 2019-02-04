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
    wordList: ['overwatch', 'darksiders', 'slay the spire', 'nantucket', 'dead by daylight', 'total war', 'battletech'],
    answers: [],
    displayAnswer: [], //display correct letter and _
    guessed: [], //holds all guessed letters
    active: false, //determines start text state and entry into game loop
    userInput: "", //Will be assigned on pressing key

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
        this.wordUnderscore();
    },

    //Change word to underscores
    wordUnderscore: function () {
        for (i = 0; i < this.answers.length; i++) {
            if (this.answers.charAt(i) !== " ") {

                this.displayAnswer.push("_")
            } else if (this.answers.charAt(i) === " ") {
                this.displayAnswer.push("-")
            }
            console.log(this.displayAnswer)
            console.log(this.answers)
        }
        docAnswer.textContent = this.displayAnswer.join(" ")
        gameVar.toWin = i;
        console.log(gameVar.toWin)
    },

    //check letters
    checkLetter: function () {

        if (this.guessed.indexOf(this.userInput) == [-1]) {
            console.log(this.userInput)
            for (var i = 0; i < gameVar.answers.length; i++) {

                if (gameVar.answers[i] === this.userInput) {
                    this.displayAnswer[i] = this.userInput
                    docAnswer.textContent = this.displayAnswer.join(" ")
                    gameVar.toWin--;
                }
            }
            //updates guesses
                this.guessed.push(this.userInput);
                this.guessRemaining--;
                guessLeft.textContent = ("Number of Guesses Remaining: " + this.guessRemaining);
                userGuess.textContent = ("Letters already guessed: " + this.guessed.join(" "));


        }
        //Loss check
        if (this.guessRemaining <= 0){
            gameVar.userLose ++;
            loseCount.textContent = ("Losses: " + gameVar.userLose)
            gameVar.active = false;
        }
        //Win check
        if (gameVar.toWin <= 0) {
            gameVar.active = false;
            gameVar.userWins ++;
            winCount.textContent = ("Wins: " + gameVar.userWins)
        }
    }
}


// Player to press a key to begin
document.onkeyup = function (event) {
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

    //First for loop to house the game

    //Second For loop checking guess against answer

    //if guess = letter in word then reveal letter

    //else if letter guessed = nothing

    //else if deduct from guesses and add to guessed

    //else wins ++ end loop

