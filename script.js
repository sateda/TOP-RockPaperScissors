/* Rock Paper Scissors, console game */

// Function that randomly returns "Rock", "Paper", "Scissors"
function getComputerChoice() {
    let computerChoice = undefined; // declare variable
    let getRandomInteger = Math.floor(Math.random() * 3); // Get a random number

    // Define computer choice
    switch(getRandomInteger) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        default:
            console.log(`Error computerChoice: ${getRandomInteger}`);
    }

    return computerChoice;
}

// Function that takes the users choice
function getHumanChoice () {
    let humanChoice = prompt("What's your choice? - Rock, Paper, Scissors"); // set variable with the human choice
    humanChoice = humanChoice.toLowerCase(); // Make the input lowercase to compare to the options

    // Validate the input, if the input is incorrect run the function again
    if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        console.log("Wrong input, please try again.")
        getHumanChoice();
    }
}

// Function for one round takes two arguments to compare and decides the winner
function playRound(humanChoice, computerChoice) {

}

// Function for one game, has five rounds and declares a winner
function playGame() {

}

/* Game flow goes here */
let computerScore = 0;
let humanScore = 0;

playRound(getHumanChoice(), getComputerChoice());