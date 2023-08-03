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
        return 0;
    }
    else {
        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")
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

function game() {
    let winCount = 0;
    let loseCount = 0;
    let rounds = parseInt(prompt("Rounds to play:"));
    while(isNaN(rounds)) {
        rounds = parseInt(prompt("Invalid input. Please input again.\nRounds to play:"));
    }
    for(let i = 0; i < rounds; i++) {
        let playerSelection = prompt(`Rock, Paper, Scissors! ${i + 1}th round`).toLowerCase();
        while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            playerSelection = prompt(`Invalid input. Please input again.\nRock, Paper, Scissors! ${i + 1}th round`).toLowerCase();
        }
        const computerSelection = getComputerChoice(); 
        const result = playRound(playerSelection, computerSelection);
        switch(result) {
            case 1:
                console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
                loseCount++;
                break;
            case 1:
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
                winCount++;
                break;
            default:
                console.log(`Tie! You and Computer both selected ${playerSelection}.`);
        }
    }
    console.log(`Win: ${winCount} rounds
Lose: ${loseCount} rounds
Tie: ${rounds - (winCount + loseCount)} rounds`);  
}
