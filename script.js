let computerScore = 0;
let humanScore = 0;

function choiceConvert(stringToConvert) {
    let formattedString = stringToConvert.toLowerCase().replace(/[^a-z]/g, "");

    return formattedString;
}

function getComputerChoice() {
    let choice = Math.round(Math.random() * 100) / 100;
    let computerPick;
    if(choice <= 0.33) {
        computerPick = "Rock";
    }
    else if(choice <= 0.66) { 
        computerPick = "Paper";
    }
    else {
        computerPick = "Scissors";
    }

    let formattedComputerPick = choiceConvert(computerPick);
    return formattedComputerPick;
}
console.log(getComputerChoice());

function getHumanChoice($choice) {
    let choice = prompt("Choose between Rock, Paper, or Scissors");
    let formattedChoice = choiceConvert(choice);
    console.log(formattedChoice);
    return formattedChoice;
}

function playRound(humanChoice, computerChoice) {
    if(humanSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! " + computerSelection + " beats " + humanSelection + "!");
    }
    else if(humanSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! " + computerSelection + " beats " + humanSelection + "!");
    }
    else if(humanSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! " + computerSelection + " beats " + humanSelection + "!");
    }
    else if(humanSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! " + humanSelection + " beats " + computerSelection + "!");
    }
    else if(humanSelection === "paper" && computerSelection === "rock") {
        console.log("You win! " + humanSelection + " beats " + computerSelection + "!");
    }
    else if(humanSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! " + humanSelection + " beats " + computerSelection + "!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);