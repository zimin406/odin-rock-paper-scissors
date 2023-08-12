function getComputerChoice () {
    const choice= Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        default:
            return "Scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    }
    else {
        if (
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Paper") ||
            (playerSelection === "Paper" && computerSelection === "Rock")
        ) {
            return 1;
        }
        else {
            return -1;
        }
    }
}

function capitalize (str) {
    const firstChar = str.charAt(0)
    return str.replace(firstChar, firstChar.toUpperCase());
}


const rockButton = document.querySelector("button.rock-button");
const paperButton = document.querySelector("button.paper-button");
const scissorsButton = document.querySelector("button.scissors-button");
const buttons = document.querySelectorAll("button");
const scoreDisplay = document.querySelector("div.score-display");

let playerSelection = null;
let computerSelection = null;
let score = 0;

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        playerSelection = event.target.textContent;
        computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        switch (result) {
            case 1:
                // User wins
                score++;
                scoreDisplay.textContent = `Score: ${score}`;
                if (score === 5) {
                    scoreDisplay.textContent = "Player Wins!";
                }
                break;
            case -1:
                // User loses
                score--;
                scoreDisplay.textContent = `Score: ${score}`;
                if (score === -5) {
                    scoreDisplay.textContent = "Computer Wins!";
                }
                break;
            default:
                // Tie
        }
    })
});



