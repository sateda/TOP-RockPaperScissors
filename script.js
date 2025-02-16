/* Rock Paper Scissors, console game */

// Function that randomly returns "Rock", "Paper", "Scissors"
function getComputerChoice() {
    let computerChoice = undefined; // declare variable
    let getRandomInteger = Math.floor(Math.random() * 3); // Get a random number

    // Define computer choice
    switch(getRandomInteger) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            console.log(`Error computerChoice: ${getRandomInteger}`);
    }

    // Return value of computerChoice in lowercase
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
    console.log("You're choice: " + humanChoice); // display you're choice
    console.log("Computers choice: " + computerChoice); // display computers choice

    // Check who wins
    switch(true) {
        case (humanChoice === computerChoice):
            console.log("This is a tie, try again")
            playRound(getHumanChoice(), getComputerChoice()); // play again
            break;
        case (humanChoice === "rock" && computerChoice === "paper"):
            console.log("You lose, paper beat rock!");
            computerScore++;
            break;
        case (humanChoice === "rock" && computerChoice === "scissors"):
            console.log("You win! rock beats scissors.");
            humanScore++;
            break;
        case (humanChoice === "paper" && computerChoice === "scissors"):
            console.log("You lose, scissors beat paper!");
            computerScore++;
            break;
        case (humanChoice === "paper" && computerChoice === "rock"):
            console.log("You win! paper beats rock.");
            humanScore++;
            break;
        case (humanChoice === "scissors" && computerChoice === "rock"):
            console.log("You lose, rock beat scissors!");
            computerScore++;
            break;
        case (humanChoice === "scissors" && computerChoice === "paper"):
            console.log("You win! scissors beats paper.");
            humanScore++;
            break;
        default:
            console.log("some error occurred?");
    }
}

// Function for one game, has five rounds and declares a winner
function playGame() {

}

/* Game flow goes here */
let computerScore = 0;
let humanScore = 0;

playRound(getHumanChoice(), getComputerChoice());