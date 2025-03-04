/* Declare variables */
let computerScore = 0;
let humanScore = 0;

// Display score values
document.querySelector("#score").innerHTML = "Human: " + humanScore + " Computer: " + computerScore;


const choice = document.querySelector("#choices");
choice.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'rock':
            playRound("rock", getComputerChoice());
            break;
        case 'scissors':
            playRound("scissors", getComputerChoice());
            break;
        case 'paper':
            playRound("paper", getComputerChoice());
            break;
    }    
});

// Function that randomly returns "Rock", "Paper", "Scissors"
function getComputerChoice() {
    let computerChoice = undefined;
    let getRandomInteger = Math.floor(Math.random() * 3);

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

// Function for one round takes two arguments to compare and decides the winner
function playRound(humanChoice, computerChoice) {  
    const resultSelector = document.querySelector("#result");
    const result = document.createElement("p");

    // Check who wins
    switch(true) {
        case (humanChoice === computerChoice):
            result.textContent = "This is a tie, try again";
            break;
        case (humanChoice === "rock" && computerChoice === "paper"):
            result.textContent = "You lose, paper beat rock!";
            computerScore++;
            break;
        case (humanChoice === "rock" && computerChoice === "scissors"):
            result.textContent = "You win! rock beats scissors.";
            humanScore++;
            break;
        case (humanChoice === "paper" && computerChoice === "scissors"):
            result.textContent = "You lose, scissors beat paper!";
            computerScore++;
            break;
        case (humanChoice === "paper" && computerChoice === "rock"):
            result.textContent = "You win! paper beats rock";
            humanScore++;
            break;
        case (humanChoice === "scissors" && computerChoice === "rock"):
            result.textContent = "You lose, rock beat scissors!";
            computerScore++;
            break;
        case (humanChoice === "scissors" && computerChoice === "paper"):
            result.textContent = "You win! scissors beats paper";
            humanScore++;
            break;
        default:
            console.log("some error occurred?");
            result.textContent = "some error occurred?";
    }

    document.querySelector("#score").innerHTML = "Human: " + humanScore + " Computer: " + computerScore;
    resultSelector.appendChild(result);

    if(humanScore === 5) {
        document.querySelector("#score").innerHTML = "The human Wins the game!!!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        document.querySelector("#score").innerHTML = "The Computer wins the game!!!";
        humanScore = 0;
        computerScore = 0;
    }
}

