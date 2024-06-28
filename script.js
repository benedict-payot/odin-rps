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
    if(choice === null) {
        return;
    }
    let formattedChoice = choiceConvert(choice);
    console.log(formattedChoice);
    return formattedChoice;
}

function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
        if(humanSelection === "rock" && computerSelection === "paper") {
            console.log("You lose! " + computerSelection + " beats " + humanSelection + "!");
            computerScore++;
        }
        else if(humanSelection === "paper" && computerSelection === "scissors") {
            console.log("You lose! " + computerSelection + " beats " + humanSelection + "!");
            computerScore++;
        }
        else if(humanSelection === "scissors" && computerSelection === "rock") {
            console.log("You lose! " + computerSelection + " beats " + humanSelection + "!");
            computerScore++;
        }
        else if(humanSelection === "rock" && computerSelection === "scissors") {
            console.log("You win! " + humanSelection + " beats " + computerSelection + "!");
            humanScore++;
        }
        else if(humanSelection === "paper" && computerSelection === "rock") {
            console.log("You win! " + humanSelection + " beats " + computerSelection + "!");
            humanScore++;
        }
        else if(humanSelection === "scissors" && computerSelection === "paper") {
            console.log("You win! " + humanSelection + " beats " + computerSelection + "!");
            humanScore++;
        }

    }

    let getWinner = ""; 
    for(round = 0; round <=4; round++) {
        playRound(humanSelection, computerSelection);
        console.log(computerScore);
        console.log(humanScore);
        console.log(getWinner);
    }

    getWinner = Math.max(computerScore, humanScore);
}


playGame();