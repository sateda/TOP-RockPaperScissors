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

}

// Function for one round takes two arguments to compare and decides the winner
function playRound(humanChoice, computerChoice) {

}

// Function for one game, has five rounds and declares a winner
function playGame() {

}

/* Game flow goes here */
console.log(getComputerChoice());