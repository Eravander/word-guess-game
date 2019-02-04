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
    guessed: [], //holds all guessed letters
    active: false, //determines start text state and entry into game loop
    userInput: "", //Will be assigned on pressing key

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
            if (this.answers.charAt(i) !== " ") {

                this.displayAnswer.push("_")
            } else if (this.answers.charAt(i) === " ") {
                this.displayAnswer.push("-")
            }
            docAnswer.textContent = this.displayAnswer.join(" ")
            console.log(this.displayAnswer)
            console.log(this.answers)
        }
    },

    //check letters
    checkLetter: function () {
        
            if (this.userInput === this.guessed.indexOf(-1)); {


                for (var i = 0; i < gameVar.answers.length; i++) {
                    //TODO = Have this store and check guessed correct and incorrect answers. NOT run else if duplicate letter is picked
                    if (gameVar.answers[i] !== this.userInput) {
                        this.incorrect.push(this.userInput);
                        this.guessed.push(this.userInput);
                    }
                    //Not even sure I like this, might reduce this to check the input && whether it was guessed
                    else {
                        this.displayAnswer[i] = this.userInput
                        docAnswer.textContent = this.displayAnswer.join(" ")
                        this.correct.push(this.userInput);
                        this.guessed.push(this.userInput);
                        console.log(this.guessed)
                    }
                }
            }
        
    }

}
// Player to press a key to begin
document.onkeyup = function (event) {
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

