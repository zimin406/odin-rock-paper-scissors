function getComputerChoice () {
    const choice= Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! You and Computer both selected ${playerSelection}.`;
    }
    else {
        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")
        ) {
            return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
        }
        else {
            return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
        }
    }
}

function capitalize (str) {
    const firstChar = str.charAt(0)
    return str.replace(firstChar, firstChar.toUpperCase());
}

function game() {
    let rounds = parseInt(prompt("Rounds to play:"));
    while(isNaN(rounds)) {
        rounds = parseInt(prompt("Invalid input. Please input again.\nRounds to play:"));
    }
    for(let i = 0; i < rounds; i++) {
        const playerSelection = prompt(`Rock, Paper, Scissors! ${i + 1}th Round`).toLowerCase(); 
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}
